// Nokturna — the in-game card game in Moonlight Peaks.
// PRE-LAUNCH: the real card list isn't public yet — keep `cards` empty until July 7, 2026.
// AT LAUNCH: add each VERIFIED card below and the browser on /nokturna fills automatically.
// Only add fields you can actually verify in-game; leave the rest out.

export type NokturnaCard = {
  id: string;          // unique slug, e.g. 'moon-bat'
  name: string;
  type?: string;       // category / suit, once known
  rarity?: string;     // e.g. Common / Rare / Legendary
  cost?: string;       // play cost, if any
  power?: string;      // attack / value, if any
  effect?: string;     // what the card does
  howToGet?: string;   // how to obtain it
};

// First verified card, sourced from a launch-week review (Prima Games). Add more as they're confirmed.
export const cards: NokturnaCard[] = [
  {
    id: 'alpha-wolf', name: 'Alpha Wolf', type: 'Werewolf deck',
    effect: 'On Play: Has +2 point value for every other Werewolf card you have in play.',
    howToGet: 'Not yet sourced — confirmed to exist via a launch-week review, but the specific unlock method isn\u2019t documented yet.',
  },
];
