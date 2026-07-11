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
import { collectionDetailPages } from '../data/collectionDetailPages';

// Per-page lastmod is not tracked by a CMS in this project, so instead of one blanket date for
// every URL (which teaches search engines to ignore lastmod entirely), pages that received real,
// substantial content edits in recent rounds get that later date; everything else defaults to
// launch day. Bump a path prefix here only when its actual content changed.
const LASTMOD_LAUNCH = '2026-07-07';
const LASTMOD_OVERRIDES: [string, string][] = [
  ['/collection/vampsters', '2026-07-10'],
  ['/collection/fish', '2026-07-11'],
  ['/collection/critters', '2026-07-11'],
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

const staticPaths = ['/release-date', '/demo', '/platforms', '/system-requirements', '/languages', '/launch-day', '/known-issues', '/best-settings', '/beginner-guide', '/guides', '/achievements', '/quests', '/quests/a-bridge-too-far', '/mini-games', '/inventory', '/shipping', '/house', '/friendship', '/tools', '/tools/platform-picker', '/tools/romance-gift-finder', '/tools/romance-match-quiz', '/tools/romance-planner', '/tools/item-tracker', '/tools/farming-profit-planner', '/tools/submit-data', '/tools/families-explorer', '/tools/gift-tracker', '/tools/nokturna-tracker', '/export', '/farm', '/farm/crops', '/farm/house', '/farm/barn', '/farm/greenhouse', '/farm/animals', '/farm/farm-helpers', '/farm/crops/blood-grapes', '/farm/crops/rice', '/farm/crops/drikker', '/farm/crops/gobbler', '/farm/crops/hold-me-close', '/farm/crops/mandrake', '/farm/crops/weeping-wicca', '/farm/crops/instant-growth-mushrooms', '/collection', '/collection/fish', '/collection/jobs', '/collection/critters', '/collection/vampsters', '/collection/soul-blobs', '/farming', '/fishing', '/magic', '/character-creator', '/shapeshifting', '/items', '/environment', '/behind-the-scenes', '/activities', '/characters', '/moonlight-peaks-vs-stardew-valley', '/nokturna', '/map', '/romance', '/cheats', '/reviews', '/about', '/privacy', '/previews', '/faq', '/locations', '/families', '/compare', '/es', '/es/beginner-guide', '/es/release-date', '/es/faq', '/es/characters', '/es/farming', '/es/magic', '/es/platforms', '/es/romance', '/es/items', '/es/locations', '/es/families', '/es/activities', '/es/demo', '/es/cheats', '/es/character-creator', '/es/shapeshifting', '/es/languages', '/es/guides', '/es/tools', '/es/about', '/ja', '/ja/beginner-guide', '/ja/release-date', '/ja/faq', '/ja/characters', '/ja/farming', '/ja/farm', '/ja/farm/crops', '/ja/farm/house', '/ja/farm/barn', '/ja/farm/greenhouse', '/ja/farm/animals', '/ja/farm/farm-helpers', '/ja/farm/crops/blood-grapes', '/ja/farm/crops/rice', '/ja/farm/crops/drikker', '/ja/farm/crops/gobbler', '/ja/farm/crops/hold-me-close', '/ja/farm/crops/mandrake', '/ja/farm/crops/weeping-wicca', '/ja/farm/crops/instant-growth-mushrooms', '/ja/collection', '/ja/collection/fish', '/ja/collection/jobs', '/ja/collection/critters', '/ja/collection/vampsters', '/ja/collection/soul-blobs', '/ja/map', '/ja/magic', '/ja/platforms', '/ja/romance', '/ja/items', '/ja/locations', '/ja/families', '/ja/activities', '/ja/demo', '/ja/cheats', '/ja/character-creator', '/ja/shapeshifting', '/ja/languages', '/ja/guides', '/ja/tools', '/ja/about', '/ja/locations/mines', '/ja/quests/a-bridge-too-far', '/ja/known-issues', '/ja/quests', '/ja/faq/when-does-moonlight-peaks-release', '/ja/faq/how-much-does-moonlight-peaks-cost', '/ja/faq/what-platforms-is-moonlight-peaks-on', '/ja/faq/is-moonlight-peaks-on-ps5-or-xbox', '/ja/faq/is-there-a-moonlight-peaks-demo', '/ja/faq/does-demo-progress-carry-over', '/ja/faq/what-is-moonlight-peaks-about', '/ja/faq/who-makes-moonlight-peaks', '/ja/faq/is-moonlight-peaks-multiplayer', '/ja/faq/moonlight-peaks-reddit-discord-community', '/ja/faq/how-to-change-portrait-style', '/ja/faq/moonlight-peaks-age-rating', '/ja/faq/moonlight-peaks-crashing-freezing', '/ja/faq/moonlight-peaks-controller-not-working', '/ja/faq/moonlight-peaks-crops-wither-season-change', '/ja/faq/moonlight-peaks-mana-stamina-balance', '/ja/faq/moonlight-peaks-night-length-cycle', '/ja/faq/moonlight-peaks-how-to-save', '/ja/faq/moonlight-peaks-starting-mana-energy', '/ja/faq/moonlight-peaks-mini-map', '/ja/faq/moonlight-peaks-well-price', '/ja/faq/moonlight-peaks-best-universal-gifts', '/ja/faq/moonlight-peaks-how-to-get-copper', '/ja/faq/moonlight-peaks-how-to-go-on-dates', '/ja/faq/moonlight-peaks-tool-upgrade-materials', '/ja/faq/moonlight-peaks-cant-interact-indoors', '/ja/faq/moonlight-peaks-exe-deleted-antivirus', '/ja/faq/is-there-combat-in-moonlight-peaks', '/ja/faq/do-you-farm-at-night', '/ja/faq/how-does-magic-work-in-moonlight-peaks', '/ja/faq/can-you-shapeshift-in-moonlight-peaks', '/ja/faq/what-is-nokturna', '/ja/faq/what-pets-and-livestock-are-there', '/ja/faq/can-you-get-married-in-moonlight-peaks', '/ja/faq/can-you-have-children-in-moonlight-peaks', '/ja/faq/best-general-gifts-in-moonlight-peaks', '/ja/faq/how-many-romance-options-are-there', '/ja/faq/is-dating-gender-locked-in-moonlight-peaks', '/ja/faq/can-you-romance-a-werewolf', '/ja/faq/can-you-date-multiple-characters', '/ja/faq/who-is-saga', '/ja/faq/who-is-luna', '/ja/faq/who-is-orlock', '/ja/faq/who-is-count-dracula', '/ja/faq/is-moonlight-peaks-worth-it', '/ja/faq/is-moonlight-peaks-free', '/ja/faq/is-moonlight-peaks-open-world', '/ja/faq/is-moonlight-peaks-cozy', '/ja/faq/how-long-is-moonlight-peaks', '/ja/faq/is-moonlight-peaks-on-game-pass', '/ja/faq/can-you-play-moonlight-peaks-offline', '/ja/faq/is-moonlight-peaks-coming-to-mobile', '/ja/faq/does-moonlight-peaks-have-co-op', '/ja/faq/what-age-rating-is-moonlight-peaks', '/ja/faq/how-do-you-make-money-in-moonlight-peaks', '/ja/faq/can-you-sell-crops-in-moonlight-peaks', '/ja/faq/is-there-a-shop-in-moonlight-peaks', '/ja/faq/how-to-get-dark-wood-in-moonlight-peaks', '/ja/faq/how-does-the-museum-work-in-moonlight-peaks', '/ja/faq/does-moonlight-peaks-have-accessibility-options', '/ja/faq/can-you-romance-death-in-moonlight-peaks', '/ja/faq/is-count-dracula-romanceable', '/ja/faq/is-logan-romanceable-in-moonlight-peaks', '/ja/faq/can-you-divorce-in-moonlight-peaks', '/ja/faq/is-there-a-wedding-ceremony-in-moonlight-peaks', '/ja/faq/do-families-disapprove-of-cross-family-romance', '/ja/faq/is-moonlight-peaks-scary', '/ja/faq/is-moonlight-peaks-based-on-a-book-or-show', '/ja/faq/does-moonlight-peaks-have-a-tutorial', '/ja/faq/does-moonlight-peaks-have-a-story', '/ja/faq/does-moonlight-peaks-support-a-controller', '/ja/faq/is-moonlight-peaks-difficult', '/ja/faq/does-moonlight-peaks-have-voice-acting', '/ja/faq/is-moonlight-peaks-turn-based-or-real-time', '/ja/faq/does-moonlight-peaks-have-achievements', '/ja/faq/is-moonlight-peaks-family-friendly', '/ja/faq/how-to-get-married-in-moonlight-peaks', '/ja/faq/can-you-date-multiple-people-moonlight-peaks', '/ja/faq/moonlight-peaks-step-parent-children', '/ja/faq/how-to-turn-into-a-bat-hellkitten', '/ja/faq/is-there-fast-travel-in-moonlight-peaks', '/ja/faq/how-to-find-quests-heart-events', '/ja/items/tools', '/ja/items/fertilizer', '/ja/items/clothing', '/ja/items/fish', '/ja/items/cooking', '/ja/items/crafting', '/ja/items/artifacts', '/ja/items/livestock', '/ja/items/potions', '/ja/items/mineables', '/ja/items/decorations', '/zh', '/zh/beginner-guide', '/zh/release-date', '/zh/faq', '/zh/characters', '/zh/farming', '/zh/magic', '/zh/platforms', '/zh/romance', '/zh/items', '/zh/locations', '/zh/families', '/zh/activities', '/zh/demo', '/zh/cheats', '/zh/character-creator', '/zh/shapeshifting', '/zh/languages', '/zh/guides', '/zh/tools', '/zh/about', '/zh-hant', '/zh-hant/beginner-guide', '/zh-hant/release-date', '/zh-hant/faq', '/zh-hant/characters', '/zh-hant/farming', '/zh-hant/magic', '/zh-hant/platforms', '/zh-hant/romance', '/zh-hant/items', '/zh-hant/locations', '/zh-hant/families', '/zh-hant/activities', '/zh-hant/demo', '/zh-hant/cheats', '/zh-hant/character-creator', '/zh-hant/shapeshifting', '/zh-hant/languages', '/zh-hant/guides', '/zh-hant/tools', '/zh-hant/about', '/de', '/de/beginner-guide', '/de/characters', '/de/romance', '/de/platforms', '/de/release-date', '/de/demo', '/de/magic', '/de/locations', '/de/locations/mines', '/de/known-issues', '/de/quests/a-bridge-too-far', '/de/faq', '/de/faq/when-does-moonlight-peaks-release', '/de/faq/how-much-does-moonlight-peaks-cost', '/de/faq/what-platforms-is-moonlight-peaks-on', '/de/faq/is-moonlight-peaks-on-ps5-or-xbox', '/de/faq/is-there-a-moonlight-peaks-demo', '/de/faq/does-demo-progress-carry-over', '/de/faq/what-is-moonlight-peaks-about', '/de/faq/who-makes-moonlight-peaks', '/de/faq/is-moonlight-peaks-multiplayer', '/de/faq/moonlight-peaks-reddit-discord-community', '/de/faq/how-to-change-portrait-style', '/de/faq/moonlight-peaks-age-rating', '/de/faq/moonlight-peaks-crashing-freezing', '/de/faq/moonlight-peaks-controller-not-working', '/de/faq/moonlight-peaks-crops-wither-season-change', '/de/faq/moonlight-peaks-mana-stamina-balance', '/de/faq/moonlight-peaks-night-length-cycle', '/de/faq/moonlight-peaks-how-to-save', '/de/faq/moonlight-peaks-starting-mana-energy', '/de/faq/moonlight-peaks-mini-map', '/de/faq/moonlight-peaks-well-price', '/de/faq/moonlight-peaks-best-universal-gifts', '/de/faq/moonlight-peaks-how-to-get-copper', '/de/faq/moonlight-peaks-how-to-go-on-dates', '/de/faq/moonlight-peaks-tool-upgrade-materials', '/de/faq/moonlight-peaks-cant-interact-indoors', '/de/faq/moonlight-peaks-exe-deleted-antivirus', '/de/faq/is-there-combat-in-moonlight-peaks', '/de/faq/do-you-farm-at-night', '/de/faq/how-does-magic-work-in-moonlight-peaks', '/de/faq/can-you-shapeshift-in-moonlight-peaks', '/de/faq/what-is-nokturna', '/de/faq/what-pets-and-livestock-are-there', '/de/faq/can-you-get-married-in-moonlight-peaks', '/de/faq/can-you-have-children-in-moonlight-peaks', '/de/faq/best-general-gifts-in-moonlight-peaks', '/de/faq/how-many-romance-options-are-there', '/de/faq/is-dating-gender-locked-in-moonlight-peaks', '/de/faq/can-you-romance-a-werewolf', '/de/faq/can-you-date-multiple-characters', '/de/faq/who-is-saga', '/de/faq/who-is-luna', '/de/faq/who-is-orlock', '/de/faq/who-is-count-dracula', '/de/faq/is-moonlight-peaks-worth-it', '/de/faq/is-moonlight-peaks-free', '/de/faq/is-moonlight-peaks-open-world', '/de/faq/is-moonlight-peaks-cozy', '/de/faq/how-long-is-moonlight-peaks', '/de/faq/is-moonlight-peaks-on-game-pass', '/de/faq/can-you-play-moonlight-peaks-offline', '/de/faq/is-moonlight-peaks-coming-to-mobile', '/de/faq/does-moonlight-peaks-have-co-op', '/de/faq/what-age-rating-is-moonlight-peaks', '/de/faq/how-do-you-make-money-in-moonlight-peaks', '/de/faq/can-you-sell-crops-in-moonlight-peaks', '/de/faq/is-there-a-shop-in-moonlight-peaks', '/de/faq/how-to-get-dark-wood-in-moonlight-peaks', '/de/faq/how-does-the-museum-work-in-moonlight-peaks', '/de/faq/does-moonlight-peaks-have-accessibility-options', '/de/faq/can-you-romance-death-in-moonlight-peaks', '/de/faq/is-count-dracula-romanceable', '/de/faq/is-logan-romanceable-in-moonlight-peaks', '/de/faq/can-you-divorce-in-moonlight-peaks', '/de/faq/is-there-a-wedding-ceremony-in-moonlight-peaks', '/de/faq/do-families-disapprove-of-cross-family-romance', '/de/faq/is-moonlight-peaks-scary', '/de/faq/is-moonlight-peaks-based-on-a-book-or-show', '/de/faq/does-moonlight-peaks-have-a-tutorial', '/de/faq/does-moonlight-peaks-have-a-story', '/de/faq/does-moonlight-peaks-support-a-controller', '/de/faq/is-moonlight-peaks-difficult', '/de/faq/does-moonlight-peaks-have-voice-acting', '/de/faq/is-moonlight-peaks-turn-based-or-real-time', '/de/faq/does-moonlight-peaks-have-achievements', '/de/faq/is-moonlight-peaks-family-friendly', '/de/faq/how-to-get-married-in-moonlight-peaks', '/de/faq/can-you-date-multiple-people-moonlight-peaks', '/de/faq/moonlight-peaks-step-parent-children', '/de/faq/how-to-turn-into-a-bat-hellkitten', '/de/faq/is-there-fast-travel-in-moonlight-peaks', '/de/faq/how-to-find-quests-heart-events', '/de/items', '/de/items/tools', '/de/items/fertilizer', '/de/items/clothing', '/de/items/fish', '/de/items/cooking', '/de/items/crafting', '/de/items/artifacts', '/de/items/livestock', '/de/items/potions', '/de/items/mineables', '/de/items/decorations', '/de/farming', '/de/farm', '/de/farm/crops', '/de/farm/house', '/de/farm/barn', '/de/farm/greenhouse', '/de/farm/animals', '/de/farm/farm-helpers', '/de/farm/crops/blood-grapes', '/de/farm/crops/rice', '/de/farm/crops/drikker', '/de/farm/crops/gobbler', '/de/farm/crops/hold-me-close', '/de/farm/crops/mandrake', '/de/farm/crops/weeping-wicca', '/de/farm/crops/instant-growth-mushrooms', '/de/collection', '/de/collection/fish', '/de/collection/jobs', '/de/collection/critters', '/de/collection/vampsters', '/de/collection/soul-blobs', '/de/map', '/de/activities', '/de/families', '/de/character-creator', '/de/shapeshifting', '/de/characters/saga', '/de/characters/luna', '/de/characters/orlock', '/de/characters/brook', '/de/characters/the-warlock', '/de/characters/mina', '/de/characters/sabrina', '/de/characters/noel', '/de/characters/fiona', '/de/characters/count-dracula', '/de/characters/saga/gifts', '/de/characters/luna/gifts', '/de/characters/orlock/gifts', '/de/characters/sabrina/gifts', '/de/characters/noel/gifts', '/de/characters/fiona/gifts'];
const translatedCharIds = ['count-dracula', 'saga', 'luna', 'orlock', 'brook', 'the-warlock'];
const jaOnlyCharIds = ['mina', 'sabrina', 'noel', 'fiona'];
const deOnlyCharIds = ['mina', 'sabrina', 'noel', 'fiona'];
const jaGiftCharIds = ['saga', 'luna', 'orlock', 'sabrina', 'noel', 'fiona'];
const translatedCharPaths = [
  ...['es', 'ja', 'zh', 'zh-hant', 'de'].flatMap((l) => translatedCharIds.map((id) => `/${l}/characters/${id}`)),
  ...jaOnlyCharIds.map((id) => `/ja/characters/${id}`),
  ...deOnlyCharIds.map((id) => `/de/characters/${id}`),
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
    ...collectionDetailPages.map((p) => ({ path: `/collection/${p.collection}/${p.slug}`, images: p.icon.startsWith('/images/') ? [p.icon] : [] })),
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
