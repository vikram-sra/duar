import { panelSizeFor } from './paintingDoor.js';

// Placing paintings of wildly different widths on concentric rings.
//
// Aspect ratios run 0.508 → 2.136, so at a fixed 3.5m height the panels are
// 1.8m → 7.5m wide. Uniform angular spacing would crowd the landscapes into their
// neighbours while leaving gaps around the tall portraits, so each painting's arc
// is proportional to the width it actually occupies.

export const RING_RADII = [15, 24, 33];

// More art on the near rings, where it reads; the distant ring stays sparse.
export function distributeAcrossRings(count, ringCount = RING_RADII.length) {
    const per = new Array(ringCount).fill(0);
    // Weight inner rings more heavily: 3 : 2.5 : 2 for three rings.
    const weights = Array.from({ length: ringCount }, (_, i) => 3 - i * 0.5);
    const total = weights.reduce((a, b) => a + b, 0);

    let assigned = 0;
    for (let i = 0; i < ringCount; i++) {
        per[i] = Math.floor((count * weights[i]) / total);
        assigned += per[i];
    }
    // Hand any remainder to the innermost rings.
    for (let i = 0; assigned < count; i = (i + 1) % ringCount) { per[i]++; assigned++; }
    return per;
}

// Newest first, so the innermost ring holds the most recent work and each ring
// outward steps further back in time. Undated paintings sort last, to the outside.
export function byYearNewestFirst(paintings) {
    return [...paintings].sort((a, b) => (b.year || 0) - (a.year || 0));
}

// Returns [{ painting, ring, radius, angle, width }] with no two panels overlapping.
// `paintings` is consumed in order, so sort before calling.
export function layoutPaintings(paintings, radii = RING_RADII) {
    const perRing = distributeAcrossRings(paintings.length, radii.length);
    const placed = [];
    let index = 0;

    radii.forEach((radius, ring) => {
        const slice = paintings.slice(index, index + perRing[ring]);
        index += perRing[ring];
        if (!slice.length) return;

        const widths = slice.map(p => panelSizeFor(p).width);

        // Angle each panel subtends at this radius, via the chord it spans.
        const spans = widths.map(w => 2 * Math.asin(Math.min(w / (2 * radius), 0.999)));
        const used = spans.reduce((a, b) => a + b, 0);

        // Whatever arc is left over becomes equal gaps between neighbours.
        const gap = Math.max((Math.PI * 2 - used) / slice.length, 0);

        // Odd rings start half a gap around, so nothing lines up radially.
        let cursor = (ring % 2 === 1) ? gap / 2 : 0;

        slice.forEach((painting, i) => {
            const angle = cursor + spans[i] / 2;      // centre of this panel's arc
            cursor += spans[i] + gap;
            placed.push({
                painting,
                ring,
                radius,
                angle,
                width: widths[i],
                x: Math.sin(angle) * radius,
                z: Math.cos(angle) * radius
            });
        });
    });

    return placed;
}
