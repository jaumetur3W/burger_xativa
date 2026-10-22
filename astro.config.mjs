import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://demo.example',
  vite: { plugins: [tailwindcss()] },
});
