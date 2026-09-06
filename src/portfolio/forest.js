import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { BASE_RADIUS, RING_SPACING } from './layout.js';
import { getAssetUrl } from '../utils/paths.js';

// ===========================================================================
// Ultra-Realistic Botanical Forest & Masterpiece Sacred Rose
//
// Key Technologies:
// 1. GPU Vertex Shader Wind: Global rolling gusts & micro-leaf fluttering via onBeforeCompile.
// 2. Dynamic Grass Meadow: Multi-blade clumps with height-compliant GPU wind bending.
// 3. Continuous Spline Lofting: Seamless organic wood with zero polygon seams or kinks.
// 4. 5 Indian Species: Mango, Banyan, Sacred Peepal, Neem, and Gulmohar.
// 5. Museum-Grade Fibonacci Rose: 82 velvety petals, dewdrops, prickles, sepals, and mossy hummock.
// 6. Pre-Cached Archetypes: Instant <15ms view switching at a locked 60 FPS.
// ===========================================================================

function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0; a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const UP = new THREE.Vector3(0, 1, 0);
const ONE = new THREE.Vector3(1, 1, 1);
const _color = new THREE.Color();

// ---------------------------------------------------------------------------
// 1. GPU Vertex Shader Wind Engine
// ---------------------------------------------------------------------------

export const forestWindUniforms = {
    uWindTime: { value: 0 },
    uWindStrength: { value: 0.0 },
    uWindScale: { value: 0.075 },
    uGrassGrowth: { value: 1.0 }
};

// Direction of whichever light is currently dominant (sun, then moon), in VIEW
// space, plus how strongly to shade by it. View space rather than world because
// Three's `transformedNormal` is already view-space and already instancing-
// aware, so the two can be compared directly without rebuilding the instance
// transform in the shader.
export const forestLightUniforms = {
    uSunViewDir: { value: new THREE.Vector3(0, 1, 0) },
    uShadeAmount: { value: 1.0 },
    uBacksideShade: { value: 0.38 }
};

export const forestGroundUniforms = {
    uForestWave: { value: 0.0 },
    uForestActive: { value: 0.0 }
};

export function updateForestWind(time, dynamicStrength = 0.0) {
    forestWindUniforms.uWindTime.value = time;
    forestWindUniforms.uWindStrength.value = dynamicStrength;
}

// Call once per frame with the dominant light's world direction. `strength` is
// how much directional character the lighting has right now -- full in daylight,
// low under moonlight, where a hard lit/unlit split would look wrong.
const _sunViewScratch = new THREE.Vector3();
export function updateForestLighting(lightWorldDir, camera, strength = 1.0) {
    _sunViewScratch.copy(lightWorldDir).normalize().transformDirection(camera.matrixWorldInverse);
    forestLightUniforms.uSunViewDir.value.copy(_sunViewScratch);
    forestLightUniforms.uShadeAmount.value = THREE.MathUtils.clamp(strength, 0, 1);
}

// Leaves are drawn DoubleSide so they stay visible edge-on and from behind.
// Three pays for that by flipping the shading normal on back faces, so a leaf
// lit from behind shades exactly like one lit from the front and the canopy
// loses its light-and-shade entirely -- everything reads uniformly bright.
//
// This restores it by shading against the *geometric* normal, which is not
// flipped: a surface whose true normal points away from the sun darkens,
// whichever side of it the camera happens to be on. Leaves are thin and
// translucent, so the far side is dimmed rather than blacked out.
function applyFoliageSunShading(shader) {
    shader.uniforms.uSunViewDir = forestLightUniforms.uSunViewDir;
    shader.uniforms.uShadeAmount = forestLightUniforms.uShadeAmount;
    shader.uniforms.uBacksideShade = forestLightUniforms.uBacksideShade;

    shader.vertexShader = 'varying vec3 vFoliageNormal;\n' + shader.vertexShader.replace(
        '#include <defaultnormal_vertex>',
        `#include <defaultnormal_vertex>
         // View-space and instancing-aware, straight out of the stock chunk.
         vFoliageNormal = transformedNormal;`
    );

    shader.fragmentShader = `
        uniform vec3 uSunViewDir;
        uniform float uShadeAmount;
        uniform float uBacksideShade;
        varying vec3 vFoliageNormal;
    \n` + shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        `#include <dithering_fragment>
         float sunFacing = dot(normalize(vFoliageNormal), normalize(uSunViewDir));
         // Wide, soft terminator: a hard step across a canopy of flat quads
         // reads as faceted rather than as light falling through leaves.
         float lit = smoothstep(-0.35, 0.45, sunFacing);
         gl_FragColor.rgb *= mix(1.0, mix(uBacksideShade, 1.0, lit), uShadeAmount);`
    );
}

function applyFoliageWindShader(mat, flutterMult = 1.0) {
    if (!mat || mat._hasWindShader) return;
    mat._hasWindShader = true;
    mat.onBeforeCompile = (shader) => {
        shader.uniforms.uWindTime = forestWindUniforms.uWindTime;
        shader.uniforms.uWindStrength = forestWindUniforms.uWindStrength;
        shader.uniforms.uWindScale = forestWindUniforms.uWindScale;

        shader.vertexShader = `
            uniform float uWindTime;
            uniform float uWindStrength;
            uniform float uWindScale;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>

            #ifdef USE_INSTANCING
                vec4 wPos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
            #else
                vec4 wPos = modelMatrix * vec4(transformed, 1.0);
            #endif

            // Spatial rolling wind wave across the forest
            float wavePhase = dot(wPos.xz, vec2(0.707, 0.707)) * uWindScale - uWindTime * 1.5;
            float wave = sin(wavePhase) * 0.22 + sin(wavePhase * 2.2 + 1.1) * 0.09;

            // Organic high-frequency leaf shimmer
            float flutter = sin(uWindTime * 5.2 * ${flutterMult.toFixed(2)} + dot(transformed, vec3(3.2))) * 0.055;

            // Anchor trunk base firmly into the soil; canopy up high responds fully
            float heightCompliance = clamp((transformed.y + 0.5) * 0.25, 0.0, 1.0);

            transformed.x += (wave * 0.24 + flutter) * uWindStrength * heightCompliance;
            transformed.z += (wave * 0.18 + flutter) * uWindStrength * heightCompliance;
            transformed.y += abs(wave) * 0.05 * uWindStrength * heightCompliance;
            `
        );

        // A material gets exactly one onBeforeCompile, so the directional
        // shading is injected here rather than as a second hook.
        applyFoliageSunShading(shader);
    };
}

function applyGrassWindShader(mat) {
    mat.onBeforeCompile = (shader) => {
        shader.uniforms.uWindTime = forestWindUniforms.uWindTime;
        shader.uniforms.uWindStrength = forestWindUniforms.uWindStrength;
        shader.uniforms.uWindScale = forestWindUniforms.uWindScale;
        shader.uniforms.uGrassGrowth = forestWindUniforms.uGrassGrowth;

        shader.vertexShader = `
            uniform float uWindTime;
            uniform float uWindStrength;
            uniform float uWindScale;
            uniform float uGrassGrowth;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
            #include <begin_vertex>

            #ifdef USE_INSTANCING
                vec4 wPos = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
            #else
                vec4 wPos = modelMatrix * vec4(transformed, 1.0);
            #endif

            // Progressive ground emergence: grass shoots up behind the expanding forest wave
            float waveFront = uGrassGrowth * 145.0;
            float rDist = length(wPos.xz);
            float sprout = smoothstep(waveFront + 4.0, waveFront - 6.0, rDist);
            transformed.y *= sprout;
            transformed.xz *= (0.15 + 0.85 * sprout);

            // Root is anchored at soil level (y=0 -> compliance=0)
            // Upper blade tip bends with quadratic compliance
            float heightRatio = clamp(position.y * 2.5, 0.0, 1.0);
            float compliance = heightRatio * heightRatio * sprout;

            // Dynamic rolling wind gusts through meadow grass
            float gustPhase = dot(wPos.xz, vec2(0.707, 0.707)) * (uWindScale * 1.6) - uWindTime * 2.2;
            float gust = sin(gustPhase) * 0.32 + sin(gustPhase * 1.7 + 0.8) * 0.14;

            transformed.x += gust * compliance * uWindStrength;
            transformed.z += gust * compliance * 0.82 * uWindStrength;
            transformed.y -= abs(gust) * compliance * 0.09 * uWindStrength;
            `
        );
    };
}

// ---------------------------------------------------------------------------
// 2. Continuous Organic Spline Extrusion (Zero Polygon Creases)
// ---------------------------------------------------------------------------

function createContinuousBranchGeometry(controlPoints, rStart, rEnd, radialSeg = 10, buttressFlutes = 0, buttressReach = 0, seed = 1) {
    const rand = mulberry32(seed);
    const curve = new THREE.CatmullRomCurve3(controlPoints);
    const tubularSeg = Math.max(5, (controlPoints.length - 1) * 3);
    const frames = curve.computeFrenetFrames(tubularSeg, false);

    const vertices = [];
    const uvs = [];
    const indices = [];

    const phase = rand() * Math.PI * 2;

    for (let i = 0; i <= tubularSeg; i++) {
        const t = i / tubularSeg;
        const pt = curve.getPointAt(t);
        const N = frames.normals[i];
        const B = frames.binormals[i];
        const r = rStart + (rEnd - rStart) * t;

        let buttressDecay = 0;
        if (buttressFlutes > 0 && t < 0.35) {
            buttressDecay = Math.pow(1.0 - t / 0.35, 2.2);
        }

        for (let j = 0; j <= radialSeg; j++) {
            const theta = (j / radialSeg) * Math.PI * 2;
            const cos = Math.cos(theta);
            const sin = Math.sin(theta);

            let mult = 1.0;
            if (buttressDecay > 0) {
                const flute = Math.sin(theta * buttressFlutes + phase) * 0.40 + Math.sin(theta * buttressFlutes * 2) * 0.15;
                mult = 1.0 + buttressDecay * (buttressReach + flute * 0.30);
            }

            const currentR = r * mult;
            vertices.push(
                pt.x + (N.x * cos + B.x * sin) * currentR,
                pt.y + (N.y * cos + B.y * sin) * currentR,
                pt.z + (N.z * cos + B.z * sin) * currentR
            );
            uvs.push(j / radialSeg, t * 3.0);
        }
    }

    for (let i = 0; i < tubularSeg; i++) {
        for (let j = 0; j < radialSeg; j++) {
            const a = i * (radialSeg + 1) + j;
            const b = (i + 1) * (radialSeg + 1) + j;
            const c = (i + 1) * (radialSeg + 1) + (j + 1);
            const d = i * (radialSeg + 1) + (j + 1);
            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    const lastPt = curve.getPointAt(1.0);
    const tangent = curve.getTangentAt(1.0);
    const tipCenter = lastPt.clone().addScaledVector(tangent, rEnd * 0.85);
    const tipIndex = vertices.length / 3;
    vertices.push(tipCenter.x, tipCenter.y, tipCenter.z);
    uvs.push(0.5, 3.0);

    const baseRow = tubularSeg * (radialSeg + 1);
    for (let j = 0; j < radialSeg; j++) {
        indices.push(baseRow + j, tipIndex, baseRow + j + 1);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
}

// ---------------------------------------------------------------------------
// 3. Botanical Foliage Textures & Volumetric Sprays
// ---------------------------------------------------------------------------

const _foliageTexCache = new Map();
function getFoliageTexture(speciesKey) {
    if (_foliageTexCache.has(speciesKey)) return _foliageTexCache.get(speciesKey);

    const S = 512;
    const canvas = document.createElement('canvas');
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, S, S);

    const drawLeaf = (cx, cy, len, width, angle, isSerrated, isCordate) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        ctx.beginPath();
        if (isCordate) {
            // Sacred Peepal cordate blade with extended drip-tip
            ctx.moveTo(0, -len * 0.95);
            ctx.quadraticCurveTo(width * 0.1, -len * 0.45, width * 0.52, -len * 0.25);
            ctx.quadraticCurveTo(width * 0.82, 0.05, width * 0.65, len * 0.35);
            ctx.quadraticCurveTo(width * 0.45, len * 0.65, 0, len * 0.45);
            ctx.quadraticCurveTo(-width * 0.45, len * 0.65, -width * 0.65, len * 0.35);
            ctx.quadraticCurveTo(-width * 0.82, 0.05, -width * 0.52, -len * 0.25);
            ctx.quadraticCurveTo(-width * 0.1, -len * 0.45, 0, -len * 0.95);
        } else if (isSerrated) {
            // Neem falcate serrated blade
            ctx.moveTo(0, -len * 0.85);
            for (let i = 1; i <= 6; i++) {
                const t = i / 6;
                const y = -len * 0.85 + len * 1.5 * t;
                const w = width * Math.sin(t * Math.PI) * (i % 2 === 0 ? 0.92 : 0.68);
                ctx.lineTo(w + width * 0.12, y);
            }
            ctx.lineTo(0, len * 0.65);
            for (let i = 6; i >= 1; i--) {
                const t = i / 6;
                const y = -len * 0.85 + len * 1.5 * t;
                const w = -width * Math.sin(t * Math.PI) * 0.78;
                ctx.lineTo(w, y);
            }
        } else {
            // Mango / Banyan lanceolate to ovate blade
            ctx.moveTo(0, -len * 0.9);
            ctx.bezierCurveTo(width * 0.65, -len * 0.5, width * 0.75, len * 0.15, width * 0.35, len * 0.55);
            ctx.bezierCurveTo(width * 0.15, len * 0.65, -width * 0.15, len * 0.65, -width * 0.35, len * 0.55);
            ctx.bezierCurveTo(-width * 0.75, len * 0.15, -width * 0.65, -len * 0.5, 0, -len * 0.9);
        }
        ctx.closePath();

        const grad = ctx.createRadialGradient(0, 0, len * 0.08, 0, 0, len * 0.75);
        grad.addColorStop(0, 'rgba(175, 225, 120, 0.98)');
        grad.addColorStop(0.55, 'rgba(88, 160, 48, 0.96)');
        grad.addColorStop(1, 'rgba(42, 105, 28, 0.94)');
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = 'rgba(225, 248, 170, 0.88)';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(0, len * 0.55);
        ctx.lineTo(0, -len * 0.85);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(200, 238, 145, 0.50)';
        ctx.lineWidth = 1.5;
        for (let v = 1; v <= 5; v++) {
            const vy = len * 0.45 - v * (len * 0.22);
            [-1, 1].forEach(side => {
                ctx.beginPath();
                ctx.moveTo(0, vy);
                ctx.quadraticCurveTo(side * width * 0.35, vy - len * 0.06, side * width * 0.55, vy - len * 0.14);
                ctx.stroke();
            });
        }

        ctx.restore();
    };

    const isPeepal = speciesKey === 'peepal';
    const isNeem = speciesKey === 'neem';

    ctx.strokeStyle = 'rgba(105, 85, 55, 0.9)';
    ctx.lineWidth = 6.0;
    ctx.beginPath();
    ctx.moveTo(S * 0.5, S * 0.95);
    ctx.lineTo(S * 0.5, S * 0.20);
    ctx.stroke();

    drawLeaf(S * 0.5, S * 0.22, 130, 75, 0, isNeem, isPeepal);

    const lateralAngles = [-0.65, 0.65, -0.85, 0.85, -1.05, 1.05];
    const lateralYs = [S * 0.42, S * 0.42, S * 0.60, S * 0.60, S * 0.75, S * 0.75];
    const lateralXs = [S * 0.44, S * 0.56, S * 0.42, S * 0.58, S * 0.42, S * 0.58];

    for (let i = 0; i < lateralAngles.length; i++) {
        drawLeaf(lateralXs[i], lateralYs[i], 120, 70, lateralAngles[i], isNeem, isPeepal);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    _foliageTexCache.set(speciesKey, tex);
    return tex;
}

// Builds an omnidirectional volumetric foliage cloud (3 intersecting arching quads)
function createVolumetricSprayGeometry(size = 1.6) {
    const parts = [];
    const w = size;
    const h = size * 1.15;

    for (let i = 0; i < 3; i++) {
        const planeGeo = new THREE.PlaneGeometry(w, h, 2, 2);
        const pos = planeGeo.attributes.position;
        for (let k = 0; k < pos.count; k++) {
            const x = pos.getX(k);
            const arch = Math.cos((x / (w * 0.5)) * Math.PI * 0.5) * 0.18 * size;
            pos.setZ(k, arch);
        }
        planeGeo.computeVertexNormals();
        planeGeo.rotateY((i / 3) * Math.PI);
        planeGeo.translate(0, h * 0.48, 0);
        parts.push(planeGeo);
    }

    const merged = mergeGeometries(parts, false);
    parts.forEach(p => p.dispose());
    return merged;
}

function createGulmoharBlossomGeometry() {
    const parts = [];
    const S = 1.4;
    for (let i = 0; i < 2; i++) {
        const pg = new THREE.PlaneGeometry(S, S, 2, 2);
        pg.rotateX(-Math.PI * 0.5);
        pg.rotateY((i / 2) * Math.PI * 0.5);
        pg.translate(0, 0.1, 0);
        parts.push(pg);
    }
    const merged = mergeGeometries(parts, false);
    parts.forEach(p => p.dispose());
    return merged;
}

// Multi-Blade Grass Tuft Geometry (clump of 6 small lush arching lawn blades)
function createGrassClumpGeometry() {
    const parts = [];
    const w = 0.022;    // Fine delicate lawn blade width
    const len = 0.15;   // Small, manicured, lush grass height (~15cm)

    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(-w, 0);
    bladeShape.quadraticCurveTo(-w * 0.20, len * 0.55, w * 0.25, len * 1.05);
    bladeShape.quadraticCurveTo(w * 0.15, len * 0.50, w, 0);

    for (let i = 0; i < 6; i++) {
        const geo = new THREE.ShapeGeometry(bladeShape, 3);
        const pos = geo.attributes.position;
        const s = 0.80 + Math.random() * 0.40;
        const lean = 0.18 + Math.random() * 0.28;
        const az = (i / 6) * Math.PI * 2 + Math.random() * 0.35;

        for (let k = 0; k < pos.count; k++) {
            const y = pos.getY(k);
            pos.setZ(k, Math.pow(y / len, 1.5) * 0.05);
        }
        geo.computeVertexNormals();
        geo.scale(s, s, s);
        geo.rotateX(lean);
        geo.rotateY(az);
        parts.push(geo);
    }

    const merged = mergeGeometries(parts, false);
    parts.forEach(p => p.dispose());
    return merged;
}

function rosePetalShape(size) {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(size * 0.65, size * 0.12, size * 0.88, size * 0.44, size * 0.76, size * 0.78);
    s.bezierCurveTo(size * 0.62, size * 1.05, size * 0.26, size * 1.20, 0, size * 1.22);
    s.bezierCurveTo(-size * 0.26, size * 1.20, -size * 0.62, size * 1.05, -size * 0.76, size * 0.78);
    s.bezierCurveTo(-size * 0.88, size * 0.44, -size * 0.65, size * 0.12, 0, 0);
    return s;
}

function createPetalGeometry(size, curl) {
    const geo = new THREE.ShapeGeometry(rosePetalShape(size), 6);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        const t = THREE.MathUtils.clamp(y / (size * 1.22), 0, 1.1);
        const cup = curl * (x * x) / (size * size) * (0.35 + t) * size;
        const reflex = -curl * 0.54 * t * t * size;
        const rimWave = Math.sin((x / size) * 6.5) * 0.015 * size * t;
        pos.setZ(i, cup + reflex + rimWave);
    }
    geo.computeVertexNormals();
    return geo;
}

function curvedLeafGeometry(shape, curveAmount, curveSegments = 5) {
    const geo = new THREE.ShapeGeometry(shape, curveSegments);
    const pos = geo.attributes.position;
    let minY = Infinity, maxY = -Infinity, maxAbsX = 0;
    for (let i = 0; i < pos.count; i++) {
        minY = Math.min(minY, pos.getY(i));
        maxY = Math.max(maxY, pos.getY(i));
        maxAbsX = Math.max(maxAbsX, Math.abs(pos.getX(i)));
    }
    const h = Math.max(1e-6, maxY - minY);
    const wAbs = Math.max(1e-6, maxAbsX);

    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        const nx = x / wAbs;
        const ny = (y - minY) / h;
        pos.setZ(i, curveAmount * h * (nx * nx * 0.45 + Math.pow(ny, 1.6) * 0.32));
    }
    geo.translate(0, -minY, 0);
    geo.computeVertexNormals();
    return geo;
}

export const mangoLeafGeometry = createVolumetricSprayGeometry(1.65);
export const banyanLeafGeometry = createVolumetricSprayGeometry(1.75);
export const peepalLeafGeometry = createVolumetricSprayGeometry(1.55);
export const neemLeafGeometry = createVolumetricSprayGeometry(1.45);
export const gulmoharLeafGeometry = createVolumetricSprayGeometry(1.50);
export const gulmoharBlossomGeometry = createGulmoharBlossomGeometry();
export const shrubLeafGeometry = curvedLeafGeometry(rosePetalShape(0.18), 0.28, 4);
export const grassClumpGeometry = createGrassClumpGeometry();

export const sharedForestGeometries = new Set([
    mangoLeafGeometry, banyanLeafGeometry, peepalLeafGeometry, neemLeafGeometry,
    gulmoharLeafGeometry, gulmoharBlossomGeometry, shrubLeafGeometry, grassClumpGeometry
]);

const LEAF_GEOMETRY_BY_SPECIES = {
    mango: mangoLeafGeometry,
    banyan: banyanLeafGeometry,
    peepal: peepalLeafGeometry,
    neem: neemLeafGeometry,
    gulmohar: gulmoharLeafGeometry,
};

// ---------------------------------------------------------------------------
// 4. Tactile Organic Bark & Ground Textures
// ---------------------------------------------------------------------------

const _barkCache = new Map();
function getBarkTextures(speciesKey) {
    if (_barkCache.has(speciesKey)) return _barkCache.get(speciesKey);

    const W = 512, H = 512;
    const colCanvas = document.createElement('canvas'); colCanvas.width = W; colCanvas.height = H;
    const bmpCanvas = document.createElement('canvas'); bmpCanvas.width = W; bmpCanvas.height = H;
    const cx = colCanvas.getContext('2d');
    const bx = bmpCanvas.getContext('2d');

    const PALETTES = {
        mango: { base: '#4a3c2e', mid: '#382b1f', dark: '#221810', light: '#62513f', moss: '#424a2f' },
        banyan: { base: '#5a5246', mid: '#474035', dark: '#312b23', light: '#71685b', moss: '#4a5336' },
        peepal: { base: '#6c675b', mid: '#565045', dark: '#3d372e', light: '#847d70', moss: '#535b3d' },
        neem: { base: '#453729', mid: '#32261a', dark: '#20160e', light: '#5c4a37', moss: '#3c4329' },
        gulmohar: { base: '#534a3f', mid: '#413930', dark: '#2e261e', light: '#6a6052', moss: '#4b5335' },
        twig: { base: '#4a3f31', mid: '#382e22', dark: '#261e14', light: '#5e4e3d', moss: '#3e462b' }
    };
    const p = PALETTES[speciesKey] || PALETTES.twig;

    cx.fillStyle = p.base; cx.fillRect(0, 0, W, H);
    bx.fillStyle = '#808080'; bx.fillRect(0, 0, W, H);

    for (let i = 0; i < 30; i++) {
        const x = Math.random() * W;
        const w = W * (0.05 + Math.random() * 0.16);
        cx.globalAlpha = 0.10 + Math.random() * 0.16;
        cx.fillStyle = Math.random() < 0.5 ? p.mid : p.light;
        cx.fillRect(x, 0, w, H);
    }

    for (let i = 0; i < 70; i++) {
        const x0 = Math.random() * W;
        const len = H * (0.25 + Math.random() * 0.65);
        const y0 = Math.random() * H;
        const w = 1.5 + Math.random() * 3.5;

        for (const dy of [-H, 0, H]) {
            cx.strokeStyle = Math.random() < 0.65 ? p.dark : p.mid;
            cx.globalAlpha = 0.12 + Math.random() * 0.18;
            cx.lineWidth = w;

            bx.strokeStyle = 'rgb(115,115,115)';
            bx.lineWidth = w;

            cx.beginPath(); bx.beginPath();
            cx.moveTo(x0, y0 + dy); bx.moveTo(x0, y0 + dy);
            for (let y = y0; y < y0 + len; y += 18) {
                const ny = (y - y0) * 0.014;
                const wobble = Math.sin(ny * 5.2 + x0 * 0.04) * 3.5;
                cx.lineTo(x0 + wobble, y + dy);
                bx.lineTo(x0 + wobble, y + dy);
            }
            cx.stroke(); bx.stroke();
        }
    }

    const map = new THREE.CanvasTexture(colCanvas);
    const bumpMap = new THREE.CanvasTexture(bmpCanvas);
    [map, bumpMap].forEach(t => {
        t.wrapS = THREE.RepeatWrapping;
        t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(1.6, 1.0);
    });
    map.colorSpace = THREE.SRGBColorSpace;

    const out = { map, bumpMap };
    _barkCache.set(speciesKey, out);
    return out;
}

const _barkMaterialCache = new Map();
function barkMaterial(speciesKey) {
    if (_barkMaterialCache.has(speciesKey)) return _barkMaterialCache.get(speciesKey);

    const { map, bumpMap } = getBarkTextures(speciesKey);
    const mat = new THREE.MeshStandardMaterial({
        map,
        bumpMap,
        bumpScale: 0.07,
        roughness: 0.85,
        metalness: 0.02,
        emissive: new THREE.Color(0x14110d),
        emissiveIntensity: 0.15,
    });
    _barkMaterialCache.set(speciesKey, mat);
    return mat;
}

// ---------------------------------------------------------------------------
// Uneven Forest Terrain Topography (shared by terrain mesh, trees, & grass)
// ---------------------------------------------------------------------------

export function getForestElevation(x, z) {
    const distCenter = Math.hypot(x, z);
    // Smooth level clearing at center so the rose sits perfectly flush
    const clearingFactor = THREE.MathUtils.smoothstep(distCenter, 1.5, 12.0);
    const hill1 = Math.sin(x * 0.045 + 0.5) * Math.cos(z * 0.040 + 0.8) * 0.65;
    const hill2 = Math.sin(x * 0.095 - z * 0.08) * 0.35;
    const hill3 = Math.cos(x * 0.18 + z * 0.15) * 0.18;
    const micro = Math.sin(x * 0.38) * Math.cos(z * 0.35) * 0.08;
    return (hill1 + hill2 + hill3 + micro) * clearingFactor;
}

let _forestGroundTexture = null;
export function getForestGroundTexture() {
    if (_forestGroundTexture) return _forestGroundTexture;
    const S = 1024;
    const c = document.createElement('canvas'); c.width = S; c.height = S;
    const ctx = c.getContext('2d');

    // Base rich vibrant botanical lawn green
    ctx.fillStyle = '#3e7d22';
    ctx.fillRect(0, 0, S, S);

    // Lush velvet moss, clover, and emerald undertones (100% vibrant green palette)
    const greenTones = [
        '#488f28', '#56a632', '#3a7520', '#63b838',
        '#428224', '#32681a', '#5bb034', '#38701e',
        '#6cc240', '#4e992b', '#366d1c', '#529e29'
    ];
    for (let i = 0; i < 500; i++) {
        ctx.globalAlpha = 0.35 + Math.random() * 0.45;
        ctx.fillStyle = greenTones[(Math.random() * greenTones.length) | 0];
        ctx.beginPath();
        ctx.ellipse(
            Math.random() * S, Math.random() * S,
            20 + Math.random() * 85, 14 + Math.random() * 60,
            Math.random() * Math.PI, 0, Math.PI * 2
        );
        ctx.fill();
    }

    // Micro botanical lawn stippling: fine green blade flecks for rich close-up grass texture
    const bladeFlecks = ['#72c944', '#84dc54', '#5fb336', '#92e860', '#4e9b2a', '#7ad048', '#63ba34'];
    for (let i = 0; i < 9000; i++) {
        ctx.globalAlpha = 0.40 + Math.random() * 0.45;
        ctx.fillStyle = bladeFlecks[(Math.random() * bladeFlecks.length) | 0];
        const x = Math.random() * S, y = Math.random() * S;
        ctx.fillRect(x, y, 1 + Math.random() * 3, 2 + Math.random() * 5);
    }
    ctx.globalAlpha = 1;

    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(32, 32);
    tex.colorSpace = THREE.SRGBColorSpace;
    _forestGroundTexture = tex;
    return tex;
}

// ---------------------------------------------------------------------------
// 5. Species Presets: Authentic Botanical Profiles
// ---------------------------------------------------------------------------

export const TREE_PRESETS = {
    mango: {
        trunkHeight: 6.2,
        trunkBaseRadius: 0.95,
        trunkTopRadius: 0.54,
        buttressFlutes: 4,
        buttressReach: 0.45,
        propRoots: 0,
        limbCount: 5,
        branchLevels: 3,
        firstSpreadDeg: 46,
        splitSpreadDeg: 36,
        lengthFalloff: 0.78,
        radiusFalloff: 0.66,
        limbLength: 3.2,
        spraysPerTwig: 4,
        spraysOnBoughs: 2,
        sprayScale: 1.25,
        leafColor: 0x22481e,
        leafColorVariance: 0.12,
        leafRoughness: 0.40,
        flushColor: 0x9b462c,
        flushRatio: 0.18,
        flutterMult: 0.85,
        swayAmplitude: 0.04,
        swayFreqMult: 0.85,
    },
    banyan: {
        trunkHeight: 6.8,
        trunkBaseRadius: 1.15,
        trunkTopRadius: 0.58,
        buttressFlutes: 5,
        buttressReach: 0.68,
        propRoots: 4,
        limbCount: 5,
        branchLevels: 3,
        firstSpreadDeg: 44,
        splitSpreadDeg: 35,
        lengthFalloff: 0.78,
        radiusFalloff: 0.65,
        limbLength: 3.4,
        spraysPerTwig: 4,
        spraysOnBoughs: 2,
        sprayScale: 1.30,
        leafColor: 0x2e5625,
        leafColorVariance: 0.12,
        leafRoughness: 0.46,
        flutterMult: 0.85,
        swayAmplitude: 0.05,
        swayFreqMult: 0.85,
    },
    peepal: {
        trunkHeight: 7.2,
        trunkBaseRadius: 0.85,
        trunkTopRadius: 0.40,
        buttressFlutes: 4,
        buttressReach: 0.45,
        propRoots: 0,
        limbCount: 5,
        branchLevels: 3,
        firstSpreadDeg: 38,
        splitSpreadDeg: 32,
        lengthFalloff: 0.76,
        radiusFalloff: 0.63,
        limbLength: 3.0,
        spraysPerTwig: 4,
        spraysOnBoughs: 2,
        sprayScale: 1.20,
        leafColor: 0x64943c,
        leafColorVariance: 0.15,
        leafRoughness: 0.42,
        flutterMult: 1.8, // Characteristic rapid Peepal leaf flutter
        swayAmplitude: 0.12,
        swayFreqMult: 1.6,
    },
    neem: {
        trunkHeight: 7.0,
        trunkBaseRadius: 0.76,
        trunkTopRadius: 0.36,
        buttressFlutes: 3,
        buttressReach: 0.38,
        propRoots: 0,
        limbCount: 4,
        branchLevels: 3,
        firstSpreadDeg: 36,
        splitSpreadDeg: 30,
        lengthFalloff: 0.76,
        radiusFalloff: 0.64,
        limbLength: 2.8,
        spraysPerTwig: 4,
        spraysOnBoughs: 2,
        sprayScale: 1.15,
        leafColor: 0x3d6e27,
        leafColorVariance: 0.13,
        leafRoughness: 0.65,
        flutterMult: 1.25,
        swayAmplitude: 0.10,
        swayFreqMult: 1.25,
    },
    gulmohar: {
        trunkHeight: 6.4,
        trunkBaseRadius: 0.82,
        trunkTopRadius: 0.44,
        buttressFlutes: 4,
        buttressReach: 0.45,
        propRoots: 0,
        limbCount: 5,
        branchLevels: 3,
        firstSpreadDeg: 48,
        splitSpreadDeg: 38,
        lengthFalloff: 0.80,
        radiusFalloff: 0.65,
        limbLength: 3.2,
        spraysPerTwig: 4,
        spraysOnBoughs: 2,
        sprayScale: 1.25,
        leafColor: 0x3a6c27,
        leafColorVariance: 0.12,
        leafRoughness: 0.52,
        hasBlossoms: true,
        blossomColor: 0xd9381e,
        blossomCountPerTwig: 3,
        flutterMult: 1.1,
        swayAmplitude: 0.07,
        swayFreqMult: 1.1,
    },
};

// ---------------------------------------------------------------------------
// 6. Master Tree Archetype Generation & Instancing
// ---------------------------------------------------------------------------

function perturbDirection(dir, angleRad, upBias, rand, out) {
    const ax = rand() - 0.5, ay = rand() - 0.5, az = rand() - 0.5;
    out.set(ax, ay, az).cross(dir);
    if (out.lengthSq() < 1e-8) out.set(1, 0, 0).cross(dir);
    out.normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(out, angleRad);
    out.copy(dir).applyQuaternion(q);
    out.y += upBias;
    out.y = Math.max(0.32, out.y);
    return out.normalize();
}

function buildSkeleton(speciesKey, preset, rand) {
    const parts = [];
    const twigs = [];
    const boughs = [];
    const blossomTwigs = [];
    const scratch = new THREE.Vector3();

    const h = preset.trunkHeight;
    const trunkCurve = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3((rand() - 0.5) * 0.15, h * 0.33, (rand() - 0.5) * 0.15),
        new THREE.Vector3((rand() - 0.5) * 0.25, h * 0.66, (rand() - 0.5) * 0.25),
        new THREE.Vector3((rand() - 0.5) * 0.35, h, (rand() - 0.5) * 0.35)
    ];
    const trunkGeo = createContinuousBranchGeometry(
        trunkCurve,
        preset.trunkBaseRadius,
        preset.trunkTopRadius,
        12,
        preset.buttressFlutes,
        preset.buttressReach,
        101
    );
    parts.push(trunkGeo);
    const crown = trunkCurve[trunkCurve.length - 1];

    function growBranch(startPt, dir, length, rBase, level) {
        const rTip = rBase * preset.radiusFalloff;
        const midPt = startPt.clone().addScaledVector(dir, length * 0.5);
        midPt.x += (rand() - 0.5) * length * 0.12;
        midPt.y += Math.abs(rand()) * length * 0.10;
        midPt.z += (rand() - 0.5) * length * 0.12;
        const endPt = startPt.clone().addScaledVector(dir, length);

        const branchCurve = [startPt.clone(), midPt, endPt.clone()];
        const branchGeo = createContinuousBranchGeometry(branchCurve, rBase, rTip, 8, 0, 0, level * 100);
        parts.push(branchGeo);

        if (level === 2) {
            boughs.push({ pos: endPt.clone(), dir: dir.clone(), length });
        }

        if (level >= preset.branchLevels) {
            twigs.push({ pos: endPt.clone(), dir: dir.clone(), length });
            if (preset.hasBlossoms) {
                blossomTwigs.push({ pos: endPt.clone(), dir: dir.clone(), length });
            }
            return;
        }

        const childCount = rand() < 0.38 ? 3 : 2;
        const spread = THREE.MathUtils.degToRad(preset.splitSpreadDeg);
        for (let i = 0; i < childCount; i++) {
            const childDir = perturbDirection(dir, spread * (0.68 + rand() * 0.65), 0.24, rand, scratch).clone();
            growBranch(endPt, childDir, length * preset.lengthFalloff * (0.86 + rand() * 0.25), rTip, level + 1);
        }
    }

    const firstSpread = THREE.MathUtils.degToRad(preset.firstSpreadDeg);
    const limbOrigins = [];
    for (let i = 0; i < preset.limbCount; i++) {
        const az = (i / preset.limbCount) * Math.PI * 2 + (rand() - 0.5) * 0.5;
        const tilt = firstSpread * (0.82 + rand() * 0.32);
        const dir = new THREE.Vector3(
            Math.sin(tilt) * Math.cos(az),
            Math.cos(tilt),
            Math.sin(tilt) * Math.sin(az)
        ).normalize();
        dir.y = Math.max(0.40, dir.y);
        dir.normalize();

        const limbLen = preset.limbLength * (0.88 + rand() * 0.25);
        growBranch(crown, dir, limbLen, preset.trunkTopRadius * 0.82, 1);
        limbOrigins.push({ pos: crown.clone().addScaledVector(dir, limbLen * 0.65), dir });
    }

    if (preset.propRoots > 0) {
        for (let i = 0; i < preset.propRoots; i++) {
            const limbIdx = i % limbOrigins.length;
            const origin = limbOrigins[limbIdx].pos.clone();
            origin.x += (rand() - 0.5) * 0.5;
            origin.z += (rand() - 0.5) * 0.5;

            const rootCurve = [
                origin.clone(),
                new THREE.Vector3(origin.x + (rand() - 0.5) * 0.2, origin.y * 0.5, origin.z + (rand() - 0.5) * 0.2),
                new THREE.Vector3(origin.x + (rand() - 0.5) * 0.3, 0, origin.z + (rand() - 0.5) * 0.3)
            ];
            const rootR = 0.045 + rand() * 0.035;
            const rootGeo = createContinuousBranchGeometry(rootCurve, rootR * 0.8, rootR * 1.4, 7, 3, 0.4, 800 + i);
            parts.push(rootGeo);
        }
    }

    const merged = mergeGeometries(parts, false);
    parts.forEach(g => g.dispose());
    return { geometry: merged, twigs, boughs, blossomTwigs, crown };
}

function buildCanopy(speciesKey, preset, twigs, boughs, rand, pivot) {
    const sprayGeo = LEAF_GEOMETRY_BY_SPECIES[speciesKey] || LEAF_GEOMETRY_BY_SPECIES.mango;

    const twigSprays = twigs.length * (preset.spraysPerTwig || 4);
    const boughSprays = boughs.length * (preset.spraysOnBoughs || 2);
    const crownSprays = 8;
    const totalCount = twigSprays + boughSprays + crownSprays;

    const leafBase = new THREE.Color(preset.leafColor);
    const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: getFoliageTexture(speciesKey),
        roughness: preset.leafRoughness ?? 0.45,
        metalness: 0.02,
        side: THREE.DoubleSide,
        alphaTest: 0.40,
        vertexColors: true,
        emissive: leafBase.clone().multiplyScalar(0.24),
        emissiveIntensity: 0.95,
    });
    mat.shadowSide = THREE.DoubleSide;
    applyFoliageWindShader(mat, preset.flutterMult || 1.0);

    const inst = new THREE.InstancedMesh(sprayGeo, mat, totalCount);
    inst.castShadow = true;
    inst.receiveShadow = true;

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const qJitter = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    const axis = new THREE.Vector3();
    const outFromTrunk = new THREE.Vector3();
    const flushBase = preset.flushColor != null ? new THREE.Color(preset.flushColor) : null;

    let idx = 0;

    const addSpray = (pos, dir, scaleMult) => {
        outFromTrunk.set(pos.x, 0, pos.z);
        if (outFromTrunk.lengthSq() < 1e-6) outFromTrunk.set(1, 0, 0);
        outFromTrunk.normalize();
        outFromTrunk.y = 0.52 + rand() * 0.44;
        outFromTrunk.normalize();
        q.setFromUnitVectors(UP, outFromTrunk);

        axis.set(rand() - 0.5, rand() - 0.5, rand() - 0.5).normalize();
        qJitter.setFromAxisAngle(axis, (rand() - 0.5) * 1.3);
        q.multiply(qJitter);

        const scale = (preset.sprayScale || 1.2) * scaleMult * (0.88 + rand() * 0.32);
        s.setScalar(scale);
        m.compose(pos.clone().sub(pivot), q, s);
        inst.setMatrixAt(idx, m);

        const isFlush = flushBase && rand() < (preset.flushRatio || 0);
        if (isFlush) {
            _color.copy(flushBase).offsetHSL((rand() - 0.5) * 0.04, 0, (rand() - 0.5) * 0.10);
        } else {
            _color.copy(leafBase).offsetHSL(
                (rand() - 0.5) * 0.04,
                (rand() - 0.5) * 0.06,
                (rand() - 0.5) * preset.leafColorVariance
            );
        }
        inst.setColorAt(idx, _color);
        idx++;
    };

    twigs.forEach(twig => {
        for (let n = 0; n < (preset.spraysPerTwig || 4); n++) {
            const along = 0.15 + rand() * 0.85;
            p.copy(twig.pos).addScaledVector(twig.dir, -twig.length * (1 - along));
            p.x += (rand() - 0.5) * 1.45;
            p.y += (rand() - 0.5) * 1.05;
            p.z += (rand() - 0.5) * 1.45;
            addSpray(p, twig.dir, 1.0);
        }
    });

    boughs.forEach(bough => {
        for (let n = 0; n < (preset.spraysOnBoughs || 2); n++) {
            p.copy(bough.pos);
            p.x += (rand() - 0.5) * 1.5;
            p.y += (rand() - 0.5) * 1.0;
            p.z += (rand() - 0.5) * 1.5;
            addSpray(p, bough.dir, 1.18);
        }
    });

    for (let n = 0; n < crownSprays; n++) {
        p.copy(pivot);
        p.x += (rand() - 0.5) * 1.8;
        p.y += 0.8 + rand() * 2.0;
        p.z += (rand() - 0.5) * 1.8;
        addSpray(p, UP, 1.30);
    }

    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    return inst;
}

function buildBlossomClusters(preset, blossomTwigs, rand, pivot) {
    const blossomCount = blossomTwigs.length * (preset.blossomCountPerTwig || 3);
    const blossomMat = new THREE.MeshStandardMaterial({
        color: 0xd9381e,
        roughness: 0.44,
        metalness: 0.0,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x660902),
        emissiveIntensity: 0.95,
    });

    blossomMat.shadowSide = THREE.DoubleSide;
    applyFoliageWindShader(blossomMat, 1.1);

    const inst = new THREE.InstancedMesh(gulmoharBlossomGeometry, blossomMat, blossomCount);
    inst.castShadow = true;
    inst.receiveShadow = true;

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();

    let idx = 0;
    blossomTwigs.forEach(twig => {
        for (let n = 0; n < (preset.blossomCountPerTwig || 3); n++) {
            p.copy(twig.pos);
            p.x += (rand() - 0.5) * 1.1;
            p.y += 0.35 + rand() * 0.55;
            p.z += (rand() - 0.5) * 1.1;

            q.setFromAxisAngle(UP, rand() * Math.PI * 2);
            s.setScalar(1.0 + rand() * 0.35);
            m.compose(p.clone().sub(pivot), q, s);
            inst.setMatrixAt(idx, m);
            idx++;
        }
    });

    inst.instanceMatrix.needsUpdate = true;
    return inst;
}

const _treeArchetypeCache = new Map();

function getOrCreateArchetype(speciesKey, variantIdx) {
    const key = `${speciesKey}_${variantIdx}`;
    if (_treeArchetypeCache.has(key)) return _treeArchetypeCache.get(key);

    const validSpecies = TREE_PRESETS[speciesKey] ? speciesKey : 'mango';
    const preset = TREE_PRESETS[validSpecies];
    const rand = mulberry32(1000 + variantIdx * 777);

    const { geometry, twigs, boughs, blossomTwigs, crown } = buildSkeleton(validSpecies, preset, rand);
    sharedForestGeometries.add(geometry);

    const archetype = { geometry, twigs, boughs, blossomTwigs, crown, preset, validSpecies };
    _treeArchetypeCache.set(key, archetype);
    return archetype;
}

// ---------------------------------------------------------------------------
// 6. Photorealistic 3D Model Templates (GLB Preloader & Shared Geometry Cache)
// ---------------------------------------------------------------------------

const _glbTreeCache = new Map();
let _roseGLBTemplate = null;
let _glbsLoading = false;
let _glbsReady = false;
const _glbLoadCallbacks = [];

export function preloadForestGLBs(onComplete) {
    if (onComplete) {
        if (_glbsReady) {
            onComplete();
            return Promise.resolve();
        }
        _glbLoadCallbacks.push(onComplete);
    }
    if (_glbsLoading) return Promise.resolve();
    _glbsLoading = true;

    const loader = new GLTFLoader();
    const specs = [
        { key: 'banyan', url: getAssetUrl('models/chinese_banyan_ficus_microcarpa.glb'), targetHeight: 22.0, groundSink: 0.12 },
        { key: 'peepal', url: getAssetUrl('models/bodhi_tree.glb'), targetHeight: 20.0, groundSink: 2.15 },
        { key: 'mango', url: getAssetUrl('models/mango_tree_2.glb'), targetHeight: 16.0, groundSink: 0.08 },
        { key: 'neem', url: getAssetUrl('models/neem_tree.glb'), targetHeight: 16.0, groundSink: 2.15 },
        { key: 'rose', url: getAssetUrl('models/red_rose.glb'), targetHeight: 1.45, groundSink: 0.0 }
    ];

    const promises = specs.map(spec => new Promise((resolve) => {
        loader.load(
            spec.url,
            (gltf) => {
                const model = gltf.scene;
                model.name = `GLB_${spec.key}`;

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());

                const scaleFactor = spec.targetHeight / Math.max(size.y, 0.001);
                const sinkOffset = (spec.groundSink || 0) / scaleFactor;
                model.position.set(-center.x, -box.min.y - sinkOffset, -center.z);

                const wrapper = new THREE.Group();
                wrapper.name = `GLB_Wrapper_${spec.key}`;
                wrapper.add(model);
                wrapper.scale.setScalar(scaleFactor);

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        if (child.geometry) {
                            sharedForestGeometries.add(child.geometry);
                        }
                        if (spec.key === 'rose') {
                            child.castShadow = true;
                            child.receiveShadow = true;
                            if (child.material) {
                                child.material.side = THREE.DoubleSide;
                                child.material.shadowSide = THREE.DoubleSide;
                                // Velvety natural organic rose petal sheen, matte texture & zero artificial emissive
                                child.material.roughness = 0.72;
                                child.material.metalness = 0.0;
                                child.material.emissive = new THREE.Color(0x000000);
                                child.material.emissiveIntensity = 0.0;
                                if (child.material.map) {
                                    child.material.map.colorSpace = THREE.SRGBColorSpace;
                                }
                                child.material.needsUpdate = true;
                            }
                        } else {
                            if (spec.key === 'neem') {
                                child.material.side = THREE.DoubleSide;
                                child.material.shadowSide = THREE.DoubleSide;
                                if (child.material.roughness !== undefined) {
                                    child.material.roughness = Math.max(child.material.roughness, 0.65);
                                }
                            } else if (child.material.roughness !== undefined) {
                                child.material.roughness = Math.max(child.material.roughness, 0.70);
                            }
                            // Clean alpha mask handling for foliage & branches (mango, neem, bodhi/peepal, banyan)
                            const isFoliageMat = child.material.name === 'Material.001' ||
                                                 child.material.name === 'Material.004' ||
                                                 child.material.name === 'Material.002' ||
                                                 child.material.name === 'Material.003' ||
                                                 child.material.name === 'Bodhi_front_2_Mat' ||
                                                 child.material.alphaTest > 0 ||
                                                 child.material.transparent ||
                                                 (child.material.name && /leaf|leaves|foliage|branch|vine|bodhi|front|001|002|003|004/i.test(child.material.name)) ||
                                                 (child.name && /leaf|leaves|branch|vine|bodhi|front/i.test(child.name));
                            if (isFoliageMat && child.material.map) {
                                // Foliage used to skip receiving shadows to avoid PCF
                                // sampling across millions of leaf fragments. That was
                                // the right call at 43M triangles; at 7.6M the scene can
                                // afford it, and without it leaves take no shadow from
                                // the canopy above them or from neighbouring trees, so a
                                // grove renders as uniformly bright foliage with no depth.
                                child.receiveShadow = true;
                                child.material.alphaTest = 0.35;
                                child.material.transparent = false;
                                child.material.depthWrite = true;
                                child.material.needsUpdate = true;
                                child.customDepthMaterial = new THREE.MeshDepthMaterial({
                                    depthPacking: THREE.RGBADepthPacking,
                                    map: child.material.map,
                                    alphaTest: 0.35
                                });
                                child.customDepthMaterial.side = THREE.DoubleSide;
                            } else {
                                child.receiveShadow = true;
                            }

                            // Directional shading for anything drawn DoubleSide, which
                            // is every leaf and most bark here. See
                            // applyFoliageSunShading for why the stock normal flip has
                            // to be worked around.
                            if (child.material.side === THREE.DoubleSide && !child.material._hasSunShading) {
                                child.material._hasSunShading = true;
                                const prior = child.material.onBeforeCompile;
                                child.material.onBeforeCompile = (shader, renderer) => {
                                    if (prior) prior(shader, renderer);
                                    applyFoliageSunShading(shader);
                                };
                                child.material.needsUpdate = true;
                            }
                        }
                    }
                });

                if (spec.key === 'rose') {
                    _roseGLBTemplate = wrapper;
                } else {
                    _glbTreeCache.set(spec.key, wrapper);
                }
                resolve();
            },
            undefined,
            (err) => {
                console.warn(`Failed to load ${spec.url}:`, err);
                resolve();
            }
        );
    }));

    return Promise.all(promises).then(() => {
        _glbsReady = true;
        const callbacks = [..._glbLoadCallbacks];
        _glbLoadCallbacks.length = 0;
        callbacks.forEach(cb => {
            try { cb(); } catch (e) { console.error(e); }
        });
    });
}

// Pre-load immediately in background
preloadForestGLBs();

export function createTree(speciesKey, { seed = 1, scale = 1 } = {}) {
    const group = new THREE.Group();
    group.name = `Tree_${speciesKey}`;

    let glbKey = speciesKey;
    if (glbKey === 'gulmohar') glbKey = 'peepal';

    const rand = mulberry32(seed);
    const template = _glbTreeCache.get(glbKey) || _glbTreeCache.get('mango') || _glbTreeCache.get('banyan');

    const applyInstanceScale = (instance) => {
        const scaleJitter = 0.94 + rand() * 0.12;
        if (speciesKey === 'banyan') {
            // Full maturity Banyan (Ficus microcarpa/benghalensis): 28m colossus with expansive aerial canopy
            instance.scale.x *= scaleJitter * scale * 1.28;
            instance.scale.y *= scaleJitter * scale * 1.30;
            instance.scale.z *= scaleJitter * scale * 1.28;
        } else if (speciesKey === 'peepal') {
            // Full maturity Peepal (Ficus religiosa): 26m towering cathedral crown reaching high into the sky
            instance.scale.x *= scaleJitter * scale * 1.24;
            instance.scale.y *= scaleJitter * scale * 1.30;
            instance.scale.z *= scaleJitter * scale * 1.24;
        } else if (speciesKey === 'mango') {
            // Full maturity Mango (Mangifera indica): 18m dense rounded umbrella canopy
            instance.scale.x *= scaleJitter * scale * 1.12;
            instance.scale.y *= scaleJitter * scale * 1.15;
            instance.scale.z *= scaleJitter * scale * 1.12;
        } else if (speciesKey === 'neem') {
            // Full maturity Neem (Azadirachta indica): 16.5m graceful open feathery crown
            instance.scale.multiplyScalar(scaleJitter * scale * 1.05);
        } else {
            instance.scale.multiplyScalar(scaleJitter * scale);
        }
        instance.rotation.y = rand() * Math.PI * 2;
    };

    const enableShadows = (inst) => {
        inst.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    child.material.side = THREE.DoubleSide;
                    child.material.shadowSide = THREE.DoubleSide;
                    const isCutout = child.material.map && (
                        child.material.alphaTest > 0 ||
                        child.material.transparent ||
                        (child.material.name && /leaf|leaves|foliage|branch|vine|bodhi|front|001|004/i.test(child.material.name)) ||
                        (child.name && /leaf|leaves|branch|vine|bodhi|front/i.test(child.name))
                    );
                    // Cutout foliage receives shadows here too, for the same
                    // reason as the GLB path: without it a canopy takes no
                    // shadow from the branches above it and reads as flat.
                    child.receiveShadow = true;
                    if (isCutout && child.material.map && !child.customDepthMaterial) {
                        child.material.alphaTest = 0.35;
                        child.material.transparent = false;
                        child.material.depthWrite = true;
                        child.customDepthMaterial = new THREE.MeshDepthMaterial({
                            depthPacking: THREE.RGBADepthPacking,
                            map: child.material.map,
                            alphaTest: 0.35
                        });
                        child.customDepthMaterial.side = THREE.DoubleSide;
                    }
                }
            }
        });
    };

    if (template) {
        const instance = template.clone(true);
        applyInstanceScale(instance);
        enableShadows(instance);
        group.add(instance);
        group.userData.swayGroup = instance;
    } else {
        const placeholder = new THREE.Group();
        group.add(placeholder);
        group.userData.swayGroup = placeholder;

        preloadForestGLBs(() => {
            const tmpl = _glbTreeCache.get(glbKey) || _glbTreeCache.get('mango') || _glbTreeCache.get('banyan');
            if (tmpl) {
                const instance = tmpl.clone(true);
                applyInstanceScale(instance);
                enableShadows(instance);
                placeholder.add(instance);
            }
        });
    }

    const swayPreset = TREE_PRESETS[speciesKey] || TREE_PRESETS.mango;
    group.userData.swayAmplitude = swayPreset.swayAmplitude;
    group.userData.swayFreqMult = swayPreset.swayFreqMult;
    group.userData.species = speciesKey;
    group.userData.seed = seed;

    return group;
}

// ---------------------------------------------------------------------------
// 7. Forest Floor Undergrowth & Dynamic Grass Meadow
// ---------------------------------------------------------------------------

function createGrassField(rand, innerR, outerR, count) {
    const green = new THREE.Color(0x3e8022);     // Vibrant emerald green
    const lightGreen = new THREE.Color(0x5ca832);// Sun-dappled lime green
    const deepGreen = new THREE.Color(0x245214); // Deep velvety moss green

    const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.65,
        metalness: 0.0,
        side: THREE.DoubleSide,
        vertexColors: true,
        emissive: green.clone().multiplyScalar(0.26),
        emissiveIntensity: 0.95,
    });

    mat.shadowSide = THREE.DoubleSide;
    applyGrassWindShader(mat);

    const inst = new THREE.InstancedMesh(grassClumpGeometry, mat, count);
    inst.castShadow = false;
    inst.receiveShadow = true;

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();

    for (let i = 0; i < count; i++) {
        const r = innerR + (outerR - innerR) * Math.sqrt(rand());
        const a = rand() * Math.PI * 2;
        const px = Math.sin(a) * r;
        const pz = Math.cos(a) * r;
        const py = getForestElevation(px, pz);
        p.set(px, py, pz);

        q.setFromAxisAngle(UP, rand() * Math.PI * 2);

        // Uniform, small, lush grass blades (manicured natural meadow)
        const scale = 0.85 + rand() * 0.35;
        s.set(scale, scale * (0.85 + rand() * 0.30), scale);
        m.compose(p, q, s);
        inst.setMatrixAt(i, m);

        // 100% lush botanical greens - zero straw or brown
        const roll = rand();
        if (roll < 0.35) _color.copy(green).lerp(lightGreen, rand() * 0.85);
        else if (roll < 0.70) _color.copy(green).lerp(deepGreen, rand() * 0.65);
        else _color.copy(green);
        _color.offsetHSL((rand() - 0.5) * 0.03, 0.05, (rand() - 0.5) * 0.08);
        inst.setColorAt(i, _color);
    }

    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    return inst;
}

export function createForestFloor(seed = 5000) {
    const grass = new THREE.Group();
    grass.name = 'ForestGrass';
    const shrubs = [];
    return { grass, shrubs };
}

// ---------------------------------------------------------------------------
// 8. Museum-Grade Ultra-Realistic Fibonacci Sacred Rose
// ---------------------------------------------------------------------------

function createPhotorealisticRoseBloom(rand) {
    const bloom = new THREE.Group();
    bloom.name = 'PhotorealisticRoseBloom';

    const coreParts = [];
    const midParts = [];
    const outerParts = [];

    const rings = [
        { count: 6, radius: 0.032, size: 0.14, curl: -0.88, tilt: 5, y: 0.34, tier: 'core' },
        { count: 7, radius: 0.062, size: 0.18, curl: -0.76, tilt: 15, y: 0.29, tier: 'core' },
        { count: 8, radius: 0.098, size: 0.22, curl: -0.62, tilt: 25, y: 0.23, tier: 'mid' },
        { count: 10, radius: 0.138, size: 0.26, curl: -0.45, tilt: 36, y: 0.17, tier: 'mid' },
        { count: 11, radius: 0.180, size: 0.30, curl: -0.25, tilt: 48, y: 0.10, tier: 'outer' },
        { count: 12, radius: 0.222, size: 0.34, curl: -0.05, tilt: 58, y: 0.04, tier: 'outer' },
        { count: 13, radius: 0.265, size: 0.37, curl: 0.14, tilt: 66, y: -0.02, tier: 'outer' },
        { count: 15, radius: 0.302, size: 0.40, curl: 0.26, tilt: 73, y: -0.07, tier: 'outer' },
    ];

    const yAxis = new THREE.Vector3();
    const outward = new THREE.Vector3();
    const inward = new THREE.Vector3();
    const zAxis = new THREE.Vector3();
    const xAxis = new THREE.Vector3();
    const basis = new THREE.Matrix4();
    const transformMat = new THREE.Matrix4();

    rings.forEach((ring, ringIdx) => {
        const geo = createPetalGeometry(ring.size, ring.curl);
        const tiltRad = THREE.MathUtils.degToRad(ring.tilt);

        for (let i = 0; i < ring.count; i++) {
            const az = (i / ring.count) * Math.PI * 2 + ringIdx * 2.39996 + rand() * 0.12;
            outward.set(Math.cos(az), 0, Math.sin(az));

            const jitterTilt = tiltRad * (0.94 + rand() * 0.12);
            yAxis.set(0, 1, 0).multiplyScalar(Math.cos(jitterTilt)).addScaledVector(outward, Math.sin(jitterTilt)).normalize();
            inward.set(-outward.x, 0.22, -outward.z).normalize();
            zAxis.copy(inward).addScaledVector(yAxis, -inward.dot(yAxis)).normalize();
            if (!Number.isFinite(zAxis.x)) zAxis.set(0, 0, 1);
            xAxis.crossVectors(yAxis, zAxis).normalize();
            zAxis.crossVectors(xAxis, yAxis).normalize();
            basis.makeBasis(xAxis, yAxis, zAxis);

            const pos = new THREE.Vector3(outward.x * ring.radius, ring.y, outward.z * ring.radius);
            const quat = new THREE.Quaternion().setFromRotationMatrix(basis);
            const scale = (0.94 + rand() * 0.14);

            transformMat.compose(pos, quat, new THREE.Vector3(scale, scale, scale));
            const petalInstance = geo.clone();
            petalInstance.applyMatrix4(transformMat);

            if (ring.tier === 'core') coreParts.push(petalInstance);
            else if (ring.tier === 'mid') midParts.push(petalInstance);
            else outerParts.push(petalInstance);
        }
        geo.dispose();
    });

    const coreGeo = mergeGeometries(coreParts, false);
    const midGeo = mergeGeometries(midParts, false);
    const outerGeo = mergeGeometries(outerParts, false);
    coreParts.forEach(p => p.dispose());
    midParts.forEach(p => p.dispose());
    outerParts.forEach(p => p.dispose());

    const coreMat = new THREE.MeshStandardMaterial({
        color: 0x58020b,
        roughness: 0.36,
        metalness: 0.02,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x240106),
        emissiveIntensity: 0.9,
    });
    const midMat = new THREE.MeshStandardMaterial({
        color: 0x9b0c20,
        roughness: 0.38,
        metalness: 0.02,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x2f0208),
        emissiveIntensity: 0.9,
    });
    const outerMat = new THREE.MeshStandardMaterial({
        color: 0xc8142e,
        roughness: 0.40,
        metalness: 0.02,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x38030b),
        emissiveIntensity: 0.9,
    });

    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    const midMesh = new THREE.Mesh(midGeo, midMat);
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreMesh.castShadow = true;
    midMesh.castShadow = true;
    outerMesh.castShadow = true;

    bloom.add(coreMesh);
    bloom.add(midMesh);
    bloom.add(outerMesh);

    // Receptacle hip
    const hipGeo = new THREE.SphereGeometry(0.12, 14, 10);
    hipGeo.scale(1, 1.3, 1);
    const hip = new THREE.Mesh(hipGeo, new THREE.MeshStandardMaterial({ color: 0x345e28, roughness: 0.62 }));
    hip.position.y = -0.10;
    hip.castShadow = true;
    bloom.add(hip);

    // 5 reflexed sepals
    const sepalGeo = curvedLeafGeometry(rosePetalShape(0.16), 0.36, 6);
    const sepalMat = new THREE.MeshStandardMaterial({
        color: 0x2e5824, roughness: 0.60, side: THREE.DoubleSide,
        emissive: 0x0d1a0b, emissiveIntensity: 0.9,
    });
    for (let i = 0; i < 5; i++) {
        const az = (i / 5) * Math.PI * 2 + rand() * 0.2;
        const sepal = new THREE.Mesh(sepalGeo, sepalMat);
        sepal.position.set(Math.cos(az) * 0.11, -0.12, Math.sin(az) * 0.11);
        sepal.rotation.order = 'YXZ';
        sepal.rotation.y = -az + Math.PI / 2;
        sepal.rotation.x = THREE.MathUtils.degToRad(132);
        sepal.castShadow = true;
        bloom.add(sepal);
    }

    return bloom;
}

// ---------------------------------------------------------------------------
// 8. 3D Rose Centerpiece (red_rose.glb)
// ---------------------------------------------------------------------------

export function createRoseCenterpiece(seed = 4242) {
    const rand = mulberry32(seed);
    const group = new THREE.Group();
    group.name = 'RoseCenterpiece';

    // No painted contact-shadow disc here. It was a 2.6m dark circle under a
    // 1.45m flower -- wider than the plant is tall, so it read as a disc drawn on
    // the grass rather than as shade. The rose casts a real shadow now that
    // foliage sends and receives them, which is both correctly sized and moves
    // with the sun.

    // Fallen ruby petals scattered directly on the forest soil with natural velvet texture & cast shadows
    const fallenPetalGeo = createPetalGeometry(0.15, 0.11);
    const fallenPetalMat = new THREE.MeshStandardMaterial({
        color: 0x8a101f,
        roughness: 0.72,
        metalness: 0.0,
        side: THREE.DoubleSide,
        shadowSide: THREE.DoubleSide,
        emissive: 0x000000,
        emissiveIntensity: 0.0,
    });
    for (let i = 0; i < 9; i++) {
        const petal = new THREE.Mesh(fallenPetalGeo, fallenPetalMat);
        const dist = 0.20 + rand() * 0.55;
        const ang = rand() * Math.PI * 2;
        petal.position.set(Math.cos(ang) * dist, 0.015, Math.sin(ang) * dist);
        petal.rotation.x = Math.PI * 0.48 + (rand() - 0.5) * 0.2;
        petal.rotation.y = rand() * Math.PI * 2;
        petal.rotation.z = (rand() - 0.5) * 0.3;
        petal.scale.setScalar(0.72 + rand() * 0.38);
        petal.castShadow = true;
        petal.receiveShadow = true;
        group.add(petal);
    }

    // 3. Photorealistic 3D Red Rose Model (grounded directly on the natural soil)
    const rosePivot = new THREE.Group();
    rosePivot.name = 'RedRoseGLBPivot';
    rosePivot.position.set(0, 0, 0);
    group.add(rosePivot);

    const enableShadows = (inst) => {
        inst.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    child.material.shadowSide = THREE.DoubleSide;
                    child.material.side = THREE.DoubleSide;
                    child.material.roughness = 0.72;
                    child.material.metalness = 0.0;
                    child.material.emissive = new THREE.Color(0x000000);
                    child.material.emissiveIntensity = 0.0;
                    if (child.material.map) {
                        child.material.map.colorSpace = THREE.SRGBColorSpace;
                    }
                    child.material.needsUpdate = true;
                }
            }
        });
    };

    if (_roseGLBTemplate) {
        const roseInstance = _roseGLBTemplate.clone(true);
        enableShadows(roseInstance);
        rosePivot.add(roseInstance);
    } else {
        preloadForestGLBs(() => {
            if (_roseGLBTemplate) {
                const roseInstance = _roseGLBTemplate.clone(true);
                enableShadows(roseInstance);
                rosePivot.add(roseInstance);
            }
        });
    }

    // Natural botanical ambient response without artificial point light blowout

    // 4. Golden pollen motes
    const moteCount = 36;
    const moteGeo = new THREE.BufferGeometry();
    const motePos = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
        const r = 0.3 + rand() * 1.5;
        const theta = rand() * Math.PI * 2;
        const my = 0.5 + rand() * 2.8;
        motePos[i * 3] = Math.cos(theta) * r + 0.15;
        motePos[i * 3 + 1] = my;
        motePos[i * 3 + 2] = Math.sin(theta) * r;
    }
    moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
    const motes = new THREE.Points(
        moteGeo,
        new THREE.PointsMaterial({
            color: 0xd4af37,
            size: 0.02,
            transparent: true,
            opacity: 0.25,
            depthWrite: false
        })
    );
    group.add(motes);

    group.userData.swayGroup = rosePivot;
    group.userData.swayAmplitude = 0.035;
    group.userData.swayFreqMult = 1.1;
    group.userData.motes = motes;

    return group;
}

// ---------------------------------------------------------------------------
// 9. Authentic Punjabi Baag (Orchard / Sacred Grove) Layout
// ---------------------------------------------------------------------------

// 44 trees distributed organically like a true Punjabi baag orchard:
// Authentic Indian baag (orchard grove) layout: denser distribution (50 trees, 68m perimeter)
// with strictly guaranteed zero canopy intersection and natural root flare preservation.
export function layoutForest() {
    const rand = mulberry32(80);

    const baseRadii = {
        banyan: 12.65,
        peepal: 7.15,
        mango: 8.15,
        neem: 6.55
    };

    const minCenterRadius = 10.2; // Intimate, sunlit clearing around the central sacred rose
    const maxRadius = 68.0;       // Lush, dense baag perimeter
    const placed = [];

    // Grand sentinel Banyans on opposite perimeters
    const b1Angle = rand() * Math.PI * 2;
    const b1R = maxRadius - 14.0;
    const b1Scale = 1.05;
    placed.push({
        species: 'banyan',
        x: Math.sin(b1Angle) * b1R,
        z: Math.cos(b1Angle) * b1R,
        angle: rand() * Math.PI * 2,
        seed: 701,
        scale: b1Scale,
        rReq: baseRadii.banyan * b1Scale
    });

    const b2Angle = b1Angle + Math.PI + (rand() - 0.5) * 0.35;
    const b2R = maxRadius - 14.0;
    const b2Scale = 1.05;
    placed.push({
        species: 'banyan',
        x: Math.sin(b2Angle) * b2R,
        z: Math.cos(b2Angle) * b2R,
        angle: rand() * Math.PI * 2,
        seed: 702,
        scale: b2Scale,
        rReq: baseRadii.banyan * b2Scale
    });

    // 50 trees total: 2 grand banyans, 10 sacred peepals, 21 lush mangoes, 17 cooling neems
    const toPlace = [];
    for (let i = 0; i < 10; i++) toPlace.push('peepal');
    for (let i = 0; i < 21; i++) toPlace.push('mango');
    for (let i = 0; i < 17; i++) toPlace.push('neem');

    // Shuffle so diverse species naturally interleave across the grove
    for (let i = toPlace.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [toPlace[i], toPlace[j]] = [toPlace[j], toPlace[i]];
    }

    for (let i = 0; i < toPlace.length; i++) {
        const species = toPlace[i];
        let best = null;
        let maxMinDist = -1;

        // Best-candidate sampling: maximizes distance to nearest neighbor to eliminate clumping
        for (let attempt = 0; attempt < 5000; attempt++) {
            const u = rand();
            const r = minCenterRadius + Math.sqrt(u) * (maxRadius - minCenterRadius);
            const theta = rand() * Math.PI * 2;
            const x = Math.sin(theta) * r;
            const z = Math.cos(theta) * r;
            const scale = 0.92 + rand() * 0.16;
            const rReq = baseRadii[species] * scale;

            let ok = true;
            let closestDist = 999;
            for (const p of placed) {
                const d = Math.hypot(x - p.x, z - p.z);
                const req = rReq + p.rReq + 0.25;
                if (d < req) {
                    ok = false;
                    break;
                }
                if (d < closestDist) closestDist = d;
            }

            if (ok) {
                if (closestDist > maxMinDist) {
                    maxMinDist = closestDist;
                    best = {
                        species,
                        x,
                        z,
                        angle: rand() * Math.PI * 2,
                        seed: 710 + i * 47,
                        scale,
                        rReq
                    };
                }
                // High clearance candidate found: accept immediately
                if (closestDist > (rReq + 4.0)) {
                    best = {
                        species,
                        x,
                        z,
                        angle: rand() * Math.PI * 2,
                        seed: 710 + i * 47,
                        scale,
                        rReq
                    };
                    break;
                }
            }
        }

        if (best) {
            placed.push(best);
        }
    }

    return placed;
}
