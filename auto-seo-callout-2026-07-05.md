# Moonlight Peaks Auto SEO Callout - 2026-07-05

## Status
- Programmatic SEO switch: ON (`SEO_PROGRAM_ENABLED = true` in `src/data/seoGraph.ts`).
- Publication policy: conservative. Only `trustedGenerated` pages are eligible.
- Published pages must pass the quality gate before they appear in routes or sitemap.

## Today's target
- Daily baseline target: 30 URLs/day.
- Start date in code: 2026-07-02.
- 2026-07-05 target: 120 cumulative programmatic URLs.
- This is a target, not a command to publish thin pages.

## Safety rules currently enforced
- At least 3 content sections.
- At least 2 FAQs.
- At least 3 related internal links.
- At least 900 text characters.
- At least 2 public non-competitor sources.
- No draft markers such as TODO, TBD, lorem, dummy text, or sample text.
- Sources containing `wiki.gg` or `moonlightpeaks.wiki` are blocked from the programmatic SEO quality gate.

## Today's callout
Keep the auto SEO layer live, but do not force-create pages from placeholder-only data. The current deployment configuration publishes only pages that already have enough context, safe sources, and useful internal links.

The safest next expansion after launch is to add real data to existing source files first:
- verified gifts and schedules;
- official or neutral platform notes;
- real item names, effects, prices, and sources;
- confirmed map locations, shops, quests, and activity data.

## How to check generated URLs after deployment
Open:
https://moonlightpeakswiki.com/seo-status.json

Key fields:
- `programmaticSeoEnabled`: should be `true`.
- `generatedUrlCount`: actual generated programmatic SEO URL count.
- `stats.minimumTarget`: current cumulative target.
- `stats.meetsMinimumTarget`: whether generated URLs meet the target.
- `generatedUrls`: exact list of generated URLs with source labels.

## Deployment note
This config package does not add fake data. It keeps the safe auto SEO engine active, makes generated URLs available through `[...slug].astro`, includes them in `sitemap.xml`, and protects technical JSON endpoints with `noindex`.
