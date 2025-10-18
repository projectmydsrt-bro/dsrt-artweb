import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // biar Codespaces dan jaringan luar bisa akses
    port: 5173, // port default Vite
  },
});
