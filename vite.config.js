import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        host: '0.0.0.0',  // Bind to all interfaces inside Docker
        port: 5173,
        hmr: {
            host: '192.168.2.77',  // Host IP for Hot Module Replacement (HMR)
            port: 5173,
        },
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js',  // Alias to enable runtime template compilation
        },
    },
});
