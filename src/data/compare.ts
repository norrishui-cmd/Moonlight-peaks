import type { TopicSection } from './topic';

export const compareSection: TopicSection = {
  base: '/compare',
  label: 'Comparisons',
  eyebrow: 'Compare',
  heading: 'Moonlight Peaks <em>vs</em> other cozy sims',
  schemaType: 'Thing',
  title: 'Moonlight Peaks vs Other Cozy Sims — Witchbrook, Coral Island, Wylde Flowers & Stardew | Moonlight Peaks Wiki & Guide',
  description: 'How Moonlight Peaks compares to other cozy farming and witch life sims — Stardew Valley, Witchbrook, Coral Island and Wylde Flowers — across setting, magic, romance, combat, multiplayer and platforms.',
  intro: 'Trying to pick your next cozy life sim? Here is how Moonlight Peaks stacks up against the games people most often compare it to. Each breakdown uses publicly confirmed facts about both games; Moonlight Peaks itself launches July 7, 2026.',
};

export type CmpRow = { dim: string; mp: string; other: string };
export type Comparison = {
  slug: string;
  other: string;
  dek: string;
  otherStatus: string;
  rows: CmpRow[];
  verdict: string[];
  related: { label: string; href: string }[];
  faq?: { q: string; a: string }[];
};

const MP = {
  status: 'Releases July 7, 2026 (free demo out now)',
  setting: 'Cozy-gothic mountain town of seven supernatural families',
  play: 'A young vampire — Count Dracula\u2019s child',
  farming: 'Farm by night, back in the coffin by sunrise; enchanted crops and Draculamb livestock',
  magic: 'Wand-based spells, potion-brewing, and shapeshifting into a bat',
  romance: 'Around two dozen, gender-neutral; marriage yes, no children',
  combat: 'None — fully cozy',
  mp_multi: 'Single-player',
  platforms: 'Steam, Steam Deck, Switch, Switch 2, Android',
};

const row = (dim: string, other: string, mp: string): CmpRow => ({ dim, mp, other });

export const comparisons: Comparison[] = [
  {
    slug: 'witchbrook', other: 'Witchbrook',
    dek: 'Two magic-flavoured life sims — but a vampire farm versus a witch college, and very different release timing.',
    otherStatus: 'Witchbrook (Chucklefish) is in development with a 2026 window and no firm date yet.',
    rows: [
      row('Status', 'In development, 2026 window (no firm date)', MP.status),
      row('Setting', 'Seaside city of Mossport, built around a magic college', MP.setting),
      row('You play as', 'A student witch at Witchbrook College', MP.play),
      row('Farming', 'Farming and foraging woven into college life; pixel-art world', MP.farming),
      row('Magic', 'Magic classes — potion brewing, broom riding, divination', MP.magic),
      row('Romance & marriage', 'Dateable cast; romance yes; no marriage', MP.romance),
      row('Combat', 'Unconfirmed — magic-based encounters hinted', MP.combat),
      row('Multiplayer', 'Up to 4-player online co-op', MP.mp_multi),
      row('Platforms', 'Steam, Switch, Switch 2, Xbox Series & Xbox One (day-one Game Pass)', MP.platforms),
    ],
    verdict: [
      'Pick Witchbrook if you want pixel-art magic-school life with friends — it has up to four-player co-op and lands day one on Game Pass and Xbox, neither of which Moonlight Peaks offers.',
      'Pick Moonlight Peaks if you want a 3D gothic vampire farm you can actually play soon: it has a firm July 7, 2026 date and a free demo out now, lets you marry, and centres on night-time farming rather than classes. Witchbrook still has no confirmed release date.',
    ],
    related: [{ label: 'Release date', href: '/release-date' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks the same as Witchbrook?', a: 'No. They are different games from different studios — Moonlight Peaks is a 3D vampire farming sim launching July 7, 2026, while Witchbrook is a pixel-art witch-college life sim still in development for 2026.' },
      { q: 'Which releases first, Moonlight Peaks or Witchbrook?', a: 'Moonlight Peaks has a firm date of July 7, 2026. Witchbrook only has a 2026 window with no confirmed date, so Moonlight Peaks is expected first.' },
    ],
  },
  {
    slug: 'coral-island', other: 'Coral Island',
    dek: 'A sunny tropical farm with co-op and combat, versus a solo gothic vampire farm with neither.',
    otherStatus: 'Coral Island (Stairway Games) is out now — it hit 1.0 in 2023 and added co-op in 2025.',
    rows: [
      row('Status', 'Out now (1.0 in 2023; co-op added 2025)', MP.status),
      row('Setting', 'Sunny tropical island with coral-reef restoration', MP.setting),
      row('You play as', 'A customizable human farmer', MP.play),
      row('Farming', 'Tropical farming plus an underwater coral farm', MP.farming),
      row('Magic', 'No witchcraft — the fantasy comes from the Merfolk Kingdom', MP.magic),
      row('Romance & marriage', '25 romanceable, gender-neutral; marriage and children', MP.romance),
      row('Combat', 'Yes — monsters in the caves and mines', MP.combat),
      row('Multiplayer', 'Up to 4-player co-op with crossplay', MP.mp_multi),
      row('Platforms', 'Steam (Deck-playable), PS5, Xbox Series', MP.platforms),
    ],
    verdict: [
      'Pick Coral Island if you want a content-packed farm you can play today, with four-player co-op, light combat in the caves, marriage and children, and a bright tropical mood.',
      'Pick Moonlight Peaks for the opposite vibe: a single-player, combat-free, cozy-gothic farm where you play a vampire and tend crops by moonlight. It launches July 7, 2026 and skips children, but leans harder into atmosphere, magic and shapeshifting.',
    ],
    related: [{ label: 'Romance & families', href: '/romance' }, { label: 'Is there multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Coral Island?', a: 'They share the farm-sim core, but Coral Island is a sunny tropical game with co-op, combat and children, while Moonlight Peaks is a solo, combat-free gothic vampire farm with wand magic.' },
      { q: 'Does Moonlight Peaks have multiplayer like Coral Island?', a: 'No. Coral Island has up to four-player co-op; Moonlight Peaks is single-player with no announced multiplayer.' },
    ],
  },
  {
    slug: 'wylde-flowers', other: 'Wylde Flowers',
    dek: 'The closest cousin in tone — witch by night, no combat — but a fixed heroine versus your own custom vampire.',
    otherStatus: 'Wylde Flowers (Studio Drydock) is out now — released in 2022 with its story fully complete.',
    rows: [
      row('Status', 'Out now (2022; story complete)', MP.status),
      row('Setting', 'Cottagecore island of Fairhaven with a hidden coven', MP.setting),
      row('You play as', 'Tara, a fixed witch protagonist (she/her)', MP.play),
      row('Farming', 'Farm by day, witch by night', MP.farming),
      row('Magic', 'Broom, potions, weather and season control, transform into a cat', MP.magic),
      row('Romance & marriage', 'Seven romanceable, all genders; marriage yes, no children', MP.romance),
      row('Combat', 'None — fully cozy', MP.combat),
      row('Multiplayer', 'Single-player', MP.mp_multi),
      row('Platforms', 'Steam, Switch, PS5, Xbox, Apple Arcade', MP.platforms),
    ],
    verdict: [
      'Pick Wylde Flowers if you want a finished, story-rich witch sim with 18+ hours of full voice acting and a fixed heroine, Tara, whose tale you can complete today.',
      'Pick Moonlight Peaks if you would rather build your own vampire, romance a much larger cast, and explore a gothic night-farming world. Tonally they are very close — both are cozy, witch-adjacent and combat-free — but Moonlight Peaks is new (July 7, 2026), customizable and darker in flavour.',
    ],
    related: [{ label: 'Character creator', href: '/activities/character-creator' }, { label: 'Magic', href: '/magic' }, { label: 'All comparisons', href: '/compare' }],
    faq: [
      { q: 'Is Moonlight Peaks like Wylde Flowers?', a: 'Tonally yes — both are cozy, combat-free witch-adjacent farm sims with day/night magic. The big differences: Wylde Flowers stars a fixed heroine and is fully voiced and complete, while Moonlight Peaks lets you create your own vampire and launches July 7, 2026.' },
    ],
  },
];
