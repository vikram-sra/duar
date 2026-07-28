import { toGurmukhi } from '../util/gurmukhi.js';

// Live local-time clock in Gurmukhi numerals (HH : MM : SS : mmm).
// The timezone label is hidden until hover (desktop) or tap (touch), then
// hides again after 5s. Returns a stop() for teardown.
export function startClock() {
    const clockEl = document.getElementById('clock');
    const timeEl = document.getElementById('clock-time');
    const tzEl = document.getElementById('clock-tz');

    if (tzEl) {
        try { tzEl.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* noop */ }
    }

    let tzHideTimeout;
    if (clockEl && timeEl) {
        const revealTz = () => {
            clockEl.classList.add('tz-visible');
            clearTimeout(tzHideTimeout);
            tzHideTimeout = setTimeout(() => clockEl.classList.remove('tz-visible'), 5000);
        };
        timeEl.addEventListener('mouseenter', revealTz);
        timeEl.addEventListener('touchstart', (e) => { e.stopPropagation(); revealTz(); }, { passive: true });
        timeEl.addEventListener('click', (e) => e.stopPropagation());
    }

    if (!timeEl) return () => {};

    const p2 = n => String(n).padStart(2, '0');
    const p3 = n => String(n).padStart(3, '0');
    const tick = () => {
        const d = new Date();
        const s = `${p2(d.getHours())} : ${p2(d.getMinutes())} : ${p2(d.getSeconds())} : ${p3(d.getMilliseconds())}`;
        timeEl.textContent = toGurmukhi(s);
    };
    tick();
    // Decoupled from the rAF ticker so the milliseconds stay smooth.
    const interval = setInterval(tick, 40);

    return () => { clearInterval(interval); clearTimeout(tzHideTimeout); };
}
