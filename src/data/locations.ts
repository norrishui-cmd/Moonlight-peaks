import type { TopicItem, TopicSection } from './topic';

export const locationsSection: TopicSection = {
  base: '/locations',
  label: 'Locations',
  eyebrow: 'World',
  heading: 'Moonlight Peaks <em>locations</em>',
  schemaType: 'Place',
  title: 'Moonlight Peaks Locations: Town, Howling Marshes, Crest Garden & More',
  description: 'Every confirmed Moonlight Peaks location: the town, your farm, Misty Shores, the Cave of Echoes, Howling Marshes, Crest Garden, and more — developer-confirmed facts kept separate from reports.',
  intro: 'The places that make up Moonlight Peaks — the magical mountain town, your homestead, and the wild spots around it. We mark what is developer-confirmed versus reported, datamined (from pre-launch game files, cross-referenced against pre-launch references), or expected, updating each entry as more is verified against the live game.',
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
    faq: [{ q: 'Where is Moonlight Peaks set?', a: 'In a small magical mountain town that is home to seven supernatural families.' }],
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
      'Pre-launch datamined game files (cross-referenced against pre-launch references) refer to this starting farmland internally as "the Plot" —not developer-confirmed as the in-game name players will see.',
    ],
    related: [{ label: 'Farming guide', href: '/farming' }, { label: 'Your cottage', href: '/locations/your-cottage' }, { label: 'Magic', href: '/magic' }],
    faq: [{ q: 'Do you farm during the day in Moonlight Peaks?', a: 'No —you farm by night and return to your coffin by sunrise.' }],
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
    related: [{ label: 'A Bridge Too Far quest guide', href: '/quests/a-bridge-too-far' }, { label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'Tools', href: '/items/tools' }, { label: 'The town', href: '/locations/town' }],
    faq: [{ q: 'Is there combat in the mines?', a: 'No — previews confirm there is no combat anywhere in Moonlight Peaks, including the mines.' }],
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
  },
  {
    slug: 'shops', title: 'Town Shops', tag: 'Town', status: 'confirmed', image: '/hero-loc-shops.webp',
    dek: 'The named shops around town — now confirmed with owners for most of them.',
    body: [
      'Confirmed shops and owners: the Howling Hammer is Ridge\u2019s tool-upgrade shop (open weekdays only); The Broken Lamp is Samael\u2019s bar; Coffee & Coffins is Mina and Evan\u2019s caf\u00e9; Third Eye Threads is Aras\u2019 tailor shop; and Webb of Wonders is Sabrina\u2019s shop, selling the Alter Ego Elixir and spells \u2014 a pun on her own Webb family name.',
      'Pre-launch datamined game files additionally named a Midnight Market and Bloom Boutique — not yet confirmed against the live game.',
    ],
    related: [{ label: 'The town', href: '/locations/town' }, { label: 'Landmarks', href: '/locations/landmarks' }, { label: 'Characters', href: '/characters' }],
  },
  {
    slug: 'landmarks', title: 'Landmarks & Notable Places', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'Named places beyond the core areas — most now confirmed with real context.',
    body: [
      'Confirmed: Misty Shores is the Ambrosia family\u2019s area, home to the Cave of Echoes (ore) and the graveyard where you meet Death, unlocked via the "A Bridge Too Far" quest. Moonlit Pines is where the witches\u2019 coven is based. Pink Grove is home to the love demon Llemi, who mostly only appears there during festivals. Luna Bay is where the Hosu mermaid family lives, arriving roughly a year into the story.',
      'Confirmed via the game\u2019s official wiki: the Crypt, Howling Marshes, and Moonlight Tower are real locations too, alongside Moonlit Slopes and the Khazan family\u2019s Crest Garden — full descriptions of each are still being verified.',
    ],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'Seers', href: '/families/seers' }],
  },
  {
    slug: 'town-hall', title: 'Town Hall', tag: 'Town', status: 'confirmed', image: '/images/moonlight-peaks/official/town-hall-garden-01.webp',
    dek: 'Where you register as a new resident, run by Mayor Brook.',
    body: [
      'Confirmed at launch: Town Hall is where you register as a new resident early on, meeting Mayor Brook (patriarch of the Logan werewolf family), who gifts you Chester, the living storage chest, during that visit.',
      'The town\u2019s bulletin board — Albertus\u2019 Jobs, run by an owl named Albertus — is also based here, listing available quests.',
    ],
    related: [{ label: 'Brook', href: '/characters/brook' }, { label: 'Albertus', href: '/characters/albertus' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'ambrosia-mansion', title: 'Ambrosia Mansion', tag: 'Homestead', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'The Ambrosia vampire family\u2019s ancestral home.',
    body: [
      'Confirmed via the game\u2019s official wiki: Ambrosia Mansion is the vampire Ambrosia family\u2019s home, paired with the nearby Ambrosia Graveyard where Death can be found.',
    ],
    related: [{ label: 'Orlock', href: '/characters/orlock' }, { label: 'Vampires', href: '/families/vampires' }, { label: 'The graveyard', href: '/locations/graveyard' }],
  },
  {
    slug: 'silverveil-museum', title: 'The Museum', tag: 'Town', status: 'confirmed', image: '/images/moonlight-peaks/official/museum-02.webp',
    dek: 'A confirmed collection/donation building in town.',
    body: [
      'Confirmed to exist via the game\u2019s official wiki. What you can donate and what it rewards are not yet sourced — many cozy sims use a museum for turning in fish, minerals, or artifacts.',
    ],
    related: [{ label: 'Items', href: '/items' }, { label: 'Fishing', href: '/fishing' }],
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
    dek: 'Additional underground zones beyond the Cave of Echoes.',
    body: [
      'Confirmed to exist via the game\u2019s official wiki, alongside the Cave of Echoes and Lost Moon Alcove — suggesting the mines are split into several distinct underground zones rather than one cave.',
    ],
    related: [{ label: 'The mines', href: '/locations/mines' }, { label: 'Tools', href: '/items/tools' }],
  },
];

