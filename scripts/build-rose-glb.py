#!/usr/bin/env python3
"""Rebuild 72_floribunda_roses.glb into an upright, normalized, red rose centerpiece model."""
import colorsys
import io
import json
import struct
from pathlib import Path
from PIL import Image
import numpy as np

SRC = Path('3d assets/72_floribunda_roses.glb')
OUT = Path('public/models/red_rose_1k.glb')

TARGET_HEIGHT = 1.65  # Authentic floribunda rose bush height in meters

def main():
    if not SRC.exists():
        raise SystemExit(f'Source not found: {SRC}')

    with open(SRC, 'rb') as f:
        magic, ver, length = struct.unpack('<III', f.read(12))
        chunk_len, _ = struct.unpack('<II', f.read(8))
        gltf = json.loads(f.read(chunk_len))
        bin_len, _ = struct.unpack('<II', f.read(8))
        blob = f.read(bin_len)

    def get_node_matrix(n):
        if 'matrix' in n:
            return np.array(n['matrix'], dtype='f8').reshape(4, 4).T
        return np.eye(4)

    parent = {}
    for i, n in enumerate(gltf['nodes']):
        for c in n.get('children', []):
            parent[c] = i

    def get_world(i):
        chain = []
        curr = i
        while curr is not None:
            chain.append(curr)
            curr = parent.get(curr)
        wm = np.eye(4)
        for c in reversed(chain):
            wm = wm @ get_node_matrix(gltf['nodes'][c])
        return wm

    # Collect world positions for all primitives to find global extents
    mesh_data = []
    min_all = np.array([float('inf'), float('inf'), float('inf')])
    max_all = np.array([-float('inf'), -float('inf'), -float('inf')])

    for node_idx, n in enumerate(gltf['nodes']):
        if 'mesh' not in n:
            continue
        mesh_idx = n['mesh']
        mesh = gltf['meshes'][mesh_idx]
        wm = get_world(node_idx)
        rot_scale = wm[:3, :3]
        norm_mat = np.linalg.inv(rot_scale).T
        trans = wm[:3, 3]

        p = mesh['primitives'][0]
        pos_acc = gltf['accessors'][p['attributes']['POSITION']]
        bv_p = gltf['bufferViews'][pos_acc['bufferView']]
        p_off = bv_p.get('byteOffset', 0) + pos_acc.get('byteOffset', 0)
        pos = np.frombuffer(blob, dtype='f4', count=pos_acc['count']*3, offset=p_off).reshape(-1, 3)

        nrm_acc = gltf['accessors'][p['attributes']['NORMAL']]
        bv_n = gltf['bufferViews'][nrm_acc['bufferView']]
        n_off = bv_n.get('byteOffset', 0) + nrm_acc.get('byteOffset', 0)
        nrm = np.frombuffer(blob, dtype='f4', count=nrm_acc['count']*3, offset=n_off).reshape(-1, 3)

        uv_acc = gltf['accessors'][p['attributes']['TEXCOORD_0']]
        bv_u = gltf['bufferViews'][uv_acc['bufferView']]
        u_off = bv_u.get('byteOffset', 0) + uv_acc.get('byteOffset', 0)
        uv = np.frombuffer(blob, dtype='f4', count=uv_acc['count']*2, offset=u_off).reshape(-1, 2)

        idx_acc = gltf['accessors'][p['indices']]
        bv_i = gltf['bufferViews'][idx_acc['bufferView']]
        i_off = bv_i.get('byteOffset', 0) + idx_acc.get('byteOffset', 0)
        itype = 'u2' if idx_acc['componentType'] == 5123 else 'u4'
        idx = np.frombuffer(blob, dtype=itype, count=idx_acc['count'], offset=i_off).astype(np.uint32)

        wpos = (rot_scale @ pos.T).T + trans
        wnrm = (norm_mat @ nrm.T).T
        wnrm /= np.maximum(np.linalg.norm(wnrm, axis=1, keepdims=True), 1e-9)

        min_all = np.minimum(min_all, wpos.min(axis=0))
        max_all = np.maximum(max_all, wpos.max(axis=0))

        mesh_data.append({
            'name': n['name'],
            'wpos': wpos,
            'wnrm': wnrm,
            'uv': uv,
            'idx': idx,
            'mat_idx': p['material']
        })

    raw_height = max_all[1] - min_all[1]
    center_x = (min_all[0] + max_all[0]) / 2.0
    center_z = (min_all[2] + max_all[2]) / 2.0
    scale = TARGET_HEIGHT / raw_height

    print(f'Raw bounds: min={min_all}, max={max_all}')
    print(f'Raw height: {raw_height:.2f}m -> Target height: {TARGET_HEIGHT:.2f}m (scale: {scale:.4f})')

    # Normalize positions: grounded at y=0, centered at x=0, z=0, scaled to TARGET_HEIGHT
    for md in mesh_data:
        p = md['wpos']
        p[:, 0] = (p[:, 0] - center_x) * scale
        p[:, 1] = (p[:, 1] - min_all[1]) * scale
        p[:, 2] = (p[:, 2] - center_z) * scale

    # Recolor petal texture (Image 0) to vibrant, authentic botanical rich red
    import matplotlib.colors as mcolors
    bv_img0 = gltf['bufferViews'][gltf['images'][0]['bufferView']]
    data0 = blob[bv_img0.get('byteOffset', 0):bv_img0.get('byteOffset', 0)+bv_img0['byteLength']]
    img0 = Image.open(io.BytesIO(data0)).convert('RGBA')
    arr0 = np.array(img0, dtype='f4') / 255.0

    rgb0 = arr0[:, :, :3]
    alpha0 = arr0[:, :, 3:]
    hsv0 = mcolors.rgb_to_hsv(rgb0)
    # Vibrant ruby/crimson red hue (~357 degrees)
    hsv0[:, :, 0] = 357.0 / 360.0
    # High, rich saturation (0.85 - 0.98)
    hsv0[:, :, 1] = np.clip(hsv0[:, :, 1] * 1.30 + 0.32, 0.85, 0.98)
    # Vibrant, radiant value (not dull, not brown)
    hsv0[:, :, 2] = np.clip(hsv0[:, :, 2] * 1.05, 0.28, 0.92)
    new_rgb0 = mcolors.hsv_to_rgb(hsv0)
    out0 = np.concatenate([new_rgb0, alpha0], axis=-1)

    out0_img = Image.fromarray((out0 * 255.0).clip(0, 255).astype('u1'), mode='RGBA')
    buf0 = io.BytesIO()
    out0_img.save(buf0, format='PNG', optimize=True)
    red_petal_bytes = buf0.getvalue()
    print(f'Processed rich red petals texture: {len(red_petal_bytes):,} bytes')

    # Leaf texture (Image 1) - deepen hue and reduce bright green
    bv_img1 = gltf['bufferViews'][gltf['images'][1]['bufferView']]
    data1 = blob[bv_img1.get('byteOffset', 0):bv_img1.get('byteOffset', 0)+bv_img1['byteLength']]
    img1 = Image.open(io.BytesIO(data1)).convert('RGBA')
    arr1 = np.array(img1, dtype='f4') / 255.0

    rgb1 = arr1[:, :, :3]
    alpha1 = arr1[:, :, 3:]
    hsv1 = mcolors.rgb_to_hsv(rgb1)
    # Deepen yellow-green (98 deg) to natural dark foliage green (115-125 deg)
    hsv1[:, :, 0] = np.clip(hsv1[:, :, 0] * 1.15, 0.28, 0.38)
    # Greatly reduce brightness of green leaves (reduce value by ~55%)
    hsv1[:, :, 2] = np.clip(hsv1[:, :, 2] * 0.44, 0.05, 0.36)
    # Deep rich natural foliage saturation
    hsv1[:, :, 1] = np.clip(hsv1[:, :, 1] * 1.05 + 0.08, 0.65, 0.95)
    new_rgb1 = mcolors.hsv_to_rgb(hsv1)
    out1 = np.concatenate([new_rgb1, alpha1], axis=-1)

    out1_img = Image.fromarray((out1 * 255.0).clip(0, 255).astype('u1'), mode='RGBA')
    buf1 = io.BytesIO()
    out1_img.save(buf1, format='PNG', optimize=True)
    leaf_bytes = buf1.getvalue()
    print(f'Processed reduced-brightness dark green leaf texture: {len(leaf_bytes):,} bytes')

    # Assemble clean, flat glTF 2.0 binary
    bin_out = bytearray()
    views = []
    accessors = []

    def add_view(data, target=None):
        while len(bin_out) % 4:
            bin_out.append(0)
        offset = len(bin_out)
        bin_out.extend(data)
        view = {'buffer': 0, 'byteOffset': offset, 'byteLength': len(data)}
        if target:
            view['target'] = target
        views.append(view)
        return len(views) - 1

    def add_acc(arr, ctype, atype, target=None, minmax=False):
        raw = arr.tobytes()
        v = add_view(raw, target)
        acc = {'bufferView': v, 'componentType': ctype, 'count': len(arr), 'type': atype}
        if minmax:
            acc['min'] = arr.min(axis=0).astype(float).tolist()
            acc['max'] = arr.max(axis=0).astype(float).tolist()
        accessors.append(acc)
        return len(accessors) - 1

    # Add images
    v_img0 = add_view(red_petal_bytes)
    v_img1 = add_view(leaf_bytes)

    # Primitive accessors
    out_meshes = []
    for md in mesh_data:
        a_pos = add_acc(md['wpos'].astype('f4'), 5126, 'VEC3', 34962, minmax=True)
        a_nrm = add_acc(md['wnrm'].astype('f4'), 5126, 'VEC3', 34962)
        a_uv = add_acc(md['uv'].astype('f4'), 5126, 'VEC2', 34962)
        a_idx = add_acc(md['idx'].reshape(-1, 1), 5125, 'SCALAR', 34963)
        out_meshes.append({
            'name': md['name'],
            'pos': a_pos,
            'nrm': a_nrm,
            'uv': a_uv,
            'idx': a_idx,
            'orig_name': md['name']
        })

    # Materials
    materials = [
        {
            'name': 'RedRosePetals',
            'pbrMetallicRoughness': {
                'baseColorTexture': {'index': 0},
                'metallicFactor': 0.0,
                'roughnessFactor': 0.65
            },
            'alphaMode': 'MASK',
            'alphaCutoff': 0.35,
            'doubleSided': True
        },
        {
            'name': 'RoseLeaves',
            'pbrMetallicRoughness': {
                'baseColorTexture': {'index': 1},
                'metallicFactor': 0.0,
                'roughnessFactor': 0.72
            },
            'alphaMode': 'MASK',
            'alphaCutoff': 0.35,
            'doubleSided': True
        },
        {
            'name': 'RoseStems',
            'pbrMetallicRoughness': {
                'baseColorFactor': [0.09, 0.15, 0.06, 1.0],
                'metallicFactor': 0.0,
                'roughnessFactor': 0.85
            },
            'doubleSided': True
        }
    ]

    gltf_meshes = [
        {
            'name': 'PetalsMesh',
            'primitives': [{
                'attributes': {'POSITION': out_meshes[0]['pos'], 'NORMAL': out_meshes[0]['nrm'], 'TEXCOORD_0': out_meshes[0]['uv']},
                'indices': out_meshes[0]['idx'],
                'material': 0
            }]
        },
        {
            'name': 'LeavesMesh',
            'primitives': [{
                'attributes': {'POSITION': out_meshes[1]['pos'], 'NORMAL': out_meshes[1]['nrm'], 'TEXCOORD_0': out_meshes[1]['uv']},
                'indices': out_meshes[1]['idx'],
                'material': 1
            }]
        },
        {
            'name': 'StemsMesh',
            'primitives': [{
                'attributes': {'POSITION': out_meshes[2]['pos'], 'NORMAL': out_meshes[2]['nrm'], 'TEXCOORD_0': out_meshes[2]['uv']},
                'indices': out_meshes[2]['idx'],
                'material': 2
            }]
        }
    ]

    nodes = [
        {'name': 'FloribundaRose_Petals', 'mesh': 0},
        {'name': 'FloribundaRose_Leaves', 'mesh': 1},
        {'name': 'FloribundaRose_Stems', 'mesh': 2}
    ]

    out_gltf = {
        'asset': {'version': '2.0', 'generator': 'build-rose-glb.py'},
        'scene': 0,
        'scenes': [{'nodes': [0, 1, 2]}],
        'nodes': nodes,
        'meshes': gltf_meshes,
        'materials': materials,
        'textures': [{'sampler': 0, 'source': 0}, {'sampler': 0, 'source': 1}],
        'images': [{'bufferView': v_img0, 'mimeType': 'image/png'}, {'bufferView': v_img1, 'mimeType': 'image/png'}],
        'samplers': [{'magFilter': 9729, 'minFilter': 9987, 'wrapS': 10497, 'wrapT': 10497}],
        'bufferViews': views,
        'accessors': accessors,
        'buffers': [{'byteLength': len(bin_out)}]
    }

    js = json.dumps(out_gltf, separators=(',', ':')).encode()
    js += b' ' * ((4 - len(js) % 4) % 4)
    bn = bytes(bin_out) + b'\x00' * ((4 - len(bin_out) % 4) % 4)
    total_len = 12 + 8 + len(js) + 8 + len(bn)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT, 'wb') as f:
        f.write(b'glTF' + struct.pack('<II', 2, total_len))
        f.write(struct.pack('<II', len(js), 0x4E4F534A) + js)
        f.write(struct.pack('<II', len(bn), 0x004E4942) + bn)

    size = OUT.stat().st_size
    print(f'Wrote {OUT} ({size / 1048576:.2f} MB, {size:,} bytes)')

if __name__ == '__main__':
    main()
