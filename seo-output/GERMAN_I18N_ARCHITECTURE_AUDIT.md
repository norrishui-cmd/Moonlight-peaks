# German i18n Architecture Audit

## 1. Current locale implementation

- `astro.config.mjs`: `i18n.locales = ['en', 'es', 'ja', 'zh']`, `defaultLocale: 'en'`,
  `prefixDefaultLocale: false` (English stays at root, no `/en/` prefix).
- Each non-English locale is a **self-contained set of `.astro` page files** under
  `src/pages/{locale}/` (e.g. `src/pages/es/romance.astro`) — full pages with translated text
  written directly in the file, not a data-driven translation dictionary per page. Only two areas
  use a shared dictionary: site-chrome UI strings (`src/i18n/nav.ts`) and a small character-bio
  translation set (`src/i18n/characters-data.ts`, currently 6 characters: count-dracula, saga,
  luna, orlock, brook, the-warlock).
- Each locale currently has **21 translated pages** (`about, activities, beginner-guide,
  character-creator, characters (+ 6 char slugs), cheats, demo, families, faq, farming, guides,
  index, items, languages, locations, magic, platforms, release-date, romance, shapeshifting,
  tools`).

## 2. Existing reusable patterns

- **hreflang**: generated automatically in `src/layouts/Base.astro` from the page's own `path`
  prop — strips any `/es|ja|zh/` prefix to get the "bare" path, then rebuilds an alternate URL per
  locale. Every page gets this for free; no per-page hreflang code needed.
- **Canonical**: `src/layouts/Base.astro` builds `canonical = new URL(path, SITE.url).href` from
  the same `path` prop each page already passes in — self-canonicalizing by construction, as long
  as each `/de/...` page passes its own `/de/...` path (not the English one).
- **Language switcher**: `src/components/LanguageSwitcher.astro` — a `translatedPaths: Set<string>`
  of "bare" paths that have a translation, plus a separate check for translated character slugs
  (`Object.keys(charTranslations.es)`). If the current page isn't in that set, the switcher sends
  the visitor to that locale's homepage instead of a broken link — exactly the safe fallback
  behavior Phase 9 asks for, already built.
- **Sitemap**: `src/pages/sitemap.xml.ts` has a hardcoded `staticPaths` array (includes `/es/...`,
  `/ja/...`, `/zh/...` entries individually) and a `translatedCharPaths` helper that expands a
  shared `translatedCharIds` list across `['es','ja','zh']`.

## 3. Known inconsistencies found (relevant to adding German)

- **`translatedPaths` in `LanguageSwitcher.astro` is a single Set shared across es/ja/zh** — it
  assumes all three locales translate exactly the same page set (currently true: all three have
  21 pages). German's MVP will deliberately have far fewer pages (12-20 vs 21), so this **must
  become locale-specific** (`Record<Locale, Set<string>>`) or German would show live-looking
  links to `/de/...` pages that don't exist. Fixed in Phase 6 below.
- **`translatedCharIds` in `sitemap.xml.ts`** is similarly a single shared list currently
  applied to `['es','ja','zh']`. German gets its own, smaller list (in this MVP: just Saga, the
  one character with genuinely rich, confirmed content).
- No other inconsistencies found — the hreflang and canonical mechanisms are already
  locale-agnostic and require only adding `'de'` to the locale list they iterate over.

## 4. Best architecture for `/de/`

**Extend the existing system exactly as built** — no new architecture needed:
1. Add `'de'` to the shared `Locale` type (`src/i18n/nav.ts`) and its `uiStrings` dictionary.
2. Add `'de'` to the `hreflangs` array in `Base.astro` (one line).
3. Convert `LanguageSwitcher.astro`'s `translatedPaths` to a per-locale map, with `de` getting its
   own (smaller) set.
4. Add `/de/...` entries to `sitemap.xml.ts`'s `staticPaths` and extend `translatedCharIds`
   handling to support a per-locale character list (German: just `saga`).
5. Create `src/pages/de/*.astro` files following the exact same one-file-per-page pattern as
   `es/ja/zh` — reusing shared data arrays (`characters`, `locations`, etc.) exactly like those
   locales do, with German prose written directly in each file.

## 5. Files reused as-is

`src/layouts/Base.astro` (hreflang/canonical logic), `src/data/*` shared content arrays
(`characters`, `locations`, `crops`, etc. — same source of truth every locale already reads from),
`astro.config.mjs` (only needs `'de'` added to the `locales` array).

## 6. Files that should NOT be duplicated

No German-only image library, no German-only content data model, no separate German quality
gate, no German-only layout or component — all of this MVP is genuinely additive within the
existing structure.
