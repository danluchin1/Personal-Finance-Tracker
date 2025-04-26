import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Disable PostCSS entirely
  css: {
    postcss: false, // 👈 Critical: Skip PostCSS processing
  },
  // Optional: Optimize Tailwind
  optimizeDeps: {
    include: ['tailwindcss'], // Force Vite to pre-bundle Tailwind
  },
  server: {
    proxy: {
      '/transactions': 'http://localhost:5000',
      '/budget': 'http://localhost:5000',
      '/recurring': 'http://localhost:5000',
      '/export': 'http://localhost:5000',
      '/reports': 'http://localhost:5000',
    },
  },
});