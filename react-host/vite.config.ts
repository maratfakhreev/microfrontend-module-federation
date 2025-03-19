import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'microfrontendReact',
      manifest: true,
      remotes: {
        microfrontendVue: {
          type: 'module',
          name: 'microfrontendVue',
          entry: 'http://localhost:5002/remoteEntry.js',
        },
      },
    }),
  ],
  server: {
    port: 5001,
  },
})
