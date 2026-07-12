// src/i18n/translated-paths.ts
// Single source of truth for "does this bare path have a real translation in locale X" —
// used by Base.astro (to decide which hreflang alternates to emit) and LanguageSwitcher.astro
// (to decide whether to link to a real translated page or fall back to that locale's homepage).
// Previously this was a single Set shared across es/ja/zh (safe only because all three happened
// to translate exactly the same 21 pages); German's smaller MVP page set requires this to be
// genuinely per-locale, so a new locale can never falsely claim coverage it doesn't have.
import type { Locale } from './nav';
import { charTranslations } from './characters-data';

const sharedEsJaZhPaths = [
  '/', '/beginner-guide', '/release-date', '/faq', '/characters', '/farming', '/magic',
  '/platforms', '/romance', '/environment', '/items', '/demo', '/cheats', '/character-creator',
  '/shapeshifting', '/languages', '/guides', '/tools', '/about', '/families', '/locations',
  '/activities',
];

// Pages deepened for Japanese specifically, beyond the shared es/ja/zh baseline above (Phase 1
// of Japanese content deepening — see JAPANESE_DEEPENING_PHASE1.md).
const jaOnlyPaths = [
  '/locations/mines', '/quests/a-bridge-too-far', '/known-issues', '/quests',
  '/faq/when-does-moonlight-peaks-release', '/faq/how-much-does-moonlight-peaks-cost', '/faq/what-platforms-is-moonlight-peaks-on', '/faq/is-moonlight-peaks-on-ps5-or-xbox', '/faq/is-there-a-moonlight-peaks-demo', '/faq/does-demo-progress-carry-over', '/faq/what-is-moonlight-peaks-about', '/faq/who-makes-moonlight-peaks', '/faq/is-moonlight-peaks-multiplayer', '/faq/moonlight-peaks-reddit-discord-community', '/faq/how-to-change-portrait-style', '/faq/moonlight-peaks-age-rating', '/faq/moonlight-peaks-crashing-freezing', '/faq/moonlight-peaks-controller-not-working', '/faq/moonlight-peaks-crops-wither-season-change', '/faq/moonlight-peaks-mana-stamina-balance', '/faq/moonlight-peaks-night-length-cycle', '/faq/moonlight-peaks-how-to-save', '/faq/moonlight-peaks-starting-mana-energy', '/faq/moonlight-peaks-mini-map', '/faq/moonlight-peaks-well-price', '/faq/moonlight-peaks-best-universal-gifts', '/faq/moonlight-peaks-how-to-get-copper', '/faq/moonlight-peaks-how-to-go-on-dates', '/faq/moonlight-peaks-tool-upgrade-materials', '/faq/moonlight-peaks-cant-interact-indoors', '/faq/moonlight-peaks-exe-deleted-antivirus', '/faq/is-there-combat-in-moonlight-peaks', '/faq/do-you-farm-at-night', '/faq/how-does-magic-work-in-moonlight-peaks', '/faq/can-you-shapeshift-in-moonlight-peaks', '/faq/what-is-nokturna', '/faq/what-pets-and-livestock-are-there', '/faq/can-you-get-married-in-moonlight-peaks', '/faq/can-you-have-children-in-moonlight-peaks', '/faq/best-general-gifts-in-moonlight-peaks', '/faq/how-many-romance-options-are-there', '/faq/is-dating-gender-locked-in-moonlight-peaks', '/faq/can-you-romance-a-werewolf', '/faq/can-you-date-multiple-characters', '/faq/who-is-saga', '/faq/who-is-luna', '/faq/who-is-orlock', '/faq/who-is-count-dracula', '/faq/is-moonlight-peaks-worth-it', '/faq/is-moonlight-peaks-free', '/faq/is-moonlight-peaks-open-world', '/faq/is-moonlight-peaks-cozy', '/faq/how-long-is-moonlight-peaks', '/faq/is-moonlight-peaks-on-game-pass', '/faq/can-you-play-moonlight-peaks-offline', '/faq/is-moonlight-peaks-coming-to-mobile', '/faq/does-moonlight-peaks-have-co-op', '/faq/what-age-rating-is-moonlight-peaks', '/faq/how-do-you-make-money-in-moonlight-peaks', '/faq/can-you-sell-crops-in-moonlight-peaks', '/faq/is-there-a-shop-in-moonlight-peaks', '/faq/how-to-get-dark-wood-in-moonlight-peaks', '/faq/how-does-the-museum-work-in-moonlight-peaks', '/faq/does-moonlight-peaks-have-accessibility-options', '/faq/can-you-romance-death-in-moonlight-peaks', '/faq/is-count-dracula-romanceable', '/faq/is-logan-romanceable-in-moonlight-peaks', '/faq/can-you-divorce-in-moonlight-peaks', '/faq/is-there-a-wedding-ceremony-in-moonlight-peaks', '/faq/do-families-disapprove-of-cross-family-romance', '/faq/is-moonlight-peaks-scary', '/faq/is-moonlight-peaks-based-on-a-book-or-show', '/faq/does-moonlight-peaks-have-a-tutorial', '/faq/does-moonlight-peaks-have-a-story', '/faq/does-moonlight-peaks-support-a-controller', '/faq/is-moonlight-peaks-difficult', '/faq/does-moonlight-peaks-have-voice-acting', '/faq/is-moonlight-peaks-turn-based-or-real-time', '/faq/does-moonlight-peaks-have-achievements', '/faq/is-moonlight-peaks-family-friendly', '/faq/how-to-get-married-in-moonlight-peaks', '/faq/can-you-date-multiple-people-moonlight-peaks', '/faq/moonlight-peaks-step-parent-children', '/faq/how-to-turn-into-a-bat-hellkitten', '/faq/is-there-fast-travel-in-moonlight-peaks', '/faq/how-to-find-quests-heart-events',
  '/characters/saga/gifts', '/characters/luna/gifts', '/characters/orlock/gifts',
  '/characters/sabrina/gifts', '/characters/noel/gifts', '/characters/fiona/gifts',
  '/items/tools', '/items/fertilizer', '/items/clothing', '/items/fish',
  '/items/cooking', '/items/crafting',
  '/items/artifacts', '/items/livestock', '/items/potions',
  '/items/mineables', '/items/decorations',
  '/farm', '/farm/crops', '/farm/house', '/farm/barn', '/farm/greenhouse', '/farm/animals',
  '/farm/farm-helpers', '/farm/crops/blood-grapes', '/farm/crops/rice', '/farm/crops/drikker',
  '/farm/crops/gobbler', '/farm/crops/hold-me-close', '/farm/crops/mandrake',
  '/farm/crops/weeping-wicca', '/farm/crops/instant-growth-mushrooms',
  '/collections', '/collections/fish', '/collections/jobs', '/collections/critters',
  '/collections/vampsters', '/collections/soul-blobs', '/map', '/quests', '/quests/story', '/quests/story/register-at-town-hall', '/quests/story/meet-the-townsfolk', '/quests/story/a-roof-over-your-head', '/quests/story/darkness-over-moonlight-peaks', '/quests/story/a-bridge-too-far', '/quests/story/tension-in-the-crest-garden', '/quests/story/the-quest-for-mana', '/quests/story/building-a-mana-extractor', '/quests/story/the-dinner-party', '/quests/story/mend-it-with-magic', '/quests/story/town-hall-drama', '/quests/story/the-plastic-chairs', '/quests/story/a-family-reunion', '/quests/story/the-mermaids-wish', '/quests/story/the-rehearsal-dinner', '/quests/story/kims-invite', '/quests/story/brides-attendant-duty', '/quests/story/unfinished-business', '/quests/side', '/quests/side/noels-fishing-contest', '/quests/side/fix-the-roof', '/quests/side/the-magic-of-crops', '/quests/side/the-need-for-herbs', '/quests/side/the-familys-heirloom-artifact', '/quests/side/vampster-collection-quest', '/quests/side/soul-blobs-favor', '/quests/side/albertus-job-board',
];

const dePaths = [
  '/', '/beginner-guide', '/characters', '/romance', '/platforms', '/release-date', '/demo',
  '/magic', '/locations', '/locations/mines', '/known-issues', '/quests/a-bridge-too-far',
  '/faq', '/faq/when-does-moonlight-peaks-release', '/faq/how-much-does-moonlight-peaks-cost', '/faq/what-platforms-is-moonlight-peaks-on', '/faq/is-moonlight-peaks-on-ps5-or-xbox', '/faq/is-there-a-moonlight-peaks-demo', '/faq/does-demo-progress-carry-over', '/faq/what-is-moonlight-peaks-about', '/faq/who-makes-moonlight-peaks', '/faq/is-moonlight-peaks-multiplayer', '/faq/moonlight-peaks-reddit-discord-community', '/faq/how-to-change-portrait-style', '/faq/moonlight-peaks-age-rating', '/faq/moonlight-peaks-crashing-freezing', '/faq/moonlight-peaks-controller-not-working', '/faq/moonlight-peaks-crops-wither-season-change', '/faq/moonlight-peaks-mana-stamina-balance', '/faq/moonlight-peaks-night-length-cycle', '/faq/moonlight-peaks-how-to-save', '/faq/moonlight-peaks-starting-mana-energy', '/faq/moonlight-peaks-mini-map', '/faq/moonlight-peaks-well-price', '/faq/moonlight-peaks-best-universal-gifts', '/faq/moonlight-peaks-how-to-get-copper', '/faq/moonlight-peaks-how-to-go-on-dates', '/faq/moonlight-peaks-tool-upgrade-materials', '/faq/moonlight-peaks-cant-interact-indoors', '/faq/moonlight-peaks-exe-deleted-antivirus', '/faq/is-there-combat-in-moonlight-peaks', '/faq/do-you-farm-at-night', '/faq/how-does-magic-work-in-moonlight-peaks', '/faq/can-you-shapeshift-in-moonlight-peaks', '/faq/what-is-nokturna', '/faq/what-pets-and-livestock-are-there', '/faq/can-you-get-married-in-moonlight-peaks', '/faq/can-you-have-children-in-moonlight-peaks', '/faq/best-general-gifts-in-moonlight-peaks', '/faq/how-many-romance-options-are-there', '/faq/is-dating-gender-locked-in-moonlight-peaks', '/faq/can-you-romance-a-werewolf', '/faq/can-you-date-multiple-characters', '/faq/who-is-saga', '/faq/who-is-luna', '/faq/who-is-orlock', '/faq/who-is-count-dracula', '/faq/is-moonlight-peaks-worth-it', '/faq/is-moonlight-peaks-free', '/faq/is-moonlight-peaks-open-world', '/faq/is-moonlight-peaks-cozy', '/faq/how-long-is-moonlight-peaks', '/faq/is-moonlight-peaks-on-game-pass', '/faq/can-you-play-moonlight-peaks-offline', '/faq/is-moonlight-peaks-coming-to-mobile', '/faq/does-moonlight-peaks-have-co-op', '/faq/what-age-rating-is-moonlight-peaks', '/faq/how-do-you-make-money-in-moonlight-peaks', '/faq/can-you-sell-crops-in-moonlight-peaks', '/faq/is-there-a-shop-in-moonlight-peaks', '/faq/how-to-get-dark-wood-in-moonlight-peaks', '/faq/how-does-the-museum-work-in-moonlight-peaks', '/faq/does-moonlight-peaks-have-accessibility-options', '/faq/can-you-romance-death-in-moonlight-peaks', '/faq/is-count-dracula-romanceable', '/faq/is-logan-romanceable-in-moonlight-peaks', '/faq/can-you-divorce-in-moonlight-peaks', '/faq/is-there-a-wedding-ceremony-in-moonlight-peaks', '/faq/do-families-disapprove-of-cross-family-romance', '/faq/is-moonlight-peaks-scary', '/faq/is-moonlight-peaks-based-on-a-book-or-show', '/faq/does-moonlight-peaks-have-a-tutorial', '/faq/does-moonlight-peaks-have-a-story', '/faq/does-moonlight-peaks-support-a-controller', '/faq/is-moonlight-peaks-difficult', '/faq/does-moonlight-peaks-have-voice-acting', '/faq/is-moonlight-peaks-turn-based-or-real-time', '/faq/does-moonlight-peaks-have-achievements', '/faq/is-moonlight-peaks-family-friendly', '/faq/how-to-get-married-in-moonlight-peaks', '/faq/can-you-date-multiple-people-moonlight-peaks', '/faq/moonlight-peaks-step-parent-children', '/faq/how-to-turn-into-a-bat-hellkitten', '/faq/is-there-fast-travel-in-moonlight-peaks', '/faq/how-to-find-quests-heart-events',
  '/items', '/items/tools', '/items/fertilizer', '/items/clothing', '/items/fish', '/items/cooking',
  '/items/crafting', '/items/artifacts', '/items/livestock', '/items/potions', '/items/mineables',
  '/items/decorations', '/farming', '/activities', '/families', '/character-creator', '/shapeshifting',
  '/characters/saga/gifts', '/characters/luna/gifts', '/characters/orlock/gifts',
  '/characters/sabrina/gifts', '/characters/noel/gifts', '/characters/fiona/gifts',
  '/farm', '/farm/crops', '/farm/house', '/farm/barn', '/farm/greenhouse', '/farm/animals',
  '/farm/farm-helpers', '/farm/crops/blood-grapes', '/farm/crops/rice', '/farm/crops/drikker',
  '/farm/crops/gobbler', '/farm/crops/hold-me-close', '/farm/crops/mandrake',
  '/farm/crops/weeping-wicca', '/farm/crops/instant-growth-mushrooms',
  '/collections', '/collections/fish', '/collections/jobs', '/collections/critters',
  '/collections/vampsters', '/collections/soul-blobs', '/map', '/quests', '/quests/story', '/quests/story/register-at-town-hall', '/quests/story/meet-the-townsfolk', '/quests/story/a-roof-over-your-head', '/quests/story/darkness-over-moonlight-peaks', '/quests/story/a-bridge-too-far', '/quests/story/tension-in-the-crest-garden', '/quests/story/the-quest-for-mana', '/quests/story/building-a-mana-extractor', '/quests/story/the-dinner-party', '/quests/story/mend-it-with-magic', '/quests/story/town-hall-drama', '/quests/story/the-plastic-chairs', '/quests/story/a-family-reunion', '/quests/story/the-mermaids-wish', '/quests/story/the-rehearsal-dinner', '/quests/story/kims-invite', '/quests/story/brides-attendant-duty', '/quests/story/unfinished-business', '/quests/side', '/quests/side/noels-fishing-contest', '/quests/side/fix-the-roof', '/quests/side/the-magic-of-crops', '/quests/side/the-need-for-herbs', '/quests/side/the-familys-heirloom-artifact', '/quests/side/vampster-collection-quest', '/quests/side/soul-blobs-favor', '/quests/side/albertus-job-board',
];

export const translatedPathsByLocale: Record<Locale, Set<string>> = {
  en: new Set(), // English is the source; not meaningful to check "is English translated".
  es: new Set(sharedEsJaZhPaths),
  ja: new Set([...sharedEsJaZhPaths, ...jaOnlyPaths]),
  zh: new Set(sharedEsJaZhPaths),
  'zh-hant': new Set(sharedEsJaZhPaths), // mirrors the same 21 pages as zh, converted via OpenCC
  de: new Set(dePaths),
};

// Character slugs translated per locale (used for /characters/{slug} pages specifically).
export const translatedCharSlugsByLocale: Record<Locale, Set<string>> = {
  en: new Set(),
  es: new Set(Object.keys(charTranslations.es)),
  ja: new Set(Object.keys(charTranslations.ja)),
  zh: new Set(Object.keys(charTranslations.zh)),
  'zh-hant': new Set(Object.keys(charTranslations['zh-hant'] || {})),
  de: new Set(Object.keys(charTranslations.de || {})),
};

export function isPathTranslated(locale: Locale, barePath: string): boolean {
  if (translatedPathsByLocale[locale].has(barePath)) return true;
  const charMatch = barePath.match(/^\/characters\/([a-z0-9-]+)$/);
  if (charMatch && translatedCharSlugsByLocale[locale].has(charMatch[1])) return true;
  return false;
}
