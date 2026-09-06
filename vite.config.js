import { defineConfig } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Every build gets a fresh id. It is stamped into the service worker's cache
// name so that activating a new worker purges the previous build's cached
// HTML/JS/CSS instead of serving it forever.
const BUILD_ID = Date.now().toString(36);

// sw.js lives in public/ and is copied verbatim, so it never passes through the
// bundler. Rewrite the emitted copy on disk once the build has been written.
function stampServiceWorker() {
    return {
        name: 'stamp-service-worker',
        apply: 'build',
        closeBundle() {
            const file = resolve(process.cwd(), 'dist/sw.js');
            const src = readFileSync(file, 'utf8');
            if (!src.includes('__BUILD_ID__')) {
                this.warn('sw.js has no __BUILD_ID__ placeholder; cache will not be versioned per build');
                return;
            }
            writeFileSync(file, src.replaceAll('__BUILD_ID__', BUILD_ID));
            console.log(`\nsw.js stamped with build id ${BUILD_ID}`);
        },
    };
}

export default defineConfig({
    base: './',
    appType: 'mpa',
    plugins: [stampServiceWorker()],
    build: {
        rollupOptions: {
            output: {
                // Content hashes are what make a redeploy actually reach returning
                // visitors: a changed file gets a new URL, so no cache layer
                // (browser, service worker or CDN) can serve the old bytes.
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },
    },
});
