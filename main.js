import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

import { loadManifest } from './src/portfolio/manifest.js';
import { layoutPaintings, byYearNewestFirst } from './src/portfolio/layout.js';
import {
    createPaintingDoor, loadPaintingTexture, focusDistanceFor,
    unitBox, unitPlane, frameMaterial, updatePaintingFramesMaterial
} from './src/portfolio/paintingDoor.js';
import { createCeramicSculpture } from './src/portfolio/sculpture.js';
import { createTorontoSkySystem, calculateTorontoSunMoon } from './src/sky/celestial.js';

// Floor ring ribbon. Door mode and paintings mode are the same geometry at different wave
// amplitudes, which lets switchView morph between them instead of swapping buffers.
const RING_SEGMENTS = 720;
const RING_WAVE_COUNT = 60;
const RING_WAVE_AMPLITUDE = 0.20;
const RING_WIDTH_FLAT = 0.25;
const RING_WIDTH_WAVY = 0.22;

const CONFIG = {
    "scene": {
        "fog": { "color": "#273444", "near": 25, "far": 120 },
        "camera": { "fov": 50, "startPosition": [0, 3.0, 28.5] }
    },
    "doors": [
        { id: "portfolio", label: "PORTFOLIO", type: "rustic_wood", modelPath: "/models/door_rustic.glb", position: [-10, 0, -6], rotation: [0, 0.4, 0], destinationUrl: "", animation: "creakOpen", color: 0xffaa88, particles: "leaves" },
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
        this.daySpeed = 0.08;
        this.isTraveling = false;
        this.activeDoor = null;  // The currently open door, target for reticle
        this._orbitRadius = null; // When set, render loop enforces this distance from controls.target
        this.hoveredDoor = null;  // Door currently under the cursor (drives label display)
        this.elapsed = 0;         // Real seconds since start (delta-time accumulator)
        this.viewMode = 'portfolio'; // Default view is now paintings gallery ('portfolio')
        this._switching = false;
        this.particleSystems = [];
        this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane
        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();
        this._bindReticle();
        this._bindPaintingPopup();

        this.init();
        // Fallback to reveal scene after 2.5s if loading hangs
        setTimeout(() => this.revealScene(), 2500);
    }

    // Bind persistent reticle handlers.
    _bindReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        // Swallow pointer events so a click on the reticle never reaches the door or
        // canvas behind it.
        ['pointerdown', 'pointerup'].forEach(ev =>
            reticle.addEventListener(ev, (e) => e.stopPropagation())
        );
        // Enter dot: nothing is built behind any door yet, so every door refuses.
        // ("Go Back" is a child of #reticle but stops propagation, so its clicks
        // never reach this handler.)
        reticle.addEventListener('click', (e) => {
            e.stopPropagation();
            // A painting has nothing behind it to enter, so there's nothing to
            // refuse — only the cross is live in portfolio view.
            if (this.viewMode === 'portfolio') return;
            this._refuseEntry();
        });
        // "Go Back": close the open door and fly home. It's a sibling of #reticle now,
        // so query the document rather than the reticle.
        const backBtn = document.querySelector('.reticle-back');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.isTraveling) this.resetScene();
            });
        }
    }

    // Bind title pill and details popup for focused painting.
    _bindPaintingPopup() {
        const popup = document.getElementById('painting-popup');
        const titleBtn = document.getElementById('painting-title-btn');
        const card = document.getElementById('painting-popup-card');
        if (!popup || !titleBtn) return;

        titleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            popup.classList.toggle('open');
        });

        if (card) {
            ['pointerdown', 'pointerup', 'click'].forEach(ev => {
                card.addEventListener(ev, (e) => e.stopPropagation());
            });
        }

        window.addEventListener('click', (e) => {
            if (popup.classList.contains('open') && !popup.contains(e.target)) {
                popup.classList.remove('open');
            }
        });
    }

    // Swap the "Enter" caption for a status message, then restore it.
    _flashReticleLabel(message) {
        const label = document.querySelector('#reticle .reticle-label');
        if (!label) return;
        if (!this._reticleLabelDefault) this._reticleLabelDefault = label.textContent;
        label.textContent = message;
        clearTimeout(this._reticleLabelTimeout);
        this._reticleLabelTimeout = setTimeout(() => {
            label.textContent = this._reticleLabelDefault;
            label.classList.remove('refuse');
        }, 1600);
    }

    // Shake the reticle and say so — a refusal you feel before you read it.
    _refuseEntry(message = 'Coming soon') {
        const reticle = document.getElementById('reticle');
        const label = reticle?.querySelector('.reticle-label');
        this._flashReticleLabel(message);
        if (!reticle || !label) return;

        // Restart the animation on repeated taps: drop the class, force a reflow, then
        // re-add. Without the reflow the browser coalesces it and nothing moves.
        reticle.classList.remove('refuse');
        label.classList.remove('refuse');
        void reticle.offsetWidth;
        reticle.classList.add('refuse');
        label.classList.add('refuse');
        setTimeout(() => reticle.classList.remove('refuse'), 500);
    }

    _showReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        // In portfolio view the dot, ring and "Enter" caption are hidden — a
        // painting is looked at, not entered — leaving only the cross to exit.
        const art = this.viewMode === 'portfolio';
        reticle.classList.toggle('art-mode', art);
        if (art) {
            // The title element keeps whatever door was last opened in the default
            // view; without clearing it, a stale "duar-੯" floats over the painting.
            const titleEl = reticle.querySelector('.reticle-title');
            if (titleEl) titleEl.textContent = '';
        }
        reticle.classList.add('visible');

        const back = document.querySelector('.reticle-back');
        if (back) {
            back.classList.toggle('art', art);
            back.classList.add('visible');
        }
        gsap.fromTo(reticle,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', overwrite: true }
        );

        // Show persistent title pill at the top in focus mode
        if (art && this.activeDoor?.data) {
            const p = this.activeDoor.data;
            const popup = document.getElementById('painting-popup');
            const titleSpan = popup?.querySelector('.popup-title-text');
            const metaDiv = popup?.querySelector('.popup-card-meta');
            const descDiv = popup?.querySelector('.popup-card-desc');

            if (popup && titleSpan) {
                titleSpan.textContent = p.title || 'Untitled';

                // Verbatim dimensions, year and medium provided
                const metaParts = [];
                if (p.year) metaParts.push(`${p.year}`);
                if (p.widthIn && p.heightIn) metaParts.push(`${p.widthIn}×${p.heightIn} in`);
                if (p.medium) metaParts.push(p.medium);

                if (metaDiv) metaDiv.textContent = metaParts.join('  ·  ');
                if (descDiv) descDiv.textContent = p.description || '';

                popup.classList.remove('open');
                popup.classList.add('visible');
            }
        }
    }

    _hideReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        // Drop the portfolio-specific styling as well as visibility
        document.querySelector('.reticle-back')?.classList.remove('visible', 'art');

        // Hide focus title pill and dropdown card
        const popup = document.getElementById('painting-popup');
        if (popup) {
            popup.classList.remove('visible', 'open');
        }

        gsap.to(reticle, {
            opacity: 0, scale: 0, duration: 0.3, ease: 'power2.in', overwrite: true,
            onComplete: () => reticle.classList.remove('visible', 'art-mode')
        });
    }

    // Fade out the title wordmark + onboarding hint once, on first interaction (or timeout).
    dismissIntro() {
        if (this._introDismissed) return;
        this._introDismissed = true;
        ['intro-title', 'intro-hint'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.animation = 'none'; // release the CSS fade-in so GSAP can take over
            gsap.to(el, {
                opacity: 0, y: -20, duration: 1.2, ease: 'power2.out',
                onComplete: () => { el.style.display = 'none'; }
            });
        });
    }

    // Project each door's name to screen space; show only the hovered / open door's label.
    updateLabels() {
        if (!this.doors.length) return;
        const v = new THREE.Vector3();
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        this.doors.forEach(d => {
            const el = d.labelEl;
            if (!el) return;
            const show = (d === this.hoveredDoor && !this.activeDoor) && !this.isTraveling;
            if (!show) { if (el.style.opacity !== '0') el.style.opacity = '0'; return; }
            const labelY = d.isPainting ? (d.centreY + (d.height || 4) / 2 + 0.3) : 3.7;
            v.set(d.group.position.x, d.group.position.y + labelY, d.group.position.z).project(this.camera);
            if (v.z > 1) { el.style.opacity = '0'; return; } // behind the camera
            el.style.left = (v.x * halfW + halfW) + 'px';
            el.style.top = (-v.y * halfH + halfH) + 'px';
            el.style.opacity = '1';
        });
    }

    setupLoadingManager() {
        this.loadingManager.onLoad = () => this.revealScene();
        this.loadingManager.onError = () => this.revealScene();
    }

    revealScene() {
        const loader = document.getElementById('loading');
        if (loader) {
            gsap.to(loader, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        }
        if (this.viewMode === 'portfolio') {
            if (this.sculpture) this.sculpture.visible = true;
            if (this.rock) this.rock.visible = false;
        } else {
            if (this.rock) this.rock.visible = true;
            if (this.sculpture) this.sculpture.visible = false;
        }
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(CONFIG.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 6000);
        this.camera.position.set(0, 3.0, 28.5);
        this.camera.lookAt(0, 1.6, 0);

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (window.innerWidth < 768);
        this.isMobile = isMobile;

        this.renderer = new THREE.WebGLRenderer({
            antialias: !isMobile, // Hardware MSAA on mobile postprocessing causes heavy bandwidth & heat
            powerPreference: "high-performance",
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.02; // Clean, natural exposure
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap; // Clean, standard PCF shadows
        this.container.appendChild(this.renderer.domElement);

        this.renderer.setClearColor(0x000000, 1); // Stay black initially

        // Image-Based Lighting environment map for realistic chrome/gold/silver/bronze metal reflections
        try {
            const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
            pmremGenerator.compileEquirectangularShader();
            const envScene = new RoomEnvironment();
            this.scene.environment = pmremGenerator.fromScene(envScene).texture;
            this.scene.environmentIntensity = 0.35;
            envScene.dispose();
            pmremGenerator.dispose();
        } catch (e) {
            console.warn('Environment map initialization bypassed:', e);
        }

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomRes = isMobile
            ? new THREE.Vector2(Math.floor(window.innerWidth / 4), Math.floor(window.innerHeight / 4))
            : new THREE.Vector2(Math.floor(window.innerWidth / 2), Math.floor(window.innerHeight / 2));
        this.bloomPass = new UnrealBloomPass(bloomRes, 0.08, 0.3, 0.98); // Very high threshold: only direct sun glows, zero ground/art blowout
        this._bloomDefaults = { strength: 0.08, threshold: 0.98 };
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
        if (this.viewMode === 'portfolio') {
            this.buildPortfolioDoors();
            this.bloomPass.threshold = 0.98;
            this.bloomPass.strength = 0.08;
        } else {
            this.setupDoors();
        }
        this.setupDustMotes();

        window.addEventListener('resize', () => this.onResize(), { passive: true });
        window.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
        window.addEventListener('wheel', () => this.dismissIntro(), { passive: true });
        window.addEventListener('contextmenu', (e) => e.preventDefault());

        let startX = 0; let startY = 0; let startTime = 0;
        window.addEventListener('pointerdown', (e) => {
            this.dismissIntro();
            startX = e.clientX; startY = e.clientY;
            startTime = performance.now();
            // Touch has no hover state — raycast on contact so a door's label appears the
            // instant you touch it, same moment a mouse user would see it on hover.
            this.onMouseMove(e);
            // Dev Mode: middle/right button or Shift starts dragging a portal.
            // Left button falls through so it still orbits the camera / opens doors.
            if (e.button === 1 || e.button === 2 || e.shiftKey) this.handlePointerDown(e);
        });
        window.addEventListener('pointermove', (e) => {
            // Lets a held/dragging finger "scrub" across doors and preview each label in turn.
            this.onMouseMove(e);
            if (this.draggedDoor) this.handleDoorDrag(e);
        });
        window.addEventListener('pointerup', (e) => {
            // Touch has no rest state after lifting — clear the preview so a label doesn't
            // stay stuck on screen. (If this same tap opens the door, isOpen keeps it visible.)
            if (e.pointerType === 'touch') this.hoveredDoor = null;
            // Releasing a portal drag must not also count as a click.
            if (this.draggedDoor) {
                this.draggedDoor = null;
                this.controls.enabled = true;
                return;
            }
            const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
            const duration = performance.now() - startTime;
            // Strict intentional tap detection: ignores drag-releases, scrolls, or long holds (>350ms or >8px)
            if (dist < 8 && duration < 350) this.onClick(e);
        });

        this.createTimeControls();
        this._startClock();

        // Seed the sky to the current time of day; it then drifts slowly (see animate()).
        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        this.sunAngle = ((hours - 6) / 24) * Math.PI * 2;
        this.daySpeed = 0.025;

        // Fallback: dismiss the intro overlays if the user hasn't interacted yet.
        setTimeout(() => this.dismissIntro(), 14000);

        // Pre-compile scene shaders on GPU to eliminate first-frame rAF stalls
        try { this.renderer.compile(this.scene, this.camera); } catch (e) { /* noop */ }

        this._lastFrame = performance.now();
        this.animate();
    }

    createTimeControls() {
        if (!document.getElementById('compact-ui-css')) {
            const style = document.createElement('style');
            style.id = 'compact-ui-css';
            style.innerHTML = `
                .glass-bar-wrapper {
                    pointer-events: auto;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(16px) saturate(180%);
                    -webkit-backdrop-filter: blur(16px) saturate(180%);
                    padding: 4px 10px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    gap: 7px;
                }
                .chrome-slider {
                    -webkit-appearance: none;
                    width: 120px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.18);
                    outline: none;
                    border: none;
                }
                .chrome-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 22px;
                    height: 12px;
                    border-radius: 2px;
                    background: #fff;
                    cursor: pointer;
                    border: none;
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
                    transition: transform 0.1s ease;
                }
                .chrome-slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
                .glass-btn {
                    background: rgba(255, 255, 255, 0.03);
                    color: rgba(255, 255, 255, 0.65);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 7px;
                    width: 28px;
                    height: 28px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.15s ease;
                    padding: 0;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-touch-callout: none;
                    position: relative;
                }
                .glass-btn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.3; stroke-linecap: round; stroke-linejoin: round; }
                .glass-btn:hover {
                    background: rgba(255, 255, 255, 0.12);
                    border-color: rgba(255, 255, 255, 0.35);
                    color: #ffffff;
                }
                .glass-btn:active {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: scale(0.95);
                }
                .glass-btn.day-btn {
                    color: #ffd677;
                    background: rgba(255, 214, 119, 0.06);
                    border-color: rgba(255, 214, 119, 0.2);
                }
                .glass-btn.day-btn:hover {
                    color: #fff2b2;
                    background: rgba(255, 214, 119, 0.16);
                    border-color: rgba(255, 214, 119, 0.45);
                    box-shadow: 0 0 10px rgba(255, 214, 119, 0.25);
                }
                .glass-btn.day-btn:active {
                    background: rgba(255, 214, 119, 0.25);
                    border-color: rgba(255, 214, 119, 0.6);
                }
                .glass-btn.night-btn {
                    color: #99d2ff;
                    background: rgba(153, 210, 255, 0.06);
                    border-color: rgba(153, 210, 255, 0.2);
                }
                .glass-btn.night-btn:hover {
                    color: #d0ebff;
                    background: rgba(153, 210, 255, 0.16);
                    border-color: rgba(153, 210, 255, 0.45);
                    box-shadow: 0 0 10px rgba(153, 210, 255, 0.25);
                }
                .glass-btn.night-btn:active {
                    background: rgba(153, 210, 255, 0.25);
                    border-color: rgba(153, 210, 255, 0.6);
                }
                .btn-tip {
                    position: absolute;
                    bottom: calc(100% + 12px);
                    left: 50%;
                    transform: translateX(-50%) translateY(4px);
                    padding: 4px 10px;
                    border-radius: 8px;
                    background: rgba(16, 20, 28, 0.65);
                    backdrop-filter: blur(12px) saturate(160%);
                    -webkit-backdrop-filter: blur(12px) saturate(160%);
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    color: rgba(255, 255, 255, 0.9);
                    font-family: 'Outfit', sans-serif;
                    font-size: 10px;
                    font-weight: 400;
                    letter-spacing: 0.12rem;
                    white-space: nowrap;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.18s ease, transform 0.18s ease;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
                }
                .glass-btn:hover .btn-tip,
                .glass-btn .btn-tip.tip-visible,
                .slider-wrapper:hover .btn-tip,
                .slider-wrapper .btn-tip.tip-visible { opacity: 1; transform: translateX(-50%) translateY(0); }
                .slider-wrapper { position: relative; display: inline-flex; align-items: center; }
                .slider-wrapper .btn-tip { left: 50%; transform: translateX(-50%) translateY(4px); }
                .ui-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; }
                
                @media (max-width: 480px) {
                    .chrome-slider { width: 85px; }
                    .glass-bar-wrapper { gap: 5px; padding: 4px 8px; }
                    .glass-btn { width: 28px; height: 28px; }
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
        slider.min = '0'; slider.max = '0.10'; slider.step = '0.001'; slider.value = '0.025';
        slider.setAttribute('aria-label', 'Speed up time');
        slider.oninput = (e) => { this.daySpeed = parseFloat(e.target.value); this.resetUIHideTimer(); };
        ['pointerdown', 'touchstart', 'touchmove'].forEach(ev => slider.addEventListener(ev, e => { e.stopPropagation(); this.resetUIHideTimer(); }));

        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'slider-wrapper';
        const sliderTip = document.createElement('span');
        sliderTip.className = 'btn-tip';
        sliderTip.textContent = 'Speed up time';
        sliderWrapper.append(slider, sliderTip);
        let sliderTipTimeout;
        slider.addEventListener('touchstart', () => {
            sliderTip.classList.add('tip-visible');
            clearTimeout(sliderTipTimeout);
            sliderTipTimeout = setTimeout(() => sliderTip.classList.remove('tip-visible'), 1400);
        }, { passive: true });

        const icons = {
            home: `<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>`, // Diamond
            random: `<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>`, // Pixel/Grid
            day: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>`, // Minimalist Sun
            night: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`, // Minimal Crescent
            rotate: `<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`, // Loop Icon
            art: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`, // Art Gallery Frame Icon
            duar: `<svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16h14zM9 5h6v14H9V5zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`, // Door Icon
            instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
        };

        const createBtn = (svg, onClick, label = '') => {
            const btn = document.createElement('button');
            btn.className = 'glass-btn';
            btn.innerHTML = svg;
            if (label) {
                btn.setAttribute('aria-label', label);
                const tip = document.createElement('span');
                tip.className = 'btn-tip';
                tip.textContent = label;
                btn.appendChild(tip); // glass tooltip: shown on hover, and briefly on touch (no hover state on touch devices)
                let tipTimeout;
                btn.addEventListener('touchstart', () => {
                    tip.classList.add('tip-visible');
                    clearTimeout(tipTimeout);
                    tipTimeout = setTimeout(() => tip.classList.remove('tip-visible'), 1400);
                }, { passive: true });
            }
            btn.onclick = (e) => { e.stopPropagation(); onClick(); this.resetUIHideTimer(); };
            btn.addEventListener('touchstart', e => e.stopPropagation());
            return btn;
        };

        const homeBtn = createBtn(icons.home, () => this.resetScene(true), 'Home');

        const randBtn = createBtn(icons.random, () => {
            if (this.doors.length === 0 || this.isTraveling) return;
            const door = this.doors[Math.floor(Math.random() * this.doors.length)];
            if (door.isPainting) {
                this.focusPainting(door);
            } else {
                if (!door.isOpen) this.toggleDoor(door);
            }
        }, 'Discover');

        const sunBtn = createBtn(icons.day, () => { }, 'Day'); // Click handled by wrapper
        sunBtn.classList.add('day-btn');
        const moonBtn = createBtn(icons.night, () => { }, 'Night');
        moonBtn.classList.add('night-btn');
        // Initial color based on default autoRotate = true
        const rotateBtn = createBtn(icons.rotate, () => { }, 'Rotate · Hold to go wuuuuu');
        this.rotateBtn = rotateBtn; // referenced by the rock-click reset in onClick()
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
                        this.daySpeed = 0; // Stop motion on release
                        slider.value = '0'; // Slider to very left
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

        // Sun: Hold to accelerate day time-lapse, Click to jump to Noon, stop motion, and set slider to very left (0)
        addLongPressHandler(sunBtn, (t) => {
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.10, this.daySpeed * 1.12); // Accelerate
            slider.value = this.daySpeed;
        }, () => {
            this.sunAngle = Math.PI / 2; // Noon
            this.daySpeed = 0;          // Stop motion
            slider.value = '0';         // Slider to the very left
        });

        // Moon: Hold to accelerate night time-lapse, Click to jump to Midnight, stop motion, and set slider to very left (0)
        addLongPressHandler(moonBtn, (t) => {
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.10, this.daySpeed * 1.12); // Accelerate
            slider.value = this.daySpeed;
        }, () => {
            this.sunAngle = 3 * Math.PI / 2; // Midnight
            this.daySpeed = 0;              // Stop motion
            slider.value = '0';             // Slider to the very left
        });

        // Art / Duar switch button in dock before instagram icon
        const modeBtn = createBtn(
            this.viewMode === 'portfolio' ? icons.duar : icons.art,
            async () => {
                const nextMode = this.viewMode === 'portfolio' ? 'default' : 'portfolio';
                await this.switchView(nextMode);
            },
            this.viewMode === 'portfolio' ? 'Duar' : 'Art'
        );
        this.dockModeBtn = modeBtn;
        this.updateDockModeBtn = () => {
            const isArt = this.viewMode === 'portfolio';
            modeBtn.innerHTML = isArt ? icons.duar : icons.art;
            const label = isArt ? 'Duar' : 'Art';
            modeBtn.setAttribute('aria-label', label);
            const tip = document.createElement('span');
            tip.className = 'btn-tip';
            tip.textContent = label;
            modeBtn.appendChild(tip);
        };

        // Instagram button: links to @vaveism (shown only in portfolio mode)
        const instaBtn = createBtn(icons.instagram, () => {
            window.open('https://instagram.com/vaveism', '_blank', 'noopener,noreferrer');
        }, '@vaveism');
        this.instaBtn = instaBtn;
        instaBtn.style.display = this.viewMode === 'portfolio' ? 'inline-flex' : 'none';

        wrapper.append(homeBtn, randBtn, sunBtn, sliderWrapper, moonBtn, rotateBtn, modeBtn, instaBtn);
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
        // The view switch rides with the dock — it appears and hides together.
        this.viewToggle?.classList.toggle('ui-hidden', !visible);
    }

    // Top-right switch between the default doors and the portfolio of paintings.
    createViewToggle() {
        const btn = document.createElement('button');
        btn.id = 'view-toggle';
        btn.className = 'ui-hidden';
        this.viewToggle = btn;

        const paint = () => {
            const toArt = this.viewMode === 'default';
            btn.textContent = toArt ? 'Paintings' : 'Doors';
            btn.setAttribute('aria-label', toArt ? 'Switch to paintings' : 'Switch to doors');
        };
        paint();

        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (this._switching) return;
            btn.disabled = true;
            await this.switchView(this.viewMode === 'default' ? 'portfolio' : 'default');
            paint();
            btn.disabled = false;
            this.resetUIHideTimer();
        });
        btn.addEventListener('pointerdown', e => e.stopPropagation());

        document.body.appendChild(btn);
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
        // Position-only drag along the ground plane. (Rotation is intentionally not
        // supported: doors billboard toward the camera every frame in animate(),
        // which would immediately overwrite any manual y-rotation.)
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const target = new THREE.Vector3();
        this.raycaster.ray.intersectPlane(this.dragPlane, target);
        if (target) {
            this.draggedDoor.group.position.set(target.x, target.y, target.z);
        }
    }

    onClick(event) {
        if (this.isTraveling) return;
        try {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const hits = this.raycaster.intersectObjects(this.scene.children, true);
            console.log("Click hits:", hits.length, hits.map(h => h.object.type));

            let interactedWithObject = false;

            if (hits.length > 0) {
                const isCenterObj = (obj) => {
                    if (obj === this.rock) return true;
                    let p = obj;
                    while (p) {
                        if (p === this.sculpture) return true;
                        p = p.parent;
                    }
                    return false;
                };

                // Find if we hit any center monolith/sculpture or door-related object
                const hit = hits.find(h => {
                    if (isCenterObj(h.object)) return true;
                    let obj = h.object;
                    while (obj) {
                        if (this.doors.some(d => d.group === obj)) return true;
                        obj = obj.parent;
                    }
                    return false;
                });

                if (hit) {
                    interactedWithObject = true;
                    if (isCenterObj(hit.object)) {
                        this.controls.autoRotate = false;
                        if (this.rotateBtn) this.rotateBtn.style.color = 'rgba(255,255,255,0.3)';
                        if (!this._switching) {
                            const nextMode = this.viewMode === 'default' ? 'portfolio' : 'default';
                            this.switchView(nextMode);
                            if (this.viewToggle) {
                                const toArt = nextMode === 'default';
                                this.viewToggle.textContent = toArt ? 'Paintings' : 'Doors';
                                this.viewToggle.setAttribute('aria-label', toArt ? 'Switch to paintings' : 'Switch to doors');
                            }
                        }
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
                        if (door.isPainting) {
                            if (this.activeDoor === door && !this.isTraveling) {
                                const popup = document.getElementById('painting-popup');
                                if (popup) popup.classList.toggle('open');
                            } else {
                                this.focusPainting(door);
                            }
                        } else if (door.isOpen) {
                            // Clicking inside an already-open door is an attempt to go
                            // through it, so it refuses like the Enter dot does. The cross
                            // is the only way back out. A different, closed door opens.
                            this._refuseEntry();
                        } else {
                            this.toggleDoor(door);
                        }
                    }
                }
            }

            // Tapping anywhere else dismisses open popup or toggles UI
            if (!interactedWithObject) {
                const popup = document.getElementById('painting-popup');
                if (popup && popup.classList.contains('open')) {
                    popup.classList.remove('open');
                } else {
                    this.setUIVisibility(!this.uiVisible);
                }
            }
        } catch (e) {
            console.error("Error in onClick:", e);
        }
    }

    travelThroughPortal(door) {
        if (this.isTraveling) return;
        this.isTraveling = true;

        // Hide reticle immediately
        this.activeDoor = null;
        this._hideReticle();

        const destinationUrl = door.data.destinationUrl;
        console.log("travelThroughPortal to:", destinationUrl);

        if (!destinationUrl) {
            this.isTraveling = false;
            return;
        }

        // Stop OrbitControls interaction
        this.controls.enabled = false;
        this.controls.autoRotate = false;

        // Hide UI
        if (this.uiContainer) {
            this.setUIVisibility(false);
            this.uiContainer.style.display = 'none';
        }

        // Get portal world position and direction
        const portalWorldPos = new THREE.Vector3();
        door.portalHitbox.getWorldPosition(portalWorldPos);

        const dir = new THREE.Vector3().subVectors(portalWorldPos, this.camera.position).normalize();
        const targetCamPos = portalWorldPos.clone().add(dir.multiplyScalar(3.0));

        const tl = gsap.timeline();

        // 1. Zoom camera through the portal center
        tl.to(this.camera.position, {
            x: targetCamPos.x,
            y: portalWorldPos.y,
            z: targetCamPos.z,
            duration: 1.8,
            ease: "power3.in"
        }, 0);

        // Keep looking straight forward
        tl.to(this.controls.target, {
            x: portalWorldPos.x + dir.x * 10.0,
            y: portalWorldPos.y,
            z: portalWorldPos.z + dir.z * 10.0,
            duration: 1.5,
            ease: "power2.inOut"
        }, 0);

        // 2. Extreme FOV stretch for speed effect
        tl.to(this.camera, {
            fov: 130,
            duration: 1.8,
            ease: "power3.in",
            onUpdate: () => this.camera.updateProjectionMatrix()
        }, 0);

        // 3. Keep transition dark and elegant (no bright bloom spike)
        const legend = document.getElementById('controls-legend');
        if (legend) {
            tl.to(legend, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: 'power2.out'
            }, 0);
        }

        // 4. Create fade overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #000;
            opacity: 0;
            z-index: 99999;
            pointer-events: none;
        `;
        document.body.appendChild(overlay);

        tl.to(overlay, {
            opacity: 1,
            duration: 1.0,
            ease: "power2.inOut"
        }, 0.8);

        // 5. Complete travel & redirect
        tl.call(() => {
            if (destinationUrl.startsWith('mailto:')) {
                window.location.href = destinationUrl;
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                        this.isTraveling = false;
                        this.controls.enabled = true;
                        if (this.uiContainer) {
                            this.uiContainer.style.display = 'flex';
                            this.setUIVisibility(true);
                        }
                        this.resetScene();
                    }, 500);
                }, 2000);
            } else {
                window.location.href = destinationUrl;
            }
        });
    }

    createPortalMaterial(colorHex) {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uOpacity: { value: 0.0 },
                uHover: { value: 0.0 },
                uColor: { value: new THREE.Color(colorHex || 0xffffff) }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float uTime;
                uniform float uOpacity;
                uniform float uHover;
                uniform vec3 uColor;
                varying vec2 vUv;
                
                void main() {
                    vec2 uv = vUv - 0.5;
                    uv.y *= 0.43;
                    
                    float dist = length(uv);
                    float angle = atan(uv.y, uv.x);
                    
                    // Wave and spiral patterns for organic smoke-like vortex movements
                    float wave = sin(dist * 50.0 - uTime * 4.0 + sin(uTime * 0.5 + dist * 10.0) * 0.6) * 0.5 + 0.5;
                    float spiral = sin(angle * 4.0 - dist * 25.0 + uTime * 2.0) * 0.5 + 0.5;
                    
                    float intensity = mix(wave, spiral, 0.4);
                    
                    // Vignetted rectangular frame edges
                    float edgeX = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
                    float edgeY = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
                    float rectEdge = edgeX * edgeY;
                    
                    // Dark obsidian swirling void
                    // Shifting translucent alpha patterns
                    float baseAlpha = mix(0.94, 0.65, intensity);
                    float finalAlpha = baseAlpha * rectEdge * uOpacity * (1.0 + uHover * 0.15);
                    
                    // Dark obsidian interior with a colored rim glow hugging the frame edge.
                    // rimGlow peaks in the transition band (rectEdge ~0.5) and is 0 at center/outside.
                    float rimGlow = (1.0 - rectEdge) * rectEdge * 4.0;
                    rimGlow *= (1.0 + uHover * 0.7);
                    vec3 finalColor = uColor * rimGlow * (0.55 + 0.45 * intensity);

                    finalAlpha = clamp(finalAlpha + rimGlow * 0.35 * uOpacity, 0.0, 1.0);
                    gl_FragColor = vec4(finalColor, finalAlpha);
                }
            `,
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending,
            side: THREE.DoubleSide
        });
    }

    checkHover() {
        if (!this.raycaster || !this.scene || !this.camera) return;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this.scene.children, true);
        
        let hoverActive = false;
        let hoveredDoor = null;
        
        if (hits.length > 0) {
            const isCenterObj = (obj) => {
                if (obj === this.rock) return true;
                if (this.sculpture) {
                    let p = obj;
                    while (p) {
                        if (p === this.sculpture) return true;
                        p = p.parent;
                    }
                }
                return false;
            };

            const hit = hits.find(h => {
                if (isCenterObj(h.object)) return true;
                let obj = h.object;
                while (obj) {
                    if (this.doors.some(d => d.group === obj)) return true;
                    obj = obj.parent;
                }
                return false;
            });
            
            if (hit) {
                hoverActive = true;
                if (!isCenterObj(hit.object)) {
                    let obj = hit.object;
                    while (obj) {
                        hoveredDoor = this.doors.find(d => d.group === obj);
                        if (hoveredDoor) break;
                        obj = obj.parent;
                    }
                }
            }
        }
        
        document.body.style.cursor = hoverActive ? 'pointer' : 'crosshair';
        this.hoveredDoor = hoveredDoor;

        this.doors.forEach(d => {
            if (d.portalMaterial) {
                const targetHoverVal = (d === hoveredDoor && d.isOpen) ? 1.0 : 0.0;
                gsap.to(d.portalMaterial.uniforms.uHover, {
                    value: targetHoverVal,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
    }

    toggleDoor(door) {
        if (door.isAnimating) return;
        this.dismissIntro();
        door.isAnimating = true;
        door.isOpen = !door.isOpen;
        if (door.isOpen) {
            // Show which door was entered, above the reticle.
            const titleEl = document.querySelector('#reticle .reticle-title');
            if (titleEl) titleEl.textContent = door.name || '';
            // "Portal ignites" — brief bloom bump that eases back to the resting strength.
            gsap.fromTo(this.bloomPass, { strength: 2.0 }, { strength: 1.2, duration: 1.6, ease: 'power2.out', overwrite: true });

            const targetPoint = new THREE.Vector3();
            door.group.getWorldPosition(targetPoint);
            targetPoint.y = 1.78; // Dead center of door frame aperture

            // Dolly straight in along the door -> current-camera line.
            const direction = new THREE.Vector3().subVectors(this.camera.position, targetPoint).setY(0).normalize();
            if (direction.lengthSq() < 1e-4) direction.set(0, 0, 1);

            // Netflix-intro-logo framing: distance D so the frame fills the viewport width.
            const fovRad = (this.camera.fov / 2) * (Math.PI / 180);
            const aspect = window.innerWidth / window.innerHeight;
            const netflixDist = 0.8 / (aspect * Math.tan(fovRad));
            const dist = Math.max(0.3, Math.min(6.0, netflixDist)); // clamp: 0.3m (tall viewport) .. 6.0m (ultrawide)

            const targetCamPos = targetPoint.clone().add(direction.multiplyScalar(dist));
            targetCamPos.y = 1.78; // Align camera height with the portal center

            // Arm travel now; the reticle is revealed on arrival (see onArrive below).
            this.activeDoor = door;

            // Genuine fly-to: interpolate the camera THROUGH space to the door, then
            // hand off to a gentle orbit around the now-open portal and show the reticle.
            this.flyTo(targetCamPos, targetPoint, 1.9, () => {
                this.controls.target.copy(targetPoint);
                this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = -0.25;
                if (this.activeDoor === door) this._showReticle();
            });

            if (this.ringMat) {
                gsap.to(this.ringMat, { opacity: 0, duration: 1.5, ease: "power2.inOut" });
            }

            if (door.portalMaterial) {
                gsap.to(door.portalMaterial.uniforms.uOpacity, {
                    value: 0.75, duration: 1.5, delay: 0.5, ease: "power2.out"
                });
            }
        } else {
            // Clear active door and hide reticle
            this.activeDoor = null;
            this._hideReticle();
            this.setUIVisibility(true); // bring the dock back now that the door is closing

            // Pull back in parallel with continued rotation
            const doorPos = new THREE.Vector3();
            door.group.getWorldPosition(doorPos);
            doorPos.y = 1.78;

            const pullDir = new THREE.Vector3().subVectors(this.camera.position, doorPos).setY(0).normalize();
            if (pullDir.lengthSq() < 1e-4) pullDir.set(0, 0, 1);
            const pullCamPos = doorPos.clone().addScaledVector(pullDir, 8.0);
            pullCamPos.y = 2.8;

            gsap.to(this.camera.position, { x: pullCamPos.x, y: pullCamPos.y, z: pullCamPos.z, duration: 1.8, ease: "power3.inOut" });
            gsap.to(this.controls.target, { x: doorPos.x, y: 1.78, z: doorPos.z, duration: 1.8, ease: "power3.inOut" });

            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = -0.6; // Clockwise

            gsap.to(this.camera, {
                fov: 50, duration: 1.8, ease: "power3.inOut",
                onUpdate: () => this.camera.updateProjectionMatrix()
            });

            if (this.ringMat) {
                gsap.to(this.ringMat, { opacity: 0.9, duration: 2.0, delay: 0.5, ease: "power2.inOut" });
            }

            if (door.portalMaterial) {
                gsap.to(door.portalMaterial.uniforms.uOpacity, {
                    value: 0.0, duration: 1.0, ease: "power2.inOut"
                });
            }
        }
        gsap.to(door.hinge.rotation, {
            y: door.isOpen ? -Math.PI / 2 : 0,
            duration: 2.0, delay: door.isOpen ? 0.5 : 0, ease: "power2.inOut",
            onComplete: () => { door.isAnimating = false; }
        });
    }

    // Smoothly fly the camera THROUGH space to `camPos` while aiming at `lookAt`.
    flyTo(camPos, lookAt, duration = 1.9, onArrive = null) {
        this.controls.autoRotate = false;
        this.controls.enableDamping = false;
        gsap.killTweensOf(this.camera.position);
        gsap.killTweensOf(this.controls.target);
        gsap.to(this.camera.position, {
            x: camPos.x, y: camPos.y, z: camPos.z,
            duration, ease: "power3.inOut", overwrite: true
        });
        gsap.to(this.controls.target, {
            x: lookAt.x, y: lookAt.y, z: lookAt.z,
            duration, ease: "power3.inOut", overwrite: true,
            onComplete: () => {
                this.controls.target.copy(lookAt);
                this.controls.enableDamping = true;
                if (onArrive) onArrive();
            }
        });
    }

    getDefaultOverview() {
        const target = new THREE.Vector3(0, 1.6, 0); // Center of motion is the central sculpture
        let camPos = new THREE.Vector3(0, 3.0, 28.5);

        if (this.viewMode === 'portfolio' && this.doors.length > 0) {
            // Target Flowers Unnamed (_DSC0284) as the default overview painting
            const targetPainting = this.doors.find(d => d.data?.id === '_DSC0284') || this.doors.find(d => d.isPainting);
            if (targetPainting) {
                const worldPos = new THREE.Vector3();
                targetPainting.group.getWorldPosition(worldPos);
                const angle = Math.atan2(worldPos.x, worldPos.z);
                // Position camera further zoomed out outside of circle 1 (r ~ 28.5m, y = 3.0m)
                const r = Math.max(28.0, (targetPainting.radius || 15.0) + 13.0);
                camPos = new THREE.Vector3(
                    Math.sin(angle) * r,
                    3.0,
                    Math.cos(angle) * r
                );
            }
        }
        return { camPos, target };
    }

    resetScene(toHome = false) {
        const lastActivePainting = (!toHome && this.viewMode === 'portfolio' && this.activeDoor?.isPainting) ? this.activeDoor : null;

        this.closeAllDoors();

        // Hide reticle & focus popup
        this.activeDoor = null;
        this.daySpeed = 0.025;    // back to ambient day/night speed
        this._hideReticle();
        this.setUIVisibility(true); // bring the dock back (door closing / returning to orbit)

        let target = new THREE.Vector3(0, 1.6, 0); // Center of motion is always the central sculpture
        let camPos;

        if (lastActivePainting) {
            // Step back into orbit at the active painting's circle, looking through it to the sculpture
            const worldPos = new THREE.Vector3();
            lastActivePainting.group.getWorldPosition(worldPos);
            const angle = Math.atan2(worldPos.x, worldPos.z);
            const doorRadius = lastActivePainting.radius || 15.0;
            const r = Math.max(28.0, doorRadius + 13.0);
            const y = 2.8 + Math.min(doorRadius * 0.04, 3.2);
            camPos = new THREE.Vector3(
                Math.sin(angle) * r,
                y,
                Math.cos(angle) * r
            );
        } else {
            const overview = this.getDefaultOverview();
            camPos = overview.camPos;
            target = overview.target;
        }

        this.flyTo(camPos, target, 1.8, () => {
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = -0.6;
        });

        // Fade rings back in slowly
        if (this.ringMat) {
            gsap.to(this.ringMat, { opacity: 0.9, duration: 4.0, ease: "power2.inOut" });
        }

        // Reset FOV
        gsap.to(this.camera, {
            fov: 50, // Default FOV from CONFIG
            duration: 1.8,
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
        const ambient = new THREE.AmbientLight(0xfff5ea, 0.05);
        this.scene.add(ambient);
        this.hemiLight = new THREE.HemisphereLight(0xfff3d8, 0x221c16, 0.28);
        this.scene.add(this.hemiLight);

        const shadowRes = this.isMobile ? 512 : 1536;

        this.sunDist = 1600;
        this.sunLight = new THREE.DirectionalLight(0xfff2c8, 2.5); // Warmer, slightly yellower and brighter daylight
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = shadowRes;
        this.sunLight.shadow.mapSize.height = shadowRes;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 1000;
        const d = 50;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.bias = -0.0001;
        this.sunLight.shadow.normalBias = 0.025;
        this.sunLight.shadow.radius = 2.4; // Slightly crisper shadow penumbra for deeper core
        this.scene.add(this.sunLight);

        const sunTex = this.generateSunTexture();
        this.sunMesh = new THREE.Mesh(new THREE.SphereGeometry(44, 32, 32), new THREE.MeshStandardMaterial({
            map: sunTex,
            emissiveMap: sunTex,
            emissive: 0xffe477,
            emissiveIntensity: 2.2,
            roughness: 0.85,
            fog: false
        }));
        this.scene.add(this.sunMesh);

        this.moonLight = new THREE.DirectionalLight(0xc8d8e8, 1.4);
        this.moonLight.castShadow = true;
        this.moonLight.shadow.mapSize.width = shadowRes;
        this.moonLight.shadow.mapSize.height = shadowRes;
        this.moonLight.shadow.camera.near = 0.5;
        this.moonLight.shadow.camera.far = 1000;
        this.moonLight.shadow.camera.left = -50;
        this.moonLight.shadow.camera.right = 50;
        this.moonLight.shadow.camera.top = 50;
        this.moonLight.shadow.camera.bottom = -50;
        this.moonLight.shadow.bias = -0.0001;
        this.moonLight.shadow.normalBias = 0.025;
        this.moonLight.shadow.radius = 2.4;
        this.scene.add(this.moonLight);

        const moonTex = this.generateMoonTexture();
        this.moonMesh = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 32), new THREE.MeshStandardMaterial({
            map: moonTex,
            emissiveMap: moonTex,
            emissive: 0xe0e8f2,
            emissiveIntensity: 1.1,
            roughness: 0.92,
            metalness: 0,
            fog: false
        }));
        this.scene.add(this.moonMesh);
    }

    generateSunTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024; canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Warm golden-yellow solar gradient
        const grad = ctx.createLinearGradient(0, 0, 0, 512);
        grad.addColorStop(0, '#fffbeb');
        grad.addColorStop(0.4, '#ffe67c');
        grad.addColorStop(1, '#ffb833');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1024, 512);

        // Organic atmospheric turbulence
        for (let i = 0; i < 300; i++) {
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.15})`;
            ctx.beginPath();
            ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 25, 0, Math.PI * 2);
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }

    generateMoonTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024; canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Natural lunar surface gradient
        ctx.fillStyle = '#b8c4d2';
        ctx.fillRect(0, 0, 1024, 512);

        // Maria and craters
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const r = Math.random() * 30 + 3;
            ctx.fillStyle = Math.random() > 0.4 ? '#8a97a8' : '#d2dce6';
            ctx.globalAlpha = Math.random() * 0.4;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }

    setupEnvironment() {
        const color = new THREE.Color(0x273444);
        this.scene.fog = new THREE.FogExp2(color, 0.002);
        this.renderer.setClearColor(color);

        // Circular Ground Plane (matte natural earth/stone plane with zero square clipping edges)
        const groundGeo = new THREE.CircleGeometry(1200, 64);
        this.groundMat = new THREE.MeshStandardMaterial({
            color: 0x68645e,
            roughness: 1.0,
            metalness: 0.0,
            envMapIntensity: 0.0,
            polygonOffset: true,
            polygonOffsetFactor: 1, // Push back
            polygonOffsetUnits: 1
        });
        const ground = new THREE.Mesh(groundGeo, this.groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        this.createSacredGeometry();
        this.createCentralRock();
        this.skySystem = createTorontoSkySystem(1800, this.isMobile);
        this.scene.add(this.skySystem.skyRoot);
    }

    // Map ASCII digits 0–9 to Gurmukhi numerals ੦–੯ (other characters pass through).
    _toGurmukhi(str) {
        const d = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];
        return String(str).replace(/[0-9]/g, c => d[+c]);
    }

    // Temporary door name: "duar-" + a random 1–9 rendered as a Gurmukhi numeral.
    _randomDoorName() {
        return 'duar-' + this._toGurmukhi(1 + Math.floor(Math.random() * 9)); // 1–9
    }

    // Top-right live clock in Gurmukhi numerals (HH : MM : SS : mmm), auto-detected local timezone.
    _startClock() {
        const clockEl = document.getElementById('clock');
        const timeEl = document.getElementById('clock-time');
        const tzEl = document.getElementById('clock-tz');
        if (tzEl) {
            try { tzEl.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* noop */ }
        }
        // Timezone label is hidden by default; hover (desktop) or tap (touch) reveals it
        // for 5 seconds, then it hides again.
        if (clockEl && timeEl) {
            const revealTz = () => {
                clockEl.classList.add('tz-visible');
                clearTimeout(this._tzHideTimeout);
                this._tzHideTimeout = setTimeout(() => clockEl.classList.remove('tz-visible'), 5000);
            };
            timeEl.addEventListener('mouseenter', revealTz);
            timeEl.addEventListener('touchstart', (e) => { e.stopPropagation(); revealTz(); }, { passive: true });
            timeEl.addEventListener('click', (e) => e.stopPropagation());
        }
        if (!timeEl) return;
        const p2 = n => String(n).padStart(2, '0');
        const p3 = n => String(n).padStart(3, '0');
        const tick = () => {
            const d = new Date();
            const s = `${p2(d.getHours())} : ${p2(d.getMinutes())} : ${p2(d.getSeconds())} : ${p3(d.getMilliseconds())}`;
            timeEl.textContent = this._toGurmukhi(s);
        };
        tick();
        this._clockInterval = setInterval(tick, 40); // decoupled from the rAF ticker so ms stays smooth
    }

    // ── World building ──────────────────────────────────────────────────────
    // Two worlds share one scene: the default doors and the portfolio of
    // paintings. Only the door set is swapped — cone, rings, sky, clock and the
    // day/night cycle carry straight through, so the world reconfigures rather
    // than reloads.

    // Tear down the current door set completely. Without disposing here, toggling
    // views repeatedly would leak a full set of geometries and textures each time.
    clearDoors() {
        this.activeDoor = null;
        this.hoveredDoor = null;
        this._hideReticle();

        this.doors.forEach(door => {
            door.labelEl?.remove();
            door._texture?.dispose();

            door.group.traverse(obj => {
                if (!obj.isMesh) return;
                // Identity, not name: only the two module-level shared assets survive.
                // Matching on name === 'Frame' also spared the per-door lintel and base
                // geometries, which leaked ~119 geometries per view switch.
                if (obj.geometry && obj.geometry !== unitBox && obj.geometry !== unitPlane) obj.geometry.dispose();
                if (obj.material && obj.material !== frameMaterial) {
                    if (obj.material.map && obj.material.map !== door._texture) obj.material.map.dispose();
                    obj.material.dispose();
                }
            });

            this.scene.remove(door.group);
        });

        this.doors = [];
    }

    // Fade the current doors out, build the new world, fade it in. Staggered
    // outward from the centre so it reads as the world responding, not a refresh.
    async switchView(mode) {
        if (this._switching || mode === this.viewMode) return;
        this._switching = true;
        this.viewMode = mode;

        if (this.instaBtn) {
            this.instaBtn.style.display = mode === 'portfolio' ? 'inline-flex' : 'none';
        }
        if (this.updateDockModeBtn) {
            this.updateDockModeBtn();
        }
        if (this.viewToggle) {
            this.viewToggle.textContent = mode === 'default' ? 'Paintings' : 'Doors';
            this.viewToggle.setAttribute('aria-label', mode === 'default' ? 'Switch to paintings' : 'Switch to doors');
        }

        // Paintings are unlit and untone-mapped, so their pixels reach the bloom pass
        // at full value — against the default 0.2 threshold the entire artwork blooms
        // and blows out to white. Lift the threshold above paint so only genuinely
        // emissive things (sun, moon, the cone's highlight) still glow.
        if (mode === 'portfolio') {
            this.updateRingGeometries(true);
            this.doors.forEach((d) => {
                if (d.isPainting) loadPaintingTexture(d);
            });
            gsap.to(this.bloomPass, { threshold: 0.92, strength: 0.20, duration: 0.6 });
            if (this.rock) {
                gsap.to(this.rock.scale, {
                    x: 0.001, y: 0.001, z: 0.001, duration: 0.4, ease: 'power2.in',
                    onComplete: () => { this.rock.visible = false; }
                });
            }
            if (this.sculpture) {
                this.sculpture.visible = true;
                this.sculpture.scale.setScalar(0.001);
                gsap.to(this.sculpture.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.3)', delay: 0.2 });
            }
        } else {
            this.updateRingGeometries(false);
            gsap.to(this.bloomPass, {
                threshold: this._bloomDefaults.threshold,
                strength: this._bloomDefaults.strength,
                duration: 0.6
            });
            if (this.sculpture) {
                gsap.to(this.sculpture.scale, {
                    x: 0.001, y: 0.001, z: 0.001, duration: 0.4, ease: 'power2.in',
                    onComplete: () => { this.sculpture.visible = false; }
                });
            }
            if (this.rock) {
                this.rock.visible = true;
                this.rock.scale.setScalar(0.001);
                gsap.to(this.rock.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.3)', delay: 0.2 });
            }
        }

        this.resetScene();

        const outgoing = [...this.doors];
        await new Promise(resolve => {
            if (!outgoing.length) return resolve();
            const tl = gsap.timeline({ onComplete: resolve });
            outgoing
                .slice()
                .sort((a, b) => a.group.position.lengthSq() - b.group.position.lengthSq())
                .forEach((door, i) => {
                    tl.to(door.group.scale, {
                        x: 0.001, y: 0.001, z: 0.001,
                        duration: 0.5, ease: 'power2.in'
                    }, i * 0.02);
                });
        });

        this.clearDoors();

        if (mode === 'portfolio') await this.buildPortfolioDoors();
        else this.setupDoors();

        // Grow the new set in from nothing, nearest first.
        this.doors
            .slice()
            .sort((a, b) => a.group.position.lengthSq() - b.group.position.lengthSq())
            .forEach((door, i) => {
                door.group.scale.setScalar(0.001);
                gsap.to(door.group.scale, {
                    x: 1, y: 1, z: 1,
                    duration: 0.7, ease: 'back.out(1.4)', delay: i * 0.035
                });
            });

        this._switching = false;
    }

    // The gallery: every painting in its own frame, width set by its aspect ratio.
    async buildPortfolioDoors() {
        const manifest = await loadManifest();
        if (!manifest.paintings.length) {
            console.warn('No paintings in manifest — portfolio view is empty.');
            return;
        }

        // Time runs outward: newest work on the inner ring, older further out.
        const placed = layoutPaintings(byYearNewestFirst(manifest.paintings));

        placed.forEach(({ painting, ring, radius, x, z, width }) => {
            const group = new THREE.Group();
            group.position.set(x, 0, z);
            this.scene.add(group);

            const { panel, panelMaterial, height, centreY } = createPaintingDoor(group, painting);

            const doorObj = {
                group,
                data: painting,
                panel,
                panelMaterial,
                width,
                height,
                centreY,
                ring,
                radius,
                isOpen: false,
                isPainting: true,
                // The painting IS the clickable surface — no separate hitbox.
                portalHitbox: panel
            };

            // Titles are loaded from manifest for hover label
            doorObj.name = painting.title || '';
            if (doorObj.name) {
                const labelEl = document.createElement('div');
                labelEl.className = 'door-label';
                labelEl.textContent = doorObj.name;
                document.body.appendChild(labelEl);
                doorObj.labelEl = labelEl;
            }
            this.doors.push(doorObj);
        });

        // Eagerly load all painting textures so none appear black
        this.doors.forEach((door) => loadPaintingTexture(door));

        // Start initial view framing the first painting in zoomed-out focus
        if (!this.activeDoor && this.viewMode === 'portfolio') {
            const overview = this.getDefaultOverview();
            this.camera.position.copy(overview.camPos);
            this.controls.target.copy(overview.target);
            this.camera.lookAt(overview.target);
        }
    }

    // Fly to a painting and centre it, framed so the whole work is on screen.
    // Nothing opens — there is no portal behind a painting.
    focusPainting(door) {
        if (this.isTraveling || this._switching) return;
        this.dismissIntro();
        loadPaintingTexture(door); // Ensure high-res texture is loaded immediately upon selection

        // Exact world-space dead center of the painting panel
        const target = new THREE.Vector3();
        door.panel.getWorldPosition(target);

        // Approach along the painting's own facing, so it's square-on.
        const dir = new THREE.Vector3().subVectors(this.camera.position, target).setY(0).normalize();
        if (dir.lengthSq() < 1e-4) dir.set(0, 0, 1);
        const distance = focusDistanceFor(door.width, door.height, this.camera);
        const camPos = target.clone().addScaledVector(dir, distance);
        camPos.y = target.y; // Match eye level to artwork dead center

        this.activeDoor = door;
        this.flyTo(camPos, target, 1.6, () => {
            this.controls.target.copy(target);
            this.controls.autoRotate = false;   // hold still while looking
            if (this.activeDoor === door) this._showReticle();
        });
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
                doorObj.portalMaterial = group.userData.portalMaterial; // Vortex shader material

                // Floating name label (shown on hover / when open — see updateLabels()).
                const labelEl = document.createElement('div');
                labelEl.className = 'door-label';
                doorObj.name = this._randomDoorName();
                labelEl.textContent = doorObj.name;
                document.body.appendChild(labelEl);
                doorObj.labelEl = labelEl;

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

        // Visible portal surface: the vortex shader, tinted per-door. Sits at the opening,
        // hidden behind the closed panel and revealed (uOpacity tweens up) when the door opens.
        const portalSurfaceMat = this.createPortalMaterial(data.color);
        const portalSurface = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 3.5), portalSurfaceMat);
        portalSurface.position.set(0, 1.75, 0);
        portalSurface.name = "PortalSurface";
        portalSurface.renderOrder = 2;
        group.add(portalSurface);
        group.userData.portalMaterial = portalSurfaceMat;
    }

    // Generates a smooth wavy ring ribbon with exact count of sinusoidal bends around the circumference
    createWavyRingGeometry(baseRadius, waveCount = 60, amplitude = 0.35, width = 0.25, segments = 720) {
        const geom = new THREE.BufferGeometry();
        const positions = [];
        const uvs = [];
        const indices = [];

        const halfW = width / 2;
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            const wave = Math.sin(theta * waveCount) * amplitude;
            const rMid = baseRadius + wave;
            const rIn = rMid - halfW;
            const rOut = rMid + halfW;

            const cos = Math.cos(theta);
            const sin = Math.sin(theta);

            // In local XY plane (oriented in world XZ by mesh.rotation.x = -Math.PI / 2)
            positions.push(cos * rIn, sin * rIn, 0);
            uvs.push(i / segments, 0);

            positions.push(cos * rOut, sin * rOut, 0);
            uvs.push(i / segments, 1);
        }

        for (let i = 0; i < segments; i++) {
            const in0 = i * 2;
            const out0 = i * 2 + 1;
            const in1 = (i + 1) * 2;
            const out1 = (i + 1) * 2 + 1;

            indices.push(in0, in1, out0);
            indices.push(out0, in1, out1);
        }

        geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        geom.setIndex(indices);
        geom.computeVertexNormals();
        return geom;
    }

    // Rewrites a ring's existing vertex buffer in place for a given wave blend.
    // waveT 0 = straight circle (door mode), 1 = full sinusoidal ribbon (paintings mode).
    // Every vertex stays in the local XY plane, so the flat normals computed at build time
    // remain correct and never need recomputing.
    writeRingWave(entry, waveT) {
        const attr = entry.mesh.geometry.getAttribute('position');
        const arr = attr.array;
        const segments = entry.segments;
        const amplitude = RING_WAVE_AMPLITUDE * waveT;
        const halfW = (RING_WIDTH_FLAT + (RING_WIDTH_WAVY - RING_WIDTH_FLAT) * waveT) / 2;

        let p = 0;
        for (let i = 0; i <= segments; i++) {
            const theta = (i / segments) * Math.PI * 2;
            const rMid = entry.radius + Math.sin(theta * RING_WAVE_COUNT) * amplitude;
            const cos = Math.cos(theta);
            const sin = Math.sin(theta);
            const rIn = rMid - halfW;
            const rOut = rMid + halfW;

            arr[p++] = cos * rIn; arr[p++] = sin * rIn; arr[p++] = 0;
            arr[p++] = cos * rOut; arr[p++] = sin * rOut; arr[p++] = 0;
        }
        attr.needsUpdate = true;
    }

    updateRingGeometries(isPortfolio) {
        if (!this.rings) return;
        const target = isPortfolio ? 1 : 0;

        // Interrupting a half-finished switch must retarget from wherever each ring currently is,
        // so kill the old tweens rather than letting two of them fight over the same buffer.
        if (this._ringWaveTweens) this._ringWaveTweens.forEach(t => t.kill());

        this._ringWaveTweens = this.rings.map((entry, i) => gsap.to(entry, {
            waveT: target,
            duration: 1.1,
            // Staggered by ring index so the change ripples outward from the centre rather than
            // every ring snapping together.
            delay: i * 0.055,
            ease: 'power2.inOut',
            onUpdate: () => this.writeRingWave(entry, entry.waveT)
        }));
    }

    createSacredGeometry() {
        this.ringMat = new THREE.MeshStandardMaterial({
            color: 0xffd043,
            metalness: 0.88,
            roughness: 0.18,
            side: THREE.DoubleSide,
            depthWrite: true,
            depthTest: true,
            polygonOffset: true,
            polygonOffsetFactor: -1,
            polygonOffsetUnits: -1
        });
        this.rings = []; const baseR = 15; const stepR = 8;
        const isPortfolio = this.viewMode === 'portfolio';
        for (let i = 0; i < 12; i++) {
            const r = baseR + (i * stepR);
            // Both modes share one ribbon buffer so switching can morph the vertices rather than
            // swap geometries; a straight ring is just this same ribbon at zero wave amplitude.
            const waveT = isPortfolio ? 1 : 0;
            const geo = this.createWavyRingGeometry(
                r, RING_WAVE_COUNT, RING_WAVE_AMPLITUDE * waveT,
                RING_WIDTH_FLAT + (RING_WIDTH_WAVY - RING_WIDTH_FLAT) * waveT, RING_SEGMENTS
            );
            const mesh = new THREE.Mesh(geo, this.ringMat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.position.y = 0.002; // Flush on ground
            mesh.receiveShadow = true;
            mesh.renderOrder = 0;
            const speed = (i % 2 === 0 ? 1 : -1) * (0.00006 + (i * 0.00002));
            this.scene.add(mesh);
            this.rings.push({ mesh, speed, radius: r, segments: RING_SEGMENTS, waveT });
        }
    }

    createCentralRock() {
        const geo = new THREE.CylinderGeometry(0.0001, 1.5, 3.0, 128, 1, false);
        geo.translate(0, 1.5, 0);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.95,
            roughness: 0.10,
            envMapIntensity: 1.0
        });
        this.rock = new THREE.Mesh(geo, mat);
        this.rock.castShadow = true;
        this.rock.receiveShadow = true;
        this.rock.position.y = 0;
        this.rock.visible = false;

        // Ground contact shadow under cone base
        const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
        const shadowCanvas = document.createElement('canvas');
        shadowCanvas.width = 128; shadowCanvas.height = 128;
        const ctx = shadowCanvas.getContext('2d');
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0.94)');
        grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.70)');
        grad.addColorStop(0.70, 'rgba(0, 0, 0, 0.25)');
        grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);
        const shadowMat = new THREE.MeshBasicMaterial({
            map: new THREE.CanvasTexture(shadowCanvas),
            transparent: true,
            opacity: 0.92,
            depthWrite: false,
            polygonOffset: true,
            polygonOffsetFactor: -2,
            polygonOffsetUnits: -2
        });
        const rockShadow = new THREE.Mesh(shadowGeo, shadowMat);
        rockShadow.rotation.x = -Math.PI / 2;
        rockShadow.position.y = 0.003;
        rockShadow.renderOrder = 1;
        this.rock.add(rockShadow);

        this.scene.add(this.rock);

        // Center ceramic sculpture for paintings / portfolio mode
        this.sculpture = createCeramicSculpture(this.loadingManager);
        this.sculpture.visible = false;
        this.scene.add(this.sculpture);
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

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this.checkHover();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.time += 0.001;

        // Real, frame-rate-independent delta time (clamped so a backgrounded tab can't jump the sky).
        const nowMs = performance.now();
        const dt = Math.min((nowMs - (this._lastFrame || nowMs)) / 1000, 0.1);
        this._lastFrame = nowMs;
        this.elapsed += dt;

        if (this.sunMesh && this.moonMesh && this.skySystem) {
            // Ambient drift: fast responsive speed scaling for day/night cycle
            this.sunAngle += this.daySpeed * 6.0 * dt;

            // Calculate astronomically accurate Toronto solar & lunar coordinates for August
            const sky = this.skySystem.update(this.sunAngle, this.elapsed, this.sunDist);

            this.sunMesh.position.copy(sky.cel.sunPos);
            this.moonMesh.position.copy(sky.cel.moonPos);

            // Light position placed at ~350m along exact same direction vector for high shadow precision
            const sunDir = sky.cel.sunPos.clone().normalize();
            const moonDir = sky.cel.moonPos.clone().normalize();
            this.sunLight.position.copy(sunDir.multiplyScalar(350));
            this.moonLight.position.copy(moonDir.multiplyScalar(350));

            this.moonMesh.lookAt(0, 0, 0);

            // True solar / lunar altitude checks
            const isSunActive = sky.sunAlt > -0.05;
            const isMoonActive = sky.cel.moonAlt > -0.05;

            // Direct directional light intensity matching atmospheric absorption
            this.sunLight.intensity = isSunActive ? (sky.sH * 1.55) : 0;
            this.moonLight.intensity = (!isSunActive && isMoonActive) ? (sky.mH * 1.15) : 0;
            this.sunLight.castShadow = isSunActive;
            this.moonLight.castShadow = !isSunActive && isMoonActive;

            const angleMod = ((this.sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
            const transitionZone = Math.PI / 3;

            if (angleMod >= 0 && angleMod <= Math.PI) {
                const riseEnd = transitionZone;
                const sunsetStart = Math.PI - transitionZone;
                if (angleMod < riseEnd) {
                    const t = 1.0 - (angleMod / riseEnd);
                    const sunCol = new THREE.Color(0xfffde8).lerp(new THREE.Color(0xf8b066), t);
                    this.sunMesh.material.color.copy(sunCol);
                    this.sunLight.color.lerpColors(new THREE.Color(0xfff2c8), new THREE.Color(0xf4a75e), t);
                } else if (angleMod > sunsetStart) {
                    const t = (angleMod - sunsetStart) / transitionZone;
                    const sunCol = new THREE.Color(0xfffde8).lerp(new THREE.Color(0xf8b066), t);
                    this.sunMesh.material.color.copy(sunCol);
                    this.sunLight.color.lerpColors(new THREE.Color(0xfff2c8), new THREE.Color(0xf4a75e), t);
                } else {
                    this.sunMesh.material.color.set(0xfffde8);
                    this.sunLight.color.set(0xfff2c8);
                }
            }

            if (angleMod > Math.PI && angleMod < Math.PI * 2) {
                const riseEnd = Math.PI + transitionZone;
                const moonSetStart = (Math.PI * 2) - transitionZone;
                if (angleMod < riseEnd) {
                    const t = 1.0 - ((angleMod - Math.PI) / transitionZone);
                    const moonCol = new THREE.Color(0xe6edf5).lerp(new THREE.Color(0xc2d2e2), t);
                    this.moonMesh.material.color.copy(moonCol);
                    this.moonMesh.material.emissive.copy(moonCol);
                    this.moonLight.color.lerpColors(new THREE.Color(0xc8d8e8), new THREE.Color(0xb0c5da), t);
                } else if (angleMod > moonSetStart) {
                    const t = (angleMod - moonSetStart) / transitionZone;
                    const moonCol = new THREE.Color(0xe6edf5).lerp(new THREE.Color(0xc2d2e2), t);
                    this.moonMesh.material.color.copy(moonCol);
                    this.moonMesh.material.emissive.copy(moonCol);
                    this.moonLight.color.lerpColors(new THREE.Color(0xc8d8e8), new THREE.Color(0xb0c5da), t);
                } else {
                    this.moonMesh.material.color.set(0xe6edf5);
                    this.moonMesh.material.emissive.set(0xe0e8f2);
                    this.moonLight.color.set(0xc8d8e8);
                }
            }

            // Atmospheric sky progression & horizon color grading
            const dayZenith = new THREE.Color(0x1a4674); // Radiant deep daylight blue
            const dayHorizon = new THREE.Color(0x4c78a6); // Atmospheric horizon blue

            const sunsetZenith = new THREE.Color(0x1c182c);
            const sunsetHorizon = new THREE.Color(0xb85220);

            const nightZenith = new THREE.Color(0x000000);
            const nightHorizon = new THREE.Color(0x000000);

            let skyCol = new THREE.Color();
            let horizCol = new THREE.Color();

            if (sky.sunAlt > 0.10) {
                skyCol.copy(dayZenith);
                horizCol.copy(dayHorizon);
            } else if (sky.sunAlt > -0.04) {
                const t = (0.10 - sky.sunAlt) / 0.14;
                skyCol.lerpColors(dayZenith, sunsetZenith, t);
                horizCol.lerpColors(dayHorizon, sunsetHorizon, t);
            } else {
                const t = Math.min(1.0, (-0.04 - sky.sunAlt) / 0.16);
                skyCol.lerpColors(sunsetZenith, nightZenith, t);
                horizCol.lerpColors(sunsetHorizon, nightHorizon, t);
            }

            if (this.skySystem && this.skySystem.skyDomeMat) {
                this.skySystem.skyDomeMat.uniforms.uZenithColor.value.copy(skyCol);
                this.skySystem.skyDomeMat.uniforms.uHorizonColor.value.copy(horizCol);
            }

            this.scene.background = null;
            if (this.scene.fog) this.scene.fog.color.copy(horizCol);

            // Ambient sky & earth bounce light: maintains ground and sculpture visibility while keeping shadows deep
            this.hemiLight.intensity = 0.07 + (sky.sH * 0.15) + (sky.mH * 0.12);
            this.hemiLight.color.lerpColors(new THREE.Color(0x35455d), new THREE.Color(0xfcf2d4), sky.sH);
            this.hemiLight.groundColor.lerpColors(new THREE.Color(0x10151f), new THREE.Color(0x241f18), sky.sH);

            // Real-time floor color transition: Peak daytime -> Off-white; Midnight -> Royal navy blue
            if (this.groundMat) {
                const _offWhite = new THREE.Color(0x68645e);     // Peak Daytime: Soft matte off-white (clear, non-blinding)
                const _twilightBlue = new THREE.Color(0x202834); // Sunset: Twilight Slate Blue
                const _royalNavy = new THREE.Color(0x0a1424);    // Midnight: Royal Navy Blue
                const _dawnSlate = new THREE.Color(0x323034);    // Sunrise: Dawn Slate
                const Q = Math.PI / 2;

                if (angleMod >= 0 && angleMod < Q) {
                    // Sunrise -> Noon (Dawn Slate -> Off-White)
                    const t = angleMod / Q;
                    this.groundMat.color.lerpColors(_dawnSlate, _offWhite, t);
                } else if (angleMod >= Q && angleMod < Math.PI) {
                    // Noon -> Sunset (Off-White -> Twilight Slate Blue)
                    const t = (angleMod - Q) / Q;
                    this.groundMat.color.lerpColors(_offWhite, _twilightBlue, t);
                } else if (angleMod >= Math.PI && angleMod < Math.PI * 1.5) {
                    // Sunset -> Midnight (Twilight Slate Blue -> Royal Navy Blue)
                    const t = (angleMod - Math.PI) / Q;
                    this.groundMat.color.lerpColors(_twilightBlue, _royalNavy, t);
                } else {
                    // Midnight -> Sunrise (Royal Navy Blue -> Dawn Slate)
                    const t = (angleMod - Math.PI * 1.5) / Q;
                    this.groundMat.color.lerpColors(_royalNavy, _dawnSlate, t);
                }
            }
        }
        if (this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        if (this.rock && this.rock.visible) {
            this.rock.position.y = 0;
            this.rock.rotation.set(0, 0, 0); // Locked to ground
        }
        if (this.sculpture && this.sculpture.visible) {
            this.sculpture.position.y = 0;
            this.sculpture.rotation.set(0, 0, 0); // Locked into ground

            // Dynamic red thread jiggle physics linked to camera orbit and motion
            if (this.sculpture.userData && this.sculpture.userData.threadUniforms) {
                const u = this.sculpture.userData.threadUniforms;
                u.uTime.value = this.time;

                const curCamAngle = Math.atan2(this.camera.position.x, this.camera.position.z);
                if (this._lastCamAngle === undefined) this._lastCamAngle = curCamAngle;
                let dAngle = curCamAngle - this._lastCamAngle;
                while (dAngle > Math.PI) dAngle -= Math.PI * 2;
                while (dAngle < -Math.PI) dAngle += Math.PI * 2;
                this._lastCamAngle = curCamAngle;

                const angularSpeed = Math.abs(dAngle) / Math.max(0.001, dt);
                if (this._threadMotion === undefined) this._threadMotion = 0;
                const targetMotion = Math.min(3.5, angularSpeed * 1.5);
                this._threadMotion = THREE.MathUtils.lerp(this._threadMotion, targetMotion, 0.14);

                const tanX = -Math.cos(curCamAngle);
                const tanZ = Math.sin(curCamAngle);
                u.uMotion.value = this._threadMotion;
                u.uDir.value.set(tanX, tanZ);
            }
        }

        // Real-time 4-stage frame and ground circles material phasing (Gold -> Silver -> Metallic Black -> Bronze)
        updatePaintingFramesMaterial(this.sunAngle, this.ringMat);

        // Update Door Name Labels (smooth projection to 2D screen space)
        this.updateLabels();

        // Progressive proximity texture streaming (prevents VRAM spikes and thermal throttling)
        if (this.viewMode === 'portfolio' && (!this._lastTexCheck || nowMs - this._lastTexCheck > 250)) {
            this._lastTexCheck = nowMs;
            const camPos = this.camera.position;
            for (let i = 0; i < this.doors.length; i++) {
                const door = this.doors[i];
                if (door.isPainting && !door._textureRequested) {
                    if (camPos.distanceTo(door.group.position) < 42.0) {
                        loadPaintingTexture(door);
                    }
                }
            }
        }

        // Update portal shader time uniforms
        this.doors.forEach(d => {
            if (d.portalMaterial) {
                d.portalMaterial.uniforms.uTime.value = this.time * 2.0;
            }
        });

        // Reposition the floating door labels to track their portals on screen.
        this.updateLabels();

        if (this.dust) {
            const pos = this.dust.geometry.attributes.position.array;
            const speedFactor = this.isTraveling ? 18.0 : 1.0;
            for (let i = 0; i < pos.length; i += 3) {
                if (this.isTraveling) {
                    pos[i + 2] += 0.25 * speedFactor;
                    if (pos[i + 2] > 60) pos[i + 2] = -60;
                } else {
                    pos[i + 1] += Math.sin(this.time * 5.0 + pos[i]) * 0.002;
                }
            }
            this.dust.geometry.attributes.position.needsUpdate = true;
        }

        // Billboarding - Only lookAt camera if not traveling
        if (!this.isTraveling) {
            this.doors.forEach(d => d.group.lookAt(this.camera.position.x, d.group.position.y, this.camera.position.z));
        }

        // Prevent camera from going below the floor
        if (this.camera.position.y < 0.5) {
            this.camera.position.y = 0.5;
        }

        this.controls.update();

        this.composer.render();
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
