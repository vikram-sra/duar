// Dynamic cache name to handle updates
const CACHE_NAME = 'duar-cache-v2';
const DYNAMIC_CACHE_NAME = 'duar-dynamic-v2';

const CORE_ASSETS = [
    './',
    './index.html',
    './main.js',
    './style.css' // Assuming we will extract styles here
];

const STATIC_ASSETS = [
    './data/metadata.json'
    // Models and textures will be cached dynamically as they are requested
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll([...CORE_ASSETS, ...STATIC_ASSETS]))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Helper function to determine if a request is for a core asset
const isCoreAsset = (url) => {
    return CORE_ASSETS.some(asset => url.endsWith(asset.replace('./', '')));
};

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Network-First for core assets (HTML, main JS, CSS) to ensure latest version
    if (isCoreAsset(requestUrl.pathname) || requestUrl.pathname === '/') {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
        return;
    }

    // Stale-While-Revalidate for other assets (models, textures, data)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Only cache valid responses
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Network failed, do nothing (we already returned the cached version if it existed)
                console.warn('Network request failed for', event.request.url);
            });

            // Return cached response instantly, or wait for network if not in cache
            return cachedResponse || fetchPromise;
        })
    );
});

// Listen for message from main app to update
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
