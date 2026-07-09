# German MVP Implementation Report

15 pages implemented. See `GERMAN_MVP_PAGE_SELECTION.md` for selection rationale and
`GERMAN_ROUTE_STRATEGY.md` for the routing decision (shared English slugs under `/de/`).

| English route | German route | Selection reason | Title (DE) | Primary intent | Internal DE links | Hreflang | Canonical |
|---|---|---|---|---|---|---|---|
| `/` | `/de` | MVP entry point | Moonlight Peaks Wiki auf Deutsch — Release, Guides & Tipps | Site orientation | All 15 MVP pages | ✅ | self |
| `/beginner-guide` | `/de/beginner-guide` | Largest EN cluster (2,981 impr) | Moonlight Peaks Einsteiger-Guide (Deutsch) | First-week onboarding | romance, magic, characters | ✅ | self |
| `/characters` | `/de/characters` | Best-performing EN page (5,009 impr) | Moonlight Peaks Charaktere — Deutscher Guide | Character roster overview | (links out to EN profile — see note) | ✅ | self |
| `/romance` | `/de/romance` | Largest thematic cluster (~2,160 impr) | Moonlight Peaks Romanze — 23 Optionen & Heirat (Deutsch) | Romance mechanics + roster | characters, beginner-guide | ✅ | self |
| `/platforms` | `/de/platforms` | PS5/Xbox cluster (1,135 impr) | Moonlight Peaks Plattformen — PS5, Xbox & Preis (Deutsch) | Platform availability | release-date, demo, PS5/Xbox FAQ | ✅ | self |
| `/release-date` | `/de/release-date` | Largest CTR-gap page (2,398 impr) | Moonlight Peaks Release-Datum & Plattformen (Deutsch) | Release date + platform confirm | platforms, demo, beginner-guide | ✅ | self |
| `/demo` | `/de/demo` | Demo cluster (1,382 impr) | Moonlight Peaks Demo — Download & Infos (Deutsch) | Demo carry-over + download | release-date, platforms, beginner-guide | ✅ | self |
| `/magic` | `/de/magic` | Real troubleshooting content | Moonlight Peaks Magie — Zauberstab, Moon Fruit & Mana (Deutsch) | Wand-fix troubleshooting | beginner-guide | ✅ | self |
| `/locations` | `/de/locations` | Highest-impression location hub | Moonlight Peaks Orte — Stadt, Farm & Howling Marshes (Deutsch) | Location overview | locations/mines | ✅ | self |
| `/locations/mines` | `/de/locations/mines` | High real-world player interest | Moonlight Peaks Cave of Echoes — Freischaltung & Erz (Deutsch) | Cave of Echoes unlock + ore | locations, quests/a-bridge-too-far | ✅ | self |
| `/known-issues` | `/de/known-issues` | Universal technical demand | Moonlight Peaks Bekannte Probleme — Abstürze & Controller (Deutsch) | Crash/controller troubleshooting | platforms | ✅ | self |
| `/quests/a-bridge-too-far` | `/de/quests/a-bridge-too-far` | Deep, fully-labeled quest guide | Moonlight Peaks: A Bridge Too Far Quest-Guide (Deutsch) | Quest walkthrough | locations/mines | ✅ | self |
| `/faq` | `/de/faq` | FAQ hub anchor | Moonlight Peaks FAQ — Häufige Fragen (Deutsch) | FAQ index | Both DE FAQ sub-pages | ✅ | self |
| `/faq/is-moonlight-peaks-on-ps5-or-xbox` | `/de/faq/...` | PS5/Xbox dedicated FAQ | Ist Moonlight Peaks auf PS5 oder Xbox erhältlich? | Direct yes/no | platforms, release-date | ✅ | self |
| `/faq/is-moonlight-peaks-multiplayer` | `/de/faq/...` | Multiplayer cluster (worst EN CTR) | Ist Moonlight Peaks Multiplayer? | Direct yes/no | platforms | ✅ | self |

**Note on `/de/characters`:** since only Saga has a German character-bio translation so far (vs.
6 in es/ja/zh), her card links to the fuller English profile page (`/characters/saga`) rather
than a not-yet-built German sub-page — an honest MVP scoping decision, not an oversight (see
`GERMAN_MVP_PAGE_SELECTION.md`).

## Localization notes

- All "Confirmed"/"Community-reported"/"Von Spielern berichtet" confidence labels preserved
  exactly at the same certainty level as the English source — verified during Phase 29 review
  (no label was upgraded during translation).
- No stale pre-launch phrasing ("vor dem Launch," "wenn das Spiel erscheint," etc.) introduced —
  every page states the game is "seit dem 7. Juli 2026 erhältlich" (available since July 7, 2026)
  where a release-status statement is relevant.
- Proper nouns (Moonlight Peaks, Cave of Echoes, Aquaflux, Webb of Wonders, etc.) kept in English
  throughout, per `src/data/i18n/de-glossary.ts`.

## Terminology uncertainties

See `GERMAN_TERMINOLOGY_NOTES.md` — 0 terms are marked as verified official German UI text,
since no official German localization data for this game exists in any repository source.
"Romanzefähig" (romanceable) is flagged as the single least-certain coinage; a clear descriptive
phrase was used rather than an invented "official-sounding" term.
