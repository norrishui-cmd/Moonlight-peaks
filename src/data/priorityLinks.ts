export type PriorityLink = {
  label: string;
  href: string;
  note: string;
};

export const homepagePriorityLinks: PriorityLink[] = [
  { label: 'Moonlight Peaks release date', href: '/release-date', note: 'Launch date, platforms, price, and demo status.' },
  { label: 'Moonlight Peaks demo guide', href: '/demo', note: 'Download, features, save limits, and demo FAQ.' },
  { label: 'Moonlight Peaks platforms', href: '/platforms', note: 'Steam, Switch, Switch 2, Steam Deck, PC, Mac, and Android.' },
  { label: 'Moonlight Peaks characters', href: '/characters', note: 'Known residents, families, profiles, and romance status.' },
  { label: 'Moonlight Peaks romance guide', href: '/romance', note: 'Marriage, gifts, heart events, and romance FAQs.' },
  { label: 'Beginner guide', href: '/beginner-guide', note: 'What to know before starting the cozy vampire life sim.' },
  { label: 'Guides hub', href: '/guides', note: 'Beginner, advanced, money, farming, fishing, and relationship guides.' },
  { label: 'FAQ hub', href: '/faq', note: 'Fast answers for searchers and long-tail Moonlight Peaks questions.' },
  { label: 'Compare with Stardew Valley', href: '/compare/stardew-valley', note: 'Romance, farming, story, and cozy-sim differences.' },
];

export const releasePriorityLinks: PriorityLink[] = [
  { label: 'Steam release date', href: '/platforms/steam/release-date', note: 'PC launch timing, price, demo, and store details.' },
  { label: 'Switch performance', href: '/platforms/switch/performance', note: 'Nintendo Switch launch expectations and known limits.' },
  { label: 'Switch 2 performance', href: '/platforms/switch-2/performance', note: 'Native Switch 2 edition, price, and upgrade notes.' },
  { label: 'Steam Deck guide', href: '/platforms/steam-deck', note: 'Portable play, controls, and verification status.' },
  { label: 'Demo download', href: '/demo/download', note: 'Where to get the free demo before launch.' },
  { label: 'Before you buy', href: '/buying/before-you-buy', note: 'Who should play, who should wait, and best platform notes.' },
];

export const platformPriorityLinks: PriorityLink[] = [
  { label: 'Steam release date', href: '/platforms/steam/release-date', note: 'Steam launch, price, demo, and PC details.' },
  { label: 'Steam Deck controls', href: '/platforms/steam-deck/controls', note: 'Deck controls and portable play expectations.' },
  { label: 'Switch performance', href: '/platforms/switch/performance', note: 'Switch frame rate, graphics, and demo guidance.' },
  { label: 'Switch 2 price', href: '/platforms/switch-2/price', note: 'Switch 2 edition pricing and upgrade notes.' },
  { label: 'Mac system requirements', href: '/platforms/mac/system-requirements', note: 'Mac support and requirements to verify at launch.' },
  { label: 'Xbox status', href: '/platforms/xbox/release-date', note: 'Whether an Xbox version has been announced.' },
];

export const characterPriorityLinks: PriorityLink[] = [
  { label: 'Saga gifts', href: '/romance/saga/gifts', note: 'Werewolf romance gift guide and launch verification notes.' },
  { label: 'Saga schedule', href: '/characters/saga/schedule', note: 'Daily route placeholder for launch data.' },
  { label: 'Luna gifts', href: '/romance/luna/gifts', note: 'Witch romance gifts, likes, and update notes.' },
  { label: 'Luna schedule', href: '/characters/luna/schedule', note: 'Where to find Luna once schedules are confirmed.' },
  { label: 'Orlock romance', href: '/characters/orlock/romance', note: 'Vampire romance status and related family links.' },
  { label: 'Character favorite gifts', href: '/characters/villagers/favorite-gifts', note: 'Long-tail gift index for confirmed residents.' },
];

export const romancePriorityLinks: PriorityLink[] = [
  { label: 'Romance gifts', href: '/romance/romance-gifts', note: 'Gift rules, loved gifts, and launch verification policy.' },
  { label: 'Romance heart events', href: '/romance/romance-heart-events', note: 'Event structure and unlock notes.' },
  { label: 'Marriage guide', href: '/romance/romance-marriage', note: 'Marriage, proposal, and no-children FAQ.' },
  { label: 'Saga gifts', href: '/romance/saga/gifts', note: 'A high-intent page for werewolf romance searches.' },
  { label: 'Luna gifts', href: '/romance/luna/gifts', note: 'A high-intent page for witch romance searches.' },
  { label: 'Best partner', href: '/romance/romance-best-partner', note: 'Comparison page for searchers choosing romance options.' },
];
