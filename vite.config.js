import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: globalThis.process?.env?.VITE_PUBLIC_BASE || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-routes',
      closeBundle() {
        // Copy index.html to SPA sub-routes so static hosts serve them correctly
        const dist = resolve(__dirname, 'dist')
        const routes = ['curso-adestramento-classeapets-presencial', 'curso-adestramento-classeapets-presencial-b', 'xixi-e-coco-no-lugar-certo', 'profissao-adestrador', 'prova-social-adestrador']
        for (const route of routes) {
          const dir = resolve(dist, route)
          mkdirSync(dir, { recursive: true })
          copyFileSync(resolve(dist, 'index.html'), resolve(dir, 'index.html'))
        }
      },
    },
  ],
  build: {
    target: ['es2020', 'chrome80', 'safari14', 'firefox90'],
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
