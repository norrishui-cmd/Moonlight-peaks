// Moonlight Peaks interactive map data.
// Named locations below are real, confirmed location/shop/resident names (matched against
// src/data/locations.ts and src/data/characters.ts). Positions are schematic approximations
// based on descriptive clues in guides (e.g. "Misty Shores is south across a bridge"), not
// pixel-measured from an official map image — set `markersConfirmed = true` only once real
// x/y coordinates are sourced from an actual map screenshot.

export type MapCategory = 'fishing' | 'foraging' | 'shop' | 'npc' | 'farm';

export const categories: { id: MapCategory; label: string; color: string }[] = [
  { id: 'fishing', label: 'Fishing', color: '#5aa9e6' },
  { id: 'foraging', label: 'Foraging', color: '#8fb98a' },
  { id: 'shop', label: 'Shops', color: '#f3c969' },
  { id: 'npc', label: 'Residents', color: '#c0436a' },
  { id: 'farm', label: 'Farm', color: '#b98ad8' },
];

export type MapMarker = { id: string; name: string; category: MapCategory; x: number; y: number; note?: string };

export const markersConfirmed = false; // set true once real pixel coordinates are sourced

// x / y are percentages (0–100), schematic placement only — see note above.
export const markers: MapMarker[] = [
  { id: 'silverveil-lake', name: 'Silverveil Lake', category: 'fishing', x: 60, y: 38, note: 'Confirmed lake — fishing and the Hosu mermaid family.' },
  { id: 'cave-of-echoes', name: 'Cave of Echoes', category: 'foraging', x: 78, y: 74, note: 'Confirmed mine, lower-left of Misty Shores — copper, then iron and gold as the story progresses.' },
  { id: 'town-hall', name: 'Town Hall', category: 'shop', x: 50, y: 50, note: 'Confirmed — registration, Chester, and the Albertus\u2019 Jobs board.' },
  { id: 'webb-of-wonders', name: 'Webb of Wonders', category: 'shop', x: 46, y: 46, note: 'Confirmed — Sabrina\u2019s shop, Alter Ego Elixir and spells.' },
  { id: 'howling-hammer', name: 'Howling Hammer', category: 'shop', x: 54, y: 48, note: 'Confirmed — Ridge\u2019s tool-upgrade shop, open Mon\u2013Fri 6 PM\u2013midnight.' },
  { id: 'saga', name: 'Saga (Werewolf)', category: 'npc', x: 82, y: 44, note: 'Confirmed romance option — houseboat near Town Hall.' },
  { id: 'luna', name: 'Luna (Witch)', category: 'npc', x: 34, y: 40, note: 'Confirmed romance option — nature witch, surname Aranea, in Moonlit Pines.' },
  { id: 'misty-shores', name: 'Misty Shores', category: 'foraging', x: 74, y: 68, note: 'Confirmed area, unlocked via "A Bridge Too Far."' },
  { id: 'farm', name: 'Your Farm', category: 'farm', x: 22, y: 30, note: 'Your homestead — the starting point.' },
];
