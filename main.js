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
    getForestFloorTexture, FOREST_FLOOR_UV_SCALE, updateForestWind, updateForestLighting,
    forestWindUniforms, forestGroundUniforms, getForestElevation
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
const _walkForward = new THREE.Vector3();
const _walkRight = new THREE.Vector3();
const _walkDelta = new THREE.Vector3();
const WALK_SPEED = 8.0;       // m/s, ground plane -- a brisk jog, not a stroll
const WALK_BOOST = 2.6;       // Shift multiplier -- ~20.8 m/s sprint
const WALK_RADIUS = 95;       // stay inside the ground's alpha fade, which starts at r=105
// A quick hop, not a platformer leap -- there is nothing here to jump ONTO, so
// it is a traversal flourish, not a mechanic. Peak height and gravity chosen
// together for a snappy, satisfying landing rather than a floaty arc: real-
// world gravity (9.8) at this velocity feels slow and heavy at human scale.
const JUMP_VELOCITY = 4.3;    // m/s, upward, on launch
const JUMP_GRAVITY = 11.0;    // m/s^2, downward -- peak ~0.84 m, ~0.78 s airtime

// Forest arrival. Trees used to be timed to trail an outward ground wave
// (0.3 + dist/120 * 3.0 s of delay, then 4.2 s of growth): up to ~7 s before
// the farthest tree settled. With the wave gone that delay had no reason to
// exist, so the spread is now a short radial stagger and the growth itself is
// a little quicker. Still one eased scale, no overshoot.
const FOREST_GROW_DURATION = 3.0;  // s, per tree
const FOREST_GROW_SPREAD = 0.6;    // s, nearest-to-farthest start stagger
// Per-frame budget for creating trees. Building all ~50 synchronously landed in
// a single rAF task right after clearDoors(), the 94-117 ms handler violations.
const FOREST_BUILD_FRAME_MS = 6;

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
// The horizon opposite the sun. At dusk this is the cool dusty band that sits
// behind the viewer while the west burns -- without it the sky is uniformly
// orange all the way round, which is the tell of a procedural sunset.
const C_DAY_HORIZON_OPP = new THREE.Color(0x5580ab);
const C_DAWN_HORIZON_OPP = new THREE.Color(0x4a4a72);
const C_DUSK_HORIZON_OPP = new THREE.Color(0x3d3a60);
const _twiHorizonOpp = new THREE.Color();
const _horizOppScratch = new THREE.Color();

const C_NIGHT_ZENITH = new THREE.Color(0x000000);
const C_NIGHT_HORIZON = new THREE.Color(0x000000);
const C_FOREST_FOG_DAY = new THREE.Color(0xa2c49c);
const C_FOREST_FOG_NIGHT = new THREE.Color(0x0e1b12);
const _forestFogScratch = new THREE.Color();

// Sun / moon disc and light tints across rise and set.
const C_SUN_HIGH = new THREE.Color(0xfffde8);
const C_SUN_LOW = new THREE.Color(0xff8a34);          // deep sunset disc
const C_SUNLIGHT_HIGH = new THREE.Color(0xfff2c8);
const C_SUNLIGHT_LOW = new THREE.Color(0xe8722a);     // low evening sun, properly hot
const C_SUNLIGHT_DAWN = new THREE.Color(0xea9a80);    // low morning sun, cooler and pinker
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
// Earth bounce, desaturated to match the floor map. A saturated green here
// tints every trunk and underside in the scene green from below.
// Peak ambient breeze fed to the foliage wind shader. The drag-driven term adds
// to this, so it is set for the resting state rather than the maximum.
const AMBIENT_WIND_STRENGTH = 0.34;

const C_HEMI_FOREST_GROUND_NIGHT = new THREE.Color(0x0a0d0a);
const C_HEMI_FOREST_GROUND_DAY = new THREE.Color(0x232616);

// Floor across the 24-hour cycle.
const C_FLOOR_NOON = new THREE.Color(0x68645e);
const C_FLOOR_TWILIGHT = new THREE.Color(0x202834);
const C_FLOOR_MIDNIGHT = new THREE.Color(0x0a1424);
const C_FLOOR_DAWN = new THREE.Color(0x323034);

// Plain deep organic meadow moss floor color across the day/night cycle
// The floor is a photographed forest scan now, and this ramp multiplies it, so
// it carries the light of the hour rather than a colour of its own. Anything
// saturated here would tint a photograph and undo the reason for using one.
const C_FLOOR_FOREST_NOON = new THREE.Color(0xe8e4d8);
const C_FLOOR_FOREST_TWILIGHT = new THREE.Color(0x7d6f60);
const C_FLOOR_FOREST_MIDNIGHT = new THREE.Color(0x141a26);
const C_FLOOR_FOREST_DAWN = new THREE.Color(0xb8a488);

// Floor ring ribbon. Door mode and paintings mode are the same geometry at different wave
// amplitudes, which lets switchView morph between them instead of swapping buffers.
// The resting speed of the sky: slow enough to read as atmosphere, not animation.
const AMBIENT_DAY_SPEED = 0.025;
// The grove is entered at a fixed hour rather than wherever the cycle happened
// to be, so it always opens the same way. Math.PI/2 is noon -- the same value
// the dock's Day button sets, so the two agree. Lower it toward ~PI*0.35 for a
// raking mid-morning sun with longer shadows.
const FOREST_ENTRY_SUN_ANGLE = Math.PI / 2;
const FOREST_ENTRY_TWEEN = 2.2;   // seconds to ease there

// Reused each frame for the forest's key-light direction; allocating a vector
// per frame here is exactly the GC pressure the render loop cannot afford.
const _keyLightDir = new THREE.Vector3();

// Ambient orbit speed per view. Forest is slower: the camera sits inside a grove
// rather than outside a ring of objects, so the same angular rate reads as much
// faster against nearby trunks.
const ROTATE_SPEED_FOR = { default: -0.8, portfolio: -0.8, forest: -0.28 };

// Which object sits at the centre of each view. Used by both the click router
// and switchView's show/hide, so the thing you click to change worlds and the
// thing that gets swapped in cannot drift apart.
const CENTREPIECE_FOR = (app) => ({
    default: app.rock,
    portfolio: app.sculpture,
    forest: app.roseCenterpiece,
});

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
        { id: "portfolio", label: "PORTFOLIO", type: "rustic_wood", modelPath: null, position: [-10, 0, -6], rotation: [0, 0.4, 0], destinationUrl: "", animation: "creakOpen", color: 0xffaa88, particles: "leaves" },
        { id: "blog", label: "BLOG", type: "scifi_portal", modelPath: null, position: [-5, 0, -9], rotation: [0, 0.2, 0], destinationUrl: "/blog", animation: "slideUp", color: 0x88ccff, particles: "tech" },
        { id: "projects", label: "PROJECTS", type: "iron_gate", modelPath: null, position: [0, 0, -10], rotation: [0, 0, 0], destinationUrl: "https://waveism.duar.one", animation: "swingBoth", color: 0xffeeaa, particles: "sparks" },
        { id: "contact", label: "CONTACT", type: "stone_arch", modelPath: null, position: [5, 0, -9], rotation: [0, -0.2, 0], destinationUrl: "/about/", animation: "dissolveField", color: 0xcc88ff, particles: "runes" },
        { id: "about", label: "ABOUT", type: "shoji_screen", modelPath: null, position: [10, 0, -6], rotation: [0, -0.4, 0], destinationUrl: "/about/", animation: "slideRight", color: 0xff88aa, particles: "petals" }
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
        this.isFlying = false;
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
        // In portfolio view and forest view, the dot, ring and "Enter" caption are hidden —
        // a work or botanical specimen is inspected, leaving only the cross to exit.
        const art = this.viewMode === 'portfolio' || this.viewMode === 'forest';
        reticle.classList.toggle('art-mode', art);
        if (art) {
            // The title element keeps whatever door was last opened in the default
            // view; without clearing it, a stale "duar-੯" floats over the scene.
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
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', overwrite: true }
        );

        // Show persistent title pill at the top in focus mode
        if (art && this.activeDoor) {
            const popup = document.getElementById('painting-popup');
            const titleSpan = popup?.querySelector('.popup-title-text');
            const metaDiv = popup?.querySelector('.popup-card-meta');
            const descDiv = popup?.querySelector('.popup-card-desc');

            if (popup && titleSpan) {
                if (this.activeDoor.data) {
                    const p = this.activeDoor.data;
                    titleSpan.textContent = p.title || 'Untitled';

                    // Verbatim dimensions, year and medium provided
                    const metaParts = [];
                    if (p.year) metaParts.push(`${p.year}`);
                    if (p.widthIn && p.heightIn) metaParts.push(`${p.widthIn}×${p.heightIn} in`);
                    if (p.medium) metaParts.push(p.medium);

                    if (metaDiv) metaDiv.textContent = metaParts.join('  ·  ');
                    if (descDiv) descDiv.textContent = p.description || '';
                } else if (this.activeDoor.isTree || this.activeDoor.isRose || this.activeDoor.isFlora) {
                    titleSpan.textContent = this.activeDoor.title || this.activeDoor.name || 'Botanical Flora';
                    if (metaDiv) metaDiv.textContent = this.activeDoor.meta || '';
                    if (descDiv) descDiv.textContent = this.activeDoor.description || '';
                }

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
            opacity: 0, scale: 0.85, duration: 0.3, ease: 'power2.in', overwrite: true,
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

        // A second, stricter tier for genuinely small/low-memory phones, not
        // every tablet or mid-range phone that also matches isMobile. UA
        // sniffing alone can't tell a current flagship from a 2019 budget
        // phone; combining a narrow viewport with deviceMemory (Chrome/Android
        // only, undefined on iOS — treated as "unknown, assume capable" rather
        // than false, since a false positive here only costs conservatism, a
        // false negative on real hardware costs a crash) catches most of the
        // devices actually at risk without needing a device database.
        const isSmallPhone = isMobile && (
            window.innerWidth <= 390 ||
            (navigator.deviceMemory !== undefined && navigator.deviceMemory <= 4)
        );
        this.isSmallPhone = isSmallPhone;
        // Touch UI (the walk pad) keys off the primary pointer, not isMobile:
        // iPadOS Safari reports a desktop Mac user agent and a >=768px width,
        // so it passes neither isMobile test while having no keyboard to WASD with.
        this.isTouch = isMobile || window.matchMedia('(pointer: coarse)').matches;

        // One tier object, derived once. Scattered `isMobile` checks drift out
        // of agreement as a scene grows; this is the single place cost scales
        // with device class. Scale what dominates cost (geometry, shadow
        // resolution, pixel fill) rather than hiding content — the same grove
        // with fewer trees is fine, a different grove is a maintenance burden.
        this.quality = {
            pixelRatioCap: isSmallPhone ? 1.0 : (isMobile ? 1.5 : 2.0),
            shadowMapSize: isSmallPhone ? 512 : (isMobile ? 1024 : 3072),
            treeCountScale: isSmallPhone ? 0.5 : 1.0,
            secondaryShadowLights: !isSmallPhone, // e.g. the rose's dedicated caster
        };

        this.renderer = new THREE.WebGLRenderer({
            antialias: !isMobile, // Hardware MSAA on mobile postprocessing causes heavy bandwidth & heat
            powerPreference: "high-performance",
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.quality.pixelRatioCap));

        // Without this, a lost context reads as a crash: the canvas goes
        // permanently black with nothing telling the visitor why. Mobile Safari
        // discards a WebGL context under memory pressure well before the tab
        // itself is killed, and a scene this size (8M+ triangles, several
        // hundred MB of texture and shadow-map residency once every species is
        // loaded) is exactly the kind that trips it on a small phone.
        //
        // Full in-place reconstruction (rebuilding every geometry, material,
        // and texture from scratch on 'webglcontextrestored') is a large,
        // fragile surface for a scene this size to get right, and a wrong
        // partial rebuild is worse than a clear reload. A reload is cheap here:
        // the service worker's shell cache serves the HTML/JS instantly, and
        // heavy assets are cached under their own versioned entries (see
        // sw.js), so restart cost is a fraction of the original load.
        this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault(); // required, or 'webglcontextrestored' never fires
            if (this._rafId) cancelAnimationFrame(this._rafId);
            console.warn('WebGL context lost — pausing render loop.');
        });
        this.renderer.domElement.addEventListener('webglcontextrestored', () => {
            window.location.reload();
        });

        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // Slightly hotter than neutral so the midtones survive the reduced fill
        // below. ACES rolls the highlights off, so this buys contrast rather than
        // clipping.
        this.renderer.toneMappingExposure = 1.08;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap; // Ultra-realistic contact shadows
        this.renderer.shadowMap.autoUpdate = false;
        this.renderer.shadowMap.needsUpdate = true;
        this.container.appendChild(this.renderer.domElement);

        this.renderer.setClearColor(0x000000, 1); // Stay black initially

        // Image-Based Lighting environment map for realistic chrome/gold/silver/bronze metal reflections
        try {
            const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
            pmremGenerator.compileEquirectangularShader();
            const envScene = new RoomEnvironment();
            this.scene.environment = pmremGenerator.fromScene(envScene).texture;
            // The env map is here for metal reflections, but at 0.35 it was also
            // pouring diffuse irradiance into every shadowed leaf, trunk and
            // blade -- lifting exactly the surfaces a shadow is supposed to
            // darken, and by the same amount everywhere, which is what flattens
            // contrast. Cut to a third; the four metallic materials that
            // genuinely need it carry a matching envMapIntensity so their
            // reflections are unchanged.
            this.scene.environmentIntensity = 0.13;
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

        // WASD walking, any view, while walk mode is on (dock toggle; see
        // setWalkEnabled and _applyWalk). Key state is recorded always and
        // gated at apply-time, so a keyup that arrives while walking is off
        // can't leave a key "stuck" down for the next time it's switched on.
        this.walkEnabled = false;
        this._walkKeys = { forward: false, back: false, left: false, right: false, boost: false };
        const WALK_KEYS = {
            KeyW: 'forward', ArrowUp: 'forward',
            KeyS: 'back', ArrowDown: 'back',
            KeyA: 'left', ArrowLeft: 'left',
            KeyD: 'right', ArrowRight: 'right',
            ShiftLeft: 'boost', ShiftRight: 'boost',
        };
        const isTypingTarget = (el) => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
        // Vertical: integrated once a frame in _applyJump, consuming this flag.
        // Not a held key like the WASD directions -- a single tap should be a
        // single hop, not a bunny-hop for as long as the key is down, so the
        // browser's key-repeat auto-fire (e.repeat) is ignored here.
        this._jumpVelocity = 0;
        this._jumpRequested = false;
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && this.walkEnabled && !e.repeat && !isTypingTarget(e.target)) {
                e.preventDefault(); // stops the page from scrolling on Space
                this._jumpRequested = true;
                this.dismissIntro();
                return;
            }
            const action = WALK_KEYS[e.code];
            if (!action || isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
            this._walkKeys[action] = true;
            // Only claim the key while walking is on; otherwise arrows keep
            // their normal meaning (e.g. scrolling the page's text content).
            if (this.walkEnabled) { e.preventDefault(); this.dismissIntro(); }
        });
        window.addEventListener('keyup', (e) => {
            const action = WALK_KEYS[e.code];
            if (action) this._walkKeys[action] = false;
        });
        // A window losing focus mid-press (alt-tab, a browser dialog) never
        // delivers the matching keyup -- without this the camera walks forever
        // in whatever direction was held at the moment of the switch.
        window.addEventListener('blur', () => {
            for (const k in this._walkKeys) this._walkKeys[k] = false;
        });
        // The touch pad writes its own state, OR-ed with the keys in animate(), so
        // lifting a thumb off the pad can't release a key held on a real keyboard.
        this._padKeys = { forward: false, back: false, left: false, right: false };
        this._setupWalkPad();
        this._updateWalkUI();

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
                /* A toggle that is on (walk mode): lit, not just hovered. */
                .glass-btn.is-on {
                    background: rgba(255, 255, 255, 0.18);
                    border-color: rgba(255, 255, 255, 0.38);
                    color: #ffffff;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28);
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
            walk: `<svg viewBox="0 0 24 24"><path d="M12 4v16M4 12h16M9.5 6.5 12 4l2.5 2.5M9.5 17.5 12 20l2.5-2.5M6.5 9.5 4 12l2.5 2.5M17.5 9.5 20 12l-2.5 2.5"/></svg>`, // Four-way move
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
        this.randBtn = randBtn;
        // Discover picks a random door or painting to jump to. The forest has
        // neither, so the button is dead weight there.
        randBtn.style.display = this.viewMode === 'forest' ? 'none' : 'inline-flex';

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
            // Taking manual control cancels the grove's claim on the pause, so
            // switching away later leaves the visitor's choice intact.
            this._motionPausedByForest = false;
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

        // Walk mode: WASD on a keyboard, the arrow pad on touch. Same toggle in
        // every view; see setWalkEnabled.
        const walkBtn = createBtn(icons.walk, () => this.setWalkEnabled(!this.walkEnabled),
            this.isTouch ? 'Walk' : 'Walk · WASD');
        walkBtn.setAttribute('aria-pressed', 'false');
        this.walkBtn = walkBtn;

        wrapper.append(homeBtn, motionBtn, walkBtn, randBtn, sunBtn, spiralBtn, moonBtn, modeBtn, instaBtn);
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
    // Ambient wind: a light breeze that lulls to nothing every so often and
    // then picks back up. Real wind is not a constant, and a canopy that sways
    // at a fixed rate forever is one of the things that reads as animation
    // rather than weather.
    //
    // Two independent parts. `_windGate` is the slow on/off envelope -- it holds
    // a state for a randomised stretch, then eases to the other one over several
    // seconds, so the stop and the restart are both gradual. On top of that sit
    // three detuned sines, which keep the strength wandering while it blows so
    // that even a steady stretch never repeats exactly.
    _updateWindEnvelope(dt) {
        if (this._windGate === undefined) {
            this._windGate = 1;        // current envelope, 0 = calm, 1 = breezy
            this._windGateTarget = 1;
            this._windHold = 30 + Math.random() * 30;
        }

        this._windHold -= dt;
        if (this._windHold <= 0) {
            const goingCalm = this._windGateTarget > 0.5;
            this._windGateTarget = goingCalm ? 0 : 1;
            // Breezy stretches run minutes, lulls run seconds. Cycling faster
            // than this stops reading as weather and starts reading as a loop.
            this._windHold = goingCalm ? (10 + Math.random() * 12) : (45 + Math.random() * 60);
        }

        // ~4 s to cross, framerate-independent. Slow enough that neither the
        // drop nor the return registers as a switch being thrown.
        const ease = 1 - Math.exp(-dt / 4.0);
        this._windGate += (this._windGateTarget - this._windGate) * ease;

        const t = this.time;
        const gust = 0.62
            + Math.sin(t * 0.23) * 0.20
            + Math.sin(t * 0.61 + 1.7) * 0.12
            + Math.sin(t * 1.13 + 4.2) * 0.06;

        // Deliberately small. This is a breeze in the leaves, not weather; the
        // drag-driven term still layers on top when the visitor spins the view.
        this._windAmbient = AMBIENT_WIND_STRENGTH * this._windGate * Math.max(0, gust);
    }

    updatePaintingLight(sky) {
        if (!this.doors.length) return;

        _sunUnit.copy(sky.cel.sunPos).normalize();
        _moonUnit.copy(sky.cel.moonPos).normalize();

        const sunUp = sky.sH;                       // 0 below the horizon, 1 overhead
        // Weighted by the same twilight crossfade the key lights use, so the
        // moon's contribution to the paintings rises as the sun's falls instead
        // of appearing whole the instant the sun clears a threshold.
        const moonUp = sky.mH * (1 - sky.sunW);
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

    // One meaning in every view: paused freezes all ambient motion (the sky
    // clock, the ground rings, the camera's orbit); playing resumes all of it.
    //
    // Forest mode used to force autoRotate off here whatever the button said, so
    // pressing play there did nothing visible and the icon claimed a state the
    // scene was not in. Not auto-rotating is a reasonable *default* on entering
    // forest, but it cannot be an override, or the control is lying.
    //
    // `rotation: false` still exists for the time buttons: winding the day
    // forward should move the sun without also setting the world spinning.
    setMotionPaused(paused, { rotation = true } = {}) {
        this.motionPaused = !!paused;
        if (rotation) {
            this.controls.autoRotate = !this.motionPaused;
            if (!this.motionPaused) {
                this.controls.autoRotateSpeed = ROTATE_SPEED_FOR[this.viewMode] ?? -0.8;
            }
        }

        // startedAt is never cleared after a press, so a stray pointerleave much
        // later can still be read as a long-press release. That release path sets
        // daySpeed, so pin it here where the intent is unambiguous.
        if (!this.motionPaused && this.daySpeed === 0) this.daySpeed = AMBIENT_DAY_SPEED;

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
        if (this.isTraveling || this.isFlying) return;
        try {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const hits = this.raycaster.intersectObjects(this.scene.children, true);
            console.log("Click hits:", hits.length, hits.map(h => h.object.type));

            let interactedWithObject = false;

            if (hits.length > 0) {
                const isCenterObj = (obj) => {
                    const centre = CENTREPIECE_FOR(this)[this.viewMode];
                    if (!centre) return false;
                    let p = obj;
                    while (p) {
                        if (p === centre) return true;
                        p = p.parent;
                    }
                    return false;
                };

                // Find if we hit the centrepiece or a door-related object
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
                        if (!this._switching) {
                            if (this.activeDoor) this._hideReticle();
                            this.switchView(nextViewMode(this.viewMode), { keepCamera: true });
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
                        // If moving from one active object to another, gently dismiss the existing pill/reticle
                        if (this.activeDoor && this.activeDoor !== door) {
                            this._hideReticle();
                        }

                        if (door.isTree) {
                            if (!door.isGrass && !door.isShrub) {
                                if (this.activeDoor === door && !this.isTraveling) {
                                    const popup = document.getElementById('painting-popup');
                                    if (popup) popup.classList.toggle('open');
                                } else {
                                    this.focusFlora(door);
                                }
                            }
                        } else if (door.isPainting) {
                            if (this.activeDoor === door && !this.isTraveling) {
                                const popup = document.getElementById('painting-popup');
                                if (popup) popup.classList.toggle('open');
                            } else {
                                this.focusPainting(door);
                            }
                        } else if (door.isOpen) {
                            this._refuseEntry();
                        } else {
                            this.toggleDoor(door);
                        }
                    }
                }
            }

            // Tapping anywhere else dismisses open popup or exits active focus or toggles UI
            if (!interactedWithObject) {
                const popup = document.getElementById('painting-popup');
                if (popup && popup.classList.contains('open')) {
                    popup.classList.remove('open');
                } else if (this.activeDoor && (this.activeDoor.isTree || this.activeDoor.isRose || this.activeDoor.isFlora || this.activeDoor.isPainting || this.activeDoor.isOpen)) {
                    this.resetScene();
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
        if (this.viewMode === 'forest') {
            for (const d of this.doors) {
                if (d.isTree && !d.isGrass && !d.isShrub && d.group) {
                    d.group.traverse(o => {
                        if (o.isMesh) {
                            this._hoverTargets.push(o);
                            this._hoverOwner.set(o, d);
                        }
                    });
                }
            }
            if (this.roseCenterpiece) {
                const targetRose = this.roseDoor || {
                    group: this.roseCenterpiece,
                    isRose: true,
                    isFlora: true,
                    title: 'Duar 3.0',
                    name: 'Duar 3.0',
                    meta: 'Floribunda Roses · Living Centerpiece',
                    description: 'A flourishing sacred bush of velvety ruby red roses resting peacefully at the sanctuary center.'
                };
                this.roseCenterpiece.traverse(o => {
                    if (o.isMesh && o.name !== 'ContactShadow') {
                        this._hoverTargets.push(o);
                        this._hoverOwner.set(o, targetRose);
                    }
                });
            }
            return;
        }
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
                // Respect the pause. Forcing rotation on here restarted a scene
                // the visitor had deliberately stopped -- and in the forest every
                // tree is a door, so any tree click silently undid the button.
                this.controls.autoRotate = !this.motionPaused;
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

            this.flyTo(pullCamPos, new THREE.Vector3(doorPos.x, 1.78, doorPos.z), 1.8, () => {
                this.controls.autoRotate = !this.motionPaused;
                this.controls.autoRotateSpeed = -0.6; // Clockwise
            });

            gsap.to(this.camera, {
                fov: this._fovForAspect(this.camera.aspect), duration: 1.8, ease: "power2.inOut",
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

    // Refreshes the (otherwise frozen, autoUpdate=false) shadow map a few times
    // a second for `duration` seconds, instead of every rendered frame.
    //
    // This exists because of two opposite failures, both from the same root
    // cause: shadow updates driven only by sunAngle drift (see animate()) have
    // no idea that a transition just populated the scene with new geometry.
    //
    // Forest mode used to paper over it with `autoUpdate = true` for a fixed
    // window -- a full shadow re-render (two lights, up to 3072px) on every
    // single rendered frame, for several seconds, at the exact moment 50 trees
    // are being instantiated and their wind shaders compiled for the first
    // time. That is the dominant cause of "transitions are jittery": the two
    // most expensive things this app does were made to happen simultaneously,
    // repeatedly, for seconds at a stretch.
    //
    // Portfolio/default mode had no equivalent at all, so a freshly-grown
    // painting door sat with NO shadow -- the map still held the render from
    // before the door existed -- until the next incidental sunAngle drift
    // happened to cross the 0.008 threshold and refreshed it, at which point
    // the shadow would pop in fully formed, disconnected from the door's own
    // grow-in tween. That is "the first appearance of shadows is not smooth".
    // 5-6 refreshes a second during the grow-in window is enough for a shadow
    // growing under animated geometry to read as continuous, at a small
    // fraction of doing it every frame.
    _pulseShadowUpdates(duration, intervalMs = 175) {
        if (this._shadowPulseTween) this._shadowPulseTween.kill();
        let lastPulse = -Infinity;
        this._shadowPulseTween = gsap.to({}, {
            duration,
            onUpdate: () => {
                const now = performance.now();
                if (now - lastPulse >= intervalMs) {
                    lastPulse = now;
                    this.renderer.shadowMap.needsUpdate = true;
                }
            },
            onComplete: () => {
                // One last refresh at full settle, so nothing is left mid-grow.
                this.renderer.shadowMap.needsUpdate = true;
                this._shadowPulseTween = null;
            }
        });
    }

    // Smoothly fly the camera THROUGH space to `camPos` while aiming at `lookAt`.
    flyTo(camPos, lookAt, duration = 1.9, onArrive = null) {
        this.isFlying = true;
        this.controls.enabled = false;
        this.controls.autoRotate = false;
        this.controls.enableDamping = false;
        gsap.killTweensOf(this.camera.position);
        gsap.killTweensOf(this.controls.target);

        // Calculate a gentle elevation arc if terrain rises between start and end
        const startPos = this.camera.position.clone();
        let peakY = Math.max(startPos.y, camPos.y);
        if (this.viewMode === 'forest') {
            for (let i = 1; i < 8; i++) {
                const frac = i / 8;
                const sx = startPos.x * (1 - frac) + camPos.x * frac;
                const sz = startPos.z * (1 - frac) + camPos.z * frac;
                const gY = getForestElevation(sx, sz);
                if (gY + 1.2 > peakY) peakY = gY + 1.2;
            }
        }
        const needsArc = peakY > Math.max(startPos.y, camPos.y) + 0.15;

        if (needsArc) {
            gsap.to(this.camera.position, {
                x: camPos.x, z: camPos.z,
                duration, ease: "power2.inOut", overwrite: true
            });
            gsap.to(this.camera.position, {
                y: peakY, duration: duration * 0.45, ease: "sine.out",
                onComplete: () => {
                    gsap.to(this.camera.position, {
                        y: camPos.y, duration: duration * 0.55, ease: "sine.inOut"
                    });
                }
            });
        } else {
            gsap.to(this.camera.position, {
                x: camPos.x, y: camPos.y, z: camPos.z,
                duration, ease: "power2.inOut", overwrite: true
            });
        }

        gsap.to(this.controls.target, {
            x: lookAt.x, y: lookAt.y, z: lookAt.z,
            duration, ease: "power2.inOut", overwrite: true,
            onComplete: () => {
                this.controls.target.copy(lookAt);
                this.controls.enabled = true;
                this.controls.enableDamping = true;
                this.isFlying = false;
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

    // Drop whatever is focused (open door, painting, tree) without moving the
    // camera: the first half of resetScene(), which then flies home. Walking
    // uses it on its own -- pressing W while looking at a painting should let
    // you walk on from where you stand, not fly you back to the overview first.
    _releaseFocus() {
        this.closeAllDoors();

        // Restore all hidden trees on exiting full view smoothly
        if (this._occludedTrees && this._occludedTrees.size > 0) {
            this._occludedTrees.forEach(d => {
                if (d.group) {
                    d.group.visible = true;
                    const targetScale = d.scale || 1.0;
                    gsap.killTweensOf(d.group.scale);
                    gsap.to(d.group.scale, {
                        x: targetScale, y: targetScale, z: targetScale,
                        duration: 0.5, ease: 'power2.out'
                    });
                }
            });
            this._occludedTrees.clear();
        }

        // Hide reticle & focus popup
        this.activeDoor = null;
        this.daySpeed = AMBIENT_DAY_SPEED;    // back to ambient day/night speed
        this._hideReticle();
        this.setUIVisibility(true); // bring the dock back (door closing / returning to orbit)
    }

    resetScene(toHome = false) {
        const lastActivePainting = (!toHome && this.viewMode === 'portfolio' && this.activeDoor?.isPainting) ? this.activeDoor : null;
        const lastActiveFlora = (!toHome && this.viewMode === 'forest' && (this.activeDoor?.isTree || this.activeDoor?.isRose || this.activeDoor?.isFlora)) ? this.activeDoor : null;

        this._releaseFocus();

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
        } else if (lastActiveFlora) {
            // Step back into forest orbit, facing the center rose from the current vantage point
            const curAngle = Math.atan2(this.camera.position.x, this.camera.position.z);
            const r = 28.5;
            const y = 3.2;
            camPos = new THREE.Vector3(
                Math.sin(curAngle) * r,
                y,
                Math.cos(curAngle) * r
            );
            target = new THREE.Vector3(0, 1.6, 0);
        } else {
            const overview = this.getDefaultOverview();
            camPos = overview.camPos;
            target = overview.target;
        }

        this.flyTo(camPos, target, 1.8, () => {
            // Landing from a flight restores whatever the motion control says --
            // it does not decide for itself. Forcing rotation on here meant a
            // paused scene started spinning again after closing a painting, and
            // forcing it off in the forest meant it never resumed there at all.
            this.controls.autoRotate = !this.motionPaused;
            if (!this.motionPaused) {
                this.controls.autoRotateSpeed = ROTATE_SPEED_FOR[this.viewMode] ?? -0.8;
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
        // Ambient is the flattest possible fill -- it lifts lit and shadowed
        // surfaces by exactly the same amount, which is precisely what removes
        // contrast. Keep it barely present and let the hemisphere light, which
        // at least distinguishes sky from ground, do the filling.
        const ambient = new THREE.AmbientLight(0xfff5ea, 0.007);
        this.scene.add(ambient);
        this.hemiLight = new THREE.HemisphereLight(0xfff3d8, 0x221c16, 0.28);
        this.scene.add(this.hemiLight);

        // 85-unit half-frustum over 1536 texels is ~11 cm per texel -- coarser
        // than a leaf, so leaf-on-leaf shadows could not resolve at all. The
        // shadow map is cached rather than redrawn per frame, so a larger one
        // costs memory and an occasional rebuild rather than frame time.
        const shadowRes = this.quality.shadowMapSize;

        this.sunDist = 1600;
        this.sunLight = new THREE.DirectionalLight(0xfff2c8, 3.3); // Warm solar light
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.set(shadowRes, shadowRes);
        this.sunLight.shadow.camera.near = 10.0;
        this.sunLight.shadow.camera.far = 650;
        const d = 85; // Covers all 21 trees and their long slanting shadows across the terrain
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.camera.updateProjectionMatrix();
        this.sunLight.shadow.bias = -0.0001;      // finer texels need less bias
        this.sunLight.shadow.normalBias = 0.018;
        this.sunLight.shadow.radius = 0.9;       // and less blur to hide them
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
        this.moonLight.shadow.camera.near = 10.0;
        this.moonLight.shadow.camera.far = 650;
        this.moonLight.shadow.camera.left = -d;
        this.moonLight.shadow.camera.right = d;
        this.moonLight.shadow.camera.top = d;
        this.moonLight.shadow.camera.bottom = -d;
        this.moonLight.shadow.camera.updateProjectionMatrix();
        this.moonLight.shadow.bias = -0.0001;     // matches the sun: same map size,
        this.moonLight.shadow.normalBias = 0.018; // so the same bias is correct
        this.moonLight.shadow.radius = 1.2;
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
            side: THREE.DoubleSide,
            transparent: true,
            depthWrite: true,
            polygonOffset: true,
            polygonOffsetFactor: 1, // Push back
            polygonOffsetUnits: 1
        });

        this.groundMat.onBeforeCompile = (shader) => {
            shader.uniforms.uForestActive = forestGroundUniforms.uForestActive;

            shader.vertexShader = `
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;
            \n` + shader.vertexShader;

            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                #include <begin_vertex>
                float rDist = length(position.xy);

                // Uneven organic forest terrain topography (matches getForestElevation).
                // uForestActive gates this, and ONLY this now: it is what makes
                // the ground undulate to meet the trees, which getForestElevation
                // places on the same surface. The outward emergence ripple that
                // used to ride on it has been removed.
                float worldZ = -position.y;
                float clearingFactor = smoothstep(1.5, 12.0, rDist);
                float hill1 = sin(position.x * 0.045 + 0.5) * cos(worldZ * 0.040 + 0.8) * 0.65;
                float hill2 = sin(position.x * 0.095 - worldZ * 0.08) * 0.35;
                float hill3 = cos(position.x * 0.18 + worldZ * 0.15) * 0.18;
                float micro = sin(position.x * 0.38) * cos(worldZ * 0.35) * 0.08;
                float terrainHeight = (hill1 + hill2 + hill3 + micro) * clearingFactor * uForestActive;

                transformed.z += terrainHeight;
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
                uniform float uForestActive;
                varying vec3 vGroundWorldPos;

                // Fast organic 2D procedural noise for natural terrain texturing
                float groundHash(vec2 p) {
                    vec2 q = fract(p * vec2(123.34, 456.21));
                    q += dot(q, q + 45.32);
                    return fract(q.x * q.y);
                }

                float groundNoise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(
                        mix(groundHash(i + vec2(0.0, 0.0)), groundHash(i + vec2(1.0, 0.0)), u.x),
                        mix(groundHash(i + vec2(0.0, 1.0)), groundHash(i + vec2(1.0, 1.0)), u.x),
                        u.y
                    );
                }

                float groundFbm(vec2 p) {
                    float v = groundNoise(p) * 0.55;
                    p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.02 + vec2(3.1, 7.4);
                    v += groundNoise(p) * 0.30;
                    p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.05 + vec2(1.7, 4.3);
                    v += groundNoise(p) * 0.15;
                    return v;
                }
            \n` + shader.fragmentShader;

            // Multi-scale organic detiled floor sampling.
            // Eliminates periodic grid artifacts using 3 non-periodic texture samples
            // with irrational rotations and FBM continuous noise blending.
            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #ifdef USE_MAP
                    vec2 baseUV = vGroundWorldPos.xz * ${FOREST_FLOOR_UV_SCALE.toFixed(6)};

                    // Three non-periodic sample coordinates at irrational rotation angles and scales
                    vec2 uv1 = baseUV;
                    vec2 uv2 = mat2(0.7071, -0.7071, 0.7071, 0.7071) * (baseUV * 1.37) + vec2(12.34, 56.78);
                    vec2 uv3 = mat2(0.8660, 0.5000, -0.5000, 0.8660) * (baseUV * 0.618) + vec2(91.23, 34.56);

                    // Organic blend masks derived from multi-octave continuous noise
                    float n1 = groundFbm(vGroundWorldPos.xz * 0.055);
                    float n2 = groundFbm(vGroundWorldPos.xz * 0.028 + vec2(15.7, 82.3));

                    // Smooth 3-way partition weights with zero repeating grid lines
                    float w1 = smoothstep(0.20, 0.75, n1);
                    float w2 = smoothstep(0.25, 0.80, n2) * (1.0 - w1 * 0.7);
                    float w3 = max(0.001, 1.0 - (w1 + w2));
                    float totalW = w1 + w2 + w3;
                    w1 /= totalW; w2 /= totalW; w3 /= totalW;

                    vec4 col1 = texture2D(map, uv1);
                    vec4 col2 = texture2D(map, uv2);
                    vec4 col3 = texture2D(map, uv3);

                    vec4 floorColor = col1 * w1 + col2 * w2 + col3 * w3;

                    // Subtle ecological color modulation across the terrain:
                    // Damp rich soil pockets, warm dry foliage patches, mossy undertones
                    float bioPatch = groundFbm(vGroundWorldPos.xz * 0.012 + vec2(43.1, 19.5));
                    vec3 dampHumus = vec3(0.88, 0.85, 0.80);
                    vec3 mossGreen = vec3(1.02, 1.09, 0.93);
                    vec3 dryLeaves = vec3(1.07, 1.02, 0.92);

                    vec3 biomeTint = mix(dampHumus, mix(mossGreen, dryLeaves, smoothstep(0.40, 0.70, bioPatch)), smoothstep(0.25, 0.55, bioPatch));
                    floorColor.rgb *= biomeTint;

                    diffuseColor *= floorColor;
                #endif
                `
            );

            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <dithering_fragment>',
                `
                #include <dithering_fragment>
                float r = length(vGroundWorldPos.xz);

                // Forest floor: soft horizon fog dissolve.
                if (uForestActive > 0.01) {
                    // Infinite horizon blend.
                    //
                    // Mixing to fogColor alone cannot hide the rim: fogColor is a
                    // single colour, while the sky's horizon is now warm toward
                    // the sun and cool away from it, so on the anti-sun side the
                    // matched edge met an unmatched sky and drew a line. Fading
                    // alpha instead lets the actual sky through, which matches by
                    // construction from every bearing. The colour mix is kept as
                    // a first stage so the dissolve starts before the fade does.
                    #ifdef USE_FOG
                    float edgeFog = smoothstep(70.0, 140.0, r);
                    gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, edgeFog);
                    #endif
                    float edgeAlpha = 1.0 - smoothstep(105.0, 149.5, r);
                    gl_FragColor.a *= edgeAlpha;
                    if (gl_FragColor.a <= 0.002) discard;
                } else {
                    // Natural planetary horizon illusion for gallery modes: solid ground for all paintings (r <= 112m), softly fades at perimeter
                    float edgeFade = 1.0 - smoothstep(112.0, 150.0, r);
                    gl_FragColor.a *= edgeFade;
                    if (gl_FragColor.a <= 0.002) discard;
                }
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
        if (this._occludedTrees) {
            this._occludedTrees.clear();
        }
        this.activeDoor = null;
        this.hoveredDoor = null;
        this._hideReticle();

        this.doors.forEach(door => {
            door.labelEl?.remove();
            releasePaintingTextures(door);

            // Forest trees are clones of page-lifetime GLB templates, and
            // Mesh.copy() shares geometry and material BY REFERENCE (r183). The
            // generic disposal below therefore freed the template's own GPU
            // buffers, shaders and texture maps every time the forest was left,
            // so every return trip re-uploaded ~62 MB of tree textures and all
            // their geometry and recompiled the wind/shading shaders -- a large,
            // avoidable cost landing squarely on the portfolio-to-forest switch.
            // The only thing a clone owns is its InstancedMesh instance buffer
            // (InstancedMesh.copy() gives each clone its own), which the generic
            // path never freed at all. Depth materials are shared too (see
            // sharedDepthMaterialFor in forest.js). Keyed on `species`, not just
            // isTree: grass and shrubs are flagged isTree too but own their
            // materials, so they still take the generic path below.
            if (door.isTree && door.species) {
                door.group.traverse(obj => { if (obj.isInstancedMesh) obj.dispose(); });
                this.scene.remove(door.group);
                return;
            }

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
    // `keepCamera` leaves the camera exactly where it is and only swaps what is
    // in the world. Clicking the centre object is a request to change the scene,
    // not to be moved somewhere else -- being flown back to a default overview
    // loses whatever the visitor had framed and makes the three views feel like
    // three separate pages rather than one place changing around you.
    async switchView(mode, { keepCamera = false } = {}) {
        if (this._switching || mode === this.viewMode) return;
        this._switching = true;
        const prevMode = this.viewMode;
        this.viewMode = mode;

        // Under keepCamera the switch must change the contents of the world and
        // nothing else. Each view wants its own minimum orbit distance, but
        // raising it while the camera sits closer makes OrbitControls shove the
        // camera outward on the next update -- a zoom change nobody asked for.
        // Lower the floor to wherever the viewer already is; it is a slightly
        // looser limit until they zoom out, which is invisible, where being
        // pushed backwards is not.
        this._minDistanceFloor = keepCamera
            ? this.camera.position.distanceTo(this.controls.target)
            : null;

        if (prevMode === 'forest' && mode !== 'forest') {
            // Undo the grove's pause on the way out, but only if the grove is what
            // set it. A visitor who pressed pause themselves stays paused --
            // otherwise leaving the forest would silently override their choice.
            gsap.killTweensOf(this, 'sunAngle');
            if (this._motionPausedByForest) {
                this._motionPausedByForest = false;
                this.setMotionPaused(false);
            }
        }

        if (this.instaBtn) {
            this.instaBtn.style.display = mode === 'portfolio' ? 'inline-flex' : 'none';
        }
        if (this.randBtn) {
            this.randBtn.style.display = mode === 'forest' ? 'none' : 'inline-flex';
        }
        this._updateWalkUI();
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
            // The grove opens at a fixed daylight hour, held still, however the
            // sky happened to be running in the view being left.
            //
            // Eased rather than snapped, and along the SHORT way round: the angle
            // is cyclic, so a plain tween from late evening to noon would wind
            // backwards through the whole night. Motion is paused first, which
            // stops animate() advancing sunAngle, so the tween owns it outright
            // and the two never fight over the same value.
            if (!this.motionPaused) {
                this._motionPausedByForest = true;
                this.setMotionPaused(true);
            }
            const TWO_PI = Math.PI * 2;
            const wrapped = (((FOREST_ENTRY_SUN_ANGLE - this.sunAngle) % TWO_PI) + TWO_PI) % TWO_PI;
            const delta = wrapped > Math.PI ? wrapped - TWO_PI : wrapped;
            gsap.killTweensOf(this, 'sunAngle');
            if (Math.abs(delta) > 1e-3) {
                gsap.to(this, {
                    sunAngle: this.sunAngle + delta,
                    duration: FOREST_ENTRY_TWEEN,
                    ease: 'power2.inOut',
                    overwrite: 'auto',
                });
            }

            // A default for the view, not an override -- setMotionPaused stays
            // the authority, so pressing play in the grove actually orbits.
            this.controls.autoRotate = !this.motionPaused;
            this.controls.autoRotateSpeed = ROTATE_SPEED_FOR.forest;
            this.controls.maxPolarAngle = Math.PI * 0.54; // Full horizon gaze restored
            this.controls.minDistance = Math.min(2.0, this._minDistanceFloor ?? 2.0);
            this.updateRingGeometries(false);
            gsap.to(this.bloomPass, { threshold: 0.98, strength: 0.08, duration: 0.6 });
        } else {
            if (!this.motionPaused) this.controls.autoRotate = true;
            this.controls.maxPolarAngle = Math.PI * 0.54;
            this.controls.minDistance = Math.min(0.5, this._minDistanceFloor ?? 0.5);
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
                this.groundMat.map = getForestFloorTexture();
                // Was false, which meant the rim alpha fade had no blending to
                // act through and the disc ended on a hard edge.
                this.groundMat.transparent = true;
                this.groundMat.polygonOffset = false;
                this.groundMat.roughness = 0.95;
                this.groundMat.metalness = 0.0;
                this.groundMat.needsUpdate = true;
            } else {
                this.groundMat.transparent = true;
                this.groundMat.polygonOffset = true;
                this.groundMat.polygonOffsetFactor = 1;
                this.groundMat.polygonOffsetUnits = 1;
                this.groundMat.roughness = 1.0;
                if (forestGroundUniforms.uForestActive.value > 0) {
                    gsap.to(forestGroundUniforms.uForestActive, {
                        value: 0.0,
                        duration: 0.5,
                        onComplete: () => {
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
            // This block's comment always said the forest gets deeper fog; the
            // value did not. At 0.002 a tree at the 150 m rim is only 9% fogged,
            // so the grove stayed crisp right up to the edge of the ground disc
            // and the disc's boundary read as a hard line against the sky.
            const targetDensity = mode === 'forest' ? 0.0075 : 0.002;
            gsap.to(this.scene.fog, { density: targetDensity, duration: 0.8 });
        }

        // One of three centrepieces is visible at a time: the chrome cone
        // (default), the ceramic sculpture (portfolio), or a single rose on a
        // stem (forest). _showCenterpiece/_hideCenterpiece just wrap the same
        // scale-in/scale-out tween for whichever objects need which today.
        const activeCenterpiece = CENTREPIECE_FOR(this)[mode];
        [this.rock, this.sculpture, this.roseCenterpiece].forEach((obj) => {
            if (obj === activeCenterpiece) this._showCenterpiece(obj);
            else this._hideCenterpiece(obj);
        });

        if (keepCamera) {
            // Only what genuinely belongs to the outgoing world is torn down. The
            // camera, the time-of-day speed, the pause state and whether the dock
            // is showing all belong to the viewer, not to the world, so none of
            // them are touched. resetScene() would reset all four.
            this.closeAllDoors();
            this.activeDoor = null;
            this._hideReticle();
            if (this.ringMat) gsap.to(this.ringMat, { opacity: 0.9, duration: 4.0, ease: 'power2.inOut' });
        } else {
            this.resetScene();
        }

        // This is the outgoing world dissolving, not the arrival -- unlike the
        // grow-in tweens below (deliberately slow, tuned earlier for a natural
        // feel and left alone here), nothing about this exit is a showcase
        // moment, and the whole switch is blocked on it finishing before the
        // next world starts building. At the old 0.5s/0.02s-stagger pace, the
        // worst case (51 painting doors, or 50 trees) took up to 1.5s just to
        // clear the stage. Tightened to worst-case ~0.87s.
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
                        duration: 0.32, ease: 'power2.in'
                    }, i * 0.011);
                });
        });

        this.clearDoors();

        if (mode === 'portfolio') await this.buildPortfolioDoors();
        else if (mode === 'forest') {
            // Terrain undulation only; the outward emergence wave is gone.
            forestGroundUniforms.uForestActive.value = 1.0;
            // Covers the farthest tree's start stagger, its growth, and the few
            // frames the progressive build itself is spread across.
            this._pulseShadowUpdates(FOREST_GROW_SPREAD + FOREST_GROW_DURATION + 0.5);
            // Each tree starts its own grow-in as it is created (see buildForest),
            // so there is no whole-forest pass here.
            await this.buildForest();
        }
        else this.setupDoors();

        // Forest trees start their own grow-in as buildForest() creates them.
        if (mode !== 'forest') {
            // Standard doors / paintings pop. Up to 51 painting doors staggered
            // by 0.045s each plus a 1.1s grow -- 3.35s worst case for the last
            // one. See _pulseShadowUpdates for why this needs the same
            // treatment forest mode gets: without it, a freshly grown door
            // casts no shadow until the next incidental sun-angle refresh, and
            // that shadow then pops in fully formed rather than growing in with
            // the door.
            this._pulseShadowUpdates(3.5);
            this.doors
                .slice()
                .sort((a, b) => a.group.position.lengthSq() - b.group.position.lengthSq())
                .forEach((door, i) => {
                    door.group.scale.setScalar(0.001);
                    gsap.to(door.group.scale, {
                        x: 1, y: 1, z: 1,
                        duration: 1.1, ease: 'back.out(1.05)', delay: i * 0.045
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
        // First load only. This block teleports the camera to INTRO_HEIGHT and
        // arms the opening crane; running it on a later switch snapped the view
        // 130 units into the sky, and because _maybeStartIntro() correctly
        // refuses to replay an intro it had already played, nothing ever brought
        // the camera back down -- it simply stayed up there. It also left
        // maxDistance raised to INTRO_HEIGHT + 60 permanently.
        //
        // Re-entering the gallery later is an ordinary view change, and gets the
        // ordinary smooth flight from wherever the viewer happens to be.
        if (!this.activeDoor && this.viewMode === 'portfolio' && !this._introStarted) {
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
    _nextFrame() {
        return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }

    // Touch walk pad. Four arrows to look at, one joystick to use: the whole pad
    // reads where the thumb is relative to its centre, split into eight 45°
    // sectors, so sliding between arrows works and pressing between two gives
    // the diagonal. A single captured pointer, which is what lets the other
    // thumb drag on the canvas to look around at the same time -- OrbitControls
    // only ever sees pointers that went down on the canvas.
    _setupWalkPad() {
        const pad = document.getElementById('walk-pad');
        if (!pad) return;
        this.walkPad = pad;
        const btn = {};
        pad.querySelectorAll('.wp-btn').forEach(b => { btn[b.dataset.dir] = b; });
        btn.jump = document.getElementById('wp-jump');

        // Of the pad radius (80px at the pad's current 160px CSS size, so this
        // is a ~22px/~44px-diameter jump target -- matches the ring drawn in
        // index.html's #walk-pad background, which is the visible edge of it.
        // Keep the two in step if the pad is ever resized.
        const DEAD_ZONE = 0.28;
        const SECTOR = Math.sin(Math.PI / 8); // 22.5°: eight equal sectors
        let activeId = null;
        let jumpPress = false;           // this press started in the dead zone: a tap, not a drag

        const set = (fwd, back, left, right) => {
            const k = this._padKeys;
            k.forward = fwd; k.back = back; k.left = left; k.right = right;
            btn.forward?.classList.toggle('active', fwd);
            btn.back?.classList.toggle('active', back);
            btn.left?.classList.toggle('active', left);
            btn.right?.classList.toggle('active', right);
        };
        const readMag = (e) => {
            const r = pad.getBoundingClientRect();
            const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
            const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
            return { nx, ny, mag: Math.hypot(nx, ny) };
        };
        const read = (e) => {
            const { nx, ny, mag } = readMag(e);
            if (mag < DEAD_ZONE) return set(false, false, false, false);
            const ux = nx / mag, uy = ny / mag;    // screen y points down
            set(-uy > SECTOR, uy > SECTOR, -ux > SECTOR, ux > SECTOR);
        };
        const end = (e) => {
            if (e.pointerId !== activeId) return;
            e.stopPropagation();
            activeId = null;
            jumpPress = false;
            btn.jump?.classList.remove('active');
            set(false, false, false, false);
        };

        // stopPropagation is load-bearing: the window-level pointerup treats a
        // short, still press as a click and raycasts into the scene, so without
        // it tapping an arrow would also fly the camera to the tree behind it.
        pad.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (activeId !== null) return;
            activeId = e.pointerId;
            pad.setPointerCapture(e.pointerId);
            this.dismissIntro();
            // The centre of the pad is otherwise dead space (mag < DEAD_ZONE
            // just means "no direction"), so it doubles as the jump button. A
            // press that STARTS there is a tap, not a drag: dragging out to an
            // arrow afterward does not also start walking, so the two actions
            // never blur into each other.
            if (readMag(e).mag < DEAD_ZONE) {
                jumpPress = true;
                btn.jump?.classList.add('active');
                this._jumpRequested = true;
                return;
            }
            read(e);
        });
        pad.addEventListener('pointermove', (e) => {
            if (e.pointerId !== activeId || jumpPress) return;
            e.stopPropagation();
            read(e);
        });
        pad.addEventListener('pointerup', end);
        pad.addEventListener('pointercancel', end);
        pad.addEventListener('lostpointercapture', end);
        // Belt and braces for a pad hidden mid-press (a view switch).
        this._releaseWalkPad = () => { activeId = null; jumpPress = false; set(false, false, false, false); };
    }

    // Walk mode on/off: the dock toggle, in every view. Viewer state like the
    // pause, so it carries across view switches.
    setWalkEnabled(on) {
        this.walkEnabled = !!on;
        if (!this.walkEnabled) {
            for (const k in this._walkKeys) this._walkKeys[k] = false;
            // Hand the orbit back to the motion control. The forest keeps it off
            // regardless (asserted in animate()).
            if (this.viewMode !== 'forest') this.controls.autoRotate = !this.motionPaused;
        } else {
            this.controls.autoRotate = false;
        }
        const btn = this.walkBtn;
        if (btn) {
            btn.classList.toggle('is-on', this.walkEnabled);
            btn.setAttribute('aria-pressed', String(this.walkEnabled));
            const label = this.walkEnabled
                ? 'Stop walking'
                : (this.isTouch ? 'Walk' : 'Walk · WASD');
            btn.setAttribute('aria-label', label);
            const tip = btn.querySelector('.btn-tip');
            if (tip) tip.textContent = label;
        }
        this._updateWalkUI();
        this.resetUIHideTimer();
    }

    // The pad (touch) and the hint under the clock follow walk mode.
    _updateWalkUI() {
        const on = !!this.walkEnabled;
        if (this.walkPad) {
            if (on && this.isTouch) {
                this.walkPad.hidden = false;
                // One frame after display:none lifts, or the fade-in never runs.
                requestAnimationFrame(() => this.walkPad.classList.add('shown'));
            } else {
                this.walkPad.classList.remove('shown');
                this.walkPad.hidden = true;
                this._releaseWalkPad?.();
            }
        }
        const clock = document.getElementById('clock');
        const hint = document.getElementById('clock-hint');
        if (clock && hint) {
            // Short on touch: at <=480px the clock pill is only 138px wide.
            // Touch copy stays short: the clock pill is 138px wide at <=480px.
            if (on) hint.textContent = this.isTouch ? 'Arrows to walk · Tap to jump' : 'WASD to walk · Space to jump';
            clock.classList.toggle('hint-visible', on);
        }
    }

    // One tree's arrival. The start time is measured from when the build began,
    // not from when this tree happened to be created, so spreading creation over
    // several frames doesn't push far trees later than intended.
    _growTreeIn(group, buildStart) {
        const dist = Math.hypot(group.position.x, group.position.z);
        const targetStart = Math.min(1, dist / 100) * FOREST_GROW_SPREAD
            + Math.sin(group.position.x * 2.1) * 0.06;
        const elapsed = (performance.now() - buildStart) / 1000;
        // Trees grow. They do not spring: back.out overshoot on a 16 m tree
        // reads as a rubber toy popping out of the ground. One eased scale on
        // all three axes.
        group.scale.set(0.001, 0.001, 0.001);
        gsap.to(group.scale, {
            x: 1.0, y: 1.0, z: 1.0,
            duration: FOREST_GROW_DURATION,
            ease: 'power2.out',
            delay: Math.max(0, targetStart - elapsed),
        });
    }

    async buildForest() {
        const speciesMeta = {
            banyan: {
                title: 'Banyan Tree',
                meta: 'Ficus benghalensis · Canopy 28m',
                description: 'The majestic national tree of India, known for expansive aerial prop roots and immortal vitality.'
            },
            peepal: {
                title: 'Peepal / Bodhi Tree',
                meta: 'Ficus religiosa · Bodhi Fig',
                description: 'Venerated across ancient traditions as the tree of wisdom and enlightenment, with heart-shaped leaves.'
            },
            mango: {
                title: 'Mango Tree',
                meta: 'Mangifera indica · Evergreen Canopy',
                description: 'King of fruits in Punjabi folklore and Sanskrit literature, symbolizing prosperity and abundant life.'
            },
            neem: {
                title: 'Neem Tree',
                meta: 'Azadirachta indica · Indian Margosa',
                description: 'Renowned as nature\'s pharmacy, revered for cooling medicinal shade and enduring purity.'
            }
        };

        // Nearest first: they also start growing first, so a tree always exists
        // before its grow-in is due.
        const placements = layoutForest(this.quality.treeCountScale)
            .slice()
            .sort((a, b) => (a.x * a.x + a.z * a.z) - (b.x * b.x + b.z * b.z));

        // Yield once up front so clearDoors()' disposal and the first batch of
        // creation land in different frames instead of stacking into one.
        await this._nextFrame();
        const buildStart = performance.now();
        let frameStart = buildStart;

        for (let i = 0; i < placements.length; i++) {
            // Always create at least one per frame, so a slow device still
            // makes progress; beyond that, stop once the frame's budget is spent.
            if (i > 0 && performance.now() - frameStart > FOREST_BUILD_FRAME_MS) {
                await this._nextFrame();
                frameStart = performance.now();
            }
            const { species, x, z, angle, seed, scale } = placements[i];
            const group = createTree(species, { seed, scale });
            const groundY = getForestElevation(x, z);
            group.position.set(x, groundY, z);
            group.rotation.y = angle; // faces outward from centre, not the camera
            // Scale to ~0 before it's in the scene, so no frame ever shows it full size.
            this._growTreeIn(group, buildStart);
            this.scene.add(group);

            const meta = speciesMeta[species] || { title: `${species.charAt(0).toUpperCase() + species.slice(1)} Tree` };
            this.doors.push({
                group,
                species,
                scale,
                title: meta.title,
                name: meta.title,
                meta: meta.meta,
                description: meta.description,
                isTree: true,
                isFlora: true,
                isOpen: false,
                swayGroup: group.userData.swayGroup,
                swayAmplitude: group.userData.swayAmplitude,
                swayFreqMult: group.userData.swayFreqMult,
                swayPhase: Math.sin(seed * 12.9898) * Math.PI, // deterministic, not Math.random()
            });
        }

        // Floor cover: one static grass field plus a scatter of shrubs
        const { grass, shrubs } = createForestFloor();
        this.scene.add(grass);
        this.doors.push({ group: grass, isTree: true, isGrass: true, isOpen: false });
        shrubs.forEach((shrub) => {
            const groundY = getForestElevation(shrub.position.x, shrub.position.z);
            shrub.position.y = groundY;
            this._growTreeIn(shrub, buildStart);
            this.scene.add(shrub);
            this.doors.push({
                group: shrub,
                isTree: true,
                isShrub: true,
                isOpen: false,
                swayGroup: shrub.userData.swayGroup,
                swayAmplitude: shrub.userData.swayAmplitude,
                swayFreqMult: shrub.userData.swayFreqMult,
                swayPhase: Math.sin(shrub.userData.seed * 12.9898) * Math.PI,
            });
        });

        this._hoverTargets = null; // rebuilt lazily on the next hover check
    }

    // Fly to a painting and centre it, framed so the whole work is on screen.
    // Nothing opens — there is no portal behind a painting.
    focusPainting(door) {
        if (this.isTraveling || this.isFlying || this._switching) return;
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

    // Fly to a tree or the sacred rose, framing the complete height and width
    // with optical margins tailored for both mobile phone and widescreen desktop.
    focusFlora(door) {
        if (this.isTraveling || this.isFlying || this._switching) return;
        this.dismissIntro();

        const obj = door.group || door;
        obj.updateMatrixWorld(true);

        // Measure visible geometry extents
        const box = new THREE.Box3();
        obj.traverse((child) => {
            if (child.isMesh && child.visible && child.name !== 'ContactShadow') {
                if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
                box.expandByObject(child);
            }
        });

        if (box.isEmpty()) {
            box.setFromObject(obj);
        }

        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const floraHeight = Math.max(size.y, 0.5);
        // Canopy footprint diameter across any viewing angle
        const floraWidth = Math.max(size.x, size.z, 0.5);

        // Precise optical framing: fits both height and width on narrow phone or widescreen desktop
        const vFovRad = (this.camera.fov * Math.PI) / 180;
        const aspect = Math.max(this.camera.aspect, 0.35);
        const fitHeight = (floraHeight / 2) / Math.tan(vFovRad / 2);
        const fitWidth = (floraWidth / 2) / (Math.tan(vFovRad / 2) * aspect);
        // 25% margin ensures comfortable breathing room around the canopy and roots
        const distance = Math.max(fitHeight, fitWidth) * 1.25;

        // Visual target center
        const target = new THREE.Vector3(
            center.x,
            door.isRose ? center.y : (box.min.y + floraHeight * 0.48),
            center.z
        );

        // Camera viewpoint along current camera direction
        let dir = new THREE.Vector3().subVectors(this.camera.position, target);
        dir.y = 0;
        if (dir.lengthSq() < 1e-4) {
            dir.set(0, 0, 1);
        } else {
            dir.normalize();
        }

        const camPos = target.clone().addScaledVector(dir, distance);
        const groundY = getForestElevation(camPos.x, camPos.z);

        if (door.isRose) {
            // Elegant slight elevation looking down into the rose bloom
            camPos.y = Math.max(1.35, target.y + distance * 0.28);
        } else {
            // Level eye-line view at tree mid-height avoiding tilt distortion
            camPos.y = Math.max(groundY + 1.8, target.y);
        }

        this.activeDoor = door;
        this.flyTo(camPos, target, 1.8, () => {
            this.controls.target.copy(target);
            this.controls.autoRotate = false;
            if (this.activeDoor === door) this._showReticle();
        });
    }

    // In full view of a tree or the sacred rose, dynamically hide any other trees
    // standing in front of the camera sightline to guarantee an open, unobstructed view.
    _updateForestFocusOcclusion() {
        if (this.viewMode !== 'forest' || !this.activeDoor || this.isFlying) {
            if (this._occludedTrees && this._occludedTrees.size > 0) {
                this._occludedTrees.forEach(d => {
                    if (d.group) {
                        d.group.visible = true;
                        const targetScale = d.scale || 1.0;
                        gsap.killTweensOf(d.group.scale);
                        gsap.to(d.group.scale, {
                            x: targetScale, y: targetScale, z: targetScale,
                            duration: 0.5, ease: 'power2.out'
                        });
                    }
                });
                this._occludedTrees.clear();
            }
            return;
        }

        if (!this._occludedTrees) this._occludedTrees = new Set();

        const targetObj = this.activeDoor.group || this.activeDoor;
        if (!targetObj) return;

        const camPos = this.camera.position;
        const targetPos = targetObj.position;

        const dx = targetPos.x - camPos.x;
        const dz = targetPos.z - camPos.z;
        const segLenSq = dx * dx + dz * dz;
        if (segLenSq < 1e-4) return;
        const segLen = Math.sqrt(segLenSq);
        const uX = dx / segLen;
        const uZ = dz / segLen;

        const currentOccluded = new Set();

        for (let i = 0; i < this.doors.length; i++) {
            const door = this.doors[i];
            if (!door.isTree || !door.group || door === this.activeDoor || door.group === targetObj || door.isGrass) {
                continue;
            }

            const pos = door.group.position;
            const wx = pos.x - camPos.x;
            const wz = pos.z - camPos.z;

            // Projection along camera-to-target sightline
            const proj = wx * uX + wz * uZ;
            const t = proj / segLen;

            // Perpendicular distance from sightline segment
            const perpX = wx - proj * uX;
            const perpZ = wz - proj * uZ;
            const perpDist = Math.sqrt(perpX * perpX + perpZ * perpZ);
            const distToCam = Math.sqrt(wx * wx + wz * wz);

            // Only occlude if literally standing right in front of the lens (< 3.5m) blocking the center sightline
            const isDirectBlocker = (t > 0.15 && t < 0.85 && perpDist < 2.0 && distToCam < 3.5);

            if (isDirectBlocker) {
                currentOccluded.add(door);
            }
        }

        // Restore trees no longer occluded smoothly
        this._occludedTrees.forEach(door => {
            if (!currentOccluded.has(door) && door.group) {
                door.group.visible = true;
                const targetScale = door.scale || 1.0;
                gsap.killTweensOf(door.group.scale);
                gsap.to(door.group.scale, {
                    x: targetScale, y: targetScale, z: targetScale,
                    duration: 0.5, ease: 'power2.out'
                });
            }
        });

        // Hide newly occluded trees smoothly
        currentOccluded.forEach(door => {
            if (door.group && !this._occludedTrees.has(door)) {
                gsap.killTweensOf(door.group.scale);
                gsap.to(door.group.scale, {
                    x: 0.001, y: 0.001, z: 0.001,
                    duration: 0.4, ease: 'power2.in',
                    onComplete: () => {
                        if (currentOccluded.has(door)) door.group.visible = false;
                    }
                });
            }
        });

        this._occludedTrees = currentOccluded;
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

                const createMonolith = () => {
                    // Monolith: height 3.6 (extended), center at 1.78 means bottom at -0.02
                    const monolith = new THREE.Mesh(new THREE.BoxGeometry(1.5, 3.6, 0.2), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.2 }));
                    monolith.position.set(0.75, 1.78, 0); monolith.castShadow = true; monolith.receiveShadow = true; hinge.add(monolith); doorObj.panel = monolith;
                };

                if (data.modelPath) {
                    loader.load(getAssetUrl(data.modelPath), (gltf) => {
                        const model = gltf.scene; const panel = model.getObjectByName('Door') || model;
                        model.traverse(o => { if (o.isMesh) { o.material = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.4, metalness: 0.2 }); o.castShadow = true; o.receiveShadow = true; } });
                        // Sink panel slightly into ground for shadow contact
                        panel.position.set(0.75, -0.02, 0); hinge.add(panel); doorObj.panel = panel;
                    }, null, createMonolith);
                } else {
                    createMonolith();
                }
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
        const mat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5, envMapIntensity: 2.7 });
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
            envMapIntensity: 2.7,   // see scene.environmentIntensity
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
            envMapIntensity: 2.7   // 1.0 x 2.7, see scene.environmentIntensity
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
        this.roseCenterpiece = createRoseCenterpiece(4242, { dedicatedShadowLight: this.quality.secondaryShadowLights });
        this.roseCenterpiece.visible = false;
        this.scene.add(this.roseCenterpiece);
        this.roseDoor = {
            group: this.roseCenterpiece,
            isRose: true,
            isFlora: true,
            title: 'Duar 3.0',
            name: 'Duar 3.0',
            meta: 'Rosa damascena · Living Centerpiece',
            description: 'A flourishing velvety ruby rose resting peacefully at the sanctuary center.'
        };
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
        // A phone turned on its side changes how much gallery fits, so the
        // overview is re-framed -- but as a short glide, not a teleport, and only
        // when the viewer is still near the default framing. Someone who has
        // orbited or zoomed somewhere deliberately should keep their view through
        // a resize rather than being yanked back to the default.
        if (!this.activeDoor && !this.isTraveling && this.controls && !this._switching) {
            const overview = this.getDefaultOverview();
            const drift = this.camera.position.distanceTo(overview.camPos);
            if (drift > 0.5 && drift < 14.0) {
                this.flyTo(overview.camPos, overview.target, 0.6);
            }
        }
    }

    onMouseMove(e) {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        this._hoverDirty = true;
    }

    // WASD / touch-pad walking, any view, while walk mode is on.
    //
    // Translating camera.position and controls.target by the SAME vector is
    // what makes this compatible with OrbitControls: update() rebuilds position
    // from target + the offset it reads at the top of its own call, so as long
    // as that offset (position - target) is unchanged, the current zoom and
    // angle survive the step and orbiting keeps working. Moving position alone
    // would be silently overwritten by the next update().
    _applyWalk(dt) {
        if (!this.walkEnabled) return;
        // Both flags: portal travel sets isTraveling, flyTo sets isFlying. The
        // forest-only version checked the first alone, so walking during a
        // fly-to fought the tween for the camera.
        if (this.isTraveling || this.isFlying) return;

        // Keyboard OR touch pad. Plain booleans, not a merged object: every frame.
        const kk = this._walkKeys, pk = this._padKeys;
        const wFwd = kk.forward || pk.forward, wBack = kk.back || pk.back;
        const wLeft = kk.left || pk.left, wRight = kk.right || pk.right;
        if (!(wFwd || wBack || wLeft || wRight)) return;

        // Walking away from a focused painting or tree ends the focus where you
        // stand, rather than leaving its title and reticle hanging in the air.
        if (this.activeDoor) this._releaseFocus();

        _walkForward.set(0, 0, -1).applyQuaternion(this.camera.quaternion);
        _walkForward.y = 0;
        if (_walkForward.lengthSq() < 1e-6) _walkForward.set(0, 0, -1); // looking straight down/up
        _walkForward.normalize();
        _walkRight.set(_walkForward.z, 0, -_walkForward.x); // rotate -90° about Y

        const speed = WALK_SPEED * (kk.boost ? WALK_BOOST : 1) * dt;
        _walkDelta.set(0, 0, 0);
        if (wFwd) _walkDelta.add(_walkForward);
        if (wBack) _walkDelta.sub(_walkForward);
        if (wRight) _walkDelta.add(_walkRight);
        if (wLeft) _walkDelta.sub(_walkRight);
        // Normalize before scaling, or a diagonal (two keys) moves sqrt(2)x
        // faster than a single key -- the classic strafe-speed bug.
        if (_walkDelta.lengthSq() > 1e-6) _walkDelta.normalize().multiplyScalar(speed);

        const nextX = this.controls.target.x + _walkDelta.x;
        const nextZ = this.controls.target.z + _walkDelta.z;
        const nextR = Math.hypot(nextX, nextZ);
        // Clamp by scaling the step back at the boundary rather than snapping
        // to the radius, so walking along the edge slides tangentially.
        if (nextR > WALK_RADIUS) {
            const curR = Math.hypot(this.controls.target.x, this.controls.target.z);
            if (nextR > curR) _walkDelta.multiplyScalar(Math.max(0, (WALK_RADIUS - curR)) / (nextR - curR || 1));
        }
        this.camera.position.x += _walkDelta.x;
        this.camera.position.z += _walkDelta.z;
        this.controls.target.x += _walkDelta.x;
        this.controls.target.z += _walkDelta.z;
        this.dismissIntro();
    }

    // Vertical motion: gravity-integrated jump plus the ground clamp that was
    // already here before jumping existed. Only camera.position.y moves, never
    // controls.target.y, matching the clamp's own long-standing behaviour:
    // OrbitControls.update() re-derives its offset from (position - target)
    // fresh at the top of every call (see the comment on _applyWalk), so a
    // height correction made after update() here is picked up cleanly next
    // frame with nothing to fight it.
    //
    // Gravity is gated on _jumpVelocity !== 0 -- mid-air only -- which is the
    // whole fix for a real bug this had: applying it unconditionally pulled a
    // camera that was simply browsing at normal eye height DOWN toward the
    // floor every single frame, in every view, whether or not walk mode was
    // even on. Once close enough to the floor that OrbitControls' own
    // minDistance clamp started fighting it back up, the two corrections
    // fought every frame -- gravity pulling down, minDistance pushing back out
    // along the same offset -- which is what "everything is shaking in every
    // mode" actually was. Outside an actual jump this function now makes
    // exactly the one passive check it made before jumping existed: don't let
    // the camera end up below the floor, full stop, never actively pull it
    // toward one.
    //
    // `floorH` is the ground height under the camera's CURRENT x/z, computed
    // by the caller (forest's undulating terrain vs. the flat geometric-mode
    // floor use different formulas). The passive clamp runs every frame
    // regardless of walkEnabled, because stopping the mouse from zooming the
    // camera underground predates jumping and must keep working when walk
    // mode is off; only the launch trigger is walk-gated.
    _applyJump(dt, floorH) {
        if (this._jumpVelocity !== 0) {
            this.camera.position.y += this._jumpVelocity * dt;
            this._jumpVelocity -= JUMP_GRAVITY * dt;
        }

        if (this.camera.position.y < floorH) {
            this.camera.position.y = floorH;
            this._jumpVelocity = 0; // landed: grounded again, next request can launch
        }

        if (this._jumpRequested) {
            this._jumpRequested = false;
            // Grounded check, not a walkEnabled check: a request already implies
            // walk mode was on (see the Space handler and the touch button),
            // and re-testing position here is what stops a mid-air tap or a
            // second key-repeat from adding a second launch on top of the fall.
            if (this.walkEnabled && this._jumpVelocity === 0 && this.camera.position.y <= floorH + 1e-4) {
                this._jumpVelocity = JUMP_VELOCITY;
                if (this.activeDoor) this._releaseFocus(); // same as a walk step
                this.dismissIntro();
            }
        }
    }

    animate() {
        this._rafId = requestAnimationFrame(() => this.animate());
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

            // Sun and moon crossfade over twilight rather than swapping at a
            // threshold. The old code cut the sun from full intensity to zero and
            // brought the moon up from zero in the same frame, so every shadow in
            // the scene jumped to the opposite direction between one frame and the
            // next. Both lights are live through the handover; each one's shadows
            // fade with its own intensity, which is what dusk actually looks like.
            const sunW = sky.sunW;
            const moonW = 1 - sunW;

            // Elevation shaping stays floored so a low sun still rakes hard, and
            // the fade to nothing comes from sunW instead.
            const sunElevationFactor = Math.sin(Math.max(0.05, sky.sunAlt));
            const baseSun = this.viewMode === 'forest' ? 1.75 : 2.5;
            const sunElevMult = this.viewMode === 'forest' ? 1.1 : 1.8;
            this.sunLight.intensity = (baseSun + (sunElevationFactor * sunElevMult)) * sunW;
            // The forest is meant to read as night; the gallery modes still need
            // the moon to carry the scene, so only the forest is pulled down.
            const moonBase = this.viewMode === 'forest' ? 0.6 : 1.5;
            this.moonLight.intensity = Math.max(moonBase, sky.mH * moonBase * 1.33) * moonW;

            // Below the cutoff a light contributes nothing visible, so drop its
            // shadow pass rather than paying for a map nobody can see. Both are on
            // only during the overlap, which is the point.
            const sunCasts = sunW > 0.02;
            const moonCasts = moonW > 0.02;

            if (moonW > 0.001) {
                // Keep the night key well elevated so long shadows stretch across
                // trees, rose and terrain even when the astronomical moon is low.
                const moonX = sky.cel.moonPos.x || 120;
                const moonZ = sky.cel.moonPos.z || 120;
                const elevY = Math.max(160, Math.abs(sky.cel.moonPos.y));
                _moonDirScratch.set(moonX, elevY, moonZ).normalize().multiplyScalar(320);
                this.moonLight.position.copy(_moonDirScratch);
            }

            const sunAngleDelta = Math.abs(this.sunAngle - (this._lastShadowSunAngle || 0));
            // A light that has just started casting has no shadow map yet, and with
            // autoUpdate off it would render unshadowed until the angle gate next
            // fires. Force the update on the frame the flag changes.
            const castingChanged = sunCasts !== this._sunCasting || moonCasts !== this._moonCasting;
            this.sunLight.castShadow = sunCasts;
            this.moonLight.castShadow = moonCasts;
            this._sunCasting = sunCasts;
            this._moonCasting = moonCasts;

            if (sunAngleDelta > 0.008 || castingChanged) {
                this._lastShadowSunAngle = this.sunAngle;
                this.renderer.shadowMap.needsUpdate = true;
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
            _twiHorizonOpp.lerpColors(C_DUSK_HORIZON_OPP, C_DAWN_HORIZON_OPP, riseFactor);

            // Twilight ran from +0.10 to -0.04 radians of solar altitude -- about
            // 8 degrees, so the whole sunset passed in a blink. Widened to roughly
            // civil-plus-nautical twilight, which is what gives the colour time to
            // develop and read.
            if (sky.sunAlt > 0.17) {
                _skyColScratch.copy(C_DAY_ZENITH);
                _horizColScratch.copy(C_DAY_HORIZON);
                _horizOppScratch.copy(C_DAY_HORIZON_OPP);
            } else if (sky.sunAlt > -0.05) {
                const t = (0.17 - sky.sunAlt) / 0.22;
                _skyColScratch.lerpColors(C_DAY_ZENITH, _twiZenith, t);
                _horizColScratch.lerpColors(C_DAY_HORIZON, _twiHorizon, t);
                _horizOppScratch.lerpColors(C_DAY_HORIZON_OPP, _twiHorizonOpp, t);
            } else {
                const t = Math.min(1.0, (-0.05 - sky.sunAlt) / 0.20);
                _skyColScratch.lerpColors(_twiZenith, C_NIGHT_ZENITH, t);
                _horizColScratch.lerpColors(_twiHorizon, C_NIGHT_HORIZON, t);
                _horizOppScratch.lerpColors(_twiHorizonOpp, C_NIGHT_HORIZON, t);
            }

            if (this.skySystem && this.skySystem.skyDomeMat) {
                const u = this.skySystem.skyDomeMat.uniforms;
                u.uZenithColor.value.copy(_skyColScratch);
                u.uHorizonColor.value.copy(_horizColScratch);
                if (u.uHorizonOpposite) u.uHorizonOpposite.value.copy(_horizOppScratch);
            }

            this.scene.background = null;
            if (this.scene.fog) this.scene.fog.color.copy(_horizColScratch);

            // Ambient sky & earth bounce light: maintains ground visibility while giving rich shadows on the unlit side of trees
            const hemiGroundNight = this.viewMode === 'forest' ? C_HEMI_FOREST_GROUND_NIGHT : C_HEMI_GROUND_NIGHT;
            const hemiGroundDay = this.viewMode === 'forest' ? C_HEMI_FOREST_GROUND_DAY : C_HEMI_GROUND_DAY;
            // Daytime fill pulled down hard so shadows read as shadow. The night
            // floor is left almost untouched -- at night the fill *is* the
            // lighting, and cutting it there just makes the scene unreadable.
            this.hemiLight.intensity = this.viewMode === 'forest'
                ? 0.028 + (sky.sH * 0.040) + (sky.mH * 0.04)
                : 0.06 + (sky.sH * 0.050) + (sky.mH * 0.11);
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

        this._updateWindEnvelope(dt);

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
            const shadowLight = this.roseCenterpiece.userData.shadowLight;
            if (shadowLight && this._sky) {
                const cel = this._sky.cel;
                if (cel.sunAlt > 0.01) {
                    const dir = _sunDirScratch.copy(cel.sunPos).normalize();
                    shadowLight.position.set(dir.x * 12, Math.max(dir.y * 12, 1.5), dir.z * 12);
                    shadowLight.intensity = Math.min(2.2, Math.max(0.2, cel.sunAlt * 3.2));
                    shadowLight.color.set(0xfff2c8);
                } else {
                    const dir = _moonDirScratch.copy(cel.moonPos).normalize();
                    shadowLight.position.set(dir.x * 12, Math.max(dir.y * 12, 1.5), dir.z * 12);
                    shadowLight.intensity = Math.min(0.55, Math.max(0.06, cel.moonAlt * 1.2));
                    shadowLight.color.set(0xa0bee6);
                }
            }
        }
        if (this.viewMode === 'forest') {
            updateForestWind(this.time * 24, this._windAmbient + this._forestDragMotion * 0.85);

            // Shade foliage against whichever light is actually dominant. Under
            // moonlight the split is deliberately weak -- a hard lit/unlit
            // terminator at night reads as daylight with the colour turned down.
            // The key has to be one light or the other: sun and moon sit on
            // roughly opposite bearings, so averaging their directions collapses
            // to zero length at the midpoint and the normalize blows up.
            //
            // So the direction switches -- but the *strength* is the difference
            // between the two, which falls continuously to zero exactly where
            // they are equal and rises again on the other side. The flip
            // therefore happens at the one moment it cannot be seen, because
            // there is no directional shading to flip. It is also what actually
            // happens: two opposed lights of equal power leave no lit side.
            const sunStrength = THREE.MathUtils.clamp(this.sunLight.intensity / 2.0, 0, 1);
            const moonStrength = THREE.MathUtils.clamp(this.moonLight.intensity / 1.4, 0, 1) * 0.55;
            const sunDominant = sunStrength >= moonStrength;
            const key = sunDominant ? this.sunLight : this.moonLight;
            const strength = Math.abs(sunStrength - moonStrength);
            _keyLightDir.copy(key.position).normalize();
            updateForestLighting(_keyLightDir, this.camera, strength);
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
            this._updateForestFocusOcclusion();
            this.controls.autoRotate = false;
            this.controls.maxPolarAngle = Math.PI * 0.54;
            this.controls.minDistance = 2.0;

            this._applyWalk(dt);
            this.controls.update();

            // Terrain height clamp in forest mode: camera can never zoom, walk, or
            // fall under the undulating ground. Also where a jump lands.
            const groundY = getForestElevation(this.camera.position.x, this.camera.position.z);
            this._applyJump(dt, groundY + 0.75);
        } else {
            if (this._occludedTrees && this._occludedTrees.size > 0) {
                this._occludedTrees.forEach(d => { if (d.group) d.group.visible = true; });
                this._occludedTrees.clear();
            }
            this.controls.maxPolarAngle = Math.PI * 0.54;
            this.controls.minDistance = 0.5;
            // Many paths switch auto-rotate back on (play, door close, view
            // switch, fly-to arrival). While walking it is off, asserted here
            // every frame rather than patched into each of them: auto-orbit
            // around a target that moves with you drags every step into a curve.
            if (this.walkEnabled) this.controls.autoRotate = false;
            this._applyWalk(dt);
            this.controls.update();

            // Ground floor clamp for geometric modes (>= 0.4m). Also where a jump lands.
            this._applyJump(dt, 0.4);
        }

        if (this.viewMode === 'forest') {
            this.renderer.render(this.scene, this.camera);
        } else {
            this.composer.render();
        }
    }
}
new DuarApp();

// Service Worker Registration for Auto-Update (production only; dev unregisters to prevent stale caching)
if ('serviceWorker' in navigator) {
    if (import.meta.env.PROD) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(getAssetUrl('sw.js')).then(registration => {
                console.log('SW registered:', registration);

                // A worker installed on a previous visit can already be waiting,
                // and onupdatefound never fires for it. Without this nudge the
                // visitor keeps the old build until every tab is closed.
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }

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

        // Reload when a NEW worker takes control, so the tab picks up the
        // deploy without a manual refresh. The first-ever worker also takes
        // control (via clients.claim), and reloading for that one would bounce
        // the page on a first visit — hence the hadController check.
        const hadController = Boolean(navigator.serviceWorker.controller);
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing || !hadController) return;
            refreshing = true;
            window.location.reload();
        });
    });
} else {
    // Development mode: unregister any leftover service workers so Vite HMR and dynamic imports never get served stale caches
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const r of registrations) r.unregister();
    });
}
}
