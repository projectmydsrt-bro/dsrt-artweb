import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // penting supaya Codespaces / jaringan bisa akses
    port: 5173,
  },
});
