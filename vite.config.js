import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Local mirror of the cauce-ia.es routing in public/.htaccess (dev and preview only; production uses Apache).
const cauceRoutes = {
  '/': '/digitalizacion.html',
  '/equipo': '/index.html',
  '/aviso-legal': '/aviso-legal.html',
  '/privacidad': '/privacidad.html',
}
function cauceRouting() {
  const rewrite = (req, _res, next) => {
    const [path, query] = req.url.split('?')
    const target = cauceRoutes[path.replace(/(.)\/$/, '$1')]
    if (target) req.url = target + (query ? `?${query}` : '')
    next()
  }
  return {
    name: 'cauce-routing',
    configureServer(server) { server.middlewares.use(rewrite) },
    configurePreviewServer(server) { server.middlewares.use(rewrite) },
  }
}

export default defineConfig({
  plugins: [cauceRouting(), react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        digitalizacion: resolve(__dirname, 'digitalizacion.html'),
        avisoLegal: resolve(__dirname, 'aviso-legal.html'),
        privacidad: resolve(__dirname, 'privacidad.html'),
      },
    },
  },
})
