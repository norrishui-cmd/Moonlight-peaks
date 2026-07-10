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
const jaOnlyPaths = ['/locations/mines', '/quests/a-bridge-too-far'];

const dePaths = [
  '/', '/beginner-guide', '/characters', '/romance', '/platforms', '/release-date', '/demo',
  '/magic', '/locations', '/locations/mines', '/known-issues', '/quests/a-bridge-too-far',
  '/faq', '/faq/is-moonlight-peaks-on-ps5-or-xbox', '/faq/is-moonlight-peaks-multiplayer',
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
