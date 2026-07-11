export type CollectionStatus = 'official-source' | 'needs-table-fill';

export type CollectionEntry = {
  slug: string;
  title: string;
  tag: string;
  status: CollectionStatus;
  image: string;
  dek: string;
  summary: string;
  officialSource: {
    label: string;
    url: string;
  };
  quickFacts: { label: string; value: string }[];
  tableColumns: string[];
  tableRows: string[][];
  verify: string[];
  related: { label: string; href: string }[];
};

const tbc = 'To be filled from official source';

export const collections: CollectionEntry[] = [
  {
    slug: 'fish',
    title: 'Fish',
    tag: 'Fishing Collection',
    status: 'official-source',
    image: '/hero-loc-lake.webp',
    dek: 'Fish collection hub for species, locations, seasons, weather, time windows, quality, sell value, and cooking use.',
    summary: 'Fish are now treated as a World collection instead of a generic item category. This page is structured to hold the official fish list in a cleaner format: species cards, catch conditions, values, quality tiers, uses, and related fishing guides. Values should be filled from the official wiki and live-game checks, not guessed.',
    officialSource: {
      label: 'Fish - Official Moonlight Peaks Wiki',
      url: 'https://moonlightpeaks.wiki.gg/wiki/Fish',
    },
    quickFacts: [
      { label: 'Primary activity', value: 'Fishing' },
      { label: 'Data model', value: 'Species, location, season, weather, time, quality, sell value, use' },
      { label: 'Source rule', value: 'Official wiki and live-game verification before adding exact values' },
    ],
    tableColumns: ['Fish', 'Location', 'Season', 'Weather', 'Time', 'Value', 'Use'],
    tableRows: [
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / cooking / selling'],
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / cooking / selling'],
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / cooking / selling'],
    ],
    verify: ['Exact fish names', 'Catch locations', 'Season and weather rules', 'Quality-tier values', 'Cooking and gift uses'],
    related: [{ label: 'Fishing activity', href: '/activities/fishing' }, { label: 'The lake', href: '/locations/lake' }, { label: 'Map', href: '/map' }],
  },
  {
    slug: 'albertus-jobs',
    title: "Albertus' Jobs",
    tag: 'Jobs Collection',
    status: 'official-source',
    image: '/albertus.webp',
    dek: 'Job board style collection for Albertus tasks, objectives, rewards, repeatability, and unlock timing.',
    summary: "Albertus' Jobs belong better under World collections than Items because players need task objectives and reward tracking rather than item stats. This page is prepared for a job-by-job table with requirements, reward notes, and completion state once the official source is transcribed into your own format.",
    officialSource: {
      label: "Albertus' Jobs - Official Moonlight Peaks Wiki",
      url: 'https://moonlightpeaks.wiki.gg/wiki/Albertus%27_Jobs',
    },
    quickFacts: [
      { label: 'Primary system', value: 'Jobs and requests' },
      { label: 'Best page format', value: 'Objective checklist plus reward table' },
      { label: 'Source rule', value: 'Use official wiki as source, rewrite in your own guide format' },
    ],
    tableColumns: ['Job', 'Objective', 'Unlock', 'Reward', 'Repeatable', 'Notes'],
    tableRows: [
      [tbc, tbc, tbc, tbc, tbc, 'Use official source before publishing exact job details'],
      [tbc, tbc, tbc, tbc, tbc, 'Use official source before publishing exact job details'],
      [tbc, tbc, tbc, tbc, tbc, 'Use official source before publishing exact job details'],
    ],
    verify: ['Job names', 'Objective counts', 'Reward amounts/items', 'Unlock timing', 'Repeatability'],
    related: [{ label: 'Albertus', href: '/characters/albertus' }, { label: 'Quests', href: '/quests' }, { label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'critters',
    title: 'Critters',
    tag: 'Creature Collection',
    status: 'official-source',
    image: '/hero-loc-forest.webp',
    dek: 'Catchable critters collection moved from Items into World collections, with spawn rules and display/use fields.',
    summary: 'Critters are no longer presented as a simple item category. They are a collection system: catchable creatures with locations, seasonal/weather rules, and possible display or use notes. This page keeps the old item-page concept but upgrades the format into a collection-first guide.',
    officialSource: {
      label: 'Critters - Official Moonlight Peaks Wiki',
      url: 'https://moonlightpeaks.wiki.gg/wiki/Critters',
    },
    quickFacts: [
      { label: 'Migrated from', value: 'Items / Critters' },
      { label: 'Primary activity', value: 'Catching and collection tracking' },
      { label: 'Data model', value: 'Critter, location, season, weather, time, value, display/use' },
    ],
    tableColumns: ['Critter', 'Location', 'Season', 'Weather', 'Time', 'Value', 'Use'],
    tableRows: [
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / display / selling'],
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / display / selling'],
      [tbc, tbc, tbc, tbc, tbc, tbc, 'Collection / display / selling'],
    ],
    verify: ['Official critter names', 'Spawn conditions', 'Catch method', 'Sell value', 'Display behavior'],
    related: [{ label: 'Activities', href: '/activities' }, { label: 'The forest', href: '/locations/forest' }, { label: 'Items', href: '/items' }],
  },
  {
    slug: 'vampsters',
    title: 'Vampsters',
    tag: 'Hidden Creature Collection',
    status: 'official-source',
    image: '/hero-act-shapeshifting.webp',
    dek: 'Hidden Vampster collection for locations, carry rules, turn-in notes, rewards, and completion progress.',
    summary: 'Vampsters are better treated as a hidden-world collection than an item. This page is structured for a location checklist and reward notes, with clear separation between official source data and player-discovered route tips.',
    officialSource: {
      label: 'Vampsters - Official Moonlight Peaks Wiki',
      url: 'https://moonlightpeaks.wiki.gg/wiki/Vampsters',
    },
    quickFacts: [
      { label: 'Collection type', value: 'Hidden creatures' },
      { label: 'Best page format', value: 'Location checklist with completion notes' },
      { label: 'Source rule', value: 'Official names and locations first; route tips second' },
    ],
    tableColumns: ['Vampster', 'Area', 'Exact spot', 'Requirement', 'Turn-in', 'Reward note'],
    tableRows: [
      [tbc, tbc, tbc, tbc, tbc, 'Do not publish route data until verified'],
      [tbc, tbc, tbc, tbc, tbc, 'Do not publish route data until verified'],
      [tbc, tbc, tbc, tbc, tbc, 'Do not publish route data until verified'],
    ],
    verify: ['Total count', 'Exact locations', 'Carry/turn-in rules', 'Quest unlock', 'Completion reward'],
    related: [{ label: 'Shapeshifting', href: '/shapeshifting' }, { label: 'Orlock', href: '/characters/orlock' }, { label: 'Map', href: '/map' }],
  },
  {
    slug: 'soul-blobs',
    title: 'Soul Blobs',
    tag: 'Spectral Collection',
    status: 'official-source',
    image: '/hero-loc-graveyard.webp',
    dek: 'Soul Blob collection page for map locations, capture tool, progress tracking, and final reward notes.',
    summary: 'Soul Blobs are a world collection with strong search value because players need locations, completion tracking, capture rules, and reward confirmation. This page is prepared for official-source data in a compact table plus a safer route checklist format.',
    officialSource: {
      label: 'Soul Blobs - Official Moonlight Peaks Wiki',
      url: 'https://moonlightpeaks.wiki.gg/wiki/Soul_Blobs',
    },
    quickFacts: [
      { label: 'Collection type', value: 'Spectral collectibles' },
      { label: 'Best page format', value: 'Region checklist plus reward summary' },
      { label: 'Source rule', value: 'Official wiki source linked; exact map data to be verified before publishing' },
    ],
    tableColumns: ['Soul Blob', 'Region', 'Exact spot', 'Tool/requirement', 'Progress note', 'Reward note'],
    tableRows: [
      [tbc, tbc, tbc, tbc, 'Unchecked', 'Completion reward pending source fill'],
      [tbc, tbc, tbc, tbc, 'Unchecked', 'Completion reward pending source fill'],
      [tbc, tbc, tbc, tbc, 'Unchecked', 'Completion reward pending source fill'],
    ],
    verify: ['Total count', 'Exact region list', 'Capture method', 'Quest unlock', 'Reward'],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Map', href: '/map' }, { label: 'Critters', href: '/collections/critters' }],
  },
];

export const collectionBySlug = new Map(collections.map((entry) => [entry.slug, entry]));
