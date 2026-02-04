import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

const CONFIG = {
    "scene": {
        "fog": { "color": "#2c3e50", "near": 20, "far": 90 }, // Much lighter fog
        "camera": { "fov": 50, "startPosition": [0, 8, 20] }
    },
    // Using subtle colors for lights
    "doors": [
        { id: "portfolio", label: "PORTFOLIO", type: "rustic_wood", modelPath: "/models/door_rustic.glb", position: [-10, 0, -6], rotation: [0, 0.4, 0], destinationUrl: "https://portfolio.yoursite.com", animation: "creakOpen", color: 0xffaa88, particles: "leaves" },
        { id: "blog", label: "BLOG", type: "scifi_portal", modelPath: "/models/door_scifi.glb", position: [-5, 0, -9], rotation: [0, 0.2, 0], destinationUrl: "/blog", animation: "slideUp", color: 0x88ccff, particles: "tech" },
        { id: "projects", label: "PROJECTS", type: "iron_gate", modelPath: "/models/gate_iron.glb", position: [0, 0, -10], rotation: [0, 0, 0], destinationUrl: "/projects", animation: "swingBoth", color: 0xffeeaa, particles: "sparks" },
        { id: "contact", label: "CONTACT", type: "stone_arch", modelPath: "/models/arch_stone.glb", position: [5, 0, -9], rotation: [0, -0.2, 0], destinationUrl: "mailto:you@example.com", animation: "dissolveField", color: 0xcc88ff, particles: "runes" },
        { id: "about", label: "ABOUT", type: "shoji_screen", modelPath: "/models/door_shoji.glb", position: [10, 0, -6], rotation: [0, -0.4, 0], destinationUrl: "/about", animation: "slideRight", color: 0xff88aa, particles: "petals" }
    ],
    "paths": [
        { id: "main_path", texture: "/textures/stone_path_diffuse.png", points: [] }
    ]
};

class DuarApp {
    constructor() {
        this.container = document.getElementById('app');
        this.scene = new THREE.Scene();
        this.doors = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.time = 0;
        this.particleSystems = [];

        this.init();
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(CONFIG.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(...CONFIG.scene.camera.startPosition);
        this.camera.lookAt(0, 0, -8);

        this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", alpha: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(1); // Force 1:1 pixel ratio
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.BasicShadowMap; // Fastest shadows
        this.container.appendChild(this.renderer.domElement);

        // Minimal Post-Processing
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        // Half-resolution bloom for performance
        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), 0.6, 0.5, 0.8);
        this.composer.addPass(this.bloomPass);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.03;
        this.controls.minDistance = 2; // Allow closer zoom
        this.controls.maxDistance = 100; // Allow further zoom
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent going below ground

        // Lighter fog matching new ground
        this.scene.fog = new THREE.FogExp2(CONFIG.scene.fog.color, 0.015);
        this.scene.background = new THREE.Color(CONFIG.scene.fog.color);

        this.setupLighting();
        this.setupEnvironment();
        this.setupDoors();
        this.setupDustMotes();

        window.addEventListener('resize', () => this.onResize(), { passive: true });
        window.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
        window.addEventListener('click', () => this.onClick());

        this.animate();
    }

    // ... setupLighting and setupEnvironment are fine ...

    // Improved reliable click handler
    onClick() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this.scene.children, true);

        if (hits.length > 0) {
            // Find the first hit that belongs to any door group hierarchy
            const hit = hits.find(h => {
                let obj = h.object;
                while (obj) {
                    if (this.doors.some(d => d.group === obj)) return true;
                    obj = obj.parent;
                }
                return false;
            });

            if (hit) {
                let obj = hit.object;
                while (obj) {
                    const door = this.doors.find(d => d.group === obj);
                    if (door) {
                        this.toggleDoor(door);
                        return;
                    }
                    obj = obj.parent;
                }
            }
        }
    }

    toggleDoor(door) {
        if (door.isAnimating) return;
        door.isAnimating = true;
        door.isOpen = !door.isOpen;

        // Unified "Hinge" Animation for ALL doors
        gsap.to(door.hinge.rotation, {
            y: door.isOpen ? -Math.PI / 2 : 0, // Open 90 degrees outward
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => { door.isAnimating = false; }
        });

        // Flare up light briefly
        gsap.to(door.light, { intensity: 8, distance: 20, duration: 0.5, yoyo: true, repeat: 1 });
    }

    setupLighting() {
        // Ambient
        const ambient = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambient);

        // Fill
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.3);
        this.scene.add(hemiLight);

        // SUN
        const sunPos = new THREE.Vector3(80, 15, 80);
        const sun = new THREE.DirectionalLight(0xffddaa, 1.5);
        sun.position.copy(sunPos);
        sun.castShadow = true;
        sun.shadow.mapSize.width = 512;
        sun.shadow.mapSize.height = 512;
        this.scene.add(sun);

        // Sun Mesh (Core)
        const sunTex = this.generateSunTexture();
        const sunMat = new THREE.MeshBasicMaterial({
            map: sunTex,
            color: 0xffcc00, // Bright Golden-Yellow
            fog: false // Ignore fog to stay bright
        });
        const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 16), sunMat);
        sunMesh.position.copy(sunPos);
        this.scene.add(sunMesh);

        // Sun Glow (Sprite)
        const spriteMat = new THREE.SpriteMaterial({
            map: this.generateGlowTexture(),
            color: 0xffaa00, // Orange-Gold Glow
            transparent: true,
            blending: THREE.AdditiveBlending,
            opacity: 1.0,
            depthWrite: false, // Prevent z-fighting/shadow artifacts
            fog: false // Ignore fog
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(60, 60, 1);
        sprite.position.copy(sunPos);
        this.scene.add(sprite);

        // MOON
        const moonPos = new THREE.Vector3(-80, 20, -80);
        const moon = new THREE.DirectionalLight(0x4466ff, 0.6);
        moon.position.copy(moonPos);
        this.scene.add(moon);

        // Moon Mesh
        const moonMesh = new THREE.Mesh(
            new THREE.SphereGeometry(4, 16, 16),
            new THREE.MeshBasicMaterial({ color: 0x88aaff })
        );
        moonMesh.position.copy(moonPos);
        this.scene.add(moonMesh);

        // Moon Glow
        const moonGlowMat = new THREE.SpriteMaterial({
            map: this.generateGlowTexture(),
            color: 0x4466ff,
            transparent: true,
            blending: THREE.AdditiveBlending,
            opacity: 0.5
        });
        const moonGlow = new THREE.Sprite(moonGlowMat);
        moonGlow.scale.set(40, 40, 1);
        moonGlow.position.copy(moonPos);
        this.scene.add(moonGlow);
    }

    generateGlowTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128; // Small texture for soft glow
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    generateSunTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Hot White/Yellow Base
        ctx.fillStyle = '#ffffaa';
        ctx.fillRect(0, 0, 512, 512);

        // Fiery Noise
        for (let i = 0; i < 8000; i++) {
            const x = Math.random() * 512;
            const y = Math.random() * 512;
            const r = Math.random() * 25 + 5;
            // Mix of orange, red, and hot yellow
            const rand = Math.random();
            if (rand > 0.6) ctx.fillStyle = '#ffcc00'; // Gold
            else if (rand > 0.3) ctx.fillStyle = '#ff4500'; // OrangeRed
            else ctx.fillStyle = '#ff0000'; // Red

            ctx.globalAlpha = 0.2;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        const tex = new THREE.CanvasTexture(canvas);
        return tex;
    }

    setupEnvironment() {
        // Lighter slate/concrete color ground - MATTE finish
        const groundGeo = new THREE.PlaneGeometry(150, 150);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.9, // Matte to prevent "underground light" reflection illusion
            metalness: 0.1
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.createSacredGeometry();
        this.createMinimalPath();
    }

    setupDoors() {
        const loader = new GLTFLoader();
        CONFIG.doors.forEach(data => {
            const group = new THREE.Group();
            group.position.set(...data.position);
            group.rotation.set(...data.rotation);
            this.scene.add(group);

            // Spotlight from the sky
            const light = new THREE.SpotLight(data.color, 4, 40, 0.5, 0.5, 1);
            light.position.set(0, 20, 0);
            const target = new THREE.Object3D();
            target.position.set(0, 0, 0);
            group.add(target);
            light.target = target;
            group.add(light);

            // Floating Label
            const label = document.createElement('div');
            label.className = 'door-label';
            label.innerText = data.label;
            document.body.appendChild(label);

            // Hinge Pivot Group - Placed at the left edge of the door
            const hinge = new THREE.Group();
            hinge.position.set(-0.75, 0, 0); // Assuming 1.5 width, so -0.75 is left edge
            group.add(hinge);

            const doorObj = { group, data, label, hinge, light, isOpen: false };

            // Add Door Frame (Scaled to fit tightly)
            this.createDoorFrame(group, data);

            loader.load(data.modelPath,
                (gltf) => {
                    const model = gltf.scene;
                    const panel = model.getObjectByName('Door') || model;

                    // Darken material
                    model.traverse(o => {
                        if (o.isMesh) {
                            o.material = new THREE.MeshStandardMaterial({
                                color: 0x222222,
                                roughness: 0.7,
                                metalness: 0.2
                            });
                            o.castShadow = true;
                            o.receiveShadow = true;
                        }
                    });

                    // Add to hinge and offset to center it relative to hinge
                    // Assuming centered model usually, push it right by half width
                    panel.position.set(0.75, 0, 0);
                    hinge.add(panel);

                    doorObj.panel = panel;
                },
                null,
                () => { // Minimal Placeholder
                    const geo = new THREE.BoxGeometry(1.5, 3.5, 0.2);
                    const mat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 });
                    const monolith = new THREE.Mesh(geo, mat);

                    // Position relative to hinge (which is at -0.75)
                    // We want monolith center at 0 relative to group, so +0.75 relative to hinge
                    // Y needs to be up to sit on floor. height 3.5 -> y center 1.75
                    monolith.position.set(0.75, 1.75, 0);
                    monolith.castShadow = true;
                    monolith.receiveShadow = true;
                    hinge.add(monolith);

                    doorObj.panel = monolith;
                }
            );
            this.doors.push(doorObj);
        });
    }

    createDoorFrame(group, data) {
        const frameMat = new THREE.MeshStandardMaterial({
            color: 0x050505,
            roughness: 0.2,
            metalness: 0.8
        });

        // TIGHTER FRAMES
        // Door height is 3.5. Width is 1.5.
        // Side posts: Height 3.5, Width 0.1. Position X = +/- 0.8 (0.75 + 0.05)

        const postGeo = new THREE.BoxGeometry(0.1, 3.5, 0.1);
        const leftPost = new THREE.Mesh(postGeo, frameMat);
        leftPost.position.set(-0.8, 1.75, 0); // Centered vertically on 3.5 height
        leftPost.castShadow = true;
        group.add(leftPost);

        const rightPost = new THREE.Mesh(postGeo, frameMat);
        rightPost.position.set(0.8, 1.75, 0);
        rightPost.castShadow = true;
        group.add(rightPost);

        // Top lintel - Sitting exactly on top
        const topGeo = new THREE.BoxGeometry(1.7, 0.1, 0.1);
        const topPost = new THREE.Mesh(topGeo, frameMat);
        topPost.position.set(0, 3.55, 0); // 3.5 (height) + 0.05 (half lintel height)
        topPost.castShadow = true;
        group.add(topPost);
    }

    createSacredGeometry() {
        // Subtle, rotating geometric lines on the floor
        const geo = new THREE.RingGeometry(3, 3.05, 64);
        const mat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1,
            side: THREE.DoubleSide
        });

        this.rings = [];
        for (let i = 0; i < 3; i++) {
            const ring = new THREE.Mesh(geo, mat);
            ring.rotation.x = -Math.PI / 2;
            ring.position.set(0, 0.01 + (i * 0.01), -10);
            const scale = 1 + (i * 0.5);
            ring.scale.set(scale, scale, 1);
            this.scene.add(ring);
            this.rings.push({ mesh: ring, speed: (i % 2 === 0 ? 1 : -1) * (0.0005 + (i * 0.0002)) });
        }

        // Center glow
        const glowGeo = new THREE.CircleGeometry(2, 64);
        const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05 });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.rotation.x = -Math.PI / 2;
        glow.position.set(0, 0.01, -10);
        this.scene.add(glow);
    }

    createMinimalPath() {
        // Just very faint lines connecting doors to center
        const material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        });

        CONFIG.doors.forEach(door => {
            const points = [];
            points.push(new THREE.Vector3(0, 0.05, -10)); // Center
            points.push(new THREE.Vector3(door.position[0], 0.05, door.position[2]));
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, material);
            this.scene.add(line);
        });
    }

    setupDustMotes() {
        const count = 100;
        const geom = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = Math.random() * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));

        const mat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
            transparent: true,
            opacity: 0.3,
            sizeAttenuation: true
        });

        this.dust = new THREE.Points(geom, mat);
        this.scene.add(this.dust);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.time += 0.001; // Slower time

        // Rotate rings slowly
        if (this.rings) {
            this.rings.forEach(r => {
                r.mesh.rotation.z += r.speed;
            });
        }

        // Drifting dust
        if (this.dust) {
            const pos = this.dust.geometry.attributes.position.array;
            for (let i = 0; i < pos.length; i += 3) {
                pos[i + 1] += Math.sin(this.time * 5 + pos[i]) * 0.002;
            }
            this.dust.geometry.attributes.position.needsUpdate = true;
        }

        // Labels fade in/out based on distance/angle
        this.doors.forEach(d => {
            const pos = d.group.position.clone();
            pos.y += 3.5;
            pos.project(this.camera);
            const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
            const y = -(pos.y * 0.5 - 0.5) * window.innerHeight;

            d.label.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;

            const dist = this.camera.position.distanceTo(d.group.position);
            // Hide if too far or behind
            const opacity = (pos.z < 1 && dist < 25) ? Math.max(0, 1 - (dist / 20)) : 0;
            d.label.style.opacity = opacity;
        });

        this.controls.update();
        this.composer.render();
    }
}

new DuarApp();
