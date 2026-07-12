// src/data/farm-helpers.ts
// Official farm helper (processing machine) database, sourced from the game's official wiki
// (moonlightpeaks.wiki.gg/wiki/Farm_Helpers, CC-BY-SA licensed). Facts reproduced in our own
// words/structure.

export type FarmHelper = {
  name: string;
  desc: string;
  buildRecipe?: string;
  buildSource?: string;
  outputs?: { name: string; recipe: string }[];
};

export const farmHelpers: FarmHelper[] = [
  {
    name: 'Furnace',
    desc: 'Produces metal bars and charcoal from ore and wood.',
    buildRecipe: '15 Copper Ore + 5 Refined Stone',
    buildSource: 'Workbench',
    outputs: [
      { name: 'Charcoal', recipe: '1 Wood → 1 Charcoal' },
      { name: 'Copper Bar', recipe: '4 Copper Ore + 1 Charcoal → 1 Copper Bar' },
      { name: 'Iron Bar', recipe: '4 Iron Ore + 1 Charcoal → 1 Iron Bar' },
      { name: 'Gold Bar', recipe: '4 Gold Ore + 1 Charcoal → 1 Gold Bar' },
    ],
  },
  {
    name: 'Keg',
    desc: 'Produces juice, beer, and wine from fruit and grain.',
    buildRecipe: '20 Wood',
    buildSource: 'Workbench',
    outputs: [
      { name: 'Beer', recipe: '3 Wily Wheat → 1 Beer' },
      { name: 'Red Wine', recipe: '4 Blood Grapes → 1 Red Wine' },
      { name: 'White Wine', recipe: '4 White Grapes → 1 White Wine' },
      { name: 'Blood Grape Juice', recipe: '3 Blood Grapes → 1 Blood Grape Juice' },
      { name: 'White Grape Juice', recipe: '3 White Grapes → 1 White Grape Juice' },
      { name: 'Blackberry / Blood Orange / Blueberry / Cranberry / Lemon / Melon / Raspberry / Strawberry Juice', recipe: '3 of the matching fruit → 1 juice' },
    ],
  },
  {
    name: 'Refiner',
    desc: 'Refines raw materials (wood, stone, fiber) into usable crafting resources and animal feed.',
    buildRecipe: '20 Wood + 20 Stone',
    buildSource: 'Workbench',
    outputs: [
      { name: 'Fodder', recipe: '1 Fiber → 2 Fodder (sells for 2 coin)' },
      { name: 'Deluxe Fodder', recipe: '50 Fodder + 1 Mana Essence → Deluxe Fodder' },
      { name: 'Hardwood Planks', recipe: '3 Dark Wood → 1 Hardwood Planks (sells for 30 coin)' },
      { name: 'Planks', recipe: '3 Wood → 1 Planks (sells for 15 coin)' },
      { name: 'Refined Stone', recipe: '6 Stone → 1 Refined Stone' },
      { name: 'Soft Planks', recipe: '3 Light Wood → 1 Soft Planks' },
      { name: 'Stone', recipe: '1 Heart Stone → 20 Stone' },
    ],
  },
  {
    name: 'Herb Garden',
    desc: 'A dedicated planting area for herbs that cannot be grown on regular farmland. Confirmed: each Herb Garden has 4 sow spots, and the blueprint comes from Luna via letter alongside the Herb Drying Rack and Mortar. Community-reported tip: don\u2019t place Herb Gardens flush against each other \u2014 doing so blocks access to some of the 4 spots.',
  },
  {
    name: 'Herb Drying Rack',
    desc: 'Dries herbs and other plants for use in cooking and crafting.',
  },
  {
    name: 'Mortar',
    desc: 'Grinds dried herbs and other dried foods into spices.',
  },
  {
    name: 'Bee House',
    desc: 'Houses bees; honey can be collected on an interval by interacting with it.',
    buildRecipe: '10 Hardwood Planks + 20 Fiber',
    buildSource: "Mail from Luna",
  },
  {
    name: 'Loom',
    desc: 'Weaves ethereal threads into cloth-based materials.',
  },
  {
    name: 'Cheese Press',
    desc: 'Presses milk into cheese.',
  },
  {
    name: 'Mana Extractor',
    desc: 'Extracts Mana Essence from magical crops.',
  },
  {
    name: 'Mill',
    desc: 'Grinds resources into finer, powdery materials.',
    buildSource: 'Howling Hammer',
  },
  {
    name: 'Jam Maker',
    desc: 'Turns fruit into jam.',
    outputs: [
      { name: 'Dark Strawberry Jam', recipe: '1 Dark Strawberry + 1 Sugar' },
      { name: 'Mana Moon Jam', recipe: '1 Moonfruit + 1 Sugar + 1 Mana Essence' },
    ],
  },
  {
    name: 'Firefly Sanctuary',
    desc: 'Houses fireflies, which produce Firedrops.',
  },
  {
    name: 'Firefly Pollinator',
    desc: 'Improves plant quality in a 9x9 grid around it.',
  },
  {
    name: 'Chocolatier',
    desc: 'Produces various chocolates.',
  },
  {
    name: 'Seed Sequencer',
    desc: 'Produces seeds.',
  },
];
