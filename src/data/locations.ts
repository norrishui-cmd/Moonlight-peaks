import type { TopicItem, TopicSection } from './topic';

export const locationsSection: TopicSection = {
  base: '/locations',
  label: 'Locations',
  eyebrow: 'World',
  heading: 'Moonlight Peaks <em>locations</em>',
  schemaType: 'Place',
  title: 'All Moonlight Peaks Locations (Full List): Town, Farm, Crest Garden & More',
  description: 'The complete list of confirmed Moonlight Peaks locations and what\u2019s inside each one \u2014 town, your farm, Misty Shores, Crystal Cave, Howling Marshes, Crest Garden \u2014 with developer-confirmed facts kept separate from reports.',
  intro: 'The places that make up Moonlight Peaks — the magical mountain town, your homestead, and the wild spots around it. We mark what is developer-confirmed versus reported, datamined (from pre-launch game files, cross-referenced against pre-launch references), or expected, updating each entry as more is verified against the live game.',
  groupByTag: true,
  faq: [
    { q: 'How many locations are in Moonlight Peaks?', a: 'This page currently tracks 18 confirmed named locations across the town, your homestead, the wilds, water, and underground areas, grouped below by area \u2014 plus several more named landmarks (Crest Garden, Moonlight Tower, the Crypt) confirmed but still being fully detailed.' },
    { q: 'Is there a map of Moonlight Peaks?', a: 'Yes \u2014 see our interactive map for a visual layout of confirmed locations alongside this list.' },
    { q: 'Where is the Crystal Cave in Moonlight Peaks?', a: 'Confirmed: it sits beside Fiona\u2019s house in Moonlit Pines, blocked by a boulder until your pickaxe reaches Copper tier. See the dedicated Crystal Cave page for the full route and what\u2019s inside.' },
    { q: 'Where is the museum in Moonlight Peaks?', a: 'The museum is based in the town area \u2014 see our dedicated museum page for how it unlocks and what you can donate.' },
    { q: 'Where are the Howling Marshes in Moonlight Peaks?', a: 'Confirmed: just north of the main town and east of Moonlit Pines, with two entrances \u2014 one east of Luna\u2019s seed stall, the other east of Town Hall. See the dedicated Howling Marshes page for full details.' },
  ],
};

export const locations: TopicItem[] = [
  {
    slug: 'town', title: 'The Town', tag: 'Town', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'The magical mountain town of seven supernatural families, where you start your new life as a vampire.',
    body: [
      'Moonlight Peaks is set in a small, magical mountain town that has been home to seven families for centuries. You arrive as a young vampire leaving the big city behind.',
      'The town blends cozy village life with the supernatural —your neighbours are werewolves, witches, mermaids and more, and getting to know them is a big part of the game.',
    ],
    related: [{ label: 'The seven families', href: '/families' }, { label: 'Characters', href: '/characters' }, { label: 'Your farm', href: '/locations/your-farm' }],
    faq: [
      { q: 'Where is Moonlight Peaks set?', a: 'In a small magical mountain town that is home to seven supernatural families.' },
      { q: 'Who are the neighbours in Moonlight Peaks?', a: 'Confirmed: werewolves, witches, mermaids, and other supernatural residents across seven families \u2014 getting to know them is a core part of the game.' },
    ],
  },
  {
    slug: 'town-square', title: 'Town Square', tag: 'Town', status: 'expected', image: '/hero-loc-town-square.webp',
    dek: 'The communal heart of town, where residents gather and seasonal events take place.',
    body: [
      'Like most cozy-sim towns, Moonlight Peaks centres on communal spaces where residents cross paths day to day.',
      'Seasonal celebrations are part of town life —a theatrical event host has been shown livening up gatherings. The exact layout and which events happen here are confirmed at launch.',
    ],
    related: [{ label: 'Pumpkin Head', href: '/characters/pumpkin-head' }, { label: 'Seasonal events', href: '/activities/seasonal-events' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'your-farm', title: 'Your Farm', tag: 'Homestead', status: 'confirmed', image: '/images/moonlight-peaks/official/farm-06.webp',
    dek: 'The abandoned family homestead you move into and restore into a moonlit farm.',
    body: [
      'Your starting point is an abandoned family homestead, and restoring it into a working farm is the backbone of the game.',
      'You grow enchanted crops and glowing flowers and raise magical livestock like the Draculamb —all tended by night, since you head back to your coffin by sunrise.',
      'Confirmed: you name your own farm during character creation (along with your Hellkitten pet) — there is no single fixed "official" farm name, since it\u2019s a custom name you choose yourself. Pre-launch datamined files did reference an internal working name, "the Plot," but that\u2019s a development-side label, not the name you\u2019ll see or choose in-game.',
    ],
    related: [{ label: 'Farming guide', href: '/farming' }, { label: 'Your cottage', href: '/locations/your-cottage' }, { label: 'Magic', href: '/magic' }],
    faq: [
      { q: 'Do you farm during the day in Moonlight Peaks?', a: 'No —you farm by night and return to your coffin by sunrise.' },
      { q: 'What is the name of your farm in Moonlight Peaks?', a: 'There isn\u2019t a single fixed name — confirmed: you choose your own farm name during character creation, the same way you name your character and your Hellkitten pet.' },
    ],
  },
  {
    slug: 'your-cottage', title: 'Your Cottage', tag: 'Home', status: 'confirmed', image: '/hero-loc-your-cottage.webp',
    dek: 'Your customizable gothic home, which you decorate and furnish to taste.',
    body: [
      'You live in a gothic cottage that you can make your own. Decorating —placing and arranging furniture and decor —is one of the core cozy activities.',
      'Exactly which rooms, furniture sets and customization options are available is confirmed when the full game launches.',
    ],
    related: [{ label: 'Decorating', href: '/activities/decorating' }, { label: 'Character creator', href: '/activities/character-creator' }, { label: 'Your farm', href: '/locations/your-farm' }],
  },
  {
    slug: 'forest', title: 'The Forest', tag: 'Wilds', status: 'reported', image: '/images/moonlight-peaks/official/forest-01-summer.webp',
    dek: 'The woods around town, where you forage after dark.',
    body: [
      'Foraging in the woods is one of the game\u2019s confirmed activities, so expect seasonal finds among the trees on the edge of town.',
      'The exact forageables and any forest landmarks are confirmed once the full game is out.',
    ],
    related: [{ label: 'Foraging', href: '/activities/foraging' }, { label: 'Werewolves', href: '/families/werewolves' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'lake', title: 'Silverveil Lake', tag: 'Water', status: 'confirmed', image: '/hero-loc-lake.webp',
    dek: 'The town\u2019s confirmed lake, home to fishing and the mermaid family.',
    body: [
      'Confirmed name: Silverveil Lake. Water areas support fishing, one of the demo\u2019s featured activities, and the town\u2019s mermaids (the Hosu family) are tied to the water.',
      'Named fish and specific fishing spots are not yet sourced — see the fishing guide for what is confirmed so far.',
    ],
    related: [{ label: 'Fishing', href: '/fishing' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'The pier', href: '/locations/pier' }],
  },
  {
    slug: 'pier', title: 'The Pier', tag: 'Water', status: 'expected', image: '/images/moonlight-peaks/official/pier-01.webp',
    dek: 'A spot out over the water for fishing and quiet moments.',
    body: [
      'Fishing waters in cozy sims usually include a pier or dock to cast from.',
      'Whether Moonlight Peaks names a specific pier is confirmed at launch —for now, treat this as part of the lakeside fishing area.',
    ],
    related: [{ label: 'Fishing', href: '/activities/fishing' }, { label: 'The lake', href: '/locations/lake' }],
  },
  {
    slug: 'mines', title: 'Cave of Echoes & Mines', tag: 'Underground', status: 'confirmed', image: '/hero-loc-mines.webp',
    dek: 'How to unlock the Cave of Echoes, where to find copper and iron, and the most common progression blockers.',
    body: [],
    sections: [
      { title: 'How to unlock Cave of Echoes', body: 'Confirmed: the Cave of Echoes sits in the lower-left of the Misty Shores area, west of Orlock\u2019s mansion. It\u2019s locked at first and opens once you finish the "A Bridge Too Far" quest, which reopens the Ambrosia Estate and the Misty Shores area around it.' },
      { title: 'Why Cave of Echoes is still locked', body: 'If you can\u2019t reach it yet, the quest — not a missing key item or shop purchase — is almost always the actual blocker. Community-reported: the area is locked by an in-story feud between Orlock and Fiona over a supposedly cursed bridge.' },
      { title: 'How A Bridge Too Far relates to progression', body: 'See the full A Bridge Too Far quest guide for prerequisites and steps. In short: finish "Orlock\u2019s Wine Scheme" first, then talk to the town\u2019s spellcasters and return to the bridge to lift the feud/curse and open this area.' },
      { title: 'Where to find Copper Ore', body: 'Community-reported: once inside, Copper Ore looks like ordinary rock with copper flecks, mined with a Pickaxe. Large ore clusters can drop up to 6 ore versus 1 from a regular node. Make a Copper Bar at the Furnace using 4 Copper Ore + 1 Charcoal.' },
      { title: 'Where to find Iron Ore', body: 'Confirmed to exist as a later-tier resource in the same mine system, unlocked as the story progresses past the initial copper tier. Exact unlock trigger and in-cave location are not yet independently verified here.' },
      { title: 'When new ore types unlock', body: 'Confirmed: ore access is staged rather than all-at-once — Copper Ore is available first, with Iron Ore and Gold Ore opening up later as you progress the main story, not immediately upon entering the cave.' },
      { title: 'Common mine progression problems', body: 'If you\u2019re missing copper, check A Bridge Too Far first rather than searching the cave harder. If your Pickaxe can\u2019t break a node, it likely needs a tier upgrade at the Howling Hammer (Ridge\u2019s shop) before it can mine that ore type.' },
      { title: 'Is there combat in the mines?', body: 'No — confirmed there is no combat anywhere in Moonlight Peaks, including the mines, so exploring underground stays peaceful.' },
    ],
    related: [{ label: 'A Bridge Too Far quest guide', href: '/quests/story/a-bridge-too-far' }, { label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'Tools', href: '/items/tools' }, { label: 'The town', href: '/locations/town' }, { label: 'Vampster collection guide', href: '/collections/vampsters' }, { label: 'Crystal Cave', href: '/locations/crystal-cave' }],
    faq: [
      { q: 'Is there combat in the mines?', a: 'No — previews confirm there is no combat anywhere in Moonlight Peaks, including the mines.' },
      { q: 'Why can\u2019t I find Copper Ore in the mines?', a: 'Confirmed: Copper Ore is inside the Cave of Echoes, which only opens after completing the "A Bridge Too Far" quest — check your quest progress before assuming you\u2019ve missed a mining spot.' },
    ],
  },
  {
    slug: 'graveyard', title: 'The Graveyard', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-graveyard.webp',
    dek: 'A quiet, moonlit corner in Misty Shores where you meet Death — confirmed as the Ambrosia Graveyard.',
    body: [
      'Confirmed at launch: this graveyard sits within the Misty Shores area, blocked off at first by a bridge that Fiona cursed after a drunken argument with Orlock. Completing the "A Bridge Too Far" quest lifts the curse and opens access.',
      'Once inside, you meet Death here for the first time — his confirmed home, "Death\u2019s Shack," is nearby.',
      'Pre-launch datamined game files name this location "Ambrosia Graveyard," paired with a matching "Ambrosia Mansion" — likely the vampire family\u2019s ancestral estate.',
    ],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Fiona', href: '/characters/fiona' }, { label: 'Vampires', href: '/families/vampires' }],
    faq: [
      { q: 'How do you unlock the graveyard in Moonlight Peaks?', a: 'Confirmed: complete the "A Bridge Too Far" quest, which lifts a curse Fiona placed on the bridge into Misty Shores after an argument with Orlock.' },
      { q: 'Where do you meet Death in Moonlight Peaks?', a: 'Confirmed: inside the Ambrosia Graveyard, once "A Bridge Too Far" unlocks Misty Shores. Death\u2019s confirmed home, "Death\u2019s Shack," is nearby.' },
    ],
  },
  {
    slug: 'shops', title: 'Town Shops', tag: 'Town', status: 'confirmed', image: '/hero-loc-shops.webp',
    dek: 'The named shops around town — now confirmed with owners for most of them.',
    body: [
      'Confirmed shops and owners: the Howling Hammer is Ridge\u2019s tool-upgrade shop (open weekdays only); The Broken Lamp is Samael\u2019s bar; Coffee & Coffins is Mina and Evan\u2019s caf\u00e9; Third Eye Threads is Aras\u2019 tailor shop; and Webb of Wonders is Sabrina\u2019s shop, selling the Alter Ego Elixir and spells \u2014 a pun on her own Webb family name.',
      'Pre-launch datamined game files additionally named a Midnight Market and Bloom Boutique — not yet confirmed against the live game.',
    ],
    related: [{ label: 'The town', href: '/locations/town' }, { label: 'Landmarks', href: '/locations/landmarks' }, { label: 'Characters', href: '/characters' }],
    faq: [
      { q: 'What shops are in Moonlight Peaks?', a: 'Confirmed: the Howling Hammer (tool upgrades, Ridge), The Broken Lamp (bar, Samael), Coffee & Coffins (caf\u00e9, Mina and Evan), Third Eye Threads (clothing, Aras), and Webb of Wonders (potions and clothing, Sabrina).' },
      { q: 'Is there a Midnight Market or Bloom Boutique in Moonlight Peaks?', a: 'Not yet confirmed \u2014 these names appear in pre-launch datamined files but haven\u2019t been verified against the live game.' },
    ],
  },
  {
    slug: 'landmarks', title: 'Landmarks & Notable Places', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'Named places beyond the core areas — most now confirmed with real context.',
    body: [],
    sections: [
      { title: 'Misty Shores, Moonlit Pines, Pink Grove & Luna Bay', body: 'Confirmed: Misty Shores is the Ambrosia family\u2019s area, home to the Cave of Echoes (ore) and the graveyard where you meet Death, unlocked via the "A Bridge Too Far" quest. Moonlit Pines is where the witches\u2019 coven is based. Pink Grove is home to the love demon Llemi, who mostly only appears there during festivals. Luna Bay is where the Hosu mermaid family lives, arriving roughly a year into the story.' },
      { title: 'Moonlit Slopes, the Crypt, Moonlight Tower & Crest Garden', body: 'Also confirmed via the game\u2019s official wiki: Moonlit Slopes, the Crypt, Moonlight Tower, and the Khazan family\u2019s Crest Garden are all real locations. Full descriptions of each are still being verified.' },
    ],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'Seers', href: '/families/seers' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }],
  },
  {
    slug: 'howling-marshes', title: 'Howling Marshes', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-forest.webp',
    dek: 'Just north of town and east of Moonlit Pines \u2014 two confirmed entrances, harvestable Sugarbone and flowers, and the Logan family house.',
    seoTitle: 'Howling Marshes in Moonlight Peaks: Exact Location & How to Get There',
    seoDescription: 'Confirmed across multiple launch-week sources: Howling Marshes sits just north of town and east of Moonlit Pines, with two entrances \u2014 one east of Luna\u2019s seed stall, the other east of Town Hall. Here\u2019s what\u2019s inside and how to reach it.',
    body: [
      'Confirmed via multiple launch-week sources: Howling Marshes is located just north of the main town and east of Moonlit Pines.',
      'Two entrances are confirmed: one just east of Luna\u2019s seed stall in Moonlit Pines, and the other just east of Town Hall. You\u2019re directed here as part of the "Tension in the Crest Garden" story quest.',
      'Confirmed harvestables here include Sugarbone and several flowers \u2014 worth processing at a Cooking Station or Drying Rack rather than selling raw.',
      'The Logan family house is also located here, along with a crypt that\u2019s inaccessible on your first visit, and a northern area that isn\u2019t reachable yet either \u2014 both likely tied to later quests.',
    ],
    related: [{ label: 'All landmarks', href: '/locations/landmarks' }, { label: 'Logan family', href: '/families' }, { label: 'The town', href: '/locations/town' }],
    faq: [
      { q: 'Where are the Howling Marshes in Moonlight Peaks?', a: 'Confirmed: just north of the main town and east of Moonlit Pines. There are two entrances \u2014 one just east of Luna\u2019s seed stall in Moonlit Pines, and the other just east of Town Hall.' },
      { q: 'How do you unlock Howling Marshes?', a: 'You\u2019re directed here as part of the "Tension in the Crest Garden" story quest \u2014 it\u2019s not gated behind a separate unlock.' },
      { q: 'What can you harvest in Howling Marshes?', a: 'Confirmed harvestables include Sugarbone and several flowers. They\u2019re worth processing at a Cooking Station or Drying Rack rather than selling raw for the best value.' },
    ],
  },
  {
    slug: 'town-hall', title: 'Town Hall', tag: 'Town', status: 'confirmed', image: '/images/moonlight-peaks/official/town-hall-garden-01.webp',
    dek: 'Where you register as a new resident, run by Mayor Brook.',
    body: [
      'Confirmed at launch: Town Hall is where you register as a new resident early on, meeting Mayor Brook (patriarch of the Logan werewolf family), who gifts you Chester, the living storage chest, during that visit.',
      'The town\u2019s bulletin board — Albertus\u2019 Jobs, run by an owl named Albertus — is also based here, listing available quests.',
    ],
    related: [{ label: 'Brook', href: '/characters/brook' }, { label: 'Albertus', href: '/characters/albertus' }, { label: 'The town', href: '/locations/town' }],
    faq: [
      { q: 'Who runs Town Hall in Moonlight Peaks?', a: 'Confirmed: Mayor Brook, patriarch of the Logan werewolf family, who gifts you Chester (a living storage chest) when you register as a new resident.' },
      { q: 'Where is the quest board in Moonlight Peaks?', a: 'Confirmed: Albertus\u2019 Jobs, a bulletin board run by an owl named Albertus, is based at Town Hall and lists available quests.' },
    ],
  },
  {
    slug: 'ambrosia-mansion', title: 'Ambrosia Mansion', tag: 'Homestead', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'The Ambrosia vampire family\u2019s ancestral home.',
    body: [
      'Confirmed via the game\u2019s official wiki: Ambrosia Mansion is the vampire Ambrosia family\u2019s home, paired with the nearby Ambrosia Graveyard where Death can be found.',
    ],
    related: [{ label: 'Orlock', href: '/characters/orlock' }, { label: 'Vampires', href: '/families/vampires' }, { label: 'The graveyard', href: '/locations/graveyard' }],
    faq: [
      { q: 'Who lives in Ambrosia Mansion?', a: 'Confirmed via the game\u2019s official wiki: the vampire Ambrosia family, whose ancestral home this is.' },
      { q: 'Is Ambrosia Mansion near the graveyard?', a: 'Yes, confirmed: Ambrosia Mansion is paired with the nearby Ambrosia Graveyard, where Death can be found.' },
    ],
  },
  {
    slug: 'silverveil-museum', title: 'The Museum', tag: 'Town', status: 'confirmed', image: '/images/moonlight-peaks/official/museum-02.webp',
    dek: 'A donation-based collection building that opens partway into year one, once Persephone, Jada, and Winston move to town.',
    body: [
      'Confirmed: the museum doesn\u2019t exist from day one \u2014 it opens once a story thread involving Persephone, Jada, and Winston moving into town (the abandoned house on the pier) plays out. Community-reported: for many players this lands around the start of Autumn in year one, though it depends on your own pace through early quests.',
      'Confirmed: donating works differently from talking to a shopkeeper. The museum has several themed collection rooms, reached via a portal in the main room, and you donate by walking up to the relevant collection and interacting with an exclamation-point sign next to it \u2014 the same icon style used elsewhere for pending story content.',
      'Confirmed via Neoseeker\u2019s museum guide: four named collections so far \u2014 the Aquarium (all fish, one regular-quality catch of each needed), the Critter Collection (one regular-quality critter of each), the Farming Collection (crops, growables, and resources, but specifically requiring Perfect quality on every row, not just any quality), and the Deity Collection (one-time artifact finds, regular quality). Rows stay hidden until you\u2019ve discovered that item at least once.',
      'Confirmed: items you\u2019re still missing from a collection show a small museum icon in your inventory, so you don\u2019t accidentally sell or use something you still need. The Farming Collection is the one to watch closely since it demands Perfect quality specifically \u2014 hold onto your best harvests rather than selling everything.',
      'Not yet independently confirmed here: the exact total number of collection rooms/entries, and what specific rewards each collection unlocks overall.',
    ],
    related: [{ label: 'Items', href: '/items' }, { label: 'Fishing', href: '/fishing' }, { label: 'Characters', href: '/characters' }],
    faq: [
      { q: 'When does the museum open in Moonlight Peaks?', a: 'Confirmed: not from day one \u2014 it opens once Persephone, Jada, and Winston move to town, a story thread that lands around the start of Autumn in year one for many players.' },
      { q: 'How do you donate to the museum?', a: 'Confirmed: walk up to the relevant collection room (reached via a portal in the main room) and interact with an exclamation-point sign next to it, rather than talking to a shopkeeper.' },
    ],
  },
  {
    slug: 'yoga-shack', title: 'Yoga Shack', tag: 'Town', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'A confirmed activity spot for yoga, one of the game\u2019s "dark diversions."',
    body: [
      'Confirmed to exist via the game\u2019s official wiki, tied to yoga — one of the hobby activities alongside fishing, cooking, and Nokturna.',
    ],
    related: [{ label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'khazan-temple', title: 'Khazan Temple', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'A location tied to the Khazan seer family.',
    body: [
      'Confirmed to exist via the game\u2019s official wiki. Further detail on what happens here is not yet sourced.',
    ],
    related: [{ label: 'Seers', href: '/families/seers' }, { label: 'Dragan', href: '/characters/dragan' }],
  },
  {
    slug: 'crystal-cave', title: 'Crystal Cave & Twilight Catacombs', tag: 'Underground', status: 'confirmed', image: '/hero-loc-mines.webp',
    dek: 'A gem-bearing cave separate from the Cave of Echoes, located beside Fiona\u2019s house.',
    seoTitle: 'Crystal Cave in Moonlight Peaks: Exact Location & How to Unlock It',
    seoDescription: 'Confirmed: the Moonlight Peaks Crystal Cave sits beside Fiona\u2019s house, blocked by a boulder until your pickaxe hits Copper tier. Here\u2019s the exact route in, plus what to mine once you\u2019re inside (Rose Quartz, Moon Crystal).',
    body: [
      'Confirmed: the Crystal Cave is a distinct underground area from the Cave of Echoes, located to the left of Fiona\u2019s house. A large boulder blocks the entrance until you upgrade your pickaxe to at least Copper level.',
      'Confirmed: inside, Rose Quartz nodes spawn generously, along with other gemstones. Rose Quartz is ground into a powder using the Enchanted Mortar (unlocked once you start learning magic) and is used in several crafting recipes and quests.',
      'Confirmed via the game\u2019s official wiki: alongside the Cave of Echoes, the mines also include a further zone called the Twilight Catacombs \u2014 suggesting the underground areas are split into multiple distinct zones rather than one cave. Confirmed elsewhere: this is also where Vampsters (small creatures found hiding around town and inside most houses) get carried through a hole to complete their collection questline.',
      'Confirmed: the entrance to the Twilight Catacombs is a locked cellar door found near Viktor\u2019s crypt. The key comes from Jada, awarded once you reach 25% completion on your museum collection \u2014 not from a story quest or shop purchase, so catching critters and growing 2-star-quality produce for donation is the actual path to opening it.',
      'Reaching the Crystal Cave itself requires Misty Shores to already be unlocked (via the "A Bridge Too Far" quest), since that\u2019s the area the Cave of Echoes and its pickaxe upgrades are found in.',
    ],
    related: [{ label: 'The mines', href: '/locations/mines' }, { label: 'A Bridge Too Far', href: '/quests/story/a-bridge-too-far' }, { label: 'Tools', href: '/items/tools' }],
    faq: [
      { q: 'Where is the Crystal Cave in Moonlight Peaks?', a: 'Confirmed: it\u2019s a distinct underground area to the left of Fiona\u2019s house, separate from the Cave of Echoes. A boulder blocks the entrance until your pickaxe reaches Copper tier.' },
      { q: 'What do you get from the Crystal Cave?', a: 'Confirmed: Rose Quartz nodes spawn generously alongside other gemstones. Rose Quartz is ground into powder with the Enchanted Mortar and used in several crafting recipes and quests.' },
      { q: 'How do you unlock the Twilight Catacombs / the locked cellar door near Viktor\u2019s crypt?', a: 'Confirmed: that locked door isn\u2019t opened by a quest, item, or shop purchase \u2014 the key comes from Jada once your museum collection reaches 25% completion. If you\u2019ve been ignoring the museum, catching critters and growing higher-quality (2-star) produce to donate is the actual path to that key.' },
    ],
  },
  {
    slug: 'twilight-catacombs', title: 'Twilight Catacombs', tag: 'Underground', status: 'confirmed', image: '/images/moonlight-peaks/official/museum-02.webp',
    dek: 'A locked underground tunnel network connecting the Crypt, Crystal Cave, Misty Shores graveyard, Luna Bay, and Howling Marshes, unlocked by donating to the Museum.',
    body: [
      'Confirmed: the Twilight Catacombs are a locked, underground tunnel network with entrances and exits scattered across the map, rather than a single self-contained dungeon. Doors are found in the Crypt (where Viktor stays) and in the Misty Shores graveyard, and interacting with them before unlocking simply says they\u2019re "locked from the other side" without explaining how to open them.',
      'Confirmed: the unlock path runs through the Museum, not a standalone key item you find by exploring. Reach 25% completion on your overall Museum donation progress, and Jada gives you the Dracula Insignia Key. Show that key to Viktor in the Crypt to trigger the "A Key to the Deep" quest and open the catacombs.',
      'Confirmed: once inside, the tunnel network connects several of the game\u2019s underground and outdoor areas via blue pressure plates \u2014 one links to a collapsed doorway in the Crystal Cave, another to the catacombs entrance in the Misty Shores graveyard, another north along the river to a collapsed doorway in Luna Bay, and another east to the catacombs entrance in the Howling Marshes.',
      'Reported by a walkthrough: after finding these connections, sleeping in your coffin and checking your mailbox the next day brings a letter from Samael. Visiting him at The Broken Lamp unlocks a further entrance for you.',
    ],
    related: [{ label: 'Crystal Cave', href: '/locations/crystal-cave' }, { label: 'The mines', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Museum', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'How do you unlock the Twilight Catacombs in Moonlight Peaks?', a: 'Confirmed: reach 25% completion on your Museum donation progress to receive the Dracula Insignia Key from Jada, then show it to Viktor in the Crypt to start the "A Key to the Deep" quest, which opens the catacombs.' },
      { q: 'Where are the Twilight Catacombs entrances in Moonlight Peaks?', a: 'Confirmed entrances are in the Crypt (Viktor\u2019s location) and the Misty Shores graveyard. Reported by a walkthrough: internal pressure plates also connect through to Crystal Cave, Luna Bay, and Howling Marshes once you\u2019re inside.' },
      { q: 'What do the blue pressure plates do in the Twilight Catacombs?', a: 'Reported by a walkthrough: stepping on each one opens a shortcut connection to a different collapsed doorway elsewhere on the map \u2014 Crystal Cave, the Misty Shores graveyard, Luna Bay, and Howling Marshes \u2014 turning the catacombs into a hub that shortens travel between those areas.' },
    ],
  },
  {
    slug: 'crest-garden', title: 'Crest Garden', tag: 'Town', status: 'confirmed', image: '/images/moonlight-peaks/official/town-hall-garden-01.webp',
    dek: 'A town garden beside Town Hall that displays the crests of all seven families as you unlock them through the main story.',
    seoTitle: 'Crest Garden in Moonlight Peaks: Location & How the Family Crests Unlock',
    seoDescription: 'Confirmed by the official wiki: the Crest Garden sits beside Town Hall and displays all seven family crests as you unlock them through the main story \\u2014 including why one crest can go missing and which two unlock last.',
    body: [
      'Confirmed by the official wiki: the Crest Garden is located beside Town Hall and displays the crests of each of Moonlight Peaks\u2019 seven families as they\u2019re unlocked through story progression \u2014 a visual tracker of how far you\u2019ve advanced the game\u2019s central family storylines.',
      'Reported by a walkthrough: the Logan family crest specifically goes missing partway through, sending you on a fetch-quest detour \u2014 Dragan points you to The Broken Lamp for information, which leads to the Howling Marshes, where Yabbis turns out to have eaten the crest and wants a Copper Bar in exchange for it back.',
      'Reported by a walkthrough: the last two crests to fill in belong to the two vampire families, Ambrosia and Dracula. Orlock asks for crafting materials (refined stone, gold bars, and glass) for the Ambrosia crest, while the Dracula crest quest is described as the emotional conclusion of the main story, triggered by a letter a few days after unlocking bat transformation.',
    ],
    related: [{ label: 'Town Hall', href: '/locations/town-hall' }, { label: 'Families', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Where is the Crest Garden in Moonlight Peaks?', a: 'Confirmed by the official wiki: it\u2019s located beside Town Hall.' },
      { q: 'What does the Crest Garden do in Moonlight Peaks?', a: 'Confirmed: it displays the crests of all seven families in town, unlocking one by one as you advance each family\u2019s main story content.' },
      { q: 'Why is a family crest missing from the Crest Garden?', a: 'Reported by a walkthrough: at least one crest (Logan\u2019s) is written as a small fetch-quest detour rather than unlocking automatically \u2014 in that case, Yabbis had eaten it and wanted a Copper Bar to trade it back.' },
      { q: 'Which crests unlock last in the Crest Garden?', a: 'Reported by a walkthrough: the two vampire family crests, Ambrosia and Dracula, are the last to fill in, with the Dracula crest quest described as the story\u2019s emotional conclusion.' },
    ],
  },
  {
    slug: 'moonlit-slopes', title: 'Moonlit Slopes', tag: 'Landmark', status: 'confirmed', image: '/images/moonlight-peaks/official/moonlit-slopes-03.webp',
    dek: 'The Moon Goddess\u2019s home, confirmed to stay locked again after your first invitation until Bat form unlocks.',
    body: [
      'Confirmed: Moonlit Slopes is the Moon Goddess\u2019s home, reached after resolving the "A Missing Moon" story arc, where the Khazan family\u2019s seers fall into simultaneous trances and the Moon vanishes from the sky. A short follow-up quest, "The Moon in the Sky," has her formally invite you to visit.',
      'Confirmed: after that first visit, Moonlit Slopes locks again and stays inaccessible until you unlock Bat form through the "Master of the Night" quest \u2014 so if you can\u2019t get back in right after meeting the Moon Goddess, that\u2019s expected rather than a bug.',
    ],
    related: [{ label: 'Shapeshifting', href: '/shapeshifting' }, { label: 'Moon Goddess', href: '/characters/moon-goddess' }, { label: 'Quests', href: '/quests' }],
    faq: [
      { q: 'Where do you meet the Moon Goddess in Moonlight Peaks?', a: 'Confirmed: at Moonlit Slopes, after completing "A Missing Moon" and the short follow-up quest "The Moon in the Sky," where she formally invites you.' },
      { q: 'Why can\u2019t I go back to Moonlit Slopes after visiting once?', a: 'Confirmed: the area locks again after your first visit and only reopens once you unlock Bat form via the "Master of the Night" quest \u2014 this is expected, not a bug.' },
    ],
  },
  {
    slug: 'midnight-market', title: 'Midnight Market', tag: 'Shop', status: 'confirmed',
    dek: 'A weekend-only market in town selling animal hats, potion ingredients, and other items not available on weeknights.',
    body: [
      'Confirmed by community reports: the Midnight Market is a weekend-only event in town, running Saturdays and Sundays, distinct from the game\u2019s regular weekday shops.',
      'Reported: Snek sells tiny hats for your farm animals at the Midnight Market, and Sabrina sells the Alchemist\u2019s Globe and other potion-related items there as well \u2014 items not confirmed to be available from either character during regular weekday hours.',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Farm animals', href: '/farm/animals' }, { label: 'Potions', href: '/items/potions' }],
    faq: [
      { q: 'When is the Midnight Market open in Moonlight Peaks?', a: 'Reported by the community: Saturdays and Sundays only, distinct from the game\u2019s regular weekday shop hours.' },
      { q: 'What can you buy at the Midnight Market in Moonlight Peaks?', a: 'Reported: tiny hats for farm animals from Snek, and the Alchemist\u2019s Globe and other potion-related items from Sabrina \u2014 items not confirmed to be sold on regular weekdays.' },
    ],
  },
  {
    slug: 'bloom-boutique', title: 'Bloom Boutique', tag: 'Shop', status: 'expected',
    dek: 'A named shop confirmed to exist in town via the official wiki\u2019s own navigation, with details still unconfirmed.',
    body: [
      'Confirmed to exist by the official wiki\u2019s own site navigation, listed alongside the game\u2019s other named shops. Beyond the name, we don\u2019t yet have independently verified details on what Bloom Boutique sells, who runs it, or its opening hours \u2014 we\u2019re not guessing at a theme just because the name suggests flowers.',
      'Given the name and the game\u2019s existing flower-arranging and gifting systems, a flower or decor focus would be a reasonable guess, but we\u2019re labeling this expected rather than confirmed until a source verifies it against the live game.',
    ],
    related: [{ label: 'Shops', href: '/locations/shops' }, { label: 'Activities: flower arranging', href: '/activities/flower-arranging' }],
    faq: [
      { q: 'What is Bloom Boutique in Moonlight Peaks?', a: 'Confirmed to exist as a named shop via the official wiki\u2019s own navigation. What it sells and who runs it are not yet independently confirmed here \u2014 we don\u2019t guess at shop contents from the name alone.' },
    ],
  },
];

