// Two caches with different lifetimes.
//
// SHELL is stamped with the build id at build time (see stampServiceWorker in
// vite.config.js), so every deploy produces a new cache name and the previous
// build's HTML/JS/CSS is deleted on activate. Nothing here can go stale.
//
// ASSETS holds the heavy binaries (models, textures, portfolio images). Those
// are ~100 MB, so re-downloading them on every deploy would be worse than the
// staleness it prevents. Bump ASSET_VERSION by hand when a binary is replaced
// under an existing filename — and note that the runtime strategy below
// revalidates in the background too, so a forgotten bump self-corrects on the
// visitor's next load rather than never.
const BUILD_ID = 'mtpxjo5e';
const ASSET_VERSION = 'v2'; // v2: neem_tree.glb rebuilt in place (was 2.27M tris, now 217K)

const SHELL = `duar-shell-${BUILD_ID}`;
const ASSETS = `duar-assets-${ASSET_VERSION}`;
const KEEP = [SHELL, ASSETS];

const APP_SHELL = [
    './',
    './index.html',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(SHELL)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting()) // Activate the new worker as soon as it's ready
    );
});

// Purge every cache this build does not own. This is what clears a previous
// version out of a returning visitor's browser.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => !KEEP.includes(key)).map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// Only full, same-origin, basic 200s are worth storing. A 206 from a range
// request throws on cache.put, and an opaque response caches an unusable body.
function isCacheable(res) {
    return res && res.ok && res.status === 200 && res.type === 'basic';
}

// Cache strategy:
// - Heavy binaries (/portfolio/, /models/, /textures/, images): serve from cache
//   for speed, then refresh the entry in the background. The old assumption that
//   a filename implies fixed bytes was wrong — models do get rebuilt in place —
//   so a hit is fast, not authoritative.
// - manifest.json: never cache-first, or newly published work stays invisible.
// - Navigation, scripts, styles: network-first with cache fallback for offline.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return; // Pass through cross-origin

    const isManifest = url.pathname.endsWith('/manifest.json');
    const isHeavyAsset = !isManifest && (
        req.destination === 'image' ||
        url.pathname.includes('/portfolio/') ||
        url.pathname.includes('/models/') ||
        url.pathname.includes('/textures/'));

    if (isHeavyAsset) {
        event.respondWith(
            caches.open(ASSETS).then((cache) => cache.match(req).then((cached) => {
                // Goes through the HTTP cache, so an unchanged file costs a 304
                // and no body. Failures are ignored: this is a refresh, not the
                // response path.
                const fresh = fetch(req)
                    .then((res) => {
                        if (isCacheable(res)) cache.put(req, res.clone());
                        return res;
                    })
                    .catch(() => cached);

                if (cached) {
                    event.waitUntil(fresh);
                    return cached;
                }
                return fresh;
            }))
        );
        return;
    }

    event.respondWith(
        fetch(req)
            .then((res) => {
                if (isCacheable(res)) {
                    const copy = res.clone();
                    caches.open(SHELL).then((cache) => cache.put(req, copy));
                }
                return res;
            })
            .catch(() =>
                caches.match(req).then((cached) => {
                    if (cached) return cached;
                    if (req.mode === 'navigate') return caches.match('./index.html');
                    return Response.error();
                })
            )
    );
});

// Allow the page to tell a waiting worker to activate immediately.
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
