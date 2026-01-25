import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: '/index-react.html'
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index-react.html')
    }
  }
})
