import * as THREE from 'three';

// A painting rendered in the door format: same frame, same shadows — but sized to
// the real canvas. A 16in study and a 48in painting differ in the world exactly as
// they differ in the studio, so scale carries meaning instead of being uniform.

// World metres per inch of canvas. Proportions come straight from the real
// measurements; this only sets how large the whole gallery reads. At 0.28 a 16in
// study stands 4.5m and the 48in ਚਿੰਤਾ/ਚਿੰਤਨ stands 13.4m — monumental, and wide
// enough that the big pieces reach toward the next ring.
export const METRES_PER_INCH = 0.28;

const FRAME_THICK = 0.1;
const GROUND_SINK = 0.02;   // frame bottoms sit just below the ground plane

// One unit box and one unit plane, scaled per mesh. Sharing the geometry keeps the
// draw-call and memory cost flat no matter how many paintings there are, and means
// teardown only has to leave these two objects alone.
export const unitBox = new THREE.BoxGeometry(1, 1, 1);
export const unitPlane = new THREE.PlaneGeometry(1, 1);
export const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 });

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
    const postH = height + FRAME_THICK * 2;
    const spanW = width + FRAME_THICK * 2;
    const centreY = postH / 2 - GROUND_SINK;

    const post = (x) => {
        const m = new THREE.Mesh(unitBox, frameMaterial);
        m.scale.set(FRAME_THICK, postH, FRAME_THICK);
        m.position.set(x, centreY, 0);
        m.castShadow = true;
        m.name = 'Frame';
        group.add(m);
    };
    post(-postX);
    post(postX);

    const lintel = new THREE.Mesh(unitBox, frameMaterial);
    lintel.scale.set(spanW, FRAME_THICK, FRAME_THICK);
    lintel.position.set(0, postH - GROUND_SINK - FRAME_THICK / 2, 0);
    lintel.castShadow = true; lintel.name = 'Frame';
    group.add(lintel);

    const base = new THREE.Mesh(unitBox, frameMaterial);
    base.scale.set(spanW, 0.12, FRAME_THICK);
    base.position.set(0, 0.04, 0);   // bottom at -0.02, sunk for shadow contact
    base.castShadow = true; base.receiveShadow = true; base.name = 'Frame';
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
    panel.position.set(0, height / 2 - GROUND_SINK + FRAME_THICK / 2, 0);
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
            texture.anisotropy = 4;          // paintings are often seen at a glancing angle
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
