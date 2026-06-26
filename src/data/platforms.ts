import type { TopicItem, TopicSection } from './topic';

export const platformsSection: TopicSection = {
  base: '/platforms',
  label: 'Platforms',
  eyebrow: 'Platform',
  heading: 'Moonlight Peaks <em>platforms</em> & price',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Platforms & Price — Steam, Switch 2, Steam Deck & Android | Moonlight Peaks Wiki & Guide',
  description: 'Where to play Moonlight Peaks: Steam (PC & Mac), Steam Deck, Nintendo Switch, Switch 2, and Android via Google Play — with price, the free demo, and PS5/Xbox/iOS status.',
  intro: 'Everything about where and how to play Moonlight Peaks at launch on July 7, 2026 — every platform, the price, the free demo, and per-platform deep dives.',
};

export const platforms: TopicItem[] = [
  {
    slug: 'steam-deck', title: 'Moonlight Peaks on Steam Deck', tag: 'Steam Deck', status: 'expected',
    dek: 'Moonlight Peaks releases on Steam for PC, so it is playable on Steam Deck — here is what to expect.',
    body: [
      'Because Moonlight Peaks launches on Steam for Windows and Mac, it can be played on Steam Deck like other Steam titles.',
      'Hands-on previews suggest the game plays well with a gamepad, which bodes well for the Deck. Valve\u2019s official \u201CSteam Deck Verified\u201D rating will be confirmed around launch.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'Release date', href: '/release-date' }, { label: 'What platforms?', href: '/faq/what-platforms-is-moonlight-peaks-on' }],
    faq: [{ q: 'Is Moonlight Peaks Steam Deck Verified?', a: 'It launches on Steam, so it is playable on Steam Deck; the official Verified rating will be confirmed around the July 7, 2026 launch.' }],
  },
  {
    slug: 'switch-2', title: 'Moonlight Peaks on Nintendo Switch 2', tag: 'Switch 2', status: 'confirmed',
    dek: 'A native Nintendo Switch 2 edition is confirmed — here is the price and upgrade detail.',
    body: [
      'Moonlight Peaks has a dedicated Nintendo Switch 2 edition alongside the original Switch version, and the free demo is playable on Switch 2.',
      'The Switch 2 edition is priced a little higher than the base version, and a Switch-to-Switch 2 upgrade pass has been mentioned for players who buy on the original Switch.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'The demo', href: '/demo' }, { label: 'Release date', href: '/release-date' }],
    faq: [{ q: 'Is there a Switch 2 version of Moonlight Peaks?', a: 'Yes — a native Nintendo Switch 2 edition is confirmed, and the free demo is playable on Switch 2.' }],
  },
  {
    slug: 'android', title: 'Moonlight Peaks on Android (Google Play)', tag: 'Android', status: 'confirmed',
    dek: 'Moonlight Peaks is coming to Android via Google Play — what that means for mobile players.',
    body: [
      'Moonlight Peaks launches on Android through Google Play (Google Play Games), making it one of the few cozy life sims of this scope to arrive day one on mobile.',
      'Exact device requirements and touch-control details will be confirmed at launch.',
    ],
    related: [{ label: 'All platforms', href: '/platforms' }, { label: 'What platforms?', href: '/faq/what-platforms-is-moonlight-peaks-on' }],
    faq: [{ q: 'Is Moonlight Peaks on iOS or iPhone?', a: 'No iOS version has been announced. On mobile, Moonlight Peaks launches on Android via Google Play.' }],
  },
];
