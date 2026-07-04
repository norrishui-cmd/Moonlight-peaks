import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://moonlightpeakswiki.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'zh'],
    routing: {
      prefixDefaultLocale: false, // English stays at the root — no /en/ prefix, existing URLs untouched
    },
  },
});
