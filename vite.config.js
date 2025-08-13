// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    base: '/', // Netlify 用 "/"，GitHub Pages 才用 "/repo-name/"
})
