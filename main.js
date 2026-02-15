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
        { id: "portfolio", label: "PORTFOLIO", type: "rustic_wood", modelPath: "/models/door_rustic.glb", position: [-10, 0, -6], rotation: [0, 0.4, 0], destinationUrl: "https://waveism.duar.one", animation: "creakOpen", color: 0xffaa88, particles: "leaves" },
        { id: "blog", label: "BLOG", type: "scifi_portal", modelPath: "/models/door_scifi.glb", position: [-5, 0, -9], rotation: [0, 0.2, 0], destinationUrl: "/blog", animation: "slideUp", color: 0x88ccff, particles: "tech" },
        { id: "projects", label: "PROJECTS", type: "iron_gate", modelPath: "/models/gate_iron.glb", position: [0, 0, -10], rotation: [0, 0, 0], destinationUrl: "https://waveism.duar.one", animation: "swingBoth", color: 0xffeeaa, particles: "sparks" },
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
        console.log("DuarApp initializing...");
        this.scene = new THREE.Scene();
        this.doors = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.time = 0;
        this.particleSystems = [];
        this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane
        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();

        this.init();
        // Fallback to reveal scene after 2.5s if loading hangs
        setTimeout(() => this.revealScene(), 2500);
    }

    setupLoadingManager() {
        this.loadingManager.onLoad = () => this.revealScene();
        this.loadingManager.onError = () => this.revealScene();
    }

    revealScene() {
        const loader = document.getElementById('loading');
        if (loader) loader.classList.add('hidden');
        if (this.rock) this.rock.visible = true;
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(CONFIG.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 2500);
        this.camera.position.set(0, 1.6, 25);
        this.camera.lookAt(0, 1.6, 0);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", alpha: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Stable, soft shadows
        this.container.appendChild(this.renderer.domElement);

        this.renderer.setClearColor(0x000000, 1); // Stay black initially

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomRes = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
        this.bloomPass = new UnrealBloomPass(bloomRes, 1.2, 0.4, 0.2); // Increased strength, lower threshold for glow
        this.composer.addPass(this.bloomPass);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 1.6, 0);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 0.5;
        this.controls.maxDistance = 100;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
        this.controls.autoRotate = true; // Default On
        this.controls.autoRotateSpeed = -0.8; // Gentle default CW

        this.scene.fog = new THREE.FogExp2(CONFIG.scene.fog.color, 0.002);
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
        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        this.sunAngle = ((hours - 6) / 24) * Math.PI * 2;
        this.daySpeed = 0.02;

        this.animate();
    }

    createTimeControls() {
        if (!document.getElementById('compact-ui-css')) {
            const style = document.createElement('style');
            style.id = 'compact-ui-css';
            style.innerHTML = `
                .glass-bar-wrapper {
                    pointer-events: auto;
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    padding: 4px 12px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .chrome-slider {
                    -webkit-appearance: none;
                    width: 140px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.1);
                    outline: none;
                }
                .chrome-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 24px;
                    height: 12px;
                    background: #fff;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 10px rgba(255,255,255,0.3);
                }
                .chrome-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
                .glass-btn {
                    background: transparent;
                    color: rgba(255,255,255,0.3);
                    border: none;
                    width: 28px;
                    height: 28px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.1s ease;
                    padding: 0;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                }
                .glass-btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
                .glass-btn:hover { color: #fff; }
                .glass-btn:active { transform: scale(0.95); }
                .ui-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; }
                
                @media (max-width: 480px) {
                    .chrome-slider { width: 90px; }
                    .glass-bar-wrapper { gap: 6px; padding: 4px 10px; }
                }
            `;
            document.head.appendChild(style);
        }

        const container = document.createElement('div');
        this.uiContainer = container;
        container.style.cssText = 'position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';

        const wrapper = document.createElement('div');
        wrapper.className = 'glass-bar-wrapper';
        wrapper.onmouseenter = () => this.resetUIHideTimer();

        const slider = document.createElement('input');
        slider.type = 'range'; slider.className = 'chrome-slider';
        slider.min = '0'; slider.max = '0.5'; slider.step = '0.001'; slider.value = '0.02';
        slider.oninput = (e) => { this.daySpeed = parseFloat(e.target.value); this.resetUIHideTimer(); };
        ['pointerdown', 'touchstart', 'touchmove'].forEach(ev => slider.addEventListener(ev, e => { e.stopPropagation(); this.resetUIHideTimer(); }));

        const icons = {
            home: `<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>`, // Diamond
            random: `<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>`, // Pixel/Grid
            day: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>`, // Minimalist Sun
            night: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`, // Minimal Crescent
            rotate: `<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>` // Loop Icon
        };

        const createBtn = (svg, onClick, title = '') => {
            const btn = document.createElement('button');
            btn.className = 'glass-btn';
            btn.innerHTML = svg;
            btn.title = title;
            btn.onclick = (e) => { e.stopPropagation(); onClick(); this.resetUIHideTimer(); };
            btn.addEventListener('touchstart', e => e.stopPropagation());
            return btn;
        };

        const homeBtn = createBtn(icons.home, () => this.resetScene(), 'Return Home');

        const randBtn = createBtn(icons.random, () => {
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
        }, 'Random Discovery');

        const sunBtn = createBtn(icons.day, () => { }, 'High Noon / Hold fwd'); // Click handled by wrapper
        const moonBtn = createBtn(icons.night, () => { }, 'Midnight / Hold fwd');
        // Initial color based on default autoRotate = true
        const rotateBtn = createBtn(icons.rotate, () => { }, 'Toggle Humble / Hold Hyper');
        rotateBtn.style.color = '#fff';

        // Long Press / Tap Handler
        const addLongPressHandler = (btn, onInterval, onTap) => {
            let interval;
            let time = 0;
            let isLongPress = false;

            const start = (e) => {
                // e.preventDefault(); // Removed to allow hover/focus
                e.stopPropagation();
                if (interval) clearInterval(interval);
                this.resetUIHideTimer();
                time = 0;
                isLongPress = false;

                interval = setInterval(() => {
                    time += 50;
                    this.resetUIHideTimer();
                    if (time > 200) { // Wait 200ms before treating as hold
                        isLongPress = true;
                        onInterval(time);
                    }
                }, 50);
            };

            const end = (e) => {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
                if (!isLongPress && onTap && e.type !== 'pointerleave') {
                    // Don't trigger tap on leave
                    onTap(); // Pure click
                    this.resetUIHideTimer();
                } else if (isLongPress) {
                    // Generic Release Handler for all buttons
                    if (btn === rotateBtn && this.controls.autoRotate) {
                        this.controls.autoRotateSpeed = -0.8; // Gentle CW
                    }
                    if ((btn === sunBtn || btn === moonBtn)) {
                        this.daySpeed = 0.02; // Reset to normal day speed
                        slider.value = 0.02;
                    }
                }
            };

            btn.addEventListener('pointerdown', start);
            btn.addEventListener('pointerup', end);
            btn.addEventListener('pointerleave', end); // Handle slip-off
            btn.addEventListener('pointerenter', () => this.resetUIHideTimer()); // Keep UI alive on hover
            // Removed raw touch listeners as pointer events cover them mostly, and duplicates cause issues
        };

        // Rotate Handler
        addLongPressHandler(rotateBtn, (t) => {
            // Hold: Hyper Speed
            if (!this.controls.autoRotate) {
                this.controls.autoRotate = true;
                rotateBtn.style.color = '#fff';
                this.controls.autoRotateSpeed = -0.5; // Start gentle CW
            }
            // Exponential acceleration for "Warp Speed" feel CW
            // Current speed is negative, so multiply by positive factor to grow magnitude
            this.controls.autoRotateSpeed = Math.min(-0.5, this.controls.autoRotateSpeed * 1.05);

            if (this.controls.autoRotateSpeed < -5000) this.controls.autoRotateSpeed = -5000; // Theoretical chaos limit
        }, () => {
            // Tap: Toggle Gentle
            this.controls.autoRotate = !this.controls.autoRotate;
            rotateBtn.style.color = this.controls.autoRotate ? '#fff' : 'rgba(255,255,255,0.3)';
            if (this.controls.autoRotate) {
                this.controls.autoRotateSpeed = -0.8; // Gentle Gentle CW
            }
        });

        // Sun: Hold to max speed day, Tap for Noon
        addLongPressHandler(sunBtn, (t) => {
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.5, this.daySpeed * 1.1); // Accelerate
            slider.value = this.daySpeed;
        }, () => {
            this.sunAngle = Math.PI / 2;
            this.daySpeed = 0; // Pause at noon
            slider.value = 0;
        });

        // Add explicit release handler logic to reset speed after hold
        // Since addLongPressHandler doesn't expose onRelease, we'll modify it slightly or add listeners manually
        // actually, let's update addLongPressHandler to accept onRelease callback


        // Moon: Hold to max speed night, Tap for Midnight
        addLongPressHandler(moonBtn, (t) => {
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.5, this.daySpeed * 1.1); // Accelerate
            slider.value = this.daySpeed;
        }, () => {
            this.sunAngle = 3 * Math.PI / 2;
            this.daySpeed = 0; // Pause at midnight
            slider.value = 0;
        });

        wrapper.append(homeBtn, randBtn, sunBtn, slider, moonBtn, rotateBtn);
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
        try {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const hits = this.raycaster.intersectObjects(this.scene.children, true);
            console.log("Click hits:", hits.length, hits.map(h => h.object.type));

            let interactedWithObject = false;

            if (hits.length > 0) {
                // Find if we hit any door-related object
                const hit = hits.find(h => {
                    if (h.object === this.rock) return true;
                    let obj = h.object;
                    while (obj) {
                        if (this.doors.some(d => d.group === obj)) return true;
                        obj = obj.parent;
                    }
                    return false;
                });

                if (hit) {
                    interactedWithObject = true;
                    if (hit.object === this.rock) {
                        this.resetScene();
                        return;
                    }

                    // Identify the specific door object
                    let obj = hit.object;
                    let door = null;
                    while (obj) {
                        door = this.doors.find(d => d.group === obj);
                        if (door) break;
                        obj = obj.parent;
                    }

                    if (door) {
                        // Check if we hit the portal hitbox specifically
                        // Also check standard openness
                        console.log("Hit door:", door.data.id, "Open:", door.isOpen, "Object Name:", hit.object.name, "Hitbox Name:", door.portalHitbox?.name);

                        // Strict check on Hitbox object OR name match if references drift
                        if (hit.object.name === "PortalHitbox" || hit.object === door.portalHitbox) {
                            console.log("Hit PORTAL HITBOX (Name/Ref Match)");
                            this.toggleDoor(door);
                        } else {
                            // Any other hit (Frame/Panel/Hardware) just toggles
                            console.log("Hit FRAME/PANEL (Name Match)");
                            this.toggleDoor(door);
                        }
                    }
                }
            }

            // Tapping anywhere else toggles UI
            if (!interactedWithObject) {
                this.setUIVisibility(!this.uiVisible);
            }
        } catch (e) {
            console.error("Error in onClick:", e);
        }
    }

    toggleDoor(door) {
        if (door.isAnimating) return;
        door.isAnimating = true;
        door.isOpen = !door.isOpen;
        if (door.isOpen) {
            const targetPoint = door.group.position.clone();
            targetPoint.y = 1.75;
            const currentCamPos = this.camera.position.clone();
            const direction = new THREE.Vector3().subVectors(currentCamPos, targetPoint).normalize();
            const dist = 6.0;
            const targetCamPos = targetPoint.clone().add(direction.multiplyScalar(dist));
            targetCamPos.y = 1.6;

            gsap.to(this.controls.target, { x: targetPoint.x, y: targetPoint.y, z: targetPoint.z, duration: 2.5, ease: "power3.inOut" });
            gsap.to(this.camera.position, { x: targetCamPos.x, y: targetCamPos.y, z: targetCamPos.z, duration: 2.5, ease: "power3.inOut" });

            // Stop auto-rotate on open
            this.controls.autoRotate = false;
            // Update button visual state if it exists
            const rotateBtn = document.querySelector('button[title*="Toggle/Hold Auto-Rotate"]');
            if (rotateBtn) rotateBtn.style.color = 'rgba(255,255,255,0.3)';

            // Fade out rings on open

            // Fade out rings on open
            if (this.ringMat) {
                gsap.to(this.ringMat, { opacity: 0, duration: 1.5, ease: "power2.inOut" });
            }
        } else {
            // Fade rings back in on close (if manually closed without entering)
            if (this.ringMat) {
                gsap.to(this.ringMat, { opacity: 0.9, duration: 1.5, ease: "power2.inOut" });
            }
        }
        gsap.to(door.hinge.rotation, {
            y: door.isOpen ? -Math.PI / 2 : 0,
            duration: 2.0, delay: door.isOpen ? 0.5 : 0, ease: "power2.inOut",
            onComplete: () => { door.isAnimating = false; }
        });
    }



    resetScene() {
        this.closeAllDoors();
        gsap.to(this.controls.target, { x: 0, y: 1.6, z: 0, duration: 2.0, ease: "power2.inOut" });
        gsap.to(this.camera.position, { x: 0, y: 1.6, z: 25, duration: 2.0, ease: "power2.inOut" });

        // Fade rings back in slowly
        if (this.ringMat) {
            gsap.to(this.ringMat, { opacity: 0.9, duration: 4.0, ease: "power2.inOut" });
        }

        // Reset FOV
        gsap.to(this.camera, {
            fov: 50, // Default FOV from CONFIG
            duration: 2.0,
            ease: "power2.inOut",
            onUpdate: () => this.camera.updateProjectionMatrix()
        });
    }

    closeAllDoors() {
        this.doors.forEach(door => {
            if (door.isOpen) {
                door.isOpen = false;
                door.isAnimating = true;
                gsap.to(door.hinge.rotation, {
                    y: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                    onComplete: () => { door.isAnimating = false; }
                });
            }
        });
    }

    setupLighting() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambient);
        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.3);
        this.scene.add(this.hemiLight);

        this.sunDist = 600;
        this.sunLight = new THREE.DirectionalLight(0xffddaa, 1.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 8192;
        this.sunLight.shadow.mapSize.height = 8192;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 1000;
        const d = 55;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.bias = -0.0000;
        this.sunLight.shadow.normalBias = 0;
        this.sunLight.shadow.radius = 3;
        this.scene.add(this.sunLight);

        const sunTex = this.generateSunTexture();
        this.sunMesh = new THREE.Mesh(new THREE.SphereGeometry(30, 64, 64), new THREE.MeshStandardMaterial({
            map: sunTex,
            emissiveMap: sunTex,
            emissive: 0xffaa00,
            emissiveIntensity: 5.0,
            fog: true
        }));
        this.scene.add(this.sunMesh);

        this.moonLight = new THREE.DirectionalLight(0xaaccff, 2.0);
        this.moonLight.castShadow = true;
        this.moonLight.shadow.mapSize.width = 8192;
        this.moonLight.shadow.mapSize.height = 8192;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 1000;
        this.moonLight.shadow.camera.left = -55;
        this.moonLight.shadow.camera.right = 55;
        this.moonLight.shadow.camera.top = 55;
        this.moonLight.shadow.camera.bottom = -55;
        this.moonLight.shadow.bias = -0.0000;
        this.moonLight.shadow.normalBias = 0;
        this.moonLight.shadow.radius = 3;
        this.scene.add(this.moonLight);

        const moonTex = this.generateMoonTexture();
        this.moonMesh = new THREE.Mesh(new THREE.SphereGeometry(20, 64, 64), new THREE.MeshStandardMaterial({
            map: moonTex,
            emissiveMap: moonTex,
            emissive: 0xffffff,
            emissiveIntensity: 3.5,
            roughness: 0.9,
            metalness: 0,
            fog: true
        }));
        this.scene.add(this.moonMesh);
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
        canvas.width = 1024; canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Deep solar orange base
        ctx.fillStyle = '#ff4500';
        ctx.fillRect(0, 0, 1024, 512);

        // High contrast plasma granules
        for (let i = 0; i < 40000; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const r = Math.random() * 2 + 0.5;
            const val = Math.random();
            if (val > 0.98) ctx.fillStyle = '#ffffff'; // Hot spots
            else if (val > 0.7) ctx.fillStyle = '#ffcc00'; // Bright plasma
            else if (val > 0.4) ctx.fillStyle = '#ff8c00'; // Mid plasma
            else ctx.fillStyle = '#8B0000'; // Darker cooler spots (sunspots)

            ctx.globalAlpha = Math.random() * 0.5;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }

    generateMoonTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024; canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Lunar grey base
        ctx.fillStyle = '#d0d0d0';
        ctx.fillRect(0, 0, 1024, 512);

        // High contrast craters and Maria
        for (let i = 0; i < 25000; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const val = Math.random();

            if (val > 0.85) {
                // Large Maria (dark basaltic plains)
                ctx.fillStyle = '#2a2a2a';
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(x, y, Math.random() * 80 + 20, 0, Math.PI * 2);
                ctx.fill();
            } else if (val > 0.5) {
                // Small Craters
                ctx.fillStyle = '#ffffff'; // Rim
                ctx.globalAlpha = 0.4;
                const r = Math.random() * 4 + 1;
                ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();

                ctx.fillStyle = '#444444'; // Core
                ctx.beginPath(); ctx.arc(x + 1, y + 1, r * 0.8, 0, Math.PI * 2); ctx.fill();
            } else {
                // Surface noise
                ctx.fillStyle = Math.random() > 0.5 ? '#fcfcfc' : '#888888';
                ctx.globalAlpha = 0.1;
                ctx.fillRect(x, y, 2, 2);
            }
        }
        return new THREE.CanvasTexture(canvas);
    }

    setupEnvironment() {
        const color = new THREE.Color(CONFIG.scene.fog.color);
        this.scene.fog = new THREE.FogExp2(color, 0.002);
        this.renderer.setClearColor(color);

        // Large Flat Plane Ground
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
        this.scene.add(ground);

        this.createSacredGeometry();
        this.createCentralRock();
    }

    setupDoors() {
        const loader = new GLTFLoader(this.loadingManager);
        const numRings = 5; const baseRadius = 15; const radiusStep = 8;
        for (let r = 0; r < numRings; r++) {
            const currentRadius = baseRadius + (r * radiusStep);
            CONFIG.doors.forEach((data, index) => {
                // Alternate rings: even rings (0,2,4) align, odd rings (1,3) offset by half spacing
                const baseAngle = (index * (Math.PI * 2)) / CONFIG.doors.length;
                const offset = (r % 2 === 1) ? (Math.PI / CONFIG.doors.length) : 0;
                const angle = baseAngle + offset;
                const x = Math.sin(angle) * currentRadius;
                const z = Math.cos(angle) * currentRadius;

                const group = new THREE.Group();
                group.position.set(x, 0, z);
                this.scene.add(group);

                const hinge = new THREE.Group(); hinge.position.set(-0.75, 0, 0); group.add(hinge);
                const doorObj = { group, data, hinge, isOpen: false };
                this.createDoorFrame(group, data);

                loader.load(data.modelPath, (gltf) => {
                    const model = gltf.scene; const panel = model.getObjectByName('Door') || model;
                    model.traverse(o => { if (o.isMesh) { o.material = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.4, metalness: 0.2 }); o.castShadow = true; o.receiveShadow = true; } });
                    // Sink panel slightly into ground for shadow contact
                    panel.position.set(0.75, -0.02, 0); hinge.add(panel); doorObj.panel = panel;
                }, null, () => {
                    // Monolith: height 3.6 (extended), center at 1.78 means bottom at -0.02
                    const monolith = new THREE.Mesh(new THREE.BoxGeometry(1.5, 3.6, 0.2), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.2 }));
                    monolith.position.set(0.75, 1.78, 0); monolith.castShadow = true; monolith.receiveShadow = true; hinge.add(monolith); doorObj.panel = monolith;
                });
                doorObj.portalHitbox = group.userData.portalHitbox; // Retrieve from frame creation
                console.log(`Setup door: ${data.id}, URL: ${data.destinationUrl}, Hitbox:`, doorObj.portalHitbox);
                this.doors.push(doorObj);
            });
        }
    }

    createDoorFrame(group, data) {
        const mat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 });
        // Extended posts: 3.6m tall, bottom sinks into ground
        const postGeo = new THREE.BoxGeometry(0.1, 3.6, 0.1);

        // Posts: center at 1.78 means bottom at -0.02 (below ground)
        const lP = new THREE.Mesh(postGeo, mat); lP.position.set(-0.8, 1.78, 0); lP.castShadow = true; lP.name = "Frame"; group.add(lP);
        const rP = new THREE.Mesh(postGeo, mat); rP.position.set(0.8, 1.78, 0); rP.castShadow = true; rP.name = "Frame"; group.add(rP);

        // Top plate
        const tP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.1), mat); tP.position.set(0, 3.58, 0); tP.castShadow = true; tP.name = "Frame"; group.add(tP);

        // Base: extend into ground for shadow contact
        const bP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 0.1), mat);
        bP.position.set(0, 0.04, 0); // Bottom at -0.02
        bP.castShadow = true; bP.receiveShadow = true; bP.name = "Frame"; group.add(bP);

        // Portal Hitbox (Invisible Plane for Entry Click)
        // Slightly wider (1.5) and forward (z=0.01) to catch clicks better.
        const portalGeo = new THREE.PlaneGeometry(1.5, 3.5);
        const portalMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0, visible: true, side: THREE.DoubleSide });
        const portal = new THREE.Mesh(portalGeo, portalMat);
        portal.position.set(0, 1.75, 0.01);
        portal.name = "PortalHitbox";
        group.add(portal);
        // Store reference on door object (need to pass back up or find way to access)
        // Since createDoorFrame returns void, we can retrieve it from children in setupDoors
        // Actually, easier to return it or attach it to group.userData
        group.userData.portalHitbox = portal;
    }

    createSacredGeometry() {
        this.ringMat = new THREE.MeshStandardMaterial({
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
        this.rings = []; const baseR = 15; const stepR = 8;
        for (let i = 0; i < 5; i++) {
            const r = baseR + (i * stepR);
            const mesh = new THREE.Mesh(new THREE.RingGeometry(r - 0.125, r + 0.125, 128), this.ringMat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.position.y = 0.03; // Raised slightly to avoid flickering
            mesh.receiveShadow = true;
            mesh.renderOrder = 1;
            this.scene.add(mesh); this.rings.push({ mesh, speed: 0 });
        }
    }

    createCentralRock() {
        const geo = new THREE.ConeGeometry(1.5, 3.0, 64, 32); geo.translate(0, 1.5, 0);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.05,
            metalness: 1.0,
            envMapIntensity: 1.0
        });
        this.rock = new THREE.Mesh(geo, mat);
        this.rock.castShadow = true;
        this.rock.receiveShadow = true;
        this.rock.visible = false;
        this.scene.add(this.rock);

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
            this.sunAngle += this.daySpeed * 0.1;
            const r = this.sunDist;
            const zPlane = -this.sunDist * 0.4;

            const y = Math.sin(this.sunAngle) * r;
            const x = Math.cos(this.sunAngle) * r;

            this.sunLight.position.set(x, y, zPlane);
            this.sunMesh.position.set(x, y, zPlane);
            this.moonLight.position.set(-x, -y, zPlane);
            this.moonMesh.position.set(-x, -y, zPlane);

            this.moonMesh.rotation.y = Math.atan2(-x, zPlane) + Math.PI;

            const sH = Math.max(0, Math.sin(this.sunAngle));
            const mH = Math.max(0, -Math.sin(this.sunAngle));

            // Concurrent cross-fade
            this.sunLight.intensity = (Math.sin(this.sunAngle) + 0.1 > 0) ? (sH * 5.0) : 0;
            this.moonLight.intensity = (-Math.sin(this.sunAngle) + 0.1 > 0) ? (mH * 3.5) : 0;

            const angleMod = ((this.sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
            const transitionZone = Math.PI / 3;

            if (angleMod >= 0 && angleMod <= Math.PI) {
                const riseEnd = transitionZone;
                const sunsetStart = Math.PI - transitionZone;
                if (angleMod < riseEnd) {
                    const t = 1.0 - (angleMod / riseEnd);
                    const sunCol = new THREE.Color(0xffffff).lerp(new THREE.Color(0xff8833), t);
                    this.sunMesh.material.color.copy(sunCol);
                    this.sunLight.color.lerpColors(new THREE.Color(0xffddaa), new THREE.Color(0xff7722), t);
                } else if (angleMod > sunsetStart) {
                    const t = (angleMod - sunsetStart) / transitionZone;
                    const sunCol = new THREE.Color(0xffffff).lerp(new THREE.Color(0xff8833), t);
                    this.sunMesh.material.color.copy(sunCol);
                    this.sunLight.color.lerpColors(new THREE.Color(0xffddaa), new THREE.Color(0xff7722), t);
                } else {
                    this.sunMesh.material.color.set(0xffffff);
                    this.sunLight.color.set(0xffddaa);
                }
            }

            if (angleMod > Math.PI && angleMod < Math.PI * 2) {
                const riseEnd = Math.PI + transitionZone;
                const moonSetStart = (Math.PI * 2) - transitionZone;
                if (angleMod < riseEnd) {
                    const t = 1.0 - ((angleMod - Math.PI) / transitionZone);
                    const moonCol = new THREE.Color(0xffffff).lerp(new THREE.Color(0xd0e0ff), t);
                    this.moonMesh.material.color.copy(moonCol);
                    this.moonMesh.material.emissive.copy(moonCol);
                } else if (angleMod > moonSetStart) {
                    const t = (angleMod - moonSetStart) / transitionZone;
                    const moonCol = new THREE.Color(0xffffff).lerp(new THREE.Color(0xd0e0ff), t);
                    this.moonMesh.material.color.copy(moonCol);
                    this.moonMesh.material.emissive.copy(moonCol);
                } else {
                    this.moonMesh.material.color.set(0xffffff);
                    this.moonMesh.material.emissive.set(0xffffff);
                }
            }

            const dayColor = new THREE.Color(0x2c3e50);
            const nightColor = new THREE.Color(0x050510);
            const currColor = new THREE.Color(0x000000);
            currColor.lerp(dayColor, sH);
            currColor.lerp(nightColor, mH * 0.4);

            this.scene.background = currColor;
            if (this.scene.fog) this.scene.fog.color = currColor;
            this.hemiLight.intensity = 0.15 + (sH * 0.3) + (mH * 0.15);
            this.hemiLight.color.lerpColors(new THREE.Color(0x4444ff), new THREE.Color(0xffffff), sH);
        }
        if (this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        if (this.rock) {
            // No time uniform to update
        }

        if (this.dust) {
            const pos = this.dust.geometry.attributes.position.array;
            for (let i = 0; i < pos.length; i += 3) pos[i + 1] += Math.sin(this.time * 5 + pos[i]) * 0.002;
            this.dust.geometry.attributes.position.needsUpdate = true;
        }
        this.doors.forEach(d => d.group.lookAt(this.camera.position.x, d.group.position.y, this.camera.position.z));

        // Prevent camera from going below the floor (especially on mobile)
        if (this.camera.position.y < 0.5) {
            this.camera.position.y = 0.5;
        }

        this.controls.update(); this.composer.render();
    }
}
new DuarApp();

// Service Worker Registration for Auto-Update
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered:', registration);

            // Check for updates every minute (optional but good for long sessions)
            setInterval(() => {
                registration.update();
            }, 60 * 1000);

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available
                            console.log('New content is available; please refresh.');
                            // Execute update logic
                            if (registration.waiting) {
                                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                            }
                        } else {
                            // Content is cached for offline use.
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            };
        }).catch(registrationError => {
            console.log('SW registration failed:', registrationError);
        });

        // Ensure reload when new SW takes control
        let refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
        });
    });
}
