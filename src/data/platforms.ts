import type { TopicItem, TopicSection } from './topic';

export const platformsSection: TopicSection = {
  base: '/platforms',
  label: 'Platforms',
  eyebrow: 'Platform',
  heading: 'Moonlight Peaks <em>platforms</em> & price',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Platforms — Switch, Switch 2, Steam & Price',
  description: 'Where to play Moonlight Peaks: Nintendo Switch and Switch 2, Steam (PC & Mac), Steam Deck, and Android via Google Play — with price, the free demo, and PS5/Xbox/iOS status.',
  intro: 'Everything about where and how to play Moonlight Peaks at launch on July 7, 2026 — every platform, the price, the free demo, and per-platform deep dives.',
};

export const platforms: TopicItem[] = [
  {
    slug: 'steam-deck', title: 'Moonlight Peaks on Steam Deck', tag: 'Steam Deck', status: 'confirmed',
    dek: 'Moonlight Peaks is out now on Steam for PC and Mac, so it\u2019s playable on Steam Deck.',
    body: [
      'Moonlight Peaks is available on Steam for Windows and Mac, so it plays on Steam Deck like other Steam titles.',
      'A confirmed launch-week issue: some players hit a crash on Steam Deck startup. The reported fix is switching the compatibility tool to Proton 9.0-4 in the game\u2019s Properties → Compatibility settings. A formal Valve "Steam Deck Verified" rating has not been confirmed here yet.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'Release date', href: '/release-date' }, { label: 'Known issues', href: '/known-issues' }],
    faq: [{ q: 'Is Moonlight Peaks Steam Deck Verified?', a: 'A formal Valve "Steam Deck Verified" rating isn\u2019t confirmed here yet. The game is playable on Deck via Steam; if you hit a startup crash, switching to Proton 9.0-4 is the reported fix.' }],
  },
  {
    slug: 'switch', title: 'Moonlight Peaks on Nintendo Switch', tag: 'Switch', status: 'confirmed',
    dek: 'Moonlight Peaks is out now on the original Nintendo Switch — price, the free demo, and the Switch 2 upgrade.',
    body: [
      'Moonlight Peaks released on the original Nintendo Switch on July 7, 2026, and the free demo is available on the eShop.',
      'There is also a separate, enhanced Nintendo Switch 2 edition; players who bought on the original Switch have been told a Switch-to-Switch 2 upgrade pass will be available.',
      'Confirmed at launch: full controller support out of the box \u2014 reviewers describe the game as controller-first by design, which suits handheld Switch play well.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'On Switch 2', href: '/platforms/switch-2' }, { label: 'Release date', href: '/release-date' }],
    faq: [{ q: 'Is Moonlight Peaks on the original Nintendo Switch?', a: 'Yes — it released on the original Switch on July 7, 2026, and the free demo is on the eShop. A separate, enhanced Switch 2 edition is also available.' }],
  },
  {
    slug: 'switch-2', title: 'Moonlight Peaks on Nintendo Switch 2', tag: 'Switch 2', status: 'confirmed',
    dek: 'A native Nintendo Switch 2 edition is confirmed at $39.99 — here is what reviewers found in portable mode.',
    body: [
      'Moonlight Peaks has a dedicated Nintendo Switch 2 edition alongside the original Switch version, priced at $39.99 (versus $34.99 on Steam, Switch, and Android), and the free demo is playable on Switch 2.',
      'A Switch-to-Switch 2 upgrade pass has been mentioned for players who buy on the original Switch.',
      'Confirmed via launch-week reviews: the Switch 2 edition ran exceptionally well in portable mode, with solid, well-organized controller mapping \u2014 one of the stronger handheld experiences among the confirmed platforms.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'The demo', href: '/demo' }, { label: 'Release date', href: '/release-date' }],
    faq: [{ q: 'Is there a Switch 2 version of Moonlight Peaks?', a: 'Yes — a native Nintendo Switch 2 edition is confirmed at $39.99, and the free demo is playable on Switch 2. Reviewers found it ran exceptionally well in portable mode.' }],
  },
  {
    slug: 'android', title: 'Moonlight Peaks on Android (Google Play)', tag: 'Android', status: 'confirmed',
    dek: 'Moonlight Peaks is out now on Android via Google Play — a one-time purchase, with no gacha or in-app purchases.',
    body: [
      'Moonlight Peaks released on Android through Google Play (Google Play Games) on July 7, 2026, making it one of the few cozy life sims of this scope to arrive day one on mobile, priced the same as Steam and Switch at $34.99.',
      'Confirmed: this is a one-time purchase with no gacha mechanics, energy timers, or in-app purchases \u2014 the full game is unlocked at that single price, same as on PC or console.',
      'No iOS version has been announced; Android via Google Play is the only confirmed mobile platform.',
      'Not yet independently confirmed here: exact minimum device requirements and full touch-control scheme details.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'What platforms?', href: '/faq/what-platforms-is-moonlight-peaks-on' }],
    faq: [{ q: 'Is Moonlight Peaks on iOS or iPhone?', a: 'No iOS version has been announced. On mobile, Moonlight Peaks is available on Android via Google Play.' }, { q: 'Does Moonlight Peaks mobile have gacha or in-app purchases?', a: 'No, confirmed: it\u2019s a one-time purchase with the full game unlocked, no gacha, energy timers, or in-app purchases.' }],
  },
];
