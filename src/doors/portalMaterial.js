import * as THREE from 'three';

// The portal surface: a dark obsidian vortex with a colored rim glow, tinted per door.
// Animate uTime each frame; uOpacity fades in as the door opens; uHover intensifies on hover.
export function createPortalMaterial(colorHex) {
    return new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uOpacity: { value: 0.0 },
            uHover: { value: 0.0 },
            uColor: { value: new THREE.Color(colorHex || 0xffffff) }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform float uOpacity;
            uniform float uHover;
            uniform vec3 uColor;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv - 0.5;
                uv.y *= 0.43;

                float dist = length(uv);
                float angle = atan(uv.y, uv.x);

                // Wave and spiral patterns for organic smoke-like vortex movements
                float wave = sin(dist * 50.0 - uTime * 4.0 + sin(uTime * 0.5 + dist * 10.0) * 0.6) * 0.5 + 0.5;
                float spiral = sin(angle * 4.0 - dist * 25.0 + uTime * 2.0) * 0.5 + 0.5;

                float intensity = mix(wave, spiral, 0.4);

                // Vignetted rectangular frame edges
                float edgeX = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
                float edgeY = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
                float rectEdge = edgeX * edgeY;

                // Dark obsidian swirling void
                // Shifting translucent alpha patterns
                float baseAlpha = mix(0.94, 0.65, intensity);
                float finalAlpha = baseAlpha * rectEdge * uOpacity * (1.0 + uHover * 0.15);

                // Dark obsidian interior with a colored rim glow hugging the frame edge.
                // rimGlow peaks in the transition band (rectEdge ~0.5) and is 0 at center/outside.
                float rimGlow = (1.0 - rectEdge) * rectEdge * 4.0;
                rimGlow *= (1.0 + uHover * 0.7);
                vec3 finalColor = uColor * rimGlow * (0.55 + 0.45 * intensity);

                finalAlpha = clamp(finalAlpha + rimGlow * 0.35 * uOpacity, 0.0, 1.0);
                gl_FragColor = vec4(finalColor, finalAlpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        side: THREE.DoubleSide
    });
}
