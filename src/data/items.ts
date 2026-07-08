import { GAME } from '../consts';

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
    status: 'datamined',
    dek: 'Crop boosters and soil helpers likely tied to enchanted farming, glowing flowers, and efficient garden planning.',
    summary: 'Fertilizer pages are useful for players comparing growth speed, crop quality, yield, and profit routes. Moonlight Peaks has enchanted crops and glowing flowers, so this category is reserved for verified fertilizer effects once launch data is available.',
    examples: ['Growth boosters', 'Quality boosters', 'Flower-focused soil helpers', 'General crop enhancers'],
    verify: ['Exact effect text', 'Which crops benefit', 'Crafting or shop source', 'Whether fertilizer stacks'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Environment', href: '/environment' }, { label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'clothing',
    name: 'Clothing',
    group: 'Home',
    status: 'datamined',
    dek: 'Outfit pieces and style items for players who want to customize their vampire beyond the character creator.',
    summary: 'Clothing is an important long-tail search topic because players look for outfit lists, shops, unlocks, and cosmetic screenshots. This page keeps the category ready without inventing clothing names before the full game can be checked.',
    examples: ['Hats and accessories', 'Outfit pieces', 'Seasonal clothing', 'Character creator extensions'],
    verify: ['Shop source', 'Unlock conditions', 'Whether clothing changes stats', 'Preview images and names'],
    related: [{ label: 'Character creator', href: '/character-creator' }, { label: 'Demo guide', href: '/demo' }, { label: 'Characters', href: '/characters' }],
  },
  {
    slug: 'fish',
    name: 'Fish',
    group: 'Resources',
    status: 'datamined',
    dek: 'Fishing collection pages for locations, seasons, sale value, cooking use, and completion tracking.',
    summary: 'Fishing is already a confirmed demo activity, so fish will become one of the most useful item categories after launch. The page is designed to hold catch locations, time windows, season rules, rarity, and uses.',
    examples: ['Lake fish', 'River fish', 'Rare fish', 'Cooking ingredients'],
    verify: ['Catch locations', 'Season and weather rules', 'Sale price', 'Cooking or gift uses'],
    related: [{ label: 'Activities', href: '/activities/fishing' }, { label: 'Map', href: '/map' }, { label: 'Locations', href: '/locations' }],
  },
  {
    slug: 'critters',
    name: 'Critters',
    group: 'Creatures',
    status: 'datamined',
    dek: 'Small creatures, collectible wildlife, or catchable beings that may appear around the map.',
    summary: 'Critter pages are common in life sim wikis because players search for where to find them, whether they are seasonal, and what they are used for. For Moonlight Peaks, this category stays cautious until exact creature behavior is confirmed.',
    examples: ['Catchable critters', 'Forage-adjacent wildlife', 'Seasonal creatures', 'Collection targets'],
    verify: ['Spawn locations', 'Season rules', 'Collection rewards', 'Whether critters can be gifted or sold'],
    related: [{ label: 'Environment', href: '/environment' }, { label: 'Map', href: '/map' }, { label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'vampster',
    name: 'Vampster',
    group: 'Creatures',
    status: 'confirmed',
    dek: 'Small black creatures hidden around your land, tied to a confirmed side-quest.',
    summary: 'Confirmed at launch: Vampsters are small black creatures hiding around your homestead. You can only carry one at a time, and only while in your bat/vampire form — they don\u2019t go in your regular inventory. The quest is to bring each one you find to a cave near Orlock\u2019s mansion.',
    examples: ['Small black creatures found around your farm/land'],
    verify: ['Total number of Vampsters', 'Reward for completing the quest', 'Whether more appear over time'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Orlock', href: '/characters/orlock' }, { label: 'Shapeshifting', href: '/shapeshifting' }],
  },
  {
    slug: 'soul-blobs',
    name: 'Soul Blobs',
    group: 'Resources',
    status: 'confirmed',
    dek: 'Floating spectral collectibles you round up for Death using the Net, with a confirmed total count and reward.',
    summary: 'Confirmed at launch: Death introduces Soul Blobs after your second meeting with him in town, and asks you to round them up using the Net (the same tool used for bug-catching). There are 100 Soul Blobs scattered around the world; collecting all of them rewards the Antique Clock, which extends the night from its default 15 minutes to 25 minutes.',
    examples: ['Floating spectral blobs found around the map', 'Caught with the Net, not by hand'],
    verify: ['Exact spawn locations/regions', 'Whether they respawn or are one-time collectibles', 'Any rewards beyond the Antique Clock'],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Fishing (Net unlock)', href: '/fishing' }, { label: 'Locations', href: '/locations' }],
  },
  {
    slug: 'cooking',
    name: 'Cooking',
    group: 'Crafting',
    status: 'datamined',
    dek: 'Meals, recipes, ingredients, and kitchen systems built from crops, fish, forage, and supernatural pantry items.',
    summary: 'Cooking pages should eventually answer recipe ingredients, energy value, gift value, sell price, and unlock conditions. This category is separate from crafting because food usually serves different player goals.',
    examples: ['Cooked meals', 'Recipe ingredients', 'Fish dishes', 'Crop-based dishes'],
    verify: ['Recipe list', 'Kitchen requirements', 'Buffs or effects', 'Gift and sale value'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Fish', href: '/items/fish' }, { label: 'Romance gift finder', href: '/tools/romance-gift-finder' }],
  },
  {
    slug: 'crafting',
    name: 'Crafting',
    group: 'Crafting',
    status: 'datamined',
    dek: 'Materials, recipes, workbench items, and homestead upgrades players can make or assemble.',
    summary: 'Crafting is a core wiki category because players search for recipes, ingredients, and unlocks. This page is prepared to document crafting stations, required materials, and what each recipe is used for after launch.',
    examples: ['Crafting materials', 'Workbench recipes', 'Utility items', 'Upgrade components'],
    verify: ['Recipe requirements', 'Crafting station', 'Unlock source', 'Output quantity'],
    related: [{ label: 'Tools', href: '/items/tools' }, { label: 'Mineables', href: '/items/mineables' }, { label: 'Decorations', href: '/items/decorations' }],
  },
  {
    slug: 'artifacts',
    name: 'Artifacts',
    group: 'Resources',
    status: 'datamined',
    dek: 'Collectible curios likely connected to exploration, ruins, mines, museum-style tracking, or quests.',
    summary: 'Artifact pages should help completionist players track what they have found, where each item appears, and whether it is used for donations, quests, gifts, or lore. The exact system is still launch-dependent.',
    examples: ['Collectible artifacts', 'Exploration finds', 'Rare curios', 'Lore objects'],
    verify: ['Where each artifact appears', 'Rarity', 'Donation or quest use', 'Whether duplicates can be sold'],
    related: [{ label: 'Locations', href: '/locations' }, { label: 'Map', href: '/map' }, { label: 'Environment', href: '/environment' }],
  },
  {
    slug: 'farm-helpers',
    name: 'Farm Helpers',
    group: 'Creatures',
    status: 'datamined',
    dek: 'Helper creatures or support systems that may assist with the farm, chores, production, or automation.',
    summary: 'Farm Helpers is a useful category to keep separate from tools because helper systems often affect daily routine, automation, and farm layout. The exact mechanics need to be verified once the full game is playable.',
    examples: ['Possible helper creatures', 'Farm support systems', 'Automation-adjacent helpers', 'Care or upgrade requirements'],
    verify: ['How helpers are unlocked', 'What tasks they perform', 'Limits or schedules', 'Whether they need care'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Tools', href: '/items/tools' }, { label: 'Beginner guide', href: '/beginner-guide' }],
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
    status: 'expected',
    dek: 'Potion brewing references, including the confirmed Alter Ego Elixir and future potion effects.',
    summary: 'Potion brewing is a confirmed Moonlight Peaks activity, and the Alter Ego Elixir is a confirmed example that changes your appearance. This page is the future home for potion recipes, effects, ingredients, and unlock requirements.',
    examples: ['Alter Ego Elixir', 'Transformation potions', 'Utility brews', 'Magic recipes'],
    verify: ['Full potion list', 'Ingredients', 'Brewing station rules', 'Effect duration and limits'],
    related: [{ label: 'Magic', href: '/magic' }, { label: 'Character creator', href: '/character-creator' }, { label: 'Crafting', href: '/items/crafting' }],
  },
  {
    slug: 'mineables',
    name: 'Mineables',
    group: 'Resources',
    status: 'datamined',
    dek: 'Ores, gems, minerals, and underground resources that may feed crafting, upgrades, gifts, and quests.',
    summary: 'Mineable items usually become high-intent wiki pages because players need exact floors, locations, and drop rates. For now, this page documents the category and keeps the live-game data checklist ready.',
    examples: ['Ores', 'Gems', 'Minerals', 'Underground resources'],
    verify: ['Mine locations', 'Drop source', 'Tool requirements', 'Crafting and upgrade uses'],
    related: [{ label: 'Locations', href: '/locations/mines' }, { label: 'Crafting', href: '/items/crafting' }, { label: 'Tools', href: '/items/tools' }],
  },
  {
    slug: 'decorations',
    name: 'Decorations',
    group: 'Home',
    status: 'datamined',
    dek: 'Furniture, decor, cottage customization items, and visual pieces for making your vampire home feel personal.',
    summary: 'Decoration pages are useful for players searching for furniture lists, shop rotations, seasonal decor, and room inspiration. This category will expand with item names, images, sources, and prices after launch.',
    examples: ['Furniture', 'Wall decor', 'Seasonal decorations', 'Cottage customization items'],
    verify: ['Shop source', 'Price', 'Placement rules', 'Seasonal or event availability'],
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
  cooking: {
    parameters: [
      { label: 'Data status', value: 'Cooking is expected as a system; recipe list pending' },
      { label: 'Key fields', value: 'Ingredients, kitchen/station, effect, energy, sell value, gift value' },
      { label: 'Useful filters', value: 'By ingredient, buff, romance gift, early-game recipe' },
    ],
    columns: ['Recipe', 'Ingredients', 'Station', 'Effect', 'Energy/health', 'Sell value', 'Gift notes'],
    rows: [
      ['Crop-based dish', tbc, tbc, tbc, tbc, tbc, tbc],
      ['Fish dish', tbc, tbc, tbc, tbc, tbc, tbc],
      ['Supernatural meal', tbc, tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Recipe names and effects should be copied only from in-game recipe cards or official materials.',
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
      ['Alter Ego Elixir', tbc, 'Sold by Sabrina at Web of Wonders (not brewed by the player)', 'Changes appearance', tbc, 'Sabrina / Web of Wonders shop'],
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
