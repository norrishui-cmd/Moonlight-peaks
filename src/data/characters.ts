// Moonlight Peaks character roster.
// status: 'confirmed' = named by devs/official; 'reported' = from coverage/previews;
// 'datamined' = name verified via pre-launch game-file datamines (cross-referenced with
// community wikis, primarily pre-launch references) but role/family/relationships not yet
// developer-confirmed; 'unconfirmed' = name not sourced anywhere yet (verify at launch).
// romanceable: true / false / null (unknown -> "TBC"). TRAITS are illustrative placeholders; [] = none shown.
// knownInfo: real, sourced bullets shown on the character's profile page. Keep factual; leave empty for unconfirmed.
// IMAGE: square images in /public -> URL is /<id>.webp. img:'' falls back to the SVG letter avatar.
// Profile pages at /characters/<id> are generated ONLY for confirmed/reported characters (not unconfirmed).
// GIFTS: lovedGifts/likedGifts/dislikedGifts + birthday are filled at launch. The gift finder
// (/tools/romance-gift-finder) and each profile page read these fields directly. Keep giftStatus
// honest — only 'confirmed' once you've verified the gift reaction in the live game.

export type CharType = 'vampire' | 'werewolf' | 'witch' | 'mermaid' | 'seer' | 'ghost' | 'human' | 'other';

export const typeLabels: Record<CharType, string> = {
  vampire: 'Vampire',
  werewolf: 'Werewolf',
  witch: 'Witch',
  mermaid: 'Mermaid',
  seer: 'Seer',
  ghost: 'Ghost',
  human: 'Human',
  other: 'Other',
};

export type Character = {
  id: string;
  name: string;
  family: string;
  type: CharType;
  status: 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';
  romanceable: boolean | null;
  img?: string;
  c1: string; c2: string;
  desc: string;
  traits: [string, number][];
  traitsPlaceholder?: boolean;
  knownInfo?: string[];
  // --- Gift data (fill at launch) ---
  // Item NAMES this resident loves / likes / dislikes. Omit or leave [] until verified in-game.
  lovedGifts?: string[];
  likedGifts?: string[];
  dislikedGifts?: string[];
  birthday?: string;   // e.g. 'Summer 14' — birthday gifts often score higher; fill at launch
  // Verification of THIS character's gift data specifically (separate from the `status` name-field above).
  giftStatus?: 'confirmed' | 'reported' | 'datamined' | 'unconfirmed';
};

const UNCONFIRMED_DESC = 'Portrait shown; not yet confirmed as a Moonlight Peaks character. Name, family, and details will be verified at launch.';

export const characters: Character[] = [
  {
    id: 'count-dracula', name: 'Count Dracula (Vlad Dracula)', family: 'Vampire (Dracula)', type: 'vampire',
    status: 'confirmed', romanceable: false, img: '/count-dracula.webp', c1: '#7a2f3f', c2: '#c0436a',
    desc: 'Your father, full name Vlad Dracula, and the town legend whose shadow you set out to step out of. Story-central — not a romance option.',
    traits: [['Presence', 95], ['Tradition', 90], ['Warmth', 25]], traitsPlaceholder: true,
    knownInfo: [
      'He is your father; the story frames your move to Moonlight Peaks as stepping out of his long shadow.',
      'Confirmed full name: Vlad Dracula. (Correction: an earlier entry treated "Vlad" as a separate Ambrosia-family character — multi-source confirmation shows this is Count Dracula\u2019s own given name, not a distinct resident. That entry has been retired.)',
      'Confirmed: your mother is Laveau, a witch who led the Webb coven before leaving it to start a life with Vlad Dracula — meaning your character has mixed vampire/witch heritage.',
      'A central story figure rather than a romance option.',
      'The setup has you proving that a kinder, gentler undead life is possible —something he is skeptical of.',
      'Confirmed at launch: vampires and werewolves in town rarely get along, trading petty spats; an early quest has you finding an artifact to help reconcile the two family heads.',
    ],
  },
  {
    id: 'saga', name: 'Saga', family: 'Werewolf (Logan)', type: 'werewolf',
    status: 'confirmed', romanceable: true, img: '/saga.webp', c1: '#5a4a2a', c2: '#caa24a',
    desc: 'A prickly-but-devoted werewolf who keeps the town running — fixing potholes and chasing down missing pumpkins — with little time left for romance until it sneaks up on her.',
    traits: [['Energy', 85], ['Loyalty', 80], ['Calm', 40]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed as the town\u2019s go-to problem-solver, handling community issues like potholes and missing pumpkins.',
      'Has a prickly exterior but a deep love for the town and its residents; throws herself into helping others.',
      'Her energy is described as shifting with the full moon.',
      'Confirmed: Brook\u2019s daughter, wanting to follow in her mayor father\u2019s footsteps; Ridge is her uncle, Ludo her sibling — she often plays referee between Brook and Orlock.',
      'Confirmed dating progression: dates unlock at Heart Level 4, and you can propose at Heart Level 8; the wedding takes place within a week, attended by the town\u2019s vampires and werewolves.',
      'Confirmed home: a houseboat near the main path to Town Hall (find her there when it\u2019s raining); on dry days she\u2019s often at Coffee & Coffins or wandering near Town Hall.',
    ],
    // First confirmed gift data on the site, via direct in-game testing (Pocket Tactics).
    lovedGifts: ['White Wine'],
    likedGifts: ['Red Wine', 'Beer', 'Single flowers (not bouquets)'],
    dislikedGifts: ['Flower bouquets (multiple flowers)'],
    birthday: 'Summer 27',
    giftStatus: 'confirmed',
  },
  {
    id: 'mina', name: 'Mina', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/mina.webp', c1: '#3a4a6a', c2: '#7aa2d0',
    desc: 'A cheerful vampire, Orlock\u2019s daughter, who co-runs the town caf\u00e9 "Coffee & Coffins" with her sibling Evan.',
    traits: [['Warmth', 80], ['Charm', 70]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed at launch as Orlock\u2019s daughter and Evan\u2019s sibling; the two run "Coffee & Coffins" together.',
      'Orlock reportedly wanted to shut the caf\u00e9 down after their mother left, but Mina talked him out of it.',
      'Loves baking and stays determinedly bright and cheery.',
    ],
  },
  {
    id: 'evan', name: 'Evan', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/evan.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'A quiet, aloof vampire who co-runs "Coffee & Coffins" with his sister Mina; his father Orlock pressures him to take over the family name.',
    traits: [['Calm', 85], ['Aloofness', 60]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed at launch as Orlock\u2019s son and Mina\u2019s sibling, co-running the town caf\u00e9.',
      'Prefers counting stars to taking over the family name his father wants him to inherit.',
    ],
  },
  {
    id: 'luna', name: 'Luna', family: 'Witch (Webb)', type: 'witch',
    status: 'reported', romanceable: true, img: '/luna.webp', c1: '#4a2f6a', c2: '#a06ad0',
    desc: 'Reported as the local sea witch \u2014 calm, brews magical potions, runs the plant stalls, and cares for quirky, slightly cursed livestock like Draculambs.',
    traits: [['Magic', 88], ['Nurture', 75], ['Mischief', 45]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as a "sea witch" who runs the town\u2019s plant stalls and brews potions.',
      'Also tends livestock, including Draculambs — sources vary slightly on the exact farming/plant split, to be confirmed in-game.',
      'Confirmed: sells livestock (waiting outside her house) once players have bought a Barn from Ridge — first animal is typically a Cheeken, which likes petting and hats.',
      'Details to be confirmed against the live game at launch.',
    ],
  },
  {
    id: 'orlock', name: 'Orlock', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/orlock.webp', c1: '#6a2f3f', c2: '#c0436a',
    desc: 'An obstinate, self-pitying vampire family head; the first resident you meet, demanding you make him wine. His wife left long ago and there is a rift with his kids Mina and Evan, but a sensitive side shows through with patience.',
    traits: [['Influence', 82], ['Tradition', 78], ['Warmth', 30]], traitsPlaceholder: true,
    knownInfo: [
      'The first named resident players meet at launch; he asks for wine and gives starter Blood Grape seeds.',
      'Father of Mina and Evan (who run "Coffee & Coffins"); his wife left long ago and there is a rift with his kids.',
      'Haughty and self-pitying on the surface, with a caring side confirmed reviewers found worth pursuing.',
      'Reported: since he\u2019s already a father to Mina and Evan, marrying Orlock is said to make you their step-parent (there are no biological children in the game).',
    ],
  },
  {
    id: 'logan', name: 'Logan', family: 'Werewolf', type: 'werewolf',
    status: 'reported', romanceable: false, img: '/logan.webp', c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'CORRECTION: multi-source, post-launch confirmation shows "Logan" is the werewolf family\u2019s surname, not an individual resident\u2019s first name — the earlier "werewolf mayor Logan" reports were referring to Brook. See Brook\u2019s profile for the actual mayor and Logan-family patriarch.',
    traits: [], traitsPlaceholder: true,
    knownInfo: [
      'Correction: this entry originally treated "Logan" as a standalone character based on a pre-launch naming conflict. Post-launch, multiple sources confirm Logan is the werewolf family name — its patriarch is the mayor, Brook, whose younger brother is Ridge and whose children are Saga and Ludo.',
      'Kept as a redirect page (rather than deleted) since other pages on this site still link to this URL — see Brook, Ridge, Saga, and Ludo for the real Logan-family residents.',
    ],
  },
  {
    id: 'pumpkin-head', name: 'Pumpkin Head', family: 'Unknown', type: 'other',
    status: 'reported', romanceable: false, img: '/pumpkin-head.webp', c1: '#6a3f1a', c2: '#e08a3a',
    desc: 'Reported theatrical event host who livens up the town\u2019s gatherings.',
    traits: [['Showmanship', 90], ['Whimsy', 85]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as a theatrical event host who appears at town gatherings.',
      'Role and details to be confirmed at launch.',
    ],
  },
  {
    id: 'the-warlock', name: 'The Warlock', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: null, img: '/the-warlock.webp', c1: '#3a2f6a', c2: '#9a7ad0',
    desc: 'Seen in a hands-on preview: a self-obsessed warlock about town. Real name to be confirmed.',
    traits: [['Magic', 70], ['Ego', 88]], traitsPlaceholder: true,
    knownInfo: [
      'A self-obsessed warlock seen in a hands-on preview.',
      'In that preview he flirts with the player through constant interruptions.',
      'His real in-game name has not been confirmed.',
    ],
  },

  // --- Portrait added; name not found in the pre-launch reference roster or any other source. No profile page until verified at launch. ---
  { id: 'kai',     name: 'Kai',     family: 'Unknown', type: 'other', status: 'unconfirmed', romanceable: null, img: '/kai.webp',     c1: '#3a4a6a', c2: '#7aa2d0', desc: UNCONFIRMED_DESC, traits: [] },
  { id: 'celine',  name: 'Celine',  family: 'Unknown', type: 'other', status: 'unconfirmed', romanceable: null, img: '/celine.webp',  c1: '#5a3a5a', c2: '#c08ac0', desc: UNCONFIRMED_DESC, traits: [] },

  // --- Names verified via pre-launch game-file datamines (pre-launch references), cross-referenced.
  // Role, family, and relationships are NOT developer-confirmed —do not treat as final. ---
  { id: 'ridge',   name: 'Ridge',   family: 'Werewolf (Logan)', type: 'werewolf', status: 'confirmed', romanceable: true, img: '/ridge.webp',   c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'The town carpenter and a rugged, dependable pacifist who uses his werewolf hours to scout high-quality wood; deeply cares about family. Mayor Brook\u2019s younger brother.',
    traits: [['Dependability', 85], ['Gentleness', 75]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a werewolf carpenter and pacifist.', 'Scouts wood during his werewolf hours and is close with family.', 'Confirmed: sells players their first Barn (for money + materials), required before buying livestock from Luna.'] },
  { id: 'sabrina', name: 'Sabrina', family: 'Witch (Webb)', type: 'witch', status: 'confirmed', romanceable: true, img: '/sabrina.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'A gothic witch of the Webb family who runs "Web of Wonders," selling the Alter Ego Elixir; a rule-breaking free spirit, to her cousin Fiona\u2019s annoyance.',
    traits: [['Rebellion', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as the witch running the "Web of Wonders" shop; reported as part of the Webb family and Fiona\u2019s cousin.', 'Sells the Alter Ego Elixir, used to change your character\u2019s look.'] },
  { id: 'noel',    name: 'Noel',    family: 'Witch (Webb)', type: 'other', status: 'confirmed', romanceable: true, img: '/noel.webp',    c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'The town blacksmith and a dashing flirt of the Webb family, Fiona\u2019s brother, who calls himself "the face of Moonlight Peaks"; underneath the confidence, he struggles with his self-image and wants to be accepted for who he really is.',
    traits: [['Confidence', 90]], traitsPlaceholder: true,
    knownInfo: ['Confirmed at launch; gives players the fishing rod after a 250-gold fishing bet.', 'Confirmed as Fiona\u2019s brother in the Webb family; the town blacksmith.', 'Confirmed depth: his surface confidence hides real self-image struggles.'] },
  { id: 'jada',    name: 'Jada',    family: 'Human (Henderson)', type: 'human', status: 'confirmed', romanceable: true, img: '/jada.webp',    c1: '#5a4a3a', c2: '#c0a07a',
    desc: 'A high-energy supernatural enthusiast and relic collector who happily info-dumps about history — thrilled to be living among werewolves and vampires. Persephone\u2019s niece, Winston\u2019s sister.',
    traits: [], knownInfo: ['Confirmed as part of the Henderson human family, arriving alongside Persephone and Winston.', 'Reported as a relic collector and history enthusiast.'] },
  { id: 'brook',   name: 'Brook',   family: 'Werewolf (Logan)', type: 'werewolf', status: 'confirmed', romanceable: false, img: '/brook.webp',   c1: '#4a3a2a', c2: '#a08a5a',
    desc: 'The mayor of Moonlight Peaks and patriarch of the werewolf Logan family. You register with him at Town Hall as one of your first tasks — he\u2019s described as not a very friendly character.',
    traits: [], knownInfo: ['Confirmed as the town mayor; players register with him at Town Hall early on.', 'Confirmed: during that registration he gifts players Chester, the living storage chest used to sell goods overnight.', 'Confirmed: patriarch of the Logan werewolf family — younger brother Ridge is the town carpenter, and his children Saga and Ludo are both romanceable.', 'Not a romance option himself; resolves earlier "werewolf mayor Logan" naming confusion (see the Logan entry).'] },
  { id: 'jarvis',  name: 'Jarvis',  family: 'Unknown (no family)', type: 'ghost', status: 'confirmed', romanceable: null, img: '/jarvis.webp',  c1: '#2f4a5a', c2: '#6ab0c0',
    desc: 'One of the town\u2019s ghosts, reported alongside fellow ghost Balthasar. Correction: post-launch sources confirm the seven families are Dracula, Ambrosia, Logan, Webb, Hosu, Khazan, and Henderson — ghosts like Jarvis don\u2019t belong to any family, similar to Death.',
    traits: [], knownInfo: ['Confirmed as a ghost resident, belonging to no family (like Death).', 'Datamined files also reference a "Jarvis\u2019 House."'] },
  { id: 'dragan',  name: 'Dragan',  family: 'Seer (Khazan)', type: 'seer', status: 'reported', romanceable: true, img: '/dragan.webp',  c1: '#2f5a4a', c2: '#6ac0a0',
    desc: 'The oldest of the Khazan seer siblings — his own predictions are usually wrong, but he\u2019s better known as the in-universe inventor of the town\u2019s popular card game, Nokturna.',
    traits: [], knownInfo: ['Confirmed as the oldest sibling in the Khazan seer family, ahead of Aras and Alina.', 'Reported as the in-universe inventor of Nokturna (also spelled "Nocturna" in some coverage).', 'Datamined files also list a "Dragan\u2019s House" location.'] },

  // --- Datamined names WITH a second corroborating detail (a matching named location, or notable
  // cross-coverage) —enough for a short, honest standalone page rather than a bare table row.
  // No fan art exists for these; img is left empty and falls back to the letter-avatar. ---
  { id: 'albertus', name: 'Albertus', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '/albertus.webp', c1: '#3a4a3a', c2: '#7ab08a',
    desc: 'An owl who runs the town\u2019s bulletin board \u2014 confirmed at launch as the source of "Albertus\u2019 Jobs," the board where players check available quests/tasks.',
    traits: [], knownInfo: [
      'Confirmed at launch: Albertus is an owl, and "Albertus\u2019 Jobs" is the in-town bulletin board for checking quests.',
      'Resolves earlier pre-launch datamined speculation that his name was tied to a jobs/task system.',
    ] },
  { id: 'alina', name: 'Alina', family: 'Seer (Khazan)', type: 'seer', status: 'reported', romanceable: true, img: '/alina.webp', c1: '#4a3a4a', c2: '#b08ac0',
    desc: 'The resident rebel of the Khazan family \u2014 stubborn, fiery, and unable to stand lying, with unconventional seer powers and a preference for the shadows.',
    traits: [], knownInfo: [
      'Reported as part of the Khazan seer family — Dragan\u2019s younger sibling, alongside Aras.',
      'The same files reference an "Alina\u2019s House," suggesting she is a homeowner/resident rather than a passing or event-only figure.',
      'The portrait shown here comes from the pre-launch roster image supplied for this guide; family, species, and relationship status are unverified until launch.',
    ] },
  { id: 'death', name: 'Death', family: 'Unknown', type: 'other',
    status: 'confirmed', romanceable: true, img: '/death.webp', c1: '#2a2a2a', c2: '#8a8a9a',
    desc: 'The literal Grim Reaper, in town on holiday to unwind — dry sense of humor, tends the local cemetery, and collects both flowers and souls. Wears a Hawaiian shirt over his robes.',
    traits: [], knownInfo: [
      'Confirmed as a romance option \u2014 not a pre-launch rumor, as it once was.',
      'Confirmed personality: dry humor, tends the cemetery, collects flowers and souls, and is dressed in a Hawaiian shirt over his Grim Reaper robes.',
      'Resides at "Death\u2019s Shack", found in the Misty Shores graveyard area.',
      'Confirmed unlock chain: players meet him twice after unlocking Misty Shores/the Ambrosia Graveyard (via the "A Bridge Too Far" quest) before he gives the bug net.',
    ] },
  { id: 'samael', name: 'Samael', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/samael.webp', c1: '#4a2a2a', c2: '#b06a6a',
    desc: 'A mysterious, brooding vampire of the Ambrosia family who has run the town bar, "The Broken Lamp," for centuries. Elvira\u2019s brother.',
    traits: [['Mystery', 88], ['Devotion', 75]], traitsPlaceholder: true,
    knownInfo: [
      'Runs "The Broken Lamp," the town bar, and is a member of the Ambrosia family.',
      'Elvira\u2019s brother; described as a true romantic beneath an intense, solitary exterior.',
    ] },
  { id: 'elvira', name: 'Elvira', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/elvira.webp', c1: '#5a2f4a', c2: '#c06a9a',
    desc: 'Samael\u2019s sister \u2014 an artistic, restless vampire who keeps jumping into new side projects, often annoying her uncle Orlock.',
    traits: [['Creativity', 80], ['Restlessness', 70]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed as Samael\u2019s sister and Orlock\u2019s niece.',
      'Hides a fragile, artistic side that only Samael is said to fully know.',
    ] },
  { id: 'fiona', name: 'Fiona', family: 'Witch (Webb)', type: 'witch', status: 'confirmed', romanceable: true, img: '/fiona.webp', c1: '#4a2f5a', c2: '#a06ac0',
    desc: 'Head of the Webb family and leader of the local coven \u2014 succeeding her mother Laveau, who left to marry Vlad Dracula \u2014 and the town florist; cold and exacting, with very high expectations of her brother Noel and cousins.',
    traits: [['Discipline', 75], ['Warmth', 55]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as head of the Webb family and coven, succeeding Laveau (the player character\u2019s mother).', 'Gives players mailbox delivery quests during the early homestead loop.', 'Confirmed quest detail: she cursed the bridge to Orlock\u2019s home after a drunken argument, blocking the Misty Shores area until the "A Bridge Too Far" quest lifts it.'] },

  // --- Named in GameWatcher's post-launch confirmed-NPC roundup (July 7, 2026); no further
  // role/family/gift detail sourced yet beyond species where stated. Add detail as verified. ---
  { id: 'kim', name: 'Kim', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '', c1: '#2a5a6a', c2: '#5ac0d0',
    desc: 'A boundlessly energetic, sunny mermaid of the Hosu family, arriving in town about a year into the story; the quest to reunite her with a lost love is part of her arc.',
    traits: [['Energy', 90], ['Curiosity', 85]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family (also spelled Horseus/Hisu in some coverage), siblings with Rei and Tae.', 'Described as cheerful and endlessly curious in launch-week coverage.', 'Confirmed: the Hosu family arrives partway through your first year and needs help rejoining the town, living together in Luna Bay.'] },
  { id: 'ludo', name: 'Ludo', family: 'Werewolf (Logan)', type: 'werewolf', status: 'confirmed', romanceable: true, img: '', c1: '#3a4a3a', c2: '#7ab08a',
    desc: "Mayor Brook's carefree child (Saga's sibling, Ridge's nephew/niece) who'd rather sleep the night away than learn the family's carpentry craft; writes vampire surf-rock operas and talks to a haiku-spouting toad named Yabbis.",
    traits: [['Chaos', 80], ['Warmth', 60]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as Brook\u2019s child, Saga\u2019s sibling, and Ridge\u2019s nephew/niece in the Logan werewolf family.', 'Loves pancakes and ghost stories, and keeps a dog.'] },
  { id: 'tae', name: 'Tae', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '', c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'A stunning, down-to-earth merman of the Hosu family who takes pride in his looks and loves helping others find their confidence.',
    traits: [['Confidence', 85], ['Loyalty', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family, siblings with Kim and Rei. (Correction: an earlier version of this entry used the display name "Tay" based on a single source; multiple post-launch sources confirm "Tae" instead.)', 'Described as loyal and encouraging.'] },
  { id: 'winston', name: 'Winston', family: 'Human (Henderson)', type: 'human', status: 'confirmed', romanceable: true, img: '', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'The town skeptic — reluctant to live in a supernatural town and easily spooked, but a lot of fun once he lets his guard down. Persephone\u2019s nephew, Jada\u2019s brother.',
    traits: [['Skepticism', 75]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as part of the Henderson human family, arriving alongside Persephone and Jada.'] },
  { id: 'rei', name: 'Rei', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '', c1: '#5a3a4a', c2: '#c08a9a',
    desc: 'A quiet, shy mermaid of the Hosu family obsessed with the environment, spending her days cleaning the shores.',
    traits: [['Gentleness', 80], ['Environmentalism', 85]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family, siblings with Kim and Tae. (Correction: an earlier version of this entry used the display name "Ray" based on a single source; multiple post-launch sources confirm "Rei" instead.)', 'Focused on shoreline cleanup and teaching locals to respect nature.'] },
  { id: 'aras', name: 'Aras', family: 'Seer (Khazan)', type: 'seer', status: 'reported', romanceable: true, img: '', c1: '#4a4a3a', c2: '#b0b08a',
    desc: 'The local tailor of the Khazan seer family, running "Third Eye Threads." He avoids using his own seer powers to keep his future a mystery.',
    traits: [['Style', 80], ['Warmth', 65]], traitsPlaceholder: true,
    knownInfo: ['Reported as a member of the Khazan seer family, running the "Third Eye Threads" tailor shop — Dragan\u2019s younger sibling, alongside Alina.', 'Loves fashion and cozy conversation.'] },
  { id: 'persephone', name: 'Persephone', family: 'Human (Henderson)', type: 'human', status: 'confirmed', romanceable: true, img: '', c1: '#4a2f4a', c2: '#b06ab0',
    desc: "Free-spirited head of the Henderson family — a human aunt looking after her niece Jada and nephew Winston, newly arrived in town, with a love of astrology and crystals.",
    traits: [['Mysticism', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as head of the Henderson human family (aunt to Jada and Winston).', 'Interested in astrology, crystals, and mystical topics.'] },
  { id: 'llemi', name: 'Llemi', family: 'Unknown', type: 'other', status: 'reported', romanceable: true, img: '', c1: '#2f4a4a', c2: '#6ab0b0',
    desc: 'A whimsical love demon who feeds on local drama and chaos, living in the Pink Grove and visiting town mainly during festivals.',
    traits: [['Chaos', 85], ['Charm', 70]], traitsPlaceholder: true,
    knownInfo: ['Reported as a demon resident of the Pink Grove.', 'Said to only be seen in town during festivals; winning his heart is described as taking real effort.'] },

  // --- Non-romanceable creature/side characters confirmed via launch-week hands-on coverage ---
  { id: 'viktor-dracula', name: 'Viktor Dracula', family: 'Vampire (Ambrosia)', type: 'other', status: 'confirmed', romanceable: false, img: '', c1: '#3a2a3a', c2: '#8a6a8a',
    desc: 'Orlock\u2019s old uncle, who long ago turned into a bat and now lives in a crypt on your land. Not a romance option.',
    traits: [], knownInfo: ['Confirmed as Orlock\u2019s uncle and a bat companion character found in a crypt on the player\u2019s land.', 'Distinct from both Count Dracula and Vlad.'] },
  { id: 'balthasar', name: 'Balthasar', family: 'Unknown (no family)', type: 'ghost', status: 'confirmed', romanceable: false, img: '', c1: '#3a3a3a', c2: '#8a8a9a',
    desc: 'A ghost resident of the town, named alongside fellow ghost Jarvis — not a romance option, and not part of any of the seven families (like Death).',
    traits: [], knownInfo: ['Confirmed as one of the town\u2019s ghost characters, belonging to no family. (Correction: an earlier version of this entry guessed at a "Ghost family" as the seven\u2019s families; post-launch sources instead confirm the seventh family is the Hendersons.)'] },
];


