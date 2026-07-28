const CACHE = 'duar-v2';
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

// Purge any old versioned caches. Note: no clients.claim() — that avoids a
// needless reload on the very first visit (see controllerchange handler in main.js).
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
        )
    );
});

// Network-first: always prefer fresh content, fall back to cache when offline.
// This sidesteps Vite's hashed asset filenames — whatever the built HTML requests
// gets cached on first fetch, and updated content always wins while online.
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Let cross-origin requests (Google Fonts, waveism.duar.one, etc.) pass through untouched.
    if (new URL(req.url).origin !== self.location.origin) return;

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
                    // For navigations, fall back to the cached app shell.
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
