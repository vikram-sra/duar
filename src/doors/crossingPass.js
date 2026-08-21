import * as THREE from 'three';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

// The whole crossing in one pass, driven by one uniform.
//
// Four effects — aperture mask, radial streaks, chromatic aberration, vignette — all
// derive from uProgress, so they cannot drift out of sync with each other or with the
// camera. Scrubbing uProgress scrubs the entire transition, which also makes backing
// out mid-crossing free: run it back to 0.
//
// The pass is added to the composer only while crossing and removed on settle, so it
// costs nothing at rest.
//
//   uProgress   0 .. 1   overall crossing progress
//   uAperture   xy = centre (0..1 screen space), zw = half-size of the doorway quad
//   uTint       the door's own colour, graded in toward the end

const CrossingShader = {
    uniforms: {
        tDiffuse:   { value: null },
        uProgress:  { value: 0 },
        uAperture:  { value: new THREE.Vector4(0.5, 0.5, 0.12, 0.3) },
        uTint:      { value: new THREE.Color(0xffffff) },
        uAspect:    { value: 1 }
    },
    vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: /* glsl */`
        uniform sampler2D tDiffuse;
        uniform float uProgress;
        uniform vec4  uAperture;
        uniform vec3  uTint;
        uniform float uAspect;
        varying vec2 vUv;

        // Distance outside the doorway rect, 0 inside, growing outward.
        float outsideAperture(vec2 uv) {
            vec2 d = abs(uv - uAperture.xy) - uAperture.zw;
            d.x *= uAspect;                       // keep the falloff circular on any viewport
            return length(max(d, 0.0));
        }

        void main() {
            vec2 centre = uAperture.xy;
            vec2 toCentre = vUv - centre;

            // ── Ramps. Blur leads; streaks and aberration only arrive in the warp. ──
            float pBlur   = smoothstep(0.0, 0.55, uProgress);
            float pWarp   = smoothstep(0.55, 1.0, uProgress);

            // ── 1. Aperture mask: sharp inside the doorway, blurred outside. ──
            // Not depth of field — a mask, so doors at the same distance still blur.
            float outside = outsideAperture(vUv);
            float blurAmt = smoothstep(0.0, 0.22, outside) * pBlur * 0.9;

            // ── 2. Radial streaks from the vanishing point during the warp. ──
            float streak = pWarp * 0.28;

            // Both blur and streaks are gathered along the radial direction, so one
            // sample loop serves both. Nine taps is plenty once the frame is moving.
            vec3 col = vec3(0.0);
            float total = 0.0;
            for (int i = 0; i < 9; i++) {
                float t = float(i) / 8.0;
                // Blur scatters symmetrically; streaks pull inward toward the centre.
                float spread = (t - 0.5) * blurAmt * 0.09;
                float pull   = t * streak;
                vec2 sampleUv = vUv - toCentre * pull + toCentre * spread;

                float w = 1.0 - t * 0.35;
                col += texture2D(tDiffuse, sampleUv).rgb * w;
                total += w;
            }
            col /= total;

            // ── 3. Chromatic aberration, scaled by distance from the centre. ──
            // Zero at the vanishing point, strongest at the frame edge: uniform split
            // reads as a broken lens, radial split reads as speed.
            float ca = pWarp * 0.016 * length(toCentre);
            if (ca > 0.0001) {
                col.r = texture2D(tDiffuse, vUv - toCentre * (ca + streak * 0.5)).r;
                col.b = texture2D(tDiffuse, vUv + toCentre * (ca - streak * 0.5)).b;
            }

            // ── 4. Vignette + grade toward the door's colour. ──
            float vig = 1.0 - smoothstep(0.35, 0.95, length(toCentre) * 1.4) * (0.25 + pWarp * 0.45);
            col *= vig;
            col = mix(col, col * uTint, pWarp * 0.35);

            gl_FragColor = vec4(col, 1.0);
        }
    `
};

export function createCrossingPass() {
    const pass = new ShaderPass(CrossingShader);
    pass.enabled = false;
    return pass;
}

// Project a door's portal quad to screen space so the mask tracks the real doorway
// silhouette as it skews, rather than an approximate circle.
const _corner = new THREE.Vector3();
const _min = new THREE.Vector2();
const _max = new THREE.Vector2();
const HALF_W = 0.75, HALF_H = 1.75, CENTRE_Y = 1.75;

export function apertureForDoor(door, camera, target = new THREE.Vector4()) {
    _min.set(Infinity, Infinity);
    _max.set(-Infinity, -Infinity);

    for (let i = 0; i < 4; i++) {
        const sx = (i === 0 || i === 3) ? -HALF_W : HALF_W;
        const sy = (i < 2) ? -HALF_H : HALF_H;
        _corner.set(sx, CENTRE_Y + sy, 0);
        door.group.localToWorld(_corner);
        _corner.project(camera);

        const x = _corner.x * 0.5 + 0.5;
        const y = _corner.y * 0.5 + 0.5;
        _min.x = Math.min(_min.x, x); _min.y = Math.min(_min.y, y);
        _max.x = Math.max(_max.x, x); _max.y = Math.max(_max.y, y);
    }

    target.set(
        (_min.x + _max.x) * 0.5,
        (_min.y + _max.y) * 0.5,
        Math.max((_max.x - _min.x) * 0.5, 0.001),
        Math.max((_max.y - _min.y) * 0.5, 0.001)
    );
    return target;
}
