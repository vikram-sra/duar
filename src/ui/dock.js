import gsap from 'gsap';

// The bottom glass control dock: Home, Discover, Day/Night, time-speed slider, Rotate.
// Buttons support tap AND press-and-hold (hold accelerates; tap jumps/toggles).

const DOCK_CSS = `
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
        position: relative;
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
    .btn-tip {
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        padding: 4px 10px;
        border-radius: 8px;
        background: rgba(20, 20, 24, 0.35);
        backdrop-filter: blur(12px) saturate(160%);
        -webkit-backdrop-filter: blur(12px) saturate(160%);
        border: 1px solid rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.85);
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
    .glass-btn .btn-tip.tip-visible { opacity: 1; transform: translateX(-50%) translateY(0); }
    .ui-hidden { opacity: 0; transform: translateY(12px); pointer-events: none; }

    @media (max-width: 480px) {
        .chrome-slider { width: 90px; }
        .glass-bar-wrapper { gap: 6px; padding: 4px 10px; }
    }
`;

const ICONS = {
    home: `<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>`, // Diamond
    random: `<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>`, // Pixel/Grid
    day: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>`, // Minimalist Sun
    night: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`, // Minimal Crescent
    rotate: `<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>` // Loop Icon
};

function injectStyles() {
    if (document.getElementById('compact-ui-css')) return;
    const style = document.createElement('style');
    style.id = 'compact-ui-css';
    style.innerHTML = DOCK_CSS;
    document.head.appendChild(style);
}

// Builds the dock and wires it to `app`. Sets app.uiContainer and app.rotateBtn.
export function createDock(app) {
    injectStyles();

    const container = document.createElement('div');
    app.uiContainer = container;
    container.style.cssText = 'position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';

    const wrapper = document.createElement('div');
    wrapper.className = 'glass-bar-wrapper';
    wrapper.onmouseenter = () => app.resetUIHideTimer();

    const slider = document.createElement('input');
    slider.type = 'range'; slider.className = 'chrome-slider';
    slider.min = '0'; slider.max = '0.5'; slider.step = '0.001'; slider.value = '0.02';
    slider.oninput = (e) => { app.daySpeed = parseFloat(e.target.value); app.resetUIHideTimer(); };
    ['pointerdown', 'touchstart', 'touchmove'].forEach(ev => slider.addEventListener(ev, e => { e.stopPropagation(); app.resetUIHideTimer(); }));

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
        btn.onclick = (e) => { e.stopPropagation(); onClick(); app.resetUIHideTimer(); };
        btn.addEventListener('touchstart', e => e.stopPropagation());
        return btn;
    };

    const homeBtn = createBtn(ICONS.home, () => app.resetScene(), 'Home');

    const randBtn = createBtn(ICONS.random, () => {
        if (app.doors.length === 0 || app.isTraveling) return;
        const door = app.doors[Math.floor(Math.random() * app.doors.length)];
        const angle = Math.atan2(door.group.position.x, door.group.position.z);
        const dist = 25;
        // Arrive first, then open the door — instead of both happening at once.
        gsap.to(app.camera.position, {
            x: Math.sin(angle) * dist, y: 1.6, z: Math.cos(angle) * dist,
            duration: 1.5, ease: "power2.inOut",
            onUpdate: () => app.camera.lookAt(0, 1.6, 0),
            onComplete: () => {
                if (!door.isOpen) app.toggleDoor(door);
            }
        });
    }, 'Discover');

    const sunBtn = createBtn(ICONS.day, () => { }, 'Day');   // tap/hold handled below
    const moonBtn = createBtn(ICONS.night, () => { }, 'Night');
    const rotateBtn = createBtn(ICONS.rotate, () => { }, 'Rotate');
    app.rotateBtn = rotateBtn; // referenced by the rock-click reset in onClick()
    rotateBtn.style.color = '#fff'; // autoRotate defaults on

    // Tap vs press-and-hold. Holding past 200ms repeatedly fires onInterval;
    // a clean release under that fires onTap.
    const addLongPressHandler = (btn, onInterval, onTap) => {
        let interval;
        let time = 0;
        let isLongPress = false;

        const start = (e) => {
            e.stopPropagation();
            if (interval) clearInterval(interval);
            app.resetUIHideTimer();
            time = 0;
            isLongPress = false;

            interval = setInterval(() => {
                time += 50;
                app.resetUIHideTimer();
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
                onTap(); // clean tap (never on slip-off)
                app.resetUIHideTimer();
            } else if (isLongPress) {
                // Release after a hold: ease everything back to ambient.
                if (btn === rotateBtn && app.controls.autoRotate) {
                    app.controls.autoRotateSpeed = -0.8; // Gentle CW
                }
                if (btn === sunBtn || btn === moonBtn) {
                    app.daySpeed = 0.02; // Reset to normal day speed
                    slider.value = 0.02;
                }
            }
        };

        btn.addEventListener('pointerdown', start);
        btn.addEventListener('pointerup', end);
        btn.addEventListener('pointerleave', end); // Handle slip-off
        btn.addEventListener('pointerenter', () => app.resetUIHideTimer()); // Keep UI alive on hover
    };

    // Rotate — hold to accelerate the orbit, tap to toggle it.
    addLongPressHandler(rotateBtn, () => {
        if (!app.controls.autoRotate) {
            app.controls.autoRotate = true;
            rotateBtn.style.color = '#fff';
            app.controls.autoRotateSpeed = -0.5; // Start gentle CW
        }
        // Exponential acceleration for a "warp speed" feel. Speed is negative
        // (clockwise), so multiplying grows its magnitude.
        app.controls.autoRotateSpeed = Math.min(-0.5, app.controls.autoRotateSpeed * 1.05);
        if (app.controls.autoRotateSpeed < -5000) app.controls.autoRotateSpeed = -5000; // sanity limit
    }, () => {
        app.controls.autoRotate = !app.controls.autoRotate;
        rotateBtn.style.color = app.controls.autoRotate ? '#fff' : 'rgba(255,255,255,0.3)';
        if (app.controls.autoRotate) app.controls.autoRotateSpeed = -0.8;
    });

    // Sun — hold to fast-forward time, tap to jump to noon.
    addLongPressHandler(sunBtn, () => {
        if (app.daySpeed < 0.01) app.daySpeed = 0.01;
        app.daySpeed = Math.min(0.5, app.daySpeed * 1.1);
        slider.value = app.daySpeed;
    }, () => {
        app.sunAngle = Math.PI / 2;
        app.daySpeed = 0; // Pause at noon
        slider.value = 0;
    });

    // Moon — hold to fast-forward time, tap to jump to midnight.
    addLongPressHandler(moonBtn, () => {
        if (app.daySpeed < 0.01) app.daySpeed = 0.01;
        app.daySpeed = Math.min(0.5, app.daySpeed * 1.1);
        slider.value = app.daySpeed;
    }, () => {
        app.sunAngle = 3 * Math.PI / 2;
        app.daySpeed = 0; // Pause at midnight
        slider.value = 0;
    });

    wrapper.append(homeBtn, randBtn, sunBtn, slider, moonBtn, rotateBtn);
    container.appendChild(wrapper);
    document.body.appendChild(container);

    app.uiVisible = true;
    app.resetUIHideTimer();
    return container;
}
