import type { SeoPage } from './seoGraph';
import { activities } from './activities';
import { characters } from './characters';
import { comparisons } from './compare';
import { demo } from './demo';
import { families } from './families';
import { faqs } from './faq';
import { locations } from './locations';
import { platforms } from './platforms';
import { previews } from './previews';

const faq = (focus: string) => [
  {
    q: `What is the Moonlight Peaks ${focus} page for?`,
    a: `It is the main reference page for ${focus}, with links to deeper Moonlight Peaks guides and FAQ pages.`,
  },
  {
    q: 'Is this page updated from the same source as the English site?',
    a: 'Yes. Localized pages are generated from the same editorial source so the site can keep one main version up to date.',
  },
  {
    q: 'When will exact launch data be added?',
    a: 'Exact values, schedules, gifts, item locations, and rewards are updated when reliable launch information is available.',
  },
];

const links = [
  { label: 'Release date', href: '/release-date' },
  { label: 'Demo guide', href: '/demo' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'Characters', href: '/characters' },
  { label: 'Romance', href: '/romance' },
  { label: 'Guides', href: '/guides' },
  { label: 'FAQ', href: '/faq' },
];

const page = (path: string, title: string, hub: string, description: string): SeoPage => ({
  path,
  hub,
  hubPath: path,
  kind: 'guide',
  title,
  description,
  h1: title,
  intro: description,
  sections: [
    { title: 'Overview', body: `${title} is part of the Moonlight Peaks Wiki topic structure and links to related guide pages.` },
    { title: 'Update policy', body: 'Confirmed facts are kept separate from launch data that still needs verification.' },
  ],
  faqs: faq(title),
  related: links,
});

const topicPages: SeoPage[] = [
  ...characters.filter((item) => item.status !== 'unconfirmed').map((item) =>
    page(`/characters/${item.id}`, `Moonlight Peaks ${item.name}`, 'Character Hub', item.desc)
  ),
  ...locations.map((item) =>
    page(`/locations/${item.slug}`, item.title, 'Location Hub', item.dek)
  ),
  ...families.map((item) =>
    page(`/families/${item.slug}`, item.title, 'Family Hub', item.dek)
  ),
  ...activities.map((item) =>
    page(`/activities/${item.slug}`, item.title, 'Activity Hub', item.dek)
  ),
  ...platforms.map((item) =>
    page(`/platforms/${item.slug}`, item.title, 'Platform Hub', item.dek)
  ),
  ...demo.map((item) =>
    page(`/demo/${item.slug}`, item.title, 'Demo Hub', item.dek)
  ),
  ...comparisons.map((item) =>
    page(`/compare/${item.slug}`, item.title, 'Comparison Hub', item.dek)
  ),
  ...faqs.map((item) =>
    page(`/faq/${item.slug}`, item.q, 'FAQ Hub', item.a)
  ),
  ...previews.map((item) =>
    page(`/previews/${item.slug}`, item.title, 'Preview Hub', item.dek)
  ),
];

const extraHubPages: SeoPage[] = [
  page('/locations', 'Moonlight Peaks Locations', 'Location Hub', 'Locations hub for town, farm, forest, lake, mines, shops, houses, and other map areas.'),
  page('/families', 'Moonlight Peaks Families', 'Family Hub', 'Families hub for vampires, werewolves, witches, mermaids, normies, and other town groups.'),
  page('/activities', 'Moonlight Peaks Activities', 'Activity Hub', 'Activities hub for fishing, farming, magic, decorating, crafting, and cozy side systems.'),
  page('/compare', 'Moonlight Peaks Comparisons', 'Comparison Hub', 'Comparison hub for Moonlight Peaks versus other cozy games.'),
  page('/previews', 'Moonlight Peaks Previews', 'Preview Hub', 'Preview and hands-on coverage hub for Moonlight Peaks.'),
  page('/farming', 'Moonlight Peaks Farming Guide', 'Farming Hub', 'Farming guide for crops, night farming, livestock, tools, and money routes.'),
  page('/magic', 'Moonlight Peaks Magic Guide', 'Magic Hub', 'Magic guide for spells, potions, wand use, mana, and vampire abilities.'),
  page('/nokturna', 'Moonlight Peaks Nokturna Guide', 'Nokturna Hub', 'Nokturna guide for the in-game card system, cards, matches, and rewards.'),
  page('/map', 'Moonlight Peaks Map Guide', 'Map Hub', 'Map guide for locations, routes, shops, resources, and hidden areas.'),
  page('/cheats', 'Moonlight Peaks Cheats', 'Cheats Hub', 'Cheats and console command page, updated only when real launch data confirms options.'),
  page('/languages', 'Moonlight Peaks Languages', 'Language Hub', 'Language support hub for Spanish, French, German, Italian, Japanese, Chinese, Portuguese, and Korean pages.'),
  page('/quests', 'Moonlight Peaks Quests', 'Quest Hub', 'Quest hub for main story, side quests, daily quests, romance quests, and hidden quests.'),
  page('/crafting', 'Moonlight Peaks Crafting', 'Crafting Hub', 'Crafting hub for recipes, potions, cooking, alchemy, tools, and decorations.'),
  page('/collectibles', 'Moonlight Peaks Collectibles', 'Collectibles Hub', 'Collectibles hub for fish, bugs, flowers, crops, minerals, gems, and artifacts.'),
  page('/events', 'Moonlight Peaks Events', 'Event Hub', 'Event hub for festivals, holidays, seasonal events, rewards, and NPC dialogue.'),
  page('/about', 'About Moonlight Peaks Wiki', 'About Hub', 'About page for the independent Moonlight Peaks Wiki and Guide.'),
  page('/privacy', 'Privacy Policy', 'Privacy Hub', 'Privacy policy page for Moonlight Peaks Wiki and Guide.'),
];

const unique = (items: SeoPage[]): SeoPage[] => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.path)) return false;
    seen.add(item.path);
    return true;
  });
};

export const localizedStaticPages: SeoPage[] = unique([
  {
    path: '/',
    hub: 'Home Hub',
    hubPath: '/',
    kind: 'hub',
    title: 'Moonlight Peaks Wiki & Guide',
    description: 'Moonlight Peaks Wiki and guide hub for release date, demo, platforms, characters, romance, beginner tips, and FAQs.',
    h1: 'Moonlight Peaks Wiki & Guide',
    intro: 'Start here for Moonlight Peaks release details, demo information, platform support, characters, romance, and beginner guides.',
    sections: [
      { title: 'Start here', body: 'Use this hub to choose the right Moonlight Peaks guide: release date, demo, platforms, characters, romance, FAQ, and long-tail topic pages.' },
      { title: 'Best next pages', body: 'New players should begin with release date, demo, platforms, beginner guide, characters, and romance.' },
    ],
    faqs: faq('home'),
    related: links,
  },
  {
    path: '/release-date',
    hub: 'Release Hub',
    hubPath: '/release-date',
    kind: 'guide',
    title: 'Moonlight Peaks Release Date, Platforms & Price',
    description: 'Moonlight Peaks release date guide with platforms, price, demo access, and launch notes.',
    h1: 'Moonlight Peaks release date',
    intro: 'Everything about the Moonlight Peaks launch date, platforms, price, demo, and where to play at launch.',
    sections: [
      { title: 'Confirmed launch facts', body: 'Moonlight Peaks launches on July 7, 2026 on Steam, Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.' },
      { title: 'Where to go next', body: 'Use the platform and demo pages for more specific answers about Steam, Switch, Switch 2, Steam Deck, price, and demo access.' },
    ],
    faqs: faq('release date'),
    related: links,
  },
  {
    path: '/demo',
    hub: 'Demo Hub',
    hubPath: '/demo',
    kind: 'guide',
    title: 'Moonlight Peaks Demo Guide',
    description: 'Moonlight Peaks demo guide for download, features, save carryover, Switch, Steam, tips, and known issues.',
    h1: 'Moonlight Peaks demo guide',
    intro: 'The free Moonlight Peaks demo is the easiest way to test the cozy vampire life sim before launch.',
    sections: [
      { title: 'What the demo shows', body: 'The demo includes character creation and early cozy activities such as fishing, flower arranging, embroidery, and town interactions.' },
      { title: 'What to verify later', body: 'Progress carryover, final platform performance, late-game systems, and full item data should be checked against launch notes.' },
    ],
    faqs: faq('demo'),
    related: links,
  },
  {
    path: '/platforms',
    hub: 'Platform Hub',
    hubPath: '/platforms',
    kind: 'hub',
    title: 'Moonlight Peaks Platforms',
    description: 'Moonlight Peaks platform hub for Steam, Switch, Switch 2, Steam Deck, Windows, Mac, PlayStation, Xbox, and Android.',
    h1: 'Moonlight Peaks platforms',
    intro: 'Find where Moonlight Peaks is available, which versions are confirmed, and which platform pages answer specific questions.',
    sections: [
      { title: 'Confirmed platforms', body: 'Confirmed launch platforms include Steam, Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.' },
      { title: 'Platform-specific pages', body: 'Use long-tail platform pages for release date, price, performance, controls, demo access, and known issues.' },
    ],
    faqs: faq('platforms'),
    related: links,
  },
  {
    path: '/characters',
    hub: 'Character Hub',
    hubPath: '/characters',
    kind: 'hub',
    title: 'Moonlight Peaks Characters',
    description: 'Moonlight Peaks character hub for residents, families, romance status, gifts, schedules, and relationships.',
    h1: 'Moonlight Peaks characters',
    intro: 'Explore known Moonlight Peaks residents, family groups, romance status, character profiles, gifts, and schedules.',
    sections: [
      { title: 'Character profiles', body: 'Confirmed and reported characters have profile pages, while unconfirmed details are held until launch verification.' },
      { title: 'Gifts and schedules', body: 'Gift preferences, daily routines, events, dialogue, and relationship pages are generated from the character topic cluster.' },
    ],
    faqs: faq('characters'),
    related: links,
  },
  {
    path: '/romance',
    hub: 'Romance Hub',
    hubPath: '/romance',
    kind: 'hub',
    title: 'Moonlight Peaks Romance Guide',
    description: 'Moonlight Peaks romance hub for marriage, gifts, heart events, best partners, characters, and romance FAQs.',
    h1: 'Moonlight Peaks romance guide',
    intro: 'Learn how Moonlight Peaks romance, marriage, gifts, heart events, and character relationships are organized.',
    sections: [
      { title: 'Romance basics', body: 'Moonlight Peaks includes gender-neutral dating and marriage, with no children confirmed.' },
      { title: 'Character-specific romance pages', body: 'Open individual pages for gifts, schedules, events, dialogue, likes, dislikes, and romance notes.' },
    ],
    faqs: faq('romance'),
    related: links,
  },
  {
    path: '/guides',
    hub: 'Guides Hub',
    hubPath: '/guides',
    kind: 'hub',
    title: 'Moonlight Peaks Guides',
    description: 'Moonlight Peaks guides hub for beginner tips, farming, fishing, romance, money, decorating, and endgame pages.',
    h1: 'Moonlight Peaks guides',
    intro: 'A central guide hub for learning Moonlight Peaks systems and moving into detailed long-tail pages.',
    sections: [
      { title: 'Recommended order', body: 'Start with release date, demo, platforms, beginner guide, characters, and romance.' },
      { title: 'Guide clusters', body: 'Guide pages branch into farming, fishing, relationships, money, decorating, collectibles, crafting, and comparisons.' },
    ],
    faqs: faq('guides'),
    related: links,
  },
  {
    path: '/faq',
    hub: 'FAQ Hub',
    hubPath: '/faq',
    kind: 'hub',
    title: 'Moonlight Peaks FAQ',
    description: 'Moonlight Peaks FAQ hub for release date, platforms, demo, romance, characters, combat, multiplayer, and gameplay.',
    h1: 'Moonlight Peaks FAQ',
    intro: 'Quick answers to the questions players ask most about Moonlight Peaks before and after launch.',
    sections: [
      { title: 'Common questions', body: 'Use the FAQ hub for fast answers, then open related pages for deeper guides.' },
      { title: 'Search-friendly answers', body: 'Each FAQ topic can link to a dedicated page for release, platforms, demo, romance, gameplay, and character questions.' },
    ],
    faqs: faq('FAQ'),
    related: links,
  },
  {
    path: '/beginner-guide',
    hub: 'Beginner Hub',
    hubPath: '/beginner-guide',
    kind: 'guide',
    title: 'Moonlight Peaks Beginner Guide',
    description: 'Moonlight Peaks beginner guide for first-time players, demo users, release planning, night farming, magic, romance, and systems.',
    h1: 'Moonlight Peaks beginner guide',
    intro: 'Start here if you are new to Moonlight Peaks and want the safest path through release, demo, platforms, and early systems.',
    sections: [
      { title: 'First steps', body: 'Confirm your platform, try the demo, learn the night-farming loop, and choose a first goal.' },
      { title: 'Important systems', body: 'Farming, fishing, magic, decorating, romance, characters, and Nokturna each connect to deeper guide clusters.' },
    ],
    faqs: faq('beginner guide'),
    related: links,
  },
  {
    path: '/moonlight-peaks-vs-stardew-valley',
    hub: 'Comparison Hub',
    hubPath: '/compare',
    kind: 'comparison',
    title: 'Moonlight Peaks vs Stardew Valley',
    description: 'Moonlight Peaks vs Stardew Valley comparison covering farming, romance, combat, multiplayer, price, story, and cozy-game fit.',
    h1: 'Moonlight Peaks vs Stardew Valley',
    intro: 'Compare Moonlight Peaks with Stardew Valley to understand the biggest differences in tone, farming, romance, combat, and multiplayer.',
    sections: [
      { title: 'Main difference', body: 'Moonlight Peaks is a vampire life sim with magic and no combat, while Stardew Valley is a classic pixel-art farming sim with co-op and mine combat.' },
      { title: 'Which should you play?', body: 'Choose Moonlight Peaks for a new gothic cozy theme, or Stardew Valley for a proven classic with years of content.' },
    ],
    faqs: faq('comparison'),
    related: links,
  },
  ...extraHubPages,
  ...topicPages,
]);
