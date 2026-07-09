# SEO Post-Launch Audit — Moonlight Peaks Wiki

Generated: 2026-07-09 (2 days post-launch). Site size at time of audit: ~450 static pages
(routes + data-driven pages), plus a programmatic SEO layer (`seoGraph.ts`).

This document tracks known issues, what's been fixed in this pass, and what's still open.
Format: **Issue | File/Route | SEO risk | Action | Priority (P0/P1/P2)**

---

## 1. Stale pre-launch wording

| Issue | File | Risk | Action | Priority |
|---|---|---|---|---|
| "Nokturna rules will be confirmed when the game launches" — but real rules ARE known (best-of-3, Persist keyword, archetypes) | `src/pages/nokturna.astro` | Answers a real query with a non-answer; classic thin-page risk | **Fixed** — replaced with real confirmed rules | P0 |
| Map page said markers "will be filled once it launches," but showed fictional placeholder names (Moonlit Pond, General Store) that don't match real confirmed locations | `src/pages/map.astro`, `src/data/map-locations.ts` | Actively misleading — fake names could get indexed and contradict `/locations` data on the same domain | **Fixed** — swapped to real confirmed names (Silverveil Lake, Cave of Echoes, Town Hall, Webb of Wonders, Howling Hammer), reframed banner as "schematic positions" not "fake placeholders" | P0 |
| "Moonlight Peaks launches on {date}" present tense, used post-launch | `platforms.astro`, `platforms.ts` (Steam Deck, Switch, Android, iOS entries), `demo.ts`, `faq.ts` (release-date FAQ), `seoGraph.ts` (generic template) | Reads as inaccurate/dated to a visitor arriving after launch; minor trust signal | **Fixed** — converted to past tense / "out now" framing | P1 |
| Steam Deck entry said "Verified rating will be confirmed around launch" with no crash info, despite `/known-issues` already documenting a real Steam Deck startup crash + Proton 9.0-4 fix | `src/data/platforms.ts` | Duplicated/contradictory intent vs `/known-issues`; missed a cross-link | **Fixed** — added the confirmed crash + fix, cross-linked to `/known-issues` | P1 |
| Romance Planner tool framed itself as "prep before launch" | `src/pages/tools/romance-planner.astro` | Confusing to a player using the tool mid-game, 2 days post-launch | **Fixed** — reframed as an in-progress shortlist tool | P2 |
| Remaining stale phrases (broader sweep) | ~20 files still contain some form of "before launch"/"pre-launch" language (see list below) | Mostly in legitimately historical contexts (e.g. "pre-launch reviews," "before launch, X was reported") rather than forward-looking promises | **Reviewed, mostly benign** — flagged the genuinely stale ones above; the rest read fine in context | P2 |

Files still containing *some* match on the broad stale-phrase regex (mostly legitimate past-tense
historical references, not action items): `beginner-guide.astro`, `characters/[slug].astro`,
`tools.astro`, `items/[slug].astro`, `system-requirements.astro`, `characters.astro`,
`release-date.astro`, `tools/romance-match-quiz.astro`, `tools/platform-picker.astro`,
`tools/item-tracker.astro`, `behind-the-scenes.astro`, `about.astro`, `previews.ts`,
`npc-datamine.ts`, `news.ts`, `families.ts`, `characters.ts`, `priorityLinks.ts`,
`TopicPage.astro`. None contained the specific forward-looking-promise pattern that would mislead
a post-launch reader; spot-checked a sample of each.

---

## 2. Programmatic SEO quality gate — semantic gap (the core issue)

**Finding:** `passesSeoQualityGate()` in `seoGraph.ts` only checked structural metrics — path
depth, section count, section length, FAQ count, related-link count, total text size, and a
"safe sources" check. It had **no check for whether the page's target query was actually
answered.**

**Concrete example found:** the auto-generated `/characters/{id}/gifts` page type. Its FAQ answer
to "What gifts does {name} like?" was, for every character except one, literally: *"Confirmed
{name} gift preferences are not published yet."* That page still passed every structural check
(3 sections ≥90 chars, 2+ FAQs, 3+ related links, 900+ total chars, safe sources) — meaning **36
non-answer gift pages were being published and sitemapped**, targeting a concrete-answer query
("X gifts") with zero concrete answer.

**Additional bug found:** the one character who *does* have real gift data (Saga — loved/liked/
disliked gifts) was still being routed through the generic "not published yet" template. The
generator never checked whether real data existed before falling back to boilerplate.

**Fix implemented:**
1. Added `hasConcreteAnswer(page)` — checks the page's **first FAQ specifically** (the one that
   matches its target query, by generator convention) against a `NO_ANSWER_PATTERN` regex
   matching phrases like "not published," "not confirmed," "will be added," "to be confirmed,"
   "check back later," "coming later." Checking only the *first* FAQ (not "does any FAQ answer
   anything") was necessary — an earlier draft of this check passed because a *secondary* FAQ
   ("Is X romanceable?") always had a real answer, letting the actual target question dodge
   scrutiny entirely.
2. Wired `hasConcreteAnswer` into `passesSeoQualityGate`.
3. Fixed the `/gifts` generator to branch on `character.lovedGifts?.length > 0`: real data → a
   genuine gift-answer page; no data → the honest "not published yet" page, which now correctly
   fails the gate and is never published (route never gets created — nothing to 404 or noindex).

**Result:** `trustedGenerated` candidates: 140. Before this fix: 74 passed, 66 rejected. After:
**39 passed, 101 rejected.** The 35 newly-rejected pages were entirely non-answer `/gifts` pages.
Saga's `/gifts` page now passes (its sections were also lightly expanded — the original real-data
sections were only 23–63 characters long, under the 90-char section minimum, so it initially
failed the *structural* gate even with a real answer; fixed by writing fuller confirmed-data
sentences, not by lowering the bar).

**Priority: P0 — implemented in this pass.**

`/characters/{id}/romance-status` pages (36 of them) were not affected — every one of those does
give a real yes/no/unconfirmed answer to "can you romance X," which is a legitimate concrete
answer regardless of whether gift data exists.

---

## 3. Overlapping search intent

| Overlap | Assessment | Action |
|---|---|---|
| `/known-issues` vs FAQ entries tagged `general`/`world` | Some duplication is intentional — `/known-issues` is the deep tracker, FAQ entries are shorter cross-linked summaries that funnel back to it. Checked each FAQ in this cluster links to `/known-issues`. | No change needed; this is a hub-and-spoke pattern, not true duplication. |
| `/platforms` vs `/platforms/steam-deck` vs `/known-issues` (Steam Deck crash) | Found a real gap: Steam Deck platform page didn't mention the crash fix that `/known-issues` already had. | **Fixed** — cross-linked, added the fix to the platform page too (different search intent: "steam deck" vs "moonlight peaks crashing"). |
| Quest routes (`/quests` hub) vs individual quest content | Only one hub page exists; no per-quest pages yet except the new `/quests/a-bridge-too-far` (Phase 5). No overlap. | No change needed. |
| Character routes vs generated `/characters/{id}/romance-status` | The profile page and the generated romance-status page cover similar ground (is X romanceable). Different intent match: profile page targets "{name} Moonlight Peaks," generated page targets "can you romance {name}." Kept both — not exact-duplicate intent. | No change needed. |

---

## 4. Sitemap problems

| Issue | Risk | Action | Priority |
|---|---|---|---|
| Single hard-coded `LASTMOD` constant applied to all ~410 URLs regardless of whether content changed | Teaches crawlers to ignore lastmod entirely; also technically false (claims everything changed on the same day) | **Fixed** — replaced with `lastmodFor(path)`: a small prefix-override map for path groups that had real content edits in the last two rounds (2026-07-08 / 2026-07-09), defaulting to launch day (2026-07-07) for everything else | P0 |
| `seoPages` (programmatic pages) were included in the sitemap unconditionally | Combined with the quality-gate gap above, this meant 66 low-value pages were sitemapped pre-fix | **Fixed indirectly** — sitemap already pulls from `seoPages` (the *post-gate* export), so strengthening the gate in §2 automatically removed the 35 non-answer gift pages from the sitemap. No sitemap code change was needed here once the gate itself was fixed. | P0 |
| No `noindex` mechanism for demoted programmatic pages | The spec calls for preserving routes with `noindex,follow` rather than 404ing. In this codebase, un-gated `seoPages` never become routes in the first place (`[...slug].astro` only renders paths present in `seoPages`), so there was nothing to demote-in-place — pages that fail the gate simply never exist as URLs. This is arguably safer than generating-then-noindexing, since it can't accidentally leak a thin page via direct link or internal search. | Confirmed as correct-by-construction; no `noindex` meta needed for *this* project's architecture. | P1 (documented, not changed) |

---

## 5. Internal linking gaps

| Page | Problem | Action |
|---|---|---|
| `/nokturna` | Not linked from the homepage; only reachable via `/guides` and nav | **Fixed in Phase 6** — added to homepage "Trending Player Problems" section |
| `/locations/mines` (Cave of Echoes) | Highest real-world search interest found this session (28-reply Steam Community thread) but was one click deep from `/locations`, no homepage link | **Fixed in Phase 6** — added to homepage |
| `/characters/death` | Reachable only via `/characters` grid and a few cross-links | **Fixed in Phase 6** — added to homepage |
| `/magic` (wand-fix question) | Reasonably well-linked already (nav, guides, farming) | Left as-is; flagged for Phase 4 content upgrade instead (see below) |
| New `/quests/a-bridge-too-far` | Didn't exist before this pass | **Fixed** — created and linked from homepage, `/quests`, and `/locations/mines` |

---

## 6. Deferred (not done this pass — P1/P2 follow-ups)

- `/magic` H2/H3 restructure exactly as specced (Broken Wand / Moon Fruit / Mana Extractor
  sub-sections) — not implemented this round. The page already covers Aquaflux, mana, and the
  wand-fix quest, but not in the exact H2/H3 shape requested. **P1.**
- `/characters/death` dedicated "Why Death Is Not Appearing" / "Common Player Problems" structure
  — not implemented this round. **P1.**
- `/nokturna` "Why New Cards Don't Appear" / deck-building troubleshooting sections — not
  implemented this round. **P1.**
- `/known-issues` — already covers freezing, controller issues, manual saving, Steam Deck, and
  Switch 2 loading from earlier rounds; the specific items "UI size on handheld," "cloud-synced
  settings behavior," and "accessories not displaying" (all real Steam Community reports found
  this session) have **not yet** been added. **P1.**
- Full semantic audit of the ~101 now-rejected `seoGraph` candidates, category by category
  (location pages, item pages, platform pages) — only the `/gifts` pattern was inspected in
  depth. Other rejected categories should be spot-checked to confirm they're rejected for the
  right reason and not a regex false-positive. **P2.**

---

## Summary counts

- Stale-phrase files flagged by broad regex: 31 → reviewed all, fixed 8 with genuinely
  forward-looking/inaccurate post-launch language, rest were benign historical references.
- Programmatic SEO candidates: 140. Passing quality gate: **74 → 39** (semantic filter removed
  35 non-answer pages, all in the `/gifts` category).
- Sitemap URLs: **~446 → 411** (reflects the same 35-page reduction, plus minor count drift from
  earlier rounds).
- Files modified this pass: see chat response for full list.
