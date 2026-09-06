#!/usr/bin/env python3
"""Rebuild neem_tree.glb from the Sketchfab source at a sane triangle budget.

What the source actually is (measured, not assumed):

  * One textured trunk/branch mesh, 67,648 triangles, spanning the whole tree.
  * 1,000 leaf clusters, each three sub-meshes -- a dark twig (156 tris), dark
    leaves (910 tris) and bright leaves (1,130 tris) -- 2,196 triangles each.
  * All 1,000 clusters share byte-identical geometry; only the parent node
    matrix differs. So they are true instances, and one copy plus 1,000
    transforms is a lossless restructuring.
  * The leaves are already 2-triangle quads. There are ~820 of them per
    cluster, so the tree models roughly 820,000 individual leaves at 1-3 cm
    each -- invisible detail at any distance this scene is viewed from, and the
    reason one neem cost 2.27M triangles against the mango's 130K.

Since the leaves are already minimal per-leaf, the only lever is how many there
are. This drops whole leaves on an even stride and scales the survivors about
their own centroids, so the canopy keeps its coverage and colour instead of
becoming visibly moth-eaten. Twigs are kept at full density because they are
cheap and carry the cluster's structure.

Usage:
  python3 scripts/build-neem-glb.py                       # report the plan
  python3 scripts/build-neem-glb.py --write               # write the .glb
  python3 scripts/build-neem-glb.py --write --clusters 220 --leaf-keep 0.13
"""
import argparse
import base64
import json
import struct
from pathlib import Path

import numpy as np

SRC = Path('3d assets/neem_tree/neem_tree')
OUT = Path('public/models/neem_tree.glb')

COMPONENT = {5120: ('i1', 1), 5121: ('u1', 1), 5122: ('i2', 2),
             5123: ('u2', 2), 5125: ('u4', 4), 5126: ('f4', 4)}
NCOMP = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}


# --------------------------------------------------------------------------- io

def load_source():
    gltf = json.loads((SRC / 'scene.gltf').read_text())
    blob = (SRC / 'scene.bin').read_bytes()
    return gltf, blob


def accessor(gltf, blob, index):
    acc = gltf['accessors'][index]
    view = gltf['bufferViews'][acc['bufferView']]
    dtype, size = COMPONENT[acc['componentType']]
    ncomp = NCOMP[acc['type']]
    offset = view.get('byteOffset', 0) + acc.get('byteOffset', 0)
    stride = view.get('byteStride') or size * ncomp
    if stride == size * ncomp:
        flat = np.frombuffer(blob, dtype=dtype, count=acc['count'] * ncomp, offset=offset)
        return flat.reshape(acc['count'], ncomp).copy()
    out = np.empty((acc['count'], ncomp), dtype=dtype)
    for i in range(acc['count']):
        start = offset + i * stride
        out[i] = np.frombuffer(blob, dtype=dtype, count=ncomp, offset=start)
    return out


def node_matrix(node):
    if 'matrix' in node:
        # glTF matrices are column-major; numpy wants row-major.
        return np.array(node['matrix'], dtype='f8').reshape(4, 4).T
    m = np.eye(4)
    if 'scale' in node:
        m = np.diag([*node['scale'], 1.0]) @ m
    if 'rotation' in node:
        x, y, z, w = node['rotation']
        r = np.array([
            [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0],
            [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0],
            [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0],
            [0, 0, 0, 1]])
        m = r @ m
    if 'translation' in node:
        t = np.eye(4)
        t[:3, 3] = node['translation']
        m = t @ m
    return m


def world_transforms(gltf):
    """Full world matrix for every node, by walking the scene hierarchy."""
    parent = {}
    for i, n in enumerate(gltf['nodes']):
        for c in n.get('children', []):
            parent[c] = i
    cache = {}

    def resolve(i):
        if i in cache:
            return cache[i]
        local = node_matrix(gltf['nodes'][i])
        cache[i] = local if i not in parent else resolve(parent[i]) @ local
        return cache[i]

    return [resolve(i) for i in range(len(gltf['nodes']))], parent


# ------------------------------------------------------------------ leaf thinning

def components(tri, nvert):
    """Connected-component id per vertex -- one component per leaf."""
    parent = np.arange(nvert)

    def find(x):
        root = x
        while parent[root] != root:
            root = parent[root]
        while parent[x] != root:          # path compression
            parent[x], x = root, parent[x]
        return root

    for a, b, c in tri:
        ra, rb, rc = find(a), find(b), find(c)
        if ra != rb:
            parent[rb] = ra
        if ra != rc:
            parent[rc] = ra
    return np.array([find(i) for i in range(nvert)])


def thin_leaves(pos, nrm, tri, keep_fraction, grow=1.0):
    """Keep an even stride of whole leaves, at close to their original size.

    Dropping leaves at random thins some regions and not others, so this takes
    every Nth connected component, which spreads the loss evenly.

    The tempting move is to scale survivors by 1/sqrt(fraction) so the canopy
    keeps exactly the same projected leaf area. That is wrong, and it looked
    wrong: it preserves area while destroying texture. Foliage reads as foliage
    because it is many small elements; a few large flat quads read as plates
    hanging in the branches, which is precisely what a 2.8x scale produced.

    So `grow` stays near 1.0 and density is recovered by keeping more leaves and
    spending the budget there instead. Slightly thinner but correctly grained
    beats correctly dense but plated.
    """
    if keep_fraction >= 1.0 and grow == 1.0:
        return pos, nrm, tri

    root = components(tri, len(pos))
    ids = np.unique(root)
    step = max(1, int(round(1.0 / keep_fraction)))
    keep_ids = set(ids[::step].tolist()) if step > 1 else set(ids.tolist())
    new_pos = pos.copy()
    for cid in keep_ids:
        sel = root == cid
        centroid = new_pos[sel].mean(axis=0)
        new_pos[sel] = centroid + (new_pos[sel] - centroid) * grow

    tri_keep = np.array([t for t in tri if root[t[0]] in keep_ids], dtype=np.int64)
    used = np.unique(tri_keep)
    remap = np.full(len(pos), -1, dtype=np.int64)
    remap[used] = np.arange(len(used))
    return new_pos[used], nrm[used], remap[tri_keep]


# ----------------------------------------------------------------- glb assembly

class GLB:
    def __init__(self):
        self.bin = bytearray()
        self.views = []
        self.accessors = []

    def _view(self, data, target=None):
        while len(self.bin) % 4:
            self.bin.append(0)
        offset = len(self.bin)
        self.bin += data
        view = {'buffer': 0, 'byteOffset': offset, 'byteLength': len(data)}
        if target:
            view['target'] = target
        self.views.append(view)
        return len(self.views) - 1

    def add(self, array, ctype, atype, target=None, minmax=False):
        view = self._view(array.tobytes(), target)
        acc = {'bufferView': view, 'componentType': ctype,
               'count': len(array), 'type': atype}
        if minmax:
            acc['min'] = array.min(axis=0).astype(float).tolist()
            acc['max'] = array.max(axis=0).astype(float).tolist()
        self.accessors.append(acc)
        return len(self.accessors) - 1

    def raw(self, data):
        return self._view(data)

    def write(self, path, gltf):
        gltf['bufferViews'] = self.views
        gltf['accessors'] = self.accessors
        gltf['buffers'] = [{'byteLength': len(self.bin)}]
        js = json.dumps(gltf, separators=(',', ':')).encode()
        js += b' ' * ((4 - len(js) % 4) % 4)
        bn = bytes(self.bin) + b'\x00' * ((4 - len(self.bin) % 4) % 4)
        total = 12 + 8 + len(js) + 8 + len(bn)
        with open(path, 'wb') as f:
            f.write(b'glTF' + struct.pack('<II', 2, total))
            f.write(struct.pack('<II', len(js), 0x4E4F534A) + js)
            f.write(struct.pack('<II', len(bn), 0x004E4942) + bn)


def decompose(m):
    t = m[:3, 3]
    basis = m[:3, :3]
    s = np.linalg.norm(basis, axis=0)
    s[s == 0] = 1e-9
    r = basis / s
    if np.linalg.det(r) < 0:                 # mirrored: fold into scale
        r[:, 0] *= -1
        s[0] *= -1
    tr = r.trace()
    if tr > 0:
        w = np.sqrt(1 + tr) / 2
        x = (r[2, 1] - r[1, 2]) / (4 * w)
        y = (r[0, 2] - r[2, 0]) / (4 * w)
        z = (r[1, 0] - r[0, 1]) / (4 * w)
    else:
        i = int(np.argmax(np.diag(r)))
        j, k = (i + 1) % 3, (i + 2) % 3
        d = np.sqrt(max(1e-12, 1 + r[i, i] - r[j, j] - r[k, k]))
        q = [0.0, 0.0, 0.0]
        q[i] = d / 2
        q[j] = (r[j, i] + r[i, j]) / (2 * d)
        q[k] = (r[k, i] + r[i, k]) / (2 * d)
        w = (r[k, j] - r[j, k]) / (2 * d)
        x, y, z = q
    n = np.sqrt(x * x + y * y + z * z + w * w)
    return t, np.array([x / n, y / n, z / n, w / n]), s


# ------------------------------------------------------------------------- main

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--write', action='store_true')
    ap.add_argument('--clusters', type=int, default=1000,
                    help='leaf clusters kept out of the source 1,000')
    ap.add_argument('--leaf-keep', type=float, default=0.35,
                    help='fraction of leaves kept within each cluster')
    ap.add_argument('--leaf-grow', type=float, default=1.45,
                    help='scale applied to surviving leaves. 1.45 gives lush coverage '
                         'while keeping leaflet size natural.')
    ap.add_argument('--out', default=str(OUT))
    args = ap.parse_args()

    if not (SRC / 'scene.gltf').exists():
        raise SystemExit(f'source not found: {SRC}/scene.gltf')

    gltf, blob = load_source()
    world, _ = world_transforms(gltf)
    names = {i: (m.get('name') or '') for i, m in enumerate(gltf['meshes'])}

    trunk_mesh = next(i for i, n in names.items() if n == 'Cube_Material.001_0')
    trunk_node = next(i for i, n in enumerate(gltf['nodes'])
                      if n.get('mesh') == trunk_mesh)

    parts = {}
    for suffix, label in (('Material.004_0', 'twig'),
                          ('Material.002_0', 'dark'),
                          ('Material.003_0', 'bright')):
        mesh_i = next(i for i, n in names.items()
                      if n.endswith(suffix) and n.startswith('Cube|Cube.001|Dupli|_'))
        prim = gltf['meshes'][mesh_i]['primitives'][0]
        parts[label] = {
            'pos': accessor(gltf, blob, prim['attributes']['POSITION']).astype('f4'),
            'nrm': accessor(gltf, blob, prim['attributes']['NORMAL']).astype('f4'),
            'tri': accessor(gltf, blob, prim['indices']).ravel().astype(np.int64).reshape(-1, 3),
            'mat': gltf['materials'][prim['material']],
        }

    # Cluster transforms, in world space, evenly subsampled.
    cluster_nodes = [i for i, n in enumerate(gltf['nodes'])
                     if (n.get('name') or '').startswith('Cube|Cube.001|Dupli|')
                     and 'mesh' not in n]
    total_clusters = len(cluster_nodes)
    n_keep = min(args.clusters, total_clusters)
    stride = total_clusters / float(n_keep)
    picks = sorted({min(total_clusters - 1, int(i * stride)) for i in range(n_keep)})
    mats = [world[cluster_nodes[i]] for i in picks]

    before_leaf = sum(len(p['tri']) for p in parts.values()) * total_clusters
    trunk_tris = int(accessor(gltf, blob,
                              gltf['meshes'][trunk_mesh]['primitives'][0]['indices']).size // 3)

    # Twigs carry the cluster's structure and are cheap; only leaves get thinned.
    for label in ('dark', 'bright'):
        p = parts[label]
        p['pos'], p['nrm'], p['tri'] = thin_leaves(
            p['pos'], p['nrm'], p['tri'], args.leaf_keep, args.leaf_grow)

    after_leaf = sum(len(p['tri']) for p in parts.values()) * len(mats)

    print(f'source   : {total_clusters:,} clusters x '
          f'{sum(len(p["tri"]) for p in parts.values()) if False else 2196:,} tris + trunk {trunk_tris:,}')
    print(f'           = {before_leaf + trunk_tris:,} triangles per tree')
    print(f'rebuilt  : {len(mats):,} clusters x '
          f'{sum(len(p["tri"]) for p in parts.values()):,} tris + trunk {trunk_tris:,}')
    print(f'           = {after_leaf + trunk_tris:,} triangles per tree')
    print(f'reduction: {100 * (1 - (after_leaf + trunk_tris) / (before_leaf + trunk_tris)):.1f}%')
    for label in ('twig', 'dark', 'bright'):
        print(f'   {label:<7} {len(parts[label]["tri"]):>6,} tris/cluster')
    print(f'\nscene (17 neems): {17 * (after_leaf + trunk_tris):,} triangles')

    if not args.write:
        print('\n(report only -- re-run with --write)')
        return

    glb = GLB()
    out = {'asset': {'version': '2.0', 'generator': 'build-neem-glb.py'},
           'extensionsUsed': ['EXT_mesh_gpu_instancing'],
           'extensionsRequired': ['EXT_mesh_gpu_instancing'],
           'scene': 0}

    # --- trunk, with its world transform baked into the vertices -------------
    tprim = gltf['meshes'][trunk_mesh]['primitives'][0]
    tpos = accessor(gltf, blob, tprim['attributes']['POSITION']).astype('f8')
    tnrm = accessor(gltf, blob, tprim['attributes']['NORMAL']).astype('f8')
    tuv = accessor(gltf, blob, tprim['attributes']['TEXCOORD_0']).astype('f4')
    ttri = accessor(gltf, blob, tprim['indices']).ravel().astype(np.uint32).reshape(-1, 3)

    M = world[trunk_node]
    tpos = (M[:3, :3] @ tpos.T).T + M[:3, 3]
    normal_matrix = np.linalg.inv(M[:3, :3]).T
    tnrm = (normal_matrix @ tnrm.T).T
    tnrm /= np.maximum(np.linalg.norm(tnrm, axis=1, keepdims=True), 1e-9)

    a_tpos = glb.add(tpos.astype('f4'), 5126, 'VEC3', 34962, minmax=True)
    a_tnrm = glb.add(tnrm.astype('f4'), 5126, 'VEC3', 34962)
    a_tuv = glb.add(tuv, 5126, 'VEC2', 34962)
    a_tidx = glb.add(ttri.reshape(-1, 1), 5125, 'SCALAR', 34963)

    tex_bytes = (SRC / 'textures' / 'Material.001_baseColor.jpeg').read_bytes()
    tex_view = glb.raw(tex_bytes)
    out['images'] = [{'bufferView': tex_view, 'mimeType': 'image/jpeg'}]
    out['samplers'] = [{'magFilter': 9729, 'minFilter': 9987,
                        'wrapS': 10497, 'wrapT': 10497}]
    out['textures'] = [{'sampler': 0, 'source': 0}]

    # Material names are deliberately the source's own. forest.js keys its
    # foliage detection and per-species shadow handling off these exact strings,
    # so renaming them to something friendlier would silently change how the
    # tree is lit and shadowed.
    out['materials'] = [{
        'name': 'Material.001',
        'pbrMetallicRoughness': {'baseColorTexture': {'index': 0},
                                 'metallicFactor': 0.0, 'roughnessFactor': 0.95},
        'doubleSided': True,
    }]
    out['meshes'] = [{'name': 'trunk', 'primitives': [{
        'attributes': {'POSITION': a_tpos, 'NORMAL': a_tnrm, 'TEXCOORD_0': a_tuv},
        'indices': a_tidx, 'material': 0}]}]

    # --- leaf meshes, one copy each, instanced ------------------------------
    for label in ('twig', 'dark', 'bright'):
        p = parts[label]
        src_pbr = p['mat'].get('pbrMetallicRoughness', {})
        color_map = {
            'twig': [0.18, 0.12, 0.08, 1.0],
            'dark': [0.10, 0.28, 0.065, 1.0],
            'bright': [0.24, 0.52, 0.12, 1.0]
        }
        base_color = color_map.get(label, src_pbr.get('baseColorFactor', [1, 1, 1, 1]))
        out['materials'].append({
            'name': {'twig': 'Material.004', 'dark': 'Material.002',
                     'bright': 'Material.003'}[label],
            'pbrMetallicRoughness': {
                'baseColorFactor': base_color,
                'metallicFactor': 0.0,
                'roughnessFactor': 0.75 if label != 'twig' else 0.95,
            },
            'doubleSided': True,
        })
        a_pos = glb.add(p['pos'].astype('f4'), 5126, 'VEC3', 34962, minmax=True)
        a_nrm = glb.add(p['nrm'].astype('f4'), 5126, 'VEC3', 34962)
        a_idx = glb.add(p['tri'].astype(np.uint32).reshape(-1, 1), 5125, 'SCALAR', 34963)
        out['meshes'].append({'name': label, 'primitives': [{
            'attributes': {'POSITION': a_pos, 'NORMAL': a_nrm},
            'indices': a_idx, 'material': len(out['materials']) - 1}]})

    # --- instance transforms -------------------------------------------------
    T = np.array([decompose(m)[0] for m in mats], dtype='f4')
    R = np.array([decompose(m)[1] for m in mats], dtype='f4')
    S = np.array([decompose(m)[2] for m in mats], dtype='f4')
    a_T = glb.add(T, 5126, 'VEC3')
    a_R = glb.add(R, 5126, 'VEC4')
    a_S = glb.add(S, 5126, 'VEC3')

    out['nodes'] = [{'name': 'trunk', 'mesh': 0}]
    for k, label in enumerate(('twig', 'dark', 'bright')):
        out['nodes'].append({
            'name': f'{label}_clusters',
            'mesh': k + 1,
            'extensions': {'EXT_mesh_gpu_instancing': {
                'attributes': {'TRANSLATION': a_T, 'ROTATION': a_R, 'SCALE': a_S}}},
        })
    out['scenes'] = [{'nodes': list(range(len(out['nodes'])))}]

    glb.write(args.out, out)
    size = Path(args.out).stat().st_size
    print(f'\nwrote {args.out}  ({size / 1048576:.2f} MB)')


if __name__ == '__main__':
    main()
