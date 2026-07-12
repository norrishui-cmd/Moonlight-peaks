// src/data/quests-story.ts
// Main story quest chain, cross-verified across multiple independent launch-week sources
// (Neoseeker's quest log transcription, Bonus Action, Output Lag's dedicated "A Bridge Too Far"
// walkthrough, Into Indie Games' walkthrough series). Chapter numbers are our own organizing
// device (the game itself doesn't label numbered "chapters" in what's been sourced so far) —
// grouped by natural story arcs so players can jump to roughly where they are.
export type StoryQuest = {
  slug: string;
  chapter: number;
  title: string;
  status: 'confirmed' | 'reported';
  unlock?: string;
  summary: string;
  reward?: string;
  leadsTo?: string; // slug of the next quest/arc, for prev/next navigation
};

export const storyChapters = [
  { number: 1, title: 'Arriving in Moonlight Peaks', dek: 'Registering as a resident, meeting Orlock and Viktor, and your first crop.' },
  { number: 2, title: 'A Bridge Too Far', dek: 'Fiona\u2019s curse on Orlock\u2019s bridge, and the ritual that lifts it.' },
  { number: 3, title: 'The Crest Garden & Mana', dek: 'A mystery at the Crest Garden, and unlocking your first real magic.' },
  { number: 4, title: 'Town Life & Family Drama', dek: 'Town Hall politics, family tension, and settling into Moonlight Peaks.' },
  { number: 5, title: 'The Wedding Arc', dek: 'A town wedding \u2014 invitations, rehearsals, and unfinished business.' },
];

export const storyQuests: StoryQuest[] = [
  {
    slug: 'register-at-town-hall', chapter: 1, title: 'Register at Town Hall', status: 'confirmed',
    summary: 'Confirmed via multiple sources: after leaving home and meeting Orlock (see below), you head into town, where Mayor Brook registers you as a new resident at Town Hall and gives you Chester, a living chest that automatically sells anything left inside overnight.',
    reward: 'Chester (auto-sell storage)',
    leadsTo: 'meet-the-townsfolk',
  },
  {
    slug: 'meet-the-townsfolk', chapter: 1, title: 'Meet the Townsfolk / A New Beginning', status: 'confirmed',
    unlock: 'Complete Register at Town Hall',
    summary: 'Confirmed: early setup objectives that have you meet Orlock (a hungover vampire found sleeping on your lawn \u2014 poke him rather than pour water on him for the better dialogue option), then Viktor, Orlock\u2019s uncle who lives in the crypt/dome building to the left of your farm and teaches farming basics.',
    reward: 'Full starting toolset: Shovel, Watering Can, Axe, Pickaxe, and a broken Wand',
    leadsTo: 'a-roof-over-your-head',
  },
  {
    slug: 'a-roof-over-your-head', chapter: 1, title: 'A Roof Over Your Head / The First Step to Comfort', status: 'confirmed',
    summary: 'Confirmed as part of the new-game setup route: basic home and comfort objectives, run alongside your first Blood Grape planting (Orlock\u2019s starter crop, given after waking him). This is also when you\u2019ll want to build toward fixing your roof, which unlocks the Refiner blueprint.',
    reward: 'Refiner blueprint (on roof repair)',
    leadsTo: 'darkness-over-moonlight-peaks',
  },
  {
    slug: 'darkness-over-moonlight-peaks', chapter: 1, title: 'Darkness over Moonlight Peaks', status: 'reported',
    summary: 'Reported via Neoseeker\u2019s quest log transcription as an early main-story beat. Specific objectives are not yet independently detailed here.',
    leadsTo: 'a-bridge-too-far',
  },
  {
    slug: 'a-bridge-too-far', chapter: 2, title: 'A Bridge Too Far', status: 'confirmed',
    summary: 'Confirmed via a dedicated walkthrough (Output Lag) cross-checked against Into Indie Games and Bonus Action: Fiona, a witch in Moonlit Pines, cursed the bridge to Orlock\u2019s side of town after he made a crude joke about her at the bar. Talk to Fiona to learn this, then find Orlock at The Broken Lamp bar (he\u2019s usually drinking there) and offer to pay off his tab \u2014 350 coins \u2014 to get him to apologize. Mina, at Coffee and Coffins, gives you the 350 coins as a gift so you don\u2019t have to spend your own. Pay Samael (the bartender) the tab, then bring Orlock to Fiona\u2019s house for the apology cutscene. Fiona then reveals she can\u2019t lift the curse alone and needs three witches \u2014 Noel, Sabrina, and Luna \u2014 found around town. Recruit all three and return to the bridge to trigger the curse-lifting ritual.',
    reward: 'Bridge cleared \u2014 unlocks the graveyard and Misty Shores, plus an achievement',
    leadsTo: 'tension-in-the-crest-garden',
  },
  {
    slug: 'tension-in-the-crest-garden', chapter: 3, title: 'Tension in the Crest Garden', status: 'confirmed',
    unlock: 'Complete "A Bridge Too Far", then wait until the next day',
    summary: 'Confirmed via Neoseeker\u2019s quest log: this is the direct follow-up plot beat after the bridge curse lifts, centered on a mystery at the Crest Garden.',
    reward: 'No direct item reward \u2014 unlocks the follow-up quest "A Croak and a Crest"',
    leadsTo: 'the-quest-for-mana',
  },
  {
    slug: 'the-quest-for-mana', chapter: 3, title: 'The Quest for Mana', status: 'confirmed',
    unlock: 'Complete "The Magic of Crops", wait 1 day, enter Town to trigger "A Mayor\u2019s Burden", then wait 2 days and read Sabrina\u2019s letter',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription: this is the quest chain that leads to your first real magic-crafting infrastructure.',
    leadsTo: 'building-a-mana-extractor',
  },
  {
    slug: 'building-a-mana-extractor', chapter: 3, title: 'Building a Mana Extractor', status: 'confirmed',
    unlock: 'Complete "The Quest for Mana", then wait 2 days',
    summary: 'Confirmed: the direct follow-up to The Quest for Mana.',
    reward: 'Mana Essence and the Mana Extractor blueprint',
    leadsTo: 'the-dinner-party',
  },
  {
    slug: 'the-dinner-party', chapter: 4, title: 'The Dinner Party', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: a town social event quest.',
    reward: 'Cat form (Hellkitten shapeshifting unlocked)',
    leadsTo: 'mend-it-with-magic',
  },
  {
    slug: 'mend-it-with-magic', chapter: 4, title: 'Mend it with Magic / A Touch of Magic', status: 'confirmed',
    unlock: 'Complete "Mend it with Magic", wait 2 days, and read Fiona\u2019s letter',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription as a magic-focused follow-up quest pair.',
    leadsTo: 'town-hall-drama',
  },
  {
    slug: 'town-hall-drama', chapter: 4, title: 'Dinner with the Parents / Town Hall Drama', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: town and family-focused story beats.',
    leadsTo: 'the-plastic-chairs',
  },
  {
    slug: 'the-plastic-chairs', chapter: 4, title: 'The Plastic Chairs', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription.',
    reward: '4 Ginger Tea',
    leadsTo: 'a-family-reunion',
  },
  {
    slug: 'a-family-reunion', chapter: 4, title: 'A Family Reunion', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as a family-focused story beat.',
    leadsTo: 'the-mermaids-wish',
  },
  {
    slug: 'the-mermaids-wish', chapter: 5, title: 'The Mermaid\u2019s Wish', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log: completing this quest alongside "A Touch of Magic" is a prerequisite for "The Rehearsal Dinner." Community-reported elsewhere as connected to unlocking a Mermaid/Aqua shapeshifting form, though we haven\u2019t independently confirmed that reward link ourselves.',
    leadsTo: 'the-rehearsal-dinner',
  },
  {
    slug: 'the-rehearsal-dinner', chapter: 5, title: 'The Rehearsal Dinner', status: 'confirmed',
    unlock: 'Complete "The Mermaid\u2019s Wish" and "A Touch of Magic", wait 1 day, and read the dinner invitation',
    summary: 'Confirmed via Neoseeker\u2019s quest log transcription \u2014 the start of the game\u2019s wedding-arc story beats.',
    leadsTo: 'kims-invite',
  },
  {
    slug: 'kims-invite', chapter: 5, title: 'Kim\u2019s Invite', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as part of the wedding arc.',
    leadsTo: 'brides-attendant-duty',
  },
  {
    slug: 'brides-attendant-duty', chapter: 5, title: 'Bride\u2019s Attendant Duty', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as part of the wedding arc.',
    leadsTo: 'unfinished-business',
  },
  {
    slug: 'unfinished-business', chapter: 5, title: 'Unfinished Business', status: 'confirmed',
    summary: 'Confirmed via Neoseeker\u2019s quest log as the current final-documented beat of the wedding arc. Later story content may extend past this \u2014 we\u2019ll update as it\u2019s confirmed.',
  },
];

export const storyQuestBySlug = new Map(storyQuests.map((q) => [q.slug, q]));
