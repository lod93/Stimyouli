import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lod93.github.io/Stimyouli/',
  base: '/Stimyouli',
  integrations: [tailwind(), react()],
  output: 'static'
});
