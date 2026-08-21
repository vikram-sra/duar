import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import gsap from 'gsap';

import { loadWorld, layoutDoor, DEFAULT_LAYOUT } from './src/data/world.js';
import { toGurmukhi } from './src/util/gurmukhi.js';
import { generateSunTexture, generateMoonTexture } from './src/scene/textures.js';
import {
    createGround, createSacredGeometry, createCentralRock, createSkyDome, createDustMotes
} from './src/scene/environment.js';
import { createDoorFrame, createMonolithPanel } from './src/doors/doorFrame.js';
import { createCrossingPass, apertureForDoor } from './src/doors/crossingPass.js';
import { preloadDoorMedia, buildArrivalPlane, disposeArrival } from './src/doors/arrival.js';
import { createDock } from './src/ui/dock.js';
import { startClock } from './src/ui/clock.js';

// Scene-level defaults. Door CONTENT lives in /world.json (see loadWorld) so it can be
// edited without a code change — and, later, served from the database instead.
const CONFIG = {
    "scene": {
        "fog": { "color": "#2c3e50", "near": 20, "far": 90 },
        "camera": { "fov": 50, "startPosition": [0, 8, 20] }
    }
};

// How far beyond the doorway the arriving content sits, and where the camera comes to
// rest. The gap between them frames the content: ~3.5m at 55° fits a 3.2m-tall plane
// with margin. The camera must stop SHORT of the content, or it flies through it.
const ARRIVAL_DISTANCE = 4.5;
const CAMERA_REST_DISTANCE = 1.0;

const SHADOW_MAP_SIZE = 2048;
// Re-render shadows only once the sun has swung this far. At ambient speed a full day
// takes ~12 min, so this is a handful of shadow passes per day instead of 60/second.
const SHADOW_REFRESH_RADIANS = 0.004;

// Scratch objects reused every frame. Allocating THREE.Color/Vector3 inside animate()
// produced ~720 objects/second, and the resulting GC pauses read as random micro-stutter.
const _tmpColor = new THREE.Color();
const _tmpColorB = new THREE.Color();
const _tmpVec = new THREE.Vector3();
const C_WHITE = new THREE.Color(0xffffff);
const C_SUN_WARM = new THREE.Color(0xff8833);
const C_SUN_LIGHT = new THREE.Color(0xffddaa);
const C_SUN_LOW = new THREE.Color(0xff7722);
const C_MOON_COOL = new THREE.Color(0xd0e0ff);
const C_DAY_SKY = new THREE.Color(0x2c3e50);
const C_NIGHT_SKY = new THREE.Color(0x050510);
const C_HEMI_NIGHT = new THREE.Color(0x4444ff);

class DuarApp {
    constructor() {
        this.container = document.getElementById('app');
        console.log("DuarApp initializing...");
        this.scene = new THREE.Scene();
        this.doors = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.time = 0;
        this.isTraveling = false;
        this.activeDoor = null;  // The currently open door, target for reticle
        this._orbitRadius = null; // When set, render loop enforces this distance from controls.target
        this.hoveredDoor = null;  // Door currently under the cursor (drives label display)
        this.elapsed = 0;         // Real seconds since start (delta-time accumulator)
        this.particleSystems = [];
        this.dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // Ground plane
        this.loadingManager = new THREE.LoadingManager();
        this.setupLoadingManager();
        this._bindReticle();

        this.init();
        // Fallback to reveal scene after 2.5s if loading hangs
        setTimeout(() => this.revealScene(), 2500);
    }

    // Bind persistent reticle handlers.
    _bindReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        // Swallow pointer events so a click on the reticle never reaches the door/canvas behind it.
        ['pointerdown', 'pointerup'].forEach(ev =>
            reticle.addEventListener(ev, (e) => e.stopPropagation())
        );
        // Enter dot: travel through the open portal. ("Go Back" is a child of #reticle but
        // calls stopPropagation, so its clicks never reach this handler.)
        reticle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (this.activeDoor && !this.isTraveling) this.travelThroughPortal(this.activeDoor);
        });
        // "Go Back": close the open door and fly home.
        const backBtn = reticle.querySelector('.reticle-back');
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!this.isTraveling) this.resetScene();
            });
        }
    }

    // ---- Routing: /d/<slug> addresses a single door, so worlds are shareable ----

    _slugFromPath(path = window.location.pathname) {
        const m = path.match(/^\/d\/([^/]+)\/?$/);
        return m ? decodeURIComponent(m[1]) : null;
    }

    // Reflect the open door in the URL. Suppressed while responding to popstate,
    // so browser navigation doesn't push new entries back onto the stack.
    _setUrlForDoor(door) {
        if (this._suppressUrlUpdate) return;
        const path = door && door.slug ? `/d/${encodeURIComponent(door.slug)}` : '/';
        if (window.location.pathname === path) return;
        window.history.pushState({ slug: (door && door.slug) || null }, '', path);
    }

    // Called once the doors exist: honour a deep link, then track back/forward.
    onDoorsReady() {
        const slug = this._slugFromPath();
        if (slug) {
            const door = this.doors.find(d => d.slug === slug);
            if (door) {
                this.dismissIntro();
                this._suppressUrlUpdate = true; // already at this URL
                this.toggleDoor(door);
                this._suppressUrlUpdate = false;
            } else {
                // Unknown slug — show the overview rather than sit on a dead URL.
                window.history.replaceState({}, '', '/');
            }
        }
        window.addEventListener('popstate', () => this._syncToUrl());
    }

    _syncToUrl() {
        const slug = this._slugFromPath();
        const target = slug ? this.doors.find(d => d.slug === slug) : null;
        const open = this.doors.find(d => d.isOpen);
        if (target === open) return; // already in the right state

        this._suppressUrlUpdate = true;
        if (open && open !== target) this.toggleDoor(open); // close the current one
        if (target && !target.isOpen) this.toggleDoor(target);
        this._suppressUrlUpdate = false;
    }

    // Briefly swap the "Enter" caption for a status message, then restore it.
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

    // A door with nothing behind it shouldn't play a three-second crossing into an
    // empty plane. Shake the reticle instead — a refusal you feel rather than read.
    _refuseEntry(message = 'Coming soon') {
        const reticle = document.getElementById('reticle');
        const label = reticle?.querySelector('.reticle-label');
        this._flashReticleLabel(message);
        if (!reticle || !label) return;

        // Restart the animation even on repeated taps: drop the class, force a reflow,
        // then re-add. Without the reflow the browser coalesces it and nothing moves.
        reticle.classList.remove('refuse');
        label.classList.remove('refuse');
        void reticle.offsetWidth;
        reticle.classList.add('refuse');
        label.classList.add('refuse');
        setTimeout(() => reticle.classList.remove('refuse'), 500);
    }

    // Has this door got anywhere to take you? Either an outbound link, or media to
    // arrive on. Without one the crossing has no destination.
    _doorHasDestination(door) {
        const d = door.data || {};
        return Boolean(d.destination_url || d.media_url || d.preview_url);
    }

    _showReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        reticle.classList.add('visible');
        gsap.fromTo(reticle,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)', overwrite: true }
        );
    }

    _hideReticle() {
        const reticle = document.getElementById('reticle');
        if (!reticle) return;
        gsap.to(reticle, {
            opacity: 0, scale: 0, duration: 0.3, ease: 'power2.in', overwrite: true,
            onComplete: () => reticle.classList.remove('visible')
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
            const show = (d === this.hoveredDoor || d.isOpen) && !this.isTraveling;
            if (!show) { if (el.style.opacity !== '0') el.style.opacity = '0'; return; }
            v.set(d.group.position.x, d.group.position.y + 3.7, d.group.position.z).project(this.camera);
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
        if (this._revealed) return;
        this._revealed = true;
        const loader = document.getElementById('loading');
        if (loader) {
            // Use the CSS transition rather than a GSAP tween: GSAP is driven by
            // requestAnimationFrame, which the browser pauses in a background tab. If the
            // page loads while backgrounded, an rAF-driven fade never completes — and since
            // this overlay is z-index 10000 with pointer-events, it would silently block
            // every click forever. The .hidden class kills pointer-events immediately.
            loader.classList.add('hidden');
            setTimeout(() => { loader.style.display = 'none'; }, 900);
        }
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

        // The whole crossing — mask blur, streaks, aberration, vignette — in one pass
        // driven by one uniform. Disabled at rest so it costs nothing when idle.
        this.crossingPass = createCrossingPass();
        this.composer.addPass(this.crossingPass);
        this._crossProgress = 0;

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
        this.dust = createDustMotes();
        this.scene.add(this.dust);

        window.addEventListener('resize', () => this.onResize(), { passive: true });
        window.addEventListener('mousemove', (e) => this.onMouseMove(e), { passive: true });
        window.addEventListener('contextmenu', (e) => e.preventDefault());

        let startX = 0; let startY = 0;
        window.addEventListener('pointerdown', (e) => {
            startX = e.clientX; startY = e.clientY;
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
            const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
            if (dist < 10) this.onClick(e);
        });

        createDock(this);
        this._stopClock = startClock();

        // Seed the sky to the current time of day; it then drifts slowly (see animate()).
        const now = new Date();
        const hours = now.getHours() + now.getMinutes() / 60;
        this.sunAngle = ((hours - 6) / 24) * Math.PI * 2;
        this.daySpeed = 0.02;

        // Fallback: dismiss the intro overlays if the user hasn't interacted yet.
        setTimeout(() => this.dismissIntro(), 14000);

        this._lastFrame = performance.now();
        this.animate();
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
                        this.controls.autoRotate = false;
                        if (this.rotateBtn) this.rotateBtn.style.color = 'rgba(255,255,255,0.3)';
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
                        // All clicks on a door only toggle open/close.
                        // Travel is exclusively triggered by the center reticle dot.
                        this.toggleDoor(door);
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

    // Cross the threshold. Content ARRIVES in the world rather than replacing it:
    // phase ੧ approach (blur ramps, media decode starts), ੨ commit (hold, wait for the
    // doorway to fill the viewport), ੩ warp (accelerate, content grows from the
    // vanishing point). One uProgress uniform drives every visual effect.
    async travelThroughPortal(door) {
        if (this.isTraveling) return;

        // Nothing behind this door yet — refuse, and stay in the world.
        if (!this._doorHasDestination(door)) {
            this._refuseEntry('Coming soon');
            return;
        }

        this.isTraveling = true;

        this.activeDoor = null;
        this._hideReticle();

        // Take sole authority over the camera. The door-open orbit leaves _orbitRadius
        // set, and the render loop re-projects the camera onto that sphere every frame —
        // which drags it back out through the doorway while the crossing tween pulls it
        // in. Releasing it here is what lets the camera actually come to rest facing the
        // arriving content instead of away from it.
        this._orbitRadius = null;
        this.controls.enabled = false;
        this.controls.autoRotate = false;
        this.controls.enableDamping = false;
        gsap.killTweensOf(this.camera.position);
        gsap.killTweensOf(this.controls.target);
        if (this.uiContainer) this.setUIVisibility(false);

        // Someone who asked for less motion gets the destination, not the ride.
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const portalWorldPos = new THREE.Vector3();
        door.portalHitbox.getWorldPosition(portalWorldPos);
        const dir = new THREE.Vector3().subVectors(portalWorldPos, this.camera.position).normalize();

        // ── Phase ੧ — approach. Start the decode NOW so the texture is resident long
        // before the warp; uploading mid-warp drops frames at the worst possible moment.
        const mediaPromise = preloadDoorMedia(door);

        this.crossingPass.enabled = true;
        this.crossingPass.uniforms.uTint.value.set(door.data.color || '#ffffff');
        this._crossingDoor = door;
        this._crossProgress = 0;

        const media = await mediaPromise;
        if (!this.isTraveling) return; // backed out while loading

        // Content sits well beyond the doorway, facing back along the approach — far
        // enough ahead that the camera comes to rest in front of it rather than through it.
        const arrival = buildArrivalPlane(media);
        arrival.position.copy(portalWorldPos).addScaledVector(dir, ARRIVAL_DISTANCE);
        arrival.lookAt(this.camera.position);
        arrival.scale.setScalar(0.35);
        this.scene.add(arrival);
        this._arrivalMesh = arrival;
        if (media.kind === 'video') media.video.play().catch(() => {});

        if (reduced) {
            gsap.to(arrival.material, { opacity: 1, duration: 0.2 });
            arrival.scale.setScalar(1);
            this._settleAfterCrossing(door, media);
            return;
        }

        const tl = gsap.timeline({ onComplete: () => this._settleAfterCrossing(door, media) });

        // uProgress drives blur → streaks → aberration → tint, all from this one tween.
        tl.to(this, { _crossProgress: 1, duration: 2.6, ease: 'power2.in' }, 0);

        // ੧+੨: measured dolly toward the doorway. Restraint here is what makes ੩ land.
        tl.to(this.camera.position, {
            x: portalWorldPos.x, y: portalWorldPos.y, z: portalWorldPos.z,
            duration: 1.5, ease: 'power1.inOut'
        }, 0);
        tl.to(this.controls.target, {
            x: portalWorldPos.x + dir.x * 10, y: portalWorldPos.y, z: portalWorldPos.z + dir.z * 10,
            duration: 1.2, ease: 'power2.inOut'
        }, 0);

        // ੩: warp. Only once the frame edges have left the viewport — with no reference
        // geometry left, the eye can't measure speed, which is when to add it. The camera
        // comes to rest short of the content, not past it.
        tl.to(this.camera.position, {
            x: portalWorldPos.x + dir.x * CAMERA_REST_DISTANCE,
            y: portalWorldPos.y,
            z: portalWorldPos.z + dir.z * CAMERA_REST_DISTANCE,
            duration: 1.1, ease: 'power3.in'
        }, 1.5);
        // FOV spikes for the speed distortion, then relaxes so the arriving content is
        // framed by a normal lens rather than a fisheye.
        tl.to(this.camera, {
            fov: 118, duration: 0.8, ease: 'power3.in',
            onUpdate: () => this.camera.updateProjectionMatrix()
        }, 1.5);
        tl.to(this.camera, {
            fov: 55, duration: 0.9, ease: 'power2.out',
            onUpdate: () => this.camera.updateProjectionMatrix()
        }, 2.3);

        // Content grows OUT of the vanishing point rather than cutting in.
        tl.to(arrival.scale, { x: 1, y: 1, z: 1, duration: 1.3, ease: 'power2.out' }, 1.3);
        tl.to(arrival.material, { opacity: 1, duration: 0.9, ease: 'power2.out' }, 1.4);

        // Bloom belongs to the portals, not to what arrives. A photo or video filling
        // the frame would otherwise blow out into a white blob. Restored in _endCrossing.
        tl.to(this.bloomPass, { strength: 0.25, duration: 1.0, ease: 'power2.out' }, 1.4);
    }

    // The camera is still now — the one moment a WebGL→DOM handover is invisible.
    _settleAfterCrossing(door, media) {
        this.showArrivalPanel(door, media);
        // Bring the dock back so Home is reachable; the reticle's "Go Back" is hidden
        // during a crossing, so without this there'd be no way out.
        this.setUIVisibility(true);
    }

    // Nothing that moves is DOM; nothing interactive is WebGL. A live third-party page
    // can't be a texture, so those doors offer the link onward from here.
    showArrivalPanel(door, media) {
        const panel = document.getElementById('arrival');
        if (!panel) return;
        const title = panel.querySelector('.arrival-title');
        const body = panel.querySelector('.arrival-body');
        const link = panel.querySelector('.arrival-link');

        if (title) title.textContent = door.name || '';
        if (body) body.textContent = door.data.summary || '';

        const url = door.data.destination_url;
        if (link) {
            if (url) {
                link.href = url;
                link.textContent = door.data.link_label || 'Open';
                link.hidden = false;
                link.rel = 'noopener noreferrer';
                link.target = '_blank';
            } else {
                link.hidden = true;
            }
        }
        panel.classList.add('visible');
    }

    hideArrivalPanel() {
        document.getElementById('arrival')?.classList.remove('visible');
    }

    // Unwind a crossing: drop the arrival surface, disable the pass (so it stops
    // costing anything), and restore the camera. Safe to call when not crossing.
    _endCrossing() {
        this.hideArrivalPanel();

        if (this._arrivalMesh) {
            const media = this._crossingDoor?._media;
            if (media?.kind === 'video') media.video.pause();
            disposeArrival(this._arrivalMesh);
            this._arrivalMesh = null;
        }

        if (this.crossingPass) {
            gsap.killTweensOf(this);
            this._crossProgress = 0;
            this.crossingPass.uniforms.uProgress.value = 0;
            this.crossingPass.enabled = false;
        }

        this._crossingDoor = null;
        this.isTraveling = false;
        this.controls.enabled = true;
        this.controls.enableDamping = true;

        // Restore the world's portal bloom, dimmed while content was on screen.
        if (this.bloomPass) gsap.to(this.bloomPass, { strength: 1.2, duration: 1.0, ease: 'power2.inOut' });

        gsap.to(this.camera, {
            fov: 50, duration: 1.2, ease: 'power2.out',
            onUpdate: () => this.camera.updateProjectionMatrix()
        });
    }


    checkHover() {
        if (!this.raycaster || !this.scene || !this.camera) return;
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const hits = this.raycaster.intersectObjects(this.scene.children, true);
        
        let hoverActive = false;
        let hoveredDoor = null;
        
        if (hits.length > 0) {
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
                hoverActive = true;
                if (hit.object !== this.rock) {
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

            const targetPoint = door.group.position.clone();
            targetPoint.y = 1.75;

            // Dolly straight in along the door -> current-camera line.
            const direction = new THREE.Vector3().subVectors(this.camera.position, targetPoint).normalize();

            // Netflix-intro-logo framing: distance D so the frame fills the viewport width.
            const fovRad = (this.camera.fov / 2) * (Math.PI / 180);
            const aspect = window.innerWidth / window.innerHeight;
            const netflixDist = 0.8 / (aspect * Math.tan(fovRad));
            const dist = Math.max(0.3, Math.min(6.0, netflixDist)); // clamp: 0.3m (tall viewport) .. 6.0m (ultrawide)

            const targetCamPos = targetPoint.clone().add(direction.multiplyScalar(dist));
            targetCamPos.y = 1.78; // Align camera height with the portal center

            // Arm travel now; the reticle is revealed on arrival (see onArrive below).
            this.activeDoor = door;
            this._setUrlForDoor(door); // deep-linkable: /d/<slug>

            // Genuine fly-to: interpolate the camera THROUGH space to the door, then
            // hand off to a gentle orbit around the now-open portal and show the reticle.
            this.flyTo(targetCamPos, targetPoint, 1.9, () => {
                this._orbitRadius = this.camera.position.distanceTo(this.controls.target);
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
            this._setUrlForDoor(null); // back to the world overview URL
            this._hideReticle();
            this.setUIVisibility(true); // bring the dock back now that the door is closing

            // Pull back in parallel with continued rotation
            const doorPos = door.group.position.clone();
            doorPos.y = 1.75;

            // Point target at door, rotation continues uninterrupted
            gsap.to(this.controls.target, { x: doorPos.x, y: 1.6, z: doorPos.z, duration: 1.8, ease: "power3.inOut" });

            // Tween radius outward — autoRotate already running
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = -0.6; // Clockwise
            const currentRadius = this.camera.position.distanceTo(this.controls.target);
            this._orbitRadius = currentRadius;
            gsap.to(this, { _orbitRadius: 8.0, duration: 1.8, ease: "power3.inOut" });

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
    // Suspends auto-rotate, damping, and the orbit-radius override so the positional
    // tween is authoritative (otherwise controls.update() / the render loop fight it).
    flyTo(camPos, lookAt, duration = 1.9, onArrive = null) {
        this._orbitRadius = null;
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
                this.controls.enableDamping = true;
                if (onArrive) onArrive();
            }
        });
    }

    resetScene() {
        this.closeAllDoors();
        this._endCrossing();

        // Hide reticle
        this.activeDoor = null;
        this._setUrlForDoor(null); // back to the world overview URL
        this.daySpeed = 0.02;    // back to ambient day/night speed
        this._hideReticle();
        this.setUIVisibility(true); // bring the dock back (door closing / returning home)

        // Fly back to the opening overview, then resume the ambient idle orbit.
        this.flyTo(new THREE.Vector3(0, 1.6, 25), new THREE.Vector3(0, 1.6, 0), 2.0, () => {
            this.controls.autoRotate = true;
            this.controls.autoRotateSpeed = -0.8;
        });

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

    // three re-renders every shadow-casting light every frame while autoUpdate is on;
    // with two directional lights that was the largest single cost in the frame. But the
    // shadow casters here are not static: doors billboard toward the camera every frame
    // and swing when opening, so the maps must be invalidated on camera movement too —
    // not just on the sun. The win lands when the scene actually settles (auto-rotate
    // off, nothing animating), which is exactly when someone is reading a door.
    _updateShadowMaps() {
        const sunMoved = this._lastShadowAngle === undefined
            || Math.abs(this.sunAngle - this._lastShadowAngle) >= SHADOW_REFRESH_RADIANS;

        // Billboarding is driven by camera position, so any camera movement changes
        // every door's silhouette.
        const camMoved = this._lastShadowCamPos === undefined
            || this.camera.position.distanceToSquared(this._lastShadowCamPos) > 1e-4;

        const doorMoving = this.doors.some(d => d.isAnimating);

        if (sunMoved || camMoved || doorMoving) {
            this.renderer.shadowMap.needsUpdate = true;
            this._lastShadowAngle = this.sunAngle;
            if (!this._lastShadowCamPos) this._lastShadowCamPos = new THREE.Vector3();
            this._lastShadowCamPos.copy(this.camera.position);
        }
    }

    setupLighting() {
        // Render shadow maps on demand only (see _updateShadowMaps).
        this.renderer.shadowMap.autoUpdate = false;
        this.renderer.shadowMap.needsUpdate = true;

        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambient);
        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.3);
        this.scene.add(this.hemiLight);

        this.sunDist = 600;
        this.sunLight = new THREE.DirectionalLight(0xffddaa, 1.5);
        this.sunLight.castShadow = true;
        // 2048² costs ~17MB per map; 8192² costs ~268MB and showed no visible gain at
        // these distances. See _updateShadowMaps() — these are re-rendered on demand,
        // not every frame, because the sun barely moves at ambient day speed.
        this.sunLight.shadow.mapSize.width = SHADOW_MAP_SIZE;
        this.sunLight.shadow.mapSize.height = SHADOW_MAP_SIZE;
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

        const sunTex = generateSunTexture();
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
        this.moonLight.shadow.mapSize.width = SHADOW_MAP_SIZE;
        this.moonLight.shadow.mapSize.height = SHADOW_MAP_SIZE;
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

        const moonTex = generateMoonTexture();
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



    setupEnvironment() {
        const color = new THREE.Color(CONFIG.scene.fog.color);
        this.scene.fog = new THREE.FogExp2(color, 0.002);
        this.renderer.setClearColor(color);

        this.scene.add(createGround());

        // Concentric rings — ringMat is faded out when a door opens.
        const { material, rings } = createSacredGeometry();
        this.ringMat = material;
        this.rings = rings;
        rings.forEach(r => this.scene.add(r.mesh));

        this.rock = createCentralRock();
        this.scene.add(this.rock);

        this.skyDome = createSkyDome(CONFIG.scene.fog.color);
        this.scene.add(this.skyDome);
    }

    async setupDoors() {
        const { world, doors } = await loadWorld();
        this.world = world || {};
        const layout = { ...DEFAULT_LAYOUT, ...(world?.settings || {}) };
        const visible = (doors || []).filter(d => d.is_published !== false);

        const loader = new GLTFLoader(this.loadingManager);

        visible.forEach((data, index) => {
            const { x, z, ring, slot } = layoutDoor(index, data, layout);

            const group = new THREE.Group();
            group.position.set(x, 0, z);
            this.scene.add(group);

            const hinge = new THREE.Group(); hinge.position.set(-0.75, 0, 0); group.add(hinge);
            const doorObj = { group, data, hinge, isOpen: false, ring, slot };
            const { portalHitbox, portalMaterial } = createDoorFrame(group, data);

            const addMonolith = () => {
                const monolith = createMonolithPanel();
                hinge.add(monolith);
                doorObj.panel = monolith;
            };

            // Only hit the network when a model is actually specified — otherwise every
            // door used to fire a guaranteed 404 before falling back to the monolith.
            if (data.model_path) {
                loader.load(data.model_path, (gltf) => {
                    const model = gltf.scene; const panel = model.getObjectByName('Door') || model;
                    model.traverse(o => { if (o.isMesh) { o.material = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.4, metalness: 0.2 }); o.castShadow = true; o.receiveShadow = true; } });
                    // Sink panel slightly into ground for shadow contact
                    panel.position.set(0.75, -0.02, 0); hinge.add(panel); doorObj.panel = panel;
                }, null, addMonolith);
            } else {
                addMonolith();
            }

            doorObj.portalHitbox = portalHitbox;
            doorObj.portalMaterial = portalMaterial; // vortex shader material

            // Stable identity, straight from the data — a door keeps its name across
            // reloads and is addressable by slug (see the router).
            doorObj.slug = data.slug;
            doorObj.name = data.title || `duar-${toGurmukhi(index + 1)}`;

            // Floating name label (shown on hover / when open — see updateLabels()).
            const labelEl = document.createElement('div');
            labelEl.className = 'door-label';
            labelEl.textContent = doorObj.name;
            document.body.appendChild(labelEl);
            doorObj.labelEl = labelEl;

            this.doors.push(doorObj);
        });

        this.onDoorsReady();
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

        if (this.sunMesh && this.moonMesh) {
            // Ambient drift: default daySpeed 0.02 → ~12-min full cycle; slider/buttons fast-forward.
            this.sunAngle += this.daySpeed * 0.436 * dt;
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
                    this.sunMesh.material.color.copy(C_WHITE).lerp(C_SUN_WARM, t);
                    this.sunLight.color.lerpColors(C_SUN_LIGHT, C_SUN_LOW, t);
                } else if (angleMod > sunsetStart) {
                    const t = (angleMod - sunsetStart) / transitionZone;
                    this.sunMesh.material.color.copy(C_WHITE).lerp(C_SUN_WARM, t);
                    this.sunLight.color.lerpColors(C_SUN_LIGHT, C_SUN_LOW, t);
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
                    _tmpColor.copy(C_WHITE).lerp(C_MOON_COOL, t);
                    this.moonMesh.material.color.copy(_tmpColor);
                    this.moonMesh.material.emissive.copy(_tmpColor);
                } else if (angleMod > moonSetStart) {
                    const t = (angleMod - moonSetStart) / transitionZone;
                    _tmpColor.copy(C_WHITE).lerp(C_MOON_COOL, t);
                    this.moonMesh.material.color.copy(_tmpColor);
                    this.moonMesh.material.emissive.copy(_tmpColor);
                } else {
                    this.moonMesh.material.color.set(0xffffff);
                    this.moonMesh.material.emissive.set(0xffffff);
                }
            }

            const currColor = _tmpColorB.setRGB(0, 0, 0);
            currColor.lerp(C_DAY_SKY, sH);
            currColor.lerp(C_NIGHT_SKY, mH * 0.4);

            // scene.background / fog.color hold their own Color instances — copy into
            // them rather than reassigning, so the scratch object is never captured.
            if (this.scene.background && this.scene.background.isColor) this.scene.background.copy(currColor);
            else this.scene.background = currColor.clone();
            if (this.scene.fog) this.scene.fog.color.copy(currColor);
            this.hemiLight.intensity = 0.15 + (sH * 0.3) + (mH * 0.15);
            this.hemiLight.color.lerpColors(C_HEMI_NIGHT, C_WHITE, sH);

            // Subtle horizon afterglow: fades in with the moon, invisible during the day.
            if (this.skyDome) {
                this.skyDome.material.uniforms.uSkyColor.value.copy(currColor);
                this.skyDome.material.uniforms.uGlowStrength.value = mH * 0.18;
            }
        }
        if (this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        if (this.rock) {
            // Base sits flush on the ground (cone geometry base is at local y=0)
            this.rock.position.y = 0;
            // Slowly rotating
            this.rock.rotation.y = this.time * 0.5;
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

        // Enforce orbit radius if set — keeps camera at target distance while autoRotate runs freely
        if (this._orbitRadius !== null) {
            _tmpVec.subVectors(this.camera.position, this.controls.target).normalize();
            this.camera.position.copy(this.controls.target).addScaledVector(_tmpVec, this._orbitRadius);
        }

        // Feed the crossing pass: one uniform for progress, plus the doorway's live
        // projected rect so the mask tracks the real silhouette as it skews.
        if (this.crossingPass && this.crossingPass.enabled) {
            const u = this.crossingPass.uniforms;
            u.uProgress.value = this._crossProgress;
            u.uAspect.value = window.innerWidth / window.innerHeight;
            if (this._crossingDoor) apertureForDoor(this._crossingDoor, this.camera, u.uAperture.value);
        }

        this._updateShadowMaps();
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
