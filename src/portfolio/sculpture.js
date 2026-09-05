import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { frameMaterial } from './paintingDoor.js';
import { getAssetUrl } from '../utils/paths.js';

// Ceramic centerpiece sculpture for the portfolio gallery view.
// Loads the 1:1 photogrammetry / LiDAR iPhone 3D scan from '/models/center_sculpture.glb',
// automatically centered, grounded, and scaled to monumental gallery scale (~3.2m tall).

function createSoftShadowTexture(tight = false) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);

    if (tight) {
        // Deep tight contact occlusion under footprint
        grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.96)');
        grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.78)');
        grad.addColorStop(0.65, 'rgba(0, 0, 0, 0.38)');
        grad.addColorStop(0.85, 'rgba(0, 0, 0, 0.12)');
        grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    } else {
        // Rich soft ambient penumbra
        grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.65)');
        grad.addColorStop(0.28, 'rgba(0, 0, 0, 0.42)');
        grad.addColorStop(0.58, 'rgba(0, 0, 0, 0.20)');
        grad.addColorStop(0.82, 'rgba(0, 0, 0, 0.05)');
        grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    const tex = new THREE.CanvasTexture(canvas);
    return tex;
}

export function createCeramicSculpture(loadingManager) {
    const group = new THREE.Group();
    group.name = 'CenterSculpture';

    // 1. Broad soft ambient ground shadow
    const wideShadowGeo = new THREE.PlaneGeometry(6.2, 6.2);
    const wideShadowMat = new THREE.MeshBasicMaterial({
        map: createSoftShadowTexture(false),
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
    });
    const wideShadow = new THREE.Mesh(wideShadowGeo, wideShadowMat);
    wideShadow.rotation.x = -Math.PI / 2;
    wideShadow.position.y = 0.002;
    wideShadow.renderOrder = 1;
    group.add(wideShadow);

    // 2. Tight contact ambient occlusion core
    const coreShadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const coreShadowMat = new THREE.MeshBasicMaterial({
        map: createSoftShadowTexture(true),
        transparent: true,
        opacity: 0.98,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2
    });
    const coreShadow = new THREE.Mesh(coreShadowGeo, coreShadowMat);
    coreShadow.rotation.x = -Math.PI / 2;
    coreShadow.position.y = 0.004;
    coreShadow.renderOrder = 2;
    group.add(coreShadow);

    // Interaction hitbox centered at (0, 0)
    const hitGeo = new THREE.CylinderGeometry(1.8, 2.1, 3.8, 16);
    hitGeo.translate(0, 1.9, 0);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitbox = new THREE.Mesh(hitGeo, hitMat);
    hitbox.name = 'SculptureHitbox';
    group.add(hitbox);

    // Subtle warm interior ceramic warmth
    const internalGlow = new THREE.PointLight(0xf5c088, 0.65, 4.0, 2.0);
    internalGlow.position.set(0.0, 1.7, 0.0);
    group.add(internalGlow);

    // Load the scanned .glb model
    const loader = new GLTFLoader(loadingManager);
    loader.load(
        getAssetUrl('models/center_sculpture.glb'),
        (gltf) => {
            const model = gltf.scene;
            model.name = 'SculptureScannedModel';

            // Find exact apex (highest peak) and base in original geometry
            const rawApex = new THREE.Vector3();
            let rawMaxY = -Infinity;
            let rawMinY = Infinity;

            model.traverse((child) => {
                if (child.isMesh && child.geometry) {
                    const pos = child.geometry.attributes.position;
                    const v = new THREE.Vector3();
                    for (let i = 0; i < pos.count; i++) {
                        v.fromBufferAttribute(pos, i);
                        if (v.y > rawMaxY) {
                            rawMaxY = v.y;
                            rawApex.copy(v);
                        }
                        if (v.y < rawMinY) {
                            rawMinY = v.y;
                        }
                    }
                }
            });

            // Gallery centerpiece height (~3.6m tall)
            const targetHeight = 3.6;
            const rawHeight = rawMaxY - rawMinY;
            const scaleFactor = targetHeight / (rawHeight || 1.0);

            // Align apex and central axis to EXACT (0, 0) dead center
            model.position.x = -rawApex.x * scaleFactor;
            model.position.z = -rawApex.z * scaleFactor;
            model.position.y = -rawMinY * scaleFactor - 0.085;
            model.scale.setScalar(scaleFactor);

            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        child.material.roughness = 0.52;
                        child.material.metalness = 0.04;
                        child.material.envMapIntensity = 0.75;

                        // Contact ambient occlusion gradient on the ceramic base to naturally blend into ground
                        child.material.onBeforeCompile = (shader) => {
                            shader.vertexShader = `
                                varying vec3 vGroundWorldPos;
                            \n` + shader.vertexShader;
                            shader.vertexShader = shader.vertexShader.replace(
                                '#include <worldpos_vertex>',
                                `
                                #include <worldpos_vertex>
                                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                                `
                            );
                            shader.fragmentShader = `
                                varying vec3 vGroundWorldPos;
                            \n` + shader.fragmentShader;
                            shader.fragmentShader = shader.fragmentShader.replace(
                                '#include <dithering_fragment>',
                                `
                                #include <dithering_fragment>
                                float groundH = max(0.0, vGroundWorldPos.y);
                                float baseAO = smoothstep(0.0, 0.45, groundH);
                                gl_FragColor.rgb *= mix(0.42, 1.0, baseAO);
                                `
                            );
                        };
                    }
                }
            });

            group.add(model);
            group.userData.scannedModel = model;

            // Apex in group space is now at (0, apexY, 0) - Dead Center
            const apexY = rawMaxY * scaleFactor + model.position.y;

            // Sacred Red Thread tied directly to the physical top of the sculpture with silky curved 3D wave physics
            const threadHeight = 720; // doubled per feedback: reaches further skyward before fog swallows it
            // openEnded: true -- the caps on a 0.016-radius tube are invisible discs;
            // there's nothing at the (fog-hidden) tip or the base to justify the triangles.
            const threadGeo = new THREE.CylinderGeometry(0.016, 0.016, threadHeight, 12, 1000, true);
            threadGeo.translate(0, threadHeight / 2, 0);

            const threadUniforms = {
                uTime: { value: 0.0 },
                uMotion: { value: 0.0 },
                uDrag: { value: new THREE.Vector2(0.0, 0.0) },
                uWind: { value: new THREE.Vector2(0.0, 0.0) }
            };

            // Matte and near-unsaturated at rest -- a fine fiber scatters light softly and
            // has no metallic highlight; the previous roughness/metalness read as a shiny
            // rubber cord. Its "redness" now comes mostly from the fresnel term added
            // below, which brightens toward saturated red at grazing angles -- the way
            // looking along more of a translucent fibre's length, or through more of a
            // shard of red glass, shows more of its colour than looking at it face-on.
            const threadMat = new THREE.MeshStandardMaterial({
                color: 0xd81c1c,
                emissive: 0x991010,
                emissiveIntensity: 1.3,
                roughness: 0.88,
                metalness: 0.02
            });

            threadMat.onBeforeCompile = (shader) => {
                shader.uniforms.uTime = threadUniforms.uTime;
                shader.uniforms.uMotion = threadUniforms.uMotion;
                shader.uniforms.uDrag = threadUniforms.uDrag;
                shader.uniforms.uWind = threadUniforms.uWind;

                shader.vertexShader = `
                    uniform float uTime;
                    uniform float uMotion;
                    uniform vec2 uDrag;
                    uniform vec2 uWind;
                    varying float vFresnel;
                \n` + shader.vertexShader;

                shader.vertexShader = shader.vertexShader.replace(
                    '#include <begin_vertex>',
                    `
                    #include <begin_vertex>
                    float h = max(0.0, transformed.y);

                    // A real fiber is never a perfectly uniform rod. This is a fixed,
                    // per-height irregularity (two mismatched sine frequencies, not
                    // animated) rather than true noise -- cheap, and non-repeating over
                    // a length this long.
                    float radius0 = length(position.xz);
                    vec2 radialDir = radius0 > 0.0001 ? position.xz / radius0 : vec2(0.0);
                    float radiusNoise = 1.0 + 0.22 * sin(h * 2.7 + 11.3) * sin(h * 0.9 + 3.1);

                    // Guarantee a minimum on-screen width. At 0.016 world units radius,
                    // the tube's projected width falls below a pixel well before the
                    // thread is actually far away, and standard rasterization doesn't
                    // reliably draw sub-pixel geometry every frame -- it flickers in and
                    // out, which is what "disappears in parts" actually was. True
                    // delicate thinness still holds up close; this only compensates once
                    // perspective would otherwise erase it.
                    vec3 worldPosApprox = (modelMatrix * vec4(transformed, 1.0)).xyz;
                    float camDist = distance(cameraPosition, worldPosApprox);
                    float minRadiusScale = max(1.0, camDist / 55.0);

                    transformed.x = radialDir.x * radius0 * radiusNoise * minRadiusScale;
                    transformed.z = radialDir.y * radius0 * radiusNoise * minRadiusScale;

                    // Smooth progressive root easement
                    float anchor = smoothstep(0.0, 1.8, h);

                    // Gentle, smooth upward traveling harmonics with relaxed speeds
                    float travel1 = uTime * 0.95 - h * 0.22;  // Soft rhythmic primary wave
                    float travel2 = uTime * 1.45 - h * 0.38;  // Gentle counter-phase wave
                    float travel3 = uTime * 0.55 - h * 0.10;  // Broad sweeping spatial wave

                    // Smooth reduced-amplitude alternating bends
                    float bendX = sin(travel1) * 0.28 - sin(travel2) * 0.16 + cos(travel3) * 0.20;
                    float bendZ = cos(travel1 + 1.2) * 0.28 + cos(travel2 - 0.9) * 0.16 + sin(travel3 + 2.1) * 0.20;

                    // Smooth trailing drag response
                    float whipLag = sin(uTime * 1.5 - h * 0.16) * 0.20 + cos(uTime * 0.9 - h * 0.08) * 0.12;
                    vec2 dynamicDrag = uDrag * (0.55 + whipLag * 0.30);

                    // Combine all 3D curved forces: scaled strictly by uMotion so default is 100% straight up
                    float waveStrength = uMotion * 0.52;
                    float dx = anchor * (bendX * waveStrength + dynamicDrag.x * (0.5 + uMotion * 0.3));
                    float dz = anchor * (bendZ * waveStrength + dynamicDrag.y * (0.5 + uMotion * 0.3));

                    // A thread never sits perfectly still, even with the camera at rest --
                    // a faint always-on flutter, independent of uMotion/uDrag, so it never
                    // reads as a rigid rod between camera moves.
                    float flutter = anchor * 0.035;
                    dx += sin(uTime * 2.6 + h * 0.6) * flutter;
                    dz += cos(uTime * 2.1 + h * 0.5 + 1.7) * flutter;

                    // Soft atmospheric expansion higher up
                    float heightGain = 1.0 + smoothstep(3.0, 45.0, h) * 1.15;
                    transformed.x += dx * heightGain;
                    transformed.z += dz * heightGain;

                    // How edge-on is this surface to the viewer right now? Feeds the
                    // fragment shader's grazing-angle red boost (see below).
                    vec3 worldNormalForFresnel = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
                    vec3 worldPosForFresnel = (modelMatrix * vec4(transformed, 1.0)).xyz;
                    vec3 viewDirForFresnel = normalize(cameraPosition - worldPosForFresnel);
                    vFresnel = pow(1.0 - clamp(abs(dot(viewDirForFresnel, worldNormalForFresnel)), 0.0, 1.0), 2.2);
                    `
                );

                shader.fragmentShader = `
                    varying float vFresnel;
                \n` + shader.fragmentShader;

                shader.fragmentShader = shader.fragmentShader.replace(
                    '#include <dithering_fragment>',
                    `
                    #include <dithering_fragment>
                    // Grazing viewing angle -- looking along the thread's length, through
                    // more of its cross-section rather than square at its side -- reads as
                    // a richer, more saturated red, the way a shard of red glass darkens
                    // toward its own colour when you look through more of its thickness.
                    // This runs after tonemapping (dithering_fragment is the last
                    // chunk), so values are already clamped to [0,1] display range --
                    // 1.0 red is already fully saturated here, pushing higher would be
                    // a dead value.
                    vec3 threadRed = vec3(1.0, 0.10, 0.07);
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, threadRed, vFresnel * 0.88);
                    `
                );
            };

            const redThread = new THREE.Mesh(threadGeo, threadMat);
            redThread.position.set(0, apexY, 0);
            redThread.name = 'SculptureRedThread';
            // The wave-bend and radius adjustments above happen entirely in the vertex
            // shader, so the CPU-computed bounding sphere never reflects the actual
            // displaced geometry. Frustum culling against that stale bounds was
            // contributing to "disappears in parts" -- this mesh always renders instead.
            redThread.frustumCulled = false;
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
