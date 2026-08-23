import * as THREE from 'three';

// Toronto, Ontario, Canada geographic coordinates
export const TORONTO_LAT = 43.6532 * (Math.PI / 180); // 43.6532° N
export const TORONTO_LON = -79.3832;                  // 79.3832° W

// Mid-to-late August solar declination (~ +12.5°, Aug 20)
export const AUGUST_SOLAR_DECLINATION = 12.5 * (Math.PI / 180);

// Solar right ascension for the same date (~9h57m on Aug 20).
// Ties the star sphere's sidereal phase to the sun so August constellations
// (Summer Triangle overhead, Sagittarius core low in the south) appear at the correct hours.
export const AUGUST_SOLAR_RA = (9.95 / 24) * Math.PI * 2;

/**
 * Standard IAU Galactic Coordinate System Basis Vectors in Three.js Celestial Frame
 */
export const GALACTIC_POLE = new THREE.Vector3(-0.1980, 0.4560, 0.8677).normalize();
export const GALACTIC_CENTER = new THREE.Vector3(-0.8734, -0.4838, 0.0549).normalize();
export const GALACTIC_90 = new THREE.Vector3(0.4448, -0.7469, 0.4941).normalize();

/**
 * Converts Equatorial coordinates (Declination, Local Hour Angle) to Horizon coordinates (Altitude, Azimuth)
 * for an observer in Toronto.
 *
 * Scene compass convention: the returned azimuth feeds horizontalToCartesian such that the
 * scene frame has NORTH = +z (Polaris sits over +z), SOUTH = -z (sun/moon culminate there),
 * EAST = -x and WEST = +x (right-handed with +y up). The star sphere in
 * createTorontoSkySystem uses the exact same frame, so sun, moon, stars and Milky Way
 * are mutually consistent.
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
export function horizontalToCartesian(alt, azNav, radius = 1600) {
    const cosAlt = Math.cos(alt);
    const x = radius * cosAlt * Math.sin(azNav);
    const y = radius * Math.sin(alt);
    const z = -radius * cosAlt * Math.cos(azNav);
    return new THREE.Vector3(x, y, z);
}

/**
 * Calculates Toronto solar and lunar positions for a given time angle in August.
 */
export function calculateTorontoSunMoon(timeAngle, radius = 1600) {
    const hourAngle = timeAngle - (Math.PI / 2);

    const sunHoriz = getEquatorialToHorizontal(TORONTO_LAT, AUGUST_SOLAR_DECLINATION, hourAngle);
    const sunPos = horizontalToCartesian(sunHoriz.alt, sunHoriz.az, radius);

    // Full moon: opposite the sun. Dec -11° is the true anti-solar declination for late August
    // (ecliptic longitude ~330° -> dec = asin(sin(330°)·sin(23.44°)) = -11.5°).
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
    { name: 'Polaris', ra: 2.53, dec: 89.26, mag: 1.98, color: 0xffffff, spike: true },
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

    // Summer Triangle (Overhead in Toronto in August - Brilliant with diffraction spikes)
    { name: 'Vega', ra: 18.62, dec: 38.78, mag: 0.03, color: 0xe8f4ff, spike: true },
    { name: 'Deneb', ra: 20.69, dec: 45.28, mag: 1.25, color: 0xf0f6ff, spike: true },
    { name: 'Altair', ra: 19.85, dec: 8.87, mag: 0.77, color: 0xfcffff, spike: true },

    // Cygnus (The Northern Cross along Milky Way spine)
    { name: 'Sadr', ra: 20.37, dec: 40.26, mag: 2.23, color: 0xfffaea },
    { name: 'Gienah', ra: 20.77, dec: 33.97, mag: 2.48, color: 0xe4f0ff },
    { name: 'Delta Cygni', ra: 19.75, dec: 45.13, mag: 2.87, color: 0xe4f0ff },
    { name: 'Albireo', ra: 19.51, dec: 27.96, mag: 3.05, color: 0xffc866 },

    // Cassiopeia ("W" asterism circumpolar in Toronto)
    { name: 'Schedar', ra: 0.68, dec: 56.54, mag: 2.24, color: 0xffc080 },
    { name: 'Caph', ra: 0.15, dec: 59.15, mag: 2.28, color: 0xfffaee },
    { name: 'Gamma Cas', ra: 0.94, dec: 60.72, mag: 2.15, color: 0xdce8ff },
    { name: 'Ruchbah', ra: 1.43, dec: 60.23, mag: 2.68, color: 0xe4f0ff },
    { name: 'Segin', ra: 1.90, dec: 63.67, mag: 3.35, color: 0xd8e8ff },

    // Scorpius & Sagittarius (Galactic Core region)
    { name: 'Antares', ra: 16.49, dec: -26.43, mag: 1.06, color: 0xff6644, spike: true },
    { name: 'Shaula', ra: 17.56, dec: -37.10, mag: 1.62, color: 0xd8e8ff },
    { name: 'Kaus Australis', ra: 18.40, dec: -34.38, mag: 1.79, color: 0xe4f0ff },
    { name: 'Nunki', ra: 18.92, dec: -26.30, mag: 2.05, color: 0xdce8ff },

    // Boötes (Golden-orange supergiant)
    { name: 'Arcturus', ra: 14.26, dec: 19.18, mag: -0.05, color: 0xffaa44, spike: true },

    // Andromeda & Pegasus
    { name: 'Alpheratz', ra: 0.14, dec: 29.09, mag: 2.07, color: 0xe4f0ff },
    { name: 'Scheat', ra: 23.06, dec: 28.08, mag: 2.44, color: 0xffb877 },
    { name: 'Markab', ra: 23.08, dec: 15.21, mag: 2.49, color: 0xe4f0ff },
    { name: 'Mirach', ra: 1.16, dec: 35.62, mag: 2.07, color: 0xffc488 },

    // Perseus & Auriga
    { name: 'Mirfak', ra: 3.41, dec: 49.86, mag: 1.79, color: 0xfff6e0 },
    { name: 'Algol', ra: 3.14, dec: 40.96, mag: 2.09, color: 0xdce8ff },
    { name: 'Capella', ra: 5.28, dec: 45.99, mag: 0.08, color: 0xffecaa, spike: true },
    { name: 'Menkalinan', ra: 6.00, dec: 44.95, mag: 1.90, color: 0xf0f6ff },

    // Ophiuchus & Serpens (large summer constellation between Scorpius and Hercules)
    { name: 'Rasalhague', ra: 17.58, dec: 12.56, mag: 2.08, color: 0xf4f8ff },
    { name: 'Sabik', ra: 17.17, dec: -15.72, mag: 2.43, color: 0xf0f6ff },
    { name: 'Unukalhai', ra: 15.74, dec: 6.43, mag: 2.63, color: 0xffcf99 },

    // Draco & Hercules (winding between the Dippers and Vega)
    { name: 'Eltanin', ra: 17.94, dec: 51.49, mag: 2.23, color: 0xffc080 },
    { name: 'Rastaban', ra: 17.51, dec: 52.30, mag: 2.79, color: 0xffe0b0 },
    { name: 'Kornephoros', ra: 16.50, dec: 21.49, mag: 2.78, color: 0xfff0d0 },

    // Corona Borealis & Libra
    { name: 'Alphecca', ra: 15.58, dec: 26.71, mag: 2.23, color: 0xeef4ff },
    { name: 'Zubeneschamali', ra: 15.28, dec: -9.38, mag: 2.61, color: 0xdcf0e8 },

    // Scorpius head
    { name: 'Dschubba', ra: 16.01, dec: -22.62, mag: 2.29, color: 0xdce8ff },
    { name: 'Acrab', ra: 16.09, dec: -19.81, mag: 2.62, color: 0xdce8ff },

    // Sagittarius Teapot (galactic core region, low in Toronto's south)
    { name: 'Kaus Media', ra: 18.35, dec: -29.83, mag: 2.70, color: 0xffd9a0 },
    { name: 'Kaus Borealis', ra: 18.47, dec: -25.42, mag: 2.81, color: 0xffd9a0 },
    { name: 'Ascella', ra: 19.08, dec: -29.88, mag: 2.60, color: 0xf0f6ff },

    // Aquila (flanking Altair)
    { name: 'Tarazed', ra: 19.77, dec: 10.61, mag: 2.72, color: 0xffc888 },

    // Pegasus, Capricornus & the southern autumn sky (rising late on August nights)
    { name: 'Enif', ra: 21.74, dec: 9.88, mag: 2.38, color: 0xffc080 },
    { name: 'Algenib', ra: 0.22, dec: 15.18, mag: 2.83, color: 0xdce8ff },
    { name: 'Fomalhaut', ra: 22.96, dec: -29.62, mag: 1.16, color: 0xf0f6ff, spike: true },
    { name: 'Deneb Algedi', ra: 21.78, dec: -16.13, mag: 2.85, color: 0xfff6e0 },
    { name: 'Sadalsuud', ra: 21.53, dec: -5.57, mag: 2.87, color: 0xfff0d0 },

    // Cepheus (circumpolar, between Cassiopeia and Draco)
    { name: 'Alderamin', ra: 21.31, dec: 62.59, mag: 2.45, color: 0xf4f8ff },

    // Aries, Andromeda, Cetus & Taurus (the pre-dawn eastern sky)
    { name: 'Hamal', ra: 2.12, dec: 23.46, mag: 2.01, color: 0xffc080 },
    { name: 'Almach', ra: 2.06, dec: 42.33, mag: 2.10, color: 0xffcf99 },
    { name: 'Diphda', ra: 0.73, dec: -17.99, mag: 2.04, color: 0xffd9a0 },
    { name: 'Aldebaran', ra: 4.60, dec: 16.51, mag: 0.86, color: 0xffab66, spike: true },

    // Alcor (Mizar's naked-eye companion in the Big Dipper's handle)
    { name: 'Alcor', ra: 13.42, dec: 54.99, mag: 3.99, color: 0xf0f6ff }
];

// --- Bake-time noise helpers (integer hash, no trig) ---
function ihash(ix, iy) {
    let n = (ix * 374761393 + iy * 668265263) | 0;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function valueNoise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    const fx = x - ix, fy = y - iy;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = ihash(ix, iy), b = ihash(ix + 1, iy);
    const c = ihash(ix, iy + 1), d = ihash(ix + 1, iy + 1);
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}

// Three octaves — at 2048x1024 the fourth lands below one texel and only costs bake time.
function fbm(x, y) {
    return valueNoise(x, y) * 0.53
        + valueNoise(x * 2.03 + 7.3, y * 2.01 + 3.1) * 0.27
        + valueNoise(x * 4.11 + 13.7, y * 4.05 + 9.2) * 0.20;
}

/**
 * Pre-bakes a photorealistic NASA/ESO-grade Milky Way panorama into a 2D equirectangular CanvasTexture.
 * Highly detailed: Galactic Bulge in Sagittarius, Scutum & Cygnus star clouds, Great Rift dust channels,
 * the Andromeda Galaxy (M31), and thousands of embedded stars.
 * Zero per-frame GPU computation.
 */
function createBakedMilkyWayTexture(isMobile = false) {
    // The band is a diffuse, bilinearly-filtered glow, so texel count buys almost no visible
    // detail but costs bake time linearly (the loop is ~1us/texel). Half the old dimensions
    // cuts the one-time load stall ~4x with no perceptible change to the glow.
    const width = isMobile ? 512 : 1024;
    const height = isMobile ? 256 : 512;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, width, height);

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const pole = GALACTIC_POLE;
    const center = GALACTIC_CENTER;
    const g90 = GALACTIC_90;

    // M31 - Andromeda Galaxy (RA 0h42.7m, Dec +41.27°, position angle ~38°)
    const m31Ra = (0.712 / 24) * Math.PI * 2;
    const m31Dec = 41.27 * (Math.PI / 180);
    const m31X = Math.cos(m31Dec) * Math.sin(m31Ra);
    const m31Y = Math.sin(m31Dec);
    const m31Z = -Math.cos(m31Dec) * Math.cos(m31Ra);
    // Tangent-plane basis at M31 (RA direction / Dec direction)
    const m31RaX = Math.cos(m31Ra), m31RaY = 0, m31RaZ = Math.sin(m31Ra);
    const m31DeX = -Math.sin(m31Dec) * Math.sin(m31Ra), m31DeY = Math.cos(m31Dec), m31DeZ = Math.sin(m31Dec) * Math.cos(m31Ra);
    const m31Gate = Math.cos(0.075);
    const m31CosPA = Math.cos(38 * Math.PI / 180), m31SinPA = Math.sin(38 * Math.PI / 180);

    for (let py = 0; py < height; py++) {
        const v = py / height;
        const dec = (0.5 - v) * Math.PI;
        const cosDec = Math.cos(dec);
        const sinDec = Math.sin(dec);

        for (let px = 0; px < width; px++) {
            const u = px / width;
            // Texel u -> right ascension of the SphereGeometry vertex that samples it.
            // Three.js spheres run x = -cos(2*PI*u)*sin(theta), z = +sin(2*PI*u)*sin(theta), and the
            // star sphere places RA mirrored in x (sky seen from inside), so ra = PI/2 + 2*PI*u.
            // This keeps the baked band exactly aligned with the star particles.
            const ra = Math.PI / 2 + u * Math.PI * 2;

            const x = cosDec * Math.sin(ra);
            const y = sinDec;
            const z = -cosDec * Math.cos(ra);

            const sinB = x * pole.x + y * pole.y + z * pole.z;
            const b = Math.asin(Math.max(-1, Math.min(1, sinB)));
            const distB = Math.abs(b);

            const xL = x * center.x + y * center.y + z * center.z;
            const yL = x * g90.x + y * g90.y + z * g90.z;
            const l = Math.atan2(yL, xL); // Galactic longitude (-PI to PI)

            // A. Galactic plane profile
            const bandWidth = 0.22 + Math.exp(-Math.pow(l * 1.5, 2.0)) * 0.18;
            const planeGlow = Math.exp(-Math.pow(distB / bandWidth, 2.0));

            // B. Galactic Bulge (Sagittarius core)
            const coreDist = Math.hypot(l * 1.25, b * 3.4);
            const coreBulge = Math.exp(-Math.pow(coreDist * 1.7, 2.0)) * 1.6;

            const m31Dot = x * m31X + y * m31Y + z * m31Z;

            if (planeGlow < 0.015 && coreBulge < 0.015 && m31Dot < m31Gate) continue;

            // C. Star Clouds
            const scutumCloud = Math.exp(-Math.pow(Math.hypot((l - 0.48) * 3.5, b * 7.0), 2.0)) * 0.55;
            const cygnusCloud = Math.exp(-Math.pow(Math.hypot((l - 1.42) * 2.8, b * 6.5), 2.0)) * 0.45;
            const sagCloud = Math.exp(-Math.pow(Math.hypot((l - 0.15) * 4.0, (b + 0.04) * 8.0), 2.0)) * 0.50;

            // D. Fractal interstellar gas turbulence (anisotropic — structures stretch along the plane)
            const gasN = fbm(l * 2.4, b * 8.0);
            const gasFine = fbm(l * 7.0 + 3.0, b * 20.0 + 5.0);
            const gas = Math.min(1.0, gasN * 0.75 + gasFine * 0.45);

            // E. The Great Rift — irregular dark dust lane hugging the plane from Cygnus
            // down through Aquila to Ophiuchus, drifting slightly below the galactic equator.
            let darkRift = 0;
            if (l > -0.30 && l < 1.70 && distB < 0.22) {
                const inRiftZone = Math.sin((l + 0.30) / 2.0 * Math.PI);
                const laneB = -0.018 - 0.035 * (fbm(l * 1.6 + 11.0, 3.7) - 0.45);
                const laneW = 0.055 + 0.06 * fbm(l * 2.2 + 23.0, 8.9);
                const lane = Math.exp(-Math.pow((b - laneB) / laneW, 2.0));
                const clumps = fbm(l * 3.0 + 41.0, b * 9.0 + 17.0);
                darkRift = inRiftZone * lane * Math.min(1.0, Math.max(0.0, (clumps - 0.28) * 2.6)) * 0.85;
            }

            // F. Combined emission. The Sagittarius-Cygnus stretch is genuinely brighter than the
            // Auriga-Perseus side, but the whole ring stays visible to the naked eye, and the core's
            // extra glow already comes from coreBulge below — so this longitude term only adds a
            // gentle emphasis. A deep falloff here just erases half the band against the sky.
            const ringBright = 0.82 + 0.18 * Math.pow(0.5 + 0.5 * Math.cos(l), 0.6);
            const clouds = scutumCloud + cygnusCloud + sagCloud;
            const emission = Math.max(0.0, (planeGlow * 0.86 * ringBright + coreBulge * 0.80 + clouds * 0.70) * (0.28 + gas * 0.72) - darkRift);

            // M31 glow: inclined elliptical disk + bright compact core
            let m31 = 0;
            if (m31Dot > m31Gate) {
                const du = x * m31RaX + y * m31RaY + z * m31RaZ;
                const dv = x * m31DeX + y * m31DeY + z * m31DeZ;
                const uR = du * m31CosPA + dv * m31SinPA;
                const vR = -du * m31SinPA + dv * m31CosPA;
                m31 = Math.exp(-(uR * uR) / (0.028 * 0.028) - (vR * vR) / (0.011 * 0.011)) * 0.30
                    + Math.exp(-(du * du + dv * dv) / (0.007 * 0.007)) * 0.55;
            }

            if (emission < 0.02 && m31 < 0.01) continue;

            const idx = (py * width + px) * 4;

            // G. Astrophotography Color Palette (Warm golden-ivory core + hydrogen-alpha pink + icy sapphire arms)
            const coreWeight = Math.min(1.0, coreBulge * 0.65 + sagCloud * 0.4 + 0.12);
            const nebulaPink = Math.max(0.0, Math.sin(l * 8.0 + b * 15.0)) * 0.15;

            let rCol = (0.72 + nebulaPink) * (1.0 - coreWeight) + 1.0 * coreWeight;
            let gCol = 0.84 * (1.0 - coreWeight) + 0.86 * coreWeight;
            let bCol = 1.0 * (1.0 - coreWeight) + 0.70 * coreWeight;

            // Compressive (gamma < 1) response: lifts the faint outer arms into visibility while
            // keeping the core from clipping to a flat blown-out blob, the way dark-adapted vision does.
            let alpha = Math.min(1.0, Math.pow(emission, 0.72) * 0.62);

            if (m31 > 0.01) {
                const t = Math.min(1.0, m31);
                rCol = rCol * (1.0 - t) + 1.00 * t;
                gCol = gCol * (1.0 - t) + 0.93 * t;
                bCol = bCol * (1.0 - t) + 0.85 * t;
                alpha = Math.min(1.0, alpha + m31 * 0.85);
            }

            data[idx] = Math.floor(rCol * 255);
            data[idx + 1] = Math.floor(gCol * 255);
            data[idx + 2] = Math.floor(bCol * 255);
            data[idx + 3] = Math.floor(alpha * 255);
        }
    }

    // No point stars are baked in here on purpose. A speck painted into this texture is one texel
    // wide, so its on-screen size is tied to the texture resolution and it reads as a fat blob
    // rather than a star. All point-star detail comes from the particle field instead, which stays
    // pixel-crisp at any resolution; this texture carries only the smooth nebulosity.
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
 * Creates the Toronto celestial sky system:
 * 1. Smooth, deep atmospheric sky dome with realistic Rayleigh/Mie scattering and horizon haze
 * 2. Pure pitch-black night sky with zero murkiness
 * 3. Photorealistic baked Milky Way panorama
 * 4. Crisp, bright, authentic diamond-like star constellations with diffraction glow
 */
export function createTorontoSkySystem(radius = 1800, isMobile = false) {
    const skyRoot = new THREE.Group();
    skyRoot.name = "TorontoSkySystem";

    // --- 1. Atmospheric Sky Dome ---
    const skyDomeGeo = new THREE.SphereGeometry(radius * 0.98, isMobile ? 24 : 32, isMobile ? 16 : 24);
    const skyDomeMat = new THREE.ShaderMaterial({
        uniforms: {
            uZenithColor: { value: new THREE.Color(0x1a4674) },
            uHorizonColor: { value: new THREE.Color(0x4c78a6) },
            uSunDir: { value: new THREE.Vector3(0, 1, 0) },
            uSunColor: { value: new THREE.Color(0xfff5d8) },
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

                // Natural atmospheric vertical gradient
                float horizonBand = exp(-h * 3.6);
                vec3 baseSky = mix(uZenithColor, uHorizonColor, horizonBand);

                // Mie forward scattering solar corona
                float sunDot = max(0.0, dot(dir, uSunDir));
                float corona = (pow(sunDot, 64.0) * 0.70 + pow(sunDot, 8.0) * 0.28) * (1.0 - uNightFactor);

                vec3 col = baseSky + uSunColor * corona;

                // Night: near-black with faint airglow blue at zenith and a subtle horizon glow,
                // instead of an unphysical pure-black void
                vec3 nightSky = mix(vec3(0.010, 0.016, 0.032), vec3(0.038, 0.046, 0.068), horizonBand);
                col = mix(col, nightSky, uNightFactor);

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

    // A. Pre-baked Photorealistic Milky Way Equirectangular Mesh
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
                float a = tex.a * uNightFactor * altFade * 0.66;
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

    // B. Total Star Particle Field. Carries all point-star detail now that none is baked into the
    // Milky Way texture, so the counts absorb what the texture specks used to contribute.
    const starCount = isMobile ? 4200 : 9000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    let idx = 0;
    const starRadius = radius * 0.94;

    // 1. Add bright named constellation stars.
    // NOTE: the x term is negated — the celestial sphere is viewed from INSIDE, so RA must be
    // mirrored or every constellation renders back-to-front (Big Dipper flipped, etc.).
    TORONTO_STARS.forEach(st => {
        const raRad = (st.ra / 24) * (Math.PI * 2);
        const decRad = (st.dec * Math.PI) / 180;

        const x = -starRadius * Math.cos(decRad) * Math.sin(raRad);
        const y = starRadius * Math.sin(decRad);
        const z = -starRadius * Math.cos(decRad) * Math.cos(raRad);

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const c = new THREE.Color(st.color);
        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        sizes[idx] = Math.max(6.0, 13.5 - st.mag * 2.0);
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
        positions[idx * 3] = -starRadius * Math.cos(decRad) * Math.sin(raRad);
        positions[idx * 3 + 1] = starRadius * Math.sin(decRad);
        positions[idx * 3 + 2] = -starRadius * Math.cos(decRad) * Math.cos(raRad);
        colors[idx * 3] = 0.92; colors[idx * 3 + 1] = 0.96; colors[idx * 3 + 2] = 1.0;
        sizes[idx] = 6.5;
        idx++;
    });

    // 3. Dense Milky Way Micro-Stardust Particles
    let seed = 777;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

    const mwDustCount = isMobile ? 2400 : 5600;
    for (let i = 0; i < mwDustCount; i++) {
        const l = rnd() * Math.PI * 2 - Math.PI;
        // Bell-shaped latitude spread (sum of three uniforms) rather than their product: the product
        // is so sharply peaked it packs every star into a ~1 degree ribbon far narrower than the
        // nebulosity behind it. This roughly matches the band's own width, thinning out with latitude.
        const bSpread = ((rnd() + rnd() + rnd()) / 3.0 - 0.5) * 2.0;
        const b = bSpread * (21.0 * Math.PI / 180);

        const cosB = Math.cos(b);
        const sinB = Math.sin(b);
        const cosL = Math.cos(l);
        const sinL = Math.sin(l);

        const dir = new THREE.Vector3()
            .addScaledVector(GALACTIC_CENTER, cosB * cosL)
            .addScaledVector(GALACTIC_90, cosB * sinL)
            .addScaledVector(GALACTIC_POLE, sinB)
            .normalize();

        // Same inside-view RA mirror as the named stars (negate x)
        positions[idx * 3] = -dir.x * starRadius;
        positions[idx * 3 + 1] = dir.y * starRadius;
        positions[idx * 3 + 2] = dir.z * starRadius;

        const centerDist = Math.abs(l);
        if (centerDist < 0.75 && rnd() > 0.35) {
            colors[idx * 3] = 1.0; colors[idx * 3 + 1] = 0.92; colors[idx * 3 + 2] = 0.80;
        } else {
            colors[idx * 3] = 0.90; colors[idx * 3 + 1] = 0.95; colors[idx * 3 + 2] = 1.0;
        }

        // gl_PointSize below ~1px gets clamped and washes out against the nebulosity, so these stay
        // just above that threshold: numerous and fine enough to read as haze, but still resolvable
        // as individual stars rather than dissolving into featureless fog.
        sizes[idx] = 2.6 + rnd() * 3.0;
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
        update(sunAngle, elapsedSec, sunDist = 1600) {
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

            // Diurnal rotation matching Toronto's latitude (43.65° N).
            // rotation.x tilts the celestial pole up to +z at altitude 43.65° (Polaris = scene north).
            // rotation.y is the sidereal spin: local sidereal time LST = sunHourAngle + sunRA,
            // and with the mirrored star placement the spin is -LST. This puts the correct
            // August sky at each hour (Summer Triangle overhead at 10pm, galactic core in the
            // south, Vega high in the west at midnight) and keeps stars, sun and moon consistent.
            const lst = (sunAngle - Math.PI / 2) + AUGUST_SOLAR_RA;
            celestialGroup.rotation.order = 'ZXY';
            celestialGroup.rotation.x = (Math.PI / 2 - TORONTO_LAT);
            celestialGroup.rotation.y = -lst;

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
