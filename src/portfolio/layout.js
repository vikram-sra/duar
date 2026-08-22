import { panelSizeFor } from './paintingDoor.js';

// Placing paintings of wildly different widths on concentric rings.
//
// Aspect ratios run 0.508 → 2.136, so at a fixed 3.5m height the panels are
// 1.8m → 7.5m wide. Uniform angular spacing would crowd the landscapes into their
// neighbours while leaving gaps around the tall portraits, so each painting's arc
// is proportional to the width it actually occupies.

export const MAX_PAINTINGS_PER_RING = 5;
export const BASE_RADIUS = 15;
export const RING_SPACING = 8;

export function getRingRadii(paintingCount, maxPerRing = MAX_PAINTINGS_PER_RING) {
    const ringCount = Math.max(1, Math.ceil(paintingCount / maxPerRing));
    return Array.from({ length: ringCount }, (_, i) => BASE_RADIUS + i * RING_SPACING);
}

// Exactly max 5 paintings per ring (5, 5, 5, ...)
export function distributeAcrossRings(count, maxPerRing = MAX_PAINTINGS_PER_RING) {
    const ringCount = Math.max(1, Math.ceil(count / maxPerRing));
    const per = new Array(ringCount).fill(0);

    let remaining = count;
    for (let i = 0; i < ringCount; i++) {
        const take = Math.min(remaining, maxPerRing);
        per[i] = take;
        remaining -= take;
    }
    return per;
}

// Newest first, so the innermost ring holds the most recent work (Flowers Unnamed is the latest).
export function byYearNewestFirst(paintings) {
    return [...paintings].sort((a, b) => {
        if (a.id === '_DSC0284') return -1;
        if (b.id === '_DSC0284') return 1;
        return (b.year || 0) - (a.year || 0);
    });
}

// Returns [{ painting, ring, radius, angle, width }] with max 5 paintings per ring.
// `paintings` is consumed in order, so sort before calling.
export function layoutPaintings(paintings, maxPerRing = MAX_PAINTINGS_PER_RING) {
    const perRing = distributeAcrossRings(paintings.length, maxPerRing);
    const radii = getRingRadii(paintings.length, maxPerRing);
    const placed = [];
    let index = 0;

    radii.forEach((radius, ring) => {
        const count = perRing[ring];
        const slice = paintings.slice(index, index + count);
        index += count;
        if (!slice.length) return;

        const widths = slice.map(p => panelSizeFor(p).width);

        // Angle each panel subtends at this radius, via the chord it spans.
        const spans = widths.map(w => 2 * Math.asin(Math.min(w / (2 * radius), 0.999)));
        const used = spans.reduce((a, b) => a + b, 0);

        // Whatever arc is left over becomes equal gaps between neighbours.
        const gap = Math.max((Math.PI * 2 - used) / slice.length, 0);

        // Golden-ratio rotation stagger across concentric rings to prevent radial line-up
        let cursor = (ring * 0.618033988749895 * Math.PI * 2) % (gap || 1);

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
