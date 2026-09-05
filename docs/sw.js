const CACHE = 'duar-v5';
const APP_SHELL = [
    './',
    './index.html',
];

// Precache the minimal app shell. Everything else is cached at runtime.
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting()) // Activate the new worker as soon as it's ready
    );
});

// Purge any old versioned caches.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
        )
    );
});

// Cache strategy:
// - Images and portfolio assets (/portfolio/, /models/): cache-first and FINAL. These
//   are content-addressed by filename, so a hit is always correct and needs no
//   revalidation. manifest.json is deliberately excluded and served network-first, so
//   newly published work still appears immediately.
// - Navigation & scripts: network-first with cache fallback.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Pass through cross-origin requests
    if (new URL(req.url).origin !== self.location.origin) return;

    const url = new URL(req.url);
    // The manifest is the index of what exists; it must never come from cache-first
    // or new work stays invisible until the cache is cleared.
    const isManifest = url.pathname.endsWith('/manifest.json');
    const isImageOrAsset = !isManifest && (
        req.destination === 'image' ||
        url.pathname.includes('/portfolio/') ||
        url.pathname.includes('/models/') ||
        url.pathname.includes('/textures/'));

    if (isImageOrAsset) {
        event.respondWith(
            caches.match(req).then((cached) => {
                // A hit is authoritative: same filename means same bytes.
                if (cached) return cached;
                return fetch(req).then((res) => {
                    if (res && res.ok) {
                        const copy = res.clone();
                        caches.open(CACHE).then((cache) => cache.put(req, copy));
                    }
                    return res;
                });
            })
        );
        return;
    }

    event.respondWith(
        fetch(req)
            .then((res) => {
                const copy = res.clone();
                caches.open(CACHE).then((cache) => cache.put(req, copy));
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
