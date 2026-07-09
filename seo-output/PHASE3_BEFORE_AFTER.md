# Phase 3 Before/After

## Shared infrastructure (site identity + WebSite JSON-LD)

| File | Before | After | Reason |
|---|---|---|---|
| `src/pages/index.astro` (title) | "Moonlight Peaks Guide & Wiki - Launch Hub, Tips & Tools" | "Moonlight Peaks Wiki & Guide - Launch Hub, Tips & Tools" | Matches the page's own existing `WebSite` JSON-LD name, which already said "Wiki & Guide." |
| `src/layouts/Base.astro` (footer) | Hardcoded "Moonlight Peaks Wiki & Guide is an independent..." | `{SITE.brand} is an independent...` | Prevents future drift from the canonical constant. |
| `src/data/seoGraph.ts` (romance-status title template) | `\| Moonlight Peaks Guide` | `\| Moonlight Peaks Wiki` | Normalized to match the other two generator templates in the same file; also fixed a stale "launch verification checklist" phrase in the same string. |
| `WebSite` JSON-LD | **Already existed** (English, `ja`, `es` homepages) — a prior round's diagnostic incorrectly said it was missing | Verified valid, no structural change needed | Corrected the record; only the naming mismatch above needed fixing. |

## Romance cluster (5 pages)

| Route | Change |
|---|---|
| `/romance` | Added contextual links to the marriage FAQ, children FAQ, and Romance Gift Finder tool at the points in the existing step-by-step content where those topics are already discussed. |
| `/previews/romance-and-marriage-what-we-know` | Fixed "before the July 7 launch" stale wording; synced roster/gift/heart-level facts to what's now confirmed elsewhere on the site (23 confirmed options, Heart Level 4/8, Saga's real gifts) instead of "roughly two dozen, not fully revealed." |
| `/faq/can-you-get-married-in-moonlight-peaks` | Expanded thin answer with already-confirmed facts (Heart Level 8, week-long wedding window, spouse moving in) matching the pattern of the high-performing children FAQ. |
| `/tools/romance-planner` | Retitled from "Shortlist & Prep Tracker" to "Shortlist & Progress Tracker" — removed lingering pre-launch "prep" framing. |
| `/tools/romance-gift-finder` | No content change — verified its own related-links were already healthy; protected as a Bucket D winner. |

## Cannibalization fix (1 pair)

| Route | Change |
|---|---|
| `/previews/doomed-dinner-party-and-the-love-demon` | Resolved a previously-open question ("is this a new romanceable character? We don't know yet") using already-confirmed data: the love demon is Llemi, a confirmed romance option. Added a cross-link to the companion romance-angle article. |
| `/previews/romance-drama-dinner-party-and-love-demon` | Corrected a now-superseded guess ("probably a plot device, not a romance option") that turned out to be wrong, kept transparently rather than deleted, added cross-links to the companion article and Llemi's profile. |

## Location intent fixes (2)

| Route | Change |
|---|---|
| `/locations/your-farm` | Replaced a stale "not developer-confirmed" hedge about an internal-only working name ("the Plot") with the actual confirmed fact: players name their own farm during character creation. Added a direct FAQ entry answering "what is the name of your farm" to match the real search intent discovered in GSC data (a naming/inspiration query, not a location-lookup query). |
| `/locations/landmarks` | Converted from a flat paragraph list to titled subsections so Howling Marshes (92 impressions of location-lookup intent) is its own clearly-headed, independently findable section rather than one clause inside a longer sentence. |

## Brand return-visit mechanics (Phase 14)

| File | Change |
|---|---|
| `src/components/News.astro` | Added a real date-descending sort. Found and fixed a genuine out-of-order entry in `news.ts` (a 2026-05-12 item was followed by a 2026-06-23 item — meaning the "Latest news" section could have silently shown a stale set once more items are added, since it only ever took the first 6 array entries with no sort). |
| `src/pages/index.astro` (`dailyPosts`) | Added the same defensive sort. Note: currently harmless in practice, since no `previews.ts` entry uses `category: 'daily'` — the "Daily updates" section is currently dormant (never renders, since `dailyPosts.length > 0` is always false). Not a fake-freshness bug today, but flagged here for visibility. |

## Frozen — no changes

All 11 previously-optimized Top-10 routes retain their exact title, H1, and meta description from
the last round. See `PREVIOUS_TOP10_FREEZE_REPORT.md` for the verification record.
