import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Local dev against the Coreshift Live Edit package source (HMR).
      // Production builds consume the published @coreshift/live-edit package.
      '@coreshift/live-edit': fileURLToPath(
        new URL('../live-edit/src/index.tsx', import.meta.url),
      ),
    },
    // The linked package resolves react/react-dom from the app's single copy.
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  server: {
    // Allow Vite to serve the sibling live-edit package source during local dev.
    fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] },
  },
})
