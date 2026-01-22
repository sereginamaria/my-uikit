import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import {resolve} from 'path'

// https://vite.dev/config/
export default defineConfig({
    // build: {
    //     lib: {
    //       entry: resolve(__dirname, 'src/index.js'),
    //       name: 'my-ui-kit',
    //       filename: (format) => `my-ui-kit.${format}.js`
    //     },
    //     rollupOptions: {
    //         external: ['vue'],
    //     },
    //     output: {
    //         globals: {
    //             vue: 'Vue',
    //         },
    //     }
    // },
    base: "https://sereginamaria.github.io/my-uikit/",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
