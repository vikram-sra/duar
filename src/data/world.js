// Door content lives outside the code so it can change without a rebuild.
// Today it's a static file; in Phase 1 loadWorld() becomes a database query
// returning the same shape, and nothing downstream has to change.

// Fallback layout if world.json omits settings.
export const DEFAULT_LAYOUT = { doorsPerRing: 5, baseRadius: 15, radiusStep: 8 };

export async function loadWorld() {
    try {
        const res = await fetch('/world.json', { cache: 'no-cache' });
        if (!res.ok) throw new Error(`world.json ${res.status}`);
        return await res.json();
    } catch (e) {
        console.error('Failed to load world:', e);
        return { world: {}, doors: [] };
    }
}

// Place door `index` on a ring, filling inner rings first so the world grows
// outward as doors are added. Doors may pin themselves with explicit ring/slot.
export function layoutDoor(index, data, layout) {
    const { doorsPerRing, baseRadius, radiusStep } = layout;
    const ring = Number.isInteger(data.ring) ? data.ring : Math.floor(index / doorsPerRing);
    const slot = Number.isInteger(data.slot) ? data.slot : index % doorsPerRing;
    const radius = baseRadius + (ring * radiusStep);
    // Odd rings sit half a slot around, so doors don't line up radially.
    const offset = (ring % 2 === 1) ? (Math.PI / doorsPerRing) : 0;
    const angle = ((slot * Math.PI * 2) / doorsPerRing) + offset;
    return { x: Math.sin(angle) * radius, z: Math.cos(angle) * radius, ring, slot };
}
