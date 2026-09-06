#!/usr/bin/env python3
"""Two asset fixes for the forest view, measured rather than guessed.

Both problems are in the .glb files, not in the rendering code:

1. neem_tree.glb carries three GPU-instanced leaf-cluster meshes at 1,001
   instances each. The clusters are 910 and 1,130 triangles apiece, so one neem
   draws 2,265,844 triangles. At 17 neems that is 38.5M of the scene's 43.3M
   triangles -- 89% of everything, for 34% of the trees. Thinning the instance
   count is the only lever that does not require a mesh simplifier: instances
   are subsampled on an even stride so the canopy thins uniformly instead of
   losing a whole side.

2. red_rose.glb ships three 4096x4096 textures -- 256 MB of GPU memory once
   decompressed, 73% of the scene's entire texture budget, for the smallest
   object in the view (1.45 m tall, at the centre of a 68 m grove).

Writes alongside the originals as <name>.opt.glb and prints before/after.
Nothing is overwritten; swapping them in is a separate, deliberate step.

Usage:
  python3 scripts/optimize-forest-glb.py                # report only
  python3 scripts/optimize-forest-glb.py --apply        # write .opt.glb files
  python3 scripts/optimize-forest-glb.py --apply --keep 300 --tex 1024
"""
import argparse
import io
import json
import os
import struct
import sys
from pathlib import Path

MODELS = Path('public/models')
JSON_CHUNK = 0x4E4F534A
BIN_CHUNK = 0x004E4942

COMPONENT_SIZE = {5120: 1, 5121: 1, 5122: 2, 5123: 2, 5125: 4, 5126: 4}
NUM_COMPONENTS = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4,
                  'MAT2': 4, 'MAT3': 9, 'MAT4': 16}


def read_glb(path):
    data = open(path, 'rb').read()
    if data[:4] != b'glTF':
        raise SystemExit(f'{path}: not a GLB')
    offset = 12
    gltf, binary = None, b''
    while offset < len(data):
        clen, ctype = struct.unpack('<II', data[offset:offset + 8])
        chunk = data[offset + 8:offset + 8 + clen]
        if ctype == JSON_CHUNK:
            gltf = json.loads(chunk)
        elif ctype == BIN_CHUNK:
            binary = chunk
        offset += 8 + clen
    return gltf, binary


def write_glb(path, gltf, binary):
    js = json.dumps(gltf, separators=(',', ':')).encode('utf-8')
    js += b' ' * ((4 - len(js) % 4) % 4)
    bn = binary + b'\x00' * ((4 - len(binary) % 4) % 4)
    total = 12 + 8 + len(js) + 8 + len(bn)
    with open(path, 'wb') as f:
        f.write(b'glTF' + struct.pack('<II', 2, total))
        f.write(struct.pack('<II', len(js), JSON_CHUNK) + js)
        f.write(struct.pack('<II', len(bn), BIN_CHUNK) + bn)


def accessor_bytes(gltf, binary, index):
    """Raw bytes for one accessor, de-interleaved into tight element order."""
    acc = gltf['accessors'][index]
    bv = gltf['bufferViews'][acc['bufferView']]
    elem = COMPONENT_SIZE[acc['componentType']] * NUM_COMPONENTS[acc['type']]
    stride = bv.get('byteStride') or elem
    base = bv.get('byteOffset', 0) + acc.get('byteOffset', 0)
    out = bytearray()
    for i in range(acc['count']):
        start = base + i * stride
        out += binary[start:start + elem]
    return bytes(out), elem


def tri_count(gltf, mesh_index):
    total = 0
    for prim in gltf['meshes'][mesh_index].get('primitives', []):
        if 'indices' in prim:
            total += gltf['accessors'][prim['indices']]['count'] // 3
        elif 'POSITION' in prim.get('attributes', {}):
            total += gltf['accessors'][prim['attributes']['POSITION']]['count'] // 3
    return total


def scene_stats(gltf):
    """Triangles actually submitted, accounting for GPU instancing."""
    drawn = 0
    detail = []
    for node in gltf.get('nodes', []):
        if 'mesh' not in node:
            continue
        t = tri_count(gltf, node['mesh'])
        ext = node.get('extensions', {}).get('EXT_mesh_gpu_instancing')
        n = 1
        if ext and ext.get('attributes'):
            first = next(iter(ext['attributes'].values()))
            n = gltf['accessors'][first]['count']
        drawn += t * n
        detail.append((t, n, t * n))
    return drawn, detail


def thin_instances(gltf, binary, keep):
    """Subsample every instanced node's transforms on an even stride.

    Even stride, not the first N: instance order in an exported canopy tends to
    follow generation order, so taking a prefix strips whole regions of the
    tree. A stride keeps the spatial distribution and just makes it sparser.
    """
    new_bin = bytearray(binary)
    changed = []
    for node in gltf.get('nodes', []):
        ext = node.get('extensions', {}).get('EXT_mesh_gpu_instancing')
        if not ext or not ext.get('attributes'):
            continue
        first = next(iter(ext['attributes'].values()))
        count = gltf['accessors'][first]['count']
        if count <= keep:
            continue
        stride = count / float(keep)
        picks = sorted({min(count - 1, int(i * stride)) for i in range(keep)})

        for attr_name, acc_index in list(ext['attributes'].items()):
            raw, elem = accessor_bytes(gltf, binary, acc_index)
            packed = b''.join(raw[p * elem:(p + 1) * elem] for p in picks)

            offset = len(new_bin)
            new_bin += packed
            new_bin += b'\x00' * ((4 - len(new_bin) % 4) % 4)

            gltf['bufferViews'].append({
                'buffer': 0,
                'byteOffset': offset,
                'byteLength': len(packed),
            })
            src = gltf['accessors'][acc_index]
            gltf['accessors'].append({
                'bufferView': len(gltf['bufferViews']) - 1,
                'componentType': src['componentType'],
                'count': len(picks),
                'type': src['type'],
            })
            ext['attributes'][attr_name] = len(gltf['accessors']) - 1

        changed.append((count, len(picks)))
    return gltf, bytes(new_bin), changed


def shrink_textures(gltf, binary, max_edge):
    from PIL import Image
    new_bin = bytearray(binary)
    changed = []
    for image in gltf.get('images', []):
        if 'bufferView' not in image:
            continue
        bv = gltf['bufferViews'][image['bufferView']]
        off = bv.get('byteOffset', 0)
        raw = binary[off:off + bv['byteLength']]
        try:
            im = Image.open(io.BytesIO(raw))
            im.load()
        except Exception:
            continue
        if max(im.size) <= max_edge:
            continue
        before = im.size
        im.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        if im.mode in ('RGBA', 'LA', 'P'):
            im.convert('RGBA').save(buf, 'PNG', optimize=True)
            mime = 'image/png'
        else:
            im.convert('RGB').save(buf, 'JPEG', quality=88, optimize=True)
            mime = 'image/jpeg'
        blob = buf.getvalue()

        offset = len(new_bin)
        new_bin += blob
        new_bin += b'\x00' * ((4 - len(new_bin) % 4) % 4)
        gltf['bufferViews'].append({
            'buffer': 0, 'byteOffset': offset, 'byteLength': len(blob),
        })
        image['bufferView'] = len(gltf['bufferViews']) - 1
        image['mimeType'] = mime
        changed.append((before, im.size))
    return gltf, bytes(new_bin), changed


def compact(gltf, binary):
    """Rebuild the binary chunk keeping only still-referenced bufferViews.

    Both passes above append new data and repoint accessors/images at it, which
    leaves the replaced originals stranded in the buffer -- and for the rose,
    three orphaned 4096x4096 textures made the 'optimised' file larger than the
    input even though its GPU cost had dropped 16x. Anything no longer reachable
    from an accessor or an image is dropped here.
    """
    used = set()
    for acc in gltf.get('accessors', []):
        if 'bufferView' in acc:
            used.add(acc['bufferView'])
    for image in gltf.get('images', []):
        if 'bufferView' in image:
            used.add(image['bufferView'])
    for mesh in gltf.get('meshes', []):
        for prim in mesh.get('primitives', []):
            for target in prim.get('targets', []) or []:
                for idx in target.values():
                    a = gltf['accessors'][idx]
                    if 'bufferView' in a:
                        used.add(a['bufferView'])

    out = bytearray()
    remap = {}
    new_views = []
    for i, bv in enumerate(gltf['bufferViews']):
        if i not in used:
            continue
        off = bv.get('byteOffset', 0)
        blob = binary[off:off + bv['byteLength']]
        new_off = len(out)
        out += blob
        out += b'\x00' * ((4 - len(out) % 4) % 4)
        nv = {'buffer': 0, 'byteOffset': new_off, 'byteLength': bv['byteLength']}
        for k in ('byteStride', 'target'):
            if k in bv:
                nv[k] = bv[k]
        remap[i] = len(new_views)
        new_views.append(nv)

    for acc in gltf.get('accessors', []):
        if 'bufferView' in acc:
            acc['bufferView'] = remap[acc['bufferView']]
    for image in gltf.get('images', []):
        if 'bufferView' in image:
            image['bufferView'] = remap[image['bufferView']]

    gltf['bufferViews'] = new_views
    gltf['buffers'] = [{'byteLength': len(out)}]
    return gltf, bytes(out)


def vram_mb(gltf, binary):
    from PIL import Image
    total = 0
    for image in gltf.get('images', []):
        if 'bufferView' not in image:
            continue
        bv = gltf['bufferViews'][image['bufferView']]
        off = bv.get('byteOffset', 0)
        try:
            im = Image.open(io.BytesIO(binary[off:off + bv['byteLength']]))
            total += im.size[0] * im.size[1] * 4 * 1.333
        except Exception:
            pass
    return total / 1048576


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true')
    ap.add_argument('--keep', type=int, default=260,
                    help='max GPU instances to retain per instanced mesh')
    ap.add_argument('--tex', type=int, default=1024,
                    help='max texture edge in pixels')
    args = ap.parse_args()

    if not MODELS.is_dir():
        raise SystemExit('run from the repo root (public/models not found)')

    jobs = [
        ('neem_tree.glb', 'instances', 17),
        ('red_rose.glb', 'textures', 1),
    ]

    grand_before = grand_after = 0
    for name, mode, copies in jobs:
        path = MODELS / name
        if not path.exists():
            print(f'{name}: missing, skipped')
            continue
        gltf, binary = read_glb(path)
        before_tris, _ = scene_stats(gltf)
        before_vram = vram_mb(gltf, binary)
        before_size = path.stat().st_size

        if mode == 'instances':
            gltf, binary, changed = thin_instances(gltf, binary, args.keep)
            note = ', '.join(f'{a:,}->{b:,}' for a, b in changed) or 'no change'
        else:
            gltf, binary, changed = shrink_textures(gltf, binary, args.tex)
            note = ', '.join(f'{a[0]}x{a[1]}->{b[0]}x{b[1]}' for a, b in changed) or 'no change'

        gltf, binary = compact(gltf, binary)
        after_tris, _ = scene_stats(gltf)
        after_vram = vram_mb(gltf, binary)

        out = MODELS / (path.stem + '.opt.glb')
        if args.apply:
            write_glb(out, gltf, binary)
            after_size = out.stat().st_size
        else:
            after_size = None

        grand_before += before_tris * copies
        grand_after += after_tris * copies

        print(f'\n{name}   ({copies} in scene)')
        print(f'  change      : {note}')
        print(f'  tris/model  : {before_tris:>12,} -> {after_tris:>12,}'
              f'   ({100 * (1 - after_tris / max(before_tris, 1)):.1f}% cut)')
        print(f'  tris total  : {before_tris * copies:>12,} -> {after_tris * copies:>12,}')
        print(f'  texture VRAM: {before_vram:>9.1f} MB -> {after_vram:>9.1f} MB')
        if after_size:
            print(f'  file size   : {before_size / 1048576:>9.1f} MB -> {after_size / 1048576:>9.1f} MB'
                  f'   -> {out.name}')

    # Untouched species, for the scene total.
    others = 21 * 130451 + 10 * 161908 + 2 * 111392
    print('\n' + '=' * 66)
    print(f'{"scene triangles (all species)":<34}{grand_before + others:>14,} ->{grand_after + others:>14,}')
    if grand_before + others:
        pct = 100 * (1 - (grand_after + others) / (grand_before + others))
        print(f'{"reduction":<34}{"":>14}  {pct:>12.1f}%')
    if not args.apply:
        print('\n(report only -- re-run with --apply to write .opt.glb files)')


if __name__ == '__main__':
    main()
