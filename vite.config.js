import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

// Route-specific preload hints for LCP images
const routePreloads = {
  'curso-dog-walker-profissional': '<link rel="preload" as="image" type="image/webp" href="/images/optimized/servico-passeador-480w.webp" imagesrcset="/images/optimized/servico-passeador-480w.webp 480w, /images/optimized/servico-passeador-640w.webp 640w, /images/optimized/servico-passeador-960w.webp 960w" imagesizes="(max-width: 768px) 200px, 440px" fetchpriority="high" />',
}

// Static above-the-fold HTML shell to reduce LCP (rendered before JS loads)
const routeShells = {
  'curso-dog-walker-profissional': `<div id="shell" style="background:linear-gradient(135deg,rgb(3,12,15),rgb(5,25,30));min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5rem 1rem 2rem;text-align:center;font-family:'Outfit',system-ui,sans-serif">
  <img src="/images/optimized/servico-passeador-480w.webp" alt="Dog Walker Profissional" width="200" height="200" style="border-radius:1rem;max-width:200px;height:auto;margin-bottom:1.5rem;box-shadow:0 8px 40px rgba(0,0,0,.3)" fetchpriority="high"/>
  <h1 style="color:#fff;font-size:1.6rem;font-weight:800;line-height:1.18;margin:0 0 1rem;max-width:400px">Torne-se Dog Walker Profissional e <span style="background:linear-gradient(135deg,#1BA8B8,#2edef0);-webkit-background-clip:text;-webkit-text-fill-color:transparent">fature de R$ 4 a 7 mil/m&ecirc;s.</span></h1>
  <p style="color:#B0BEC5;font-size:.9rem;line-height:1.6;max-width:400px;margin:0 0 1.5rem">O &uacute;nico curso de Dog Walker ministrado por um adestrador profissional.</p>
  <a href="#investimento" style="background:linear-gradient(135deg,#1BA8B8,#2edef0,#1BA8B8);color:#fff;font-weight:700;padding:.75rem 2rem;border-radius:9999px;text-decoration:none;font-size:.88rem;display:inline-block">Quero me tornar Dog Walker</a>
</div>`,
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
          // Inject static HTML shell for instant LCP
          if (routeShells[route]) {
            html = html.replace(
              /<div id="loading-fallback"[^>]*>[\s\S]*?<\/div>/,
              routeShells[route]
            )
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
