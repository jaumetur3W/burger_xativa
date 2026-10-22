import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jautur.github.io',
  base: '/burger_xativa',
  vite: { plugins: [tailwindcss()] },
});
