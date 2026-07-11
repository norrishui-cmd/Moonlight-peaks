// Moonlight Peaks — crop & flower database.
// ------------------------------------------------------------------
// STATUS (mirrors the convention in characters.ts):
//   'confirmed'   = verified in the live game or by devs/official
//   'reported'    = seen in previews / marketing / coverage, not yet verified in-build
//   'datamined'   = pulled from game files, cross-checked, not dev-confirmed
//   'unconfirmed' = name floating around with no source yet
//
// FILL AT LAUNCH:
//   - Replace the example rows with verified data as you confirm it today.
//   - Use `null` (NOT 0) for any number you don't know yet — render "—" for null on the page.
//   - Only mark a row 'confirmed' once you've actually seen it in-game.
//
// WIRING (src/pages/farming.astro):
//   import { crops, cropsByProfit } from '../data/crops';
//   ...then render a table where the "Coming at launch" <ul> currently sits.
//   `cropsByProfit` powers a "best crops for money" section (target keyword).
// ------------------------------------------------------------------

export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All' | 'Special';
export type SourceStatus = 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';

export type Crop = {
  id: string;                 // slug, e.g. 'blood-grapes'
  name: string;
  category: 'crop' | 'flower' | 'tree' | 'special';
  season: Season[];           // one or more; [] = unknown
  buyPrice: number | null;    // seed cost; null = unknown
  sellPrice: number | null;   // base sell value of the harvest; null = unknown
  growDays: number | null;    // days to first harvest; null = unknown
  regrowDays: number | null;  // days between regrows; null = does not regrow OR unknown
  source: string;             // where to buy seeds / how to obtain ('' = unknown)
  notes: string;              // cursing, uses (cursed food / cooking), quirks ('' = none)
  status: SourceStatus;
};

// Example rows use crop names teased in marketing/previews → status 'reported'.
// Numbers stay null until verified in the live game today. Replace / extend freely.
export const crops: Crop[] = [
  {
    id: 'blood-grapes', name: 'Blood Grapes', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: 5, regrowDays: null,
    source: 'Given free by Orlock as your starter seeds on night one.',
    notes: 'Confirmed starter crop, 5 days to grow. Confirmed: process the harvest into "Blood Wine" (also called red wine in some coverage) via a keg for real profit \u2014 raw grapes sell for very little on their own. Exact prices not yet sourced.',
    status: 'confirmed',
  },
  {
    id: 'cruelcumber', name: 'Cruelcumber', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: null, regrowDays: null,
    source: '', notes: 'Named in official marketing/previews.',
    status: 'reported',
  },
  {
    id: 'pumpkin', name: 'Pumpkin', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: null, regrowDays: null,
    source: '', notes: 'Shown in early footage.',
    status: 'reported',
  },
  {
    id: 'nightshade', name: 'Nightshade', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: null, regrowDays: null,
    source: '', notes: 'Shown in early footage; likely used in curses/potions.',
    status: 'reported',
  },
  {
    id: 'white-grapes', name: 'White Grapes', category: 'crop', season: ['Summer', 'Autumn'],
    buyPrice: null, sellPrice: null, growDays: 5, regrowDays: 4,
    source: '',
    notes: 'Confirmed via Prima Games: yields 3 grapes per harvest and regrows every 4 nights, so you only need to buy seeds once per season. Best processed into wine via a Keg rather than sold raw \u2014 exact gold values not yet sourced.',
    status: 'confirmed',
  },
  {
    id: 'wily-wheat', name: 'Wily Wheat', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: 4, regrowDays: null,
    source: '',
    notes: 'Confirmed via Prima Games: cheap seeds, grows in just 4 days, yields 1 per harvest. Best processed into Beer via a Keg rather than sold raw. A reliable low-effort early crop rather than a high-value one.',
    status: 'confirmed',
  },
  {
    id: 'onion-seeds', name: 'Onion', category: 'crop', season: [],
    buyPrice: null, sellPrice: null, growDays: null, regrowDays: null,
    source: '',
    notes: 'Confirmed via Prima Games as a useful late-season fallback: plant it when only a few days remain before a season changes and you\u2019re worried a longer-growing crop won\u2019t make it to harvest in time. Also used in some recipes. Note: also a confirmed disliked gift for several residents \u2014 don\u2019t give it away as a present.',
    status: 'confirmed',
  },
  {
    id: 'gobbler', name: 'Gobbler', category: 'crop', season: ['Summer'],
    buyPrice: null, sellPrice: null, growDays: 6, regrowDays: null,
    source: '',
    notes: 'Confirmed via Bonus Action and Prima Games as a magical crop: can only be watered with the Aquaflux I spell (regular watering cans don\u2019t work), and each plant must additionally be fed a fish or a bug daily before it can be harvested \u2014 which one it wants is random per plant, so stockpiling both is the safe approach. The best magical crop for producing Mana Essence.',
    status: 'confirmed',
  },
  // Add glowing flowers, trees, and special crops here as you confirm them, e.g.:
  // { id: 'moonpetal', name: 'Moonpetal', category: 'flower', season: ['Summer'],
  //   buyPrice: 40, sellPrice: 90, growDays: 5, regrowDays: null,
  //   source: 'Nocturne Seeds', notes: 'Glows at night.', status: 'confirmed' },
];

// Confirmed at launch: raw crops (esp. Blood Grapes) sell for very little; processing into
// wine/juice via a keg (and jam/cheese for livestock goods) is the real money-maker. No exact
// sell-price table exists yet anywhere — do not invent numbers; keep this note until verified.
export const PROFIT_NOTE =
  'Confirmed by reviewers: raw crop sale is low-value. Process crops into wine/juice (keg) or ' +
  'jam/cheese before selling for meaningfully more gold. Exact numeric prices not yet verified.';

// "Best crops for money" — safe on empty/partial data (only ranks rows with a known sellPrice).
export const cropsByProfit: Crop[] = [...crops]
  .filter((c) => c.sellPrice != null)
  .sort((a, b) => (b.sellPrice as number) - (a.sellPrice as number));

// Crops grouped by season (skips rows whose season is still unknown).
export const cropsBySeason: Record<Season, Crop[]> =
  (['Spring', 'Summer', 'Autumn', 'Winter', 'All', 'Special'] as Season[])
    .reduce((acc, s) => { acc[s] = crops.filter((c) => c.season.includes(s)); return acc; },
      {} as Record<Season, Crop[]>);
