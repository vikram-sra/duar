import * as THREE from 'three';

// Static world geometry: ground plane, the concentric rings, the central cone,
// the horizon sky dome, and drifting dust. Each factory returns what it makes;
// the caller owns adding it to the scene and holding the reference.

export function createGround() {
    const groundGeo = new THREE.PlaneGeometry(5000, 5000, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({
        color: 0x2c3e50,
        roughness: 0.9,
        metalness: 0.1,
        polygonOffset: true,
        polygonOffsetFactor: 1, // Push back
        polygonOffsetUnits: 1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    return ground;
}

// Returns { material, rings } where rings is [{ mesh, speed }] — the caller
// adds each mesh and spins them in the render loop.
export function createSacredGeometry() {
    const material = new THREE.MeshStandardMaterial({
        color: 0xaaaaaa,
        metalness: 1.0,
        roughness: 0.1,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
    });
    const rings = [];
    const baseR = 15; const stepR = 8;
    for (let i = 0; i < 5; i++) {
        const r = baseR + (i * stepR);
        const mesh = new THREE.Mesh(new THREE.RingGeometry(r - 0.125, r + 0.125, 128), material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = 0.03; // Raised slightly to avoid flickering
        mesh.receiveShadow = true;
        mesh.renderOrder = 1;
        const speed = (i % 2 === 0 ? 1 : -1) * (0.0003 + (i * 0.0002));
        rings.push({ mesh, speed });
    }
    return { material, rings };
}

export function createCentralRock() {
    const geo = new THREE.ConeGeometry(1.5, 3.0, 64, 32);
    geo.translate(0, 1.5, 0); // base sits at local y=0, flush with the ground
    const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 1.0,
        envMapIntensity: 1.0
    });
    const rock = new THREE.Mesh(geo, mat);
    rock.castShadow = true;
    rock.receiveShadow = true;
    rock.visible = false; // revealed once loading finishes
    return rock;
}

// A large gradient sphere behind everything: keeps the sky/fog flat color, but adds a
// faint cool band hugging the horizon so night never reads as fully, uniformly black.
// Drive uSkyColor / uGlowStrength per frame (see the day-night cycle).
export function createSkyDome(skyColor) {
    const geo = new THREE.SphereGeometry(400, 32, 16);
    const mat = new THREE.ShaderMaterial({
        uniforms: {
            uSkyColor: { value: new THREE.Color(skyColor) },
            uGlowColor: { value: new THREE.Color(0x3a4d6b) }, // cool dusky-blue afterglow, not warm/orange
            uGlowStrength: { value: 0.0 } // driven by moon height — 0 by day, faint by night
        },
        vertexShader: `
            varying vec3 vPos;
            void main() {
                vPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uSkyColor;
            uniform vec3 uGlowColor;
            uniform float uGlowStrength;
            varying vec3 vPos;
            void main() {
                float h = normalize(vPos).y; // -1 at nadir, 0 at horizon, 1 at zenith
                float band = exp(-pow(h * 9.0, 2.0)); // hugs the horizon, fades dark quickly going up
                vec3 col = mix(uSkyColor, uGlowColor, band * uGlowStrength);
                gl_FragColor = vec4(col, 1.0);
            }
        `,
        side: THREE.BackSide,
        fog: false,
        depthWrite: false
    });
    const skyDome = new THREE.Mesh(geo, mat);
    skyDome.renderOrder = -1;
    return skyDome;
}

export function createDustMotes() {
    const count = 100;
    const geom = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 120;
        pos[i * 3 + 1] = Math.random() * 10;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return new THREE.Points(geom, new THREE.PointsMaterial({
        color: 0xffffff, size: 0.05, transparent: true, opacity: 0.3, sizeAttenuation: true
    }));
}
