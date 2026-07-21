export type PriorityLink = {
  label: string;
  href: string;
  note: string;
};

// All hrefs below point to real, existing pages only. The programmatic SEO layer
// is dormant (see SEO_PROGRAM_ENABLED in seoGraph.ts), so these intentionally do
// NOT link into generated /quests, /crafting, /romance/<x>/<y>, etc. paths.

export const homepagePriorityLinks: PriorityLink[] = [
  { label: 'Launch day guide', href: '/launch-day', note: 'What to check first when Moonlight Peaks goes live.' },
  { label: 'Known issues', href: '/known-issues', note: 'Launch bugs, saves, controller notes, and platform issues.' },
  { label: 'Best settings', href: '/best-settings', note: 'PC, Mac, Steam Deck, Switch, and Switch 2 setup checks.' },
  { label: 'Moonlight Peaks release date', href: '/release-date', note: 'Launch date, platforms, price, and demo status.' },
  { label: 'Moonlight Peaks demo guide', href: '/demo', note: 'Download, what is inside, and demo FAQ.' },
  { label: 'Moonlight Peaks platforms', href: '/platforms', note: 'Switch, Switch 2, Steam, Steam Deck, and Android.' },
  { label: 'System requirements', href: '/system-requirements', note: 'PC, Mac, Steam Deck, and demo performance checks.' },
  { label: 'Languages', href: '/languages', note: 'Japanese, Chinese, Korean, German, and English support.' },
  { label: 'Moonlight Peaks characters', href: '/characters', note: 'Known residents, families, profiles, and romance status.' },
  { label: 'Moonlight Peaks romance guide', href: '/romance', note: 'Marriage, dating, and the seven families.' },
  { label: 'Beginner guide', href: '/beginner-guide', note: 'What to know before starting the cozy vampire life sim.' },
  { label: 'Moonlight Peaks review roundup', href: '/reviews', note: 'Real critic scores from Prima Games, GameWatcher, Gamereactor and more.' },
  { label: 'Guides hub', href: '/guides', note: 'Beginner, farming, magic, romance, and more.' },
  { label: 'Item Tracker', href: '/tools/item-tracker', note: 'Track fish, recipes, potions, artifacts, and collection progress.' },
  { label: 'Farming Profit Planner', href: '/tools/farming-profit-planner', note: 'Compare crop profits once launch prices are verified.' },
  { label: 'Data Submitter', href: '/tools/submit-data', note: 'Save launch-week discoveries for manual review.' },
  { label: 'FAQ hub', href: '/faq', note: 'Fast answers for searchers and long-tail Moonlight Peaks questions.' },
  { label: 'Compare with Stardew Valley', href: '/moonlight-peaks-vs-stardew-valley', note: 'Romance, farming, story, and cozy-sim differences.' },
];

export const releasePriorityLinks: PriorityLink[] = [
  { label: 'Launch day guide', href: '/launch-day', note: 'Start here when the game goes live.' },
  { label: 'Known issues', href: '/known-issues', note: 'Launch-week bugs and safe fix tracking.' },
  { label: 'Best settings', href: '/best-settings', note: 'PC, Steam Deck, Switch, Mac, and readability checks.' },
  { label: 'System requirements', href: '/system-requirements', note: 'PC, Mac, Steam Deck, and hardware checks.' },
  { label: 'Languages', href: '/languages', note: 'Supported languages and launch verification.' },
  { label: 'Nintendo Switch', href: '/platforms/switch', note: 'Original Switch launch, price, and the demo.' },
  { label: 'Nintendo Switch 2', href: '/platforms/switch-2', note: 'Native Switch 2 edition, price, and upgrade notes.' },
  { label: 'Steam Deck', href: '/platforms/steam-deck', note: 'Portable PC play and verification status.' },
  { label: 'Android', href: '/platforms/android', note: 'Day-one mobile release via Google Play.' },
  { label: 'All platforms & price', href: '/platforms', note: 'Every platform and the price in one place.' },
  { label: 'Review roundup', href: '/reviews', note: 'Real critic scores as launch-week reviews land.' },
  { label: 'Demo download', href: '/demo/how-to-download-the-demo', note: 'Where to get the free demo before launch.' },
];

export const platformPriorityLinks: PriorityLink[] = [
  { label: 'System requirements', href: '/system-requirements', note: 'Steam PC, Mac, and Steam Deck checks.' },
  { label: 'Languages', href: '/languages', note: 'Storefront language support to verify before buying.' },
  { label: 'Nintendo Switch', href: '/platforms/switch', note: 'The highest-traffic platform question, answered.' },
  { label: 'Nintendo Switch 2', href: '/platforms/switch-2', note: 'Switch 2 edition pricing and upgrade notes.' },
  { label: 'Steam Deck', href: '/platforms/steam-deck', note: 'Deck play and verification expectations.' },
  { label: 'Android', href: '/platforms/android', note: 'Mobile release via Google Play; no iOS announced.' },
  { label: 'Release date & price', href: '/release-date', note: 'Date, price tiers, and the demo.' },
  { label: 'Is it on PS5 or Xbox?', href: '/faq/is-moonlight-peaks-on-ps5-or-xbox', note: 'Console status, including Game Pass.' },
];

export const characterPriorityLinks: PriorityLink[] = [
  { label: 'All characters', href: '/characters', note: '35 residents, confirmed vs. reported status.' },
  { label: 'Saga', href: '/characters/saga', note: 'Confirmed werewolf romance, with real gift data.' },
  { label: 'Elvira', href: '/characters/elvira', note: 'Her treasure hunt quest and confirmed heart-event schedule.' },
  { label: 'Persephone', href: '/characters/persephone', note: 'Henderson family, tied to the Museum unlock storyline.' },
  { label: 'Orlock', href: '/characters/orlock', note: 'The first resident you meet, Ambrosia family head.' },
  { label: 'Fiona', href: '/characters/fiona', note: 'Webb family coven leader and town florist.' },
  { label: 'Dragan', href: '/characters/dragan', note: 'Khazan family seer and Nokturna\u2019s inventor.' },
  { label: 'Death', href: '/characters/death', note: 'Confirmed romance option, belongs to no family.' },
  { label: 'Families Explorer', href: '/tools/families-explorer', note: 'Browse all 35 residents grouped by family.' },
  { label: 'Romance & marriage', href: '/romance', note: 'Dating, marriage, and the no-children answer.' },
  { label: 'The seven families', href: '/families', note: 'Vampires, werewolves, witches, mermaids, seers, humans.' },
];

export const farmMagicPriorityLinks: PriorityLink[] = [
  { label: 'Farming guide', href: '/farming', note: 'Crops, livestock, and the confirmed buying flow.' },
  { label: 'Farm helpers (Firefly Sanctuary & Pollinator)', href: '/farm/farm-helpers', note: 'All 16 processing machines, including the Firefly Sanctuary and Pollinator.' },
  { label: 'Farm animals', href: '/farm/animals', note: 'How to get animals, feeding, and what each one produces.' },
  { label: 'Magic guide', href: '/magic', note: 'Aquaflux, spell list, mana, and the wand-fix quest.' },
  { label: 'Spellcasting list', href: '/spellcasting', note: 'Every confirmed spell with mana cost and buy price.' },
  { label: 'Shapeshifting', href: '/shapeshifting', note: 'Bat and Mermaid/Aqua forms, plus the unlock chain.' },
  { label: 'Fishing guide', href: '/fishing', note: 'The rod-unlock bet with Noel and the bug net.' },
  { label: 'Farming Profit Planner', href: '/tools/farming-profit-planner', note: 'Compare crop profits as prices are verified.' },
];

export const databasePriorityLinks: PriorityLink[] = [
  { label: 'Item categories', href: '/items', note: 'Tools, livestock, potions, Soul Blobs, and more.' },
  { label: 'The Museum', href: '/locations/silverveil-museum', note: 'Donation rooms, the Persephone/Jada/Winston unlock, and how to donate.' },
  { label: 'Mineables (Gold Ore, Quartz Dust)', href: '/items/mineables', note: 'Where mining materials come from and what they craft into.' },
  { label: 'Locations', href: '/locations', note: 'Town Hall, Misty Shores, the Cave of Echoes, and more.' },
  { label: 'Crystal Cave', href: '/locations/crystal-cave', note: 'Exact location beside Fiona\'s house and how to unlock it.' },
  { label: 'Howling Marshes', href: '/locations/howling-marshes', note: 'Both entrances, harvestables, and the Logan family house.' },
  { label: 'Crest Garden', href: '/locations/crest-garden', note: 'Where it is and how the seven family crests unlock.' },
  { label: 'Interactive map', href: '/map', note: 'Confirmed named areas around town.' },
  { label: 'Inventory', href: '/inventory', note: 'The universal house storage system.' },
  { label: 'Shipping & selling', href: '/shipping', note: 'Chester and the processing economy.' },
  { label: 'House & decorating', href: '/house', note: 'Cottage customization and building upgrades.' },
  { label: 'The seven families', href: '/families', note: 'Every named family and its members.' },
  { label: 'Item Tracker', href: '/tools/item-tracker', note: 'A browser-saved checklist across item categories.' },
];

export const systemsPriorityLinks: PriorityLink[] = [
  { label: 'Nokturna guide', href: '/nokturna', note: '67+ cards, deck archetypes, and best-of-three rules.' },
  { label: 'Nokturna Tracker', href: '/tools/nokturna-tracker', note: 'Log your own card collection privately.' },
  { label: 'Quests', href: '/quests', note: 'Named quests and unlock chains.' },
  { label: 'Mini-games', href: '/mini-games', note: 'Dates, fishing, and spellcasting.' },
  { label: 'Achievements', href: '/achievements', note: '59 confirmed Steam achievements.' },
  { label: 'Gift Tracker', href: '/tools/gift-tracker', note: 'Log gift reactions per resident until data is public.' },
  { label: 'Romance Match Quiz', href: '/tools/romance-match-quiz', note: 'A fun, sourced-hints matchmaking quiz.' },
];

export const toolsHubPriorityLinks: PriorityLink[] = [
  { label: 'All tools', href: '/tools', note: 'Every planner, tracker, and finder in one place.' },
  { label: 'Families Explorer', href: '/tools/families-explorer', note: 'Filter all residents by family, type, and romance.' },
  { label: 'Gift Tracker', href: '/tools/gift-tracker', note: 'Personal, browser-saved gift-testing log.' },
  { label: 'Nokturna Tracker', href: '/tools/nokturna-tracker', note: 'Personal card-collection log.' },
  { label: 'Romance Gift Finder', href: '/tools/romance-gift-finder', note: 'Verification status for every named character.' },
  { label: 'Romance Planner', href: '/tools/romance-planner', note: 'Shortlist, notes, and a launch-day prep checklist.' },
  { label: 'Item Tracker', href: '/tools/item-tracker', note: 'Track fish, recipes, potions, artifacts, and progress.' },
  { label: 'Farming Profit Planner', href: '/tools/farming-profit-planner', note: 'Compare crop profits with verified prices.' },
  { label: 'Platform Picker', href: '/tools/platform-picker', note: 'Find the best platform for your setup.' },
];

export const launchStatusPriorityLinks: PriorityLink[] = [
  { label: 'Known issues', href: '/known-issues', note: 'Confirmed crashes, controller fixes, and save locations.' },
  { label: 'Achievements', href: '/achievements', note: '59 confirmed Steam achievements, named ones sourced so far.' },
  { label: 'Review roundup', href: '/reviews', note: 'Real critic scores from Prima Games, GameWatcher, and more.' },
  { label: 'Best settings', href: '/best-settings', note: 'PC, Mac, Steam Deck, Switch, and Switch 2 checks.' },
  { label: 'System requirements', href: '/system-requirements', note: 'Hardware checks before you install.' },
  { label: 'Cheats & console commands', href: '/cheats', note: 'The cheat console and full command list.' },
];

export const romancePriorityLinks: PriorityLink[] = [
  { label: 'Friendship (non-romantic)', href: '/friendship', note: 'The relationship track for everyone, not just romance options.' },
  { label: 'Can you get married?', href: '/faq/can-you-get-married-in-moonlight-peaks', note: 'Marriage and proposal status.' },
  { label: 'Can you have children?', href: '/faq/can-you-have-children-in-moonlight-peaks', note: 'The confirmed no-children answer.' },
  { label: 'How many romance options?', href: '/faq/how-many-romance-options-are-there', note: 'The size of the dating roster.' },
  { label: 'Can you romance a werewolf?', href: '/faq/can-you-romance-a-werewolf', note: 'Saga and werewolf romance.' },
  { label: 'Can you romance Death?', href: '/faq/can-you-romance-death-in-moonlight-peaks', note: 'What\u2019s confirmed vs speculation.' },
  { label: 'Romance Match Quiz', href: '/tools/romance-match-quiz', note: 'A fun, sourced-hints matchmaking quiz.' },
  { label: 'Romance Planner', href: '/tools/romance-planner', note: 'Shortlist, notes, and a launch-day prep checklist.' },
  { label: 'Day-one romance route', href: '/previews/day-one-romance-route', note: 'Who has a known home in the datamined files.' },
  { label: 'Romance Gift Finder', href: '/tools/romance-gift-finder', note: 'Verification status for every named character.' },
  { label: 'Best picks by vibe', href: '/previews/best-romance-picks-by-vibe', note: 'An honest, non-official read on who fits which mood.' },
  { label: 'All characters', href: '/characters', note: 'Every known resident and their status.' },
  { label: 'The seven families', href: '/families', note: 'How the families and romance connect.' },
];

export const demoPriorityLinks: PriorityLink[] = [
  { label: 'What is in the demo', href: '/demo/whats-in-the-demo', note: 'The activities and slice you can try now.' },
  { label: 'How to download the demo', href: '/demo/how-to-download-the-demo', note: 'Steam and Nintendo eShop steps.' },
  { label: 'Demo vs full game', href: '/demo/demo-vs-full-game', note: 'What carries over and what the full game adds.' },
  { label: 'Is there a demo?', href: '/faq/is-there-a-moonlight-peaks-demo', note: 'Where the free demo is available.' },
  { label: 'Does progress carry over?', href: '/faq/does-demo-progress-carry-over', note: 'Whether demo saves transfer.' },
  { label: 'All platforms', href: '/platforms', note: 'Where the demo and full game run.' },
];

export const faqPriorityLinks: PriorityLink[] = [
  { label: 'Release date FAQ', href: '/faq/when-does-moonlight-peaks-release', note: 'The date and launch platforms in one answer.' },
  { label: 'Platform FAQ', href: '/faq/what-platforms-is-moonlight-peaks-on', note: 'Confirmed platforms and unannounced console status.' },
  { label: 'Demo FAQ', href: '/faq/is-there-a-moonlight-peaks-demo', note: 'Where the free demo is available.' },
  { label: 'Marriage FAQ', href: '/faq/can-you-get-married-in-moonlight-peaks', note: 'Romance, marriage, and children status.' },
  { label: 'Combat FAQ', href: '/faq/is-there-combat-in-moonlight-peaks', note: 'Why the mines still remain cozy.' },
  { label: 'Multiplayer FAQ', href: '/faq/is-moonlight-peaks-multiplayer', note: 'Current single-player status.' },
];

export const beginnerPriorityLinks: PriorityLink[] = [
  { label: 'Release date', href: '/release-date', note: 'Start with date, price, demo, and platforms.' },
  { label: 'Demo guide', href: '/demo', note: 'Try the character creator and early activities first.' },
  { label: 'Night farming basics', href: '/previews/night-farming-basics', note: 'Understand the core vampire farming loop.' },
  { label: 'Things to know first', href: '/previews/things-to-know-before-playing', note: 'Key facts before you start.' },
  { label: 'Romance & families', href: '/romance', note: 'Friendship, romance, marriage, and families.' },
  { label: 'Nokturna', href: '/nokturna', note: 'The in-game card game.' },
];

export const guideHubPriorityLinks: PriorityLink[] = [
  { label: 'Launch day guide', href: '/launch-day', note: 'What to check first when the game launches.' },
  { label: 'Known issues', href: '/known-issues', note: 'Launch-week bug and performance tracker.' },
  { label: 'Best settings', href: '/best-settings', note: 'Safe setup checks for each platform.' },
  { label: 'Beginner guide', href: '/beginner-guide', note: 'Best first page for new players.' },
  { label: 'Farming', href: '/farming', note: 'Night farming, crops, livestock, and magic.' },
  { label: 'Magic', href: '/magic', note: 'Wands, runes, mana, potions, and shapeshifting.' },
  { label: 'Shapeshifting', href: '/shapeshifting', note: 'Bat and Hellkitten forms, and the unlock chain.' },
  { label: 'Fishing', href: '/fishing', note: 'The Noel bet and the bug net unlock.' },
  { label: 'Activities', href: '/activities', note: 'Fishing, foraging, crafts, and the character creator.' },
  { label: 'Character creator', href: '/character-creator', note: 'Appearance options and naming your Hellkitten.' },
  { label: 'Nokturna', href: '/nokturna', note: '67+ cards, deck archetypes, and how to play.' },
  { label: 'Quests', href: '/quests', note: 'Named quests and how unlocks work.' },
  { label: 'Mini-games', href: '/mini-games', note: 'Dates, fishing, and spellcasting mechanics.' },
  { label: 'Inventory', href: '/inventory', note: 'The universal house storage system.' },
  { label: 'Shipping & selling', href: '/shipping', note: 'How Chester and the money loop work.' },
  { label: 'House & decorating', href: '/house', note: 'Cottage customization and building upgrades.' },
  { label: 'Friendship', href: '/friendship', note: 'The platonic relationship track, separate from romance.' },
  { label: 'Items', href: '/items', note: 'Tools, clothing, potions, and the other item categories.' },
  { label: 'Interactive map', href: '/map', note: 'Confirmed named areas around town.' },
  { label: 'Families Explorer', href: '/tools/families-explorer', note: 'All residents grouped by family.' },
  { label: 'Gift Tracker', href: '/tools/gift-tracker', note: 'Log your own gift-testing results.' },
  { label: 'Nokturna Tracker', href: '/tools/nokturna-tracker', note: 'Log your own card collection.' },
  { label: 'Item Tracker', href: '/tools/item-tracker', note: 'A browser-saved checklist for item categories.' },
  { label: 'Farming Profit Planner', href: '/tools/farming-profit-planner', note: 'Manual crop profit calculator for verified launch data.' },
  { label: 'Data Submitter', href: '/tools/submit-data', note: 'Draft fish, gift, recipe, shop, and bug findings locally.' },
  { label: 'Environment', href: '/environment', note: 'Weather, seasons, and festivals.' },
  { label: 'Romance', href: '/romance', note: 'Gifts, friendship, marriage, and characters.' },
  { label: 'Characters', href: '/characters', note: 'Every known resident and their status.' },
  { label: 'Review roundup', href: '/reviews', note: 'Real critic scores from launch-week coverage.' },
  { label: 'Compare with other sims', href: '/compare', note: 'How Moonlight Peaks differs from other cozy games.' },
  { label: 'Behind the scenes', href: '/behind-the-scenes', note: 'What the dev team\u2019s own diaries reveal about making the game.' },
  { label: 'Release date & platforms', href: '/release-date', note: 'Date, price, and where to play.' },
];

export const comparisonPriorityLinks: PriorityLink[] = [
  { label: 'All comparisons', href: '/compare', note: 'Every Moonlight Peaks versus page.' },
  { label: 'vs Stardew Valley', href: '/moonlight-peaks-vs-stardew-valley', note: 'The genre benchmark, side by side.' },
  { label: 'vs Palia', href: '/compare/palia', note: 'Free-to-play multiplayer versus a solo vampire farm.' },
  { label: 'vs Coral Island', href: '/compare/coral-island', note: 'Tropical co-op farm versus a gothic solo farm.' },
  { label: 'vs Fae Farm', href: '/compare/fae-farm', note: 'Cozy magic farm with co-op versus a solo vampire farm.' },
  { label: 'vs Witchbrook', href: '/compare/witchbrook', note: 'Witch college versus vampire town.' },
  { label: 'vs Wylde Flowers', href: '/compare/wylde-flowers', note: 'The closest cozy-witch cousin.' },
  { label: 'vs Fields of Mistria', href: '/compare/fields-of-mistria', note: 'Pixel-art farm sim versus 3D gothic farm.' },
  { label: 'vs Sun Haven', href: '/compare/sun-haven', note: 'Fantasy races versus supernatural families.' },
  { label: 'vs Harvest Moon', href: '/compare/harvest-moon', note: 'The original genre roots versus the vampire twist.' },
  { label: 'vs Grave Seasons', href: '/compare/grave-seasons', note: 'Another gothic-flavored cozy sim, compared directly.' },
  { label: 'vs Disney Dreamlight Valley', href: '/compare/disney-dreamlight-valley', note: 'Licensed friendship sim versus original vampire romance.' },
  { label: 'vs Go-Go Town!', href: '/compare/go-go-town', note: 'Co-op town management versus solo farming with romance.' },
  { label: 'vs My Time at Evershine', href: '/compare/my-time-at-evershine', note: 'Upcoming co-op settlement sim versus a finished solo game.' },
];
