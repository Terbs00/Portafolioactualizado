import { defineConfig } from 'vite';

export default defineConfig({
  base: '/http://localhost:5178/Portafolio//', 
  build: {
    outDir: 'docs',   
    emptyOutDir: true
  }
});