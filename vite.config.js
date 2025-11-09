import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portafolio/', 
  build: {
    outDir: 'docs',   
    emptyOutDir: true
  }
});