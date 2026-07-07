// Moonlight Peaks — fish database.
// ------------------------------------------------------------------
// Same status discipline & fill rules as crops.ts:
//   - `null` for unknown numbers; only mark a row 'confirmed' once verified in-game.
//   - Vampire twist: many fish may be night-only — always capture timeOfDay.
//
// WIRING: no fishing page exists yet. Create src/pages/fishing.astro (copy the farming.astro
//   shell for layout + JSON-LD + FAQ), then:
//     import { fish, fishByValue } from '../data/fishing';
//   and render a table. Target keywords: "Moonlight Peaks fish list",
//   "where to catch <fish>", "Moonlight Peaks fishing guide".
// ------------------------------------------------------------------

export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All' | 'Special';
export type SourceStatus = 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';

export type Fish = {
  id: string;
  name: string;
  location: string;            // pond / river / coast / special spot ('' = unknown)
  season: Season[];            // [] = unknown / any
  timeOfDay: string;           // 'Night' | 'Any' | 'Dusk–Dawn' | specific window ('' = unknown)
  weather: string;             // if fish depend on weather ('' = unknown / any)
  sellPrice: number | null;    // base sell value; null = unknown
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | null;
  notes: string;               // bait/tackle, uses, quirks ('' = none)
  status: SourceStatus;
};

// Start empty-but-typed. No species/prices sourced anywhere yet — replace rows as confirmed.
export const fish: Fish[] = [
  {
    id: 'example-fish', name: '(replace at launch)', location: '', season: [],
    timeOfDay: '', weather: '', sellPrice: null, rarity: null,
    notes: 'Delete this row and add verified fish: name, spot, time window, price, rarity.',
    status: 'unconfirmed',
  },
  // { id: 'moon-koi', name: 'Moon Koi', location: 'Town Pond', season: ['All'],
  //   timeOfDay: 'Night', weather: '', sellPrice: 120, rarity: 'Uncommon',
  //   notes: 'Only bites after dark.', status: 'confirmed' },
];

// Confirmed at launch: the fishing rod is NOT available from the start — you unlock it by
// winning a bet against Noel (250 gold on the line) to catch three different fish before he does.
// Bug net comes later, from Death, once the Ambrosia castle area is unlocked. No fish species,
// locations, or prices are sourced yet — do not invent them.
export const UNLOCK_NOTE =
  'Fishing rod: unlocked via a 250-gold bet with Noel (catch 3 different fish before he does). ' +
  'Bug net: confirmed to require meeting Death twice after unlocking Misty Shores and the Ambrosia ' +
  'Graveyard via the "A Bridge Too Far" quest (Fiona cursed the bridge to Orlock\u2019s home after a ' +
  'drunken argument). Species list not yet sourced.';

// "Most valuable fish" — safe on empty/partial data (only ranks rows with a known sellPrice).
export const fishByValue: Fish[] = [...fish]
  .filter((f) => f.sellPrice != null)
  .sort((a, b) => (b.sellPrice as number) - (a.sellPrice as number));
