import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

// Route-specific preload hints for LCP images
const routePreloads = {
  'curso-dog-walker-profissional': '<link rel="preload" as="image" type="image/webp" href="/images/optimized/servico-passeador-480w.webp" imagesrcset="/images/optimized/servico-passeador-480w.webp 480w, /images/optimized/servico-passeador-640w.webp 640w, /images/optimized/servico-passeador-960w.webp 960w" imagesizes="(max-width: 768px) 200px, 440px" fetchpriority="high" />',
}

// https://vite.dev/config/
export default defineConfig({
  base: globalThis.process?.env?.VITE_PUBLIC_BASE || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-routes',
      closeBundle() {
        const dist = resolve(__dirname, 'dist')
        const baseHtml = readFileSync(resolve(dist, 'index.html'), 'utf-8')
        const routes = ['curso-adestramento-classeapets-presencial', 'curso-adestramento-classeapets-presencial-b', 'xixi-e-coco-no-lugar-certo', 'profissao-adestrador', 'prova-social-adestrador', 'curso-dog-walker-profissional']
        for (const route of routes) {
          const dir = resolve(dist, route)
          mkdirSync(dir, { recursive: true })
          let html = baseHtml
          // Inject route-specific preload hints for LCP
          if (routePreloads[route]) {
            html = html.replace('</head>', `    ${routePreloads[route]}\n  </head>`)
          }
          writeFileSync(resolve(dir, 'index.html'), html)
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
          router: ['react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
