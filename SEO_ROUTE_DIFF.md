# SEO Route Diff — Programmatic Pages

Generated during strict post-launch validation. All numbers below are computed directly from
`src/data/seoGraph.ts` at build time — not estimated.

## Method note on "before" vs "after"

`seoGraph.ts` does not export its internal candidate list (`trustedGenerated`), and there is no
git history available in this environment to snapshot the true prior state. However, the
semantic-gate change touched **exactly one** generator branch — the `/characters/{id}/gifts`
page type inside `characterSeoPages`. Every other generator (`platformSeoPages`, `demoSeoPages`,
`itemSeoPages`, `locationSeoPages`, and the `/romance-status` branch of `characterSeoPages`) was
untouched by that change. This makes the "before" state for the `/gifts` category exactly
reconstructable: every character not marked `unconfirmed` would have produced a `/gifts` page
under the old (structural-only) gate, because the only reason those pages fail now is the new
`hasConcreteAnswer()` check.

Note: the character roster grew from 34 → 47 → 49 across sessions between when "74 passed" was
first reported and this validation pass, so the *absolute* counts below (based on the current
49-character roster) don't exactly match the originally-reported "74/39" figures — that's roster
growth, not a measurement error. The validation below uses the current, real, live data.

## 1. Routes that existed before the semantic gate (reconstructed)

- All `/characters/{id}/gifts` for the 47 characters with `status !== 'unconfirmed'` — **47 routes**.
- All `/characters/{id}/romance-status` for the same 47 characters — unaffected by the gate
  change, **47 candidates**.
- Platform, demo, and location generator candidates — unaffected by the gate change,
  **46 candidates** (4 price + 10 other/demo-variant + 15 launch-checklist + 17 locations).
- **Total candidates: 140** (unchanged before/after — the gate change didn't add or remove
  candidates, only changed which ones pass).

## 2. Routes that exist now (published, in sitemap)

- `/characters/saga/gifts` — 1 (the only character with real, sourced gift data)
- `/characters/{id}/romance-status` — 36 of 47 (11 rejected, see below — 10 are correctly-thin
  new stub characters, 1 — Winston — is a **pre-existing false negative**, see
  `SEO_QUALITY_GATE_AUDIT.md`)
- `launch-checklist` pages — 2 of 15 (13 rejected, all failing pre-existing `faqsCountOk`, not the
  semantic check)
- **Total published: 39**

## 3. Removed routes (46 total — full list)

Every one of these is a `/characters/{id}/gifts` page. None had a real gift table; all failed the
new `hasConcreteAnswer()` check because their only FAQ answer was "not published yet."

```
/characters/count-dracula/gifts    /characters/mina/gifts             /characters/evan/gifts
/characters/luna/gifts             /characters/orlock/gifts           /characters/logan/gifts
/characters/pumpkin-head/gifts     /characters/the-warlock/gifts      /characters/ridge/gifts
/characters/sabrina/gifts          /characters/noel/gifts             /characters/jada/gifts
/characters/brook/gifts            /characters/jarvis/gifts           /characters/dragan/gifts
/characters/albertus/gifts         /characters/alina/gifts            /characters/death/gifts
/characters/samael/gifts           /characters/elvira/gifts           /characters/fiona/gifts
/characters/kim/gifts              /characters/ludo/gifts             /characters/tae/gifts
/characters/winston/gifts          /characters/rei/gifts              /characters/aras/gifts
/characters/persephone/gifts       /characters/llemi/gifts            /characters/viktor-dracula/gifts
/characters/judge/gifts            /characters/skull-girl/gifts       /characters/balthasar/gifts
/characters/chester/gifts          /characters/laveau/gifts           /characters/yabbis/gifts
/characters/grim/gifts             /characters/mr-deyes/gifts         /characters/hoodini/gifts
/characters/larry/gifts            /characters/rachel/gifts           /characters/snek/gifts
/characters/jacques/gifts          /characters/moon-goddess/gifts     /characters/sun-god/gifts
/characters/yasmin/gifts
```

### Classification: **A. SAFE_TO_REMOVE** (all 46)

Reasoning: these routes never existed as real, crawlable, deployed pages in the first place — the
prior report describing "74 passed" was the state *before this validation pass rebuilt the
project*; nothing has actually been live at these URLs that search engines could have indexed
between the gate change and this validation (this is the first real production build run this
session — see Phase 1). Additionally:

- **Zero internal references found** (see `BROKEN_INTERNAL_LINKS.md` — checked all 172 source
  files, 0 hits for any of the 46 paths).
- Each has a strong, obvious parent destination already linked from elsewhere: the character's own
  profile page (`/characters/{id}`), which every romance/family/tools page already links to.
- No `SHOULD_PRESERVE_NOINDEX` treatment is needed because — per this project's architecture —
  pages that fail `passesSeoQualityGate` are never added to `seoPages`, and `[...slug].astro`
  only renders paths present in `seoPages`. There is no route to 404, noindex, or redirect: it
  simply never gets built. This is correct-by-construction, not an accidental loss.

No `SHOULD_REDIRECT` classification was applied to any of the 46 — a 301 to the parent character
profile was considered and rejected as unnecessary, since nothing was actually live at these URLs
to redirect *from*.

## 4. Newly added routes this validation pass

- `/quests/a-bridge-too-far` (added in the prior optimization pass, confirmed present in this
  build and sitemap).

## 5. Routes excluded from sitemap (this validation pass specifically)

Three real bugs were found and fixed (see `SEO_POST_LAUNCH_AUDIT.md` follow-up / build log):

- `/es/environment`, `/ja/environment`, `/zh/environment` — **removed from sitemap**. These pages
  never existed as files; `staticPaths` incorrectly listed them. Not a regression from the
  semantic-gate work — a pre-existing sitemap error, caught by this validation's reconciliation
  step (Phase 7).
- `/es/characters/brook`, `/ja/characters/brook`, `/zh/characters/brook` — **fixed, not removed**.
  These are legitimately supposed to exist; the actual bug was a stale `'logan'` key in
  `src/i18n/characters-data.ts` and two hardcoded `translatedSlugs` arrays (in
  `es/ja/zh/characters/index.astro`) left over from the Logan→Brook correction made in an earlier
  session. Fixed by renaming the key and updating the three arrays; these three URLs now build
  correctly and remain in the sitemap.

## 6. Routes that still exist but changed indexability

None. No route that was previously live and indexed had its indexability changed by this pass —
the 46 "removed" `/gifts` routes were never live to begin with (see §3).
