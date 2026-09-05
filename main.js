import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import gsap from 'gsap';

import { loadManifest } from './src/portfolio/manifest.js';
import { layoutPaintings, byYearNewestFirst, RING_SPACING } from './src/portfolio/layout.js';
import {
    createTree, layoutForest, createForestFloor, createRoseCenterpiece, sharedForestGeometries,
    getForestGroundTexture, updateForestWind, forestWindUniforms, forestGroundUniforms, getForestElevation
} from './src/portfolio/forest.js';
import {
    createPaintingDoor, loadPaintingThumbnail, requestTier, releasePaintingTextures,
    resetTextureStreaming, touchPainting, textureBudget, TIER, focusDistanceFor,
    unitBox, unitPlane, frameMaterial, updatePaintingFramesMaterial
} from './src/portfolio/paintingDoor.js';
import { createCeramicSculpture } from './src/portfolio/sculpture.js';
import { createTorontoSkySystem, calculateTorontoSunMoon } from './src/sky/celestial.js';
import { getAssetUrl } from './src/utils/paths.js';

// Scratch objects reused every frame. animate() runs 60x a second, so anything
// allocated inside it -- a Color, a Vector3, a clone -- becomes ~1,500 short-lived
// objects a second and the GC pauses that come with them. paintingDoor.js already
// hoists its palette this way; these follow the same rule.
const _frustum = new THREE.Frustum();
const _projScreen = new THREE.Matrix4();
const _doorWorldPos = new THREE.Vector3();
const _sunUnit = new THREE.Vector3();
const _moonUnit = new THREE.Vector3();
const _panelNormal = new THREE.Vector3();
const _sunDirScratch = new THREE.Vector3();
const _moonDirScratch = new THREE.Vector3();
const _skyColScratch = new THREE.Color();
const _horizColScratch = new THREE.Color();

// Sky and horizon grading stops.
const C_DAY_ZENITH = new THREE.Color(0x1a4674);
const C_DAY_HORIZON = new THREE.Color(0x4c78a6);
// Dawn and dusk are not the same colour. Morning light comes up cool and rose over a
// violet sky; evening goes out hot and orange. Keying both off sun altitude alone made
// sunrise a rewind of sunset, which is the one moment of the cycle people recognise.
const C_DAWN_ZENITH = new THREE.Color(0x2a2547);
const C_DAWN_HORIZON = new THREE.Color(0xe0967f);
const C_DUSK_ZENITH = new THREE.Color(0x1c182c);
const C_DUSK_HORIZON = new THREE.Color(0xc8501f);
const _twiZenith = new THREE.Color();
const _twiHorizon = new THREE.Color();
const C_NIGHT_ZENITH = new THREE.Color(0x000000);
const C_NIGHT_HORIZON = new THREE.Color(0x000000);

// Sun / moon disc and light tints across rise and set.
const C_SUN_HIGH = new THREE.Color(0xfffde8);
const C_SUN_LOW = new THREE.Color(0xf8b066);
const C_SUNLIGHT_HIGH = new THREE.Color(0xfff2c8);
const C_SUNLIGHT_LOW = new THREE.Color(0xf4a75e);     // low evening sun
const C_SUNLIGHT_DAWN = new THREE.Color(0xf0b09a);    // low morning sun, cooler and pinker
const C_MOON_HIGH = new THREE.Color(0xe6edf5);
const C_MOON_LOW = new THREE.Color(0xc2d2e2);
const C_MOONLIGHT_HIGH = new THREE.Color(0xc8d8e8);
const C_MOONLIGHT_LOW = new THREE.Color(0xb0c5da);
const C_MOON_EMISSIVE = new THREE.Color(0xe0e8f2);

// Hemisphere bounce, night to noon.
const C_HEMI_NIGHT = new THREE.Color(0x35455d);
const C_HEMI_DAY = new THREE.Color(0xfcf2d4);
const C_HEMI_GROUND_NIGHT = new THREE.Color(0x10151f);
const C_HEMI_GROUND_DAY = new THREE.Color(0x241f18);
const C_HEMI_FOREST_GROUND_NIGHT = new THREE.Color(0x0a1209);
const C_HEMI_FOREST_GROUND_DAY = new THREE.Color(0x233118);

// Floor across the 24-hour cycle.
const C_FLOOR_NOON = new THREE.Color(0x68645e);
const C_FLOOR_TWILIGHT = new THREE.Color(0x202834);
const C_FLOOR_MIDNIGHT = new THREE.Color(0x0a1424);
const C_FLOOR_DAWN = new THREE.Color(0x323034);

// The forest floor stays in a mossy green-brown register instead of shifting
// to the gallery's navy midnight -- a stage floor and a forest floor going
// dark should look like different kinds of dark, not the same ramp retinted.
// Brighter than they look: in forest mode these multiply against the litter
// texture (average luminance ~140), so the value that actually lands on screen
// is roughly half of what is written here. Tuned at the product, not on paper.
const C_FLOOR_FOREST_NOON = new THREE.Color(0x8c9e6e);
const C_FLOOR_FOREST_TWILIGHT = new THREE.Color(0x4e6640);
const C_FLOOR_FOREST_MIDNIGHT = new THREE.Color(0x1e2c1a);
const C_FLOOR_FOREST_DAWN = new THREE.Color(0x8a8160);

// Floor ring ribbon. Door mode and paintings mode are the same geometry at different wave
// amplitudes, which lets switchView morph between them instead of swapping buffers.
// The resting speed of the sky: slow enough to read as atmosphere, not animation.
const AMBIENT_DAY_SPEED = 0.025;

// The three views, in the order the centre object cycles through on click. A
// mode string's position in this array is its whole identity for cycling
// purposes -- nextViewMode() and destLabelFor() both just index off it, so
// adding a fourth view later only means appending here and adding one branch
// in switchView(), not touching every click handler that toggles between modes.
const VIEW_MODES = ['default', 'portfolio', 'forest'];
function nextViewMode(mode) {
    return VIEW_MODES[(VIEW_MODES.indexOf(mode) + 1) % VIEW_MODES.length];
}
const VIEW_MODE_LABELS = { default: 'Doors', portfolio: 'Paintings', forest: 'Forest' };
// The dock and top-right controls both show "what clicking takes you to next",
// not the current mode -- this is the one place that phrasing is computed, so
// the two buttons and the centre-click handler can't drift out of sync.
function destLabelFor(mode) {
    return VIEW_MODE_LABELS[nextViewMode(mode)];
}

// How high the opening shot hangs above the standing default view. High enough to
// read as an aerial establishing shot of the whole ring system; controls.maxDistance
// is temporarily raised past this during the descent so OrbitControls' own distance
// clamp can't fight the tween.
const INTRO_HEIGHT = 130;

// The descent used to be two chained tweens (aerial -> plateau -> settle). Each leg
// used 'sine.inOut', which eases to zero velocity at BOTH its own start and end --
// so the shared boundary between the legs was a double deceleration, a real stutter
// confirmed by scrubbing a recording frame-by-frame, not just a code smell. A single
// continuous tween has exactly one ease curve and nowhere for a seam to hide.
const INTRO_DESCENT_DURATION = 15;   // unchanged from the old 8s + 7s total

// Rotation ramps in alongside the sky and the ground rings, all three released
// together the instant the descent begins rather than staggered -- the whole world
// starts moving in parallel as the camera leaves the held aerial shot, instead of
// spinning up as an afterthought partway down.
const INTRO_ROTATION_RAMP_DURATION = 3;

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
        { id: "contact", label: "CONTACT", type: "stone_arch", modelPath: "/models/arch_stone.glb", position: [5, 0, -9], rotation: [0, -0.2, 0], destinationUrl: "/about/", animation: "dissolveField", color: 0xcc88ff, particles: "runes" },
        { id: "about", label: "ABOUT", type: "shoji_screen", modelPath: "/models/door_shoji.glb", position: [10, 0, -6], rotation: [0, -0.4, 0], destinationUrl: "/about/", animation: "slideRight", color: 0xff88aa, particles: "petals" }
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
        this.motionPaused = true;    // held for the opening shot's static beat; released once it starts descending
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
        this._revealed = true;
        this._maybeStartIntro();

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
            if (this.roseCenterpiece) this.roseCenterpiece.visible = false;
        } else if (this.viewMode === 'forest') {
            if (this.roseCenterpiece) this.roseCenterpiece.visible = true;
            if (this.rock) this.rock.visible = false;
            if (this.sculpture) this.sculpture.visible = false;
        } else {
            if (this.rock) this.rock.visible = true;
            if (this.sculpture) this.sculpture.visible = false;
            if (this.roseCenterpiece) this.roseCenterpiece.visible = false;
        }
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(CONFIG.scene.camera.fov, window.innerWidth / window.innerHeight, 0.1, 6000);
        this.camera.fov = this._fovForAspect(window.innerWidth / window.innerHeight);
        this.camera.updateProjectionMatrix();
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
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Ultra-realistic soft contact shadows
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
        this.controls.maxPolarAngle = Math.PI * 0.54; // Allows low-angle upward gaze into the sky
        this.controls.autoRotate = false; // Held during the opening descent; released in setMotionPaused()
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
        window.addEventListener('wheel', () => this.dismissIntro(), { passive: true });
        // iOS Safari ignores user-scalable=no, so the pinch and double-tap zoom
        // gestures have to be refused explicitly or the overlay drifts off the scene.
        ['gesturestart', 'gesturechange', 'gestureend'].forEach(g =>
            window.addEventListener(g, (e) => e.preventDefault(), { passive: false })
        );
        let _lastTouchEnd = 0;
        window.addEventListener('touchend', (e) => {
            const now = performance.now();
            if (now - _lastTouchEnd < 300) e.preventDefault();   // double-tap zoom
            _lastTouchEnd = now;
        }, { passive: false });

        window.addEventListener('contextmenu', (e) => {
            // Only while a door is genuinely being right-dragged (dev mode).
            if (this.draggedDoor) e.preventDefault();
        });

        let startX = 0; let startY = 0; let startTime = 0;
        this._isPointerDown = false;
        this._pointerSpeed = 0;
        let lastPointerX = 0; let lastPointerY = 0; let lastPointerTime = 0;

        window.addEventListener('pointerdown', (e) => {
            this.dismissIntro();
            startX = e.clientX; startY = e.clientY;
            startTime = performance.now();
            this._isPointerDown = true;
            lastPointerX = e.clientX; lastPointerY = e.clientY;
            lastPointerTime = startTime;
            this._pointerSpeed = 0;
            // Touch has no hover state — raycast on contact so a door's label appears the
            // instant you touch it, same moment a mouse user would see it on hover.
            this.onMouseMove(e);
            // Dev Mode: middle/right button or Shift starts dragging a portal.
            // Left button falls through so it still orbits the camera / opens doors.
            if (e.button === 1 || e.button === 2 || e.shiftKey) this.handlePointerDown(e);
        });
        window.addEventListener('pointermove', (e) => {
            if (this._isPointerDown) {
                const now = performance.now();
                const dtP = Math.max(1, now - lastPointerTime);
                const dist = Math.hypot(e.clientX - lastPointerX, e.clientY - lastPointerY);
                this._pointerSpeed = (dist / dtP) * 1000;
                lastPointerX = e.clientX;
                lastPointerY = e.clientY;
                lastPointerTime = now;
            }
            // Lets a held/dragging finger "scrub" across doors and preview each label in turn.
            this.onMouseMove(e);
            if (this.draggedDoor) this.handleDoorDrag(e);
        });
        window.addEventListener('pointerup', (e) => {
            this._isPointerDown = false;
            this._pointerSpeed = 0;
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
        window.addEventListener('pointercancel', () => {
            this._isPointerDown = false;
            this._pointerSpeed = 0;
        });

        this.createTimeControls();
        this._startClock();

        // Seed the sky to the current time of day; it then drifts slowly (see animate()).
        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        this.sunAngle = ((hours - 6) / 24) * Math.PI * 2;
        this.daySpeed = AMBIENT_DAY_SPEED;

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
                /* Glass in the iOS sense: a capsule that refracts the scene behind it
                   rather than a translucent grey panel. The look comes from four things
                   layered - a vertical gradient so the top catches more light than the
                   bottom, a heavy blur with the saturation pushed past 1 so colour
                   bleeds through instead of going milky, a hairline border, and a bright
                   inset line along the top edge standing in for a specular highlight. */
                .glass-bar-wrapper {
                    pointer-events: auto;
                    background: linear-gradient(180deg,
                                rgba(255, 255, 255, 0.15) 0%,
                                rgba(255, 255, 255, 0.07) 45%,
                                rgba(255, 255, 255, 0.05) 100%);
                    backdrop-filter: blur(28px) saturate(200%) brightness(1.06);
                    -webkit-backdrop-filter: blur(28px) saturate(200%) brightness(1.06);
                    padding: 5px 11px;
                    border-radius: 999px;
                    border: 0.5px solid rgba(255, 255, 255, 0.22);
                    box-shadow:
                        0 14px 44px rgba(0, 0, 0, 0.42),
                        0 2px 10px rgba(0, 0, 0, 0.22),
                        inset 0 1px 0 rgba(255, 255, 255, 0.34),
                        inset 0 -1px 0 rgba(255, 255, 255, 0.06);
                    display: flex;
                    align-items: center;
                    gap: 6px;
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
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.68);
                    border: 0.5px solid rgba(255, 255, 255, 0.10);
                    border-radius: 999px;
                    width: 30px;
                    height: 30px;
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
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.30);
                    color: #ffffff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
                }
                .glass-btn:active {
                    background: rgba(255, 255, 255, 0.24);
                    border-color: rgba(255, 255, 255, 0.42);
                    transform: scale(0.92);
                }
                .glass-btn:focus-visible {
                    outline: 2px solid rgba(255, 255, 255, 0.75);
                    outline-offset: 2px;
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

        const icons = {
            home: `<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>`, // Diamond
            random: `<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>`, // Pixel/Grid
            day: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>`, // Minimalist Sun
            spiral: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a7.2 7.2 0 0 0-7.2-7.2 7.2 7.2 0 0 0-7.2 7.2c0 3.09 2.51 5.6 5.6 5.6s5.6-2.51 5.6-5.6a4 4 0 0 0-4-4c-1.33 0-2.4 1.07-2.4 2.4s1.07 2.4 2.4 2.4"/></svg>`, // Spiral Icon
            night: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`, // Minimal Crescent
            pause: `<svg viewBox="0 0 24 24"><rect x="7" y="5" width="3.6" height="14" rx="1.2"/><rect x="13.4" y="5" width="3.6" height="14" rx="1.2"/></svg>`,
            play: `<svg viewBox="0 0 24 24"><path d="M8 5.4L18.4 12 8 18.6Z"/></svg>`,
            art: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`, // Art Gallery Frame Icon
            duar: `<svg viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16h14zM9 5h6v14H9V5zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`, // Door Icon
            forest: `<svg viewBox="0 0 24 24"><path d="M12 2 5 13h4l-5 8h20l-5-8h4z"/><path d="M12 23v-4"/></svg>`, // Tree Icon
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

        const sunBtn = createBtn(icons.day, () => { }, 'Day');
        sunBtn.classList.add('day-btn');
        const spiralBtn = createBtn(icons.spiral, () => { }, 'Time Warp · Hold to cycle');
        spiralBtn.classList.add('spiral-btn');
        const moonBtn = createBtn(icons.night, () => { }, 'Night');
        moonBtn.classList.add('night-btn');
        // One control for every kind of ambient motion: the camera's orbit and the
        // passage of the sky. Two separate toggles meant the scene could sit in a
        // half-moving state that neither button described.
        const motionBtn = createBtn(icons.pause, () => { }, 'Pause motion · Hold to go wuuuuu');
        this.motionBtn = motionBtn;
        this.rotateBtn = motionBtn;   // legacy alias: the centre-click reset still uses it
        motionBtn.style.color = '#fff';
        this._motionIcons = { pause: icons.pause, play: icons.play };

        // Long Press / Tap Handler
        const HOLD_MS = 200;   // past this, a press is a hold rather than a tap

        const addLongPressHandler = (btn, onInterval, onTap) => {
            let interval;
            let startedAt = 0;
            let isLongPress = false;

            const start = (e) => {
                e.stopPropagation();
                if (interval) clearInterval(interval);
                this.resetUIHideTimer();
                startedAt = performance.now();
                isLongPress = false;

                // The interval only drives the repeat. How long the button has been
                // held is read from the clock: a browser is free to throttle timers
                // (a backgrounded tab gets a tick or two a second), and counting ticks
                // made a real hold register as a tap exactly when the device was
                // busiest.
                interval = setInterval(() => {
                    const held = performance.now() - startedAt;
                    this.resetUIHideTimer();
                    if (held > HOLD_MS) {
                        isLongPress = true;
                        onInterval(held);
                    }
                }, 50);
            };

            const end = (e) => {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
                // Re-check against the clock, in case the timer never got to run.
                if (startedAt && performance.now() - startedAt > HOLD_MS) isLongPress = true;

                if (!isLongPress && onTap && e.type !== 'pointerleave') {
                    onTap(); // Pure click
                    this.resetUIHideTimer();
                } else if (isLongPress) {
                    // Generic Release Handler for all buttons
                    if (btn === spiralBtn || btn === sunBtn || btn === moonBtn) {
                        this.daySpeed = 0; // Stop motion on release: stays exactly where user leaves it
                    }
                    if (btn === motionBtn) {
                        // Settle back to ambient, not to a standstill.
                        this.controls.autoRotateSpeed = -0.8;
                        this.daySpeed = AMBIENT_DAY_SPEED;
                    }
                }
            };

            btn.addEventListener('pointerdown', start);
            btn.addEventListener('pointerup', end);
            btn.addEventListener('pointerleave', end); // Handle slip-off
            btn.addEventListener('pointerenter', () => this.resetUIHideTimer());
        };

        // Motion: tap to pause or resume, hold to wind both the orbit and the sky up
        // together and release to settle back to ambient.
        addLongPressHandler(motionBtn, () => {
            if (this.motionPaused) this.setMotionPaused(false);
            this.controls.autoRotateSpeed = Math.max(-5000, Math.min(-0.5, this.controls.autoRotateSpeed * 1.05));
            if (this.daySpeed < 0.02) this.daySpeed = 0.02;
            this.daySpeed = Math.min(0.65, this.daySpeed * 1.08);
        }, () => {
            this.setMotionPaused(!this.motionPaused);
        });

        // Spiral Time Warp: Hold to increase speed of day, release to stay exactly where left
        addLongPressHandler(spiralBtn, (t) => {
            if (this.motionPaused) this.setMotionPaused(false, { rotation: false });
            if (this.daySpeed < 0.02) this.daySpeed = 0.02;
            this.daySpeed = Math.min(0.65, this.daySpeed * 1.08); // Smooth acceleration
        }, () => {
            // Tap: Step forward by 1 hour
            this.sunAngle = (this.sunAngle + (Math.PI / 12)) % (Math.PI * 2);
            this.daySpeed = 0;
        });

        // Sun: Hold to accelerate day time-lapse, Click to jump to Noon
        addLongPressHandler(sunBtn, (t) => {
            if (this.motionPaused) this.setMotionPaused(false, { rotation: false });
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.20, this.daySpeed * 1.10);
        }, () => {
            this.sunAngle = Math.PI / 2; // Noon
            this.daySpeed = 0;          // Stop motion
        });

        // Moon: Hold to accelerate night time-lapse, Click to jump to Midnight
        addLongPressHandler(moonBtn, (t) => {
            if (this.motionPaused) this.setMotionPaused(false, { rotation: false });
            if (this.daySpeed < 0.01) this.daySpeed = 0.01;
            this.daySpeed = Math.min(0.20, this.daySpeed * 1.10);
        }, () => {
            this.sunAngle = 3 * Math.PI / 2; // Midnight
            this.daySpeed = 0;              // Stop motion
        });

        // Cycles the three views: doors -> paintings -> forest -> doors. The icon
        // and label always show the destination, not the current mode -- see
        // destLabelFor()/nextViewMode() at module scope, the single source of
        // truth this and the top-right toggle and the centre-click handler all share.
        const destIconFor = (mode) => ({ default: icons.duar, portfolio: icons.art, forest: icons.forest }[nextViewMode(mode)]);
        const modeBtn = createBtn(
            destIconFor(this.viewMode),
            async () => { await this.switchView(nextViewMode(this.viewMode)); },
            destLabelFor(this.viewMode)
        );
        this.dockModeBtn = modeBtn;
        this.updateDockModeBtn = () => {
            const label = destLabelFor(this.viewMode);
            modeBtn.innerHTML = destIconFor(this.viewMode);
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

        wrapper.append(homeBtn, motionBtn, randBtn, sunBtn, spiralBtn, moonBtn, modeBtn, instaBtn);
        container.appendChild(wrapper);
        document.body.appendChild(container);

        this.uiVisible = true;
        this.resetUIHideTimer();
    }

    // Light the paintings by where the sun actually is.
    //
    // The canvases use an unlit material on purpose: it reproduces the artwork's own
    // colour exactly, with no tone mapping between the file and the screen. The cost
    // is that they ignore the scene's lights entirely, so a painting looked at with
    // the sun behind it read exactly as bright as one in full sun. Rather than give
    // that colour accuracy up, the material's tint is driven directly here -- full
    // white is the true colours, and anything less is shade.
    //
    // Paintings billboard to face the camera, so their surface normal is simply the
    // direction back toward the viewer. That makes the rule the intuitive one: with
    // the sun behind you the work is lit, and facing into the sun it falls into shade.
    updatePaintingLight(sky) {
        if (!this.doors.length) return;

        _sunUnit.copy(sky.cel.sunPos).normalize();
        _moonUnit.copy(sky.cel.moonPos).normalize();

        const sunUp = sky.sH;                       // 0 below the horizon, 1 overhead
        const moonUp = (!(sky.sunAlt > 0.01)) ? sky.mH : 0;
        // How strongly the sun casts, as opposed to how high it is. Scaling the key
        // light by altitude alone cancelled the effect at exactly the hours it should
        // be strongest: a low sun rakes hard across the work even though sH is small.
        const sunCast = THREE.MathUtils.clamp(sunUp * 3.0, 0, 1);
        const moonCast = THREE.MathUtils.clamp(moonUp * 3.0, 0, 1);
        // Skylight reaching every surface regardless of facing. Never zero: a gallery
        // that cannot be seen at midnight is not a gallery.
        const ambient = 0.40 + 0.16 * sunUp;

        for (const d of this.doors) {
            if (!d.isPainting || !d.panelMaterial) continue;

            _panelNormal.subVectors(this.camera.position, d.group.position);
            _panelNormal.y = 0;
            if (_panelNormal.lengthSq() < 1e-6) continue;
            _panelNormal.normalize();

            const sunKey = Math.max(0, _panelNormal.dot(_sunUnit));
            const moonKey = Math.max(0, _panelNormal.dot(_moonUnit));

            let b = ambient + 0.50 * sunCast * sunKey + 0.14 * moonCast * moonKey;

            // The work being looked at comes up to full: stepping in front of a
            // painting should not be punished by where the sun happens to be.
            if (d === this.activeDoor) b = THREE.MathUtils.lerp(b, 1.0, 0.85);

            b = THREE.MathUtils.clamp(b, 0.34, 1.0);
            // Ease toward the target so a fast orbit reads as light moving across the
            // work rather than as flicker.
            d._lit = d._lit === undefined ? b : THREE.MathUtils.lerp(d._lit, b, 0.12);
            d.panelMaterial.color.setScalar(d._lit);
        }
    }

    // Fires the opening descent once both halves are ready: the doors exist (so the
    // default overview target is known) and the loader has actually cleared (so the
    // held aerial beat is what the visitor sees first, not motion hidden behind it).
    // Guards against firing twice regardless of which half resolves last.
    _maybeStartIntro() {
        if (this._introStarted || !this._doorsReady || !this._revealed) return;
        if (this.viewMode !== 'portfolio' || this.activeDoor) return;
        this._introStarted = true;
        this._playIntroDescent();
    }

    // A held beat at altitude, then one continuous drop to the standing default
    // view -- a single tween, not several chained together. Camera position is the
    // only thing tweened; controls.target never moves, so OrbitControls keeps the
    // shot aimed at the same point throughout and the view sweeps naturally from
    // aerial to eye-level as the height changes.
    //
    // Rotation eases in partway through the descent rather than snapping on at the
    // end, and is given a wide margin to reach cruising speed well before the
    // descent's own ease tapers off -- so the nearest ring is already gliding
    // smoothly under the camera as it settles, instead of the shot visibly running
    // out of motion right as it lands.
    _playIntroDescent() {
        const overview = this._introOverview || this.getDefaultOverview();
        // maxDistance was already raised the moment the aerial pose was set (see
        // buildPortfolioDoors) so the held beat isn't clamped too; this just carries
        // the value that needs restoring once the descent lands.
        const priorMaxDistance = this._priorMaxDistance ?? this.controls.maxDistance;

        // enableDamping deliberately left alone here (it's true from init() and
        // stays true) -- toggling it off then back on while autoRotate is actively
        // spinning was its own bug: OrbitControls only carries a rotation delta
        // across frames when damping is on, so flipping it on at the exact moment
        // rotation is at cruising speed reset that accumulator to empty, and the
        // effective spin rate visibly collapsed to ~5% of speed for about a second
        // before climbing back -- a second, independent cause of the landing
        // reading as stop-and-go, on top of the sky issue below.
        gsap.killTweensOf(this.camera.position);
        gsap.killTweensOf(this.controls);

        const tl = gsap.timeline({
            onComplete: () => {
                this.controls.maxDistance = priorMaxDistance;
            }
        });

        tl.to(this.camera.position, {
            y: overview.camPos.y,
            duration: INTRO_DESCENT_DURATION,
            delay: 1.6,
            ease: 'sine.inOut'
        });

        // Release everything ambient -- sky, rings, and rotation -- at the same
        // instant the descent begins, not staggered across it. motionPaused gates
        // both sunAngle's advance and the ground rings' spin in animate(); holding
        // it until partway down meant the sky and rings sat frozen well into the
        // shot, then had to play their whole ambient sweep in whatever was left,
        // compressed into less than their usual span -- which is what read as an
        // abrupt jump right at the landing rather than a gentle, continuous one.
        //
        // A genuine child of the timeline, not a detached gsap.to() spawned from a
        // callback -- a detached tween runs on its own clock, so scrubbing or
        // retiming the parent timeline wouldn't move it in step, and it wouldn't
        // show up if this sequence is ever scrubbed for review the way this one was.
        const releaseAt = 1.6;
        tl.call(() => {
            this.setMotionPaused(false, { rotation: false }); // icon flips now; speed ramps in below
            this.controls.autoRotate = true;
        }, null, releaseAt);
        tl.fromTo(this.controls,
            { autoRotateSpeed: 0 },
            { autoRotateSpeed: -0.8, duration: INTRO_ROTATION_RAMP_DURATION, ease: 'sine.inOut' },
            releaseAt
        );
    }

    setMotionPaused(paused, { rotation = true } = {}) {
        this.motionPaused = !!paused;
        if (rotation) {
            if (this.viewMode === 'forest') {
                this.controls.autoRotate = false;
            } else {
                this.controls.autoRotate = !this.motionPaused;
                if (!this.motionPaused) this.controls.autoRotateSpeed = -0.8;   // gentle CW
            }
        }

        const btn = this.motionBtn;
        if (btn && this._motionIcons) {
            const label = (this.motionPaused ? 'Play motion' : 'Pause motion') + ' · Hold to go wuuuuu';
            btn.innerHTML = this.motionPaused ? this._motionIcons.play : this._motionIcons.pause;
            btn.setAttribute('aria-label', label);
            btn.setAttribute('aria-pressed', String(this.motionPaused));
            // createBtn appends the tooltip inside the button, so innerHTML above
            // removes it; rebuild it rather than leaving a button with no tip.
            const tip = document.createElement('span');
            tip.className = 'btn-tip';
            tip.textContent = label;
            btn.appendChild(tip);
            btn.style.color = this.motionPaused ? 'rgba(255,255,255,0.35)' : '#fff';
        }
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
            const label = destLabelFor(this.viewMode);
            btn.textContent = label;
            btn.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
        };
        paint();

        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (this._switching) return;
            btn.disabled = true;
            // No paint() after this -- switchView() repaints this same button
            // internally once this.viewMode actually changes, using the same
            // destLabelFor() this closure does, so a second call here would only
            // ever repeat what switchView already set.
            await this.switchView(nextViewMode(this.viewMode));
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
                        this.setMotionPaused(true);
                        // Cycles doors -> paintings -> forest -> doors. switchView()
                        // repaints the dock and top-right buttons itself once
                        // this.viewMode changes, so there's nothing left to sync here.
                        if (!this._switching) this.switchView(nextViewMode(this.viewMode));
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
                        if (door.isTree) {
                            // Decorative -- no portal, no hinge, nothing to open.
                        } else if (door.isPainting) {
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

    // Rebuilt whenever the door set changes. Raycasting this list directly, rather than
    // the whole scene recursively, is what keeps hover off the frame budget: the scene
    // includes an 1800-unit sky dome, the Milky Way sphere, a 150m ground disc and a
    // star field, none of which are ever hover targets.
    _rebuildHoverTargets() {
        this._hoverTargets = [];
        this._hoverOwner = new Map();
        for (const d of this.doors) {
            const hit = d.portalHitbox;
            if (!hit) continue;
            this._hoverTargets.push(hit);
            this._hoverOwner.set(hit, d);
        }
        const centre = this.viewMode === 'portfolio' ? this.sculpture : this.rock;
        if (centre) {
            centre.traverse(o => { if (o.isMesh) { this._hoverTargets.push(o); this._hoverOwner.set(o, null); } });
        }
    }

    checkHover() {
        if (!this.raycaster || !this.scene || !this.camera) return;
        if (!this._hoverTargets) this._rebuildHoverTargets();

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this._hoverTargets, false);

        let hoverActive = false;
        let hoveredDoor = null;

        if (hits.length > 0) {
            // Every target maps straight back to its owner, so there is no tree walk
            // and no linear search across the door list.
            const owner = this._hoverOwner.get(hits[0].object);
            hoverActive = true;
            hoveredDoor = owner || null;   // null owner == the centre sculpture
        }

        const cursor = hoverActive ? 'pointer' : 'crosshair';
        if (this._cursor !== cursor) {
            this._cursor = cursor;
            document.body.style.cursor = cursor;
        }
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
                fov: this._fovForAspect(this.camera.aspect), duration: 1.8, ease: "power3.inOut",
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
        const aspect = window.innerWidth / Math.max(1, window.innerHeight);
        const narrow = THREE.MathUtils.clamp((4 / 3 - aspect) / (4 / 3 - 0.46), 0, 1);
        // Landscape keeps the designed composition (narrow === 0). Portrait is framed
        // off the artwork instead of off the world centre -- see below.
        const aimY = 1.6;
        const eyeY = 3.0;
        const pull = 1;

        const target = new THREE.Vector3(0, aimY, 0);
        let camPos = new THREE.Vector3(0, eyeY, 28.5 * pull);

        if (this.viewMode === 'portfolio' && this.doors.length > 0) {
            // Target Flowers Unnamed as the default overview painting
            const targetPainting = this.doors.find(d => d.data?.id === 'Flowers Unnamed') || this.doors.find(d => d.isPainting);
            if (targetPainting) {
                const worldPos = new THREE.Vector3();
                targetPainting.group.getWorldPosition(worldPos);
                const angle = Math.atan2(worldPos.x, worldPos.z);
                // Position camera further zoomed out outside of circle 1 (r ~ 28.5m, y = 3.0m)
                let r = Math.max(28.0, (targetPainting.radius || 15.0) + 13.0) * pull;
                let eye = eyeY;
                let aim = aimY;

                if (narrow > 0.01) {
                    // On a narrow screen, compose around the artwork rather than the
                    // world centre. focusDistanceFor already solves "how far back does
                    // this canvas fill the frame" for the current aspect, so back off
                    // from that instead of guessing a radius: the work keeps a
                    // consistent share of the frame on any phone, and the horizon drops
                    // out of the middle of the picture.
                    const fill = focusDistanceFor(targetPainting.width, targetPainting.height, this.camera);
                    // Only a little further back than "fills the frame": on a portrait
                    // screen focusDistanceFor already has to retreat a long way to fit a
                    // landscape canvas, so anything more empties the shot out again.
                    const wide = fill * 1.25;
                    // OrbitControls orbits *around* controls.target, so tilting the view by
                    // raising the target moves the whole orbit centre rather than the aim.
                    // Composition therefore comes from where the camera stands: put it at
                    // human eye height and aim at the middle of the canvas, and the view
                    // looks slightly up -- which drops the horizon and the empty floor with it.
                    const centreY = targetPainting.centreY || 2.0;
                    r = THREE.MathUtils.lerp(r, (targetPainting.radius || 15) + wide, narrow);
                    aim = THREE.MathUtils.lerp(aimY, centreY, narrow);
                    eye = THREE.MathUtils.lerp(eyeY, Math.min(1.6, centreY * 0.55), narrow);
                }

                target.set(0, aim, 0);
                camPos = new THREE.Vector3(
                    Math.sin(angle) * r,
                    eye,
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
        this.daySpeed = AMBIENT_DAY_SPEED;    // back to ambient day/night speed
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
            if (this.viewMode !== 'forest') {
                this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = -0.6;
            } else {
                this.controls.autoRotate = false;
            }
        });

        // Fade rings back in slowly
        if (this.ringMat) {
            gsap.to(this.ringMat, { opacity: 0.9, duration: 4.0, ease: "power2.inOut" });
        }

        // Reset FOV
        gsap.to(this.camera, {
            fov: this._fovForAspect(this.camera.aspect), // design FOV, widened on narrow screens
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

        const shadowRes = this.isMobile ? 1024 : 2048;

        this.sunDist = 1600;
        this.sunLight = new THREE.DirectionalLight(0xfff2c8, 2.5); // Warm solar light
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.set(shadowRes, shadowRes);
        this.sunLight.shadow.camera.near = 1.0;
        this.sunLight.shadow.camera.far = 700;
        const d = 75; // Covers all trees, rose, and terrain with high texel density
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.bias = -0.0003;
        this.sunLight.shadow.normalBias = 0.025;
        this.sunLight.shadow.radius = 2.0;
        this.scene.add(this.sunLight);
        this.scene.add(this.sunLight.target);

        const sunTex = this.generateSunTexture();
        this.sunMesh = new THREE.Mesh(new THREE.SphereGeometry(44, 32, 32), new THREE.MeshStandardMaterial({
            map: sunTex,
            emissiveMap: sunTex,
            emissive: 0xffe477,
            emissiveIntensity: 2.2,
            roughness: 0.85,
            fog: false,
            transparent: true
        }));
        this.sunMesh.renderOrder = -180;
        this.scene.add(this.sunMesh);

        this.moonLight = new THREE.DirectionalLight(0xc8d8e8, 1.4);
        this.moonLight.castShadow = true;
        this.moonLight.shadow.mapSize.set(shadowRes, shadowRes);
        this.moonLight.shadow.camera.near = 1.0;
        this.moonLight.shadow.camera.far = 700;
        this.moonLight.shadow.camera.left = -d;
        this.moonLight.shadow.camera.right = d;
        this.moonLight.shadow.camera.top = d;
        this.moonLight.shadow.camera.bottom = -d;
        this.moonLight.shadow.bias = -0.0003;
        this.moonLight.shadow.normalBias = 0.025;
        this.moonLight.shadow.radius = 2.0;
        this.scene.add(this.moonLight);
        this.scene.add(this.moonLight.target);

        const moonTex = this.generateMoonTexture();
        this.moonMesh = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 32), new THREE.MeshStandardMaterial({
            map: moonTex,
            emissiveMap: moonTex,
            emissive: 0xe0e8f2,
            emissiveIntensity: 1.1,
            roughness: 0.92,
            metalness: 0,
            fog: false,
            transparent: true
        }));
        this.moonMesh.renderOrder = -180;
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
        const w = 1024; const h = 512;
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');

        // 1. Lunar Highlands Base: silvery-white titanium regolith with subtle limb darkening
        const baseGrad = ctx.createLinearGradient(0, 0, 0, h);
        baseGrad.addColorStop(0, '#e8edf3');
        baseGrad.addColorStop(0.5, '#dbe2ea');
        baseGrad.addColorStop(1, '#caced4');
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, w, h);

        // 2. High-resolution regolith mineral noise
        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;
        let seed = 12345;
        const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

        for (let py = 0; py < h; py++) {
            for (let px = 0; px < w; px++) {
                const idx = (py * w + px) * 4;
                const grain = (rnd() - 0.5) * 18;
                d[idx] = Math.max(0, Math.min(255, d[idx] + grain));
                d[idx + 1] = Math.max(0, Math.min(255, d[idx + 1] + grain));
                d[idx + 2] = Math.max(0, Math.min(255, d[idx + 2] + grain + 2));
            }
        }
        ctx.putImageData(imgData, 0, 0);

        // 3. Authentic Lunar Maria (Dark basaltic lava plains visible from Earth)
        const maria = [
            // Oceanus Procellarum & Mare Imbrium (North-West)
            { x: 0.36 * w, y: 0.32 * h, rx: 110, ry: 75, col: 'rgba(80, 92, 106, 0.58)' },
            { x: 0.44 * w, y: 0.30 * h, rx: 85, ry: 65, col: 'rgba(74, 86, 98, 0.62)' },
            // Mare Serenitatis & Mare Tranquillitatis (North-East / Center-East)
            { x: 0.58 * w, y: 0.35 * h, rx: 70, ry: 58, col: 'rgba(76, 88, 102, 0.60)' },
            { x: 0.62 * w, y: 0.46 * h, rx: 80, ry: 60, col: 'rgba(72, 84, 96, 0.62)' },
            // Mare Crisium (Isolated oval mare in the East)
            { x: 0.76 * w, y: 0.38 * h, rx: 42, ry: 34, col: 'rgba(68, 78, 90, 0.65)' },
            // Mare Fecunditatis & Mare Nectaris (South-East)
            { x: 0.68 * w, y: 0.56 * h, rx: 65, ry: 50, col: 'rgba(78, 88, 100, 0.55)' },
            { x: 0.59 * w, y: 0.62 * h, rx: 45, ry: 36, col: 'rgba(82, 92, 104, 0.52)' },
            // Mare Nubium & Mare Humorum (South-West)
            { x: 0.42 * w, y: 0.62 * h, rx: 70, ry: 52, col: 'rgba(80, 90, 102, 0.56)' },
            { x: 0.32 * w, y: 0.60 * h, rx: 45, ry: 38, col: 'rgba(78, 88, 100, 0.54)' },
            // Mare Frigoris (Northern elongated ribbon)
            { x: 0.48 * w, y: 0.18 * h, rx: 140, ry: 24, col: 'rgba(84, 95, 108, 0.50)' }
        ];

        maria.forEach(m => {
            ctx.save();
            ctx.filter = 'blur(12px)';
            ctx.fillStyle = m.col;
            ctx.beginPath();
            ctx.ellipse(m.x, m.y, m.rx, m.ry, 0, 0, Math.PI * 2);
            ctx.fill();
            // Organic textured inner lobe
            ctx.fillStyle = 'rgba(64, 74, 86, 0.42)';
            ctx.beginPath();
            ctx.ellipse(m.x + (rnd() - 0.5) * 20, m.y + (rnd() - 0.5) * 15, m.rx * 0.65, m.ry * 0.65, 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        // 4. Tycho Crater & Dramatic Ejecta Rays (Southern hemisphere brilliance)
        const tychoX = 0.47 * w;
        const tychoY = 0.78 * h;

        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.lineWidth = 1.6;
        ctx.filter = 'blur(2px)';
        for (let a = 0; a < 24; a++) {
            const angle = (a / 24) * Math.PI * 2 + rnd() * 0.15;
            const rayLen = 90 + rnd() * 180;
            ctx.beginPath();
            ctx.moveTo(tychoX, tychoY);
            ctx.lineTo(tychoX + Math.cos(angle) * rayLen, tychoY + Math.sin(angle) * rayLen);
            ctx.stroke();
        }
        // Tycho central peak & bright nimbus
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.filter = 'blur(3px)';
        ctx.beginPath();
        ctx.arc(tychoX, tychoY, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 5. Copernicus & Kepler Crater Rays (Oceanus Procellarum)
        const rayCraters = [
            { x: 0.41 * w, y: 0.41 * h, r: 10, rays: 14, len: 75 }, // Copernicus
            { x: 0.32 * w, y: 0.43 * h, r: 6, rays: 10, len: 45 },  // Kepler
            { x: 0.28 * w, y: 0.33 * h, r: 5, rays: 8, len: 35 }    // Aristarchus
        ];

        rayCraters.forEach(rc => {
            ctx.save();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
            ctx.lineWidth = 1.2;
            ctx.filter = 'blur(1.5px)';
            for (let i = 0; i < rc.rays; i++) {
                const angle = (i / rc.rays) * Math.PI * 2 + rnd() * 0.2;
                ctx.beginPath();
                ctx.moveTo(rc.x, rc.y);
                ctx.lineTo(rc.x + Math.cos(angle) * rc.len, rc.y + Math.sin(angle) * rc.len);
                ctx.stroke();
            }
            ctx.fillStyle = 'rgba(255, 255, 255, 0.90)';
            ctx.beginPath();
            ctx.arc(rc.x, rc.y, rc.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });

        // 6. Scattered impact crater clusters across southern & limb highlands
        for (let i = 0; i < 180; i++) {
            const cx = rnd() * w;
            const cy = rnd() * h;
            const cr = 2 + rnd() * 6;
            ctx.save();
            // Dark crater floor
            ctx.fillStyle = 'rgba(70, 80, 92, 0.35)';
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fill();
            // Illuminated rim
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.arc(cx - 0.5, cy - 0.5, cr, -Math.PI * 0.75, Math.PI * 0.25);
            ctx.stroke();
            ctx.restore();
        }

        return new THREE.CanvasTexture(canvas);
    }

    setupEnvironment() {
        // Subdivided circular ground geometry: 64 radial concentric rings & 96 angular slices for 3D terrain topography
        const groundGeo = new THREE.RingGeometry(0.001, 150, 96, 64);
        this.groundMat = new THREE.MeshStandardMaterial({
            color: 0x68645e,
            roughness: 1.0,
            metalness: 0.0,
            envMapIntensity: 0.0,
            transparent: true,
            depthWrite: true,
            polygonOffset: true,
            polygonOffsetFactor: 1, // Push back
            polygonOffsetUnits: 1
        });

        this.groundMat.onBeforeCompile = (shader) => {
            shader.uniforms.uForestWave = forestGroundUniforms.uForestWave;
            shader.uniforms.uForestActive = forestGroundUniforms.uForestActive;

            shader.vertexShader = `
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            \n` + shader.vertexShader;

            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                #include <begin_vertex>
                // Radial ground emergence ripple travelling outward across the disc
                float rDist = length(position.xy);
                float waveFront = uForestWave * 145.0;
                float distToWave = rDist - waveFront;
                float ripple = sin(clamp(distToWave * 0.22, -3.14, 3.14)) * exp(-distToWave * distToWave * 0.006) * 0.85 * uForestActive * (1.0 - uForestWave * 0.45);

                // Uneven organic forest terrain topography (matches getForestElevation)
                float worldZ = -position.y;
                float clearingFactor = smoothstep(1.5, 12.0, rDist);
                float hill1 = sin(position.x * 0.045 + 0.5) * cos(worldZ * 0.040 + 0.8) * 0.65;
                float hill2 = sin(position.x * 0.095 - worldZ * 0.08) * 0.35;
                float hill3 = cos(position.x * 0.18 + worldZ * 0.15) * 0.18;
                float micro = sin(position.x * 0.38) * cos(worldZ * 0.35) * 0.08;
                float terrainHeight = (hill1 + hill2 + hill3 + micro) * clearingFactor * uForestActive;

                transformed.z += ripple + terrainHeight;
                `
            );

            shader.vertexShader = shader.vertexShader.replace(
                '#include <worldpos_vertex>',
                `
                #include <worldpos_vertex>
                vGroundWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
                `
            );

            shader.fragmentShader = `
                uniform float uForestWave;
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            \n` + shader.fragmentShader;

            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <dithering_fragment>',
                `
                #include <dithering_fragment>
                // Natural planetary horizon illusion: solid ground for all paintings (r <= 112m), softly fades at perimeter
                float r = length(vGroundWorldPos.xz);
                float edgeFade = 1.0 - smoothstep(112.0, 150.0, r);
                gl_FragColor.a *= edgeFade;

                // Uneven muddy patches and damp earth pooling in the forest
                if (uForestActive > 0.01) {
                    vec2 mPos = vGroundWorldPos.xz * 0.08;
                    float mudPool = sin(mPos.x * 2.1 + sin(mPos.y * 1.8)) * cos(mPos.y * 1.9 + sin(mPos.x * 2.3));
                    float microMud = sin(vGroundWorldPos.x * 0.42) * cos(vGroundWorldPos.z * 0.42) * 0.5;
                    float mudVal = smoothstep(0.12, 0.68, mudPool * 0.75 + microMud * 0.25);
                    
                    // Dark damp muddy silt and deep wet earth
                    vec3 drySoil = vec3(0.26, 0.22, 0.16);
                    vec3 wetMud = vec3(0.08, 0.06, 0.04);
                    vec3 deepSilt = vec3(0.035, 0.024, 0.016);

                    vec3 mudColor = mix(drySoil, wetMud, mudVal);
                    mudColor = mix(mudColor, deepSilt, pow(mudVal, 2.2));

                    // Modulate floor with damp muddy patches
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * mudColor * 2.8, mudVal * 0.72 * uForestActive);

                    // Wet muddy sheen under light
                    float wetGleam = pow(max(0.0, mudVal), 3.0) * 0.18 * uForestActive;
                    gl_FragColor.rgb += vec3(wetGleam * 0.65, wetGleam * 0.80, wetGleam);
                }

                // Bioluminescent life ring along the active ground wave
                if (uForestActive > 0.01) {
                    float waveFront = uForestWave * 145.0;
                    float distToWave = abs(r - waveFront);
                    float edgeGlow = exp(-distToWave * distToWave * 0.015) * (1.0 - uForestWave * 0.7);
                    gl_FragColor.rgb += vec3(0.22, 0.42, 0.16) * edgeGlow * uForestActive;
                }

                if (gl_FragColor.a <= 0.002) discard;
                `
            );
        };

        const ground = new THREE.Mesh(groundGeo, this.groundMat);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
        this.groundMesh = ground;

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
            releasePaintingTextures(door);

            door.group.traverse(obj => {
                if (!obj.isMesh) return;
                // Identity, not name: only the two module-level shared assets survive.
                // Matching on name === 'Frame' also spared the per-door lintel and base
                // geometries, which leaked ~119 geometries per view switch.
                const sharedGeo = obj.geometry === unitBox || obj.geometry === unitPlane || sharedForestGeometries.has(obj.geometry);
                if (obj.geometry && !sharedGeo) obj.geometry.dispose();
                if (obj.material && obj.material !== frameMaterial) {
                    // Painting textures are already released above and shared across
                    // tiers, so only dispose maps the streamer doesn't own.
                    if (obj.material.map && !door.isPainting) obj.material.map.dispose();
                    obj.material.dispose();
                }
            });

            this.scene.remove(door.group);
        });

        this.doors = [];
        this._hoverTargets = null;
        this._hoverOwner = null;
        resetTextureStreaming();
    }

    // Scale one centrepiece object in from nothing, back.out for a bit of pop.
    _showCenterpiece(obj) {
        if (!obj) return;
        gsap.killTweensOf(obj.scale);
        obj.visible = true;
        if (obj === this.roseCenterpiece) {
            obj.scale.set(0.001, 0.001, 0.001);
            gsap.to(obj.scale, { y: 1, duration: 2.2, ease: 'power2.out', delay: 0.1 });
            gsap.to(obj.scale, { x: 1, z: 1, duration: 1.9, ease: 'back.out(1.2)', delay: 0.4 });
        } else {
            obj.scale.setScalar(0.001);
            gsap.to(obj.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.3)', delay: 0.2 });
        }
    }

    // Scale one centrepiece object down to nothing, then hide it -- visible
    // stays true for the length of the tween so it's still there to shrink.
    _hideCenterpiece(obj) {
        if (!obj || !obj.visible) return;
        gsap.killTweensOf(obj.scale);
        gsap.to(obj.scale, {
            x: 0.001, y: 0.001, z: 0.001, duration: 0.4, ease: 'power2.in',
            onComplete: () => { obj.visible = false; }
        });
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
            const label = destLabelFor(mode);
            this.viewToggle.textContent = label;
            this.viewToggle.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
        }

        // Paintings are unlit and untone-mapped, so their pixels reach the bloom pass
        // at full value — against the default 0.2 threshold the entire artwork blooms
        // and blows out to white. Lift the threshold above paint so only genuinely
        // emissive things (sun, moon, the cone's highlight) still glow.
        if (mode === 'portfolio') {
            this.updateRingGeometries(true);
            this.doors.forEach((d) => {
                if (d.isPainting) loadPaintingThumbnail(d);
            });
            // Prioritize high-res textures for closest paintings
            this.doors
                .filter(d => d.isPainting)
                .sort((a, b) => this.camera.position.distanceTo(a.group.position) - this.camera.position.distanceTo(b.group.position))
                .slice(0, 6)
                .forEach((d) => requestTier(d, TIER.MID));
            gsap.to(this.bloomPass, { threshold: 0.92, strength: 0.20, duration: 0.6 });
        } else if (mode === 'forest') {
            this.controls.autoRotate = false;
            this.updateRingGeometries(false);
            gsap.to(this.bloomPass, { threshold: 0.88, strength: 0.18, duration: 0.6 });
        } else {
            if (!this.motionPaused) this.controls.autoRotate = true;
            this.updateRingGeometries(false);
            gsap.to(this.bloomPass, {
                threshold: this._bloomDefaults.threshold,
                strength: this._bloomDefaults.strength,
                duration: 0.6
            });
        }

        // The rings themselves stay visible for doors/paintings -- both already
        // read as staged/geometric -- but a forest floor with its own grass and
        // undergrowth doesn't want a drafting-compass circle drawn on it.
        if (this.rings) this.rings.forEach(r => { r.mesh.visible = mode !== 'forest'; });

        // Forest mode swaps a mottled earth-and-litter map onto the existing
        // ground plane rather than adding a second disc over it, so the scene's
        // own day/night colour ramp keeps multiplying over the texture and the
        // floor still darkens into night with everything else.
        if (this.groundMat) {
            if (mode === 'forest') {
                this.groundMat.map = getForestGroundTexture();
                this.groundMat.needsUpdate = true;
            } else {
                if (forestGroundUniforms.uForestActive.value > 0) {
                    gsap.to(forestGroundUniforms.uForestActive, {
                        value: 0.0,
                        duration: 0.5,
                        onComplete: () => {
                            forestGroundUniforms.uForestWave.value = 0.0;
                            if (this.groundMat) {
                                this.groundMat.map = null;
                                this.groundMat.needsUpdate = true;
                            }
                        }
                    });
                } else {
                    this.groundMat.map = null;
                    this.groundMat.needsUpdate = true;
                }
            }
        }

        // Atmospheric depth: deepen fog in forest mode so distant trees dissolve
        // into atmospheric mist, restored to 0.002 in geometric modes.
        if (this.scene.fog) {
            const targetDensity = mode === 'forest' ? 0.0075 : 0.002;
            gsap.to(this.scene.fog, { density: targetDensity, duration: 0.8 });
        }

        // One of three centrepieces is visible at a time: the chrome cone
        // (default), the ceramic sculpture (portfolio), or a single rose on a
        // stem (forest). _showCenterpiece/_hideCenterpiece just wrap the same
        // scale-in/scale-out tween for whichever objects need which today.
        const activeCenterpiece = { default: this.rock, portfolio: this.sculpture, forest: this.roseCenterpiece }[mode];
        [this.rock, this.sculpture, this.roseCenterpiece].forEach((obj) => {
            if (obj === activeCenterpiece) this._showCenterpiece(obj);
            else this._hideCenterpiece(obj);
        });

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
        else if (mode === 'forest') this.buildForest();
        else this.setupDoors();

        if (mode === 'forest') {
            // Animate ground life wave & meadow grass sprouting outward across the terrain
            forestGroundUniforms.uForestActive.value = 1.0;
            forestGroundUniforms.uForestWave.value = 0.0;
            gsap.to(forestGroundUniforms.uForestWave, {
                value: 1.0,
                duration: 3.6,
                ease: 'power1.out'
            });

            forestWindUniforms.uGrassGrowth.value = 0.0;
            gsap.to(forestWindUniforms.uGrassGrowth, {
                value: 1.0,
                duration: 3.6,
                ease: 'power1.out'
            });

            // Trees emerge slowly and gracefully behind the expanding ground wave
            this.doors
                .slice()
                .sort((a, b) => a.group.position.lengthSq() - b.group.position.lengthSq())
                .forEach((door) => {
                    if (door.group.name === 'ForestGrass') {
                        door.group.scale.set(1, 1, 1);
                        return;
                    }
                    const dist = Math.sqrt(door.group.position.lengthSq());
                    // Base delay times emergence to the ground wave passing the trunk
                    const baseDelay = 0.25 + (dist / 120.0) * 2.2 + (Math.sin(door.group.position.x * 2.1) * 0.12);
                    const targetRotY = door.group.rotation.y;

                    door.group.scale.set(0.001, 0.001, 0.001);
                    door.group.rotation.y = targetRotY - 0.22;

                    // 1. Trunk emerges slowly upward from the soil
                    gsap.to(door.group.scale, {
                        y: 1.0,
                        duration: 2.4,
                        ease: 'power2.out',
                        delay: baseDelay
                    });

                    // 2. Canopy branches and foliage unfurl and pop outward
                    gsap.to(door.group.scale, {
                        x: 1.0,
                        z: 1.0,
                        duration: 2.1,
                        ease: 'back.out(1.22)',
                        delay: baseDelay + 0.35
                    });

                    // 3. Gentle organic twist as roots anchor
                    gsap.to(door.group.rotation, {
                        y: targetRotY,
                        duration: 2.5,
                        ease: 'power2.out',
                        delay: baseDelay
                    });
                });
        } else {
            // Standard doors / paintings pop
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
        }

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

        // Eagerly load lightweight LQIP thumbnails (<5KB each) so no artwork is ever blank
        this.doors.forEach((door) => loadPaintingThumbnail(door));

        // Bring the front-of-house works up to the ring tier. Full resolution is
        // reserved for whatever the visitor actually looks at.
        this.doors
            .slice()
            .sort((a, b) => this.camera.position.distanceTo(a.group.position) - this.camera.position.distanceTo(b.group.position))
            .slice(0, 6)
            .forEach((door) => requestTier(door, TIER.MID));

        this._hoverTargets = null;   // rebuilt lazily on the next hover test

        // Open on a high aerial view of the whole ring system, held until the loader
        // clears, then craned slowly down into the standing default view -- see
        // _maybeStartIntro(). Camera positioning happens now; the motion itself is
        // gated on revealScene() so the descent always starts the instant the scene
        // appears, whether asset loading was fast or slow.
        //
        // Framed dead-centre on the sculpture, not angled toward whichever painting
        // getDefaultOverview() would otherwise target -- the opening shot is about the
        // room as a whole. (Home / resetScene still use the painting-targeted framing;
        // this is deliberately a separate, neutral pose used only for the opening.)
        if (!this.activeDoor && this.viewMode === 'portfolio') {
            this._introOverview = {
                camPos: new THREE.Vector3(0, 3.0, 28.5),
                target: new THREE.Vector3(0, 1.6, 0)
            };
            this._priorMaxDistance = this.controls.maxDistance;
            this.controls.maxDistance = Math.max(this._priorMaxDistance, INTRO_HEIGHT + 60);
            this.camera.position.set(this._introOverview.camPos.x, INTRO_HEIGHT, this._introOverview.camPos.z);
            this.controls.target.copy(this._introOverview.target);
            this.camera.lookAt(this._introOverview.target);
            this._doorsReady = true;
            this._maybeStartIntro();
        }
    }

    // Same ring positions as the other two views (layoutForest() shares
    // layout.js's BASE_RADIUS/RING_SPACING), populated with trees instead of
    // doors or paintings. Trees join this.doors with isTree: true so they get
    // clearDoors() teardown and the fade-out/grow-in transition for free, same
    // as every other view -- see the guards for d.isTree in onClick() and the
    // billboard loop in animate(), which are what keep a tree from being treated
    // like a clickable, camera-facing door once it's sitting in that array.
    buildForest() {
        layoutForest().forEach(({ species, x, z, angle, seed, scale }) => {
            const group = createTree(species, { seed, scale });
            const groundY = getForestElevation(x, z);
            group.position.set(x, groundY, z);
            group.rotation.y = angle; // faces outward from centre, not the camera
            this.scene.add(group);

            this.doors.push({
                group,
                isTree: true,
                isOpen: false,
                swayGroup: group.userData.swayGroup,
                swayAmplitude: group.userData.swayAmplitude,
                swayFreqMult: group.userData.swayFreqMult,
                swayPhase: Math.sin(seed * 12.9898) * Math.PI, // deterministic, not Math.random()
            });
        });

        // Floor cover: one static grass field plus a scatter of shrubs
        const { grass, shrubs } = createForestFloor();
        this.scene.add(grass);
        this.doors.push({ group: grass, isTree: true, isOpen: false });
        shrubs.forEach((shrub) => {
            const groundY = getForestElevation(shrub.position.x, shrub.position.z);
            shrub.position.y = groundY;
            this.scene.add(shrub);
            this.doors.push({
                group: shrub,
                isTree: true,
                isOpen: false,
                swayGroup: shrub.userData.swayGroup,
                swayAmplitude: shrub.userData.swayAmplitude,
                swayFreqMult: shrub.userData.swayFreqMult,
                swayPhase: Math.sin(shrub.userData.seed * 12.9898) * Math.PI,
            });
        });

        this._hoverTargets = null; // trees carry no portalHitbox, so nothing new to add here
    }

    // Fly to a painting and centre it, framed so the whole work is on screen.
    // Nothing opens — there is no portal behind a painting.
    focusPainting(door) {
        if (this.isTraveling || this._switching) return;
        this.dismissIntro();
        // The one work being looked at earns the 1200px master, ahead of the queue,
        // and is protected from eviction while it holds focus.
        requestTier(door, TIER.FULL, { urgent: true });

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

                loader.load(getAssetUrl(data.modelPath), (gltf) => {
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
        this._hoverTargets = null;   // rebuilt lazily on the next hover test
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
        for (let i = 0; i < 10; i++) {
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
            const speed = (i % 2 === 0 ? 1 : -1) * (0.0005 + (i * 0.00008));
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

        // A single red rose stands in for the cone/sculpture in forest mode --
        // built once and toggled visible like the other two, not rebuilt per
        // view switch.
        this.roseCenterpiece = createRoseCenterpiece();
        this.roseCenterpiece.visible = false;
        this.scene.add(this.roseCenterpiece);
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

    // Vertical FOV that holds the horizontal field steady on narrow screens.
    _fovForAspect(aspect) {
        const base = CONFIG.scene.camera.fov;
        const REF = 4 / 3;                      // at or above this, use the design FOV
        if (aspect >= REF) return base;
        const halfV = THREE.MathUtils.degToRad(base) / 2;
        const halfH = Math.atan(Math.tan(halfV) * REF);          // horizontal field to preserve
        const halfVNew = Math.atan(Math.tan(halfH) / Math.max(aspect, 0.35));
        return THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(halfVNew) * 2, base, 58);
    }

    applyCameraFraming() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera.aspect = aspect;
        this.camera.fov = this._fovForAspect(aspect);
        this.camera.updateProjectionMatrix();
    }

    onResize() {
        this.applyCameraFraming();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
        // A phone turned on its side changes how much gallery fits; re-frame the
        // overview so the rings stay composed instead of drifting off-screen.
        if (!this.activeDoor && !this.isTraveling && this.controls) {
            const overview = this.getDefaultOverview();
            this.camera.position.copy(overview.camPos);
            this.controls.target.copy(overview.target);
        }
    }

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this._hoverDirty = true;
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
            if (!this.motionPaused) this.sunAngle += this.daySpeed * 6.0 * dt;

            // Calculate astronomically accurate Toronto solar & lunar coordinates for August
            const sky = this.skySystem.update(this.sunAngle, this.elapsed, this.sunDist);
            this._sky = sky;

            this.sunMesh.position.copy(sky.cel.sunPos);
            this.moonMesh.position.copy(sky.cel.moonPos);

            // Light position placed at ~350m along exact same direction vector for high shadow precision
            _sunDirScratch.copy(sky.cel.sunPos).normalize().multiplyScalar(350);
            _moonDirScratch.copy(sky.cel.moonPos).normalize().multiplyScalar(350);
            this.sunLight.position.copy(_sunDirScratch);
            this.moonLight.position.copy(_moonDirScratch);

            this.moonMesh.lookAt(0, 0, 0);

            // Fade out moon / sun when they set behind the earth horizon so they are always behind the ground plane
            const moonFade = THREE.MathUtils.smoothstep(sky.cel.moonAlt, 0.00, 0.06);
            this.moonMesh.material.opacity = moonFade;
            this.moonMesh.visible = moonFade > 0.001;

            const sunFade = THREE.MathUtils.smoothstep(sky.cel.sunAlt, 0.00, 0.06);
            this.sunMesh.material.opacity = sunFade;
            this.sunMesh.visible = sunFade > 0.001;

            // True solar / lunar altitude checks
            // True solar / lunar altitude checks
            const isSunActive = sky.sunAlt > 0.01;

            if (isSunActive) {
                // Daytime: sunLight is active and casts crisp, warm shadows
                this.sunLight.intensity = Math.max(1.8, sky.sH * 2.2);
                this.sunLight.castShadow = true;
                this.moonLight.intensity = 0;
                this.moonLight.castShadow = false;
            } else {
                // Nighttime: moonlight is ALWAYS active and casts crisp, cool nocturnal shadows across everything!
                this.sunLight.intensity = 0;
                this.sunLight.castShadow = false;
                this.moonLight.intensity = Math.max(1.35, sky.mH * 1.8);
                this.moonLight.castShadow = true;

                // Ensure night shadow-casting light is well elevated (minimum altitude angle)
                // so long, crisp shadows stretch across trees, rose, and terrain even if astronomical moon is low
                const moonX = sky.cel.moonPos.x || 120;
                const moonZ = sky.cel.moonPos.z || 120;
                const elevY = Math.max(160, Math.abs(sky.cel.moonPos.y));
                _moonDirScratch.set(moonX, elevY, moonZ).normalize().multiplyScalar(320);
                this.moonLight.position.copy(_moonDirScratch);
            }

            const angleMod = ((this.sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
            const transitionZone = Math.PI / 3;

            if (angleMod >= 0 && angleMod <= Math.PI) {
                const riseEnd = transitionZone;
                const sunsetStart = Math.PI - transitionZone;
                if (angleMod < riseEnd || angleMod > sunsetStart) {
                    const t = angleMod < riseEnd
                        ? 1.0 - (angleMod / riseEnd)
                        : (angleMod - sunsetStart) / transitionZone;
                    const lowTint = angleMod < riseEnd ? C_SUNLIGHT_DAWN : C_SUNLIGHT_LOW;
                    this.sunMesh.material.color.lerpColors(C_SUN_HIGH, C_SUN_LOW, t);
                    this.sunLight.color.lerpColors(C_SUNLIGHT_HIGH, lowTint, t);
                } else {
                    this.sunMesh.material.color.copy(C_SUN_HIGH);
                    this.sunLight.color.copy(C_SUNLIGHT_HIGH);
                }
            }

            if (angleMod > Math.PI && angleMod < Math.PI * 2) {
                const riseEnd = Math.PI + transitionZone;
                const moonSetStart = (Math.PI * 2) - transitionZone;
                if (angleMod < riseEnd || angleMod > moonSetStart) {
                    const t = angleMod < riseEnd
                        ? 1.0 - ((angleMod - Math.PI) / transitionZone)
                        : (angleMod - moonSetStart) / transitionZone;
                    this.moonMesh.material.color.lerpColors(C_MOON_HIGH, C_MOON_LOW, t);
                    this.moonMesh.material.emissive.copy(this.moonMesh.material.color);
                    this.moonLight.color.lerpColors(C_MOONLIGHT_HIGH, C_MOONLIGHT_LOW, t);
                } else {
                    this.moonMesh.material.color.copy(C_MOON_HIGH);
                    this.moonMesh.material.emissive.copy(C_MOON_EMISSIVE);
                    this.moonLight.color.copy(C_MOONLIGHT_HIGH);
                }
            }

            // Atmospheric sky progression & horizon color grading
            // 1 through sunrise, 0 through sunset, smooth across the day between.
            const riseFactor = Math.cos(angleMod) * 0.5 + 0.5;
            _twiZenith.lerpColors(C_DUSK_ZENITH, C_DAWN_ZENITH, riseFactor);
            _twiHorizon.lerpColors(C_DUSK_HORIZON, C_DAWN_HORIZON, riseFactor);

            if (sky.sunAlt > 0.10) {
                _skyColScratch.copy(C_DAY_ZENITH);
                _horizColScratch.copy(C_DAY_HORIZON);
            } else if (sky.sunAlt > -0.04) {
                const t = (0.10 - sky.sunAlt) / 0.14;
                _skyColScratch.lerpColors(C_DAY_ZENITH, _twiZenith, t);
                _horizColScratch.lerpColors(C_DAY_HORIZON, _twiHorizon, t);
            } else {
                const t = Math.min(1.0, (-0.04 - sky.sunAlt) / 0.16);
                _skyColScratch.lerpColors(_twiZenith, C_NIGHT_ZENITH, t);
                _horizColScratch.lerpColors(_twiHorizon, C_NIGHT_HORIZON, t);
            }

            if (this.skySystem && this.skySystem.skyDomeMat) {
                this.skySystem.skyDomeMat.uniforms.uZenithColor.value.copy(_skyColScratch);
                this.skySystem.skyDomeMat.uniforms.uHorizonColor.value.copy(_horizColScratch);
            }

            this.scene.background = null;
            if (this.scene.fog) this.scene.fog.color.copy(_horizColScratch);

            // Ambient sky & earth bounce light: maintains ground and sculpture visibility while keeping shadows deep
            const hemiGroundNight = this.viewMode === 'forest' ? C_HEMI_FOREST_GROUND_NIGHT : C_HEMI_GROUND_NIGHT;
            const hemiGroundDay = this.viewMode === 'forest' ? C_HEMI_FOREST_GROUND_DAY : C_HEMI_GROUND_DAY;
            this.hemiLight.intensity = 0.07 + (sky.sH * 0.15) + (sky.mH * 0.12);
            this.hemiLight.color.lerpColors(C_HEMI_NIGHT, C_HEMI_DAY, sky.sH);
            this.hemiLight.groundColor.lerpColors(hemiGroundNight, hemiGroundDay, sky.sH);

            // Real-time floor color transition: Peak daytime -> Off-white; Midnight -> Royal navy blue
            // (forest mode swaps in the mossy palette above instead, same quadrant timing)
            if (this.groundMat) {
                const Q = Math.PI / 2;
                const inForest = this.viewMode === 'forest';
                const dawn = inForest ? C_FLOOR_FOREST_DAWN : C_FLOOR_DAWN;
                const noon = inForest ? C_FLOOR_FOREST_NOON : C_FLOOR_NOON;
                const twilight = inForest ? C_FLOOR_FOREST_TWILIGHT : C_FLOOR_TWILIGHT;
                const midnight = inForest ? C_FLOOR_FOREST_MIDNIGHT : C_FLOOR_MIDNIGHT;

                if (angleMod >= 0 && angleMod < Q) {
                    // Sunrise -> Noon
                    const t = angleMod / Q;
                    this.groundMat.color.lerpColors(dawn, noon, t);
                } else if (angleMod >= Q && angleMod < Math.PI) {
                    // Noon -> Sunset
                    const t = (angleMod - Q) / Q;
                    this.groundMat.color.lerpColors(noon, twilight, t);
                } else if (angleMod >= Math.PI && angleMod < Math.PI * 1.5) {
                    // Sunset -> Midnight
                    const t = (angleMod - Math.PI) / Q;
                    this.groundMat.color.lerpColors(twilight, midnight, t);
                } else {
                    // Midnight -> Sunrise
                    const t = (angleMod - Math.PI * 1.5) / Q;
                    this.groundMat.color.lerpColors(midnight, dawn, t);
                }
            }
        }
        // Gated on the same flag as the sky, and released at the same moment (see
        // _playIntroDescent): held still through the opening shot's static beat,
        // then spinning up in parallel with the camera the instant it starts
        // descending, rather than having been quietly turning underneath a shot
        // that was supposed to read as frozen. This also means the motion button's
        // "pause everything" now genuinely covers the rings, which it didn't before.
        if (!this.motionPaused && this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        if (this.rock && this.rock.visible) {
            if (this.viewMode === 'forest') {
                this.rock.visible = false;
            } else {
                this.rock.position.y = 0;
                this.rock.rotation.set(0, 0, 0); // Locked to ground
            }
        }
        // Universal camera rotation and velocity calculation
        const curCamAngle = Math.atan2(this.camera.position.x, this.camera.position.z);
        if (this._lastCamAngle === undefined) this._lastCamAngle = curCamAngle;
        let dAngle = curCamAngle - this._lastCamAngle;
        while (dAngle > Math.PI) dAngle -= Math.PI * 2;
        while (dAngle < -Math.PI) dAngle += Math.PI * 2;
        this._lastCamAngle = curCamAngle;

        const angularVelocity = dAngle / Math.max(0.001, dt);
        const angularSpeed = Math.abs(angularVelocity);

        if (!this._lastCamPos) this._lastCamPos = this.camera.position.clone();
        const camDeltaDist = this.camera.position.distanceTo(this._lastCamPos);
        this._lastCamPos.copy(this.camera.position);
        const camSpeed = camDeltaDist / Math.max(0.001, dt);

        // Wind engine: dead calm by default. ONLY triggers on fast rotation or drags.
        const rotStimulus = Math.max(0, angularSpeed - 0.28) * 1.6;
        const camStimulus = Math.max(0, (camSpeed - 2.2) * 0.12);
        const dragStimulus = this._isPointerDown ? Math.max(0, (this._pointerSpeed - 280) * 0.003) : 0;
        const targetForestMotion = Math.min(2.0, Math.max(rotStimulus, camStimulus, dragStimulus));

        if (this._forestDragMotion === undefined) this._forestDragMotion = 0;
        const lerpRate = targetForestMotion > this._forestDragMotion ? 0.22 : 0.045;
        this._forestDragMotion = THREE.MathUtils.lerp(this._forestDragMotion, targetForestMotion, lerpRate);
        if (this._forestDragMotion < 0.001) this._forestDragMotion = 0;

        if (this.roseCenterpiece && this.roseCenterpiece.visible) {
            this.roseCenterpiece.position.y = 0;
            this.roseCenterpiece.rotation.y = 0; // stem is locked; only the bloom sways
            const bloom = this.roseCenterpiece.userData.swayGroup;
            if (bloom) {
                const amp = this.roseCenterpiece.userData.swayAmplitude;
                const freq = this.roseCenterpiece.userData.swayFreqMult ?? 1;
                const motion = this._forestDragMotion;
                bloom.rotation.z = Math.sin(this.time * 24 * freq) * amp * motion;
                bloom.rotation.x = Math.cos(this.time * 18 * freq + 1.3) * amp * 0.6 * motion;
            }
            const motes = this.roseCenterpiece.userData.motes;
            if (motes) {
                motes.rotation.y = this.time * 0.25;
            }
        }
        if (this.viewMode === 'forest') {
            updateForestWind(this.time * 24, this._forestDragMotion * 0.85);
        }
        if (this.sculpture && this.sculpture.visible) {
            this.sculpture.position.y = 0;
            this.sculpture.rotation.set(0, 0, 0); // Locked into ground

            // Dynamic red thread 3D wave & jiggle physics linked to camera orbit, velocity and ambient breeze
            if (this.sculpture.userData && this.sculpture.userData.threadUniforms) {
                const u = this.sculpture.userData.threadUniforms;
                u.uTime.value = this.time;

                if (this._threadMotion === undefined) this._threadMotion = 0;
                const targetMotion = Math.min(1.8, angularSpeed * 1.3);
                const lerpSpeed = targetMotion > this._threadMotion ? 0.14 : 0.05;
                this._threadMotion = THREE.MathUtils.lerp(this._threadMotion, targetMotion, lerpSpeed);
                if (this._threadMotion < 0.0005) this._threadMotion = 0;
                u.uMotion.value = this._threadMotion;

                // 3D inertial ribbon drag vector trailing camera rotation direction
                const rotSign = Math.sign(angularVelocity) || 1.0;
                const tanX = -Math.sin(curCamAngle) * rotSign;
                const tanZ = Math.cos(curCamAngle) * rotSign;

                if (!this._threadDrag) this._threadDrag = new THREE.Vector2(0, 0);
                const targetDragX = tanX * Math.min(1.0, angularSpeed * 0.7);
                const targetDragZ = tanZ * Math.min(1.0, angularSpeed * 0.7);
                const dragLerpSpeed = angularSpeed > 0.01 ? 0.12 : 0.05;
                this._threadDrag.x = THREE.MathUtils.lerp(this._threadDrag.x, targetDragX, dragLerpSpeed);
                this._threadDrag.y = THREE.MathUtils.lerp(this._threadDrag.y, targetDragZ, dragLerpSpeed);
                if (this._threadDrag.lengthSq() < 0.0001) this._threadDrag.set(0, 0);
                if (u.uDrag) u.uDrag.value.copy(this._threadDrag);
            }
        }

        if (this.viewMode === 'portfolio' && this._sky) this.updatePaintingLight(this._sky);

        // Real-time 4-stage frame and ground circles material phasing (Gold -> Silver -> Metallic Black -> Bronze)
        updatePaintingFramesMaterial(this.sunAngle, this.ringMat);

        // Promote only what the visitor can actually see. The previous version gated on
        // a fixed 55m radius, which every ring falls inside once the collection passes
        // ~20 works — so it promoted the whole gallery to full resolution whether or not
        // anyone looked. Visibility is the real signal, and it keeps the LRU honest by
        // refreshing _lastSeen for on-screen work only.
        if (this.viewMode === 'portfolio' && (!this._lastTexCheck || nowMs - this._lastTexCheck > 200)) {
            this._lastTexCheck = nowMs;
            const camPos = this.camera.position;

            _projScreen.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse);
            _frustum.setFromProjectionMatrix(_projScreen);

            // Beyond a couple of rings a painting is a few pixels tall; the ring tier is
            // already more than it can resolve.
            const promoteWithin = RING_SPACING * 2.5;
            const visible = [];

            for (const d of this.doors) {
                if (!d.isPainting) continue;
                d.group.getWorldPosition(_doorWorldPos);
                if (!_frustum.containsPoint(_doorWorldPos)) continue;
                touchPainting(d);
                const dist = camPos.distanceTo(_doorWorldPos);
                if (dist < promoteWithin) visible.push({ door: d, dist });
            }

            visible.sort((a, b) => a.dist - b.dist);
            for (let i = 0; i < Math.min(visible.length, 3); i++) {
                requestTier(visible[i].door, TIER.MID);
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
            this.doors.forEach(d => {
                if (d.isTree) {
                    // A tree is real 3D geometry, not a camera-facing panel -- it
                    // should hold its planted orientation, not spin to face the
                    // viewer. Its canopy sways instead, one rigid mass rocking
                    // gently rather than a per-leaf ripple: right for something
                    // built from a handful of instanced blobs, not individual leaves.
                    if (d.swayGroup) {
                        // this.time advances by a flat 0.001/frame, not by real
                        // elapsed seconds (see animate(), a few lines up) -- these
                        // multipliers are chosen for a ~4-6s sway period at 60fps,
                        // not copied from the thread shader's much smaller ones,
                        // which read as barely-there specifically because they
                        // rely on camera-drag response for most of their visible
                        // motion rather than this base idle rate. swayFreqMult is
                        // per-species (peepal's leaves famously tremble faster than
                        // a heavier mango canopy does) and defaults to 1 for
                        // objects that don't set it, like shrubs.
                        // Trees are solid, grounded monuments with zero shaking
                        d.swayGroup.rotation.set(0, 0, 0);
                    }
                    return;
                }
                d.group.lookAt(this.camera.position.x, d.group.position.y, this.camera.position.z);
            });
        }

        if (this._hoverDirty) {
            this._hoverDirty = false;
            this.checkHover();
        }

        if (this.viewMode === 'forest') {
            this.controls.autoRotate = false;
        }

        this.controls.update();

        // Guaranteed ground floor clamp: camera stays above ground (>= 0.4m) while allowing low-angle upward sky gaze
        if (this.camera.position.y < 0.4) {
            this.camera.position.y = 0.4;
        }

        this.composer.render();
    }
}
new DuarApp();

// Service Worker Registration for Auto-Update (production only; dev unregisters to prevent stale caching)
if ('serviceWorker' in navigator) {
    if (import.meta.env.PROD) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(getAssetUrl('sw.js')).then(registration => {
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
} else {
    // Development mode: unregister any leftover service workers so Vite HMR and dynamic imports never get served stale caches
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const r of registrations) r.unregister();
    });
}
}
