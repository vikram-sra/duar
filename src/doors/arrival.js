import * as THREE from 'three';

// What arrives when you cross a threshold.
//
// Everything that MOVES is a texture inside WebGL, so the crossing shader's blur,
// streaks and aberration apply to it like any other pixels. Anything INTERACTIVE is
// handed to the DOM afterwards, once the camera is still — the swap happens in the one
// moment nothing is moving, so the seam is invisible.
//
// A live third-party page can never be a texture: no browser API rasterises an iframe
// into WebGL. Those doors arrive as a preview image and offer a link onward.

// Decode media off the main thread and keep it GPU-ready. Started at approach so the
// texture is resident well before the warp — uploading during the warp drops frames
// exactly at the moment the eye is most engaged.
export async function preloadDoorMedia(door) {
    if (door._media) return door._media;          // already resident
    if (door._mediaPromise) return door._mediaPromise;

    const data = door.data || {};
    const url = data.media_url || data.preview_url;

    door._mediaPromise = (async () => {
        if (!url) return { kind: 'placeholder', color: data.color || '#ffffff' };

        if (data.media_kind === 'video') {
            const video = document.createElement('video');
            video.src = url;
            video.crossOrigin = 'anonymous';
            video.muted = true;          // required for programmatic playback
            video.loop = true;
            video.playsInline = true;
            video.preload = 'auto';
            // Seek to the first frame so the texture is never blank on arrival.
            await new Promise((res) => {
                const done = () => res();
                video.addEventListener('loadeddata', done, { once: true });
                video.addEventListener('error', done, { once: true });
                setTimeout(done, 4000); // never block the crossing on a slow network
            });
            const texture = new THREE.VideoTexture(video);
            texture.colorSpace = THREE.SRGBColorSpace;
            return { kind: 'video', texture, video };
        }

        try {
            const res = await fetch(url, { mode: 'cors' });
            const blob = await res.blob();
            // createImageBitmap decodes off the main thread — the whole point.
            const bitmap = await createImageBitmap(blob);
            const texture = new THREE.CanvasTexture(bitmap);
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.needsUpdate = true;
            return { kind: 'image', texture, width: bitmap.width, height: bitmap.height };
        } catch (e) {
            console.warn('Door media failed to load, using placeholder:', url, e);
            return { kind: 'placeholder', color: data.color || '#ffffff' };
        }
    })();

    door._media = await door._mediaPromise;
    return door._media;
}

// The surface the content arrives on: a plane just beyond the doorway, scaled to the
// media's aspect ratio, that grows out of the vanishing point as the camera warps in.
export function buildArrivalPlane(media) {
    let material;

    if (media.kind === 'placeholder') {
        // A stand-in surface, not a light source: darkened well below the bloom
        // threshold so a door without media doesn't arrive as a white blowout.
        const color = new THREE.Color(media.color).multiplyScalar(0.22);
        material = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            toneMapped: false
        });
    } else {
        material = new THREE.MeshBasicMaterial({
            map: media.texture,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            toneMapped: false      // preview art should arrive as authored
        });
    }

    // Fit inside the doorway's proportions, respecting the media's own aspect.
    const aspect = media.width && media.height ? media.width / media.height : 16 / 9;
    const height = 3.2;
    const width = height * aspect;

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
    mesh.name = 'ArrivalSurface';
    mesh.renderOrder = 3;
    return mesh;
}

export function disposeArrival(mesh) {
    if (!mesh) return;
    mesh.geometry?.dispose();
    if (mesh.material?.map && mesh.material.map.isVideoTexture !== true) {
        mesh.material.map.dispose();
    }
    mesh.material?.dispose();
    mesh.parent?.remove(mesh);
}
