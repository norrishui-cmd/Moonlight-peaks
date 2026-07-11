// src/data/farm-crops.ts
// Official crop database, sourced from the game's official wiki (moonlightpeaks.wiki.gg/wiki/Crops,
// CC-BY-SA licensed). Facts (names, seasons, mechanics) are reproduced in our own words/structure;
// we do not copy the wiki's images or exact table markup.

export type FarmlandCrop = {
  name: string;
  seasons: string[]; // empty = not yet confirmed which seasons
  magical: boolean;
  harvestDays?: number;
  regrowDays?: number;
  yieldPerHarvest?: number;
  sellPrice?: number;
  seedPrice?: number;
  note?: string;
};

export const farmlandCrops: FarmlandCrop[] = [
  { name: 'Blackberry', seasons: [], magical: false },
  { name: 'Black Sun Currant', seasons: [], magical: true },
  { name: 'Blood Grapes', seasons: ['Spring', 'Summer'], magical: false, harvestDays: 5, regrowDays: 4, yieldPerHarvest: 3, sellPrice: 5, seedPrice: 20 },
  { name: 'Blood Tomato', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Blueberry', seasons: ['Spring', 'Winter'], magical: false },
  { name: 'Carrot', seasons: ['Spring'], magical: false },
  { name: 'Clawy Vera', seasons: [], magical: true },
  { name: 'Cranberry', seasons: [], magical: false },
  { name: 'Cruelcumber', seasons: ['Spring'], magical: false },
  { name: 'Dark Strawberry', seasons: [], magical: true },
  { name: 'Drikker', seasons: [], magical: true, note: 'Requires you to fill its cup with water to grow.' },
  { name: 'Eggplant', seasons: ['Spring'], magical: false },
  { name: 'Gobbler', seasons: [], magical: true, note: 'Requires you to feed it fish or critters to grow.' },
  { name: 'Hold Me Close', seasons: [], magical: true, note: 'Prevents nearby Weeping Wiccas from crying, turning them into Sweet Wiccas instead.' },
  { name: 'Lava Pepper', seasons: [], magical: false },
  { name: 'Mandrake', seasons: [], magical: true, note: 'Produces an Angry or Happy Mandrake depending on whether other mandrakes are planted nearby.' },
  { name: 'Melon', seasons: [], magical: false },
  { name: 'Moonfruit', seasons: [], magical: true },
  { name: 'Onion', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Pumpkin', seasons: [], magical: false },
  { name: 'Radish', seasons: [], magical: false },
  { name: 'Raspberry', seasons: ['Spring', 'Summer'], magical: false },
  { name: 'Red Corn', seasons: [], magical: false },
  { name: 'Rice', seasons: ['Spring', 'Summer', 'Autumn'], magical: false, harvestDays: 5, yieldPerHarvest: 1, sellPrice: 60, seedPrice: 30 },
  { name: 'Skunktail', seasons: [], magical: false },
  { name: 'Strawberry', seasons: ['Spring', 'Summer'], magical: false },
  { name: 'Sugarbones', seasons: ['Spring', 'Summer'], magical: false },
  { name: 'Sunburst', seasons: [], magical: true },
  { name: 'Void Radish', seasons: [], magical: true },
  { name: 'Weeping Wicca', seasons: [], magical: true, note: 'Cries to magically water a 3x3 patch of farmland around it.' },
  { name: 'White Grapes', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Wild Potato', seasons: ['Spring'], magical: false },
  { name: 'Wily Wheat', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Common Mushroom', seasons: [], magical: false, note: 'Grows instantly when watered, and spreads to neighboring farmland if watered again once fully grown.' },
  { name: 'Frosteria', seasons: [], magical: false, note: 'Same instant-growth/spreading behavior as Common Mushroom.' },
  { name: 'Glowglammer', seasons: [], magical: false, note: 'Same instant-growth/spreading behavior as Common Mushroom.' },
  { name: 'Yellow Glowglammer', seasons: [], magical: false, note: 'Same instant-growth/spreading behavior as Common Mushroom.' },
  { name: 'Volacio Mushroom', seasons: [], magical: false, note: 'Same instant-growth/spreading behavior as Common Mushroom.' },
  { name: 'Amanita', seasons: [], magical: false, note: 'Same instant-growth/spreading behavior as Common Mushroom.' },
];

export type HerbCrop = { name: string; magical: boolean; hasDriedForm: boolean };
export const herbCrops: HerbCrop[] = [
  { name: 'Glow Ginger', magical: false, hasDriedForm: true },
  { name: 'Googly Garlic', magical: true, hasDriedForm: true },
  { name: 'Henbane', magical: true, hasDriedForm: true },
  { name: 'Purple Lavender', magical: false, hasDriedForm: true },
  { name: 'Red Lavender', magical: false, hasDriedForm: false },
  { name: 'Nightshade', magical: true, hasDriedForm: true },
  { name: 'Sage', magical: false, hasDriedForm: true },
  { name: 'Suffrain', magical: false, hasDriedForm: true },
  { name: 'Wolfsbane', magical: true, hasDriedForm: true },
];

export type TreeCrop = { name: string; seasons: string[]; magical: boolean; note?: string };
export const treeCrops: TreeCrop[] = [
  { name: 'Blood Orange Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Cocoa Bean Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Coffee Bean Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Lemon Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
  { name: 'Muse Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: true, note: 'Requires a gramophone nearby to grow.' },
  { name: 'Plum Tree', seasons: ['Spring', 'Summer', 'Autumn', 'Winter'], magical: false },
];
