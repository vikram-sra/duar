import { panelSizeFor } from './paintingDoor.js';

// Placing paintings of wildly different widths on concentric rings.
//
// Aspect ratios run 0.508 → 2.136, so at a fixed 3.5m height the panels are
// 1.8m → 7.5m wide. Uniform angular spacing would crowd the landscapes into their
// neighbours while leaving gaps around the tall portraits, so each painting's arc
// is proportional to the width it actually occupies.

export const BASE_RADIUS = 15;
export const RING_SPACING = 8;

export function getFibonacciCapacities(count) {
    if (count <= 0) return [2];
    const seq = [2, 3];
    let sum = 5;
    while (sum < count) {
        const next = seq[seq.length - 1] + seq[seq.length - 2];
        seq.push(next);
        sum += next;
    }
    return seq;
}

export function getRingRadii(paintingCount) {
    const perRing = distributeAcrossRings(paintingCount);
    const ringCount = Math.max(1, perRing.length);
    return Array.from({ length: ringCount }, (_, i) => BASE_RADIUS + i * RING_SPACING);
}

// Distributes paintings according to Fibonacci capacities: 2, 3, 5, 8, 13, 21, ...
export function distributeAcrossRings(count) {
    if (count <= 0) return [];
    const capacities = getFibonacciCapacities(count);
    const per = [];

    let remaining = count;
    for (let i = 0; i < capacities.length; i++) {
        const take = Math.min(remaining, capacities[i]);
        if (take <= 0) break;
        per.push(take);
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

// Returns [{ painting, ring, radius, angle, width }] placed on concentric rings according to Fibonacci distribution
// with dynamically optimized angular phase per ring to maximize radial sightline clearance across all rings.
export function layoutPaintings(paintings) {
    const perRing = distributeAcrossRings(paintings.length);
    const radii = getRingRadii(paintings.length);
    const placed = [];
    const allAngs = [];
    let index = 0;

    radii.forEach((radius, ring) => {
        const count = perRing[ring];
        const slice = paintings.slice(index, index + count);
        index += count;
        if (!slice.length) return;

        const widths = slice.map(p => panelSizeFor(p).width);
        const halfAngles = widths.map(w => Math.asin(Math.min(w / (2 * radius), 0.999)));
        const step = (Math.PI * 2) / count;

        let bestPhase = 0;
        let maxMinClearance = -Infinity;

        if (ring === 0) {
            // First circle items sit at 90° and 270° (left and right) for a clear front entrance sightline
            bestPhase = Math.PI / 2;
        } else {
            // Search angular phases to maximize minimum line-of-sight clearance with all inner ring artworks
            const CANDIDATES = 720;
            for (let c = 0; c < CANDIDATES; c++) {
                const candidatePhase = (c / CANDIDATES) * step;
                let worstClearance = Infinity;

                for (let i = 0; i < count; i++) {
                    const centerAng = (candidatePhase + i * step) % (Math.PI * 2);
                    const hA = halfAngles[i];

                    for (const prev of allAngs) {
                        let diff = Math.abs(centerAng - prev.center);
                        if (diff > Math.PI) diff = Math.PI * 2 - diff;
                        const clearance = diff - (hA + prev.halfAngle);
                        // Weight inner rings closer to current ring higher
                        const weight = Math.pow(0.7, ring - prev.ring - 1);
                        const weightedClearance = clearance * weight;
                        if (weightedClearance < worstClearance) {
                            worstClearance = weightedClearance;
                        }
                    }
                }

                if (worstClearance > maxMinClearance) {
                    maxMinClearance = worstClearance;
                    bestPhase = candidatePhase;
                }
            }
        }

        slice.forEach((painting, i) => {
            const angle = (bestPhase + i * step) % (Math.PI * 2);
            allAngs.push({ center: angle, halfAngle: halfAngles[i], ring });
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
