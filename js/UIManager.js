import gsap from 'gsap';

export class UIManager {
    constructor(callbacks) {
        // callbacks: { onHome, onRandom, onSpeedChange, onRotateToggle }
        this.callbacks = callbacks;
        this.uiVisible = true;
        this.uiHideTimeout = null;
        this.daySpeed = 0.0;

        this.createTimeControls();
        this.resetUIHideTimer();
    }

    createTimeControls() {
        const container = document.createElement('div');
        this.uiContainer = container;
        container.style.cssText = 'position:absolute; bottom:calc(45px + env(safe-area-inset-bottom)); width:100%; display:flex; justify-content:center; z-index:1000; pointer-events:none; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);';

        const wrapper = document.createElement('div');
        wrapper.className = 'glass-bar-wrapper';
        wrapper.onmouseenter = () => this.resetUIHideTimer();

        this.slider = document.createElement('input');
        this.slider.type = 'range'; this.slider.className = 'chrome-slider';
        this.slider.min = '0'; this.slider.max = '0.5'; this.slider.step = '0.001'; this.slider.value = '0';
        this.slider.oninput = (e) => {
            this.daySpeed = parseFloat(e.target.value);
            if (this.callbacks.onSpeedChange) this.callbacks.onSpeedChange(this.daySpeed);
            this.resetUIHideTimer();
        };

        ['pointerdown', 'touchstart', 'touchmove'].forEach(ev => this.slider.addEventListener(ev, e => {
            e.stopPropagation(); this.resetUIHideTimer();
        }));

        const icons = {
            home: `<svg viewBox="0 0 24 24"><path d="M12 3L3 12L12 21L21 12L12 3Z"/></svg>`,
            random: `<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4zm12 0h4v4h-4z"/></svg>`,
            day: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 1v1.5M12 21.5V23M1 12h1.5M21.5 12H23"/></svg>`,
            night: `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
            rotate: `<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`
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

        const homeBtn = createBtn(icons.home, () => {
            if (this.callbacks.onHome) this.callbacks.onHome();
        }, 'Return Home');

        const randBtn = createBtn(icons.random, () => {
            if (this.callbacks.onRandom) this.callbacks.onRandom();
        }, 'Random Discovery');

        const sunBtn = createBtn(icons.day, () => { }, 'High Noon / Hold fwd');
        const moonBtn = createBtn(icons.night, () => { }, 'Midnight / Hold fwd');
        const rotateBtn = createBtn(icons.rotate, () => { }, 'Toggle Humble / Hold Hyper');
        this.rotateBtn = rotateBtn;
        rotateBtn.style.color = '#fff';

        this.addLongPressHandler(rotateBtn, (t) => {
            if (this.callbacks.onRotateHold) this.callbacks.onRotateHold();
        }, () => {
            if (this.callbacks.onRotateToggle) {
                const isAuto = this.callbacks.onRotateToggle();
                rotateBtn.style.color = isAuto ? '#fff' : 'rgba(255,255,255,0.3)';
            }
        });

        this.addLongPressHandler(sunBtn, (t) => {
            this.setSpeed(Math.min(0.5, Math.max(0.01, this.daySpeed) * 1.1));
        }, () => {
            if (this.callbacks.onTimeJump) this.callbacks.onTimeJump(Math.PI / 2);
            this.setSpeed(0);
        });

        this.addLongPressHandler(moonBtn, (t) => {
            this.setSpeed(Math.min(0.5, Math.max(0.01, this.daySpeed) * 1.1));
        }, () => {
            if (this.callbacks.onTimeJump) this.callbacks.onTimeJump(3 * Math.PI / 2);
            this.setSpeed(0);
        });

        wrapper.append(homeBtn, randBtn, sunBtn, this.slider, moonBtn, rotateBtn);
        container.appendChild(wrapper);
        document.body.appendChild(container);
    }

    setSpeed(val) {
        this.daySpeed = val;
        this.slider.value = val;
        if (this.callbacks.onSpeedChange) this.callbacks.onSpeedChange(val);
    }

    addLongPressHandler(btn, onInterval, onTap) {
        let interval;
        let time = 0;
        let isLongPress = false;

        const start = (e) => {
            e.stopPropagation();
            if (interval) clearInterval(interval);
            this.resetUIHideTimer();
            time = 0;
            isLongPress = false;

            interval = setInterval(() => {
                time += 50;
                this.resetUIHideTimer();
                if (time > 200) {
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
                onTap();
                this.resetUIHideTimer();
            } else if (isLongPress) {
                if (btn === this.rotateBtn && this.callbacks.onRotateRelease) {
                    this.callbacks.onRotateRelease();
                }
                if (btn.innerHTML.includes('circle') || btn.innerHTML.includes('9 9 0 1 1')) {
                    this.setSpeed(0.0);
                }
            }
        };

        btn.addEventListener('pointerdown', start);
        btn.addEventListener('pointerup', end);
        btn.addEventListener('pointerleave', end);
        btn.addEventListener('pointerenter', () => this.resetUIHideTimer());
    }

    setRotateActive(isActive) {
        if (this.rotateBtn) this.rotateBtn.style.color = isActive ? '#fff' : 'rgba(255,255,255,0.3)';
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
}
