import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // plugin React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3001,
    open: true
  },
  base: '/' // importante para o roteamento funcionar
});
