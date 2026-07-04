# Moonlight Peaks Auto SEO Callout - 2026-07-04

## Status
- Programmatic SEO switch: ON (`SEO_PROGRAM_ENABLED = true` in `src/data/seoGraph.ts`).
- Publication policy: only `trustedGenerated` pages that pass the quality gate are published.
- Safety gate requires: 3+ sections, 2+ FAQs, 3+ related links, 900+ text characters, 2+ public non-competitor sources, and no draft markers.

## Today's target
- Daily baseline target: 30 URLs/day.
- Start date in code: 2026-07-02.
- 2026-07-04 target: 90 cumulative programmatic URLs.

## Today's callout
Do not force-create thin pages just to hit the numeric target. The current code is intentionally conservative: pages are published only when they have useful content, real source support, and enough internal context.

## How to check the real generated count after deployment
Open:
https://moonlightpeakswiki.com/seo-status.json

Key fields:
- `programmaticSeoEnabled`: should be `true`.
- `generatedUrlCount`: actual auto SEO URL count currently deployed.
- `stats.minimumTarget`: today's cumulative target.
- `stats.meetsMinimumTarget`: whether the current generated count meets the target.
- `generatedUrls`: exact list of generated programmatic SEO pages, with source labels.

## Vercel note
The included `vercel.json` does not create fake pages or rebuild content automatically. It defines Astro build settings, clean URLs, cache headers, and noindex headers for technical JSON endpoints.

For true daily automatic content generation, Vercel alone is not enough for this static site. You would need a GitHub Action or external scheduled job that edits data files, commits them, and triggers a fresh Vercel deploy.
