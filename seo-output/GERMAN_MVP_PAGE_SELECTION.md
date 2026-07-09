# German MVP Page Selection

No Germany-filtered query/page export exists in available inputs (confirmed again this round —
same finding as `GERMANY_DATA_REQUEST.md`). Per Phase 2's fallback, selection uses: (1) known
Germany aggregate performance (188 clicks / 2,794 impressions / 6.73% CTR — strong, broad,
not attributable to specific pages), (2) global 7d/28d English query clusters, (3) current
English route quality (only pages that pass content-completeness and factual-confidence checks
are selected — several candidates from the brief's own example list were **excluded** for exactly
this reason, noted below).

## Selected: 15 pages

| # | English route | German route | Cluster / demand evidence | English quality | Priority | Reason |
|---|---|---|---|---|---|---|
| 1 | `/` | `/de/` | Entry point — required for any locale | High (recently fixed identity) | Must-have | Every locale needs a homepage anchor. |
| 2 | `/beginner-guide` | `/de/beginner-guide` | Largest single English cluster (2,981 impr) | High (recently de-staled + Quick Answer) | High | Universal onboarding value regardless of country. |
| 3 | `/characters` | `/de/characters` | Largest English page overall (5,009 impr, 9.14% CTR) | High | High | Best-performing page on the entire site — highest-confidence content to localize. |
| 4 | `/romance` | `/de/romance` | Romance/dating cluster (~2,160 impr globally) | High (recently link-strengthened) | High | Largest thematic cluster in the whole GSC dataset. |
| 5 | `/platforms` | `/de/platforms` | PS5/Xbox cluster (1,135 impr) | High (recently fixed) | High | One clear primary route for platform-availability intent — see Phase 16 note below. |
| 6 | `/release-date` | `/de/release-date` | PS5/Xbox + timing cluster (2,398 impr) | High (recently fixed) | High | Largest CTR-gap page in the whole dataset; universal demand. |
| 7 | `/demo` | `/de/demo` | Demo cluster (1,382 impr) | High (recently de-staled) | Medium-High | Real, confirmed content; no speculative claims. |
| 8 | `/magic` | `/de/magic` | Real troubleshooting content (wand fix) | High (Community-reported labels intact) | Medium | Deep, factual, well-labeled content — good localization test case. |
| 9 | `/locations` | `/de/locations` | Highest-impression location hub (1,788+ impr) | High (recently fixed) | Medium-High | Large volume, hub page. |
| 10 | `/locations/mines` | `/de/locations/mines` | Cave of Echoes — high real-world player interest (Steam Community) | High (H2-structured, confirmed/reported separated) | Medium | Concrete, structured troubleshooting content. |
| 11 | `/known-issues` | `/de/known-issues` | Universal technical-support demand | High (Confirmed/Player-reported status model) | Medium | Technical problems aren't English-specific; high universal value. |
| 12 | `/quests/a-bridge-too-far` | `/de/quests/a-bridge-too-far` | Deep quest guide, real community-sourced steps | High (labels Confirmed vs Community-reported throughout) | Medium | Best example of a fully-labeled confidence-graded guide. |
| 13 | `/faq/is-moonlight-peaks-on-ps5-or-xbox` | `/de/faq/is-moonlight-peaks-on-ps5-or-xbox` | PS5/Xbox cluster dedicated FAQ (1,373 impr) | High | Medium | Same cluster as #5/#6 — single clear primary FAQ, not duplicated. |
| 14 | `/faq/is-moonlight-peaks-multiplayer` | `/de/faq/is-moonlight-peaks-multiplayer` | Multiplayer cluster (315 impr, worst English CTR) | High (recently strengthened) | Low-Medium | Common question, low effort. |
| 15 | `/faq` (hub) | `/de/faq` | FAQ hub | High (recently de-staled) | Medium | Anchors the German FAQ entries and gives a browsable index. |

## Candidates from the brief's example list that were NOT selected, and why

- `/nokturna` — **excluded**. The English page is honest and well-labeled, but a large share of
  its content is explicitly "not yet documented" (deck-building mechanics). Translating a page
  whose core value proposition is "we don't know this yet" doesn't meet the "concrete answer /
  visible value" bar from Phase 13, even though the page itself is not low-quality by intent.
- `/faq/what-platforms-is-moonlight-peaks-on` — **excluded** in favor of consolidating platform
  intent onto `/de/platforms` and the PS5/Xbox FAQ (#5/#13) rather than creating a third German
  page targeting near-identical intent (avoids reproducing English's own near-cannibalization
  pattern in German from day one, per Phase 16).
- `/faq/does-demo-progress-carry-over` — **excluded**, folded into `/de/demo`, which already
  states this fact clearly; a separate German FAQ stub for the same single fact isn't worth a
  15th-page slot when `/demo` already covers it.
- `/farming` — considered, not selected this round (already 15 strong candidates; can be added
  in a follow-up MVP expansion).
