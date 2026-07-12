// src/data/quests-story.ts
// Main story quest chain, cross-verified across multiple independent launch-week sources
// (Neoseeker's quest log transcription, Bonus Action, Output Lag's dedicated "A Bridge Too Far"
// walkthrough, Into Indie Games' walkthrough series, whisperofthehouse.com's unlock-gate guide).
// Chapter numbers are our own organizing device (the game itself doesn't label numbered
// "chapters" in what's been sourced so far) — grouped by natural story arcs.
export type Troubleshoot = { q: string; a: string };
export type StoryQuest = {
  slug: string;
  chapter: number;
  title: string;
  giver: string; // who gives it, or 'Story' for auto-triggered narrative beats
  status: 'confirmed' | 'reported';
  unlock?: string;
  summary: string;
  reward?: string;
  leadsTo?: string; // slug of the next quest/arc, for prev/next navigation
  troubleshooting?: Troubleshoot[]; // stuck-point Q&A — the core reason story pages exist
};

export const storyChapters = [
  { number: 1, title: 'Arriving in Moonlight Peaks', dek: 'Registering as a resident, meeting Orlock and Viktor, and your first crop.' },
  { number: 2, title: 'A Bridge Too Far', dek: 'Fiona\u2019s curse on Orlock\u2019s bridge, and the ritual that lifts it.' },
  { number: 3, title: 'The Crest Garden & Mana', dek: 'A missing family crest, your first real magic, and the Ambrosia family crisis.' },
  { number: 4, title: 'Town Life & Family Drama', dek: 'Town Hall politics, family tension, and settling into Moonlight Peaks.' },
  { number: 5, title: 'The Wedding Arc', dek: 'A town wedding \u2014 invitations, rehearsals, and unfinished business.' },
];

export const storyQuests: StoryQuest[] = [
  {
    slug: 'register-at-town-hall', chapter: 1, title: 'Register at Town Hall', giver: 'Story (setup)', status: 'confirmed',
    summary: 'Confirmed via multiple sources: after leaving home and meeting Orlock (see below), you head into town, where Mayor Brook registers you as a new resident at Town Hall and gives you Chester, a living chest that automatically sells anything left inside overnight.',
    reward: 'Meeting Brook, receiving Chester',
    leadsTo: 'meet-the-townsfolk',
  },
  {
    slug: 'meet-the-townsfolk', chapter: 1, title: 'Meet the Townsfolk', giver: 'Story (setup)', status: 'confirmed',
    unlock: 'Complete "Register at Town Hall"',
    summary: 'Confirmed: early setup objectives that have you meet key residents around town and get your bearings, opening up early routes between your farm and the main town area.',
    reward: 'Opens early town routes',
    leadsTo: 'orlocks-wine-scheme',
  },
  {
    slug: 'orlocks-wine-scheme', chapter: 1, title: 'Orlock\u2019s Wine Scheme (Blood Wine)', giver: 'Orlock', status: 'confirmed',
    summary: 'Confirmed via Bonus Action, cross-checked against Into Indie Games: right after arriving, you find Orlock, a hungover vampire, sleeping on your lawn \u2014 poke him rather than pour water on him for the better dialogue option. He gives you Blood Grape seeds and asks you to make him Red/Blood Wine. Once you\u2019ve made it and confront him about apologizing to Fiona, he sends you to pay off his 350-gold bar tab to Samael at The Broken Lamp.',
    reward: 'Make Blood Wine; apologize to Orlock, pay a 350-gold debt to Samael; leads toward A Bridge Too Far',
    leadsTo: 'a-bridge-too-far',
    troubleshooting: [
      { q: 'I can\u2019t find 350 coins to pay Samael \u2014 what do I do?', a: 'Community-reported (Output Lag): if you haven\u2019t met Mina yet, or want to avoid her dialogue chain, you can grind the 350 coins yourself by foraging shells and other items, fishing, and selling unwanted furniture from your starting home. Alternatively, talking to Mina at Coffee and Coffins after Orlock asks for the tab has her gift you the coins directly, so you don\u2019t spend your own.' },
      { q: 'Where do I actually find Orlock?', a: 'Confirmed: right outside your home on the farm, sleeping on the lawn, the first time. After that, he\u2019s usually at The Broken Lamp bar in town, drinking.' },
    ],
  },
  {
    slug: 'a-bridge-too-far', chapter: 2, title: 'A Bridge Too Far', giver: 'Story (Orlock/Fiona feud)', status: 'confirmed',
    unlock: 'Complete "Orlock\u2019s Wine Scheme"',
    summary: 'Confirmed via a dedicated walkthrough (Output Lag) cross-checked against Into Indie Games and Bonus Action: Fiona, a witch in Moonlit Pines, is furious with Orlock over a crude joke he made about her at the bar, and has effectively cursed the bridge to his side of town over it. Talk to Fiona to learn this, then bring Orlock to her house for an apology cutscene. Fiona then reveals she can\u2019t lift the "curse" alone and needs three witches \u2014 Noel, Sabrina, and Luna \u2014 found around town. Recruit all three and return to the bridge to trigger the curse-lifting ritual.',
    reward: 'Reopens Ambrosia Estate; unlocks Misty Shores & Cave of Echoes (copper)',
    leadsTo: 'tension-in-the-crest-garden',
    troubleshooting: [
      { q: 'I talked to the witches but they didn\u2019t meet me at the bridge \u2014 what\u2019s wrong?', a: 'Community-reported (Output Lag): make sure you\u2019ve actually talked to all three \u2014 Noel, Sabrina, and Luna. Check your quest log for any still marked pending, then return to town and talk to whichever one you missed.' },
      { q: 'The ritual played but the bridge is still blocked \u2014 what now?', a: 'Community-reported: this is uncommon, but if the cutscene finished and the bridge is still impassable, try leaving the area and re-entering. It should be passable afterward.' },
      { q: 'Am I locked out of progress by a dialogue choice?', a: 'Confirmed: no. A Bridge Too Far has no dialogue choices that block progression \u2014 every conversation path moves the quest forward.' },
      { q: 'If Misty Shores, fishing, or mining feel locked, is that a bug?', a: 'No \u2014 confirmed: Misty Shores stays fully gated until this quest resolves. If you\u2019re blocked on fishing, mining, or anything else in that area, this quest (not a missing shop item) is almost always the real bottleneck.' },
    ],
  },
  {
    slug: 'tension-in-the-crest-garden', chapter: 3, title: 'Tension in the Crest Garden', giver: 'Story', status: 'confirmed',
    unlock: 'Complete "A Bridge Too Far", then wait until the next day',
    summary: 'Confirmed via Neoseeker\u2019s quest log, cross-checked against Output Lag: the day after the bridge opens, walking into town triggers a cutscene at the Crest Garden (a new area beside Town Hall) where Brook accuses Orlock of stealing her missing family crest, launching a mystery plot.',
    reward: 'Requires A Bridge Too Far + 1 day; leads to A Croak and a Crest',
    leadsTo: 'a-croak-and-a-crest',
  },
  {
    slug: 'a-croak-and-a-crest', chapter: 3, title: 'A Croak and a Crest', giver: 'Story', status: 'confirmed',
    unlock: 'Complete "Tension in the Crest Garden"',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription as the direct follow-up to the Crest Garden mystery.',
    reward: 'Places the Logan Crest in the Crest Garden and counts toward Crest achievements',
    leadsTo: 'the-quest-for-mana',
  },
  {
    slug: 'the-quest-for-mana', chapter: 3, title: 'The Quest for Mana', giver: 'Luna / Story', status: 'confirmed',
    unlock: 'Complete "The Magic of Crops", wait 1 day, enter Town to trigger "A Mayor\u2019s Burden", then wait 2 days and read Sabrina\u2019s letter',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription: this is the quest chain that leads to your first real magic-crafting infrastructure. Cross-referenced against whisperofthehouse.com\u2019s unlock-gate guide, which frames the whole magic/wand route as running through Sabrina, Fiona, the Mana Extractor, and Luna\u2019s Aquaflux spell.',
    leadsTo: 'building-a-mana-extractor',
    troubleshooting: [
      { q: 'My wand is still broken and I have no spells \u2014 what unlocks it?', a: 'Community-reported (whisperofthehouse.com): the broken wand and spells are gated by story progress, not a shop purchase \u2014 they come through this quest chain, involving Sabrina, Fiona, the Mana Extractor, Luna, and the Aquaflux spell. If you haven\u2019t reached this point in the story yet, no shop will sell you a fix.' },
    ],
  },
  {
    slug: 'building-a-mana-extractor', chapter: 3, title: 'Building a Mana Extractor', giver: 'Story', status: 'confirmed',
    unlock: 'Complete "The Quest for Mana", then wait 2 days',
    summary: 'Confirmed: the direct follow-up to The Quest for Mana.',
    reward: 'Mana Essence and the Mana Extractor blueprint',
    leadsTo: 'a-missing-moon',
  },
  {
    slug: 'a-missing-moon', chapter: 3, title: 'A Missing Moon', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription as a mid-story beat, following the Mana Extractor chain and leading toward the Ambrosia family crisis.',
    leadsTo: 'the-ambrosia-crisis',
  },
  {
    slug: 'the-ambrosia-crisis', chapter: 3, title: 'The Ambrosia Crisis', giver: 'Story', status: 'confirmed',
    unlock: 'Complete "Master of the Night", wait 2 days, and read the Ambrosia Mansion letter',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription: a family-crisis story beat for the vampire Ambrosia family, gated behind completing "Master of the Night" and a short wait for an invitation letter.',
    leadsTo: 'the-dinner-party',
  },
  {
    slug: 'the-dinner-party', chapter: 4, title: 'The Dinner Party', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: a town social event quest.',
    reward: 'Cat form (Hellkitten shapeshifting unlocked)',
    leadsTo: 'mend-it-with-magic',
    troubleshooting: [
      { q: 'When exactly do I get the Hellkitten/Cat form?', a: 'Confirmed via a cross-verified quest log: completing "The Dinner Party" is what rewards Cat form. It sits a few story beats after "A Bridge Too Far," following the Mana Extractor chain \u2014 if you haven\u2019t reached it yet, shapeshifting simply isn\u2019t available yet regardless of what you\u2019ve bought or built.' },
    ],
  },
  {
    slug: 'mend-it-with-magic', chapter: 4, title: 'Mend it with Magic / A Touch of Magic', giver: 'Fiona / Story', status: 'confirmed',
    unlock: 'Complete "Mend it with Magic", wait 2 days, and read Fiona\u2019s letter',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription as a magic-focused follow-up quest pair.',
    leadsTo: 'town-hall-drama',
  },
  {
    slug: 'town-hall-drama', chapter: 4, title: 'Dinner with the Parents / Town Hall Drama', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: town and family-focused story beats.',
    leadsTo: 'the-plastic-chairs',
  },
  {
    slug: 'the-plastic-chairs', chapter: 4, title: 'The Plastic Chairs', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription.',
    reward: '4 Ginger Tea',
    leadsTo: 'a-family-reunion',
  },
  {
    slug: 'a-family-reunion', chapter: 4, title: 'A Family Reunion', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as a family-focused story beat.',
    leadsTo: 'the-mermaids-wish',
  },
  {
    slug: 'the-mermaids-wish', chapter: 5, title: 'The Mermaid\u2019s Wish', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: completing this quest alongside "A Touch of Magic" is a prerequisite for "The Rehearsal Dinner."',
    reward: 'Aqua form (Mermaid shapeshifting unlocked)',
    leadsTo: 'the-rehearsal-dinner',
  },
  {
    slug: 'the-rehearsal-dinner', chapter: 5, title: 'The Rehearsal Dinner', giver: 'Story', status: 'confirmed',
    unlock: 'Complete "The Mermaid\u2019s Wish" and "A Touch of Magic", wait 1 day, and read the dinner invitation',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription \u2014 the start of the game\u2019s wedding-arc story beats.',
    leadsTo: 'kims-invite',
  },
  {
    slug: 'kims-invite', chapter: 5, title: 'Kim\u2019s Invite', giver: 'Kim / Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as part of the wedding arc.',
    leadsTo: 'brides-attendant-duty',
  },
  {
    slug: 'brides-attendant-duty', chapter: 5, title: 'Bride\u2019s Attendant Duty', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as part of the wedding arc.',
    leadsTo: 'unfinished-business',
  },
  {
    slug: 'unfinished-business', chapter: 5, title: 'Unfinished Business', giver: 'Story', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as the current final-documented beat of the wedding arc. Later story content may extend past this \u2014 we\u2019ll update as it\u2019s confirmed.',
  },
];

export const storyQuestBySlug = new Map(storyQuests.map((q) => [q.slug, q]));
