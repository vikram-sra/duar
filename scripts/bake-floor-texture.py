#!/usr/bin/env python3
"""Bake a tileable top-down floor texture out of a photogrammetry scan .glb.

A scan's own texture is a UV atlas: charts packed for storage, oriented
arbitrarily, and stretched wherever the surface was steep. Tiling it across a
ground plane draws the atlas layout rather than the ground -- coherent patches
separated by bands of smeared chart. There is no repeat scale that avoids this,
because the image was never an image of the floor seen from above.

So render one. Project the mesh orthographically onto its own horizontal plane,
rasterise every triangle with barycentric UV interpolation, and sample the atlas
per pixel. That produces what the ground actually looks like from above. Then
crop the largest fully covered square and make it wrap, so it can tile.

Usage:
  python3 scripts/bake-floor-texture.py <scan.glb> <out.jpg> [--size 1024] [--px-per-unit 26]
"""
import argparse, json, struct, sys
from pathlib import Path
import numpy as np
from PIL import Image

COMP = {5120: ('i1', 1), 5121: ('u1', 1), 5122: ('i2', 2),
        5123: ('u2', 2), 5125: ('u4', 4), 5126: ('f4', 4)}
NCOMP = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}


def read_glb(path):
    d = Path(path).read_bytes()
    off, js, bin_ = 12, None, None
    while off < len(d):
        ln, ty = struct.unpack_from('<II', d, off)
        off += 8
        if ty == 0x4E4F534A:
            js = json.loads(d[off:off + ln])
        elif ty == 0x004E4942:
            bin_ = d[off:off + ln]
        off += ln
    return js, bin_


def accessor(g, b, i):
    a = g['accessors'][i]
    bv = g['bufferViews'][a['bufferView']]
    dt, sz = COMP[a['componentType']]
    n = NCOMP[a['type']]
    base = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
    stride = bv.get('byteStride') or sz * n
    raw = np.frombuffer(b, dtype=np.uint8, count=stride * a['count'], offset=base)
    out = np.zeros((a['count'], n), dtype=np.dtype(dt))
    view = raw.reshape(a['count'], stride)[:, :sz * n]
    out[:] = view.copy().view(np.dtype(dt)).reshape(a['count'], n)
    return out.astype(np.float64) if dt == 'f4' else out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('glb')
    ap.add_argument('out')
    ap.add_argument('--size', type=int, default=1024, help='output edge in px')
    ap.add_argument('--px-per-unit', type=float, default=26.0,
                    help='raster density in the mesh\'s own units')
    ap.add_argument('--feather', type=float, default=0.16,
                    help='fraction of the tile used to cross-fade the wrap')
    args = ap.parse_args()

    g, b = read_glb(args.glb)
    atlas = None
    for img in g.get('images', []):
        bv = g['bufferViews'][img['bufferView']]
        s = bv.get('byteOffset', 0)
        import io
        atlas = np.asarray(Image.open(io.BytesIO(b[s:s + bv['byteLength']])).convert('RGB'))
        break
    if atlas is None:
        sys.exit('no embedded texture in that .glb')
    ah, aw = atlas.shape[:2]
    print(f'atlas {aw}x{ah}')

    # Gather every primitive.
    P, UV, IDX = [], [], []
    base = 0
    for mesh in g['meshes']:
        for pr in mesh['primitives']:
            p = accessor(g, b, pr['attributes']['POSITION']).astype(np.float64)
            uv = accessor(g, b, pr['attributes']['TEXCOORD_0']).astype(np.float64)
            idx = accessor(g, b, pr['indices']).astype(np.int64).ravel()
            P.append(p); UV.append(uv); IDX.append(idx + base)
            base += len(p)
    P = np.vstack(P); UV = np.vstack(UV); IDX = np.concatenate(IDX).reshape(-1, 3)
    print(f'{len(P):,} verts, {len(IDX):,} tris')

    # The flattest axis is up; the other two are the ground plane.
    extent = P.max(0) - P.min(0)
    up = int(np.argmin(extent))
    ax = [i for i in range(3) if i != up]
    print(f'up axis = {"xyz"[up]}, ground plane = {"xyz"[ax[0]]}{"xyz"[ax[1]]}, extent {extent.round(2)}')

    g2 = P[:, ax]
    h = P[:, up]
    lo = g2.min(0)
    W = int((g2[:, 0].max() - lo[0]) * args.px_per_unit)
    H = int((g2[:, 1].max() - lo[1]) * args.px_per_unit)
    print(f'raster {W}x{H}')

    pix = (g2 - lo) * args.px_per_unit
    col = np.zeros((H, W, 3), np.float32)
    zbuf = np.full((H, W), -1e30, np.float32)
    cov = np.zeros((H, W), bool)

    tp = pix[IDX]          # (T,3,2)
    tuv = UV[IDX]          # (T,3,2)
    th = h[IDX]            # (T,3)
    x0 = np.clip(np.floor(tp[:, :, 0].min(1)).astype(int), 0, W - 1)
    x1 = np.clip(np.ceil(tp[:, :, 0].max(1)).astype(int), 0, W - 1)
    y0 = np.clip(np.floor(tp[:, :, 1].min(1)).astype(int), 0, H - 1)
    y1 = np.clip(np.ceil(tp[:, :, 1].max(1)).astype(int), 0, H - 1)

    for t in range(len(IDX)):
        ax0, ax1, ay0, ay1 = x0[t], x1[t], y0[t], y1[t]
        if ax1 < ax0 or ay1 < ay0:
            continue
        (px0, py0), (px1, py1), (px2, py2) = tp[t]
        den = (py1 - py2) * (px0 - px2) + (px2 - px1) * (py0 - py2)
        if abs(den) < 1e-12:
            continue
        ys, xs = np.mgrid[ay0:ay1 + 1, ax0:ax1 + 1]
        xs = xs + 0.5; ys = ys + 0.5
        l0 = ((py1 - py2) * (xs - px2) + (px2 - px1) * (ys - py2)) / den
        l1 = ((py2 - py0) * (xs - px2) + (px0 - px2) * (ys - py2)) / den
        l2 = 1.0 - l0 - l1
        m = (l0 >= 0) & (l1 >= 0) & (l2 >= 0)
        if not m.any():
            continue
        zz = l0 * th[t, 0] + l1 * th[t, 1] + l2 * th[t, 2]
        sub = (slice(ay0, ay1 + 1), slice(ax0, ax1 + 1))
        better = m & (zz > zbuf[sub])
        if not better.any():
            continue
        u = l0 * tuv[t, 0, 0] + l1 * tuv[t, 1, 0] + l2 * tuv[t, 2, 0]
        v = l0 * tuv[t, 0, 1] + l1 * tuv[t, 1, 1] + l2 * tuv[t, 2, 1]
        sx = np.clip((u * aw).astype(int), 0, aw - 1)
        sy = np.clip((v * ah).astype(int), 0, ah - 1)   # glTF v is top-down
        col[sub][better] = atlas[sy[better], sx[better]]
        zbuf[sub][better] = zz[better]
        cov[sub] |= better

    print(f'coverage {100 * cov.mean():.1f}%')

    # Largest fully covered square, found on the integral image of the holes.
    ii = np.zeros((H + 1, W + 1), np.int64)
    ii[1:, 1:] = np.cumsum(np.cumsum(~cov, 0), 1)
    best = None
    side = min(H, W)
    while side > 32 and best is None:
        holes = (ii[side:, side:] - ii[:-side, side:]
                 - ii[side:, :-side] + ii[:-side, :-side])
        ok = np.argwhere(holes == 0)
        if len(ok):
            cy, cx = ok[len(ok) // 2]
            best = (cx, cy, side)
        else:
            side = int(side * 0.96)
    if best is None:
        sys.exit('no fully covered square found')
    cx, cy, side = best
    print(f'crop {side}x{side} px at ({cx},{cy}) = {side / args.px_per_unit:.2f} mesh units')

    tile = col[cy:cy + side, cx:cx + side].astype(np.float32)

    # Make it wrap: cross-fade against a half-shifted copy so opposite edges are
    # neighbouring columns/rows of the same content and therefore match.
    def wrap(a, frac):
        n = a.shape[0]
        f = max(1, int(n * frac))
        r = np.clip(np.minimum(np.arange(n), n - 1 - np.arange(n)) / f, 0, 1)
        for axis in (1, 0):
            w = r.reshape((-1, 1, 1)) if axis == 0 else r.reshape((1, -1, 1))
            a = a * w + np.roll(a, n // 2, axis=axis) * (1 - w)
        return a

    tile = wrap(tile, args.feather)
    img = Image.fromarray(np.clip(tile, 0, 255).astype(np.uint8))
    img = img.resize((args.size, args.size), Image.LANCZOS)
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    img.save(args.out, quality=90, optimize=True)

    # Report the seam error so the result is checkable rather than assumed.
    a = np.asarray(img).astype(float)
    seam_x = np.abs(a[:, 0] - a[:, -1]).mean()
    seam_y = np.abs(a[0, :] - a[-1, :]).mean()
    interior = np.abs(a[:, 1:] - a[:, :-1]).mean()
    print(f'wrote {args.out}  ({Path(args.out).stat().st_size // 1024} KB)')
    print(f'seam vs neighbouring-pixel difference: x {seam_x:.1f}, y {seam_y:.1f}, typical {interior:.1f}')
    print(f'TILE SPAN = {side / args.px_per_unit:.4f} mesh units')


if __name__ == '__main__':
    main()
