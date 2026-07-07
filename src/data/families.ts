import type { TopicItem, TopicSection } from './topic';

export const familiesSection: TopicSection = {
  base: '/families',
  label: 'Families',
  eyebrow: 'World',
  heading: 'The <em>seven families</em>',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Families — Vampires, Witches & More',
  description: 'The seven families of Moonlight Peaks: vampires, werewolves, witches, mermaids and the ordinary-human normies. What each family is, who belongs to it, and what is still unrevealed.',
  intro: 'Moonlight Peaks is built around seven families, each with a supernatural inclination — except the normies. All seven are now confirmed: vampires, werewolves, witches, mermaids, seers, ghosts, and the normies.',
};

export const families: TopicItem[] = [
  {
    slug: 'vampires', title: 'Vampires', tag: 'Family', status: 'confirmed', image: '/hero-fam-vampires.webp',
    dek: 'The old-world night dwellers — your own family line in Moonlight Peaks.',
    body: [
      'You play a young vampire, the child of Count Dracula, so vampires are the family you\u2019re born into. They\u2019re tied to night-time life and old-world tradition.',
      'Count Dracula is a story-central figure, and Orlock is reported as the head of a vampire family about town.',
    ],
    related: [{ label: 'Count Dracula', href: '/characters/count-dracula' }, { label: 'Orlock', href: '/characters/orlock' }, { label: 'Romance', href: '/romance' }],
    faq: [{ q: 'Are you a vampire in Moonlight Peaks?', a: 'Yes — you play a young vampire, the child of Count Dracula.' }],
  },
  {
    slug: 'werewolves', title: 'Werewolves', tag: 'Family', status: 'confirmed', image: '/hero-fam-werewolves.webp',
    dek: 'Wilder under the full moon — including confirmed sweetheart Saga.',
    body: [
      'Werewolves are one of the seven families. Saga, a confirmed romance option, is a werewolf whose energy shifts with the full moon.',
      'Logan is another reported werewolf resident around town.',
    ],
    related: [{ label: 'Saga', href: '/characters/saga' }, { label: 'Logan', href: '/characters/logan' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'witches', title: 'Witches', tag: 'Family', status: 'confirmed', image: '/hero-fam-witches.webp',
    dek: 'Keepers of wand and potion in the magical town — the Webb family.',
    body: [
      'Witches are one of the seven families, tied to the game\u2019s wand-based magic and potion-brewing. The named witch family is the Webbs.',
      'Fiona leads the Webb family and the local coven as the town florist; her cousin Sabrina runs the Web of Wonders shop. Luna is reported as the town\u2019s sea witch.',
    ],
    related: [{ label: 'Fiona', href: '/characters/fiona' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Luna', href: '/characters/luna' }, { label: 'Magic', href: '/magic' }],
  },
  {
    slug: 'mermaids', title: 'Mermaids', tag: 'Family', status: 'confirmed', image: '/hero-fam-mermaids.webp',
    dek: 'Of the lake and tides — the Horseus family.',
    body: [
      'Mermaids are confirmed as one of the seven families, tied to the town\u2019s water areas. The named mermaid family is the Horseus family.',
      'Reported members include Kim (sunny and endlessly curious), Ray (a quiet, shy environmentalist), and Tay (a confident, encouraging merman).',
    ],
    related: [{ label: 'Kim', href: '/characters/kim' }, { label: 'Ray', href: '/characters/rei' }, { label: 'Tay', href: '/characters/tae' }, { label: 'Fishing', href: '/fishing' }],
  },
  {
    slug: 'seers', title: 'Seers', tag: 'Family', status: 'confirmed', image: '/hero-fam-seers.webp',
    dek: 'Fortune-tellers of the Khazan family — one of the two families that were still under wraps.',
    body: [
      'One of the two previously-unrevealed families: the Khazans, a family of seers with fortune-telling powers of varying reliability.',
      'Dragan is a struggling seer whose predictions are usually wrong — and, in-universe, the inventor of the Nokturna card game. Alina is the family\u2019s stubborn, fiery rebel, and Aras runs the "Third Eye Threads" tailor shop while avoiding his own powers.',
    ],
    related: [{ label: 'Dragan', href: '/characters/dragan' }, { label: 'Alina', href: '/characters/alina' }, { label: 'Aras', href: '/characters/aras' }, { label: 'Nokturna', href: '/nokturna' }],
  },
  {
    slug: 'ghosts', title: 'Ghosts', tag: 'Family', status: 'confirmed', image: '/hero-fam-ghosts.webp',
    dek: 'The town\u2019s spectral residents — the second family that was still under wraps.',
    body: [
      'The second previously-unrevealed family: a Ghost family, confirmed via launch-week hands-on coverage rather than official marketing.',
      'Jarvis and Balthasar are the two named ghosts confirmed so far; more detail on this family is expected as it\u2019s verified further.',
    ],
    related: [{ label: 'Jarvis', href: '/characters/jarvis' }, { label: 'Balthasar', href: '/characters/balthasar' }, { label: 'All families', href: '/families' }],
  },
  {
    slug: 'normies', title: 'Normies', tag: 'Family', status: 'confirmed', image: '/hero-fam-normies.webp',
    dek: 'The one ordinary-human family among the supernatural seven.',
    body: [
      'The developers describe seven families, each with a supernatural inclination \u201Cexcept for the normies\u201D — the one ordinary-human family in a town full of the supernatural.',
      'All seven families are now accounted for: vampires (Ambrosia), werewolves (Logan), witches (Webb), mermaids (Horseus), seers (Khazan), ghosts, and the normies.',
    ],
    related: [{ label: 'All families', href: '/families' }, { label: 'Characters', href: '/characters' }, { label: 'The town', href: '/locations/town' }],
  },
];
