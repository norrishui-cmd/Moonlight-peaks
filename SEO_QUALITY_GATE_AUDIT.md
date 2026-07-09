# SEO Quality Gate Audit

All numbers computed live from `src/data/seoGraph.ts` via its (newly added, read-only)
`__auditTrustedGenerated` / `__auditRejected` / `__auditGateChecks` exports — not estimated or
reconstructed from memory.

## Candidates by category

| Category | Total candidates | Passed | Rejected | Primary rejection reason |
|---|---|---|---|---|
| gifts | 47 | 1 | 46 | `concreteAnswerOk` (no real gift data — semantic gate, working as intended) |
| romance-status | 47 | 36 | 11 | 10× thin new stub characters (correct); **1× false negative** (Winston, `sectionsLengthOk`, pre-existing structural threshold, unrelated to semantic gate) |
| prices | 4 | 0 | 4 | `faqsCountOk` (pre-existing, unrelated to semantic gate — these pages only ever had 1 FAQ) |
| launch-checklist | 15 | 2 | 13 | `faqsCountOk` (pre-existing) |
| other (demo variants) | 10 | 0 | 10 | `faqsCountOk` (pre-existing) |
| locations | 17 | 0 | 17 | Never passed under either gate — pre-existing, unrelated to this validation's scope |
| **Total** | **140** | **39** | **101** | |

**Key finding:** of the 101 rejected candidates, only **46** (all in the `gifts` category) are
rejected *because of* the new `hasConcreteAnswer()` semantic check. The other **55** were already
failing pre-existing structural checks (`faqsCountOk`, `sectionsLengthOk`) that predate this
validation pass and are unrelated to the semantic-gate change. This matters for attribution: the
semantic gate's real, isolated effect is exactly 46 pages, not 101.

## Manual inspection: 10 rejected gift pages

All 10 sampled (`count-dracula`, `mina`, `evan`, `luna`, `orlock`, `logan`, `pumpkin-head`,
`the-warlock`, `ridge`, `sabrina`) fail on exactly one check: `concreteAnswerOk`. Their first FAQ
answer is the literal string "Confirmed {name} gift preferences are not published yet." — correct
rejection, not a false positive. No wording-variation, field-name, or data-branch bug found in
this sample: every one of these characters genuinely lacks a `lovedGifts` array in
`characters.ts`, confirmed directly against the source data, not inferred from the generated page
text.

## Manual inspection: 10 rejected non-gift pages

Sampled: `/platforms/steam-deck/price`, `/platforms/steam-deck/demo`, `/platforms/switch/price`,
`/platforms/switch/demo`, `/platforms/switch-2/price`, `/platforms/switch-2/demo`,
`/platforms/android/price`, `/platforms/android/demo`, `/demo/whats-in-the-demo/steam`,
`/demo/whats-in-the-demo/switch`.

All 10 fail on `faqsCountOk` (need ≥2 FAQs; the platform/demo generator templates frequently
produce only 1). Two of the ten (`switch-2` variants) additionally fail `sectionsLengthOk` and
`textSizeOk`. **None of these fail on `concreteAnswerOk`** — the semantic gate added by this
validation pass has zero effect on this category; they were already excluded by the pre-existing
structural gate. This is a real, pre-existing content-thinness issue (not enough FAQs sourced for
per-platform price/demo pages) but is **out of scope for this validation task**, which is
explicitly semantic-gate-focused and forbids new content changes.

## All rejected pages with structured gameplay data

Checked every rejected page's `sections` for concrete, sourced gameplay facts (not just "not
published yet" filler): none of the 101 rejected pages contain a hidden concrete answer that the
gate is wrongly suppressing, **except Winston's `/romance-status`** (see below) — every other
rejection correctly reflects genuinely thin or non-existent data.

## False negative found: Winston

`/characters/winston/romance-status` is rejected on `sectionsLengthOk` alone. Its "known profile
notes" section body is: *"Confirmed as part of the Henderson human family, arriving alongside
Persephone and Jada."* — 90 characters exactly is the threshold; this is 88, two characters short.
Winston **is** a confirmed romance option (`romanceable: true` in `characters.ts`), and his first
FAQ answer ("Can you romance Winston?" → "Yes, Winston is currently marked as romanceable.") is a
completely valid, concrete answer. This page is being wrongly excluded by a pre-existing,
somewhat-arbitrary 90-character section-length minimum — **not** by anything added in this
validation pass. Flagged here per the audit's instructions; **not fixed in this pass**, since
doing so would mean editing `characters.ts` content, which is out of scope for a
validation-and-safety-only task. Recommended as the first item in a future content pass.

## False positives found

None. No page with a genuinely absent answer was found passing the gate. Saga's `/gifts` page
(the one page in the `gifts` category that passes) was independently verified to contain real,
sourced gift data (`lovedGifts: ['White Wine']`, matching her character profile and the FAQ
answer to "What gifts does Saga like?").

## Conclusion

The semantic gate (`hasConcreteAnswer`) is working as designed for the category it was built to
fix (`gifts`) with zero observed false positives in that category. One pre-existing false
negative (Winston) was found, caused by an unrelated structural threshold that predates this
change. The `prices`/`locations`/`other` categories have a separate, pre-existing content-gap
issue (too few FAQs) that this validation pass did not cause and does not fix, per scope.
