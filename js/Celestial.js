import * as THREE from 'three';

export class Celestial {
    constructor(scene) {
        this.scene = scene;
        this.sunDist = 600;

        this.setupLighting();
    }

    setupLighting() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.1);
        this.scene.add(ambient);

        this.hemiLight = new THREE.HemisphereLight(0xffffff, 0x222244, 0.3);
        this.scene.add(this.hemiLight);

        // Sun Light
        this.sunLight = new THREE.DirectionalLight(0xffddaa, 1.5);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 8192; // High res shadows
        this.sunLight.shadow.mapSize.height = 8192;
        this.sunLight.shadow.camera.near = 0.5;
        this.sunLight.shadow.camera.far = 1000;
        const d = 55;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.sunLight.shadow.bias = -0.0000;
        this.sunLight.shadow.radius = 3;
        this.scene.add(this.sunLight);

        const sunTex = this.generateSunTexture();
        this.sunMesh = new THREE.Mesh(
            new THREE.SphereGeometry(30, 64, 64),
            new THREE.MeshStandardMaterial({
                map: sunTex,
                emissiveMap: sunTex,
                emissive: 0xffaa00,
                emissiveIntensity: 5.0,
                fog: true
            })
        );
        this.scene.add(this.sunMesh);

        // Moon Light
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
        this.moonLight.shadow.radius = 3;
        this.scene.add(this.moonLight);

        const moonTex = this.generateMoonTexture();
        this.moonMesh = new THREE.Mesh(
            new THREE.SphereGeometry(20, 64, 64),
            new THREE.MeshStandardMaterial({
                map: moonTex,
                emissiveMap: moonTex,
                emissive: 0xffffff,
                emissiveIntensity: 3.5,
                roughness: 0.9,
                metalness: 0,
                fog: true
            })
        );
        this.scene.add(this.moonMesh);
    }

    generateSunTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024; canvas.height = 512;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#ff4500';
        ctx.fillRect(0, 0, 1024, 512);

        for (let i = 0; i < 40000; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const r = Math.random() * 2 + 0.5;
            const val = Math.random();

            if (val > 0.98) ctx.fillStyle = '#ffffff';
            else if (val > 0.7) ctx.fillStyle = '#ffcc00';
            else if (val > 0.4) ctx.fillStyle = '#ff8c00';
            else ctx.fillStyle = '#8B0000';

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

        ctx.fillStyle = '#d0d0d0';
        ctx.fillRect(0, 0, 1024, 512);

        for (let i = 0; i < 25000; i++) {
            const x = Math.random() * 1024;
            const y = Math.random() * 512;
            const val = Math.random();

            if (val > 0.85) {
                ctx.fillStyle = '#2a2a2a';
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(x, y, Math.random() * 80 + 20, 0, Math.PI * 2);
                ctx.fill();
            } else if (val > 0.5) {
                ctx.fillStyle = '#ffffff';
                ctx.globalAlpha = 0.4;
                const r = Math.random() * 4 + 1;
                ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#444444';
                ctx.beginPath(); ctx.arc(x + 1, y + 1, r * 0.8, 0, Math.PI * 2); ctx.fill();
            } else {
                ctx.fillStyle = Math.random() > 0.5 ? '#fcfcfc' : '#888888';
                ctx.globalAlpha = 0.1;
                ctx.fillRect(x, y, 2, 2);
            }
        }
        return new THREE.CanvasTexture(canvas);
    }

    update(sunAngle) {
        const r = this.sunDist;
        const zPlane = -this.sunDist * 0.4;

        const y = Math.sin(sunAngle) * r;
        const x = Math.cos(sunAngle) * r;

        this.sunLight.position.set(x, y, zPlane);
        this.sunMesh.position.set(x, y, zPlane);
        this.moonLight.position.set(-x, -y, zPlane);
        this.moonMesh.position.set(-x, -y, zPlane);

        this.moonMesh.rotation.y = Math.atan2(-x, zPlane) + Math.PI;

        const sH = Math.max(0, Math.sin(sunAngle));
        const mH = Math.max(0, -Math.sin(sunAngle));

        this.sunLight.intensity = (Math.sin(sunAngle) + 0.1 > 0) ? (sH * 5.0) : 0;
        this.moonLight.intensity = (-Math.sin(sunAngle) + 0.1 > 0) ? (mH * 3.5) : 0;

        const angleMod = ((sunAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const transitionZone = Math.PI / 3;

        // Sunset/Sunrise logic
        this.updateSunColor(angleMod, transitionZone);
        this.updateMoonColor(angleMod, transitionZone);

        // Env Colors
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

    updateSunColor(angleMod, transitionZone) {
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
    }

    updateMoonColor(angleMod, transitionZone) {
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
    }
}
