import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // penting supaya Codespaces / jaringan bisa akses
    port: 5173,
  },
});
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
"vite": "^5.3.1",
"@vitejs/plugin-react": "^4.0.0"
