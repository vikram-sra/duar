import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Ceramic centerpiece sculpture for the portfolio gallery view.
// Loads the 1:1 photogrammetry / LiDAR iPhone 3D scan from '/models/center_sculpture.glb',
// automatically centered, grounded, and scaled to monumental gallery scale (~3.2m tall).

export function createCeramicSculpture(loadingManager) {
    const group = new THREE.Group();
    group.name = 'CenterSculpture';

    // Interaction hitbox scaled to match centerpiece
    const hitGeo = new THREE.CylinderGeometry(2.4, 2.8, 5.0, 16);
    hitGeo.translate(0, 2.5, 0);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitbox = new THREE.Mesh(hitGeo, hitMat);
    hitbox.name = 'SculptureHitbox';
    group.add(hitbox);

    // Subtle warm interior ceramic warmth
    const internalGlow = new THREE.PointLight(0xf5c088, 0.65, 5.0, 2.0);
    internalGlow.position.set(0.2, 2.2, 0.3);
    group.add(internalGlow);

    // Load the scanned .glb model
    const loader = new GLTFLoader(loadingManager);
    loader.load(
        '/models/center_sculpture.glb',
        (gltf) => {
            const model = gltf.scene;
            model.name = 'SculptureScannedModel';

            // Compute bounds for exact centering & grounding
            const bbox = new THREE.Box3().setFromObject(model);
            const size = bbox.getSize(new THREE.Vector3());
            const center = bbox.getCenter(new THREE.Vector3());

            // Monumental centerpiece height (~4.8m tall)
            const targetHeight = 4.8;
            const scaleFactor = targetHeight / (size.y || 1.0);

            // Center horizontally and ensure base is flush/touching the ground plane (y = 0)
            model.position.x = -center.x * scaleFactor;
            model.position.z = -center.z * scaleFactor;
            model.position.y = -bbox.min.y * scaleFactor - 0.03;
            model.scale.setScalar(scaleFactor);

            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        child.material.roughness = 0.48;
                        child.material.metalness = 0.04;
                        child.material.envMapIntensity = 0.8;
                    }
                }
            });

            group.add(model);
            group.userData.scannedModel = model;
        },
        undefined,
        (err) => {
            console.error('Error loading center_sculpture.glb:', err);
        }
    );

    group.userData = {
        isSculpture: true,
        hitbox
    };

    return group;
}
