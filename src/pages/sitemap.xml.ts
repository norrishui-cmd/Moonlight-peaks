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

// Per-page lastmod is not tracked by a CMS in this project, so instead of one blanket date for
// every URL (which teaches search engines to ignore lastmod entirely), pages that received real,
// substantial content edits in recent rounds get that later date; everything else defaults to
// launch day. Bump a path prefix here only when its actual content changed.
const LASTMOD_LAUNCH = '2026-07-07';
const LASTMOD_OVERRIDES: [string, string][] = [
  ['/vampsters', '2026-07-10'],
  ['/zh-hant', '2026-07-09'],
  ['/de', '2026-07-09'],
  // Post-launch data/structure rounds (real content changes), most recent first.
  ['/quests', '2026-07-09'],
  ['/mini-games', '2026-07-09'],
  ['/inventory', '2026-07-09'],
  ['/shipping', '2026-07-09'],
  ['/house', '2026-07-09'],
  ['/friendship', '2026-07-09'],
  ['/romance', '2026-07-09'],
  ['/farming', '2026-07-09'],
  ['/shapeshifting', '2026-07-09'],
  ['/map', '2026-07-09'],
  ['/nokturna', '2026-07-09'],
  ['/platforms', '2026-07-09'],
  ['/demo', '2026-07-09'],
  ['/guides', '2026-07-08'],
  ['/characters', '2026-07-08'],
  ['/achievements', '2026-07-08'],
  ['/known-issues', '2026-07-08'],
  ['/reviews', '2026-07-08'],
  ['/locations', '2026-07-09'],
  ['/families', '2026-07-08'],
  ['/faq', '2026-07-08'],
  ['/tools', '2026-07-08'],
];
const lastmodFor = (path: string): string => {
  const hit = LASTMOD_OVERRIDES.find(([prefix]) => path === prefix || path.startsWith(`${prefix}/`));
  return hit ? hit[1] : LASTMOD_LAUNCH;
};

type Entry = { path: string; images?: string[] };

const homeImages = ['/card-release.webp', '/card-guide.webp', '/card-nokturna.webp', '/card-romance.webp', '/card-cheats.webp', '/card-crops.webp'];
// Official press-kit images inserted into single-file pages via <GuideImage> (locations.ts-driven
// pages already flow their `image` field into the sitemap automatically via topic() below).
const staticPageImages: Record<string, string[]> = {
  '/farming': ['/images/moonlight-peaks/official/farm-02.webp'],
  '/fishing': ['/images/moonlight-peaks/official/pier-01.webp'],
  '/mini-games': ['/images/moonlight-peaks/official/minigame.webp'],
};

const staticPaths = ['/release-date', '/demo', '/platforms', '/system-requirements', '/languages', '/launch-day', '/known-issues', '/best-settings', '/beginner-guide', '/guides', '/achievements', '/quests', '/quests/a-bridge-too-far', '/mini-games', '/inventory', '/shipping', '/house', '/friendship', '/vampsters', '/tools', '/tools/platform-picker', '/tools/romance-gift-finder', '/tools/romance-match-quiz', '/tools/romance-planner', '/tools/item-tracker', '/tools/farming-profit-planner', '/tools/submit-data', '/tools/families-explorer', '/tools/gift-tracker', '/tools/nokturna-tracker', '/export', '/farming', '/fishing', '/magic', '/character-creator', '/shapeshifting', '/items', '/environment', '/behind-the-scenes', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/reviews', '/about', '/privacy', '/previews', '/faq', '/locations', '/families', '/compare', '/es', '/es/beginner-guide', '/es/release-date', '/es/faq', '/es/characters', '/es/farming', '/es/magic', '/es/platforms', '/es/romance', '/es/items', '/es/locations', '/es/families', '/es/activities', '/es/demo', '/es/cheats', '/es/character-creator', '/es/shapeshifting', '/es/languages', '/es/guides', '/es/tools', '/es/about', '/ja', '/ja/beginner-guide', '/ja/release-date', '/ja/faq', '/ja/characters', '/ja/farming', '/ja/magic', '/ja/platforms', '/ja/romance', '/ja/items', '/ja/locations', '/ja/families', '/ja/activities', '/ja/demo', '/ja/cheats', '/ja/character-creator', '/ja/shapeshifting', '/ja/languages', '/ja/guides', '/ja/tools', '/ja/about', '/ja/locations/mines', '/ja/quests/a-bridge-too-far', '/ja/known-issues', '/ja/quests', '/ja/faq/is-moonlight-peaks-on-ps5-or-xbox', '/ja/faq/is-moonlight-peaks-multiplayer', '/ja/items/tools', '/ja/items/fertilizer', '/ja/items/clothing', '/ja/items/fish', '/ja/items/critters', '/ja/items/vampster', '/ja/items/soul-blobs', '/ja/items/cooking', '/ja/items/crafting', '/ja/items/artifacts', '/ja/items/farm-helpers', '/ja/items/livestock', '/ja/items/potions', '/ja/items/mineables', '/ja/items/decorations', '/zh', '/zh/beginner-guide', '/zh/release-date', '/zh/faq', '/zh/characters', '/zh/farming', '/zh/magic', '/zh/platforms', '/zh/romance', '/zh/items', '/zh/locations', '/zh/families', '/zh/activities', '/zh/demo', '/zh/cheats', '/zh/character-creator', '/zh/shapeshifting', '/zh/languages', '/zh/guides', '/zh/tools', '/zh/about', '/zh-hant', '/zh-hant/beginner-guide', '/zh-hant/release-date', '/zh-hant/faq', '/zh-hant/characters', '/zh-hant/farming', '/zh-hant/magic', '/zh-hant/platforms', '/zh-hant/romance', '/zh-hant/items', '/zh-hant/locations', '/zh-hant/families', '/zh-hant/activities', '/zh-hant/demo', '/zh-hant/cheats', '/zh-hant/character-creator', '/zh-hant/shapeshifting', '/zh-hant/languages', '/zh-hant/guides', '/zh-hant/tools', '/zh-hant/about', '/de', '/de/beginner-guide', '/de/characters', '/de/romance', '/de/platforms', '/de/release-date', '/de/demo', '/de/magic', '/de/locations', '/de/locations/mines', '/de/known-issues', '/de/quests/a-bridge-too-far', '/de/faq', '/de/faq/is-moonlight-peaks-on-ps5-or-xbox', '/de/faq/is-moonlight-peaks-multiplayer'];
const translatedCharIds = ['count-dracula', 'saga', 'luna', 'orlock', 'brook', 'the-warlock'];
const jaOnlyCharIds = ['mina', 'sabrina', 'noel', 'fiona'];
const jaGiftCharIds = ['saga', 'luna', 'orlock', 'sabrina', 'noel', 'fiona'];
const translatedCharPaths = [
  ...['es', 'ja', 'zh', 'zh-hant'].flatMap((l) => translatedCharIds.map((id) => `/${l}/characters/${id}`)),
  ...jaOnlyCharIds.map((id) => `/ja/characters/${id}`),
  ...jaGiftCharIds.map((id) => `/ja/characters/${id}/gifts`),
];

const topic = (base: string, items: { slug: string; image?: string }[]): Entry[] =>
  items.map((it) => ({ path: `${base}/${it.slug}`, images: it.image ? [it.image] : [] }));

export const GET: APIRoute = () => {
  const charEntries: Entry[] = characters
    .map((c) => ({ path: `/characters/${c.id}`, images: c.img ? [c.img] : [] }));

  const entries: Entry[] = [
    { path: '/', images: homeImages },
    ...staticPaths.map((p) => ({ path: p, images: staticPageImages[p] || [] })),
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
    <lastmod>${lastmodFor(e.path)}</lastmod>${(e.images || []).map((img) => `
    <image:image><image:loc>${abs(img)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
