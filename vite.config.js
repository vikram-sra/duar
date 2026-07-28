import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                // Split the (rarely-changing) 3D libraries out of the app bundle so
                // browsers keep them cached across app deploys.
                manualChunks: {
                    three: ['three'],
                    gsap: ['gsap']
                }
            }
        }
    }
});
