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

// Simple, thematic SVG icon marks (viewBox 0 0 100 100, stroke/fill inherit currentColor) used as
// the avatar fallback for characters without real portrait art, instead of a plain letter.
// 'other' has no icon — it falls back to the initial letter, since it's a catch-all category.
export const typeIcons: Partial<Record<CharType, string>> = {
  vampire:
    '<path d="M50 20 C38 30 20 28 12 40 C24 38 34 42 40 50 C34 52 26 58 22 68 C34 64 44 66 50 74 C56 66 66 64 78 68 C74 58 66 52 60 50 C66 42 76 38 88 40 C80 28 62 30 50 20 Z" />',
  werewolf:
    '<path d="M62 22 A26 26 0 1 0 66 70 A20 20 0 1 1 62 22 Z" /><path d="M30 78 L36 66 L42 78 M46 80 L50 68 L54 80 M58 80 L64 68 L68 80" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />',
  witch:
    '<path d="M50 16 L74 66 Q50 58 26 66 Z" /><ellipse cx="50" cy="68" rx="26" ry="6" />',
  mermaid:
    '<path d="M14 40 Q26 28 38 40 Q50 52 62 40 Q74 28 86 40" stroke-width="5" fill="none" stroke-linecap="round" /><path d="M14 58 Q26 46 38 58 Q50 70 62 58 Q74 46 86 58" stroke-width="5" fill="none" stroke-linecap="round" /><path d="M14 76 Q26 64 38 76 Q50 88 62 76 Q74 64 86 76" stroke-width="5" fill="none" stroke-linecap="round" />',
  seer:
    '<path d="M10 50 Q50 18 90 50 Q50 82 10 50 Z" fill="none" stroke-width="4" /><circle cx="50" cy="50" r="13" />',
  ghost:
    '<path d="M28 82 V46 a22 22 0 0 1 44 0 V82 L62 72 L50 82 L38 72 Z" /><circle cx="41" cy="46" r="3.5" fill="#1a1420" /><circle cx="59" cy="46" r="3.5" fill="#1a1420" />',
  human:
    '<circle cx="50" cy="36" r="16" /><path d="M20 86 Q50 58 80 86 Z" />',
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
    // Gift data from two independent launch-week sources, treated as complementary (not
    // contradictory — TheGamer's own "Best" tier for Saga was marked TBC, so Pocket Tactics'
    // top pick doesn't conflict with it): Pocket Tactics (loved gift) + TheGamer (additional
    // liked/disliked items, published July 7, 2026).
    lovedGifts: ['White Wine'],
    likedGifts: ['Red Wine', 'Beer', 'Single flowers (not bouquets)', 'Purple Tulip', 'Pink Azalea', 'Blood Grape', 'Strawberry Juice', 'Gazpacho Soup'],
    dislikedGifts: ['Flower bouquets (multiple flowers)', 'Copper Bar'],
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
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['Pink Azalea'],
    likedGifts: ['Purple Tulip'],
    dislikedGifts: ['Copper Ore'],
    giftStatus: 'reported',
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
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea'],
    dislikedGifts: ['Copper Bar'],
    giftStatus: 'reported',
  },
  {
    id: 'luna', name: 'Luna', family: 'Witch (Aranea, distant Webb cousin)', type: 'witch',
    status: 'confirmed', romanceable: true, img: '/luna.webp', c1: '#4a2f6a', c2: '#a06ad0',
    desc: 'The town\u2019s nature/sea witch, surname Aranea \u2014 a distant cousin of the Webb family, calm, brews magical potions, runs the plant stalls, and cares for quirky, slightly cursed livestock like Draculambs.',
    traits: [['Magic', 88], ['Nurture', 75], ['Mischief', 45]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed surname Aranea; a distant cousin of the Webb family rather than a direct member.',
      'Also tends livestock, including Draculambs — sources vary slightly on the exact farming/plant split, to be confirmed in-game.',
      'Confirmed: sells livestock (waiting outside her house) once players have bought a Barn from Ridge — first animal is typically a Cheeken, which likes petting and hats.',
      'Details to be confirmed against the live game at launch.',
    ],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['Purple Tulip', 'Purple Azalea', 'White Rose'],
    likedGifts: ['Blood Grape'],
    dislikedGifts: ['Rusty Bean Can'],
    giftStatus: 'reported',
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
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['White Wine', 'Red Wine'],
    likedGifts: ['Purple Tulip', 'Pink Azalea'],
    dislikedGifts: ['Wood', 'Onion Seeds'],
    giftStatus: 'reported',
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
    knownInfo: ['Confirmed as a werewolf carpenter and pacifist.', 'Scouts wood during his werewolf hours and is close with family.', 'Confirmed: sells players their first Barn (4,000 gold + materials, 10x6 space, 1 night to build, holds 4 animals), required before buying livestock from Luna.', 'Confirmed: runs the Howling Hammer tool-upgrade shop, open Monday\u2013Friday, 6 PM to midnight.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Blood Grape'],
    dislikedGifts: ['Common Mushroom', 'Charcoal', 'Copper Bar', 'Pink Conch Shell', 'Splotch Fish'],
    giftStatus: 'reported',
  },
  { id: 'sabrina', name: 'Sabrina', family: 'Witch (Webb)', type: 'witch', status: 'confirmed', romanceable: true, img: '/sabrina.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'A gothic witch of the Webb family who runs "Webb of Wonders," selling the Alter Ego Elixir; a rule-breaking free spirit, to her cousin Fiona\u2019s annoyance.',
    traits: [['Rebellion', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as the witch running the "Webb of Wonders" shop; reported as part of the Webb family and Fiona\u2019s cousin.', 'Sells the Alter Ego Elixir, used to change your character\u2019s look.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['Purple Tulip', 'Purple Plumeria'],
    likedGifts: ['Blood Grape', 'Blood Grape Juice'],
    dislikedGifts: ['Onion Seeds', 'Pink Conch Shell'],
    giftStatus: 'reported',
  },
  { id: 'noel',    name: 'Noel',    family: 'Witch (Webb)', type: 'other', status: 'confirmed', romanceable: true, img: '/noel.webp',    c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'The town blacksmith and a dashing flirt of the Webb family, Fiona\u2019s brother, who calls himself "the face of Moonlight Peaks"; underneath the confidence, he struggles with his self-image and wants to be accepted for who he really is.',
    traits: [['Confidence', 90]], traitsPlaceholder: true,
    knownInfo: ['Confirmed at launch; gives players the fishing rod after a 250-gold fishing bet.', 'Confirmed as Fiona\u2019s brother in the Webb family; the town blacksmith.', 'Confirmed depth: his surface confidence hides real self-image struggles.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['Golden Egg'],
    likedGifts: ['Blood Grape', 'Blood Grape Juice', 'Strawberry Juice', 'Glibby Fish'],
    dislikedGifts: ['Purple Tulip', 'Pink Azalea'],
    giftStatus: 'reported',
  },
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
    traits: [], knownInfo: ['Confirmed as the oldest sibling in the Khazan seer family, ahead of Aras and Alina.', 'Reported as the in-universe inventor of Nokturna (also spelled "Nocturna" in some coverage).', 'Datamined files also list a "Dragan\u2019s House" location.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea', 'Purple Kthonia', 'Blood Grape', 'Moon Juice'],
    dislikedGifts: ['Pink Conch Shell'],
    giftStatus: 'reported',
  },

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
      'The portrait shown here comes from a pre-launch roster image supplied for this guide; family, species, and relationship status are currently unverified against the live game, not yet independently confirmed post-launch.',
    ],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea', 'Blood Grape', 'Moon Juice'],
    dislikedGifts: ['Fiber', 'Cloth'],
    giftStatus: 'reported',
  },
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
    ],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea'],
    dislikedGifts: ['Stone', 'Onion Seeds', 'Pink Conch Shell'],
    giftStatus: 'reported',
  },
  { id: 'elvira', name: 'Elvira', family: 'Vampire (Ambrosia)', type: 'vampire',
    status: 'confirmed', romanceable: true, img: '/elvira.webp', c1: '#5a2f4a', c2: '#c06a9a',
    desc: 'Samael\u2019s sister \u2014 an artistic, restless vampire who keeps jumping into new side projects, often annoying her uncle Orlock.',
    traits: [['Creativity', 80], ['Restlessness', 70]], traitsPlaceholder: true,
    knownInfo: [
      'Confirmed as Samael\u2019s sister and Orlock\u2019s niece.',
      'Hides a fragile, artistic side that only Samael is said to fully know.',
    ],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea'],
    dislikedGifts: ['Copper Ore', 'Cloth', 'Pink Conch Shell', 'Blue Willow Tree Seed'],
    giftStatus: 'reported',
  },
  { id: 'fiona', name: 'Fiona', family: 'Witch (Webb)', type: 'witch', status: 'confirmed', romanceable: true, img: '/fiona.webp', c1: '#4a2f5a', c2: '#a06ac0',
    desc: 'Head of the Webb family and leader of the local coven \u2014 succeeding her mother Laveau, who left to marry Vlad Dracula \u2014 and the town florist; cold and exacting, with very high expectations of her brother Noel and cousins.',
    traits: [['Discipline', 75], ['Warmth', 55]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as head of the Webb family and coven, succeeding Laveau (the player character\u2019s mother).', 'Gives players mailbox delivery quests during the early homestead loop.', 'Confirmed quest detail: she cursed the bridge to Orlock\u2019s home after a drunken argument, blocking the Misty Shores area until the "A Bridge Too Far" quest lifts it.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea', 'Purple Lavender', 'Egg', 'Moon Juice'],
    dislikedGifts: ['Onion Seeds'],
    giftStatus: 'reported',
  },

  // --- Named in GameWatcher's post-launch confirmed-NPC roundup (July 7, 2026); no further
  // role/family/gift detail sourced yet beyond species where stated. Add detail as verified. ---
  { id: 'kim', name: 'Kim', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '/kim.webp', c1: '#2a5a6a', c2: '#5ac0d0',
    desc: 'A boundlessly energetic, sunny mermaid of the Hosu family, arriving in town about a year into the story; the quest to reunite her with a lost love is part of her arc.',
    traits: [['Energy', 90], ['Curiosity', 85]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family (also spelled Horseus/Hisu in some coverage), siblings with Rei and Tae.', 'Described as cheerful and endlessly curious in launch-week coverage.', 'Confirmed: the Hosu family arrives partway through your first year and needs help rejoining the town, living together in Luna Bay.'] },
  { id: 'ludo', name: 'Ludo', family: 'Werewolf (Logan)', type: 'werewolf', status: 'confirmed', romanceable: true, img: '/ludo.webp', c1: '#3a4a3a', c2: '#7ab08a',
    desc: "Mayor Brook's carefree child (Saga's sibling, Ridge's nephew/niece) who'd rather sleep the night away than learn the family's carpentry craft; writes vampire surf-rock operas and talks to a haiku-spouting toad named Yabbis.",
    traits: [['Chaos', 80], ['Warmth', 60]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as Brook\u2019s child, Saga\u2019s sibling, and Ridge\u2019s nephew/niece in the Logan werewolf family.', 'Loves pancakes and ghost stories, and keeps a dog.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Blood Grape', 'Moonfruit'],
    dislikedGifts: ['Charcoal', 'Orbis Fish'],
    giftStatus: 'reported',
  },
  { id: 'tae', name: 'Tae', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '/tae.webp', c1: '#4a3a3a', c2: '#b08a8a',
    desc: 'A stunning, down-to-earth merman of the Hosu family who takes pride in his looks and loves helping others find their confidence.',
    traits: [['Confidence', 85], ['Loyalty', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family, siblings with Kim and Rei. (Correction: an earlier version of this entry used the display name "Tay" based on a single source; multiple post-launch sources confirm "Tae" instead.)', 'Described as loyal and encouraging.'] },
  { id: 'winston', name: 'Winston', family: 'Human (Henderson)', type: 'human', status: 'confirmed', romanceable: true, img: '/winston.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'The town skeptic — reluctant to live in a supernatural town and easily spooked, but a lot of fun once he lets his guard down. Persephone\u2019s nephew, Jada\u2019s brother.',
    traits: [['Skepticism', 75]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as part of the Henderson human family, arriving alongside Persephone and Jada.'] },
  { id: 'rei', name: 'Rei', family: 'Mermaid (Hosu)', type: 'mermaid', status: 'confirmed', romanceable: true, img: '/rei.webp', c1: '#5a3a4a', c2: '#c08a9a',
    desc: 'A quiet, shy mermaid of the Hosu family obsessed with the environment, spending her days cleaning the shores.',
    traits: [['Gentleness', 80], ['Environmentalism', 85]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as a member of the Hosu mermaid family, siblings with Kim and Tae. (Correction: an earlier version of this entry used the display name "Ray" based on a single source; multiple post-launch sources confirm "Rei" instead.)', 'Focused on shoreline cleanup and teaching locals to respect nature.'] },
  { id: 'aras', name: 'Aras', family: 'Seer (Khazan)', type: 'seer', status: 'reported', romanceable: true, img: '/aras.webp', c1: '#4a4a3a', c2: '#b0b08a',
    desc: 'The local tailor of the Khazan seer family, running "Third Eye Threads." He avoids using his own seer powers to keep his future a mystery.',
    traits: [['Style', 80], ['Warmth', 65]], traitsPlaceholder: true,
    knownInfo: ['Reported as a member of the Khazan seer family, running the "Third Eye Threads" tailor shop — Dragan\u2019s younger sibling, alongside Alina.', 'Loves fashion and cozy conversation.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    likedGifts: ['Purple Tulip', 'Purple Azalea', 'Blood Grape', 'Raspberry Jam'],
    dislikedGifts: ['Onion Seeds', 'Pink Conch Shell'],
    giftStatus: 'reported',
  },
  { id: 'persephone', name: 'Persephone', family: 'Human (Henderson)', type: 'human', status: 'confirmed', romanceable: true, img: '/persephone.webp', c1: '#4a2f4a', c2: '#b06ab0',
    desc: "Free-spirited head of the Henderson family — a human aunt looking after her niece Jada and nephew Winston, newly arrived in town, with a love of astrology and crystals.",
    traits: [['Mysticism', 80]], traitsPlaceholder: true,
    knownInfo: ['Confirmed as head of the Henderson human family (aunt to Jada and Winston).', 'Interested in astrology, crystals, and mystical topics.'],
    // Gift data via TheGamer's launch-week testing (published July 7, 2026); 'TBC' items in their
    // original table are omitted here rather than guessed at.
    lovedGifts: ['Handmade Flower Bouquet'],
    likedGifts: ['Raspberry Jam'],
    giftStatus: 'reported',
  },
  { id: 'llemi', name: 'Llemi', family: 'Unknown', type: 'other', status: 'reported', romanceable: true, img: '/llemi.webp', c1: '#2f4a4a', c2: '#6ab0b0',
    desc: 'A whimsical love demon who feeds on local drama and chaos, living in the Pink Grove and visiting town mainly during festivals.',
    traits: [['Chaos', 85], ['Charm', 70]], traitsPlaceholder: true,
    knownInfo: ['Reported as a demon resident of the Pink Grove.', 'Said to only be seen in town during festivals; winning his heart is described as taking real effort.'] },

  // --- Non-romanceable creature/side characters confirmed via launch-week hands-on coverage ---
  { id: 'viktor-dracula', name: 'Viktor', family: 'Vampire (Ambrosia)', type: 'other', status: 'confirmed', romanceable: false, img: '/viktor-dracula.webp', c1: '#3a2a3a', c2: '#8a6a8a',
    desc: 'Orlock\u2019s old uncle, who long ago turned into a bat and now lives in a crypt on your land. Not a romance option. (Officially listed simply as "Viktor" \u2014 our earlier "Viktor Dracula" label was our own addition, not the confirmed name.)',
    traits: [], knownInfo: ['Confirmed as Orlock\u2019s uncle and a bat companion character found in a crypt on the player\u2019s land.', 'Distinct from both Count Dracula and Vlad.'] },
  { id: 'judge', name: 'Judge', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '/judge.webp', c1: '#3a3a3a', c2: '#8a8a8a',
    desc: 'Name confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; no further detail sourced yet.'] },
  { id: 'skull-girl', name: 'Skull Girl', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: null, img: '/skull-girl.webp', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'Name confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; no further detail sourced yet.'] },
  { id: 'balthasar', name: 'Balthasar', family: 'Unknown (no family)', type: 'ghost', status: 'confirmed', romanceable: false, img: '/balthasar.webp', c1: '#3a3a3a', c2: '#8a8a9a',
    desc: 'A ghost resident of the town, named alongside fellow ghost Jarvis — not a romance option, and not part of any of the seven families (like Death).',
    traits: [], knownInfo: ['Confirmed as one of the town\u2019s ghost characters, belonging to no family. (Correction: an earlier version of this entry guessed at a "Ghost family" as the seven\u2019s families; post-launch sources instead confirm the seventh family is the Hendersons.)'] },

  // --- Names sourced from moonlightpeaks.wiki.gg's official NPC navigation (a MediaWiki using
  // real in-game icons). Where we only know the name exists, we say so rather than inventing a role.
  { id: 'chester', name: 'Chester', family: 'Unknown', type: 'other', status: 'confirmed', romanceable: false, img: '/chester.webp', c1: '#4a3a2a', c2: '#a08a5a',
    desc: 'A living storage chest, gifted by Mayor Brook during your Town Hall registration — drop goods in overnight and wake up to the sale money.',
    traits: [], knownInfo: ['Confirmed: obtained from Brook during your first Town Hall visit.', 'Functions as your overnight selling storage.'] },
  { id: 'laveau', name: 'Laveau', family: 'Witch (Webb)', type: 'witch', status: 'confirmed', romanceable: false, img: '', c1: '#4a2f5a', c2: '#a06ac0',
    desc: 'Your character\u2019s mother — a witch who led the Webb coven before leaving it to start a life with Vlad Dracula. Story-central; not a romance option.',
    traits: [], knownInfo: ['Confirmed as the player character\u2019s mother and former Webb coven leader, succeeded by Fiona.', 'Her marriage to Vlad Dracula is why your character has mixed vampire/witch heritage.'] },
  { id: 'yabbis', name: 'Yabbis', family: 'Unknown', type: 'other', status: 'reported', romanceable: false, img: '/yabbis.webp', c1: '#3a4a3a', c2: '#7ab08a',
    desc: 'A haiku-speaking toad who keeps Ludo company — not a romance option.',
    traits: [], knownInfo: ['Reported as Ludo\u2019s toad companion, known for speaking only in haiku.'] },
  { id: 'grim', name: 'Grim', family: 'Unknown', type: 'other', status: 'reported', romanceable: false, img: '', c1: '#3a3a4a', c2: '#8a8ab0',
    desc: 'Likely the default/given name of your three-eyed Hellkitten companion pet, which follows you from the very start of the game (you get to name it) — distinct from later shapeshifting into a Hellkitten form yourself.',
    traits: [], knownInfo: ['Confirmed: a Hellkitten companion follows the player from the start and can be named.', 'Listed on the official wiki with the Hellkitten chibi icon under "Grim" — likely this pet\u2019s default name, not yet fully confirmed.', 'Do not confuse with shapeshifting into a Hellkitten form yourself, which unlocks later through story quests.'] },
  { id: 'mr-deyes', name: 'Mr. Deyes', family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/mr-deyes.webp', c1: '#3a3a3a', c2: '#8a8a9a',
    desc: 'Name confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; no further detail sourced yet.'] },
  { id: 'hoodini', name: 'Hoodini', family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/hoodini.webp', c1: '#3a4a4a', c2: '#6ab0b0',
    desc: 'Name confirmed to exist via official wiki navigation, shown with a white owl icon similar to Albertus\u2019 — possibly a related or variant character. Not confirmed.',
    traits: [], knownInfo: ['Listed on the official wiki with a white-owl-style icon; connection to Albertus is not yet confirmed.'] },
  { id: 'larry', name: 'Larry', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '', c1: '#3a3a3a', c2: '#8a8a8a',
    desc: 'Name confirmed to exist via official wiki navigation, shown with the Vampster icon — likely an individually-named Vampster rather than a townsperson. Not a romance option.',
    traits: [], knownInfo: ['Listed on the official wiki with the Vampster icon.'] },
  { id: 'rachel', name: 'Rachel', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '', c1: '#3a3a3a', c2: '#8a8a8a',
    desc: 'Name confirmed to exist via official wiki navigation, shown with the Vampster icon — likely an individually-named Vampster rather than a townsperson. Not a romance option.',
    traits: [], knownInfo: ['Listed on the official wiki with the Vampster icon.'] },
  { id: 'snek', name: 'Snek', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '/snek.webp', c1: '#2f4a3a', c2: '#5aa070',
    desc: 'A named snake character confirmed to exist via official wiki navigation. Not a romance option.',
    traits: [], knownInfo: ['Listed on the official wiki with a snake chibi icon.'] },
  { id: 'jacques', name: 'Jacques', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '/jacques.webp', c1: '#2f4a3a', c2: '#5aa070',
    desc: 'A named snake character confirmed to exist via official wiki navigation, alongside Snek. Not a romance option.',
    traits: [], knownInfo: ['Listed on the official wiki with a snake chibi icon.'] },
  { id: 'moon-goddess', name: 'Moon Goddess', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '/moon-goddess.webp', c1: '#4a4a6a', c2: '#9a9ad0',
    desc: 'A deity-type figure confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; likely tied to the game\u2019s night/moon mythology.', 'Community-reported (Japanese-language coverage): grouped with Brook as a friendship-only NPC, not a romance option.'] },
  { id: 'sun-god', name: 'Sun God', family: 'Unknown', type: 'other', status: 'datamined', romanceable: false, img: '/sun-god.webp', c1: '#6a5a2a', c2: '#d0a84a',
    desc: 'A deity-type figure confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; likely the Moon Goddess\u2019 counterpart in the game\u2019s mythology.', 'Community-reported (Japanese-language coverage): grouped with Brook as a friendship-only NPC, not a romance option.'] },
  { id: 'yasmin', name: 'Yasmin', family: 'Unknown', type: 'other', status: 'datamined', romanceable: null, img: '/yasmin.webp', c1: '#4a3a4a', c2: '#a06aa0',
    desc: 'Name confirmed to exist via official wiki navigation; role not yet sourced.',
    traits: [], knownInfo: ['Listed on the official wiki; no further detail sourced yet.'] },
];


