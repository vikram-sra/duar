import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    // The site is several real pages, not one app that routes in the browser.
    // Vite's default 'spa' mode answers every unmatched path with index.html, which
    // meant /work/ and /about/ silently returned the 3D gallery in dev while working
    // correctly on Netlify -- the worst kind of difference, since it only shows up
    // in production. 'mpa' turns the fallback off so directory indexes resolve here
    // exactly as they do when deployed.
    appType: 'mpa',
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/bundle.js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
});
