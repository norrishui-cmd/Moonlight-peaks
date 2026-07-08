import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { previews } from '../data/previews';
import { characters } from '../data/characters';
import { faqs } from '../data/faq';
import { locations } from '../data/locations';
import { families } from '../data/families';
import { activities } from '../data/activities';
import { comparisons } from '../data/compare';
import { platforms } from '../data/platforms';
import { demo } from '../data/demo';
import { news } from '../data/news';
import { seoPages } from '../data/seoGraph';
import { itemCategories } from '../data/items';

// Bump LASTMOD only when you push a meaningful content update (not every deploy / not daily),
// otherwise search engines learn to ignore it.
const LASTMOD = '2026-07-07';

type Entry = { path: string; images?: string[] };

const homeImages = ['/card-release.webp', '/card-guide.webp', '/card-nokturna.webp', '/card-romance.webp', '/card-cheats.webp', '/card-crops.webp'];

const staticPaths = ['/release-date', '/demo', '/platforms', '/system-requirements', '/languages', '/launch-day', '/known-issues', '/best-settings', '/beginner-guide', '/guides', '/achievements', '/tools', '/tools/platform-picker', '/tools/romance-gift-finder', '/tools/romance-match-quiz', '/tools/romance-planner', '/tools/item-tracker', '/tools/farming-profit-planner', '/tools/submit-data', '/tools/families-explorer', '/tools/gift-tracker', '/tools/nokturna-tracker', '/export', '/farming', '/fishing', '/magic', '/character-creator', '/shapeshifting', '/items', '/environment', '/behind-the-scenes', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/reviews', '/about', '/privacy', '/previews', '/faq', '/locations', '/families', '/compare', '/es', '/es/beginner-guide', '/es/release-date', '/es/faq', '/es/characters', '/es/farming', '/es/magic', '/es/platforms', '/es/romance', '/es/environment', '/es/items', '/es/locations', '/es/families', '/es/activities', '/es/demo', '/es/cheats', '/es/character-creator', '/es/shapeshifting', '/es/languages', '/es/guides', '/es/tools', '/es/about', '/ja', '/ja/beginner-guide', '/ja/release-date', '/ja/faq', '/ja/characters', '/ja/farming', '/ja/magic', '/ja/platforms', '/ja/romance', '/ja/environment', '/ja/items', '/ja/locations', '/ja/families', '/ja/activities', '/ja/demo', '/ja/cheats', '/ja/character-creator', '/ja/shapeshifting', '/ja/languages', '/ja/guides', '/ja/tools', '/ja/about', '/zh', '/zh/beginner-guide', '/zh/release-date', '/zh/faq', '/zh/characters', '/zh/farming', '/zh/magic', '/zh/platforms', '/zh/romance', '/zh/environment', '/zh/items', '/zh/locations', '/zh/families', '/zh/activities', '/zh/demo', '/zh/cheats', '/zh/character-creator', '/zh/shapeshifting', '/zh/languages', '/zh/guides', '/zh/tools', '/zh/about'];
const translatedCharIds = ['count-dracula', 'saga', 'luna', 'orlock', 'brook', 'the-warlock'];
const translatedCharPaths = ['es', 'ja', 'zh'].flatMap((l) => translatedCharIds.map((id) => `/${l}/characters/${id}`));

const topic = (base: string, items: { slug: string; image?: string }[]): Entry[] =>
  items.map((it) => ({ path: `${base}/${it.slug}`, images: it.image ? [it.image] : [] }));

export const GET: APIRoute = () => {
  const charEntries: Entry[] = characters
    .map((c) => ({ path: `/characters/${c.id}`, images: c.img ? [c.img] : [] }));

  const entries: Entry[] = [
    { path: '/', images: homeImages },
    ...staticPaths.map((p) => ({ path: p })),
    ...translatedCharPaths.map((p) => ({ path: p })),
    ...charEntries,
    ...topic('/locations', locations),
    ...topic('/families', families),
    ...topic('/activities', activities),
    ...topic('/platforms', platforms),
    ...topic('/items', itemCategories),
    ...topic('/compare', comparisons),
    ...topic('/demo', demo),
    ...news.map((n) => ({ path: `/news/${n.slug}` })),
    ...previews.map((p) => ({ path: `/previews/${p.slug}`, images: [p.image] })),
    ...faqs.map((f) => ({ path: `/faq/${f.slug}` })),
    ...seoPages.map((p) => ({ path: p.path })),
  ];

  const abs = (u: string) => new URL(u, SITE.url).href;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => `  <url>
    <loc>${abs(e.path)}</loc>
    <lastmod>${LASTMOD}</lastmod>${(e.images || []).map((img) => `
    <image:image><image:loc>${abs(img)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
