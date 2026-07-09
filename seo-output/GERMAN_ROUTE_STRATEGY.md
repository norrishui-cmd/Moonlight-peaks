# German Route Strategy

**Decision: shared slugs, matching the existing es/ja/zh pattern exactly.**

`/de/romance`, `/de/platforms`, `/de/locations/mines`, etc. — the English slug is kept as-is
under the `/de/` prefix, not translated into German words (e.g. not `/de/romanze`).

## Why

1. **Consistency with existing architecture.** es/ja/zh already use this pattern universally
   (`/es/romance`, `/ja/romance`, `/zh/romance`) — introducing translated slugs for German alone
   would make it the only locale with a different routing convention, complicating the shared
   hreflang/canonical/sitemap logic in `Base.astro` and `sitemap.xml.ts` for no real benefit.
2. **Maintainability.** A single `barePath` stripping regex (`/^\/(es|ja|zh|de)(\/|$)/`) works
   for all four locales because the path *after* the prefix is identical across locales. Turning
   German slugs into translated words would require a per-locale slug-mapping table, adding real
   complexity to every hreflang/canonical/switcher computation for a cosmetic gain.
3. **Proper nouns already coexist fine with German prose.** Since the site already keeps
   character names, quest names, and most game-specific terms in English throughout the German
   page content itself, having the *URL* also stay in English (mixed with German prose) isn't an
   inconsistency — it matches how German gaming sites commonly reference English-titled games and
   features.

No route strategy was mixed — every one of the 15 German MVP pages follows this same shared-slug
pattern with zero exceptions.
