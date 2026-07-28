import * as THREE from 'three';

// Procedural celestial-body textures, drawn once to a canvas at startup.

export function generateSunTexture() {
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

export function generateMoonTexture() {
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
