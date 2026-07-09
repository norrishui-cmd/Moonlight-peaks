# Site Identity Audit

## Correction to the prior round's finding

A previous round's diagnostic stated "no `WebSite` JSON-LD schema exists anywhere in the
codebase." **This was incomplete** — `src/pages/index.astro` (the English homepage) already
contains a full `WebSite` entity, including `alternateName` and a working `SearchAction` pointing
at `/search?q={search_term_string}` (verified: `src/pages/search.astro` genuinely reads the `q`
URL parameter). `src/pages/ja/index.astro` and `src/pages/es/index.astro` also each have their own
locale-specific `WebSite` entities. The real gap, addressed below, is a **naming inconsistency
between that JSON-LD and the visible `<title>` tag on the same homepage** — not an absent schema.

## Variants found

| Variant | File | Context | Keep or change | Reason |
|---|---|---|---|---|
| "Moonlight Peaks Wiki & Guide" | `src/consts.ts` (`SITE.name`/`SITE.brand`) | Canonical constant used sitewide | **Keep** | This is the single source of truth already referenced by most pages via `{SITE.brand}`. |
| "Moonlight Peaks **Guide & Wiki**" | `src/pages/index.astro:73` (`<title>`) | English homepage `<title>` | **Change** | Literal word-order flip from the canonical brand, on the exact same page that also emits `WebSite` JSON-LD with the correct order — a direct, fixable, single-page inconsistency. |
| "Moonlight Peaks Wiki & Guide" | `src/layouts/Base.astro:308` (footer disclaimer) | Hardcoded literal string, not `{SITE.brand}` | **Change** | Currently matches by coincidence, but hardcoding it separately from `SITE.brand` means the two can silently drift apart in the future. Low-risk fix: reference `{SITE.brand}` instead. |
| "Moonlight Peaks Wiki" (short form) | `src/data/previews.ts` — 3 image captions ("Illustrative art · Moonlight Peaks Wiki") | Self-referential photo credit captions | **Keep** | Minor, low-visibility decorative captions; not a title/meta/schema field, low priority to touch. |
| "Moonlight Peaks Wiki (wiki.gg)" | `src/data/previews.ts` — 2 source citations | **Not our site** — this is a citation of the external, unaffiliated `moonlightpeaks.wiki.gg` community wiki used as a datamine source | **Keep, not a brand issue** | Confirmed this refers to a different, real third-party site, not a self-reference. Renaming would be factually wrong. |
| "... \| Moonlight Peaks Wiki" (short form suffix) | `src/data/seoGraph.ts:455,470` — programmatic page title templates | Generated hub/topic page titles | **Change** | Inconsistent with the `"... \| Moonlight Peaks Guide"` suffix used two lines away (see next row) — the two templates should agree with each other, even if neither is required to match the full `SITE.brand` string. |
| "... \| Moonlight Peaks **Guide**" (different short form) | `src/data/seoGraph.ts:614` — character romance-status page title template | Generated character romance-status titles | **Change** | Directly inconsistent with the other two generator templates in the same file, which both use "Moonlight Peaks Wiki." Normalizing all three to the same short suffix removes an internal contradiction. |
| "About the Moonlight Peaks Wiki & Guide" | `src/pages/about.astro` H1/title | About page | **Keep** | Matches canonical brand; "Wiki, Guide & Tools" in the `<title>` is page-specific descriptive text about what the site *contains*, not a competing identity — consistent with the instruction not to ban the word "guide" when it describes content. |
| `alternateName: ['Moonlight Peaks Wiki', 'Moonlight Peaks Guide', 'Moonlight Peaks Fan Wiki']` | `src/pages/index.astro:41` (existing `WebSite` JSON-LD) | Already-declared alternate names | **Keep** | These are genuinely-used short forms found elsewhere in the codebase (not invented for this task) — legitimate alternate names, not a fabricated list. |
| "Moonlight Peaks Wiki & Guide（日本語）" / "(Español)" | `src/pages/ja/index.astro`, `src/pages/es/index.astro` | Locale-specific `WebSite` entities | **Keep** | Correct, locale-qualified naming; no change needed. |

## Summary

Three concrete, low-risk fixes identified (all shared-infrastructure, not page-content changes):
1. Homepage `<title>` word-order fix (`Guide & Wiki` → `Wiki & Guide`).
2. `Base.astro` footer: hardcoded string → `{SITE.brand}` reference.
2. `seoGraph.ts` generator title suffix: normalize all three template locations to the same
   short form ("Moonlight Peaks Wiki").

See `SITE_IDENTITY_CHANGES.md` for exactly what was implemented.
