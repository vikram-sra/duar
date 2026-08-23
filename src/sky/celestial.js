import * as THREE from 'three';

// Toronto, Ontario, Canada geographic coordinates
export const TORONTO_LAT = 43.6532 * (Math.PI / 180); // 43.6532° N
export const TORONTO_LON = -79.3832;                  // 79.3832° W

// Mid-to-late August solar declination (~ +12.5°)
export const AUGUST_SOLAR_DECLINATION = 12.5 * (Math.PI / 180);

/**
 * Standard IAU Galactic Coordinate System Basis Vectors in Three.js Celestial Frame
 */
export const GALACTIC_POLE = new THREE.Vector3(-0.1980, 0.4560, 0.8677).normalize();
export const GALACTIC_CENTER = new THREE.Vector3(-0.8734, -0.4838, 0.0549).normalize();
export const GALACTIC_90 = new THREE.Vector3(0.4448, -0.7469, 0.4941).normalize();

/**
 * Converts Equatorial coordinates (Declination, Local Hour Angle) to Horizon coordinates (Altitude, Azimuth)
 * for an observer in Toronto.
 */
export function getEquatorialToHorizontal(lat, dec, hourAngle) {
    const sinAlt = Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(hourAngle);
    const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));

    const cosAlt = Math.cos(alt);
    if (Math.abs(cosAlt) < 1e-5) {
        return { alt, az: 0 };
    }

    const cosAz = (Math.sin(dec) - Math.sin(lat) * Math.sin(alt)) / (Math.cos(lat) * cosAlt);
    const sinAz = (-Math.cos(dec) * Math.sin(hourAngle)) / cosAlt;
    let azFromSouth = Math.atan2(sinAz, Math.max(-1, Math.min(1, cosAz)));
    if (azFromSouth < 0) azFromSouth += Math.PI * 2;

    let azNav = (azFromSouth + Math.PI) % (Math.PI * 2);
    return { alt, az: azNav };
}

/**
 * Converts altitude and azimuth into Three.js 3D world coordinates.
 */
export function horizontalToCartesian(alt, azNav, radius = 650) {
    const cosAlt = Math.cos(alt);
    const x = radius * cosAlt * Math.sin(azNav);
    const y = radius * Math.sin(alt);
    const z = -radius * cosAlt * Math.cos(azNav);
    return new THREE.Vector3(x, y, z);
}

/**
 * Calculates Toronto solar and lunar positions for a given time angle in August.
 */
export function calculateTorontoSunMoon(timeAngle, radius = 650) {
    const hourAngle = timeAngle - (Math.PI / 2);

    const sunHoriz = getEquatorialToHorizontal(TORONTO_LAT, AUGUST_SOLAR_DECLINATION, hourAngle);
    const sunPos = horizontalToCartesian(sunHoriz.alt, sunHoriz.az, radius);

    const moonHourAngle = hourAngle + Math.PI;
    const moonDec = -11.0 * (Math.PI / 180);
    const moonHoriz = getEquatorialToHorizontal(TORONTO_LAT, moonDec, moonHourAngle);
    const moonPos = horizontalToCartesian(moonHoriz.alt, moonHoriz.az, radius);

    return {
        sunPos,
        sunAlt: sunHoriz.alt,
        sunAz: sunHoriz.az,
        moonPos,
        moonAlt: moonHoriz.alt,
        moonAz: moonHoriz.az
    };
}

/**
 * Authentic Bright Star Catalogue for Toronto's August Night Sky
 */
const TORONTO_STARS = [
    // Ursa Minor & North Celestial Pole
    { name: 'Polaris', ra: 2.53, dec: 89.26, mag: 1.98, color: 0xffffff },
    { name: 'Kochab', ra: 14.85, dec: 74.16, mag: 2.08, color: 0xffd299 },
    { name: 'Pherkad', ra: 15.35, dec: 71.83, mag: 3.05, color: 0xe8f2ff },

    // Ursa Major (The Big Dipper)
    { name: 'Dubhe', ra: 11.06, dec: 61.75, mag: 1.79, color: 0xffdfaa },
    { name: 'Merak', ra: 11.03, dec: 56.38, mag: 2.37, color: 0xe4efff },
    { name: 'Phecda', ra: 11.90, dec: 53.69, mag: 2.44, color: 0xe4efff },
    { name: 'Megrez', ra: 12.25, dec: 57.03, mag: 3.31, color: 0xe4efff },
    { name: 'Alioth', ra: 12.90, dec: 55.96, mag: 1.77, color: 0xe4efff },
    { name: 'Mizar', ra: 13.40, dec: 54.92, mag: 2.23, color: 0xf0f6ff },
    { name: 'Alkaid', ra: 13.79, dec: 49.31, mag: 1.86, color: 0xd8e8ff },

    // Summer Triangle (Overhead in Toronto in August)
    { name: 'Vega', ra: 18.62, dec: 38.78, mag: 0.03, color: 0xe8f4ff },
    { name: 'Deneb', ra: 20.69, dec: 45.28, mag: 1.25, color: 0xf0f6ff },
    { name: 'Altair', ra: 19.85, dec: 8.87, mag: 0.77, color: 0xfcffff },

    // Cygnus (The Northern Cross)
    { name: 'Sadr', ra: 20.37, dec: 40.26, mag: 2.23, color: 0xfffaea },
    { name: 'Gienah', ra: 20.77, dec: 33.97, mag: 2.48, color: 0xe4f0ff },
    { name: 'Delta Cygni', ra: 19.75, dec: 45.13, mag: 2.87, color: 0xe4f0ff },
    { name: 'Albireo', ra: 19.51, dec: 27.96, mag: 3.05, color: 0xffc866 },

    // Cassiopeia
    { name: 'Schedar', ra: 0.68, dec: 56.54, mag: 2.24, color: 0xffc080 },
    { name: 'Caph', ra: 0.15, dec: 59.15, mag: 2.28, color: 0xfffaee },
    { name: 'Gamma Cas', ra: 0.94, dec: 60.72, mag: 2.15, color: 0xdce8ff },
    { name: 'Ruchbah', ra: 1.43, dec: 60.23, mag: 2.68, color: 0xe4f0ff },
    { name: 'Segin', ra: 1.90, dec: 63.67, mag: 3.35, color: 0xd8e8ff },

    // Scorpius & Sagittarius
    { name: 'Antares', ra: 16.49, dec: -26.43, mag: 1.06, color: 0xff6644 },
    { name: 'Shaula', ra: 17.56, dec: -37.10, mag: 1.62, color: 0xd8e8ff },
    { name: 'Kaus Australis', ra: 18.40, dec: -34.38, mag: 1.79, color: 0xe4f0ff },
    { name: 'Nunki', ra: 18.92, dec: -26.30, mag: 2.05, color: 0xdce8ff },

    // Boötes
    { name: 'Arcturus', ra: 14.26, dec: 19.18, mag: -0.05, color: 0xffaa44 },

    // Andromeda & Pegasus
    { name: 'Alpheratz', ra: 0.14, dec: 29.09, mag: 2.07, color: 0xe4f0ff },
    { name: 'Scheat', ra: 23.06, dec: 28.08, mag: 2.44, color: 0xffb877 },
    { name: 'Markab', ra: 23.08, dec: 15.21, mag: 2.49, color: 0xe4f0ff },
    { name: 'Mirach', ra: 1.16, dec: 35.62, mag: 2.07, color: 0xffc488 },

    // Perseus & Auriga
    { name: 'Mirfak', ra: 3.41, dec: 49.86, mag: 1.79, color: 0xfff6e0 },
    { name: 'Algol', ra: 3.14, dec: 40.96, mag: 2.09, color: 0xdce8ff },
    { name: 'Capella', ra: 5.28, dec: 45.99, mag: 0.08, color: 0xffecaa }
];

/**
 * Pre-bakes the photorealistic Milky Way into a 2D equirectangular CanvasTexture once at startup.
 * Zero per-frame shader noise calculations on GPU, ensuring cool device operation and zero thermal throttling.
 */
function createBakedMilkyWayTexture(isMobile = false) {
    const width = isMobile ? 1024 : 2048;
    const height = isMobile ? 512 : 1024;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, width, height);

    // High performance offline canvas generation
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const pole = GALACTIC_POLE;
    const center = GALACTIC_CENTER;
    const g90 = GALACTIC_90;

    for (let py = 0; py < height; py++) {
        const v = py / height;
        const dec = (0.5 - v) * Math.PI; // -PI/2 to PI/2
        const cosDec = Math.cos(dec);
        const sinDec = Math.sin(dec);

        for (let px = 0; px < width; px++) {
            const u = px / width;
            const ra = u * Math.PI * 2; // 0 to 2PI

            // Cartesian on celestial sphere
            const x = cosDec * Math.sin(ra);
            const y = sinDec;
            const z = -cosDec * Math.cos(ra);

            // Galactic coordinates
            const sinB = x * pole.x + y * pole.y + z * pole.z;
            const b = Math.asin(Math.max(-1, Math.min(1, sinB)));
            const distB = Math.abs(b);

            const xL = x * center.x + y * center.y + z * center.z;
            const yL = x * g90.x + y * g90.y + z * g90.z;
            const l = Math.atan2(yL, xL);

            // Galactic plane profile
            const centerDist = Math.hypot(l * 1.1, b * 3.0);
            const coreBulge = Math.exp(-Math.pow(centerDist * 1.8, 2.0)) * 1.2;

            const bandWidth = 0.20 + Math.exp(-Math.pow(l * 1.4, 2.0)) * 0.14;
            const planeGlow = Math.exp(-Math.pow(distB / bandWidth, 2.0));

            if (planeGlow < 0.015 && coreBulge < 0.015) continue;

            // Simplified fast offline noise for Great Rift and stardust haze
            const n1 = Math.sin(l * 6.0 + b * 12.0) * Math.cos(l * 14.0 - b * 8.0) * 0.5 + 0.5;
            const n2 = Math.sin(l * 18.0 - b * 24.0) * 0.5 + 0.5;
            const gas = n1 * 0.65 + n2 * 0.35;

            // Great rift dark absorption
            const riftZone = (l > -0.35 && l < 1.65) ? Math.sin((l + 0.35) / 2.0 * Math.PI) : 0;
            const darkRift = (gas > 0.42 && distB < 0.10) ? riftZone * 0.65 : 0;

            const total = (planeGlow * 0.48 + coreBulge * 0.85) * (0.35 + Math.max(0, gas - darkRift) * 0.65);
            if (total < 0.02) continue;

            const idx = (py * width + px) * 4;

            // Warm core vs cool arms
            const isCore = Math.min(1, coreBulge * 0.75 + 0.15);
            const r = 0.70 * (1 - isCore) + 1.0 * isCore;
            const g = 0.84 * (1 - isCore) + 0.88 * isCore;
            const bCol = 1.0 * (1 - isCore) + 0.74 * isCore;

            const alpha = Math.min(1, total * 0.42);

            data[idx] = Math.floor(r * 255);
            data[idx + 1] = Math.floor(g * 255);
            data[idx + 2] = Math.floor(bCol * 255);
            data[idx + 3] = Math.floor(alpha * 255);
        }
    }

    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
    return texture;
}

/**
 * Creates the thermal-optimized Toronto celestial sky system:
 * 1. Deep, elegant, non-blinding daytime & sunset atmospheric sky dome (lightweight vertex/frag shader)
 * 2. Pure pitch-black night sky with zero murkiness
 * 3. Pre-baked 2D Milky Way texture (0 GPU noise overhead)
 * 4. Crisp, bright, authentic diamond-like star constellations
 */
export function createTorontoSkySystem(radius = 700, isMobile = false) {
    const skyRoot = new THREE.Group();
    skyRoot.name = "TorontoSkySystem";

    // --- 1. Elegant Atmospheric Sky Dome (Lightweight) ---
    const skyDomeGeo = new THREE.SphereGeometry(radius * 0.98, isMobile ? 16 : 24, isMobile ? 12 : 16);
    const skyDomeMat = new THREE.ShaderMaterial({
        uniforms: {
            uZenithColor: { value: new THREE.Color(0x28568a) },
            uHorizonColor: { value: new THREE.Color(0x5682ad) },
            uSunDir: { value: new THREE.Vector3(0, 1, 0) },
            uSunColor: { value: new THREE.Color(0xfff2d0) },
            uNightFactor: { value: 0.0 }
        },
        vertexShader: `
            varying vec3 vWorldPos;
            void main() {
                vWorldPos = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uZenithColor;
            uniform vec3 uHorizonColor;
            uniform vec3 uSunDir;
            uniform vec3 uSunColor;
            uniform float uNightFactor;
            varying vec3 vWorldPos;

            void main() {
                vec3 dir = normalize(vWorldPos);
                float h = max(0.0, dir.y);

                float grad = exp(-h * 4.5);
                vec3 baseSky = mix(uZenithColor, uHorizonColor, grad);

                float sunDot = max(0.0, dot(dir, uSunDir));
                float sunGlow = pow(sunDot, 10.0) * (1.0 - uNightFactor) * 0.30;

                vec3 col = baseSky + uSunColor * sunGlow;
                col = mix(col, vec3(0.0), uNightFactor);

                gl_FragColor = vec4(col, 1.0);
            }
        `,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false
    });
    const skyDome = new THREE.Mesh(skyDomeGeo, skyDomeMat);
    skyDome.renderOrder = -200;
    skyRoot.add(skyDome);

    // --- 2. Celestial Sphere with Accurate Stars & Realistic Milky Way ---
    const celestialGroup = new THREE.Group();
    celestialGroup.name = "TorontoCelestialGroup";

    // A. Pre-baked 2D Milky Way Equirectangular Mesh (Near 0 GPU Overhead)
    const mwTexture = createBakedMilkyWayTexture(isMobile);
    const mwGeo = new THREE.SphereGeometry(radius * 0.95, isMobile ? 24 : 36, isMobile ? 16 : 24);
    const mwMat = new THREE.ShaderMaterial({
        uniforms: {
            uMwTex: { value: mwTexture },
            uNightFactor: { value: 0.0 }
        },
        vertexShader: `
            varying vec2 vUv;
            varying vec3 vWorldDir;
            void main() {
                vUv = uv;
                vWorldDir = normalize((modelMatrix * vec4(position, 1.0)).xyz);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D uMwTex;
            uniform float uNightFactor;
            varying vec2 vUv;
            varying vec3 vWorldDir;

            void main() {
                if (uNightFactor <= 0.001) discard;
                vec4 tex = texture2D(uMwTex, vUv);
                float altFade = smoothstep(-0.02, 0.12, normalize(vWorldDir).y);
                float a = tex.a * uNightFactor * altFade * 0.65;
                if (a <= 0.001) discard;
                gl_FragColor = vec4(tex.rgb * a, a);
            }
        `,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false
    });

    const mwMesh = new THREE.Mesh(mwGeo, mwMat);
    mwMesh.renderOrder = -160;
    celestialGroup.add(mwMesh);

    // B. Total Star Particle Field (Thermal-balanced count for mobile)
    const starCount = isMobile ? 2400 : 5500;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    let idx = 0;
    const starRadius = radius * 0.94;

    // 1. Add bright named constellation stars
    TORONTO_STARS.forEach(st => {
        const raRad = (st.ra / 24) * (Math.PI * 2);
        const decRad = (st.dec * Math.PI) / 180;

        const x = starRadius * Math.cos(decRad) * Math.sin(raRad);
        const y = starRadius * Math.sin(decRad);
        const z = -starRadius * Math.cos(decRad) * Math.cos(raRad);

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const c = new THREE.Color(st.color);
        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        sizes[idx] = Math.max(5.5, 12.0 - st.mag * 1.8);
        idx++;
    });

    // 2. Add Pleiades Cluster (M45)
    const pleiades = [
        { ra: 3.79, dec: 24.1, mag: 2.8 }, { ra: 3.78, dec: 24.4, mag: 3.7 },
        { ra: 3.82, dec: 24.1, mag: 3.6 }, { ra: 3.75, dec: 24.1, mag: 3.9 },
        { ra: 3.79, dec: 23.8, mag: 4.2 }, { ra: 3.83, dec: 24.6, mag: 4.3 }
    ];
    pleiades.forEach(st => {
        const raRad = (st.ra / 24) * (Math.PI * 2);
        const decRad = (st.dec * Math.PI) / 180;
        positions[idx * 3] = starRadius * Math.cos(decRad) * Math.sin(raRad);
        positions[idx * 3 + 1] = starRadius * Math.sin(decRad);
        positions[idx * 3 + 2] = -starRadius * Math.cos(decRad) * Math.cos(raRad);
        colors[idx * 3] = 0.92; colors[idx * 3 + 1] = 0.96; colors[idx * 3 + 2] = 1.0;
        sizes[idx] = 6.0;
        idx++;
    });

    // 3. Dense Milky Way Micro-Stardust Particles
    let seed = 777;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

    const mwDustCount = isMobile ? 1200 : 2800;
    for (let i = 0; i < mwDustCount; i++) {
        const l = rnd() * Math.PI * 2 - Math.PI;
        const bSpread = (rnd() - 0.5) * (rnd() - 0.5) * (rnd() - 0.5) * 1.7;
        const b = bSpread * (32.0 * Math.PI / 180);

        const cosB = Math.cos(b);
        const sinB = Math.sin(b);
        const cosL = Math.cos(l);
        const sinL = Math.sin(l);

        const dir = new THREE.Vector3()
            .addScaledVector(GALACTIC_CENTER, cosB * cosL)
            .addScaledVector(GALACTIC_90, cosB * sinL)
            .addScaledVector(GALACTIC_POLE, sinB)
            .normalize();

        positions[idx * 3] = dir.x * starRadius;
        positions[idx * 3 + 1] = dir.y * starRadius;
        positions[idx * 3 + 2] = dir.z * starRadius;

        const centerDist = Math.abs(l);
        if (centerDist < 0.75 && rnd() > 0.35) {
            colors[idx * 3] = 1.0; colors[idx * 3 + 1] = 0.92; colors[idx * 3 + 2] = 0.80;
        } else {
            colors[idx * 3] = 0.90; colors[idx * 3 + 1] = 0.95; colors[idx * 3 + 2] = 1.0;
        }

        sizes[idx] = 1.4 + rnd() * 2.0;
        idx++;
    }

    // 4. Background stars
    while (idx < starCount) {
        const u = rnd();
        const v = rnd();
        const theta = u * Math.PI * 2;
        const phi = Math.acos(2.0 * v - 1.0);

        positions[idx * 3] = starRadius * Math.sin(phi) * Math.sin(theta);
        positions[idx * 3 + 1] = starRadius * Math.cos(phi);
        positions[idx * 3 + 2] = -starRadius * Math.sin(phi) * Math.cos(theta);

        const spec = rnd();
        if (spec < 0.60) {
            colors[idx * 3] = 0.94; colors[idx * 3 + 1] = 0.97; colors[idx * 3 + 2] = 1.0;
        } else if (spec < 0.85) {
            colors[idx * 3] = 1.0; colors[idx * 3 + 1] = 0.98; colors[idx * 3 + 2] = 0.94;
        } else {
            colors[idx * 3] = 1.0; colors[idx * 3 + 1] = 0.85; colors[idx * 3 + 2] = 0.65;
        }

        sizes[idx] = 1.2 + rnd() * 1.8;
        idx++;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const starMat = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 },
            uNightFactor: { value: 0.0 }
        },
        vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            varying float vAlpha;
            uniform float uTime;
            uniform float uNightFactor;

            void main() {
                vColor = color;
                float twinkle = 0.84 + 0.16 * sin(uTime * 3.0 + position.x * 0.04 + position.y * 0.06);
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                float altitudeFade = smoothstep(-0.02, 0.12, normalize(worldPos.xyz).y);
                vAlpha = uNightFactor * twinkle * altitudeFade;

                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (640.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;

            void main() {
                if (vAlpha <= 0.001) discard;
                vec2 pt = gl_PointCoord - vec2(0.5);
                float distSq = dot(pt, pt);
                if (distSq > 0.25) discard;

                float core = exp(-distSq * 18.0);
                float halo = exp(-distSq * 4.5) * 0.45;
                float intensity = (core + halo) * vAlpha;
                gl_FragColor = vec4(vColor * intensity * 1.45, intensity * 0.85);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    starPoints.renderOrder = -150;
    celestialGroup.add(starPoints);

    skyRoot.add(celestialGroup);

    return {
        skyRoot,
        skyDomeMat,
        mwMat,
        starMat,
        celestialGroup,
        /**
         * Updates celestial positions and sky dome colors for Toronto's latitude.
         */
        update(sunAngle, elapsedSec, sunDist = 650) {
            const cel = calculateTorontoSunMoon(sunAngle, sunDist);
            const sunAlt = cel.sunAlt;
            const sH = Math.max(0, Math.sin(sunAlt));
            const mH = Math.max(0, Math.sin(cel.moonAlt));

            // Night factor: 0 in daytime -> 1 at deep night
            const nightFactor = THREE.MathUtils.clamp((-sunAlt + 0.08) / 0.20, 0.0, 1.0);

            // Update sky dome shader uniforms
            skyDomeMat.uniforms.uSunDir.value.copy(cel.sunPos).normalize();
            skyDomeMat.uniforms.uNightFactor.value = nightFactor;

            // Update stars & Milky Way
            starMat.uniforms.uNightFactor.value = nightFactor;
            starMat.uniforms.uTime.value = elapsedSec;
            mwMat.uniforms.uNightFactor.value = nightFactor;

            // Diurnal rotation matching Toronto's latitude (43.65° N)
            celestialGroup.rotation.order = 'ZXY';
            celestialGroup.rotation.x = -(Math.PI / 2 - TORONTO_LAT);
            celestialGroup.rotation.y = sunAngle;

            return {
                cel,
                sunAlt,
                sH,
                mH,
                nightFactor
            };
        }
    };
}
