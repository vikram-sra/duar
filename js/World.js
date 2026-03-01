import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export class World {
    constructor(container, config) {
        this.container = container;
        this.config = config;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(config.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 2500);
        this.camera.position.set(...config.scene.camera.startPosition);
        this.camera.lookAt(0, 1.6, 0);

        this.initRenderer();
        this.initComposer();
        this.initControls();
        this.initEnvironment();

        window.addEventListener('resize', () => this.onResize(), { passive: true });
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", alpha: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0x000000, 1);
        this.container.appendChild(this.renderer.domElement);
    }

    initComposer() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomRes = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.bloomPass = new UnrealBloomPass(bloomRes, 1.2, 0.4, 0.2);
        this.composer.addPass(this.bloomPass);
    }

    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 1.6, 0);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 0.5;
        this.controls.maxDistance = 100;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = -0.8;
    }

    initEnvironment() {
        const color = new THREE.Color(this.config.scene.fog.color);
        this.scene.fog = new THREE.FogExp2(color, 0.002);
        this.scene.background = color;

        // Large Flat Plane Ground
        const groundGeo = new THREE.PlaneGeometry(5000, 5000, 1, 1);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.9,
            metalness: 0.1,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1
        });
        this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.setupDustMotes();
    }

    setupDustMotes() {
        const count = 150; // Increased slightly for better effect
        const geom = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        // Store original positions for spring-back effect
        this.dustOriginals = new Float32Array(count * 3);
        this.dustVelocities = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 120;
            const y = Math.random() * 15; // Higher ceiling
            const z = (Math.random() - 0.5) * 120;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            this.dustOriginals[i * 3] = x;
            this.dustOriginals[i * 3 + 1] = y;
            this.dustOriginals[i * 3 + 2] = z;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        this.dust = new THREE.Points(geom, new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1, // Slightly larger
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        }));
        this.scene.add(this.dust);

        // Raycaster for dust interaction
        this.dustRaycaster = new THREE.Raycaster();
        this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Camera-facing plane
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    update(time, mouseCoords) {
        if (this.dust && mouseCoords) {
            this.dustRaycaster.setFromCamera(mouseCoords, this.camera);

            // Generate a 3D intersection point out in space mimicking mouse cursor depth
            const intersectPoint = new THREE.Vector3();
            // Create a plane roughly in the middle of the dust field relative to camera
            const cameraDir = new THREE.Vector3();
            this.camera.getWorldDirection(cameraDir);
            this.mousePlane.setFromNormalAndCoplanarPoint(cameraDir, new THREE.Vector3(0, 5, 0));
            this.dustRaycaster.ray.intersectPlane(this.mousePlane, intersectPoint);

            const pos = this.dust.geometry.attributes.position.array;

            for (let i = 0; i < pos.length; i += 3) {
                // Natural sinusodial floating
                const origY = this.dustOriginals[i + 1];
                const naturalY = origY + Math.sin(time * 2 + pos[i]) * 0.5;

                // Repulsion logic
                if (intersectPoint) {
                    const dx = pos[i] - intersectPoint.x;
                    const dy = pos[i + 1] - intersectPoint.y;
                    const dz = pos[i + 2] - intersectPoint.z;
                    const distSq = dx * dx + dy * dy + dz * dz;

                    const repelRadius = 15; // How far the mouse pushes
                    const repelRadiusSq = repelRadius * repelRadius;

                    if (distSq < repelRadiusSq) {
                        const force = (repelRadiusSq - distSq) / repelRadiusSq;
                        const dist = Math.sqrt(distSq);

                        // Push away from mouse
                        this.dustVelocities[i] += (dx / dist) * force * 0.2;
                        this.dustVelocities[i + 1] += (dy / dist) * force * 0.2;
                        this.dustVelocities[i + 2] += (dz / dist) * force * 0.2;
                    }
                }

                // Apply velocities and spring back to original X/Z
                pos[i] += this.dustVelocities[i];
                pos[i + 1] += this.dustVelocities[i + 1];
                pos[i + 2] += this.dustVelocities[i + 2];

                // Spring forces
                this.dustVelocities[i] += (this.dustOriginals[i] - pos[i]) * 0.02;
                this.dustVelocities[i + 1] += (naturalY - pos[i + 1]) * 0.05; // Spring back to sine wave
                this.dustVelocities[i + 2] += (this.dustOriginals[i + 2] - pos[i + 2]) * 0.02;

                // Friction
                this.dustVelocities[i] *= 0.85;
                this.dustVelocities[i + 1] *= 0.85;
                this.dustVelocities[i + 2] *= 0.85;
            }
            this.dust.geometry.attributes.position.needsUpdate = true;
        }

        if (this.camera.position.y < 0.5) {
            this.camera.position.y = 0.5;
        }

        this.controls.update();
        this.composer.render();
    }
}
