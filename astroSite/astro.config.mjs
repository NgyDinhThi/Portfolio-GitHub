// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ngydinhthi.github.io',
  base: '/Portfolio-GitHub', 
  // Sử dụng biến tailwind đã import ở trên
  integrations: [tailwind()],
});