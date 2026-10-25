import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jaumetur3w.github.io',
  base: '/burger_xativa',
  vite: { plugins: [tailwindcss()] },
});
