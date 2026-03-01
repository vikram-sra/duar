import * as THREE from 'three';
import gsap from 'gsap';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import { World } from './js/World';
import { Celestial } from './js/Celestial';
import { Doors } from './js/Doors';
import { UIManager } from './js/UIManager';

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
    ]
};

class DuarApp {
    constructor() {
        this.container = document.getElementById('app');
        this.time = 0;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();

        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();

        this.init();
        setTimeout(() => this.revealScene(), 2500); // Fallback reveal
    }

    setupLoadingManager() {
        const loaderUi = document.getElementById('loading');
        this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            if (loaderUi) {
                const percent = Math.floor((itemsLoaded / itemsTotal) * 100);
                loaderUi.innerText = percent < 100 ? `Loading Insights (${percent}%)` : `Preparing World...`;
            }
        };
        this.loadingManager.onLoad = () => this.revealScene();
        this.loadingManager.onError = () => this.revealScene();
    }

    revealScene() {
        const loader = document.getElementById('loading');
        if (loader) loader.classList.add('hidden');
        if (this.doorManager && this.doorManager.rock) this.doorManager.rock.visible = true;
    }

    init() {
        this.world = new World(this.container, CONFIG);

        // Enhance with SMAA
        const smaaPass = new SMAAPass(window.innerWidth * this.world.renderer.getPixelRatio(), window.innerHeight * this.world.renderer.getPixelRatio());
        this.world.composer.addPass(smaaPass);

        // Apply sRGB encoding and tone mapping
        const outputPass = new OutputPass();
        this.world.composer.addPass(outputPass);

        this.celestial = new Celestial(this.world.scene);

        this.doorManager = new Doors(
            this.world.scene, CONFIG, this.loadingManager, this.world.camera, this.world.controls,
            () => {
                this.world.controls.autoRotate = false;
                this.ui.setRotateActive(false);
            }
        );

        this.ui = new UIManager({
            onHome: () => this.doorManager.resetScene(),
            onRandom: () => this.goToRandomDoor(),
            onSpeedChange: (speed) => { /* Celestial handles rotation, we just need to read it */ },
            onRotateToggle: () => {
                this.world.controls.autoRotate = !this.world.controls.autoRotate;
                if (this.world.controls.autoRotate) this.world.controls.autoRotateSpeed = -0.8;
                return this.world.controls.autoRotate;
            },
            onRotateHold: () => {
                const ctrls = this.world.controls;
                if (!ctrls.autoRotate) {
                    ctrls.autoRotate = true;
                    this.ui.setRotateActive(true);
                    ctrls.autoRotateSpeed = -0.5;
                }
                ctrls.autoRotateSpeed = Math.min(-0.5, ctrls.autoRotateSpeed * 1.05);
            },
            onRotateRelease: () => {
                if (this.world.controls.autoRotate) this.world.controls.autoRotateSpeed = -0.8;
            },
            onTimeJump: (angle) => this.sunAngle = angle
        });

        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        this.sunAngle = ((hours - 6) / 24) * Math.PI * 2;

        window.addEventListener('pointerdown', (e) => this.onPointerDown(e));
        window.addEventListener('pointermove', (e) => this.onPointerMove(e));

        this.animate();
    }

    onPointerMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }

    goToRandomDoor() {
        if (this.doorManager.doors.length === 0) return;
        const door = this.doorManager.doors[Math.floor(Math.random() * this.doorManager.doors.length)];
        const angle = Math.atan2(door.group.position.x, door.group.position.z);
        const dist = 25;
        gsap.to(this.world.camera.position, {
            x: Math.sin(angle) * dist, y: 1.6, z: Math.cos(angle) * dist,
            duration: 1.5, ease: "power2.inOut",
            onUpdate: () => this.world.camera.lookAt(0, 1.6, 0)
        });
        if (!door.isOpen) this.doorManager.toggleDoor(door);
    }

    onPointerDown(e) {
        let startX = e.clientX, startY = e.clientY;
        const upHandler = (upE) => {
            const dist = Math.sqrt(Math.pow(upE.clientX - startX, 2) + Math.pow(upE.clientY - startY, 2));
            if (dist < 10) this.onClick(upE);
            window.removeEventListener('pointerup', upHandler);
        };
        window.addEventListener('pointerup', upHandler);
    }

    onClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.world.camera);

        const hits = this.raycaster.intersectObjects(this.world.scene.children, true);
        let interacted = false;

        if (hits.length > 0) {
            const hit = hits.find(h => {
                if (h.object === this.doorManager.rock) return true;
                let obj = h.object;
                while (obj) {
                    if (this.doorManager.doors.some(d => d.group === obj)) return true;
                    obj = obj.parent;
                }
                return false;
            });

            if (hit) {
                interacted = true;
                if (hit.object === this.doorManager.rock) {
                    this.doorManager.resetScene();
                    return;
                }

                let obj = hit.object;
                let door = null;
                while (obj) {
                    door = this.doorManager.doors.find(d => d.group === obj);
                    if (door) break;
                    obj = obj.parent;
                }

                if (door) this.doorManager.toggleDoor(door);
            }
        }

        if (!interacted) {
            this.ui.setUIVisibility(!this.ui.uiVisible);
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.time += 0.001;

        this.sunAngle += this.ui.daySpeed * 0.1;
        this.celestial.update(this.sunAngle);

        // Hover Raycast Logic
        this.raycaster.setFromCamera(this.mouse, this.world.camera);
        const hits = this.raycaster.intersectObjects(this.world.scene.children, true);

        let hoveredDoor = null;
        if (hits.length > 0) {
            const hit = hits.find(h => {
                let obj = h.object;
                while (obj) {
                    if (this.doorManager.doors.some(d => d.group === obj)) return true;
                    obj = obj.parent;
                }
                return false;
            });

            if (hit) {
                let obj = hit.object;
                while (obj) {
                    hoveredDoor = this.doorManager.doors.find(d => d.group === obj);
                    if (hoveredDoor) break;
                    obj = obj.parent;
                }
            }
        }

        this.doorManager.setHoverState(hoveredDoor);

        this.doorManager.update(this.sunAngle);
        // Pass mouse coords to World for dust interaction
        this.world.update(this.time, this.mouse);
    }
}
new DuarApp();

// Service Worker Registration for Auto-Update
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            setInterval(() => registration.update(), 60 * 1000);

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) return;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    }
                };
            };
        }).catch(err => console.log('SW registration failed:', err));

        let refreshing;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            window.location.reload();
            refreshing = true;
        });
    });
}
