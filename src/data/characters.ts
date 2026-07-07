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

export type CharType = 'vampire' | 'werewolf' | 'witch' | 'mermaid' | 'human' | 'other';

export const typeLabels: Record<CharType, string> = {
  vampire: 'Vampire',
  werewolf: 'Werewolf',
  witch: 'Witch',
  mermaid: 'Mermaid',
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
    id: 'count-dracula', name: 'Count Dracula', family: 'Vampire', type: 'vampire',
    status: 'confirmed', romanceable: false, img: '/count-dracula.webp', c1: '#7a2f3f', c2: '#c0436a',
    desc: 'Your father and the town legend whose shadow you set out to step out of. Story-central —not a romance option.',
    traits: [['Presence', 95], ['Tradition', 90], ['Warmth', 25]], traitsPlaceholder: true,
    knownInfo: [
      'He is your father; the story frames your move to Moonlight Peaks as stepping out of his long shadow.',
      'A central story figure rather than a romance option.',
      'The setup has you proving that a kinder, gentler undead life is possible —something he is skeptical of.',
      'Note: some coverage refers to a strict, protective father figure named "Vlad" \u2014 unclear if this is an alternate name for Count Dracula or a distinct character; not resolved here.',
    ],
  },
  {
    id: 'saga', name: 'Saga', family: 'Werewolf', type: 'werewolf',
    status: 'confirmed', romanceable: true, img: '/saga.webp', c1: '#5a4a2a', c2: '#caa24a',
    desc: 'A townsperson revealed by the developers; her energy shifts with the full moon.',
    traits: [['Energy', 85], ['Loyalty', 80], ['Calm', 40]], traitsPlaceholder: true,
    knownInfo: [
      'A werewolf townsperson revealed by the developers.',
      'Her energy is described as shifting with the full moon.',
      'A Steam Next Fest write-up singled her out among the cast.',
    ],
    // EXAMPLE of the gift shape — replace [] with verified in-game gifts today, then flip giftStatus.
    lovedGifts: [],        // e.g. ['Blood Grapes', 'Moon Pearl']
    likedGifts: [],
    dislikedGifts: [],
    birthday: '',          // e.g. 'Autumn 3'
    giftStatus: 'unconfirmed',
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
    id: 'luna', name: 'Luna', family: 'Witch', type: 'witch',
    status: 'reported', romanceable: true, img: '/luna.webp', c1: '#4a2f6a', c2: '#a06ad0',
    desc: 'Reported as a farming witch —likely a source of early spells and gardening know-how.',
    traits: [['Magic', 88], ['Nurture', 75], ['Mischief', 45]], traitsPlaceholder: true,
    knownInfo: [
      'Reported as a farming witch in hands-on previews.',
      'Likely an early source of spells and gardening know-how.',
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
    ],
  },
  {
    id: 'logan', name: 'Logan', family: 'Werewolf', type: 'werewolf',
    status: 'reported', romanceable: true, img: '/logan.webp', c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'Reported werewolf resident with a distinctive house design.',
    traits: [['Strength', 80], ['Sociability', 60]], traitsPlaceholder: true,
    knownInfo: [
      'A werewolf resident seen in gameplay footage.',
      'In dialogue he references an old church down the road on the edge of town.',
      'A Little Chicken 3D artist\u2019s own dev-diary post (via Steam Community) describes redesigning a werewolf-themed room for Logan\u2019s house, which independently corroborates his name.',
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
  { id: 'ridge',   name: 'Ridge',   family: 'Werewolf', type: 'werewolf', status: 'confirmed', romanceable: true, img: '/ridge.webp',   c1: '#4a3a2a', c2: '#b08a4a',
    desc: 'A rugged, dependable werewolf carpenter and total pacifist who uses his werewolf hours to scout high-quality wood; deeply cares about family.',
    traits: [['Dependability', 85], ['Gentleness', 75]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a werewolf carpenter and pacifist.', 'Scouts wood during his werewolf hours and is close with family.'] },
  { id: 'sabrina', name: 'Sabrina', family: 'Witch', type: 'witch', status: 'confirmed', romanceable: null, img: '/sabrina.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'A witch who runs "Web of Wonders," the shop that sells the Alter Ego Elixir (appearance-changing potion).',
    traits: [], knownInfo: ['Confirmed as the witch running the "Web of Wonders" shop.', 'Sells the Alter Ego Elixir, used to change your character\u2019s look.'] },
  { id: 'noel',    name: 'Noel',    family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '/noel.webp',    c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'A dashing flirt who calls himself "the face of Moonlight Peaks"; bets 250 gold that you can\u2019t out-fish him, and hands over the fishing rod once you win.',
    traits: [['Confidence', 90]], traitsPlaceholder: true,
    knownInfo: ['Confirmed at launch; gives players the fishing rod after a 250-gold fishing bet.', 'Romance status not explicitly confirmed yet \u2014 verify in-game.'] },
  { id: 'jada',    name: 'Jada',    family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/jada.webp',    c1: '#5a4a3a', c2: '#c0a07a',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references).', 'Family, species, and relationship status are not yet developer-confirmed —treat as unverified until launch.'] },
  { id: 'brook',   name: 'Brook',   family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/brook.webp',   c1: '#4a3a2a', c2: '#a08a5a',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references).', 'Family, species, and relationship status are not yet developer-confirmed —treat as unverified until launch.'] },
  { id: 'jarvis',  name: 'Jarvis',  family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/jarvis.webp',  c1: '#2f4a5a', c2: '#6ab0c0',
    desc: 'Name verified via pre-launch datamined game files; role and family not yet confirmed by the developers.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references).', 'Family, species, and relationship status are not yet developer-confirmed —treat as unverified until launch.'] },
  { id: 'dragan',  name: 'Dragan',  family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/dragan.webp',  c1: '#2f5a4a', c2: '#6ac0a0',
    desc: 'Name verified via pre-launch datamined game files, which also list a "Dragan\u2019s House" —role and family not yet confirmed.',
    traits: [], knownInfo: ['Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references), which also reference a "Dragan\u2019s House" as a named location.', 'Family, species, and relationship status are not yet developer-confirmed —treat as unverified until launch.'] },

  // --- Datamined names WITH a second corroborating detail (a matching named location, or notable
  // cross-coverage) —enough for a short, honest standalone page rather than a bare table row.
  // No fan art exists for these; img is left empty and falls back to the letter-avatar. ---
  { id: 'albertus', name: 'Albertus', family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/albertus.webp', c1: '#3a4a3a', c2: '#7ab08a',
    desc: 'Name verified via pre-launch datamined game files, which also list "Albertus\u2019 Jobs" as a separate entry —possibly a job board or task-giving role.',
    traits: [], knownInfo: [
      'Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references).',
      'The same files list a distinct "Albertus\u2019 Jobs" entry alongside his name, hinting he may be connected to jobs or tasks in some way —not developer-confirmed.',
      'The portrait shown here comes from the pre-launch roster image supplied for this guide; family, species, and role are unverified until launch.',
    ] },
  { id: 'alina', name: 'Alina', family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/alina.webp', c1: '#4a3a4a', c2: '#b08ac0',
    desc: 'Name verified via pre-launch datamined game files, which also list "Alina\u2019s House" as a named location.',
    traits: [], knownInfo: [
      'Listed as a Moonlight Peaks resident in pre-launch datamined game files (cross-referenced against pre-launch references).',
      'The same files reference an "Alina\u2019s House," suggesting she is a homeowner/resident rather than a passing or event-only figure.',
      'The portrait shown here comes from the pre-launch roster image supplied for this guide; family, species, and relationship status are unverified until launch.',
    ] },
  { id: 'death', name: 'Death', family: 'Unknown', type: 'other',
    status: 'confirmed', romanceable: true, img: '/death.webp', c1: '#2a2a2a', c2: '#8a8a9a',
    desc: 'Confirmed at launch as a romanceable resident \u2014 the "grave lover" the developers teased, living at "Death\u2019s Shack".',
    traits: [], knownInfo: [
      'Confirmed as a romance option \u2014 not a pre-launch rumor, as it once was.',
      'Resides at "Death\u2019s Shack".',
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
  { id: 'fiona', name: 'Fiona', family: 'Witch', type: 'witch', status: 'confirmed', romanceable: null, img: '/fiona.webp', c1: '#4a2f5a', c2: '#a06ac0',
    desc: 'A witch resident who introduces the homestead mailbox delivery quests early on.',
    traits: [], knownInfo: ['Confirmed witch resident.', 'Gives players mailbox delivery quests during the early homestead loop.'] },

  // --- Named in GameWatcher's post-launch confirmed-NPC roundup (July 7, 2026); no further
  // role/family/gift detail sourced yet beyond species where stated. Add detail as verified. ---
  { id: 'kim', name: 'Kim', family: 'Unknown', type: 'mermaid', status: 'confirmed', romanceable: null, img: '', c1: '#2a5a6a', c2: '#5ac0d0',
    desc: 'A confirmed mermaid resident of Moonlight Peaks.', traits: [],
    knownInfo: ['Confirmed NPC (mermaid); further role and gift details not yet sourced.'] },
  { id: 'ludo', name: 'Ludo', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#3a4a3a', c2: '#7ab08a',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'tae', name: 'Tae', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'winston', name: 'Winston', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'rei', name: 'Rei', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#5a3a4a', c2: '#c08a9a',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'aras', name: 'Aras', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#4a4a3a', c2: '#b0b08a',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'persephone', name: 'Persephone', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#4a2f4a', c2: '#b06ab0',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
  { id: 'llemi', name: 'Llemi', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '', c1: '#2f4a4a', c2: '#6ab0b0',
    desc: 'A confirmed Moonlight Peaks resident; role and family not yet sourced.', traits: [],
    knownInfo: ['Confirmed NPC; further detail not yet sourced.'] },
];


