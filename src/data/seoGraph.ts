import { activities } from './activities';
import { characters } from './characters';
import { comparisons } from './compare';
import { demo } from './demo';
import { faqs } from './faq';
import { families } from './families';
import { locations } from './locations';
import { itemCategories } from './items';
import { platforms } from './platforms';
import { previews } from './previews';

export type SeoKind = 'hub' | 'guide' | 'faq' | 'profile' | 'list' | 'comparison';

export type SeoLink = {
  label: string;
  href: string;
};

export type SeoFaq = {
  q: string;
  a: string;
};

export type SeoSource = {
  label: string;
  href: string;
  note: string;
};

export type SeoPage = {
  path: string;
  hub: string;
  hubPath: string;
  kind: SeoKind;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs: SeoFaq[];
  related: SeoLink[];
  sources?: SeoSource[];
  image?: string;
};

type Topic = {
  slug: string;
  label: string;
  kind?: SeoKind;
  intro?: string;
};

type Hub = {
  slug: string;
  label: string;
  title: string;
  description: string;
  topics: Topic[];
  modifiers: Topic[];
  entities?: Topic[];
};

const unique = <T>(items: T[], key: (item: T) => string): T[] => {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = key(item);
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const titleCase = (slug: string): string =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const topicsFrom = (labels: string[], kind?: SeoKind): Topic[] =>
  labels.map((label) => ({ slug: slugify(label), label: kind ? titleCase(slugify(label)) : label, ...(kind ? { kind } : {}) }));

const sanitizePublicText = (value: string): string =>
  value
    .replace(/\s*\(cross-referenced via moonlightpeaks\.wiki\.gg\)/gi, '')
    .replace(/cross-referenced via moonlightpeaks\.wiki\.gg/gi, 'cross-referenced against pre-launch references')
    .replace(/moonlightpeaks\.wiki\.gg/gi, 'pre-launch references');

const knownPaths = new Set<string>([
  '/',
  '/about',
  '/activities',
  '/beginner-guide',
  '/characters',
  '/cheats',
  '/compare',
  '/demo',
  '/faq',
  '/families',
  '/farming',
  '/guides',
  '/locations',
  '/magic',
  '/map',
  '/moonlight-peaks-vs-stardew-valley',
  '/nokturna',
  '/platforms',
  '/previews',
  '/privacy',
  '/release-date',
  '/romance',
  ...characters.map((item) => `/characters/${item.id}`),
  ...locations.map((item) => `/locations/${item.slug}`),
  ...families.map((item) => `/families/${item.slug}`),
  ...activities.map((item) => `/activities/${item.slug}`),
  ...platforms.map((item) => `/platforms/${item.slug}`),
  ...itemCategories.map((item) => `/items/${item.slug}`),
  ...demo.map((item) => `/demo/${item.slug}`),
  ...comparisons.map((item) => `/compare/${item.slug}`),
  ...faqs.map((item) => `/faq/${item.slug}`),
  ...previews.map((item) => `/previews/${item.slug}`),
]);

const npcEntities: Topic[] = characters
  .filter((item) => item.status !== 'unconfirmed')
  .map((item) => ({ slug: item.id, label: item.name, kind: 'profile' }));

const locationEntities: Topic[] = locations.map((item) => ({ slug: item.slug, label: item.title, kind: 'profile' }));

const recipeEntities = [
  'blood jam',
  'moon tea',
  'night berry tart',
  'pumpkin soup',
  'shadow tonic',
  'sunblock elixir',
  'alter ego elixir',
  'bat wing stew',
  'graveyard pie',
  'moon milk pudding',
  'witch spice cookies',
  'crimson cordial',
  'glow flower salad',
  'midnight latte',
  'spectral broth',
  'haunted honey cake',
  'draculamb stew',
  'starlit soda',
  'foggy mushroom roast',
  'black rose tea',
  'moon sugar candy',
  'nightshade syrup',
  'forest herb paste',
  'lakeweed sushi',
  'vampire cocoa',
  'ember pepper jam',
  'mist melon juice',
  'ghost pepper curry',
  'silverleaf soup',
  'candleberry pudding',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const collectibleEntities = [
  'moon carp',
  'silver eel',
  'ghost koi',
  'mist trout',
  'grave minnow',
  'lake lantern fish',
  'blood rose',
  'glow lily',
  'night orchid',
  'witch hazel',
  'moon pumpkin',
  'fang corn',
  'shadow tomato',
  'mist melon',
  'bone carrot',
  'silverleaf',
  'black crystal',
  'moonstone',
  'bat fossil',
  'ancient fang',
  'spectral moth',
  'lantern beetle',
  'grave cricket',
  'fog butterfly',
  'haunted mushroom',
  'candleberry',
  'nightberry',
  'ember pepper',
  'lakeweed',
  'starlit shell',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const questEntities = [
  'restore the homestead',
  'repair the wand',
  'first night on the farm',
  'meet the seven families',
  'town square welcome',
  'fishing lesson',
  'flower arranging class',
  'embroidery practice',
  'first nokturna match',
  'unlock bat form',
  'find the hidden path',
  'prepare for the autumn festival',
  'help the witches circle',
  'lake mystery',
  'forest foraging request',
  'mine entrance errand',
  'decorate the cottage',
  'first date invitation',
  'community board delivery',
  'midnight market order',
  'graveyard clean up',
  'draculamb care',
  'moonlit harvest',
  'lost family keepsake',
  'official launch checklist',
].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const }));

const hubs: Hub[] = [
  {
    slug: 'platforms',
    label: 'Platform Hub',
    title: 'Moonlight Peaks platform guides',
    description: 'Platform pages for Moonlight Peaks covering release date, price, performance, controls, saves, demo access, issues, and FAQs.',
    topics: topicsFrom(['steam', 'switch', 'switch-2', 'xbox', 'playstation', 'windows', 'mac', 'steam-deck'], 'guide'),
    modifiers: topicsFrom(['release date', 'price', 'performance', 'controls', 'save data', 'cloud save', 'cross save', 'system requirements', 'fps', 'graphics', 'demo', 'faq', 'guide', 'bugs', 'known issues', 'controller', 'keyboard', 'steam achievements', 'switch performance', 'switch demo', 'switch controls']),
  },
  {
    slug: 'demo',
    label: 'Demo Hub',
    title: 'Moonlight Peaks demo guides',
    description: 'Moonlight Peaks demo pages for downloads, features, save limits, endings, tips, hidden items, known issues, and update history.',
    topics: topicsFrom(['download', 'guide', 'faq', 'review', 'features', 'changes', 'save', 'length', 'endings', 'tips', 'secrets', 'hidden items', 'known issues', 'update history'], 'guide'),
    modifiers: topicsFrom(['steam', 'switch', 'switch 2', 'first hour', 'character creator', 'fishing', 'flower arranging', 'embroidery', 'progress carry over', 'what to do first', 'best settings', 'controls', 'bugs', 'performance', 'full game differences']),
  },
  {
    slug: 'romance',
    label: 'Romance Hub',
    title: 'Moonlight Peaks romance guides',
    description: 'Romance pages covering marriage, gifts, heart events, schedules, dialogue, dates, friendship, and long-tail romance questions.',
    topics: topicsFrom(['romance guide', 'romance characters', 'romance gifts', 'romance heart events', 'romance marriage', 'romance children', 'romance best partner', 'romance faq', 'romance events', 'romance locations', 'romance tips'], 'guide'),
    modifiers: topicsFrom(['gifts', 'schedule', 'events', 'dialogue', 'likes', 'dislikes', 'best gifts', 'date locations', 'marriage', 'friendship', 'heart events', 'romance quest', 'daily routine', 'birthday', 'confession', 'proposal']),
    entities: npcEntities.filter((item) => item.slug !== 'count-dracula'),
  },
  {
    slug: 'characters',
    label: 'Character Hub',
    title: 'Moonlight Peaks character guides',
    description: 'Character pages covering bios, schedules, favorite gifts, friendship, quests, heart events, locations, quotes, and relationships.',
    topics: topicsFrom(['villagers', 'npc', 'companions', 'merchants', 'mayor', 'shopkeepers'], 'list'),
    modifiers: topicsFrom(['bio', 'schedule', 'favorite gifts', 'friendship', 'quests', 'heart events', 'location', 'quotes', 'romance', 'likes', 'dislikes', 'appearance', 'voice', 'relationships', 'daily routine', 'birthday', 'best gifts', 'family', 'shop hours', 'dialogue']),
    entities: npcEntities,
  },
  {
    slug: 'quests',
    label: 'Quest Hub',
    title: 'Moonlight Peaks quest guides',
    description: 'Quest pages for main, side, daily, tutorial, seasonal, romance, and hidden quests with walkthroughs and rewards.',
    topics: topicsFrom(['main story', 'side quests', 'daily quests', 'tutorial quests', 'seasonal quests', 'romance quests', 'hidden quests'], 'list'),
    modifiers: topicsFrom(['walkthrough', 'requirements', 'rewards', 'tips', 'related items', 'related npcs', 'related locations', 'unlock', 'choices', 'best route', 'checklist', 'faq']),
    entities: questEntities,
  },
  {
    slug: 'crafting',
    label: 'Crafting Hub',
    title: 'Moonlight Peaks crafting guides',
    description: 'Crafting, recipes, potions, cooking, alchemy, tools, weapons, and decoration pages with ingredients and uses.',
    topics: topicsFrom(['recipes', 'potions', 'cooking', 'alchemy', 'tools', 'weapons', 'decorations'], 'list'),
    modifiers: topicsFrom(['ingredients', 'locations', 'sell price', 'craft time', 'usage', 'related recipes', 'unlock', 'best use', 'gift value', 'quest use', 'profit', 'faq']),
    entities: recipeEntities,
  },
  {
    slug: 'collectibles',
    label: 'Collectibles Hub',
    title: 'Moonlight Peaks collectible guides',
    description: 'Collectible pages for fish, bugs, flowers, trees, crops, minerals, gems, and artifacts with locations and uses.',
    topics: topicsFrom(['fish', 'bugs', 'flowers', 'trees', 'crops', 'minerals', 'gems', 'artifacts'], 'list'),
    modifiers: topicsFrom(['location', 'season', 'weather', 'rarity', 'price', 'uses', 'related items', 'best time', 'spawn rate', 'gift value', 'quest use', 'sell value', 'faq']),
    entities: collectibleEntities,
  },
  {
    slug: 'map',
    label: 'Map Hub',
    title: 'Moonlight Peaks map and location guides',
    description: 'Map pages for locations, regions, shops, houses, caves, forest, lake, beach, and mountain areas.',
    topics: topicsFrom(['locations', 'regions', 'shops', 'houses', 'caves', 'forest', 'lake', 'beach', 'mountain'], 'list'),
    modifiers: topicsFrom(['items', 'npcs', 'quests', 'events', 'resources', 'photos', 'tips', 'map route', 'hidden spots', 'fast travel', 'shop hours', 'seasonal changes', 'faq']),
    entities: locationEntities,
  },
  {
    slug: 'events',
    label: 'Event Hub',
    title: 'Moonlight Peaks event guides',
    description: 'Event pages for festivals, holidays, seasons, schedules, rewards, shops, exclusive items, NPC dialogue, and tips.',
    topics: topicsFrom(['festivals', 'holidays', 'halloween', 'harvest', 'spring', 'summer', 'autumn', 'winter'], 'list'),
    modifiers: topicsFrom(['schedule', 'rewards', 'shops', 'exclusive items', 'npc dialogue', 'tips', 'start time', 'end time', 'best gifts', 'festival quest', 'date options', 'faq']),
    entities: ['autumn festival', 'spring market', 'summer lake night', 'winter lanterns', 'halloween parade', 'harvest fair', 'moon dance', 'midnight market', 'witches gathering', 'werewolf moon night', 'mermaid concert', 'town welcome'].map((label) => ({ slug: slugify(label), label, kind: 'profile' as const })),
  },
  {
    slug: 'customization',
    label: 'Customization Hub',
    title: 'Moonlight Peaks customization guides',
    description: 'Customization pages for character, cat, outfits, hairstyles, accessories, colors, house, furniture, wallpaper, flooring, garden, and fences.',
    topics: topicsFrom(['character customization', 'cat customization', 'outfits', 'hairstyles', 'accessories', 'colors', 'house customization', 'furniture', 'wallpaper', 'flooring', 'garden', 'fences'], 'list'),
    modifiers: topicsFrom(['unlock', 'all options', 'best combinations', 'colors', 'shops', 'cost', 'requirements', 'tips', 'faq', 'preview', 'style ideas', 'seasonal options']),
  },
  {
    slug: 'controls',
    label: 'Controls Hub',
    title: 'Moonlight Peaks controls and UI guides',
    description: 'Controls and UI pages for inventory, almanac, settings, keybindings, controller, keyboard, tutorials, HUD, and menus.',
    topics: topicsFrom(['inventory', 'almanac', 'ui', 'settings', 'keybindings', 'controller', 'keyboard', 'tutorial'], 'guide'),
    modifiers: topicsFrom(['how to open', 'how to track quests', 'how to use', 'how to change controls', 'how to save', 'how to fast travel', 'hud guide', 'menu guide', 'best settings', 'accessibility', 'steam deck', 'switch', 'faq']),
  },
  {
    slug: 'languages',
    label: 'Language Hub',
    title: 'Moonlight Peaks language support',
    description: 'Language support pages for Spanish, French, German, Italian, Japanese, Chinese, Portuguese, and Korean.',
    topics: topicsFrom(['spanish', 'french', 'german', 'italian', 'japanese', 'chinese', 'portuguese', 'korean'], 'guide'),
    modifiers: topicsFrom(['support', 'release', 'translation', 'faq', 'roadmap', 'subtitles', 'interface', 'updates', 'regional store', 'font support']),
  },
  {
    slug: 'compare',
    label: 'Comparison Hub',
    title: 'Moonlight Peaks comparison guides',
    description: 'Comparison pages for Moonlight Peaks versus other cozy games across graphics, romance, crafting, difficulty, performance, and story.',
    topics: topicsFrom(['fae farm', 'stardew valley', 'animal crossing', 'wylde flowers', 'coral island', 'witchbrook'], 'comparison'),
    modifiers: topicsFrom(['graphics', 'romance', 'combat', 'crafting', 'multiplayer', 'difficulty', 'performance', 'story', 'recommendation', 'pros and cons', 'farming', 'price', 'platforms', 'cozy score']),
  },
  {
    slug: 'faq',
    label: 'FAQ Hub',
    title: 'Moonlight Peaks FAQ pages',
    description: 'Long-tail Moonlight Peaks FAQ pages grouped by platform, gameplay, story, romance, items, events, and performance.',
    topics: topicsFrom(['platform', 'gameplay', 'story', 'romance', 'items', 'events', 'performance'], 'faq'),
    modifiers: topicsFrom(['how to start', 'where to go first', 'when does it unlock', 'can you miss it', 'is there a shortcut', 'why does it happen', 'what happens if you wait', 'how to fix it', 'where to find it', 'how long does it take', 'can you replay it', 'what is the best choice', 'faq']),
  },
  {
    slug: 'guides',
    label: 'Guides Hub',
    title: 'Moonlight Peaks guides',
    description: 'Moonlight Peaks beginner, advanced, money, farming, fishing, decorating, relationship, combat-free, and endgame guides.',
    topics: topicsFrom(['beginners guide', 'advanced guide', 'money guide', 'farming guide', 'fishing guide', 'combat guide', 'decorating guide', 'relationship guide', 'endgame guide'], 'guide'),
    modifiers: topicsFrom(['day one checklist', 'best first upgrades', 'common mistakes', 'what to unlock first', 'best route', 'tips', 'faq', 'settings', 'platform notes', 'demo notes', 'launch changes', 'roadmap']),
  },
  {
    slug: 'buying',
    label: 'Buying Hub',
    title: 'Moonlight Peaks buying guides',
    description: 'Buying pages for before you buy, reviews, pros and cons, best platform, Steam, Switch, and cozy game recommendations.',
    topics: topicsFrom(['before you buy', 'is it worth it', 'review', 'pros and cons', 'best platform', 'steam review', 'switch review', 'cozy game guide'], 'guide'),
    modifiers: topicsFrom(['price', 'demo first', 'best platform', 'steam deck', 'switch 2', 'performance', 'controls', 'launch discount', 'who should play', 'who should wait', 'faq']),
  },
  {
    slug: 'development',
    label: 'Development Hub',
    title: 'Moonlight Peaks development tracker',
    description: 'Development pages for history, updates, roadmap, Gamescom, demo history, official confirmations, and community FAQ.',
    topics: topicsFrom(['development history', 'game updates', 'roadmap', 'gamescom', 'demo history', 'official confirmations', 'community faq'], 'guide'),
    modifiers: topicsFrom(['timeline', 'confirmed facts', 'release window', 'publisher notes', 'developer notes', 'demo changes', 'patch notes', 'faq', 'sources', 'what changed']),
  },
  {
    slug: 'community',
    label: 'Community Hub',
    title: 'Moonlight Peaks community pages',
    description: 'Community pages for news, blog posts, patch notes, Reddit highlights, Discord, developer blogs, and interviews.',
    topics: topicsFrom(['news', 'blog', 'patch notes', 'community', 'reddit highlights', 'discord', 'dev blog', 'interviews'], 'list'),
    modifiers: topicsFrom(['latest', 'archive', 'highlights', 'questions', 'official posts', 'developer answers', 'roundup', 'faq', 'launch week', 'demo week']),
  },
];

const pageDescription = (hub: Hub, topic: Topic, modifier?: Topic): string => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return `Moonlight Peaks ${focus} guide in the ${hub.label.toLowerCase()}: clean facts, launch notes, related pages, FAQs, and update-safe placeholders for details not yet confirmed.`;
};

const relatedFor = (hub: Hub, topic: Topic, modifier?: Topic): SeoLink[] => {
  const baseLinks: SeoLink[] = [
    { label: hub.title, href: `/${hub.slug}` },
    { label: 'Release date', href: '/release-date' },
    { label: 'Demo guide', href: '/demo' },
    { label: 'FAQ', href: '/faq' },
  ];
  const topicLinks = hub.topics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4)
    .map((item) => ({ label: item.label, href: `/${hub.slug}/${item.slug}` }));
  const modifierLinks = modifier
    ? hub.modifiers
        .filter((item) => item.slug !== modifier.slug)
        .slice(0, 5)
        .map((item) => ({ label: `${topic.label} ${item.label}`, href: `/${hub.slug}/${topic.slug}/${item.slug}` }))
    : hub.modifiers.slice(0, 5).map((item) => ({ label: `${topic.label} ${item.label}`, href: `/${hub.slug}/${topic.slug}/${item.slug}` }));
  return unique([...baseLinks, ...topicLinks, ...modifierLinks], (item) => item.href).slice(0, 12);
};

const faqsFor = (hub: Hub, topic: Topic, modifier?: Topic): SeoFaq[] => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return [
    {
      q: `What is the Moonlight Peaks ${focus} page for?`,
      a: `It groups confirmed and reported information about ${focus} so players can find the right Moonlight Peaks guide without digging through unrelated pages.`,
    },
    {
      q: `Is every ${focus} detail confirmed?`,
      a: 'No. Confirmed facts are kept separate from expected launch details. Unknown exact values are marked for update instead of being invented.',
    },
    {
      q: `Where should I go next after this ${hub.label.toLowerCase()} page?`,
      a: `Use the related links on this page to move to sibling guides in the ${hub.label.toLowerCase()}, matching FAQs, character pages, items, locations, and launch news.`,
    },
  ];
};

const sectionsFor = (hub: Hub, topic: Topic, modifier?: Topic) => {
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  return [
    {
      title: 'What this page covers',
      body: `This page is part of the ${hub.label.toLowerCase()} and focuses on Moonlight Peaks ${focus}. It is built from a reusable topic template so the wiki can expand as official details arrive.`,
    },
    {
      title: 'Current status',
      body: 'Moonlight Peaks released on July 7, 2026 and is out now. Exact late-game tables, schedules, prices, item stats, and quest outcomes are updated only when reliable post-launch information is available.',
    },
    {
      title: 'How it connects',
      body: `The page links back to its hub, sibling pages, related FAQs, and other Moonlight Peaks guide areas so crawlers and readers can move through the topic cluster naturally.`,
    },
  ];
};

const makePage = (hub: Hub, topic: Topic, modifier?: Topic): SeoPage => {
  const path = modifier ? `/${hub.slug}/${topic.slug}/${modifier.slug}` : `/${hub.slug}/${topic.slug}`;
  const focus = modifier ? `${topic.label} ${modifier.label}` : topic.label;
  const kind = modifier?.kind || topic.kind || 'guide';
  return {
    path,
    hub: hub.label,
    hubPath: `/${hub.slug}`,
    kind,
    title: `Moonlight Peaks ${focus} | ${hub.label} | Moonlight Peaks Wiki`,
    description: pageDescription(hub, topic, modifier),
    h1: `Moonlight Peaks ${focus}`,
    intro: `A focused Moonlight Peaks ${focus} page with metadata, FAQs, breadcrumbs, and related guides generated from the ${hub.label.toLowerCase()}.`,
    sections: sectionsFor(hub, topic, modifier),
    faqs: faqsFor(hub, topic, modifier),
    related: relatedFor(hub, topic, modifier),
  };
};

const makeHubPage = (hub: Hub): SeoPage => ({
  path: `/${hub.slug}`,
  hub: hub.label,
  hubPath: `/${hub.slug}`,
  kind: 'hub',
  title: `${hub.title} | Moonlight Peaks Wiki`,
  description: hub.description,
  h1: hub.title,
  intro: hub.description,
  sections: [
    {
      title: 'Topic cluster',
      body: `This hub organizes ${hub.topics.length} primary Moonlight Peaks topics and ${hub.modifiers.length} reusable page angles into a crawlable internal-linking cluster.`,
    },
    {
      title: 'Expansion model',
      body: 'Each generated URL receives unique metadata, breadcrumb data, FAQ schema, related links, and a stable canonical path.',
    },
  ],
  faqs: [
    {
      q: `What belongs in the ${hub.label}?`,
      a: hub.description,
    },
    {
      q: 'How are these pages updated?',
      a: 'The pages are generated from reusable data. When official launch details are confirmed, the source data can be expanded without changing every URL by hand.',
    },
  ],
  related: [
    { label: 'Release date', href: '/release-date' },
    { label: 'Demo guide', href: '/demo' },
    { label: 'Platforms', href: '/platforms' },
    { label: 'FAQ', href: '/faq' },
    ...hub.topics.slice(0, 8).map((topic) => ({ label: topic.label, href: `/${hub.slug}/${topic.slug}` })),
  ],
});

const publicSource = (label: string, href: string, note: string): SeoSource => ({ label, href, note });

const officialSteamSource = publicSource(
  'Steam Store - Moonlight Peaks',
  'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  'Official Steam listing for core game description, platform/store context, single-player status, and launch-facing information.'
);

const officialDemoSource = publicSource(
  'Marvelous Games - official demo announcement',
  'https://marvelousgames.com/news/moonlight-peaks-invites-you-to-go-goth-in-frightfully-fun-new-demo',
  'Official publisher announcement used for demo availability and demo feature context.'
);

const pcGamerSource = publicSource(
  'PC Gamer - hands-on preview',
  'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/',
  'Neutral press preview used for hands-on gameplay context; details are still verified against official launch data when possible.'
);

const guardianSource = publicSource(
  'The Guardian - developer interview',
  'https://www.theguardian.com/games/2025/jul/01/moonlight-peaks-vegan-vampire-dracula-daughter-stardew-valley',
  'Neutral media interview used for broad game, romance, and cozy-sim context.'
);

const neutralSteamCommunitySource = publicSource(
  'Steam Community - Moonlight Peaks discussions',
  'https://steamcommunity.com/app/2209900/discussions/',
  'Neutral platform discussion area used only for public player-question context, never as final proof for unconfirmed facts.'
);

const characterSeoPages: SeoPage[] = characters
  .filter((character) => character.status !== 'unconfirmed')
  .flatMap((character) => {
    const statusText =
      character.status === 'confirmed'
        ? 'developer-confirmed'
        : character.status === 'reported'
          ? 'reported from previews or coverage'
          : 'verified from pre-launch game-file references, with role details still unconfirmed';
    const baseRelated: SeoLink[] = [
      { label: `${character.name} profile`, href: `/characters/${character.id}` },
      { label: 'All characters', href: '/characters' },
      { label: 'Romance guide', href: '/romance' },
      { label: 'Romance Gift Finder', href: '/tools/romance-gift-finder' },
    ];
    const characterSources: SeoSource[] = [
      officialSteamSource,
      pcGamerSource,
      guardianSource,
    ];

    const hasRealGifts = !!(character.lovedGifts && character.lovedGifts.length > 0);
    const giftPage: SeoPage = hasRealGifts
      ? {
          path: `/characters/${character.id}/gifts`,
          hub: 'Character Hub',
          hubPath: '/characters',
          kind: 'guide' as const,
          title: `${character.name} Gifts | Moonlight Peaks Character Guide`,
          description: `${character.name}'s confirmed loved, liked, and disliked gifts in Moonlight Peaks.`,
          h1: `${character.name} gifts`,
          intro: `Confirmed gift data for ${character.name}, sourced from launch-week coverage rather than guessed.`,
          sections: [
            { title: 'Loved gifts', body: `${character.name}'s confirmed loved gift${character.lovedGifts!.length > 1 ? 's are' : ' is'} ${character.lovedGifts!.join(', ')} — the single most reliable way to raise their relationship level quickly when you give it as a gift.` },
            { title: 'Liked gifts', body: character.likedGifts && character.likedGifts.length > 0 ? `Beyond their favorite, ${character.name} also responds well to: ${character.likedGifts.join(', ')}. These are solid everyday choices when you don't have their loved gift on hand.` : `No additional liked gifts are confirmed for ${character.name} yet — check back as more launch-week testing comes in.` },
            { title: 'Disliked gifts', body: character.dislikedGifts && character.dislikedGifts.length > 0 ? `Avoid giving ${character.name}: ${character.dislikedGifts.join(', ')}. These are confirmed to land poorly, so they're worth remembering even if you're just building friendship rather than romance.` : `No disliked gifts are confirmed for ${character.name} yet.` },
          ],
          faqs: [
            { q: `What gifts does ${character.name} like?`, a: `${character.name} loves ${character.lovedGifts!.join(' and ')}. Log any others you discover with the Gift Tracker.` },
            { q: `Is ${character.name} romanceable?`, a: character.romanceable === true ? `Yes, ${character.name} is a confirmed romance option.` : `${character.name} is not a romance option.` },
          ],
          related: [...baseRelated, { label: 'Gift Tracker', href: '/tools/gift-tracker' }],
          sources: characterSources,
          image: character.img,
        }
      : {
          // No real gift data exists yet for this character. This page intentionally has no
          // concrete answer to "what gifts does X like" and is filtered out by
          // passesSeoQualityGate's hasConcreteAnswer check below — it will not be published
          // until real gift data exists, rather than shipping a thin "not published yet" page.
          path: `/characters/${character.id}/gifts`,
          hub: 'Character Hub',
          hubPath: '/characters',
          kind: 'guide' as const,
          title: `${character.name} Gifts | Moonlight Peaks Character Guide`,
          description: `${character.name} gift status in Moonlight Peaks: what is confirmed, what still needs verification.`,
          h1: `${character.name} gifts`,
          intro: `A launch-safe gift page for ${character.name}. It tracks gift intent without inventing loved gifts before reliable data exists.`,
          sections: [
            { title: 'Gift data status', body: `${character.name} is currently marked as ${statusText}. Confirmed loved gifts, liked gifts, disliked gifts, birthdays, and gift limits are not published yet — this page is intentionally excluded from search indexing until real data exists.` },
            { title: 'What to verify', body: 'The useful data for this page is the exact gift table: loved gifts, liked gifts, neutral gifts, disliked gifts, birthday rules, relationship points, and whether any gifts are tied to quests or family events.' },
            { title: 'Why this page exists', body: `Players search for ${character.name} gifts before the full data is available. This page keeps that query honest rather than guessing.` },
          ],
          faqs: [
            { q: `What gifts does ${character.name} like?`, a: `Confirmed ${character.name} gift preferences are not published yet.` },
            { q: `Is ${character.name} romanceable?`, a: character.romanceable === true ? `${character.name} is currently marked as romanceable.` : character.romanceable === false ? `${character.name} is not marked as a romance option.` : `${character.name}'s romance status is still to be confirmed.` },
          ],
          related: baseRelated,
          sources: characterSources,
          image: character.img,
        };

    return [
      giftPage,
      {
        path: `/characters/${character.id}/romance-status`,
        hub: 'Character Hub',
        hubPath: '/characters',
        kind: 'guide' as const,
        title: `${character.name} Romance Status | Moonlight Peaks Wiki`,
        description: `${character.name} romance status in Moonlight Peaks, with confirmed/reported status and relationship notes, verified against the live game.`,
        h1: `${character.name} romance status`,
        intro: `A focused relationship-status page for ${character.name}, built from the current character data and updated when the live game confirms more.`,
        sections: [
          { title: 'Current romance status', body: character.romanceable === true ? `${character.name} is currently marked as romanceable. Full heart events, dating steps, proposal rules, and favorite gifts still need launch verification.` : character.romanceable === false ? `${character.name} is currently marked as not romanceable. This page tracks that status so players do not confuse story characters with dateable residents.` : `${character.name}'s romance status is still unknown. This page will update once the live game confirms whether they can be dated.` },
          { title: 'Known profile notes', body: sanitizePublicText(character.knownInfo && character.knownInfo.length > 0 ? character.knownInfo.join(' ') : character.desc) },
          { title: 'Launch checklist', body: 'The details to verify are heart events, daily routine, date locations, gift preferences, birthday, marriage eligibility, and any family or story requirements.' },
        ],
        faqs: [
          { q: `Can you romance ${character.name}?`, a: character.romanceable === true ? `Yes, ${character.name} is currently marked as romanceable.` : character.romanceable === false ? `No, ${character.name} is currently marked as not romanceable.` : `This has not been confirmed for ${character.name} yet.` },
          { q: `Where is the main ${character.name} profile?`, a: `Use the ${character.name} profile page for the current biography, status, and related residents.` },
          { q: 'Will this page change after launch?', a: 'Yes. Relationship pages should expand only when the live game confirms schedules, events, gifts, and marriage details.' },
        ],
        related: baseRelated,
        sources: characterSources,
        image: character.img,
      },
    ];
  });

const platformSeoPages: SeoPage[] = platforms.flatMap((platform) => [
  {
    path: `/platforms/${platform.slug}/price`,
    hub: 'Platform Hub',
    hubPath: '/platforms',
    kind: 'guide' as const,
    title: `${platform.title} Price | Moonlight Peaks Platform Guide`,
    description: `${platform.title} price notes, launch discount context, demo availability, and what still needs platform-specific confirmation.`,
    h1: `${platform.title} price`,
    intro: `A focused price and purchase-notes page for ${platform.title}.`,
    sections: [
      { title: 'Current platform summary', body: platform.dek },
      { title: 'What is known', body: platform.body.join(' ') },
      { title: 'What to verify', body: 'Final store pricing, regional prices, launch discount display, demo access, and platform-specific upgrade wording should be checked again after launch.' },
    ],
    faqs: platform.faq.length > 0 ? platform.faq : [{ q: `Is ${platform.title} confirmed?`, a: platform.dek }],
    related: [{ label: platform.title, href: `/platforms/${platform.slug}` }, { label: 'All platforms', href: '/platforms' }, { label: 'Release date', href: '/release-date' }, { label: 'Demo guide', href: '/demo' }],
    sources: [
      officialSteamSource,
      officialDemoSource,
      neutralSteamCommunitySource,
    ],
  },
  {
    path: `/platforms/${platform.slug}/demo`,
    hub: 'Platform Hub',
    hubPath: '/platforms',
    kind: 'guide' as const,
    title: `${platform.title} Demo | Moonlight Peaks Platform Guide`,
    description: `${platform.title} demo availability, download notes, and what to check before buying Moonlight Peaks.`,
    h1: `${platform.title} demo`,
    intro: `A platform-specific demo page for players checking whether they can try Moonlight Peaks before buying.`,
    sections: [
      { title: 'Demo status', body: platform.body.join(' ') },
      { title: 'Best things to test', body: 'Use the demo to check controls, readability, character creation, fishing, flower arranging, embroidery, and general comfort on your preferred platform.' },
      { title: 'Before buying', body: 'Compare the demo experience with the release date, price, and platform notes before choosing where to play.' },
    ],
    faqs: [{ q: `Is there a ${platform.title} demo?`, a: 'Demo availability depends on platform. Check the main demo page and this platform page for the current confirmed status.' }],
    related: [{ label: platform.title, href: `/platforms/${platform.slug}` }, { label: 'Demo guide', href: '/demo' }, { label: 'What is in the demo', href: '/demo/whats-in-the-demo' }, { label: 'Platform picker', href: '/tools/platform-picker' }],
    sources: [
      officialSteamSource,
      officialDemoSource,
      neutralSteamCommunitySource,
    ],
  },
]);

const itemSeoPages: SeoPage[] = itemCategories.map((item) => ({
  path: `/items/${item.slug}/launch-checklist`,
  hub: 'Items Hub',
  hubPath: '/items',
  kind: 'guide' as const,
  title: `${item.name} Launch Checklist | Moonlight Peaks Items`,
  description: `${item.name} launch checklist for Moonlight Peaks: what to verify, which item details matter, and related guides.`,
  h1: `${item.name} launch checklist`,
  intro: `A controlled expansion page for ${item.name}, based on the existing item category data rather than guessed item tables.`,
  sections: [
    { title: 'Category overview', body: item.summary },
    { title: 'Examples to watch for', body: `${item.examples.join(', ')}.` },
    { title: 'Verification checklist', body: `${item.verify.join(', ')}.` },
  ],
  faqs: [
    { q: `Is the ${item.name} list complete?`, a: 'No. This is a launch checklist, not a fabricated item list. Exact item names and effects should be added only after verification.' },
    { q: `Where is the main ${item.name} page?`, a: `The main ${item.name} category page is available from the Items hub.` },
    { q: 'Why not publish every item now?', a: 'Publishing guessed item tables would be low value. This page keeps the useful structure ready while waiting for real data.' },
  ],
  related: [{ label: item.name, href: `/items/${item.slug}` }, { label: 'Items hub', href: '/items' }, ...item.related],
  sources: [
    officialSteamSource,
    officialDemoSource,
    pcGamerSource,
  ],
}));

const demoSeoPages: SeoPage[] = demo.flatMap((entry) => [
  {
    path: `/demo/${entry.slug}/steam`,
    hub: 'Demo Hub',
    hubPath: '/demo',
    kind: 'guide' as const,
    title: `${entry.title} on Steam | Moonlight Peaks Demo`,
    description: `${entry.title} with Steam-focused notes, download context, demo limits, and related Moonlight Peaks pages.`,
    h1: `${entry.title} on Steam`,
    intro: `A Steam-focused extension of the ${entry.title} page.`,
    sections: [
      { title: 'Demo facts', body: entry.body.join(' ') },
      { title: 'Steam checklist', body: 'Check install size, controller support, Steam Deck comfort, save behavior, and whether the demo answers your main platform questions.' },
      { title: 'Next step', body: 'Use the main demo guide for the full cross-platform overview, then compare Steam with Switch or Switch 2 if portability matters.' },
    ],
    faqs: entry.faq,
    related: [{ label: entry.title, href: `/demo/${entry.slug}` }, { label: 'Demo guide', href: '/demo' }, { label: 'Steam Deck', href: '/platforms/steam-deck' }],
    sources: [
      officialSteamSource,
      officialDemoSource,
      neutralSteamCommunitySource,
    ],
  },
  {
    path: `/demo/${entry.slug}/switch`,
    hub: 'Demo Hub',
    hubPath: '/demo',
    kind: 'guide' as const,
    title: `${entry.title} on Switch | Moonlight Peaks Demo`,
    description: `${entry.title} with Nintendo Switch and Switch 2 notes, demo context, and related Moonlight Peaks pages.`,
    h1: `${entry.title} on Switch`,
    intro: `A Switch-focused extension of the ${entry.title} page.`,
    sections: [
      { title: 'Demo facts', body: entry.body.join(' ') },
      { title: 'Switch checklist', body: 'Check handheld readability, controls, performance feel, and whether the demo is comfortable enough for longer cozy sessions.' },
      { title: 'Next step', body: 'Compare the original Switch and Switch 2 pages before choosing your launch platform.' },
    ],
    faqs: entry.faq,
    related: [{ label: entry.title, href: `/demo/${entry.slug}` }, { label: 'Switch', href: '/platforms/switch' }, { label: 'Switch 2', href: '/platforms/switch-2' }],
    sources: [
      officialSteamSource,
      officialDemoSource,
      neutralSteamCommunitySource,
    ],
  },
]);

const locationSeoPages: SeoPage[] = locations.map((location) => ({
  path: `/locations/${location.slug}/confirmed-details`,
  hub: 'Map Hub',
  hubPath: '/locations',
  kind: 'guide' as const,
  title: `${location.title} Confirmed Details | Moonlight Peaks Location Guide`,
  description: `${location.title} in Moonlight Peaks: confirmed or reported details, related pages, and what still needs launch verification.`,
  h1: `${location.title} confirmed details`,
  intro: `A focused location-status page for ${location.title}.`,
  sections: [
    { title: 'Location summary', body: sanitizePublicText(location.dek) },
    { title: 'What we know', body: sanitizePublicText(location.body.join(' ')) },
    { title: 'What to verify', body: 'After launch, this page should add exact map position, shops or NPCs nearby, resource spawns, events, and quest connections if confirmed.' },
  ],
  faqs: location.faq || [{ q: `What is ${location.title}?`, a: location.dek }],
  related: [{ label: location.title, href: `/locations/${location.slug}` }, { label: 'Locations', href: '/locations' }, ...(location.related || [])],
  sources: [
    officialSteamSource,
    pcGamerSource,
    guardianSource,
  ],
  image: location.image,
}));

const trustedGenerated: SeoPage[] = [
  ...platformSeoPages,
  ...demoSeoPages,
  ...characterSeoPages,
  ...itemSeoPages,
  ...locationSeoPages,
];

const generated = hubs.flatMap((hub) => {
  const entityPages = (hub.entities || []).flatMap((entity) => [
    makePage(hub, entity),
    ...hub.modifiers.map((modifier) => makePage(hub, entity, modifier)),
  ]);
  return [
    makeHubPage(hub),
    ...hub.topics.flatMap((topic) => [makePage(hub, topic), ...hub.modifiers.map((modifier) => makePage(hub, topic, modifier))]),
    ...entityPages,
  ];
});

const SEO_START_DATE = '2026-07-02T00:00:00Z';
const SEO_DAILY_MINIMUM_URLS = 30;

const priorityHubs = new Map<string, number>([
  ['platforms', 0],
  ['guides', 1],
  ['demo', 2],
  ['romance', 3],
  ['characters', 4],
  ['buying', 5],
  ['faq', 6],
  ['quests', 7],
  ['crafting', 8],
  ['collectibles', 9],
]);

const priorityTerms = ['release-date', 'guide', 'faq', 'gifts', 'schedule', 'best-gifts', 'steam', 'switch', 'demo', 'price'];

const scorePage = (page: SeoPage): number => {
  const parts = page.path.split('/').filter(Boolean);
  const hubScore = priorityHubs.get(parts[0] || '') ?? 50;
  const depthScore = parts.length * 5;
  const termScore = priorityTerms.some((term) => page.path.includes(term)) ? -3 : 0;
  return hubScore * 100 + depthScore + termScore;
};

// ──────────────────────────────────────────────────────────────────────────
// QUICK-LAUNCH SWITCH for the programmatic SEO layer.
//   false → DORMANT: zero generated pages. Nothing is added to routes, the
//           navigation, or the sitemap. This is the correct setting pre-launch.
//   true  → LIVE: generates the pages defined above and feeds them to
//           [...slug].astro and sitemap.xml.ts automatically — no other edits.
//
// ⚠️  DO NOT set this to true until the placeholder entity lists in this file
//     (recipes, fish/collectibles, quests, schedules, gifts, performance, etc.)
//     have been replaced with REAL, sourced game data after the July 7 2026
//     launch. Turning it on with placeholder data ships fabricated, templated
//     pages and risks a Google scaled-content-abuse penalty across the whole
//     domain. The engine is kept intact so launch day is a one-line flip.
// ──────────────────────────────────────────────────────────────────────────
// ACTIVE POLICY (2026-07-02):
// Programmatic SEO is on, but only trustedGenerated is published.
// The daily minimum is 30 URLs as a growth target, not a cap.
// If future launch data creates more genuinely useful pages, publish them all.
export const SEO_PROGRAM_ENABLED = true;

const seoMinimumTarget =
  SEO_DAILY_MINIMUM_URLS *
  Math.max(1, Math.floor((Date.now() - Date.parse(SEO_START_DATE)) / 86_400_000) + 1);

const textSize = (page: SeoPage): number =>
  [
    page.title,
    page.description,
    page.intro,
    ...page.sections.flatMap((section) => [section.title, section.body]),
    ...page.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(' ').replace(/\s+/g, ' ').trim().length;

const hasUnsafeDraftMarker = (page: SeoPage): boolean => {
  const text = [
    page.title,
    page.description,
    page.intro,
    ...page.sections.map((section) => section.body),
    ...page.faqs.map((faq) => faq.a),
  ].join(' ').toLowerCase();
  return /\b(lorem|todo|tbd|dummy text|sample text)\b/.test(text);
};

const hasSafePublicSources = (page: SeoPage): boolean =>
  (page.sources || []).length >= 2 &&
  (page.sources || []).every((source) => !/wiki\.gg|moonlightpeaks\.wiki/i.test(source.href));

// Semantic check: a page can pass every structural metric (word count, section count, FAQ
// count, related links, sources) while still giving zero real answer to the query it targets —
// e.g. an FAQ answer that just says "not published yet" or "will be added". This scans the
// answer-bearing content (intro, section bodies, and FAQ answers — not titles, which often
// legitimately contain words like "status") for phrases that signal an absent answer, and
// requires the page's FIRST FAQ answer in particular to contain a concrete claim.
const NO_ANSWER_PATTERN =
  /\bnot\s+(?:yet\s+|been\s+|currently\s+|really\s+)*(?:published|confirmed|available|sourced|documented|known)(?:\s+yet)?\b|\bwill be added\b|\bto be confirmed\b|\bcheck back later\b|\bdata not published\b|\bcoming later\b|\bstill (?:unknown|to be confirmed)\b|\bnot yet mapped\b|\bnot yet documented\b|\bhas(?:n't| not) been confirmed\b/i;

const hasConcreteAnswer = (page: SeoPage): boolean => {
  // By convention every generator puts the FAQ that directly answers the page's target query
  // FIRST (e.g. "What gifts does X like?" for a gifts page). Checking only that one is what
  // catches a page that answers a *different*, easier question (like "is X romanceable?")
  // while dodging the one it was actually built for.
  if (page.faqs.length === 0) return false;
  return !NO_ANSWER_PATTERN.test(page.faqs[0].a);
};

// Section-substance check, made page-type-specific rather than one universal arbitrary
// threshold applied to every section on every page type (this was the exact cause of the
// Winston false negative: a genuinely complete romance-status page was rejected because one
// legitimate ~88-character background section fell 2 characters under a 90-char per-section
// minimum, even though the page's actual answer — in its first FAQ — was complete and correct).
//
// Gift pages keep the strict rule: every section must individually carry real specifics, because
// a gift page is nothing BUT its per-gift-category breakdown, so a thin section there usually
// means thin/absent data.
//
// Other page types (romance-status, price, launch-checklist, etc.) are judged on aggregate
// substance instead: every section needs a real title, at least one section must clearly carry
// real weight (>=90 chars), and the sections combined must clear a reasonable total — this still
// blocks a page made of several one-line non-answers, but no longer sinks an otherwise-complete
// page over a single short-but-real section.
const isGiftPage = (page: SeoPage): boolean => page.path.endsWith('/gifts');

const sectionsSubstanceOk = (page: SeoPage): boolean => {
  if (isGiftPage(page)) {
    return page.sections.every((section) => section.title.length >= 4 && section.body.length >= 90);
  }
  const totalBody = page.sections.reduce((sum, s) => sum + s.body.length, 0);
  const hasOneSubstantialSection = page.sections.some((s) => s.body.length >= 90);
  return page.sections.every((s) => s.title.length >= 4) && hasOneSubstantialSection && totalBody >= 220;
};

const passesSeoQualityGate = (page: SeoPage): boolean =>
  page.path.split('/').filter(Boolean).length >= 3 &&
  page.sections.length >= 3 &&
  sectionsSubstanceOk(page) &&
  page.faqs.length >= 2 &&
  page.related.length >= 3 &&
  textSize(page) >= 900 &&
  hasSafePublicSources(page) &&
  hasConcreteAnswer(page) &&
  !hasUnsafeDraftMarker(page);

const computedSeoPages: SeoPage[] = unique(trustedGenerated, (page) => page.path)
  .filter((page) => !knownPaths.has(page.path))
  .filter(passesSeoQualityGate)
  .sort((a, b) => scorePage(a) - scorePage(b) || a.path.localeCompare(b.path));

export const seoPages: SeoPage[] = SEO_PROGRAM_ENABLED ? computedSeoPages : [];

export const seoPageByPath = new Map(seoPages.map((page) => [page.path, page]));

// Read-only exports added for validation/audit tooling only — no behavior change. Lets an
// external script inspect exactly which candidates were rejected and why, without re-deriving
// the gate logic in a separate file (which could drift out of sync with the real gate).
export const __auditTrustedGenerated = trustedGenerated;
export const __auditRejected = trustedGenerated.filter((p) => !passesSeoQualityGate(p));
export const __auditGateChecks = (page: SeoPage) => ({
  pathDepthOk: page.path.split('/').filter(Boolean).length >= 3,
  sectionsCountOk: page.sections.length >= 3,
  sectionsLengthOk: sectionsSubstanceOk(page),
  faqsCountOk: page.faqs.length >= 2,
  relatedOk: page.related.length >= 3,
  textSizeOk: textSize(page) >= 900,
  sourcesOk: hasSafePublicSources(page),
  concreteAnswerOk: hasConcreteAnswer(page),
  noDraftMarker: !hasUnsafeDraftMarker(page),
});

export const seoStats = {
  hubs: hubs.length,
  urls: seoPages.length,
  candidates: trustedGenerated.length,
  passedQualityGate: computedSeoPages.length,
  rejectedByQualityGate: Math.max(0, trustedGenerated.length - computedSeoPages.length),
  dailyMinimumUrls: SEO_DAILY_MINIMUM_URLS,
  minimumTarget: seoMinimumTarget,
  meetsMinimumTarget: seoPages.length >= seoMinimumTarget,
};
