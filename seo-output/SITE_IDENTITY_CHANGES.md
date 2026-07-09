# Site Identity Changes

Three shared-infrastructure fixes implemented, per the audit in `SITE_IDENTITY_AUDIT.md`. No
page content, title, or H1 on any of the 11 frozen Top-10 routes was touched.

## 1. Homepage `<title>` word order

- **File:** `src/pages/index.astro`
- **Before:** `"Moonlight Peaks Guide & Wiki - Launch Hub, Tips & Tools"`
- **After:** `"Moonlight Peaks Wiki & Guide - Launch Hub, Tips & Tools"`
- **Reason:** the exact same page already emits a `WebSite` JSON-LD entity with
  `name: SITE.brand` = "Moonlight Peaks Wiki & Guide" — the visible `<title>` had the words
  reversed, a direct, single-page inconsistency between structured data and visible metadata.

## 2. Footer disclaimer now references the shared brand constant

- **File:** `src/layouts/Base.astro`
- **Before:** hardcoded literal `"Moonlight Peaks Wiki & Guide is an independent, fan-made guide..."`
- **After:** `{SITE.brand} is an independent, fan-made guide...`
- **Reason:** the literal string currently matched `SITE.brand` by coincidence, but wasn't
  actually sourced from it — any future brand-name change would have silently missed this
  sitewide footer. No visible change to output today; purely a drift-prevention fix.

## 3. Programmatic page title generators normalized

- **File:** `src/data/seoGraph.ts`
- **Before:** two of three title-template locations used `"| Moonlight Peaks Wiki"`, one used
  `"| Moonlight Peaks Guide"` (the character romance-status generator).
- **After:** all three now consistently use `"| Moonlight Peaks Wiki"`.
- **Also fixed in the same string:** the romance-status description said "launch verification
  checklist" — stale pre-launch phrasing, changed to "verified against the live game."
- **Reason:** internal inconsistency across otherwise-identical generator functions in the same
  file; normalizing removes a contradiction rather than introducing a new brand rule.
- **Scope check:** this affects the generated `<title>` tag on `/characters/{id}/romance-status`
  pages (39 currently published, per the existing quality gate) — not new content, not a factual
  claim change, purely the trailing brand suffix and one stale phrase.

## Not changed (verified correct, left alone)

- `SITE.name` / `SITE.brand` constant itself — already correct, single source of truth.
- `alternateName` array on the homepage `WebSite` entity — genuine, already-used short forms, not
  invented for this task.
- `ja`/`es` homepage `WebSite` entities — correctly locale-qualified already.
- Photo-credit captions in `previews.ts` ("Illustrative art · Moonlight Peaks Wiki") — minor,
  low-visibility, not worth the edit risk this round.
- `wiki.gg` source citations — confirmed these reference an unrelated third-party site, not this
  site; renaming them would be factually wrong.
- `/about` page's "Wiki, Guide & Tools" phrasing — describes page content, not a competing brand
  identity; consistent with the instruction not to ban the word "guide" where it's descriptive.
