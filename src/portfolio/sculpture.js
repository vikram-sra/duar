import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Ceramic centerpiece sculpture for the portfolio gallery view.
// Loads the 1:1 photogrammetry / LiDAR iPhone 3D scan from '/models/center_sculpture.glb',
// automatically centered, grounded, and scaled to monumental gallery scale (~3.2m tall).

function createContactShadowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256; canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
    grad.addColorStop(0.32, 'rgba(0, 0, 0, 0.72)');
    grad.addColorStop(0.68, 'rgba(0, 0, 0, 0.25)');
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
}

export function createCeramicSculpture(loadingManager) {
    const group = new THREE.Group();
    group.name = 'CenterSculpture';

    // Deep ambient occlusion contact shadow disc to ground the sculpture solidly
    const shadowGeo = new THREE.PlaneGeometry(3.8, 3.8);
    const shadowMat = new THREE.MeshBasicMaterial({
        map: createContactShadowTexture(),
        transparent: true,
        opacity: 0.94,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = 0.004;
    contactShadow.renderOrder = 1;
    group.add(contactShadow);

    // Interaction hitbox scaled to match centerpiece
    const hitGeo = new THREE.CylinderGeometry(1.8, 2.1, 3.8, 16);
    hitGeo.translate(0, 1.9, 0);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitbox = new THREE.Mesh(hitGeo, hitMat);
    hitbox.name = 'SculptureHitbox';
    group.add(hitbox);

    // Subtle warm interior ceramic warmth
    const internalGlow = new THREE.PointLight(0xf5c088, 0.65, 4.0, 2.0);
    internalGlow.position.set(0.15, 1.7, 0.2);
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

            // Gallery centerpiece height (reduced 25% to ~3.6m tall)
            const targetHeight = 3.6;
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

            // Calculate the exact highest physical apex point on the loaded sculpture mesh
            model.updateMatrixWorld(true);
            const apex = new THREE.Vector3(0, 0, 0);
            let maxY = -Infinity;

            model.traverse((child) => {
                if (child.isMesh && child.geometry) {
                    const pos = child.geometry.attributes.position;
                    const v = new THREE.Vector3();
                    for (let i = 0; i < pos.count; i++) {
                        v.fromBufferAttribute(pos, i);
                        v.applyMatrix4(child.matrixWorld); // to world space
                        group.worldToLocal(v);              // to group space
                        if (v.y > maxY) {
                            maxY = v.y;
                            apex.copy(v);
                        }
                    }
                }
            });

            // Sacred Red Thread tied directly to the physical top of the sculpture with silky curved jiggle physics
            const threadHeight = 1800;
            const threadGeo = new THREE.CylinderGeometry(0.016, 0.016, threadHeight, 8, 512);
            threadGeo.translate(0, threadHeight / 2, 0);

            const threadUniforms = {
                uTime: { value: 0.0 },
                uMotion: { value: 0.0 },
                uDir: { value: new THREE.Vector2(1.0, 0.0) }
            };

            const threadMat = new THREE.MeshStandardMaterial({
                color: 0xdd1818,
                emissive: 0xaa0808,
                emissiveIntensity: 0.85,
                roughness: 0.4,
                metalness: 0.1
            });

            threadMat.onBeforeCompile = (shader) => {
                shader.uniforms.uTime = threadUniforms.uTime;
                shader.uniforms.uMotion = threadUniforms.uMotion;
                shader.uniforms.uDir = threadUniforms.uDir;

                shader.vertexShader = `
                    uniform float uTime;
                    uniform float uMotion;
                    uniform vec2 uDir;
                \n` + shader.vertexShader;

                shader.vertexShader = shader.vertexShader.replace(
                    '#include <begin_vertex>',
                    `
                    #include <begin_vertex>
                    float h = max(0.0, transformed.y);
                    // Gradual, smooth curvature easement from the sculpture apex
                    float anchor = smoothstep(0.0, 5.0, h);

                    // Long-wavelength silky harmonic curves (no sharp zigzag bends)
                    float wave1 = sin(uTime * 2.2 + h * 0.042) * 0.45;
                    float wave2 = cos(uTime * 3.1 - h * 0.024) * 0.30;
                    float wave3 = sin(uTime * 1.4 + h * 0.012) * 0.65;

                    // Smooth harmonic jiggle response upon scene motion/rotation
                    float jiggleOsc = sin(uTime * 4.8 + h * 0.035) * 0.5;
                    float jiggleAmp = (wave1 + wave3 + jiggleOsc) * (0.28 + uMotion * 1.2);

                    transformed.x += anchor * (uDir.x * jiggleAmp + wave2 * 0.35);
                    transformed.z += anchor * (uDir.y * jiggleAmp + wave1 * 0.35);
                    `
                );
            };

            const redThread = new THREE.Mesh(threadGeo, threadMat);
            redThread.position.set(apex.x, apex.y, apex.z);
            redThread.name = 'SculptureRedThread';
            group.add(redThread);
            group.userData.threadUniforms = threadUniforms;
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
