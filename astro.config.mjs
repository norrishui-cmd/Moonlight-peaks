import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain after you buy it.
export default defineConfig({
  site: 'https://moonlitalmanac.example.com',
  integrations: [sitemap()],
});
