import * as THREE from 'three';

// A painting rendered in the door format: same frame, same shadows, same 3.5m
// opening height — but the width follows the painting's aspect ratio, and the
// panel is the artwork itself rather than a blank monolith.

export const PANEL_HEIGHT = 3.5;    // opening height, matches the default doors
const FRAME_THICK = 0.1;
const POST_HEIGHT = 3.6;
const POST_Y = 1.78;                // centre; bottom sits at -0.02, sunk into the ground
const PANEL_Y = 1.75;

// Shared across every painting — one material and one geometry for all frames.
// Exported so teardown can identify them and leave them alone; disposing either
// would blank the frames of every other painting.
export const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 });
export const postGeometry = new THREE.BoxGeometry(FRAME_THICK, POST_HEIGHT, FRAME_THICK);

export function panelWidthFor(aspect) {
    return PANEL_HEIGHT * aspect;
}

// Builds frame + painting panel into `group`. Returns the pieces the caller keeps.
// The texture is NOT loaded here: geometry is laid out from the manifest's
// dimensions so the whole gallery exists before any image downloads.
export function createPaintingDoor(group, painting) {
    const width = panelWidthFor(painting.aspect);
    const halfW = width / 2;
    const postX = halfW + FRAME_THICK / 2;
    const spanW = width + FRAME_THICK * 2;

    const left = new THREE.Mesh(postGeometry, frameMaterial);
    left.position.set(-postX, POST_Y, 0); left.castShadow = true; left.name = 'Frame';
    group.add(left);

    const right = new THREE.Mesh(postGeometry, frameMaterial);
    right.position.set(postX, POST_Y, 0); right.castShadow = true; right.name = 'Frame';
    group.add(right);

    // Lintel and base span the painting's own width.
    const lintel = new THREE.Mesh(new THREE.BoxGeometry(spanW, FRAME_THICK, FRAME_THICK), frameMaterial);
    lintel.position.set(0, POST_HEIGHT - 0.02, 0); lintel.castShadow = true; lintel.name = 'Frame';
    group.add(lintel);

    const base = new THREE.Mesh(new THREE.BoxGeometry(spanW, 0.12, FRAME_THICK), frameMaterial);
    base.position.set(0, 0.04, 0);
    base.castShadow = true; base.receiveShadow = true; base.name = 'Frame';
    group.add(base);

    // The painting. Unlit and untone-mapped so the colours are exactly as
    // photographed and stay legible at midnight, when the scene is nearly black.
    // Starts as flat dark grey and cross-fades once the texture arrives.
    const panelMaterial = new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
        toneMapped: false,
        side: THREE.DoubleSide
    });
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(width, PANEL_HEIGHT), panelMaterial);
    panel.position.set(0, PANEL_Y, 0);
    panel.castShadow = true;
    panel.name = 'Painting';
    group.add(panel);

    return { panel, panelMaterial, width };
}

// Lazily attach the artwork. Called nearest-ring-first so the paintings a viewer
// is actually looking at resolve before the distant ones.
const loader = new THREE.TextureLoader();

export function loadPaintingTexture(door, onLoaded) {
    if (door._textureRequested) return;
    door._textureRequested = true;

    loader.load(
        `/portfolio/${door.data.file}`,
        (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.anisotropy = 4;          // paintings are viewed at a glancing angle
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
export function focusDistanceFor(width, height, camera) {
    const vFov = (camera.fov * Math.PI) / 180;
    const fitHeight = (height / 2) / Math.tan(vFov / 2);
    const fitWidth = (width / 2) / (Math.tan(vFov / 2) * camera.aspect);
    return Math.max(fitHeight, fitWidth) * 1.15;   // 15% breathing room
}
