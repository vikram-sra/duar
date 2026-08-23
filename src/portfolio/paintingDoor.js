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
const GROUND_SINK = 0.04;    // frame bottoms sit just below the ground plane

// One unit box and one unit plane, scaled per mesh. Sharing the geometry keeps the
// draw-call and memory cost flat no matter how many paintings there are, and means
// teardown only has to leave these two objects alone.
export const unitBox = new THREE.BoxGeometry(1, 1, 1);
export const unitPlane = new THREE.PlaneGeometry(1, 1);
export const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd043,
    roughness: 0.18,
    metalness: 0.88,
    envMapIntensity: 1.6
});

// Dynamic real-time 4-stage frame material phasing driven by the 24-hr day/night cycle:
// 1. Peak daytime (Noon, sunAngle = PI/2) -> fully chrome gold frame
// 2. Sunset transition (Afternoon -> Dusk, sunAngle = PI) -> silver, chromy to dusk
// 3. Night (Midnight, sunAngle = 3*PI/2) -> metallic black
// 4. Sunrise (Dawn -> Morning, sunAngle = 0 -> PI/2) -> metallic black to bronze to chrome gold
const _goldColor = new THREE.Color(0xffd043);
const _goldEmissive = new THREE.Color(0x382202);

const _silverColor = new THREE.Color(0xe6eff8);
const _silverEmissive = new THREE.Color(0x121820);

const _duskColor = new THREE.Color(0x383e4a);
const _duskEmissive = new THREE.Color(0x06080c);

const _metallicBlackColor = new THREE.Color(0x14161c);
const _blackEmissive = new THREE.Color(0x020305);

const _bronzeColor = new THREE.Color(0xc97434);
const _bronzeEmissive = new THREE.Color(0x281003);

const _warmBronzeColor = new THREE.Color(0xdc8e46);
const _warmBronzeEmissive = new THREE.Color(0x301404);

export function updatePaintingFramesMaterial(sunAngle, extraMaterial = null) {
    const angleMod = ((sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const Q = Math.PI / 2;

    const applyMat = (mat) => {
        if (!mat) return;
        if (angleMod >= 0 && angleMod < Q) {
            // 4 -> 1: Sunrise -> Peak Daytime: Bronze -> Rich Chrome Gold
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
            mat.roughness = THREE.MathUtils.lerp(0.24, 0.16, t);
            mat.metalness = THREE.MathUtils.lerp(0.82, 0.92, t);
        } else if (angleMod >= Q && angleMod < Math.PI) {
            // 1 -> 2: Peak Daytime -> Sunset Transition: Chrome Gold -> Silver Chromy -> Dusk
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
            mat.roughness = THREE.MathUtils.lerp(0.16, 0.22, t);
            mat.metalness = THREE.MathUtils.lerp(0.92, 0.88, t);
        } else if (angleMod >= Math.PI && angleMod < Math.PI * 1.5) {
            // 2 -> 3: Sunset -> Deep Night: Dusk -> Metallic Black
            const t = (angleMod - Math.PI) / Q;
            mat.color.lerpColors(_duskColor, _metallicBlackColor, t);
            mat.emissive.lerpColors(_duskEmissive, _blackEmissive, t);
            mat.roughness = THREE.MathUtils.lerp(0.22, 0.30, t);
            mat.metalness = THREE.MathUtils.lerp(0.88, 0.80, t);
        } else {
            // 3 -> 4: Deep Night -> Sunrise: Metallic Black -> Rich Bronze
            const t = (angleMod - Math.PI * 1.5) / Q;
            mat.color.lerpColors(_metallicBlackColor, _bronzeColor, t);
            mat.emissive.lerpColors(_blackEmissive, _bronzeEmissive, t);
            mat.roughness = THREE.MathUtils.lerp(0.30, 0.24, t);
            mat.metalness = THREE.MathUtils.lerp(0.80, 0.82, t);
        }
    };

    applyMat(frameMaterial);
    if (extraMaterial) applyMat(extraMaterial);
}

// Panel size in world metres for a painting, from its real canvas measurements.
export function panelSizeFor(painting) {
    const heightIn = painting.heightIn || 16;
    const widthIn = painting.widthIn || heightIn * (painting.aspect || 1);
    return { width: widthIn * METRES_PER_INCH, height: heightIn * METRES_PER_INCH };
}

export function createPaintingDoor(group, painting) {
    const { width, height } = panelSizeFor(painting);
    const halfW = width / 2;
    const postX = halfW + FRAME_THICK / 2;
    const baseTopY = 0.20; // Top of the sunk base bar
    const lintelCenterY = baseTopY + height + FRAME_THICK / 2;
    const postH = baseTopY + height + FRAME_THICK + GROUND_SINK;
    const postCenterY = (baseTopY + height + FRAME_THICK - GROUND_SINK) / 2;
    const spanW = width + FRAME_THICK * 2;

    const post = (x) => {
        const m = new THREE.Mesh(unitBox, frameMaterial);
        m.scale.set(FRAME_THICK, postH, FRAME_THICK);
        m.position.set(x, postCenterY, 0);
        m.castShadow = true;
        m.name = 'Frame';
        group.add(m);
    };
    post(-postX);
    post(postX);

    const lintel = new THREE.Mesh(unitBox, frameMaterial);
    lintel.scale.set(spanW, FRAME_THICK, FRAME_THICK);
    lintel.position.set(0, lintelCenterY, 0);
    lintel.castShadow = true; lintel.name = 'Frame';
    group.add(lintel);

    const base = new THREE.Mesh(unitBox, frameMaterial);
    base.scale.set(spanW, 0.24, FRAME_THICK + 0.12);
    base.position.set(0, 0.08, 0);   // bottom at -0.04, top at 0.20
    base.castShadow = true; base.receiveShadow = true; base.name = 'Frame';
    base.renderOrder = 2;
    group.add(base);

    // The painting itself. Unlit and untone-mapped so the colours are exactly as
    // photographed and stay legible at midnight; starts dark and cross-fades in
    // once its texture arrives.
    const panelMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
        toneMapped: false,
        side: THREE.DoubleSide
    });
    const panel = new THREE.Mesh(unitPlane, panelMaterial);
    panel.scale.set(width, height, 1);
    panel.position.set(0, baseTopY + height / 2, 0);
    panel.castShadow = true;
    panel.name = 'Painting';
    group.add(panel);

    return { panel, panelMaterial, width, height, centreY: panel.position.y };
}

// Lazily attach the artwork, nearest ring first, so the paintings someone is
// actually looking at resolve before the distant ones.
const loader = new THREE.TextureLoader();

export function loadPaintingTexture(door, onLoaded) {
    if (door._textureRequested) return;
    door._textureRequested = true;

    loader.load(
        `/portfolio/${door.data.file}`,
        (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = 2;          // Sharp at glancing angles with low memory bandwidth
            texture.generateMipmaps = true;
            texture.minFilter = THREE.LinearMipmapLinearFilter;

            const mat = door.panelMaterial;
            if (!mat) { texture.dispose(); return; }   // door was cleared mid-flight
            mat.map = texture;
            mat.color.set(0xffffff);         // stop tinting once the art is there
            mat.needsUpdate = true;
            door._texture = texture;
            if (onLoaded) onLoaded(door);
        },
        undefined,
        () => console.warn('Painting failed to load:', door.data.file)
    );
}

// Distance at which the whole painting fits the viewport, whichever axis binds.
// 25% margin leaves the exit cross clear space below the frame.
export function focusDistanceFor(width, height, camera) {
    const vFov = (camera.fov * Math.PI) / 180;
    const fitHeight = (height / 2) / Math.tan(vFov / 2);
    const fitWidth = (width / 2) / (Math.tan(vFov / 2) * camera.aspect);
    return Math.max(fitHeight, fitWidth) * 1.25;
}
