// src/data/quests-side.ts
// Side quests and unlock-gated systems, restructured around the actual search intent players
// have when they hit these: "why don't I have X yet." Each entry leads with troubleshooting
// (stuck-point Q&A) rather than a narrative summary, per the site's core quest-hub design goal.
// Only real, sourced quest names/mechanics are listed; anything not yet independently confirmed
// is labeled 'reported' rather than presented as fact.
export type Troubleshoot = { q: string; a: string };
export type SideQuest = {
  slug: string;
  title: string;
  npc?: string; // character slug, for cross-linking to /characters/{slug}
  status: 'confirmed' | 'reported';
  summary: string;
  reward?: string;
  troubleshooting: Troubleshoot[]; // the core content — what to check when stuck
  related?: { label: string; href: string }[];
};

export const sideQuests: SideQuest[] = [
  {
    slug: 'noels-fishing-contest', title: 'Noel\u2019s Fishing Contest (First Fishing Rod)', npc: 'noel', status: 'confirmed',
    summary: 'Confirmed: within your first few in-game nights, Noel challenges you to a fishing contest by the river \u2014 catch 3 different fish types before he does. It\u2019s untimed, so it\u2019s an easy win. Community-reported: some guides frame the contest around a 250-gold wager, so it may be worth having some coins on hand before you start, though it isn\u2019t described as a hard requirement.',
    reward: 'Your first fishing rod, plus a coin bonus',
    troubleshooting: [
      { q: 'I don\u2019t have a fishing rod yet \u2014 where do I get one?', a: 'Confirmed (cross-referenced against whisperofthehouse.com\u2019s unlock-gate guide): the fishing rod is not sold in any shop \u2014 it\u2019s a quest reward from Noel\u2019s fishing contest. If you haven\u2019t met Noel by the river yet, that\u2019s the actual blocker, not a missing purchase.' },
      { q: 'I can\u2019t find Noel to start the contest \u2014 what do I do?', a: 'Community-reported: Noel is typically found by the river in the early game. If several in-game nights have passed with no sign of him, check that you\u2019ve completed the earliest setup quests (Register at Town Hall, Meet the Townsfolk) first, since some early NPCs only appear once those are done.' },
    ],
    related: [{ label: 'Noel', href: '/characters/noel' }, { label: 'Fish collection', href: '/collections/fish' }],
  },
  {
    slug: 'fix-the-roof', title: 'Fix the Roof (House Upgrades Locked)', npc: 'ridge', status: 'confirmed',
    summary: 'Confirmed: a quest from Ridge that unlocks house upgrades, purchased afterward at the Howling Hammer. It also unlocks the Refiner blueprint.',
    reward: 'House upgrade access, Refiner blueprint',
    troubleshooting: [
      { q: 'The Howling Hammer won\u2019t sell me house upgrades \u2014 why?', a: 'Confirmed: house upgrades are gated behind completing "Fix the Roof" with Ridge first. If the upgrade options aren\u2019t showing at the Howling Hammer, this quest is the missing step, not a shop bug.' },
      { q: 'I don\u2019t have a Refiner and can\u2019t make Fodder or Planks \u2014 what\u2019s blocking it?', a: 'Confirmed: the Refiner blueprint is a reward tied to this same roof-repair quest chain, not something bought separately. Complete "Fix the Roof" first.' },
    ],
    related: [{ label: 'Ridge', href: '/characters/ridge' }, { label: 'The House', href: '/farm/house' }],
  },
  {
    slug: 'the-magic-of-crops', title: 'The Magic of Crops (Aquaflux / Broken Wand)', npc: 'luna', status: 'confirmed',
    summary: 'Confirmed: a letter-triggered quest from Luna that unlocks the Aquaflux spell (magical, automatic watering) \u2014 a prerequisite in the chain leading to "The Quest for Mana" and, eventually, wand repair and spellcasting in general.',
    reward: 'Aquaflux spell unlocked',
    troubleshooting: [
      { q: 'My wand is still broken \u2014 how do I fix it?', a: 'Community-reported (whisperofthehouse.com): wand repair is not a shop purchase \u2014 it comes through this story chain (Luna \u2192 Sabrina \u2192 Fiona \u2192 Mana Extractor \u2192 Aquaflux). If you haven\u2019t triggered "The Magic of Crops" from Luna yet, that\u2019s the actual starting point.' },
      { q: 'I don\u2019t have Aquaflux and I\u2019m stuck hand-watering \u2014 what\u2019s the trigger?', a: 'Confirmed: this quest is letter-triggered from Luna. If it hasn\u2019t started, make sure you\u2019ve progressed the earlier story beats (through "A Bridge Too Far") first, since later letters are typically gated behind earlier quests.' },
    ],
    related: [{ label: 'Luna', href: '/characters/luna' }, { label: 'Magic & potions', href: '/magic' }],
  },
  {
    slug: 'the-net-and-death', title: 'Unlocking the Bug Net (Death & Soul Blobs)', npc: 'death', status: 'confirmed',
    summary: 'Confirmed (cross-referenced against whisperofthehouse.com): the bug net comes through Death, gated behind progress on Orlock\u2019s Wine Scheme, A Bridge Too Far, and Misty Shores access \u2014 not a shop item. After your second meeting with Death in town, he introduces the 100 Soul Blobs and asks you to round them up with the net.',
    reward: 'The Net (bug/Soul Blob catching); Antique Clock upon collecting all 100 Soul Blobs (extends the night from 15 to 25 minutes)',
    troubleshooting: [
      { q: 'I can\u2019t catch bugs or Soul Blobs \u2014 where\u2019s the net?', a: 'Confirmed: the net isn\u2019t sold anywhere \u2014 it\u2019s unlocked through Death, gated behind earlier story progress (Orlock\u2019s Wine Scheme, A Bridge Too Far, and Misty Shores access). If you haven\u2019t met Death twice yet, that\u2019s the blocker.' },
      { q: 'Where do I find Death in Moonlight Peaks?', a: 'Confirmed: in town, tied to the Ambrosia Graveyard area that opens up after "A Bridge Too Far" unlocks Misty Shores.' },
      { q: 'Why do I keep missing bugs and Soul Blobs with the net?', a: 'Confirmed: each swing of the net consumes stamina, whether or not it connects, so missed swings cost you energy. Community-reported: bugs and Soul Blobs tend to flee if you run toward them, so walking slowly up to one before swinging lands more catches and wastes less stamina than sprinting in.' },
    ],
    related: [{ label: 'Death', href: '/characters/death' }, { label: 'Soul Blobs collection', href: '/collections/soul-blobs' }],
  },
  {
    slug: 'vampster-collection-quest', title: 'Vampster Round-Up', npc: 'alina', status: 'confirmed',
    summary: 'Confirmed: Alina, found inside the Cave of Echoes, explains that the 100 Vampsters scattered around town are lost and asks you to carry them home one at a time to a cave in Misty Shores. One, Larry, is confirmed to live in Alina\u2019s own home and chooses to stay rather than be collected.',
    troubleshooting: [
      { q: 'I keep losing track of a Vampster I was carrying \u2014 why?', a: 'Community-reported: talking to any resident, or triggering any cutscene, makes you drop whichever Vampster you\u2019re currently carrying. It stays wherever you dropped it, so clear dialogue-heavy areas before setting off with one.' },
      { q: 'I can\u2019t start this quest \u2014 where\u2019s Alina?', a: 'Confirmed: inside the Cave of Echoes, which only opens after "A Bridge Too Far" unlocks Misty Shores. If you haven\u2019t reached the Cave of Echoes yet, that\u2019s the prerequisite.' },
    ],
    related: [{ label: 'Alina', href: '/characters/alina' }, { label: 'Vampsters collection', href: '/collections/vampsters' }],
  },
  {
    slug: 'albertus-job-board', title: "Albertus' Jobs Not Showing Up", npc: 'albertus', status: 'confirmed',
    summary: 'Confirmed: an ongoing, repeatable side-system rather than a one-time quest \u2014 short requests posted on Albertus\u2019 board at Town Hall, each rewarding coins, sometimes an item, and relationship points with whoever posted it.',
    troubleshooting: [
      { q: 'The job board at Town Hall looks empty \u2014 is that a bug?', a: 'Community-reported: the board is gated behind reaching Town Hall via "Register at Town Hall" first. If you\u2019ve completed that and still see nothing, jobs may simply refresh on a schedule rather than always having something posted \u2014 check back after sleeping.' },
    ],
    related: [{ label: 'Albertus', href: '/characters/albertus' }, { label: "Albertus' Jobs", href: '/collections/albertus-jobs' }],
  },
  {
    slug: 'npc-stuck-cant-interact', title: 'An NPC Is Stuck / Frozen and Won\u2019t Talk', status: 'reported',
    summary: 'Confirmed via the game\u2019s official Known Issues tracking and Steam Community bug reports: some players find a specific NPC (notably Orlock) stuck in place and unresponsive to interaction. This is a known, unresolved bug rather than a quest-gating issue.',
    troubleshooting: [
      { q: 'An NPC won\u2019t respond when I try to talk to them \u2014 is this a bug or am I missing something?', a: 'Confirmed via official Known Issues tracking: this has been reported, notably with Orlock getting stuck in place. Reloading the area and sleeping to the next day have not fixed it for affected players so far, and there\u2019s no confirmed fix yet. This is a genuine bug, not a quest requirement you\u2019re missing.' },
      { q: 'Is there a workaround while I wait for a fix?', a: 'Community-reported on the official Steam bug thread: one player found that repeatedly interacting from the NPC\u2019s southeast side eventually triggered the prompt, after reloading the area and sleeping to the next day both failed. It\u2019s not a guaranteed fix, but it\u2019s the one confirmed workaround reported to actually work so far.' },
      { q: 'What should I do if this happens to me?', a: 'Confirmed: report it to support@xseedgames.com with your platform and a description of what happened, since there\u2019s no guaranteed player-side fix yet.' },
    ],
    related: [{ label: 'Known issues', href: '/known-issues' }, { label: 'Orlock', href: '/characters/orlock' }],
  },
  {
    slug: 'form-wheel-softlock', title: 'Stuck on the Form Wheel / Can\u2019t Move', status: 'reported',
    summary: 'Confirmed via an official developer bug-tracking thread on Steam: some keyboard/mouse players have gotten stuck holding the shapeshifting form wheel open (notably when exiting the Ambrosia Manor), with no way to close it or regain control.',
    troubleshooting: [
      { q: 'I\u2019m stuck holding the form wheel open and can\u2019t move \u2014 help?', a: 'Confirmed via an official XSEED Games developer thread: this has affected keyboard/mouse players, often when exiting the Ambrosia Manor. One reported cause was having no key actually bound to the form wheel action \u2014 check your keybinds under Settings for an "open form wheel" binding (default is reported as R on some setups) and assign one if it\u2019s empty.' },
      { q: 'I\u2019m locked in this state and can\u2019t reach the settings menu \u2014 what now?', a: 'Confirmed via the same developer thread: affected players have had to force-close the game (Alt+F4 on PC) as a last resort. Since the game only saves when you sleep, you may lose progress since your last save \u2014 report the issue to XSEED Games via the official bug thread or support@xseedgames.com so they can prioritize a fix.' },
    ],
    related: [{ label: 'Shapeshifting', href: '/shapeshifting' }, { label: 'Known issues', href: '/known-issues' }],
  },
  {
    slug: 'elviras-treasure-hunt', title: 'Elvira\u2019s Treasure Hunt (Raiders of the Lost Art)', npc: 'elvira', status: 'confirmed',
    summary: 'Confirmed across multiple independent launch-week guides: Elvira sends you on a 5-clue treasure hunt across town, unlocked after reaching her four-heart event and reading a follow-up letter in your mailbox. The confirmed route: Samael\u2019s bar (The Broken Lamp) \u2192 the Ambrosia graveyard \u2192 a bell at the Cave of Echoes mine entrance \u2192 inside the Cave of Echoes \u2192 the Khazan Temple. Completing it ties to the "Raiders of the Lost Art" achievement and rewards a Treasure Hunt Painting you can hang in your house.',
    reward: '"Raiders of the Lost Art" achievement, plus a Treasure Hunt Painting for your house',
    troubleshooting: [
      { q: 'I\u2019m stuck on one of Elvira\u2019s treasure hunt clues \u2014 what\u2019s the route?', a: 'Confirmed across multiple independent guides: the order is Samael\u2019s bar (The Broken Lamp), then the Ambrosia graveyard, then a bell at the Cave of Echoes mine entrance, then inside the Cave of Echoes itself, and finally the Khazan Temple. If you\u2019re stuck at one clue, double-check you\u2019ve fully explored the previous location first \u2014 clues are tied to specific spots within each area, not just entering the general vicinity.' },
      { q: 'Where do I start this quest?', a: 'Confirmed: it\u2019s triggered by reaching Elvira\u2019s four-heart event, after which a letter appears in your mailbox the next in-game day. If her clue chain doesn\u2019t seem to progress, the Khazan Temple leg specifically requires areas that only open up later in the story, so incomplete map access can also block the final clue.' },
    ],
    related: [{ label: 'Elvira', href: '/characters/elvira' }, { label: 'Achievements', href: '/achievements' }],
  },
  {
    slug: 'ui-softlock-after-shop', title: 'UI Frozen / Softlocked After Leaving a Shop', status: 'reported',
    summary: 'Confirmed via official Steam Community bug reports: some players have had all UI elements disable after exiting a shop or a quest cutscene, unable to open any menu or enter other locations \u2014 typically reported after roughly 2 hours of continuous play, sometimes preceded by stuttering.',
    troubleshooting: [
      { q: 'I left a shop or cutscene and now nothing responds \u2014 is this a known bug?', a: 'Confirmed via multiple official Steam Community reports: yes, this is a known softlock, most often reported after about 2 hours of continuous play, sometimes with stuttering right before it happens. It is not something you\u2019re doing wrong.' },
      { q: 'Is there a fix or workaround?', a: 'No confirmed player-side fix yet. Affected players have had to force-close the game. Since Moonlight Peaks only saves when you sleep, you may lose progress since your last save \u2014 report the issue to support@xseedgames.com with your platform details so the developers can prioritize a patch.' },
      { q: 'Can I prevent this from happening?', a: 'Not confirmed, but as a precaution: sleep to save more often than you might in other farming sims, since there\u2019s no manual save, and consider taking a short break every couple of hours if you notice stuttering start.' },
    ],
    related: [{ label: 'Known issues', href: '/known-issues' }, { label: 'Form wheel softlock', href: '/quests/side/form-wheel-softlock' }],
  },
  {
    slug: 'lost-save-data', title: 'Lost Save Data / Progress Disappeared', status: 'reported',
    summary: 'Confirmed via official Steam Community reports: players have lost multiple nights of progress after a crash or unexpected shutdown (e.g. a power outage), since Moonlight Peaks only saves when you sleep, with no manual save option.',
    troubleshooting: [
      { q: 'My save disappeared after a crash or power outage \u2014 can I get it back?', a: 'Confirmed via official Steam Community reports: this has happened to other players too, and there\u2019s no confirmed recovery method \u2014 the game only writes a save when you sleep in your coffin, so anything since your last sleep is lost if the game closes unexpectedly.' },
      { q: 'Where are my save files, in case I want to back them up myself?', a: 'Confirmed via an official XSEED Games developer post \u2014 Windows: %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/. Mac: ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/. Manually copying this folder after a good play session is a reasonable precaution until manual/mini-saves are added, if they are.' },
      { q: 'How do I report this to the developers?', a: 'Confirmed: email support@xseedgames.com. If the loss followed a crash, also check %LOCALAPPDATA%\\CrashDumps for a "Moonlight Peaks.exe" crash dump and mention it \u2014 the developers have asked for these details in their official bug-tracking thread.' },
      { q: 'Is there a manual save option?', a: 'Not currently \u2014 confirmed absent at launch. Sleeping in your coffin is the only way to save, and it\u2019s a frequently requested feature in the game\u2019s official Steam Community bug thread.' },
    ],
    related: [{ label: 'Known issues', href: '/known-issues' }, { label: 'How to save FAQ', href: '/faq/moonlight-peaks-how-to-save' }],
  },
  {
    slug: 'fallen-tree-arborascend', title: 'Can\u2019t Find the Fallen Tree (The Mysterious Bay)', status: 'confirmed',
    summary: 'Confirmed via PC Gamer: during "The Mysterious Bay" quest, you need to clear a fallen tree so your newly-discovered mermaid neighbors can rejoin the town. The tree is not in Howling Marshes, where most players assume \u2014 it\u2019s blocking a waterfall in a different area. The fix is a spell, not a tool: buy the Arborascend spell from Sabrina at Webb of Wonders, then cast it (costs 3 Mana) at the fallen tree to trigger a cutscene that removes it.',
    reward: 'Clears the path for the Hosu mermaid family to rejoin town; leads into Samael\u2019s romance arc',
    troubleshooting: [
      { q: 'Where exactly is the fallen tree blocking the waterfall?', a: 'Confirmed via PC Gamer: it\u2019s not in Howling Marshes, despite that being the obvious guess. It blocks a waterfall in a different area tied to the Hosu mermaid family\u2019s route back to town \u2014 if you\u2019ve checked Howling Marshes and found nothing, that confirms you\u2019re looking in the wrong place, not that you\u2019re missing a hidden spot there.' },
      { q: 'I don\u2019t have a tool that can clear the tree \u2014 what do I need?', a: 'Confirmed: it\u2019s not a tool at all \u2014 you need the Arborascend spell, bought from Sabrina at Webb of Wonders. Casting it costs 3 Mana, so make sure you have enough saved up (eating Mana-restoring food helps) before heading out, since you can\u2019t chop or push the tree away manually.' },
      { q: 'I bought Arborascend but nothing happens at the tree \u2014 why?', a: 'Community-reported: casting Arborascend directly at the fallen tree triggers a cutscene that clears it. If nothing happens, double check you actually have enough Mana for the cast (3 Mana) rather than assuming the spell failed.' },
    ],
    related: [{ label: 'Magic & potions', href: '/magic' }, { label: 'Samael', href: '/characters/samael' }],
  },
];

export const sideQuestBySlug = new Map(sideQuests.map((q) => [q.slug, q]));
