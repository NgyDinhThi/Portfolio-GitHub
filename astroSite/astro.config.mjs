import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ngydinhthi.github.io/Portfolio-GitHub/',
  base: '/Portfolio-GitHub',
  vite: {
    plugins: [tailwindcss()],
  },
});