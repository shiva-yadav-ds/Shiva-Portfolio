import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Create aliases for cleaner imports
    },
  },
  server: {
    hmr: {
      overlay: false, // Suppress error overlay
    },
  },
  build: {
    rollupOptions: {
      external: ['react-tilt'], // Add react-tilt to external configuration
    },
  },
});
