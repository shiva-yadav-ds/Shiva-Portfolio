import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Create aliases for cleaner imports
      '@': '/src',
    },
  },
  server: {
    hmr: {
      overlay: true, // Show error overlay (set to false if you want to suppress errors)
    },
  },
})
