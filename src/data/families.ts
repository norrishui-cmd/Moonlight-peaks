import type { TopicItem, TopicSection } from './topic';

export const familiesSection: TopicSection = {
  base: '/families',
  label: 'Families',
  eyebrow: 'World',
  heading: 'The <em>seven families</em>',
  schemaType: 'Thing',
  title: 'Moonlight Peaks Families — Vampires, Witches & More',
  description: 'The seven families of Moonlight Peaks: two vampire lines (Dracula and Ambrosia), the werewolf Logans, the witch Webbs, the mermaid Hosus, the seer Khazans, and the human Hendersons.',
  intro: 'Moonlight Peaks is built around seven families. Multi-source, post-launch confirmation gives us all seven: the Dracula and Ambrosia vampire lines, the werewolf Logans, the witch Webbs, the mermaid Hosus, the seer Khazans, and the newly-arrived human Hendersons. (Correction: earlier versions of this page guessed at a "Ghosts" family and a generic "Normies" family — post-launch sources instead confirm the seventh family is specifically the Hendersons, and the ghost characters Jarvis/Balthasar don\u2019t belong to any family, like Death.)',
};

export const families: TopicItem[] = [
  {
    slug: 'vampires', title: 'Vampires', tag: 'Family', status: 'confirmed', image: '/hero-fam-vampires.webp',
    dek: 'Two vampire lines — your own Dracula family, and the Ambrosia family in town.',
    body: [
      'You play a young vampire, Vlad Dracula\u2019s child, so the Dracula family is the one you\u2019re born into. Confirmed at launch: there\u2019s a second, separate vampire family in town too — the Ambrosias, headed by Orlock, whose family includes his children Mina and Evan and his niece/nephew Samael and Elvira.',
      'Your mother, Laveau, was a witch who led the Webb coven before marrying into the Dracula family — so your character has mixed vampire/witch heritage.',
    ],
    related: [{ label: 'Count Dracula', href: '/characters/count-dracula' }, { label: 'Orlock', href: '/characters/orlock' }, { label: 'Romance', href: '/romance' }],
    faq: [{ q: 'Are you a vampire in Moonlight Peaks?', a: 'Yes — you play a young vampire, Vlad Dracula\u2019s child. There\u2019s a second vampire family in town too, the Ambrosias, headed by Orlock.' }],
  },
  {
    slug: 'werewolves', title: 'Werewolves', tag: 'Family', status: 'confirmed', image: '/hero-fam-werewolves.webp',
    dek: 'Wilder under the full moon — the Logan family, led by Mayor Brook.',
    body: [
      'Werewolves are one of the seven families, and the named werewolf family is the Logans. Confirmed at launch: the family patriarch is Brook, the town\u2019s mayor — earlier pre-launch coverage that called him "the werewolf mayor Logan" was referring to him, using the family name rather than his own.',
      'Brook\u2019s younger brother Ridge is the town carpenter; his children Saga (a confirmed romance option whose energy shifts with the full moon) and Ludo are both romanceable.',
    ],
    related: [{ label: 'Brook', href: '/characters/brook' }, { label: 'Saga', href: '/characters/saga' }, { label: 'Ridge', href: '/characters/ridge' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'witches', title: 'Witches', tag: 'Family', status: 'confirmed', image: '/hero-fam-witches.webp',
    dek: 'Keepers of wand and potion in the magical town — the Webb family.',
    body: [
      'Witches are one of the seven families, tied to the game\u2019s wand-based magic and potion-brewing. The named witch family is the Webbs, previously led by Laveau (the player character\u2019s mother) before she left to marry into the Dracula family.',
      'Fiona now leads the Webb family and the local coven as the town florist, with high expectations of her brother Noel (the town blacksmith), her cousin Sabrina (who runs the Webb of Wonders shop), and Luna (the town\u2019s sea witch).',
    ],
    related: [{ label: 'Fiona', href: '/characters/fiona' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Luna', href: '/characters/luna' }, { label: 'Magic', href: '/magic' }],
  },
  {
    slug: 'mermaids', title: 'Mermaids', tag: 'Family', status: 'confirmed', image: '/hero-fam-mermaids.webp',
    dek: 'Of the lake and tides — the Hosu family.',
    body: [
      'Mermaids are confirmed as one of the seven families, tied to the town\u2019s water areas. The named mermaid family is the Hosus (also spelled Horseus/Hisu in some coverage) — three siblings who live together in Luna Bay and arrive roughly a year into the story, needing help rejoining the town.',
      'Confirmed members: Kim (sunny and endlessly curious, with a lost-love reunion arc), Rei (a quiet, shy environmentalist), and Tae (a confident, encouraging merman).',
    ],
    related: [{ label: 'Kim', href: '/characters/kim' }, { label: 'Rei', href: '/characters/rei' }, { label: 'Tae', href: '/characters/tae' }, { label: 'Fishing', href: '/fishing' }],
  },
  {
    slug: 'seers', title: 'Seers', tag: 'Family', status: 'confirmed', image: '/hero-fam-seers.webp',
    dek: 'Fortune-tellers of the Khazan family.',
    body: [
      'The Khazans are a family of three siblings with fortune-telling powers of varying reliability — one of the seven confirmed families.',
      'Dragan struggles with his own powers but, in-universe, invented the Nokturna card game. Alina is the family\u2019s stubborn, fiery rebel, and Aras runs the "Third Eye Threads" tailor shop while avoiding his own powers.',
    ],
    related: [{ label: 'Dragan', href: '/characters/dragan' }, { label: 'Alina', href: '/characters/alina' }, { label: 'Aras', href: '/characters/aras' }, { label: 'Nokturna', href: '/nokturna' }],
  },
  {
    slug: 'henderson', title: 'The Hendersons', tag: 'Family', status: 'confirmed', image: '/hero-fam-normies.webp',
    dek: 'The town\u2019s human family — the seventh, and the last to arrive.',
    body: [
      'Confirmed as the seventh family: the Hendersons, the town\u2019s only ordinary-human household, who move to Moonlight Peaks about halfway through your first year. (Correction: earlier versions of this page speculated the seventh family was a "Ghosts" family, based on two unrelated ghost characters — post-launch sources instead confirm it\u2019s the Hendersons, and the ghosts don\u2019t belong to any family.)',
      'Persephone, a free-spirited aunt, heads the family, looking after her niece Jada (thrilled to live among werewolves and vampires) and nephew Winston (who lives in constant fear). All three are romance options.',
    ],
    related: [{ label: 'Persephone', href: '/characters/persephone' }, { label: 'Jada', href: '/characters/jada' }, { label: 'Winston', href: '/characters/winston' }, { label: 'All families', href: '/families' }],
  },
];
