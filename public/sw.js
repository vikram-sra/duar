const CACHE = 'duar-v3';
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
// - Images and portfolio assets (/portfolio/, /models/): Cache-first with background revalidation for instant zero-latency loading on mobile.
// - Navigation & scripts: Network-first with cache fallback.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Pass through cross-origin requests
    if (new URL(req.url).origin !== self.location.origin) return;

    const url = new URL(req.url);
    const isImageOrAsset = req.destination === 'image' || url.pathname.includes('/portfolio/') || url.pathname.includes('/models/');

    if (isImageOrAsset) {
        event.respondWith(
            caches.match(req).then((cached) => {
                if (cached) {
                    // Revalidate in background
                    fetch(req).then((res) => {
                        if (res && res.ok) {
                            const copy = res.clone();
                            caches.open(CACHE).then((cache) => cache.put(req, copy));
                        }
                    }).catch(() => {});
                    return cached;
                }
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
