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
    status: 'datamined',
    dek: 'Farm and utility equipment for planting, watering, gathering, mining, and maintaining your moonlit homestead.',
    summary: 'Tools are the practical backbone of a cozy farming sim: they decide how you till soil, water crops, gather resources, fish, mine, and interact with the world. The category exists in pre-launch structure, but the exact upgrade path still needs live-game verification.',
    examples: ['Farming tools', 'Watering and harvesting gear', 'Mining or gathering equipment', 'Fishing-related equipment'],
    verify: ['Starting tool set', 'Upgrade tiers', 'Repair or stamina rules', 'Where each tool is obtained'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Beginner guide', href: '/beginner-guide' }, { label: 'Map', href: '/map' }],
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
    status: 'datamined',
    dek: 'A creature or pet-adjacent category name found in pre-launch structure; exact gameplay role is still unclear.',
    summary: 'Vampster appears as a named category in pre-launch structure. Because the role is not developer-confirmed, this page treats it as a placeholder for launch verification rather than claiming it is a pet, item, or enemy type.',
    examples: ['Possible magical creature', 'Possible pet-related entry', 'Possible collection category'],
    verify: ['Whether Vampster is a creature, item, pet, or category label', 'Where it appears', 'How players interact with it', 'Whether it has variants'],
    related: [{ label: 'Farming', href: '/farming' }, { label: 'Characters', href: '/characters' }, { label: 'FAQ', href: '/faq' }],
  },
  {
    slug: 'soul-blobs',
    name: 'Soul Blobs',
    group: 'Resources',
    status: 'datamined',
    dek: 'A spooky resource-style category that may connect to magic, crafting, collecting, or supernatural systems.',
    summary: 'Soul Blobs sound like a resource or collectible, but the exact function is not confirmed. This landing page is built for future lookup intent: where to find Soul Blobs, what they are used for, and whether they connect to spells or crafting.',
    examples: ['Possible crafting resource', 'Possible magic resource', 'Possible collectible', 'Possible quest material'],
    verify: ['Source location', 'Drop rules', 'Recipe or quest use', 'Whether they can be sold'],
    related: [{ label: 'Magic', href: '/magic' }, { label: 'Crafting', href: '/items/crafting' }, { label: 'Locations', href: '/locations' }],
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
      { label: 'Data status', value: 'Category known; exact tool list pending' },
      { label: 'Primary use', value: 'Farming, gathering, fishing, mining, world interaction' },
      { label: 'Upgrade fields', value: 'Tier, material cost, unlock source, stamina impact' },
    ],
    columns: ['Tool', 'Use', 'How to get', 'Upgrade tier', 'Energy/stamina', 'Related system'],
    rows: [
      ['Starter farming tool', 'Soil preparation and crop care', tbc, tbc, tbc, 'Farming'],
      ['Watering tool', 'Crop watering or garden upkeep', tbc, tbc, tbc, 'Farming'],
      ['Fishing tool', 'Catching fish in water locations', tbc, tbc, tbc, 'Fishing'],
      ['Mining/gathering tool', 'Collecting underground or wild resources', tbc, tbc, tbc, 'Mines / resources'],
    ],
    sourceNote: 'Use official launch gameplay, in-game item screens, and player-verified screenshots before replacing these rows.',
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
      { label: 'Data status', value: 'Name appears in pre-launch structure; gameplay role unknown' },
      { label: 'Possible role', value: 'Creature, pet, collectible, or internal category label' },
      { label: 'Safety rule', value: 'Treat every detail as pending until verified in-game' },
    ],
    columns: ['Entry', 'Role', 'Where found', 'Interaction', 'Variants', 'Confirmed?'],
    rows: [
      ['Vampster', tbc, tbc, tbc, tbc, 'Not yet verified'],
      ['Vampster variant entry', tbc, tbc, tbc, tbc, 'Not yet verified'],
    ],
    sourceNote: 'This page should stay conservative because the category name does not prove a player-facing item.',
  },
  'soul-blobs': {
    parameters: [
      { label: 'Data status', value: 'Category known; function pending' },
      { label: 'Likely table fields', value: 'Source, drop rule, recipe use, quest use, sell value' },
      { label: 'Related systems', value: 'Magic, crafting, quests, supernatural resources' },
    ],
    columns: ['Soul Blob entry', 'Source', 'Drop/location', 'Use', 'Sell value', 'Quest/crafting link'],
    rows: [
      ['Soul Blob', tbc, tbc, tbc, tbc, tbc],
      ['Rare Soul Blob entry', tbc, tbc, tbc, tbc, tbc],
    ],
    sourceNote: 'Do not define Soul Blobs as currency, crafting material, or drop until the live game confirms it.',
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
      ['Alter Ego Elixir', tbc, tbc, 'Changes appearance', tbc, tbc],
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
