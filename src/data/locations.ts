import type { TopicItem, TopicSection } from './topic';

export const locationsSection: TopicSection = {
  base: '/locations',
  label: 'Locations',
  eyebrow: 'World',
  heading: 'Moonlight Peaks <em>locations</em>',
  schemaType: 'Place',
  title: 'Moonlight Peaks Locations —Town, Farm, Forest & More',
  description: 'A guide to the places in Moonlight Peaks: the magical mountain town, your farm and cottage, the forest, the lake, the mines and more —what is confirmed and what we expect at launch.',
  intro: 'The places that make up Moonlight Peaks —the magical mountain town, your homestead, and the wild spots around it. We mark what is developer-confirmed versus reported, datamined (from pre-launch game files, cross-referenced against pre-launch references), or expected, and fill in detail as the July 7, 2026 launch lands.',
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
    slug: 'your-farm', title: 'Your Farm', tag: 'Homestead', status: 'confirmed', image: '/hero-loc-your-farm.webp',
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
    slug: 'forest', title: 'The Forest', tag: 'Wilds', status: 'reported', image: '/hero-loc-forest.webp',
    dek: 'The woods around town, where you forage after dark.',
    body: [
      'Foraging in the woods is one of the game\u2019s confirmed activities, so expect seasonal finds among the trees on the edge of town.',
      'The exact forageables and any forest landmarks are confirmed once the full game is out.',
    ],
    related: [{ label: 'Foraging', href: '/activities/foraging' }, { label: 'Werewolves', href: '/families/werewolves' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'lake', title: 'The Lake', tag: 'Water', status: 'reported', image: '/hero-loc-lake.webp',
    dek: 'The town\u2019s waters, home to fishing and to the mermaid family.',
    body: [
      'Water areas support fishing, one of the demo\u2019s featured activities. The town\u2019s mermaids —one of the seven families —are tied to the water.',
      'Pre-launch datamined game files (cross-referenced against pre-launch references) list a "Silverveil Lake" —likely this location\u2019s proper in-game name, though not yet developer-confirmed.',
      'Named fish and specific spots are confirmed at launch.',
    ],
    related: [{ label: 'Fishing', href: '/activities/fishing' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'The pier', href: '/locations/pier' }],
  },
  {
    slug: 'pier', title: 'The Pier', tag: 'Water', status: 'expected', image: '/hero-loc-pier.webp',
    dek: 'A spot out over the water for fishing and quiet moments.',
    body: [
      'Fishing waters in cozy sims usually include a pier or dock to cast from.',
      'Whether Moonlight Peaks names a specific pier is confirmed at launch —for now, treat this as part of the lakeside fishing area.',
    ],
    related: [{ label: 'Fishing', href: '/activities/fishing' }, { label: 'The lake', href: '/locations/lake' }],
  },
  {
    slug: 'mines', title: 'The Mines', tag: 'Underground', status: 'confirmed', image: '/hero-loc-mines.webp',
    dek: 'Underground areas you can explore — with no combat — including the confirmed Cave of Echoes.',
    body: [
      'Hands-on press coverage describes a mines area you can explore, and confirms there is no combat anywhere in the game, so heading underground stays peaceful.',
      'Confirmed: the Cave of Echoes sits at the bottom-left of the map, inside the Misty Shores area, and is your source of ore (copper, iron, gold) for tool upgrades. It unlocks more material types as the story progresses rather than all at once.',
      'Pre-launch datamined game files also referenced Crystal Cave, Twilight Catacombs, and Lost Moon Alcove as other underground zone names — not yet developer-confirmed alongside the Cave of Echoes.',
    ],
    related: [{ label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'Tools', href: '/items/tools' }, { label: 'The town', href: '/locations/town' }],
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
      'Confirmed shops and owners: the Howling Hammer is Ridge\u2019s tool-upgrade shop (open weekdays only); The Broken Lamp is Samael\u2019s bar; Coffee & Coffins is Mina and Evan\u2019s caf\u00e9; Third Eye Threads is Aras\u2019 tailor shop; and Web of Wonders is Sabrina\u2019s shop, selling the Alter Ego Elixir and spells (also spelled "Webb of Wonders" in some coverage).',
      'Pre-launch datamined game files additionally named a Midnight Market and Bloom Boutique — not yet confirmed against the live game.',
    ],
    related: [{ label: 'The town', href: '/locations/town' }, { label: 'Landmarks', href: '/locations/landmarks' }, { label: 'Characters', href: '/characters' }],
  },
  {
    slug: 'landmarks', title: 'Landmarks & Notable Places', tag: 'Wilds', status: 'confirmed', image: '/hero-loc-landmarks.webp',
    dek: 'Named places beyond the core areas — most now confirmed with real context.',
    body: [
      'Confirmed: Misty Shores is the Ambrosia family\u2019s area, home to the Cave of Echoes (ore) and the graveyard where you meet Death, unlocked via the "A Bridge Too Far" quest. Moonlit Pines is where the witches\u2019 coven is based. Pink Grove is home to the love demon Llemi, who mostly only appears there during festivals. Luna Bay is where the Hosu mermaid family lives, arriving roughly a year into the story.',
      'Pre-launch datamined game files additionally named the Crypt, Howling Marshes, and Moonlight Tower — not yet confirmed against the live game.',
    ],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Mermaids', href: '/families/mermaids' }, { label: 'Seers', href: '/families/seers' }],
  },
  {
    slug: 'town-hall', title: 'Town Hall', tag: 'Town', status: 'confirmed', image: '/hero-loc-town.webp',
    dek: 'Where you register as a new resident, run by Mayor Brook.',
    body: [
      'Confirmed at launch: Town Hall is where you register as a new resident early on, meeting Mayor Brook (patriarch of the Logan werewolf family), who gifts you Chester, the living storage chest, during that visit.',
      'The town\u2019s bulletin board — Albertus\u2019 Jobs, run by an owl named Albertus — is also based here, listing available quests.',
    ],
    related: [{ label: 'Brook', href: '/characters/brook' }, { label: 'Albertus', href: '/characters/albertus' }, { label: 'The town', href: '/locations/town' }],
  },
];

