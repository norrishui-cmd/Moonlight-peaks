# Germany Data Readiness

## Current signal (from existing 7d/28d exports, aggregate country-level only)

| Window | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| 28d | 188 | 2,794 | 6.73% | 6.80 |
| 7d | (not separately re-pulled this round — see prior `GERMANY_MVP_OPPORTUNITY.csv`) | | | |

Germany remains the #2 country by clicks, with CTR that beats the US average at a similar
position — a genuinely strong signal at the country level.

## Why a decision still can't be made responsibly

No file matching a Germany-filtered export (`germany-queries-28d.csv`, `de-queries-28d.csv`,
`germany-pages-28d.csv`, `de-pages-28d.csv`, or similar) exists in the inputs available to this
task. The only country-level data available is a single aggregate row for Germany across *all*
pages and *all* queries combined — there is no page × country or query × country breakdown to
work from. Only a handful of explicit German-language query strings appear in the general query
export (a few impressions each), which isn't enough to reconstruct per-page German demand.

## Exactly what's needed to make a real /de/ decision

1. **A Germany-filtered query export** (28-day, ideally also 7-day) — from GSC: Search results →
   filter by Country = Germany → export Queries. This shows which specific search terms Germany
   traffic uses, in English or German.
2. **A Germany-filtered page export** (same filter, export Pages) — shows which exact URLs
   Germany traffic actually lands on, which is the missing piece to know *what to localize*.
3. Ideally both a 7-day and 28-day pull of each, to distinguish a stable pattern from a recent
   spike.

## Decision framework (to apply once that data exists)

- 🟢 **GREEN LIGHT** — Germany-filtered page data shows demand concentrated on a specific,
  ownable cluster of routes (e.g. 10-20 pages account for the bulk of German clicks/impressions),
  with clear, repeatable query intent behind them.
- 🟡 **YELLOW LIGHT** — Germany traffic is real but spread thinly and evenly across most of the
  site (i.e. Germany behaves like every other English-reading market, just smaller) — suggests
  Germany is already well-served in English rather than blocked by a language barrier.
- 🔴 **RED LIGHT** — Germany clicks turn out to be dominated by 1-2 incidental pages, or the
  German-language query share turns out to be near-zero even in the country-filtered data —
  suggests this is navigational/incidental traffic, not a real localization opportunity.

Based on the aggregate signal alone (strong volume, above-average CTR, but almost no
German-language query text visible), this round's read leans toward **🟡 YELLOW** — real,
engaged demand, but no evidence yet that a language barrier (rather than simple market size) is
the limiting factor. This is a leaning, not a decision — the page-level Germany export above is
required before treating it as final.

**No `/de/` pages were created or planned this round**, per this task's explicit scope.
