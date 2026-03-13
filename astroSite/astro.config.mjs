import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ngydinhthi.github.io',
  base: '/Portfolio-GitHub',
  vite: {
    plugins: [tailwindcss()],
  },
});