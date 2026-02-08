import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

const CONFIG = {
    "scene": {
        "fog": { "color": "#2c3e50", "near": 20, "far": 90 },
        "camera": { "fov": 50, "startPosition": [0, 8, 20] }
    },
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
        this.draggedDoor = null;
        this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

        this.init();
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(CONFIG.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 1.6, 25);
        this.camera.lookAt(0, 1.6, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", alpha: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.VSMShadowMap;
        this.container.appendChild(this.renderer.domElement);

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomRes = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.bloomPass = new UnrealBloomPass(bloomRes, 0.6, 0.5, 0.8);
        this.composer.addPass(this.bloomPass);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 1.6, 0);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 0.5;
        this.controls.maxDistance = 100;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05;

        this.scene.fog = new THREE.FogExp2(CONFIG.scene.fog.color, 0.015);
        this.scene.background = new THREE.Color(CONFIG.scene.fog.color);

        this.setupLighting();
        this.setupEnvironment();
        this.setupDoors();
        this.setupDustMotes();

        window.addEventListener('resize', () => this.onResize(), { passive: true });
        window.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
        window.addEventListener('contextmenu', (e) => e.preventDefault());

        let startX = 0; let startY = 0;
        window.addEventListener('pointerdown', (e) => { startX = e.clientX; startY = e.clientY; });
        window.addEventListener('pointerup', (e) => {
            const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
            if (dist < 10) this.onClick(e);
        });

        this.createTimeControls();
        this.sunAngle = 0;
        this.daySpeed = 0.05;

        this.animate();
    }

    createTimeControls() {
        if (!document.getElementById('compact-ui-css')) {
            const style = document.createElement('style');
            style.id = 'compact-ui-css';
            style.innerHTML = `
                .chrome-slider {
                    -webkit-appearance: none;
                    width: 100px;
                    height: 2px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 2px;
                    outline: none;
                    transition: background 0.2s;
                }
                .chrome-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 0 10px rgba(255,255,255,0.5);
                    cursor: pointer;
                    border: none;
                    transition: transform 0.1s, box-shadow 0.2s;
                }
                .chrome-slider::-webkit-slider-thumb:hover { 
                    transform: scale(1.2); 
                    box-shadow: 0 0 15px rgba(255,255,255,0.8);
                }
                .glass-btn {
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    backdrop-filter: blur(5px);
                }
                .glass-btn:hover {
                    background: rgba(255,255,255,0.1);
                    border-color: rgba(255,255,255,0.4);
                    transform: translateY(-2px);
                }
                .glass-btn:active { transform: translateY(0); }
                .ui-hidden { opacity: 0; transform: translateY(20px); pointer-events: none; }
            `;
            document.head.appendChild(style);
        }

        const container = document.createElement('div');
        this.uiContainer = container;
        container.style.cssText = 'position:absolute; bottom:30px; width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: opacity 0.5s, transform 0.5s;';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            pointer-events: auto;
            background: rgba(10, 10, 10, 0.4);
            backdrop-filter: blur(12px) saturate(180%);
            -webkit-backdrop-filter: blur(12px) saturate(180%);
            padding: 6px 12px;
            border-radius: 40px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            gap: 12px;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        `;

        wrapper.onmouseenter = () => { wrapper.style.transform = 'scale(1.02)'; this.resetUIHideTimer(); };
        wrapper.onmouseleave = () => wrapper.style.transform = 'scale(1)';

        const slider = document.createElement('input');
        slider.type = 'range'; slider.className = 'chrome-slider';
        slider.min = '0'; slider.max = '0.5'; slider.step = '0.001'; slider.value = '0.05';
        slider.oninput = (e) => { this.daySpeed = parseFloat(e.target.value); this.resetUIHideTimer(); };

        ['pointerdown', 'touchstart', 'touchmove'].forEach(ev => slider.addEventListener(ev, e => { e.stopPropagation(); this.resetUIHideTimer(); }));

        const createBtn = (symbol, onClick, fontSize = '14px', title = '') => {
            const btn = document.createElement('button');
            btn.className = 'glass-btn';
            btn.innerHTML = symbol;
            btn.style.fontSize = fontSize;
            btn.title = title;
            btn.onclick = (e) => { e.stopPropagation(); onClick(); this.resetUIHideTimer(); };
            btn.addEventListener('touchstart', e => e.stopPropagation());
            return btn;
        };

        const randBtn = createBtn('&#127922;', () => {
            if (this.doors.length === 0) return;
            const door = this.doors[Math.floor(Math.random() * this.doors.length)];
            const angle = Math.atan2(door.group.position.x, door.group.position.z);
            const dist = 25;
            gsap.to(this.camera.position, {
                x: Math.sin(angle) * dist, y: 1.6, z: Math.cos(angle) * dist,
                duration: 1.5, ease: "power2.inOut",
                onUpdate: () => this.camera.lookAt(0, 1.6, 0)
            });
            if (!door.isOpen) this.toggleDoor(door);
        }, '16px', 'Random Door');

        const sunBtn = createBtn('&#9728;', () => { this.sunAngle = Math.PI / 2; this.daySpeed = 0; slider.value = 0; }, '18px', 'High Noon');
        const moonBtn = createBtn('&#9790;', () => { this.sunAngle = 3 * Math.PI / 2; this.daySpeed = 0; slider.value = 0; }, '16px', 'Midnight');

        wrapper.append(randBtn, sunBtn, slider, moonBtn);
        container.appendChild(wrapper);
        document.body.appendChild(container);

        this.uiVisible = true;
        this.resetUIHideTimer();
    }

    resetUIHideTimer() {
        if (this.uiHideTimeout) clearTimeout(this.uiHideTimeout);
        this.uiHideTimeout = setTimeout(() => this.setUIVisibility(false), 5000);
    }

    setUIVisibility(visible) {
        if (!this.uiContainer) return;
        if (visible) {
            this.uiContainer.classList.remove('ui-hidden');
            this.uiVisible = true;
            this.resetUIHideTimer();
        } else {
            this.uiContainer.classList.add('ui-hidden');
            this.uiVisible = false;
        }
    }

    handlePointerDown(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this.scene.children, true);
        if (hits.length > 0) {
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
                        this.draggedDoor = door;
                        this.dragMode = (e.button === 2 || e.shiftKey) ? 'rotate' : 'move';
                        this.controls.enabled = false;
                        return;
                    }
                    obj = obj.parent;
                }
            }
        }
    }

    handleDoorDrag(e) {
        if (!this.draggedDoor) return;
        if (this.dragMode === 'rotate') {
            this.draggedDoor.group.rotation.y += e.movementX * 0.01;
        } else {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const target = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(this.dragPlane, target);
            if (target) {
                this.draggedDoor.group.position.set(target.x, target.y, target.z);
            }
        }
    }

    onClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this.scene.children, true);

        let interactedWithObject = false;

        if (hits.length > 0) {
            const hit = hits.find(h => {
                let obj = h.object;
                if (obj === this.rock) return true; // Pyramid hit
                while (obj) {
                    if (this.doors.some(d => d.group === obj)) return true;
                    obj = obj.parent;
                }
                return false;
            });
            if (hit) {
                interactedWithObject = true;
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

        // Tapping anywhere else toggles UI
        if (!interactedWithObject) {
            this.setUIVisibility(!this.uiVisible);
        }
    }

    toggleDoor(door) {
        if (door.isAnimating) return;
        door.isAnimating = true;
        door.isOpen = !door.isOpen;
        const targetPoint = door.group.position.clone();
        targetPoint.y = 1.75;
        const currentCamPos = this.camera.position.clone();
        const direction = new THREE.Vector3().subVectors(currentCamPos, targetPoint).normalize();
        const dist = 6.0;
        const targetCamPos = targetPoint.clone().add(direction.multiplyScalar(dist));
        targetCamPos.y = 1.6;

        gsap.to(this.controls.target, { x: targetPoint.x, y: targetPoint.y, z: targetPoint.z, duration: 2.5, ease: "power3.inOut" });
        gsap.to(this.camera.position, { x: targetCamPos.x, y: targetCamPos.y, z: targetCamPos.z, duration: 2.5, ease: "power3.inOut" });
        gsap.to(door.hinge.rotation, {
            y: door.isOpen ? -Math.PI / 2 : 0,
            duration: 2.0, delay: 0.5, ease: "power2.inOut",
            onComplete: () => { door.isAnimating = false; }
        });
        gsap.to(door.light, { intensity: 8, distance: 20, duration: 2.0, delay: 0.5, yoyo: true, repeat: 1 });
    }

    setupLighting() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambient);
        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.3);
        this.scene.add(this.hemiLight);

        this.sunDist = 100;
        this.sunLight = new THREE.DirectionalLight(0xffddaa, 1.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 4096;
        this.sunLight.shadow.mapSize.height = 4096;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 500;
        const d = 55;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.bias = -0.0005;
        this.scene.add(this.sunLight);

        const sunTex = this.generateSunTexture();
        this.sunMesh = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 16), new THREE.MeshBasicMaterial({ map: sunTex, color: 0xffcc00, fog: false }));
        this.scene.add(this.sunMesh);

        this.sunGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.generateGlowTexture(), color: 0xffaa00, transparent: true, blending: THREE.AdditiveBlending, opacity: 1.0, depthWrite: false, fog: false }));
        this.sunGlow.scale.set(60, 60, 1);
        this.scene.add(this.sunGlow);

        this.moonLight = new THREE.DirectionalLight(0xaaccff, 2.0);
        this.moonLight.castShadow = true;
        this.moonLight.shadow.mapSize.width = 4096;
        this.moonLight.shadow.mapSize.height = 4096;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 500;
        this.moonLight.shadow.camera.left = -55;
        this.moonLight.shadow.camera.right = 55;
        this.moonLight.shadow.camera.top = 55;
        this.moonLight.shadow.camera.bottom = -55;
        this.moonLight.shadow.bias = -0.0005;
        this.scene.add(this.moonLight);

        this.moonMesh = new THREE.Mesh(new THREE.SphereGeometry(4, 32, 32), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5, roughness: 0.8, fog: false }));
        this.scene.add(this.moonMesh);

        this.moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.generateGlowTexture(), color: 0x4466ff, transparent: true, blending: THREE.AdditiveBlending, opacity: 0.5, fog: false }));
        this.moonGlow.scale.set(40, 40, 1);
        this.scene.add(this.moonGlow);
    }

    generateGlowTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, 128, 128);
        return new THREE.CanvasTexture(canvas);
    }

    generateSunTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 512;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffaa'; ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 8000; i++) {
            const x = Math.random() * 512; const y = Math.random() * 512; const r = Math.random() * 25 + 5;
            const rand = Math.random();
            if (rand > 0.6) ctx.fillStyle = '#ffcc00'; else if (rand > 0.3) ctx.fillStyle = '#ff4500'; else ctx.fillStyle = '#ff0000';
            ctx.globalAlpha = 0.2; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }

    setupEnvironment() {
        const color = 0x000000;
        this.scene.fog = new THREE.Fog(color, 150, 600);
        this.renderer.setClearColor(color);

        // Large Flat Plane Ground
        const groundGeo = new THREE.PlaneGeometry(2000, 2000, 1, 1);
        const groundMat = new THREE.MeshStandardMaterial({
            color: 0x2c3e50,
            roughness: 0.9,
            metalness: 0.1
        });
        const ground = new THREE.Mesh(groundGeo, groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.createSacredGeometry();
        this.createCentralRock();
    }

    setupDoors() {
        const loader = new GLTFLoader();
        const numRings = 5; const baseRadius = 15; const radiusStep = 8;
        for (let r = 0; r < numRings; r++) {
            const currentRadius = baseRadius + (r * radiusStep);
            CONFIG.doors.forEach((data, index) => {
                const angle = ((index * (Math.PI * 2)) / CONFIG.doors.length) + (r * 0.5);
                const x = Math.sin(angle) * currentRadius;
                const z = Math.cos(angle) * currentRadius;

                const group = new THREE.Group();
                group.position.set(x, 0, z); // Standard flat positioning
                this.scene.add(group);

                const light = new THREE.SpotLight(data.color, 4, 40, 0.5, 0.5, 1);
                light.position.set(0, 20, 0); light.castShadow = false;
                group.add(light);
                const target = new THREE.Object3D(); group.add(target); light.target = target;

                const hinge = new THREE.Group(); hinge.position.set(-0.75, 0, 0); group.add(hinge);
                const doorObj = { group, data, hinge, light, isOpen: false };
                this.createDoorFrame(group, data);

                loader.load(data.modelPath, (gltf) => {
                    const model = gltf.scene; const panel = model.getObjectByName('Door') || model;
                    model.traverse(o => { if (o.isMesh) { o.material = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.2, metalness: 0.7 }); o.castShadow = true; o.receiveShadow = true; } });
                    panel.position.set(0.75, 0, 0); hinge.add(panel); doorObj.panel = panel;
                }, null, () => {
                    const monolith = new THREE.Mesh(new THREE.BoxGeometry(1.5, 3.5, 0.2), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 }));
                    monolith.position.set(0.75, 1.75, 0); monolith.castShadow = true; monolith.receiveShadow = true; hinge.add(monolith); doorObj.panel = monolith;
                });
                this.doors.push(doorObj);
            });
        }
    }

    createDoorFrame(group, data) {
        const mat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.2, metalness: 0.8 });
        const postGeo = new THREE.BoxGeometry(0.1, 3.5, 0.1);
        const lP = new THREE.Mesh(postGeo, mat); lP.position.set(-0.8, 1.75, 0); lP.castShadow = true; group.add(lP);
        const rP = new THREE.Mesh(postGeo, mat); rP.position.set(0.8, 1.75, 0); rP.castShadow = true; group.add(rP);
        const tP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.1), mat); tP.position.set(0, 3.55, 0); tP.castShadow = true; group.add(tP);
        const bP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.1), mat); bP.position.set(0, 0.05, 0); bP.castShadow = true; group.add(bP);
    }

    createSacredGeometry() {
        const mat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 1.0, roughness: 0.1, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
        this.rings = []; const baseR = 15; const stepR = 8;
        for (let i = 0; i < 5; i++) {
            const r = baseR + (i * stepR);
            const mesh = new THREE.Mesh(new THREE.RingGeometry(r - 0.125, r + 0.125, 128), mat);
            mesh.rotation.x = -Math.PI / 2; mesh.position.y = 0.05; mesh.receiveShadow = true;
            this.scene.add(mesh); this.rings.push({ mesh, speed: 0 });
        }
    }

    createCentralRock() {
        const geo = new THREE.ConeGeometry(1.5, 3.0, 64, 32); geo.translate(0, 1.5, 0);
        const mat = new THREE.ShaderMaterial({
            uniforms: { time: { value: 0 }, color: { value: new THREE.Color(0x020202) }, emissive: { value: new THREE.Color(0x110000) } },
            vertexShader: `
                uniform float time; varying vec2 vUv; varying vec3 vNormal; varying float vDisplace; varying vec3 vPos;
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
                float snoise(vec3 v) { 
                    const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                    vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
                    vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g; vec3 i1 = min( g.xyz, l.zxy ); vec3 i2 = max( g.xyz, l.zxy );
                    vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
                    i = mod289(i); vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                    float n_ = 0.142857142857; vec3 ns = n_ * D.wyz - D.xzx; vec4 j = p - 49.0 * floor(p * ns.z * ns.z); 
                    vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy;
                    vec4 h = 1.0 - abs(x) - abs(y); vec4 b0 = vec4( x.xy, y.xy ); vec4 b1 = vec4( x.zw, y.zw );
                    vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
                    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                    vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
                    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
                    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
                    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
                }
                void main() {
                    vUv = uv; vNormal = normal; vec3 pos = position;
                    float n = snoise(pos * 0.8 + vec3(time * 0.1)); 
                    float displacement = n * 0.3; float spikes = smoothstep(0.4, 1.0, n) * 0.5;
                    vec3 noisyPos = pos + normal * (displacement + spikes);
                    vDisplace = n; vPos = noisyPos; gl_Position = projectionMatrix * modelViewMatrix * vec4(noisyPos, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time; uniform vec3 color; uniform vec3 emissive;
                varying float vDisplace; varying vec3 vNormal; varying vec3 vPos;
                void main() {
                    vec3 base = color; base += vec3(0.05) * vDisplace;
                    vec3 lightDir = normalize(vec3(80.0, 15.0, 80.0)); vec3 viewDir = normalize(cameraPosition - vPos);
                    vec3 halfDir = normalize(lightDir + viewDir); float NdotH = max(dot(normalize(vNormal), halfDir), 0.0);
                    float shine = pow(NdotH, 100.0); float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
                    vec3 finalColor = base + (vec3(0.1) * fresnel) + (vec3(1.0) * shine * 2.0);
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `
        });
        this.rock = new THREE.Mesh(geo, mat); this.rock.castShadow = true; this.rock.receiveShadow = true; this.scene.add(this.rock);
        const pCount = 60; const pGeo = new THREE.BufferGeometry(); const pPos = new Float32Array(pCount * 3); const pSpeeds = new Float32Array(pCount);
        for (let i = 0; i < pCount; i++) {
            const angle = Math.random() * Math.PI * 2; const r = Math.random() * 1.5 + 0.5;
            pPos[i * 3] = Math.cos(angle) * r; pPos[i * 3 + 1] = Math.random() * 3.0; pPos[i * 3 + 2] = Math.sin(angle) * r;
            pSpeeds[i] = 0.005 + Math.random() * 0.01;
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        this.rockFlares = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x888888, size: 0.05, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending }));
        this.rockFlares.userData = { speeds: pSpeeds }; this.scene.add(this.rockFlares);
    }

    setupDustMotes() {
        const count = 100; const geom = new THREE.BufferGeometry(); const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 120; pos[i * 3 + 1] = Math.random() * 10; pos[i * 3 + 2] = (Math.random() - 0.5) * 120;
        }
        geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        this.dust = new THREE.Points(geom, new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.3, sizeAttenuation: true }));
        this.scene.add(this.dust);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight); this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) { this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1; this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1; }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.time += 0.001;
        if (this.sunMesh && this.moonMesh) {
            this.sunAngle += this.daySpeed * 0.1; const r = this.sunDist;
            const y = Math.sin(this.sunAngle) * r; const x = Math.cos(this.sunAngle) * r;
            this.sunLight.position.set(x, y, 0); this.sunMesh.position.set(x, y, 0); this.sunGlow.position.set(x, y, 0);
            this.moonLight.position.set(-x, -y, 0); this.moonMesh.position.set(-x, -y, 0); this.moonGlow.position.set(-x, -y, 0);
            this.moonMesh.rotation.y = Math.atan2(-x, 0) + Math.PI;
            const sH = Math.max(0, Math.sin(this.sunAngle)); const mH = Math.max(0, Math.sin(this.sunAngle + Math.PI));
            this.sunLight.intensity = sH * 1.5; this.moonLight.intensity = mH * 2.0;
            const currColor = new THREE.Color(0x000000).lerp(new THREE.Color(0x2c3e50), sH);
            this.scene.background = currColor; if (this.scene.fog) this.scene.fog.color = currColor;
            this.hemiLight.intensity = 0.1 + (sH * 0.3);
        }
        if (this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        if (this.rock) this.rock.material.uniforms.time.value = this.time;
        if (this.rockFlares) {
            const pos = this.rockFlares.geometry.attributes.position.array; const spd = this.rockFlares.userData.speeds;
            for (let i = 0; i < pos.length; i += 3) { pos[i + 1] += spd[i / 3]; if (pos[i + 1] > 1.5) pos[i + 1] = 0; }
            this.rockFlares.geometry.attributes.position.needsUpdate = true;
        }
        if (this.dust) {
            const pos = this.dust.geometry.attributes.position.array;
            for (let i = 0; i < pos.length; i += 3) pos[i + 1] += Math.sin(this.time * 5 + pos[i]) * 0.002;
            this.dust.geometry.attributes.position.needsUpdate = true;
        }
        this.doors.forEach(d => d.group.lookAt(this.camera.position.x, d.group.position.y, this.camera.position.z));
        this.controls.update(); this.composer.render();
    }
}
new DuarApp();
