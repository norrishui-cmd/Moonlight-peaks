import { GAME } from '../consts';
import { cookingRecipeRows } from './cooking-recipes';

export type ItemCategory = {
  slug: string;
  name: string;
  group: 'Equipment' | 'Resources' | 'Crafting' | 'Creatures' | 'Home';
  status: 'confirmed' | 'datamined' | 'expected';
  dek: string;
  summary: string;
  examples: string[];
  verify: string[];
  related: { label: string; href: string }[];
};

export type ItemFramework = {
  parameters: { label: string; value: string }[];
  columns: string[];
  rows: string[][];
  sourceNote: string;
};

const launchNote = `Specific item names, icons, prices, effects, and locations should be verified against the live game after ${GAME.releaseLabel}.`;
const tbc = 'To be confirmed';

export const itemCategories: ItemCategory[] = [
  {
    slug: 'foraging',
    name: 'Foraging',
    group: 'Resources',
    status: 'confirmed',
    dek: 'Confirmed via the official wiki: produce foraged around town (Moonlit Pines, Howling Marshes, Cave of Echoes, Crystal Cave) plus shells collected on beaches.',
    summary: 'Confirmed via the official Moonlight Peaks wiki: foraging covers both produce (Eggplant, Wild Potato, Sugarbones, Common Mushroom, Glowglammer) found in specific named areas, and shells (White Conch, Pink Conch in small/large sizes, Blue Clam, Maxima Clam) collected on beaches. Star-quality versions sell for more \u2014 e.g. a base Eggplant sells for 90, a 1-star Eggplant for 110. Not every entry has a confirmed star-quality price yet; those are marked as unconfirmed rather than guessed.',
    examples: ['Eggplant (Moonlit Pines)', 'Wild Potato (Moonlit Pines)', 'Sugarbones (Howling Marshes)', 'Common Mushroom (Cave of Echoes / Farm in Summer)', 'Glowglammer (Crystal Cave)', 'White Conch, Pink Conch, Blue Clam, Maxima Clam (Beaches)'],
    verify: ['Full seasonal/weather conditions for each foraged item', 'Whether more foraging produce exists beyond these 5 confirmed items', 'Exact beach locations for shell collection'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Environment', href: '/environment' }, { label: 'Cooking', href: '/items/cooking' }],
  },
  {
    slug: 'tools',
    name: 'Tools',
    group: 'Equipment',
    status: 'confirmed',
    dek: 'Farm and utility equipment for planting, watering, gathering, mining, and maintaining your moonlit homestead.',
    summary: 'Confirmed starting kit, accessed via the tool wheel (hold the right shoulder button on Switch): Shovel (there is no separate hoe — the shovel handles that job), Watering Can, Axe, Pickaxe, Scythe, and a broken Wand. The Fishing Rod and Net (bug net) are unlocked separately through character quests rather than bought outright, and tool upgrades run through a single blacksmith, Ridge, at his shop (most commonly named the Howling Hammer).',
    examples: ['Shovel (also tills — no separate hoe)', 'Watering Can (3-tier upgrade: 1,000 / 2,000 / 3,500 coins, each tier reduces water use per tile)', 'Axe (upgrades reduce hits to chop trees, unlock stronger wood)', 'Pickaxe (upgrades reduce hits to break rocks, unlock bigger rocks/minerals like copper, iron, gold — confirmed top upgrade priority)', 'Scythe (upgrades reduce energy cost clearing grass)', 'Fishing Rod (single Premium upgrade: 3,500 coins + 3 Gold Bars, improves efficiency and catch size; unlocked via a bet with Noel, not bought)', 'The Net / bug net (catches bugs and Soul Blobs; unlocked via Death after the "A Bridge Too Far" quest)', 'The Broom (a movement-speed tool)', 'Wand (starts broken; fixed via a quest chain through Luna and Sabrina/Noel, not the standard upgrade shop)'],
    verify: ['Enchanted/max-tier effects for each tool (reported: the enchanted watering can removes refilling entirely)', 'Full upgrade material lists beyond ore', 'Broom\u2019s exact speed bonus'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Beginner guide', href: '/beginner-guide' }, { label: 'Map', href: '/map' }, { label: 'Fishing', href: '/fishing' }],
  },
  {
    slug: 'fertilizer',
    name: 'Fertilizer',
    group: 'Resources',
    status: 'confirmed',
    dek: 'Confirmed source: your farm animals produce fertilizer as a byproduct, alongside milk and wool, and it raises crop quality.',
    summary: 'Confirmed via community testing: fertilizer comes from your farm animals as a byproduct alongside milk and wool, and using it measurably increases crop quality \u2014 worth the effort of keeping animals fed and happy even before you factor in the milk/wool income. Fodder and Premium Fodder (kept in a trough) are the confirmed way to feed animals overnight so their products are ready when you wake.',
    examples: ['Animal-produced fertilizer', 'Fodder / Premium Fodder (animal feed)', 'Crop-quality boosters'],
    verify: ['Exact fertilizer application method', 'Quality-boost percentage', 'Whether a separate craftable fertilizer also exists'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Environment', href: '/environment' }, { label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'clothing',
    name: 'Clothing',
    group: 'Home',
    status: 'confirmed',
    dek: 'Confirmed: outfit sets, tops, bottoms, shoes, and accessories, changeable any time via a mirror in your house — separate from the Alter Ego Elixir potion, which does not affect clothing.',
    summary: 'Confirmed at launch: clothing is organized into Outfit Sets, Tops, Bottoms, and Shoes, plus a separate Accessories category (Arms, Face). Everything you wear during character creation is permanently unlocked in your wardrobe, so you never have to re-buy your starting look. Beyond the creator, new clothing is bought from Aras at Third Eye Threads (the Khazan family tailor). Clothing changes happen anytime via a mirror inside your house — this is a separate, free mechanism from the Alter Ego Elixir (a 1,300-gold one-time potion from Sabrina at Webb of Wonders that changes hairstyle, hair color, skin tone, eye color, eyebrows, and makeup, but explicitly does not touch clothing or accessories).',
    examples: ['Outfit Sets (e.g. dresses, overalls)', 'Tops', 'Bottoms', 'Shoes', 'Accessories \u2014 Arms', 'Accessories \u2014 Face', 'Starting character-creator outfit (permanently unlocked in your wardrobe)'],
    verify: ['Exact clothing item names and prices at Third Eye Threads', 'Whether clothing rotates seasonally', 'Full accessory list beyond Arms/Face'],
    related: [{ label: 'Character creator', href: '/character-creator' }, { label: 'Aras', href: '/characters/aras' }, { label: 'Demo guide', href: '/demo' }],
  },
  {
    slug: 'fish',
    name: 'Fish',
    group: 'Resources',
    status: 'confirmed',
    dek: 'A confirmed fish collection of roughly 22 species across multiple zones, quality tiers, and a memorable way to get your first rod.',
    summary: 'Confirmed via two independent sources: you meet Noel by the river within your first few in-game days, and he challenges you to catch 3 different fish types before he does \u2014 win (it\u2019s untimed, so easy) and he gives you your first fishing rod plus a coin reward. The collection runs to roughly 22 species, each with its own base sell value and energy restored, both of which increase at 1-Star and 2-Star quality. Which fish appear depends on location, season, weather, and time of day, so a fish you can\u2019t find one night may simply be waiting on the right conditions rather than missing from the game.',
    examples: ['Lake fish', 'River fish', 'Rare/quality-tiered fish (Regular / 1-Star / 2-Star)', 'Cooking ingredients'],
    verify: ['Exact catch locations per species', 'Full season/weather/time rules', 'Complete sell price table'],
    related: [{ label: 'Activities', href: '/activities/fishing' }, { label: 'Map', href: '/map' }, { label: 'Locations', href: '/locations' }],
  },
  {
    slug: 'cooking',
    name: 'Cooking',
    group: 'Crafting',
    status: 'confirmed',
    dek: 'A cooking station from day one, 140+ recipe rows across Food, Soup & Stew, Sushi, Jam, Dessert, and Beverage tables.',
    summary: 'Confirmed via the supplied Moonlight Peaks wiki screenshots: the cooking database now covers Food, Soup & Stew, Sushi, Jam, Dessert, and Beverage recipes. Each row tracks cooking method, energy by base/1-star/2-star quality, ingredients, and sell price by quality where the screenshots show a value. A dash means that field was blank or not confirmed in the captured table, rather than guessed.',
    examples: ['Bread, burgers, burritos, pizza, and cheese dishes', 'Soup, stew, sushi, and maki recipes', 'Jam, cake, cupcake, pudding, juice, milkshake, tea, and wine recipes', 'Recipes requiring Cooking Station, Cheese Press, Enchanted Mortar, Herb Drying Rack, Mill, Jam Maker, or Keg'],
    verify: ['Blank method, energy, ingredient, and price cells in the captured wiki tables', 'Where each additional recipe book or unlock is obtained', 'Full player-facing effects beyond the energy and sell-price values shown'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Foraging', href: '/items/foraging' }, { label: 'Fish', href: '/items/fish' }, { label: 'Romance gift finder', href: '/tools/romance-gift-finder' }],
  },
  {
    slug: 'crafting',
    name: 'Crafting',
    group: 'Crafting',
    status: 'confirmed',
    dek: 'Materials, recipes, workbench items, and homestead upgrades players can make or assemble — including confirmed Dark Wood, used in several decoration recipes.',
    summary: 'Crafting is a core wiki category because players search for recipes, ingredients, and unlocks. Confirmed: Dark Wood is a real crafting material, obtained by chopping oversized logs found around the farm area with a Copper Axe (an upgraded axe tier, not the starting one). It\'s used in several decoration recipes, including a Fur Chair (with hardwood planks and cloth) and a Coffin Bookcase (with planks). Beyond Dark Wood, exact crafting stations, other materials, and full recipe lists are still being verified rather than guessed at here.',
    examples: ['Dark Wood (from farm-area logs, Copper Axe)', 'Crafting materials', 'Workbench recipes', 'Utility items', 'Upgrade components'],
    verify: ['Recipe requirements', 'Crafting station', 'Unlock source', 'Output quantity'],
    related: [{ label: 'Tools', href: '/items/tools' }, { label: 'Mineables', href: '/items/mineables' }, { label: 'Decorations', href: '/items/decorations' }],
  },
  {
    slug: 'artifacts',
    name: 'Artifacts',
    group: 'Resources',
    status: 'datamined',
    dek: 'Collectible curios likely connected to exploration, ruins, mines, museum-style tracking, or quests.',
    summary: 'Artifact pages aim to help completionist players track what they have found, where each item appears, and whether it is used for donations, quests, gifts, or lore. The exact system is not yet independently confirmed here.',
    examples: ['Collectible artifacts', 'Exploration finds', 'Rare curios', 'Lore objects'],
    verify: ['Where each artifact appears', 'Rarity', 'Donation or quest use', 'Whether duplicates can be sold'],
    related: [{ label: 'Locations', href: '/locations' }, { label: 'Map', href: '/map' }, { label: 'Environment', href: '/environment' }],
  },
  {
    slug: 'livestock',
    name: 'Livestock',
    group: 'Creatures',
    status: 'confirmed',
    dek: 'Confirmed farm animals, the Barn purchase flow, and feed tiers.',
    summary: 'Confirmed at launch: you need a Barn before owning any animals \u2014 buy one from Ridge for 4,000 gold plus materials. Once built, buy livestock from Luna (only the animals currently waiting outside her house). Feed is handled through Fodder (made via a refiner) and a later, better Premium Fodder tier.',
    examples: ['Cheeken (a common first animal; likes petting and hats)', 'Piggoat', 'Draculamb', 'Cowcula'],
    verify: ['Exact per-animal purchase prices', 'What each animal produces and how often', 'Fodder/Premium Fodder crafting requirements', 'Whether more animal types unlock later'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Ridge', href: '/characters/ridge' }, { label: 'Luna', href: '/characters/luna' }],
  },
  {
    slug: 'potions',
    name: 'Potions',
    group: 'Crafting',
    status: 'confirmed',
    dek: 'A confirmed cauldron system: Fiona teaches your first recipe, Sabrina sells more, and brewing just needs a recipe, ingredients, and time.',
    summary: 'Confirmed via Bonus Action: you unlock a cauldron early in the story, and Fiona teaches you your first potion recipe. After that, Sabrina stocks additional potion recipes for sale at Webb of Wonders. Brewing itself is straightforward \u2014 select a recipe you have the ingredients for, interact with the cauldron, and wait, similar to how juice or wine takes time to finish, then collect the result once it\u2019s done. The Alter Ego Elixir (changes hairstyle, hair color, skin tone, eye color, eyebrows, and makeup) is the clearest confirmed example of what a potion can do.',
    examples: ['Alter Ego Elixir', 'Fiona\u2019s starter recipe', 'Sabrina-sold recipes (Webb of Wonders)', 'Utility brews'],
    verify: ['Full potion list beyond the confirmed Alter Ego Elixir', 'Exact ingredients per recipe', 'Brew time per potion'],
    related: [{ label: 'Magic', href: '/magic' }, { label: 'Character creator', href: '/character-creator' }, { label: 'Crafting', href: '/items/crafting' }],
  },
  {
    slug: 'mineables',
    name: 'Mineables',
    group: 'Resources',
    status: 'confirmed',
    dek: 'Ores, gems, and refinable resources gathered underground with no combat, plus a magic pickaxe spell.',
    summary: 'Confirmed: mining in Moonlight Peaks has no combat \u2014 you gather ore and crystals from caverns and catacombs to feed your furnace, tools, and upgrades. Copper Ore specifically is found in the Cave of Echoes, unlocked via "A Bridge Too Far." Raw materials need refining (ore to ingots, stone to refined stone) at a refinement station, which takes time \u2014 reported tip: load up refiners before ending your night so materials are ready when you wake. Mining also yields blueprints for furniture and devices, and digging up glowing circles scattered around the map gives random rewards.',
    examples: ['Copper Ore (Cave of Echoes)', 'Ingots (refined from ore)', 'Gems and crystals', 'Mining blueprints'],
    verify: ['Full ore/gem tier list beyond Copper', 'Exact refinement times', 'Iron and Gold ore locations'],
    related: [{ label: 'Locations', href: '/locations/mines' }, { label: 'Crafting', href: '/items/crafting' }, { label: 'Tools', href: '/items/tools' }],
  },
  {
    slug: 'decorations',
    name: 'Decorations',
    group: 'Home',
    status: 'confirmed',
    dek: 'Furniture and decor confirmed to include multi-piece sets, multiple colorways, and a magic-powered placement system.',
    summary: 'Confirmed via a review and a first-week guide: Ridge sells furniture in themed sets (e.g. a kitchen or bedroom set) with multiple colorways, so filling a room doesn\u2019t mean buying pieces one at a time. Furniture is also grouped by style (e.g. a country-kitchen look versus a more modern one). A confirmed magic ability lets you levitate and move furniture and even small objects directly, instead of picking items up into an inventory and placing them elsewhere \u2014 this streamlines decorating and farm layout changes. Any critter or fish you catch can also be displayed as decoration. Some decor pieces come specifically from mining blueprints, and decorative (and cooking) recipes can also be found by digging glowing swirl spots on the ground.',
    examples: ['Furniture sets (kitchen, bedroom, etc.)', 'Multiple colorways per piece', 'Displayed critters/fish', 'Blueprint-sourced decor'],
    verify: ['Full furniture catalog and prices', 'Placement rules beyond the confirmed levitation ability', 'Seasonal or event-exclusive decor'],
    related: [{ label: 'Your cottage', href: '/locations/your-cottage' }, { label: 'Activities', href: '/activities/decorating' }, { label: 'Clothing', href: '/items/clothing' }],
  },
];

export const itemCategoryBySlug = new Map(itemCategories.map((item) => [item.slug, item]));
export const itemLaunchNote = launchNote;

export const itemFrameworks: Record<string, ItemFramework> = {
  tools: {
    parameters: [
      { label: 'Data status', value: 'Confirmed at launch — starting kit and most upgrade costs verified' },
      { label: 'Primary use', value: 'Farming, gathering, fishing, bug/Soul Blob catching, spellcasting' },
      { label: 'Upgrade source', value: 'Ridge, at his shop (commonly named the Howling Hammer), weekdays only' },
    ],
    columns: ['Tool', 'Starting kit?', 'How to get', 'Upgrade cost', 'Effect', 'Related system'],
    rows: [
      ['Shovel', 'Yes', 'Given at the start — no separate hoe exists', tbc, 'Tills soil and digs; doubles as the hoe', 'Farming'],
      ['Watering Can', 'Yes', 'Given at the start', '3 tiers: 1,000 / 2,000 / 3,500 coins', 'Each tier reduces water used per tile', 'Farming'],
      ['Axe', 'Yes', 'Given at the start', tbc, 'Fewer hits to chop trees; unlocks stronger wood over tiers', 'Farming'],
      ['Pickaxe', 'Yes', 'Given at the start', tbc, 'Fewer hits to break rocks; unlocks bigger rocks/minerals (copper, iron, gold) — confirmed top upgrade priority', 'Mining'],
      ['Scythe', 'Yes', 'Given at the start', tbc, 'Reduces energy cost when clearing grass', 'Farming'],
      ['Wand', 'Yes (starts broken)', 'Fixed via a quest chain: the Dinner Party event \u2192 Luna \u2192 Sabrina \u2192 actually fixed by Noel, with duct tape', 'No standard shop upgrade path', 'Enables spellcasting (Aquaflux and more)', 'Magic'],
      ['Fishing Rod', 'No', 'Win a 250-gold bet vs. Noel (catch 3 different fish before he does)', 'Single Premium upgrade: 3,500 coins + 3 Gold Bars', 'Premium tier improves efficiency and catch size', 'Fishing'],
      ['The Net (bug net)', 'No', 'Given by Death after the "A Bridge Too Far" quest unlocks Misty Shores', tbc, 'Catches bugs and Soul Blobs', 'Soul Blobs / Critters'],
      ['The Broom', 'No', tbc, tbc, 'A movement-speed tool', 'Movement'],
    ],
    sourceNote: 'Costs and unlock methods above are confirmed from launch-week guides; blank ("To be confirmed") cells are genuinely unverified, not omitted for space.',
  },
  fertilizer: {
    parameters: [
      { label: 'Data status', value: 'Category known; exact products pending' },
      { label: 'Key fields', value: 'Growth speed, crop quality, yield, compatible crops' },
      { label: 'Comparison angle', value: 'Best fertilizer for profit, flowers, rare crops, and early game' },
    ],
    columns: ['Fertilizer', 'Effect', 'Compatible crops', 'Source', 'Stacking', 'Best use'],
    rows: [
      ['Growth fertilizer', 'Growth-speed effect pending', tbc, tbc, tbc, 'Fast harvest planning'],
      ['Quality fertilizer', 'Quality or sell-value effect pending', tbc, tbc, tbc, 'Profit routes'],
      ['Flower fertilizer', 'Flower or enchanted crop effect pending', tbc, tbc, tbc, 'Decorative and magical crops'],
    ],
    sourceNote: 'Do not claim percentage boosts until the live item tooltip confirms them.',
  },
  clothing: {
    parameters: [
      { label: 'Data status', value: 'Category known; individual cosmetics pending' },
      { label: 'Key fields', value: 'Slot, style, color, shop/source, unlock condition' },
      { label: 'SEO use', value: 'Outfit lists, cosmetic unlocks, shop inventory, character creator expansion' },
    ],
    columns: ['Clothing item', 'Slot', 'Style/theme', 'Source', 'Unlock', 'Stats/effect'],
    rows: [
      ['Hat or headwear item', tbc, tbc, tbc, tbc, 'Cosmetic unless confirmed otherwise'],
      ['Outfit piece', tbc, tbc, tbc, tbc, 'Cosmetic unless confirmed otherwise'],
      ['Accessory', tbc, tbc, tbc, tbc, 'Cosmetic unless confirmed otherwise'],
    ],
    sourceNote: 'Only add item names when they appear in-game or in official media.',
  },
  foraging: {
    parameters: [
      { label: 'Data status', value: 'Confirmed via the official wiki' },
      { label: 'Key fields', value: 'Location, sell price (base and 1-star quality)' },
      { label: 'Categories', value: 'Foraged produce and beach shells' },
    ],
    columns: ['Item', 'Location', 'Sell Price (base)', 'Sell Price (1-star)'],
    rows: [
      ['Eggplant', 'Moonlit Pines', '90', '110'],
      ['Wild Potato', 'Moonlit Pines', '20', '25'],
      ['Sugarbones', 'Howling Marshes', '30', 'Not yet confirmed'],
      ['Common Mushroom', 'Cave of Echoes; Farm (Summer)', '10', '11'],
      ['Glowglammer', 'Crystal Cave', '20', '25'],
      ['White Conch (Small)', 'Beaches', '10', 'Not yet confirmed'],
      ['Pink Conch (Small)', 'Beaches', '10', 'Not yet confirmed'],
      ['White Conch (Large)', 'Beaches', '30', 'Not yet confirmed'],
      ['Pink Conch (Large)', 'Beaches', '30', 'Not yet confirmed'],
      ['Blue Clam', 'Beaches', '10', 'Not yet confirmed'],
      ['Maxima Clam', 'Beaches', '30', 'Not yet confirmed'],
    ],
    sourceNote: 'Sourced directly from the official Moonlight Peaks wiki\u2019s foraging tables. Fields the wiki itself hasn\u2019t filled in yet are marked "Not yet confirmed" rather than guessed.',
  },
  cooking: {
    parameters: [
      { label: 'Data status', value: 'Captured from supplied wiki screenshots, 140+ recipe rows documented' },
      { label: 'Key fields', value: 'Cooking method, energy, ingredients, sell price by quality (base / 1-star / 2-star)' },
      { label: 'Categories', value: 'Food, Soup & Stew, Sushi, Jam, Dessert, Beverage' },
    ],
    columns: ['Recipe', 'Category', 'Method', 'Energy (base / \u2605 / \u2605\u2605)', 'Ingredients', 'Sell Price (base / \u2605 / \u2605\u2605)'],
    rows: cookingRecipeRows,
    sourceNote: 'Cooking rows were transcribed from the supplied Moonlight Peaks wiki screenshots. Dash values mean the captured table showed a blank, missing, or unconfirmed value. Violet Sashimi and Dried Seaweed are retained from the existing codebase because they were already present as confirmed cooking rows.',
  },
  fish: {
    parameters: [
      { label: 'Data status', value: 'Fishing is confirmed; fish list pending' },
      { label: 'Key fields', value: 'Location, season, weather, time, rarity, sell value, recipe use' },
      { label: 'Useful filters', value: 'By location, time window, cooking use, collection completion' },
    ],
    columns: ['Fish', 'Location', 'Season', 'Weather', 'Time', 'Rarity', 'Sell value', 'Uses'],
    rows: [
      ['Lake fish entry', 'Lake or water area', tbc, tbc, tbc, tbc, tbc, 'Cooking / collection pending'],
      ['Rare night fish entry', tbc, tbc, tbc, 'Night window pending', tbc, tbc, 'Collection pending'],
      ['Recipe fish entry', tbc, tbc, tbc, tbc, tbc, tbc, 'Cooking use pending'],
    ],
    sourceNote: 'Fishing details should come from live catch screens, recipe screens, or official guides only.',
  },
  critters: {
    parameters: [
      { label: 'Data status', value: 'Category known; critter behavior pending' },
      { label: 'Key fields', value: 'Biome, season, time, weather, catch method, collection reward' },
      { label: 'Player intent', value: 'Where to find each critter and whether it is needed for completion' },
    ],
    columns: ['Critter', 'Location/biome', 'Season', 'Time', 'Weather', 'Catch method', 'Use'],
    rows: [
      ['Forest critter entry', 'Forest or wild area', tbc, tbc, tbc, tbc, 'Collection use pending'],
      ['Water-side critter entry', 'Lake or pier area', tbc, tbc, tbc, tbc, 'Collection use pending'],
      ['Rare critter entry', tbc, tbc, tbc, tbc, tbc, 'Reward pending'],
    ],
    sourceNote: 'Avoid inventing critter names until live capture or collection pages are visible.',
  },
  vampster: {
    parameters: [
      { label: 'Data status', value: 'Confirmed at launch as a side-quest creature' },
      { label: 'Confirmed role', value: 'Small black creature tied to a homestead side-quest' },
      { label: 'Key rule', value: 'Only carried in bat/vampire form — not stored in your regular inventory' },
    ],
    columns: ['Entry', 'Role', 'Where found', 'Interaction', 'Variants', 'Confirmed?'],
    rows: [
      ['Vampster', 'Side-quest creature', 'Hidden around your homestead/land', 'Carry one at a time (bat/vampire form only, not inventory); deliver to a cave near Orlock\u2019s mansion', tbc, 'Confirmed'],
      ['Vampster variant entry', tbc, tbc, tbc, tbc, 'Not yet verified'],
    ],
    sourceNote: 'Total Vampster count and any quest reward are not yet sourced — this row will expand as those are confirmed.',
  },
  'soul-blobs': {
    parameters: [
      { label: 'Data status', value: 'Confirmed at launch — count and reward verified' },
      { label: 'Confirmed total', value: '100 Soul Blobs scattered around the world' },
      { label: 'Confirmed reward', value: 'Collecting all 100 rewards the Antique Clock (extends night length 15\u219225 min)' },
    ],
    columns: ['Soul Blob entry', 'Source', 'Drop/location', 'Use', 'Sell value', 'Quest/crafting link'],
    rows: [
      ['Soul Blob', 'Death introduces them after your second in-town meeting with him', 'Scattered around the world (exact zones not yet mapped)', 'Caught with the Net, not by hand', tbc, 'Collect all 100 for the Antique Clock (extends night from 15 to 25 minutes)'],
      ['Rare Soul Blob entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'The 100-count and Antique Clock reward are confirmed; exact spawn zones and any sell value are not yet sourced.',
  },
  crafting: {
    parameters: [
      { label: 'Data status', value: 'Crafting category known; recipe list pending' },
      { label: 'Key fields', value: 'Materials, station, output, unlock, use, related quest' },
      { label: 'Useful filters', value: 'By station, ingredient, upgrade path, decoration use' },
    ],
    columns: ['Crafted item', 'Materials', 'Station', 'Output', 'Unlock', 'Use'],
    rows: [
      ['Workbench recipe entry', tbc, tbc, tbc, tbc, tbc],
      ['Utility item entry', tbc, tbc, tbc, tbc, tbc],
      ['Upgrade component entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Keep recipes marked pending until the exact material counts are verified.',
  },
  artifacts: {
    parameters: [
      { label: 'Data status', value: 'Category known; artifact list pending' },
      { label: 'Key fields', value: 'Find location, discovery method, rarity, donation use, duplicate value' },
      { label: 'Completion angle', value: 'Museum-style tracking, lore notes, rare finds, quest requirements' },
    ],
    columns: ['Artifact', 'Location', 'How to find', 'Rarity', 'Donation/quest use', 'Duplicate value'],
    rows: [
      ['Artifact entry', tbc, tbc, tbc, tbc, tbc],
      ['Rare artifact entry', tbc, tbc, tbc, tbc, tbc],
      ['Lore object entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Artifact lore should remain blank until the game text is visible.',
  },
  'farm-helpers': {
    parameters: [
      { label: 'Data status', value: 'Category known; helper mechanics pending' },
      { label: 'Key fields', value: 'Unlock, task, schedule, care need, range, limit' },
      { label: 'Player intent', value: 'Automation, farm layout, daily route planning' },
    ],
    columns: ['Helper', 'Unlock', 'Tasks', 'Schedule', 'Care needed', 'Limits'],
    rows: [
      ['Helper entry', tbc, tbc, tbc, tbc, tbc],
      ['Farm support entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Do not imply automation until the live game confirms the helper behavior.',
  },
  potions: {
    parameters: [
      { label: 'Data status', value: 'Potion brewing confirmed; full recipe list pending' },
      { label: 'Confirmed example', value: 'Alter Ego Elixir changes appearance' },
      { label: 'Key fields', value: 'Ingredients, station, effect, duration, unlock, limits' },
    ],
    columns: ['Potion', 'Ingredients', 'Station', 'Effect', 'Duration', 'Unlock/source'],
    rows: [
      ['Alter Ego Elixir', tbc, 'Sold by Sabrina at Webb of Wonders (not brewed by the player)', 'Changes appearance', tbc, 'Sabrina / Webb of Wonders shop'],
      ['Utility potion entry', tbc, tbc, tbc, tbc, tbc],
      ['Transformation potion entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'The Alter Ego Elixir effect is safe to mention; all recipe details still need verification.',
  },
  mineables: {
    parameters: [
      { label: 'Data status', value: 'Mines are reported; resource list pending' },
      { label: 'Key fields', value: 'Mine area, floor/zone, node type, tool tier, drop rate, use' },
      { label: 'Useful filters', value: 'By upgrade material, crafting recipe, location, rarity' },
    ],
    columns: ['Mineable', 'Area/zone', 'Node/source', 'Tool requirement', 'Rarity', 'Uses'],
    rows: [
      ['Ore entry', tbc, tbc, tbc, tbc, 'Crafting / upgrade use pending'],
      ['Gem entry', tbc, tbc, tbc, tbc, 'Gift / sale use pending'],
      ['Mineral entry', tbc, tbc, tbc, tbc, 'Collection use pending'],
    ],
    sourceNote: 'Do not add floor numbers or drop rates without live-game evidence.',
  },
  decorations: {
    parameters: [
      { label: 'Data status', value: 'Decorating is confirmed; decor catalog pending' },
      { label: 'Key fields', value: 'Type, size, placement, shop/source, price, theme, seasonal availability' },
      { label: 'Player intent', value: 'Furniture catalog, room ideas, shop rotations, seasonal decor' },
    ],
    columns: ['Decoration', 'Type', 'Theme', 'Source', 'Price', 'Placement/size'],
    rows: [
      ['Furniture entry', tbc, tbc, tbc, tbc, tbc],
      ['Wall or floor decor entry', tbc, tbc, tbc, tbc, tbc],
      ['Seasonal decoration entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Decor names, prices, and dimensions should come from shop screens or item tooltips.',
  },
};

export const getItemFramework = (slug: string): ItemFramework => itemFrameworks[slug] ?? {
  parameters: [{ label: 'Data status', value: 'Pending launch verification' }],
  columns: ['Entry', 'Source', 'Use', 'Status'],
  rows: [['Category entry', tbc, tbc, tbc]],
  sourceNote: launchNote,
};
