// src/data/quests-side.ts
// Side quests and NPC-specific quests, kept separate from the main story chain in quests-story.ts.
// Only real, sourced quest names are listed; anything not yet independently confirmed is labeled
// 'reported' rather than presented as fact.
export type SideQuest = {
  slug: string;
  title: string;
  npc?: string; // character slug, for cross-linking to /characters/{slug}
  status: 'confirmed' | 'reported';
  summary: string;
  reward?: string;
  related?: { label: string; href: string }[];
};

export const sideQuests: SideQuest[] = [
  {
    slug: 'noels-fishing-contest', title: 'Noel\u2019s Fishing Contest', npc: 'noel', status: 'confirmed',
    summary: 'Confirmed: within your first few in-game nights, Noel challenges you to a fishing contest by the river \u2014 catch 3 different fish types before he does. It\u2019s untimed, so it\u2019s an easy win.',
    reward: 'Your first fishing rod, plus a coin bonus',
    related: [{ label: 'Noel', href: '/characters/noel' }, { label: 'Fish collection', href: '/collections/fish' }],
  },
  {
    slug: 'fix-the-roof', title: 'Fix the Roof', npc: 'ridge', status: 'confirmed',
    summary: 'Confirmed: a quest from Ridge that unlocks house upgrades, purchased afterward at the Howling Hammer.',
    reward: 'House upgrade access',
    related: [{ label: 'Ridge', href: '/characters/ridge' }, { label: 'The House', href: '/farm/house' }],
  },
  {
    slug: 'the-magic-of-crops', title: 'The Magic of Crops', npc: 'luna', status: 'confirmed',
    summary: 'Confirmed: a letter-triggered quest from Luna that unlocks the Aquaflux spell (magical, automatic watering), a prerequisite in the chain leading to "The Quest for Mana."',
    reward: 'Aquaflux spell unlocked',
    related: [{ label: 'Luna', href: '/characters/luna' }, { label: 'Magic & potions', href: '/magic' }],
  },
  {
    slug: 'the-need-for-herbs', title: 'The Need for Herbs', status: 'reported',
    summary: 'Reported as a follow-up quest after "The Magic of Crops," leading to the Herb Garden blueprint.',
    reward: 'Herb Garden blueprint',
    related: [{ label: 'Farm helpers', href: '/farm/farm-helpers' }],
  },
  {
    slug: 'the-familys-heirloom-artifact', title: 'Dragan\u2019s Artifact (Nokturna win)', npc: 'dragan', status: 'reported',
    summary: 'Reported: winning a Nokturna match against Dragan is tied to obtaining an artifact from him, connected to setting up the museum.',
    related: [{ label: 'Dragan', href: '/characters/dragan' }, { label: 'Nokturna', href: '/nokturna' }],
  },
  {
    slug: 'vampster-collection-quest', title: 'Vampster Round-Up', npc: 'alina', status: 'confirmed',
    summary: 'Confirmed: Alina, found inside the Cave of Echoes, explains that the 53 Vampsters scattered around town are lost and asks you to carry them home one at a time to a cave in Misty Shores.',
    related: [{ label: 'Alina', href: '/characters/alina' }, { label: 'Vampsters collection', href: '/collections/vampsters' }],
  },
  {
    slug: 'soul-blobs-favor', title: "Death's Favor (Soul Blobs)", npc: 'death', status: 'confirmed',
    summary: 'Confirmed: after your second meeting with Death in town, he introduces the 100 Soul Blobs and asks you to round them up with the Net.',
    reward: 'Antique Clock upon collecting all 100 (extends the night from 15 to 25 minutes)',
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Soul Blobs collection', href: '/collections/soul-blobs' }],
  },
  {
    slug: 'albertus-job-board', title: "Albertus' Jobs (ongoing)", npc: 'albertus', status: 'confirmed',
    summary: 'Confirmed: an ongoing, repeatable side-system rather than a one-time quest \u2014 short requests posted on Albertus\u2019 board at Town Hall, each rewarding coins, sometimes an item, and relationship points with whoever posted it.',
    related: [{ label: 'Albertus', href: '/characters/albertus' }, { label: "Albertus' Jobs", href: '/collections/albertus-jobs' }],
  },
];

export const sideQuestBySlug = new Map(sideQuests.map((q) => [q.slug, q]));
