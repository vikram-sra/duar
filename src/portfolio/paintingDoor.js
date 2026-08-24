import * as THREE from 'three';

// A painting rendered in the door format: same frame, same shadows — but sized to
// the real canvas. A 16in study and a 48in painting differ in the world exactly as
// they differ in the studio, so scale carries meaning instead of being uniform.

// World metres per inch of canvas. Proportions come straight from the real
// measurements; this only sets how large the whole gallery reads. At 0.28 a 16in
// study stands 4.5m and the 48in ਚਿੰਤਾ/ਚਿੰਤਨ stands 13.4m — monumental, and wide
// enough that the big pieces reach toward the next ring.
export const METRES_PER_INCH = 0.28;

const FRAME_THICK = 0.2;     // 2x thicker chunky architectural frame
const GROUND_SINK = 0.08;    // frame bottoms sit solidly below the ground plane for seamless shadow contact

// One unit box and one unit plane, scaled per mesh. Sharing the geometry keeps the
// draw-call and memory cost flat no matter how many paintings there are, and means
// teardown only has to leave these two objects alone.
export const unitBox = new THREE.BoxGeometry(1, 1, 1);
export const unitPlane = new THREE.PlaneGeometry(1, 1);

// Museum-grade Antique Champagne Gold & Bronze Frame Material
export const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0xcaa565,
    roughness: 0.28,
    metalness: 0.85,
    envMapIntensity: 1.4,
    shadowSide: THREE.DoubleSide
});

// Dynamic real-time 4-stage frame material phasing driven by the 24-hr day/night cycle:
const _goldColor = new THREE.Color(0xcaa565);      // Refined warm champagne gold
const _goldEmissive = new THREE.Color(0x181005);

const _silverColor = new THREE.Color(0xdce5ee);
const _silverEmissive = new THREE.Color(0x0e141a);

const _duskColor = new THREE.Color(0x323742);
const _duskEmissive = new THREE.Color(0x050608);

const _metallicBlackColor = new THREE.Color(0x121418);
const _blackEmissive = new THREE.Color(0x020204);

const _bronzeColor = new THREE.Color(0xb86c32);
const _bronzeEmissive = new THREE.Color(0x1c0b02);

const _warmBronzeColor = new THREE.Color(0xc98242);
const _warmBronzeEmissive = new THREE.Color(0x240f03);

export function updatePaintingFramesMaterial(sunAngle, extraMaterial = null) {
    const angleMod = ((sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const Q = Math.PI / 2;

    const applyMat = (mat) => {
        if (!mat) return;
        if (angleMod >= 0 && angleMod < Q) {
            // 4 -> 1: Sunrise -> Peak Daytime: Bronze -> Warm Champagne Gold
            const t = angleMod / Q;
            if (t < 0.40) {
                const subT = t / 0.40;
                mat.color.lerpColors(_bronzeColor, _warmBronzeColor, subT);
                mat.emissive.lerpColors(_bronzeEmissive, _warmBronzeEmissive, subT);
            } else {
                const subT = (t - 0.40) / 0.60;
                mat.color.lerpColors(_warmBronzeColor, _goldColor, subT);
                mat.emissive.lerpColors(_warmBronzeEmissive, _goldEmissive, subT);
            }
            mat.roughness = THREE.MathUtils.lerp(0.32, 0.26, t);
            mat.metalness = THREE.MathUtils.lerp(0.80, 0.88, t);
        } else if (angleMod >= Q && angleMod < Math.PI) {
            // 1 -> 2: Peak Daytime -> Sunset Transition: Champagne Gold -> Silver -> Dusk
            const t = (angleMod - Q) / Q;
            if (t < 0.65) {
                const subT = t / 0.65;
                mat.color.lerpColors(_goldColor, _silverColor, subT);
                mat.emissive.lerpColors(_goldEmissive, _silverEmissive, subT);
            } else {
                const subT = (t - 0.65) / 0.35;
                mat.color.lerpColors(_silverColor, _duskColor, subT);
                mat.emissive.lerpColors(_silverEmissive, _duskEmissive, subT);
            }
            mat.roughness = THREE.MathUtils.lerp(0.26, 0.32, t);
            mat.metalness = THREE.MathUtils.lerp(0.88, 0.82, t);
        } else if (angleMod >= Math.PI && angleMod < Math.PI * 1.5) {
            // 2 -> 3: Sunset -> Deep Night: Dusk -> Metallic Black
            const t = (angleMod - Math.PI) / Q;
            mat.color.lerpColors(_duskColor, _metallicBlackColor, t);
            mat.emissive.lerpColors(_duskEmissive, _blackEmissive, t);
            mat.roughness = THREE.MathUtils.lerp(0.32, 0.38, t);
            mat.metalness = THREE.MathUtils.lerp(0.82, 0.75, t);
        } else {
            // 3 -> 4: Deep Night -> Sunrise: Metallic Black -> Rich Bronze
            const t = (angleMod - Math.PI * 1.5) / Q;
            mat.color.lerpColors(_metallicBlackColor, _bronzeColor, t);
            mat.emissive.lerpColors(_blackEmissive, _bronzeEmissive, t);
            mat.roughness = THREE.MathUtils.lerp(0.38, 0.32, t);
            mat.metalness = THREE.MathUtils.lerp(0.75, 0.80, t);
        }
    };

    applyMat(frameMaterial);
    if (extraMaterial) applyMat(extraMaterial);
}

// Panel size in world metres for a painting, preserving the original image aspect ratio.
export function panelSizeFor(painting) {
    const aspect = painting.aspect || (painting.width && painting.height ? (painting.width / painting.height) : 1);
    const heightIn = painting.heightIn || 16;
    const height = heightIn * METRES_PER_INCH;
    const width = height * aspect;
    return { width, height };
}

/**
 * Creates a seamless inward-angle mitered frame geometry with straight flat angled cuts
 */
export function createInwardAngleFrameGeometry(width, height, border = 0.12, depth = 0.08, backDepth = 0.05) {
    const w = width / 2;
    const h = height / 2;
    const W = w + border;
    const H = h + border;
    const D = depth;
    const B = -backDepth;

    // 4 Inner aperture vertices at z = 0 (flush with canvas)
    const iBL = [-w, -h, 0];
    const iBR = [ w, -h, 0];
    const iTR = [ w,  h, 0];
    const iTL = [-w,  h, 0];

    // 4 Front outer rim vertices at z = D
    const oBL = [-W, -H, D];
    const oBR = [ W, -H, D];
    const oTR = [ W,  H, D];
    const oTL = [-W,  H, D];

    // 4 Back outer rim vertices at z = B
    const bBL = [-W, -H, B];
    const bBR = [ W, -H, B];
    const bTR = [ W,  H, B];
    const bTL = [-W,  H, B];

    // Build explicit non-indexed triangles for crisp flat planar facets
    const positions = [];

    const addTri = (p1, p2, p3) => {
        positions.push(...p1, ...p2, ...p3);
    };

    const addQuad = (p1, p2, p3, p4) => {
        addTri(p1, p2, p3);
        addTri(p1, p3, p4);
    };

    // 1. Four Straight Inward-Sloping Chamfer Facets (meeting at crisp 45° corner miters)
    // Bottom inward face:
    addQuad(oBL, oBR, iBR, iBL);

    // Top inward face:
    addQuad(iTL, iTR, oTR, oTL);

    // Right inward face:
    addQuad(iBR, oBR, oTR, iTR);

    // Left inward face:
    addQuad(oBL, iBL, iTL, oTL);

    // 2. Four Flat Outer Perimeter Side Faces (from z=D back to z=B)
    // Bottom outer side:
    addQuad(oBL, bBL, bBR, oBR);

    // Top outer side:
    addQuad(oTL, oTR, bTR, bTL);

    // Right outer side:
    addQuad(oBR, bBR, bTR, oTR);

    // Left outer side:
    addQuad(oTL, bTL, bBL, oBL);

    // 3. Flat Back Face (encloses back for solid shadow casting)
    addQuad(bBL, bTL, bTR, bBR);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.computeVertexNormals();
    return geometry;
}

export function createPaintingDoor(group, painting) {
    const { width, height } = panelSizeFor(painting);
    const border = Math.min(0.18, Math.max(0.10, width * 0.045));
    const depth = border * 0.75;
    const baseTopY = 0.16;
    const centerY = baseTopY + height / 2;

    // Single unified inward-angle beveled picture frame
    const frameGeo = createInwardAngleFrameGeometry(width, height, border, depth, 0.06);
    const frameMesh = new THREE.Mesh(frameGeo, frameMaterial);
    frameMesh.position.set(0, centerY, 0);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    frameMesh.name = 'Frame';
    group.add(frameMesh);

    // The painting canvas itself, sitting flush inside the frame aperture
    const panelMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
        toneMapped: false,
        side: THREE.DoubleSide
    });
    const panel = new THREE.Mesh(unitPlane, panelMaterial);
    panel.scale.set(width, height, 1);
    panel.position.set(0, centerY, 0.002);
    panel.castShadow = true;
    panel.name = 'Painting';
    group.add(panel);

    return { panel, panelMaterial, width, height, centreY: centerY };
}

// Texture streaming, in three tiers with a hard memory ceiling.
//
// A painting is only ever shown at the resolution the camera can actually resolve:
//
//   THUMB (240px)  every work, loaded once and then kept forever. ~4KB each, and
//                  retaining all of them costs a few MB — which buys an instant,
//                  allocation-free fallback whenever a larger tier is evicted.
//   MID   (512px)  the ring view. This is what a painting standing on a ring
//                  actually occupies on screen.
//   FULL  (1200px) only the work being looked at, and its immediate neighbours.
//
// The ceiling is what matters. Holding every painting at FULL costs ~300MB of GPU
// memory and grows with the collection, which is enough to have the tab killed on a
// phone. Tiers above THUMB are tracked in an LRU and evicted back down to their
// retained thumbnail as soon as the budget is exceeded, so residency is bounded by
// the budget rather than by how long someone browses.

export const TIER = { THUMB: 0, MID: 1, FULL: 2 };

// Bytes-on-GPU for an RGBA8 texture, including the mip chain (~33% overhead).
function gpuBytes(texture) {
    const img = texture.image;
    if (!img || !img.width || !img.height) return 0;
    const base = img.width * img.height * 4;
    return texture.generateMipmaps ? base * 1.3333 : base;
}

const isMobile = typeof navigator !== 'undefined' &&
    (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        (typeof window !== 'undefined' && window.innerWidth < 768));

// Deliberately well under what a browser will grant: the canvas backing store, the
// sculpture, the sky and the JS heap all draw from the same budget.
const BUDGET_BYTES = (isMobile ? 24 : 64) * 1024 * 1024;

const textureLoader = new THREE.TextureLoader();
let _supportsWebP = null;

export function checkWebPSupport() {
    if (_supportsWebP !== null) return Promise.resolve(_supportsWebP);
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            _supportsWebP = img.width > 0 && img.height > 0;
            resolve(_supportsWebP);
        };
        img.onerror = () => {
            _supportsWebP = false;
            resolve(false);
        };
        img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
}

// Image URLs carry a short content hash. Filenames are the artist's own and get
// reused when a work is re-shot, so without this a visitor holding a year-long
// cached copy would never see the new version.
function assetUrl(path, version) {
    return version ? `/portfolio/${path}?v=${version}` : `/portfolio/${path}`;
}

// Every door currently holding a texture above THUMB, newest use last.
const resident = new Set();
let residentBytes = 0;

export function textureBudget() {
    return { bytes: residentBytes, limit: BUDGET_BYTES, count: resident.size };
}

// Mark a painting as being looked at right now, so the LRU spares it.
export function touchPainting(door) {
    door._lastSeen = performance.now();
}

// Drop a painting back to its retained thumbnail. No load, no allocation — the
// thumbnail never left, so this is a pointer swap plus a dispose.
function evictToThumb(door) {
    if (!door._texture) return;
    residentBytes -= door._bytes || 0;
    resident.delete(door);
    door._texture.dispose();
    door._texture = null;
    door._bytes = 0;
    door._tier = TIER.THUMB;
    const mat = door.panelMaterial;
    if (mat && door._thumbTexture) {
        mat.map = door._thumbTexture;
        mat.needsUpdate = true;
    }
}

// Evict least-recently-seen paintings until the budget is satisfied. `protect` is the
// work being focused; evicting it would blank the one thing on screen.
function enforceBudget(protect) {
    if (residentBytes <= BUDGET_BYTES) return;
    const candidates = [...resident]
        .filter(d => d !== protect)
        .sort((a, b) => (a._lastSeen || 0) - (b._lastSeen || 0));
    for (const door of candidates) {
        if (residentBytes <= BUDGET_BYTES) break;
        evictToThumb(door);
    }
}

// THUMB: loaded once per painting and retained for the lifetime of the view.
export async function loadPaintingThumbnail(door) {
    if (door._thumbRequested) return;
    door._thumbRequested = true;

    const isWebp = await checkWebPSupport();
    const thumbUrl = assetUrl(
        isWebp && door.data.thumb
            ? door.data.thumb
            : (door.data.thumbJpg || door.data.thumb || door.data.file),
        door.data.v);

    textureLoader.load(
        thumbUrl,
        (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;

            const mat = door.panelMaterial;
            if (!mat) { texture.dispose(); return; }

            door._thumbTexture = texture;
            // A larger tier may have arrived first; keep it and hold the thumb in
            // reserve for eviction rather than downgrading what's already shown.
            if (!door._texture) {
                mat.map = texture;
                // Brightness is owned by updatePaintingLight(); only clear the
                // placeholder grey if nothing has tinted this panel yet.
                if (door._lit === undefined) mat.color.set(0xffffff);
                mat.needsUpdate = true;
                door._tier = TIER.THUMB;
            }
        },
        undefined,
        () => { /* a missing thumbnail just leaves the panel flat until MID lands */ }
    );
}

const MAX_CONCURRENT_LOADS = 3;
let activeLoads = 0;
const queue = [];

function pump() {
    while (activeLoads < MAX_CONCURRENT_LOADS && queue.length > 0) {
        const item = queue.shift();
        // Superseded while queued: something already loaded this tier or better.
        if ((item.door._tier || 0) >= item.tier) { item.door._pending = 0; continue; }
        activeLoads++;
        loadTier(item, () => {
            activeLoads--;
            if (item.onLoaded) item.onLoaded(item.door);
            pump();
        });
    }
}

async function loadTier(item, done) {
    const { door, tier } = item;
    const isWebp = await checkWebPSupport();
    const d = door.data;

    let path;
    if (tier === TIER.FULL) {
        path = isWebp && d.webp ? d.webp : d.file;
    } else {
        // A collection built before the mid tier existed still has to render.
        const mid = isWebp ? d.mid : (d.midJpg || d.mid);
        path = mid || (isWebp && d.webp ? d.webp : d.file);
    }
    const url = assetUrl(path, d.v);

    textureLoader.load(
        url,
        (texture) => {
            const mat = door.panelMaterial;
            door._pending = 0;

            // Lost a race with a higher tier while decoding.
            if (!mat || (door._tier || 0) >= tier) { texture.dispose(); done(); return; }

            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = 4;
            texture.generateMipmaps = true;
            texture.minFilter = THREE.LinearMipmapLinearFilter;

            if (door._texture) {
                residentBytes -= door._bytes || 0;
                resident.delete(door);
                door._texture.dispose();
            }

            mat.map = texture;
            if (door._lit === undefined) mat.color.set(0xffffff);
            mat.needsUpdate = true;

            door._texture = texture;
            door._tier = tier;
            door._bytes = gpuBytes(texture);
            door._lastSeen = performance.now();
            resident.add(door);
            residentBytes += door._bytes;

            enforceBudget(item.urgent ? door : null);
            done();
        },
        undefined,
        () => {
            door._pending = 0;
            console.warn('Painting failed to load:', url);
            done();
        }
    );
}

/**
 * Ask for a painting at `tier`. Downgrades are ignored — a work never loses
 * resolution except through eviction. `urgent` jumps the queue and protects the
 * work from being evicted by its own arrival.
 */
export function requestTier(door, tier, { urgent = false, onLoaded = null } = {}) {
    door._lastSeen = performance.now();

    if ((door._tier || 0) >= tier) {
        if (onLoaded) onLoaded(door);
        return;
    }
    if (door._pending >= tier) {
        if (urgent) {
            const i = queue.findIndex(q => q.door === door);
            if (i > 0) queue.unshift(queue.splice(i, 1)[0]);
            pump();
        }
        return;
    }

    door._pending = tier;
    const item = { door, tier, urgent, onLoaded };
    if (urgent) queue.unshift(item); else queue.push(item);
    pump();
}

// Release everything this door holds. Called from clearDoors() on a view switch.
export function releasePaintingTextures(door) {
    if (door._texture) {
        residentBytes -= door._bytes || 0;
        resident.delete(door);
        door._texture.dispose();
        door._texture = null;
    }
    if (door._thumbTexture) {
        door._thumbTexture.dispose();
        door._thumbTexture = null;
    }
    door._bytes = 0;
    door._tier = 0;
    door._pending = 0;
    door._thumbRequested = false;
}

export function resetTextureStreaming() {
    queue.length = 0;
    resident.clear();
    residentBytes = 0;
}

// Distance at which the whole painting fits the viewport, whichever axis binds.
// 25% margin leaves the exit cross clear space below the frame.
export function focusDistanceFor(width, height, camera) {
    const vFov = (camera.fov * Math.PI) / 180;
    const fitHeight = (height / 2) / Math.tan(vFov / 2);
    const fitWidth = (width / 2) / (Math.tan(vFov / 2) * camera.aspect);
    return Math.max(fitHeight, fitWidth) * 1.25;
}
