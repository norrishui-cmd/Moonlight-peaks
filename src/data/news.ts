// Manually-maintained news/updates. Add newest at the top.
// date: 'YYYY-MM-DD' (shown formatted). Keep text in your own words; do not paste articles verbatim.
export type NewsCategory = 'general' | 'guides' | 'romance' | 'world' | 'characters';

export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  body: string;
  details: string[];
  category: NewsCategory;
  sourceLabel?: string;
  sourceUrl?: string;
};

export const news: NewsItem[] = [
  {
    slug: 'moonlight-peaks-runs-a-four-month-calendar',
    date: '2026-07-14',
    title: 'Confirmed: the year is four months, one per season',
    body: 'Cross-verified across two independent launch-week guides: Moonlight Peaks runs a four-month calendar, with Spring, Summer, Autumn, and Winter each lasting exactly one month. You start the game in Spring.',
    details: [
      'This resolves a question we had flagged as unconfirmed for a while \u2014 we now have two separate sources agreeing on the same four-month structure.',
      'A day/night settings option, unlocked early, also lets you manually adjust a night\u2019s length to 10 or 25 minutes, separate from the Antique Clock unlock from Soul Blobs.',
    ],
    category: 'guides',
  },
  {
    slug: 'ludo-sells-stamina-saving-wand-tools',
    date: '2026-07-14',
    title: 'Ludo runs a shop selling wand-type tools to save stamina',
    body: 'Confirmed: beyond the story-unlocked spells, Ludo\u2019s shop separately sells wand tools \u2014 a pickaxe wand, the Aquaflux watering wand, and a tree-moving wand \u2014 aimed at cutting stamina costs on repetitive chores.',
    details: [
      'A single Aquaflux cast is also confirmed to cover up to 16 crop tiles, useful for planning a magical-crop layout efficiently.',
      'Community-reported: many early-game dishes only restore 2-3 stamina; dishes built around Blood Grapes or Blood Tomatoes restore noticeably more.',
    ],
    category: 'guides',
  },
  {
    slug: 'launch-week-task-cluster-page-added',
    date: '2026-07-13',
    title: 'New: a single page covering the whole first week',
    body: 'We\u2019ve added a Launch Week Task Cluster page that pulls together the first-week story order, the specific quests players search for by name, known blocking bugs, and where the fish/gift reference tools actually live.',
    details: [
      'Built around real search intent rather than duplicating existing guides \u2014 it links out to dedicated pages instead of repeating their content.',
      'Covers the fallen-tree/Arborascend quest, the Cave of Echoes unlock, and Samael\u2019s romance chain, since those come up constantly in search.',
    ],
    category: 'guides',
  },
  {
    slug: 'twelve-spells-cross-verified',
    date: '2026-07-13',
    title: 'The 12-spell total is now cross-verified, not just one source',
    body: 'We previously flagged the "12 total spells" figure as coming from a single source. A second independent guide now confirms the same number, so we\u2019ve dropped the hedge.',
    details: [
      'Confirmed spell names now include Aquaflux I, crop maturation, rock clearing, rain, Arborascend (for lifting fallen trees), and a Witches\u2019 Circle teleport.',
      'The repaired wand is confirmed to be called the Fixed Wand, with a later Witch\u2019s Wand upgrade reported but not fully detailed yet.',
    ],
    category: 'guides',
  },
  {
    slug: 'official-steam-bug-thread-workarounds',
    date: '2026-07-12',
    title: 'Official Steam bug thread yields two real workarounds',
    body: 'XSEED\u2019s official Steam bug-tracking thread has produced two genuinely useful player-side details: a workaround for stuck NPCs, and a performance fix for laptop/multi-GPU setups.',
    details: [
      'For a stuck NPC (notably Orlock), one player found that repeatedly interacting from the NPC\u2019s southeast side eventually triggered the prompt.',
      'For stuttering or crashes: check your system\u2019s Graphics settings and make sure Moonlight Peaks is set to your dedicated/high-performance GPU, not an integrated one.',
    ],
    category: 'guides',
  },
  {
    slug: 'samael-romance-chain-fully-mapped',
    date: '2026-07-14',
    title: "Samael's full precursor-quest chain is now mapped out",
    body: "Cross-verified via PC Gamer's launch-week coverage: Samael's romance is gated behind reaching Luna Bay, with two precursor quests involving a fallen tree, a bridge repair with Ludo, and a wedding that falls through at the altar.",
    details: [
      'The fallen tree is cleared with the Arborascend spell (bought from Sabrina, 3 Mana), not a tool \u2014 and it isn\u2019t in Howling Marshes, despite that being the obvious guess.',
      'After the wedding falls through, Samael is undatable for a week; Orlock then reopens the route by asking for help.',
    ],
    category: 'romance',
  },
  {
    slug: 'wedding-date-must-be-two-days-out',
    date: '2026-07-13',
    title: 'Wedding timing confirmed: at least 2 days after proposing',
    body: 'More precise than our earlier "within a week" note: the wedding date must be set at least 2 days after you propose, with no reported upper limit. Setting it unlocks new wedding attire at Third Eye Threads.',
    details: [
      'Your cat reminds you to change into wedding attire on the day itself, regardless of what you\u2019re currently wearing.',
      'Ridge is also confirmed (alongside Orlock) as an example of an older character whose kids make you a step-parent rather than a biological parent.',
    ],
    category: 'romance',
  },
  {
    slug: 'lgbtq-friendly-confirmed',
    date: '2026-07-13',
    title: 'Confirmed: fully gender-neutral dating, praised by reviewers',
    body: 'The character creator has no gendered restrictions, and every romanceable resident can be dated regardless of the player character\u2019s identity or appearance. Multiple reviewers have specifically praised the queer romance writing.',
    details: [
      'This applies across all 23 confirmed romance options, not a subset.',
      'Marriage remains monogamous once you propose, even if you were casually dating more than one person earlier.',
    ],
    category: 'romance',
  },
  {
    slug: 'saga-harder-during-full-moon',
    date: '2026-07-12',
    title: 'Saga is noticeably more on edge during full moons',
    body: 'A small but real personality detail: Saga, already established as prickly-but-devoted, is community-reported to be harder to deal with specifically during full moons.',
    details: [
      'This ties into her established characterization as someone who keeps the town running (fixing potholes, chasing missing pumpkins) with little time for romance until it sneaks up on her.',
    ],
    category: 'romance',
  },
  {
    slug: 'twenty-three-romance-options-final-tally',
    date: '2026-07-11',
    title: 'The romance roster holds steady at 23, cross-checked again',
    body: 'Another round of launch-week coverage re-confirms the same 23 romance options across the seven families, with no additions or removals since our last tally.',
    details: [
      'Family breakdown remains: Ambrosia (vampires), Logan (werewolves), Webb (witches), Hosu (mermaids), Khazan (seers), Henderson (humans), plus Death and Llemi as unaffiliated options.',
    ],
    category: 'romance',
  },
  {
    slug: 'greenhouse-tied-to-perpetual-bloom-achievement',
    date: '2026-07-14',
    title: 'The Greenhouse finally has a confirmed detail: an achievement',
    body: 'After being one of our thinnest pages, the Greenhouse now has its first solid confirmed fact: building one is tied to the "Perpetual Bloom" Steam achievement.',
    details: [
      'Community-reported: having a Greenhouse also helps toward several other farming-related goals, worth prioritizing rather than leaving for late-game.',
      'Build cost, unlock requirements, and exact space added are still unconfirmed \u2014 we\u2019re not guessing at those.',
    ],
    category: 'world',
  },
  {
    slug: 'achievement-list-grows-to-37',
    date: '2026-07-13',
    title: 'Confirmed achievement list nearly doubles to 37 (of ~59 total)',
    body: 'Cross-verified via Exophase\u2019s Steam achievement listing: we\u2019ve gone from 20 to 37 confirmed named achievements, including several tied to shapeshifting forms, romance milestones, and farming goals.',
    details: [
      'New romance-tagged achievements include Social Butterfly (4 hearts with everyone), Tied the Knot (max a romance and propose), and Buddies for Afterlife (friendship with Death).',
      'Shapeshifting achievements: Purrgatory (Hellkitten), Wings of the Night (Bat), and Call of the Current (Mermaid/Aqua, unlocked later).',
    ],
    category: 'world',
  },
  {
    slug: 'fish-finder-tool-launched',
    date: '2026-07-13',
    title: 'New tool: Fish Finder lets you filter all 22 species',
    body: 'We\u2019ve added an interactive Fish Finder tool that filters the full confirmed fish roster by location or rarity, linking through to each species\u2019 detail page.',
    details: [
      'Built from the same data source as the Collections: Fish pages, so it stays in sync automatically as new species get confirmed.',
      'Part of a broader shift toward interactive reference tools over duplicating text pages.',
    ],
    category: 'world',
  },
  {
    slug: 'ui-softlock-and-save-loss-documented',
    date: '2026-07-12',
    title: 'Two real bugs now documented: UI softlock and save data loss',
    body: 'Based on official Steam Community reports: a UI softlock after leaving shops (usually after ~2 hours of play) and cases of lost save data after a crash are both now documented with what to do.',
    details: [
      'Save files are confirmed at: Windows %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/, Mac ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/.',
      'Neither has a confirmed fix yet \u2014 both should be reported to support@xseedgames.com to help prioritize a patch.',
    ],
    category: 'world',
  },
  {
    slug: 'moonlight-ball-and-loveage-festival-detailed',
    date: '2026-07-11',
    title: 'Loveage Festival mechanics confirmed in detail',
    body: 'The official wiki confirms Loveage runs Spring 20-21, hosted by Llemi, with stalls from Elvira and Mina, a flower-arranging stall from Luna, and a secret-admirer gift exchange (pick up to 3 NPCs Saturday, exchange happens Sunday).',
    details: [
      'The Moonlight Ball (Summer 20) is confirmed by name and date via the official wiki, though its specific activities aren\u2019t detailed yet.',
      'Other festivals (Master Soup contest, a fashion show, Evernight, Pumpkin-Head\u2019s Halloween season) remain community-reported until independently confirmed.',
    ],
    category: 'world',
  },
  {
    slug: 'grim-hellkitten-name-vs-shapeshifting-clarified',
    date: '2026-07-14',
    title: 'Clarified: "Grim" is your pet\u2019s likely name, not the shapeshifting form',
    body: 'A recurring point of confusion: "Grim" refers to your three-eyed Hellkitten companion pet (present from the start, nameable), which is separate from later unlocking Hellkitten shapeshifting for yourself.',
    details: [
      'The shapeshifting Hellkitten form is tied to the "Purrgatory" achievement and unlocks through story progress, well after you already have the Grim companion.',
    ],
    category: 'characters',
  },
  {
    slug: 'nokturna-card-game-hub-added',
    date: '2026-07-13',
    title: 'New Nokturna page covers rules, deck archetypes, and open questions',
    body: 'We\u2019ve built out a dedicated Nokturna page: confirmed best-of-three rules, the 67+ card pool across Werewolf/Vampire/Plant/Aquatic archetypes, and an honest list of deck-building questions we can\u2019t answer yet.',
    details: [
      'Includes a searchable card database placeholder \u2014 individual card names and effects aren\u2019t public yet, so nothing is invented to fill the gap.',
      'Dragan is confirmed as the in-universe inventor of the game.',
    ],
    category: 'characters',
  },
  {
    slug: 'german-spanish-character-pages-deepened',
    date: '2026-07-14',
    title: 'German and Spanish character coverage nearly matches English',
    body: 'We\u2019ve expanded German and Spanish character profiles from a handful up to 48 residents each, covering all 23 romance options plus most named side characters.',
    details: [
      'Only two characters remain untranslated: Kai and Celine, both still fully unconfirmed placeholders in the English data with no real content to translate yet.',
    ],
    category: 'characters',
  },
  {
    slug: 'logan-family-name-correction',
    date: '2026-07-12',
    title: 'Correction: "Logan" is the werewolf family name, not a person',
    body: 'Multiple post-launch sources confirm "Logan" is the surname of the werewolf family (Brook, Ridge, Saga, Ludo), resolving earlier pre-launch confusion that treated it as a standalone mayor character.',
    details: [
      'The actual mayor is Brook; Ridge is her younger brother; Saga and Ludo are her children.',
      'We\u2019ve kept a redirect-style page at the old URL since other pages still link to it.',
    ],
    category: 'characters',
  },
  {
    slug: 'death-friendship-achievement-confirmed',
    date: '2026-07-11',
    title: 'Building friendship with Death has its own achievement',
    body: 'Confirmed: "Buddies for Afterlife" rewards building friendship with Death the same way you would with any other resident, reinforcing that he\u2019s treated as a full character rather than a novelty.',
    details: [
      'Death is confirmed romanceable, resides at "Death\u2019s Shack" in the Misty Shores graveyard, and is unlocked after two meetings post-"A Bridge Too Far."',
    ],
    category: 'characters',
  },
  {
    slug: 'sixteen-characters-now-have-confirmed-gift-data',
    date: '2026-07-11',
    title: 'Confirmed gift data now covers 16 residents, up from just one',
    body: 'Launch-week testing from TheGamer has let us confirm loved, liked, or disliked gifts for 16 characters, a big jump from the single confirmed gift (Saga\u2019s) we had right after launch.',
    details: [
      'Characters with confirmed gift data as of this week: Saga, Luna, Orlock, Mina, Evan, Elvira, Sabrina, Noel, Fiona, Ridge, Ludo, Dragan, Aras, Alina, Samael, and Persephone.',
      'Where two independent sources disagreed slightly on a character\u2019s preferences (Saga\u2019s case), we merged both as complementary rather than picking one arbitrarily.',
      'Gift pages only publish once a character has enough confirmed data to be genuinely useful \u2014 thin entries stay off the site rather than shipping a near-empty page.',
    ],
    category: 'romance',
    sourceLabel: 'TheGamer gift guide',
    sourceUrl: 'https://www.thegamer.com/moonlight-peaks-complete-romance-relationship-gift-guide/',
  },
  {
    slug: 'gift-menu-remembers-your-last-eight-gifts',
    date: '2026-07-10',
    title: 'The relationship menu tracks your last 8 gifts per resident',
    body: 'Confirmed: each resident\u2019s relationship menu shows whether your last 8 gifts landed as liked, loved, or disliked, so experimenting with gifts is low-risk since you can review what worked.',
    details: [
      'This makes trial-and-error gifting safe even before a character\u2019s full preference list is confirmed \u2014 you can check the outcome afterward rather than guessing blind.',
      'Two general tricks reported across multiple sources: matching a gift\u2019s color to a resident\u2019s favorite color, and handmade presents like arranged bouquets or embroidered pieces, both tend to land well beyond item-specific preferences.',
    ],
    category: 'romance',
  },
  {
    slug: 'moon-goddess-sun-god-confirmed-friend-only',
    date: '2026-07-10',
    title: 'Moon Goddess and Sun God confirmed as friendship-only NPCs',
    body: 'Japanese-language coverage groups Moon Goddess and Sun God with Brook as friendship-only NPCs, not romance options \u2014 we\u2019ve updated both profiles to reflect this.',
    details: [
      'This source correctly identified Brook as non-romanceable (something we\u2019d already confirmed independently), which gave us enough confidence to update these two from "unverified" to "confirmed not romanceable."',
      'Both were previously listed with an unconfirmed romance status; both now show as confirmed friendship-only.',
    ],
    category: 'romance',
  },
  {
    slug: 'birthday-gifts-and-color-matching-tips',
    date: '2026-07-09',
    title: 'Community-reported: birthday gifts and color-matching both boost friendship',
    body: 'Beyond confirmed per-character preferences, two general patterns keep showing up in community reports: giving a favorite gift on a resident\u2019s birthday, and matching gift colors to their preferences.',
    details: [
      'These are labeled community-reported rather than confirmed, since they come from a single source so far \u2014 worth trying, but not guaranteed mechanics.',
      'A custom flower bouquet arranged in someone\u2019s preferred color, made via the flower-arranging mini-game, is a safe, always-available gift option that doubles as decor if unclaimed.',
    ],
    category: 'romance',
  },
  {
    slug: 'loveage-festival-and-moonlight-ball-confirmed',
    date: '2026-07-10',
    title: 'Loveage Festival mechanics confirmed, plus a second festival: Moonlight Ball',
    body: 'The official wiki confirms the full Loveage Festival setup (Spring 20\u201321) and a second named festival, the Moonlight Ball (Summer 20) \u2014 our environment page now covers both.',
    details: [
      'Loveage Festival: hosted by Llemi the "Love Demon," with Elvira and Mina running stalls, Luna running a flower-arranging stall, and a secret-admirer gift exchange (pick up to 3 NPCs Saturday, exchange happens Sunday).',
      'Moonlight Ball is confirmed by name and date only so far; we\u2019re treating its specific activities as still unconfirmed rather than guessing.',
      'At least one reviewer found festival frequency and variety thin compared to genre peers like Stardew Valley \u2014 we\u2019re including that honestly rather than only reporting the positive angle.',
    ],
    category: 'world',
    sourceLabel: 'Official Moonlight Peaks Wiki',
    sourceUrl: 'https://moonlightpeaks.wiki.gg/',
  },
  {
    slug: 'no-minimap-confirmed-map-icons-explained',
    date: '2026-07-11',
    title: 'Confirmed: no minimap, but the pause-menu map flags pending cutscenes',
    body: 'Multiple sources confirm Moonlight Peaks has no minimap or quest markers and uses a fixed camera \u2014 instead, the in-game map marks buildings with an exclamation point or a sparkling aura when entering will trigger a story moment.',
    details: [
      'Fast travel is confirmed via the Witches\u2019 Circle, plus bat form once shapeshifting unlocks.',
      'Two collectibles tie to specific underground areas: Vampsters get carried to a hole in the Twilight Catacombs, and Soul Blobs are netted around town.',
    ],
    category: 'world',
  },
  {
    slug: 'clothing-system-fully-explained',
    date: '2026-07-10',
    title: 'Clothing confirmed: a free house mirror, separate from the Alter Ego Elixir potion',
    body: 'We now have a full, confirmed picture of the clothing system: Outfit Sets, Tops, Bottoms, Shoes, and Accessories, changeable any time via a mirror in your house \u2014 a completely separate system from the appearance-changing potion.',
    details: [
      'Whatever you wear during character creation is permanently unlocked in your wardrobe, so you never have to re-buy your starting look.',
      'New clothing after that is bought from Aras at Third Eye Threads.',
      'The Alter Ego Elixir (1,300 gold, one-time, sold by Sabrina) changes hairstyle, hair color, skin tone, eye color, eyebrows, and makeup \u2014 but explicitly does not affect clothing.',
    ],
    category: 'world',
  },
  {
    slug: 'esrb-teen-pegi-12-confirmed',
    date: '2026-07-08',
    title: 'Age rating confirmed: ESRB Teen (US) and PEGI 12 (Europe)',
    body: 'Despite the cozy, combat-free tone, Moonlight Peaks carries an ESRB Teen rating in the US and PEGI 12 in Europe, driven by alcohol references and mildly suggestive romantic language rather than violence.',
    details: [
      'You can craft and drink beer and wine in-game, which contributes to the rating alongside romance-related dialogue.',
      'We found and fixed an old FAQ entry on our own site that incorrectly guessed the game would land in a lower age bracket \u2014 now corrected to match the real, confirmed rating.',
    ],
    category: 'world',
  },
  {
    slug: 'museum-donation-system-explained',
    date: '2026-07-11',
    title: 'Museum donation system confirmed: opens mid-year one, not from day one',
    body: 'Confirmed: the town museum doesn\u2019t open immediately \u2014 it unlocks once a story thread involving Persephone, Jada, and Winston moving to town plays out, landing around the start of Autumn in year one for many players.',
    details: [
      'Donating works via themed collection rooms reached through a portal, interacted with via exclamation-point signs rather than talking to a curator.',
      'Quality requirements vary by collection \u2014 the farming-related collection specifically wants higher-quality crops, so it\u2019s worth holding onto your best harvests.',
    ],
    category: 'world',
  },
  {
    slug: 'bat-form-vs-hellkitten-functions-confirmed',
    date: '2026-07-11',
    title: 'Bat form and Hellkitten confirmed to serve different purposes',
    body: 'Multiple sources now distinguish the two shapeshifting forms clearly: bat form is about elevation and traversal (flying over barriers and gaps), while Hellkitten is about raw speed and free tilling.',
    details: [
      'A possible third form is reported by some sources as "Mermaid/Aqua form," tied to a "The Mermaid\u2019s Wish" quest, though we haven\u2019t independently confirmed the exact unlock trigger yet.',
      'We also caught and rejected a batch of fabricated claims this week from a site inventing a fake quest name, a fake character, and a fake resource system \u2014 none of that made it onto our pages.',
    ],
    category: 'characters',
  },
  {
    slug: 'four-new-character-profiles-mina-sabrina-noel-fiona',
    date: '2026-07-10',
    title: 'Four new full character profiles added: Mina, Sabrina, Noel, and Fiona',
    body: 'We\u2019ve added full profiles for four more residents with confirmed backstories and gift data: Mina (Orlock\u2019s daughter, runs Coffee & Coffins with Evan), Sabrina (Webb of Wonders shopkeeper), Noel (town blacksmith with hidden self-image struggles), and Fiona (head of the Webb witch family).',
    details: [
      'Fiona\u2019s profile includes the confirmed backstory behind the cursed bridge that blocks Misty Shores until the "A Bridge Too Far" quest is completed.',
      'All four now have confirmed gift data alongside their profiles.',
    ],
    category: 'characters',
  },
  {
    slug: 'winston-avatar-added',
    date: '2026-07-09',
    title: 'Winston\u2019s profile image added, completing our character avatar set',
    body: 'A reader-submitted image let us fill in the one remaining blank avatar on our characters page \u2014 Winston, of the Henderson human family.',
    details: [
      'All confirmed characters now have profile images rather than placeholder initials.',
    ],
    category: 'characters',
  },
  {
    slug: 'achievements-tied-to-character-interactions',
    date: '2026-07-11',
    title: 'New achievement names confirmed, several tied directly to specific characters',
    body: 'Community-reported achievement names add more detail to our achievements guide, including several tied to specific character interactions or forms.',
    details: [
      'Awooooo! (talk to a werewolf character during a full moon), AFKitten (pet your Hellkitten for 5 minutes), and Call of the Current (unlock the Mermaid/Aqua form) all reference specific characters or shapeshifting forms.',
      'We deliberately excluded a couple of achievement names that appeared alongside content we\u2019d already flagged as fabricated elsewhere, even though the source otherwise seemed reasonable \u2014 better cautious than wrong.',
    ],
    category: 'characters',
  },
  {
    slug: 'dark-wood-crafting-material-confirmed',
    date: '2026-07-10',
    title: 'Dark Wood confirmed as a real crafting material, obtained with a Copper Axe',
    body: 'Two independent sources confirm Dark Wood as a genuine crafting material, obtained by chopping oversized logs around the farm area with an upgraded Copper Axe \u2014 not the starting Rusty Axe.',
    details: [
      'Used in at least two decoration recipes: a Fur Chair (with hardwood planks and cloth) and a Coffin Bookcase (with planks).',
      'This was the top breakout search term in our most recent trending-keywords check, so it\u2019s now documented on our crafting and tools pages plus a dedicated FAQ.',
    ],
    category: 'guides',
  },
  {
    slug: 'full-23-character-roster-cross-verified',
    date: '2026-07-09',
    title: 'Full 23-character romance roster cross-verified against a second independent source',
    body: 'Our confirmed list of 23 romanceable residents across seven families now matches independently against the official wiki\u2019s own character listing \u2014 same names, same family groupings, no discrepancies found.',
    details: [
      'Families confirmed: Ambrosia (vampires), Logan (werewolves), Webb (witches), Hosu (mermaids), Khazan (seers), and Henderson (humans), plus Death and Llemi as family-less romance options.',
      'This kind of cross-check matters because a couple of lower-quality sites we\u2019ve encountered this month have published incorrect character counts or invented names entirely \u2014 verifying against a second reliable source catches that.',
    ],
    category: 'characters',
  },
  {
    slug: 'tool-upgrade-menu-navigation-confirmed',
    date: '2026-07-10',
    category: 'guides',
    title: 'How to actually reach the tool upgrade menu at the Howling Hammer',
    body: 'We already had the cost and material requirements for tool upgrades, but not the exact in-shop navigation — that\u2019s now confirmed: talk to Ridge, select Shop, choose "I want to buy something," then scroll right twice to reach the upgrade tab.',
    details: [
      'Confirmed menu path: Ridge \u2192 Shop \u2192 "I want to buy something" \u2192 scroll right twice \u2192 tool upgrade tab.',
      'Community-reported priority tip: get the Pickaxe to Gold tier first, since it gates how much ore the Cave of Echoes gives you, which in turn gates every other tool\u2019s upgrade materials.',
      'This matches what we already had confirmed elsewhere on the site: the Howling Hammer is open Monday\u2013Friday only, and the Scythe caps out after two upgrades while other tools can reach a gold tier.',
    ],
    sourceLabel: 'GAMES.GG tool upgrade guide',
    sourceUrl: 'https://games.gg/news/moonlight-peaks-tool-upgrades/',
  },
  {
    slug: 'moonlight-peaks-is-out-now',
    date: '2026-07-07',
    category: 'general',
    title: 'Moonlight Peaks is out now on Steam, Switch, Switch 2 and Android',
    body: 'Launch day has arrived. Early reviews are live, and the first wave of confirmed details — starting crops, tool unlocks, and named residents — is landing on this wiki as we verify it in the live game.',
    details: [
      'Starter crop confirmed: Orlock hands you Blood Grape seeds on night one; raw crops sell low, so processing into wine/juice is the early money-maker.',
      'Tool unlocks confirmed: the fishing rod comes from winning a 250-gold bet with Noel, and the bug net comes from Death after the Ambrosia castle area opens up.',
      'Character roster is filling in with real family ties (Orlock is Mina and Evan\u2019s father; Samael and Elvira are siblings) as reviews and datamines are cross-checked.',
      'Exact prices, gift lists, and the Nokturna card list are not out anywhere yet — we are not inventing numbers and will add them as they are verified.',
    ],
    sourceLabel: 'Launch-day review roundup',
    sourceUrl: 'https://ladiesgamers.com/moonlight-peaks-review/',
  },
  {
    slug: 'launch-discount-expands-platform-wide',
    date: '2026-07-05',
    category: 'general',
    title: 'Launch discount expands to PC and Google Play worldwide',
    body: 'The 15% pre-order discount, previously confirmed for Nintendo platforms in the Americas, expands on launch day to cover Steam and Google Play Games globally for a full week.',
    details: [
      'The window runs seven days starting July 7, 2026 — so late deciders who skip pre-ordering still get the same 15% off if they buy within that first week.',
      'This is a straightforward widening of an already-confirmed discount, not a new promotion — worth knowing if you were holding off on Steam or Android specifically because you assumed the discount was Nintendo-only.',
    ],
    sourceLabel: 'itemku',
    sourceUrl: 'https://www.itemku.com/en/blog/moonlight-peaks/moonlight-peaks-release-date/4072/',
  },
  {
    slug: 'steam-final-launch-countdown',
    date: '2026-07-01',
    category: 'general',
    title: 'Steam page enters the final launch countdown',
    body: 'The Steam listing now shows Moonlight Peaks entering its final launch countdown, with the demo still available and six supported interface/subtitle languages listed.',
    details: [
      'The Steam page remains the cleanest launch reference for PC and Mac players because it combines the current release timing, demo access, interface language list, and core feature framing in one place.',
      'For players comparing platforms, this is also a useful pre-launch checkpoint before deciding between Steam, Steam Deck, Switch, Switch 2, and Android.',
    ],
    sourceLabel: 'Steam',
    sourceUrl: 'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  },
  {
    slug: 'switch-2-release-coverage',
    date: '2026-06-29',
    category: 'guides',
    title: 'Moonlight Peaks appears in Switch 2 release coverage',
    body: 'GamesRadar included Moonlight Peaks in its Switch 2 upcoming-games roundup, again pointing to the July 7 launch and the supernatural farming setup.',
    details: [
      'The listing helps keep Moonlight Peaks visible for players planning a Switch 2 library, especially those looking for cozy games beyond the usual farming-sim lineup.',
      'Switch 2 remains one of the most important platform angles to watch at launch because pricing, performance, and upgrade messaging can affect buying decisions.',
    ],
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-switch-2-games/',
  },
  {
    slug: 'original-switch-july-slate',
    date: '2026-06-17',
    category: 'guides',
    title: 'Original Switch coverage keeps Moonlight Peaks on the July slate',
    body: 'GamesRadar also listed Moonlight Peaks in its upcoming Nintendo Switch games roundup, framing it as a supernatural cozy farming sim for the original Switch audience.',
    details: [
      'This matters because Moonlight Peaks is not only a Switch 2 story. Original Switch players are still part of the launch audience and will likely search for version differences.',
      'After launch, the most useful follow-up will be a side-by-side check of Switch and Switch 2 performance, load times, price, and save/upgrade details.',
    ],
    sourceLabel: 'GamesRadar+',
    sourceUrl: 'https://www.gamesradar.com/upcoming-nintendo-switch-games/',
  },
  {
    slug: 'expanded-demo-before-launch',
    date: '2026-06-06',
    category: 'guides',
    title: 'Expanded demo arrives before launch',
    body: 'PC Gamer reported that the newer Steam demo is larger than earlier builds, adding more story context, character creation, and a broader slice of the game before July.',
    details: [
      'The expanded demo is important because older impressions can describe a much narrower farm-only slice. Players reading mixed feedback should check which demo version the comments refer to.',
      'The broader demo gives players a better sense of the tone, character creator, early town interactions, and cozy side activities before committing at launch.',
    ],
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/the-vampire-farm-sim-ive-been-anticipating-for-3-years-just-released-an-even-bigger-better-demo-for-everyone-to-try-before-it-launches-next-month/',
  },
  {
    slug: 'pc-gamer-hands-on-preview',
    date: '2026-05-12',
    category: 'romance',
    title: 'Hands-on preview details tone, pacing, and romance',
    body: 'PC Gamer described the game after a six-hour preview as a more dramatic supernatural farm sim, highlighting family conflicts, Saga romance, no observed combat, and slower early quest pacing.',
    details: [
      'The preview is useful because it goes beyond store-page bullet points and gives a clearer read on tone: family drama, romance, village relationships, and a slower early-game rhythm.',
      'It also helps set expectations for players coming from Stardew Valley or other cozy sims: Moonlight Peaks appears to lean harder into supernatural identity and relationship tension.',
    ],
    sourceLabel: 'PC Gamer',
    sourceUrl: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/',
  },
  {
    slug: 'guide-and-tools-live-before-launch',
    date: '2026-06-23',
    category: 'general',
    title: 'Guide and tools live before launch',
    body: 'Our Nokturna card database, interactive town map, and release/platform pages are up ahead of the July 7 launch. Crop, fishing, gift, and cheat data fill in on launch day.',
    details: [
      'The pre-launch goal is to make the site useful without inventing unknown launch data. Confirmed release information, platform pages, demo notes, and tools can go live safely before full item tables are verified.',
      'After launch, the same pages can expand into detailed crop, fishing, gift, romance, and cheat references without changing their URLs.',
    ],
  },
  {
    slug: 'free-demo-available',
    date: '2026-06-06',
    category: 'guides',
    title: 'Free demo available',
    body: 'A free demo is out on Steam for PC and Mac and on the Nintendo Switch eShop, also playable on Switch 2, featuring character creation, fishing, flower arranging, and embroidery.',
    details: [
      'The demo is the best way to test the tone before launch, especially for players deciding whether the vampire-farming premise fits their cozy-game taste.',
      'Because demo scope changed over time, players should expect some online impressions to describe different builds.',
    ],
  },
  {
    slug: 'release-date-set-july-7-2026',
    date: '2026-03-02',
    category: 'general',
    title: 'Release date set for July 7, 2026',
    body: 'XSEED Games confirmed Moonlight Peaks launches July 7, 2026 on Steam, Switch, Switch 2, and Android, at $34.99, with Switch 2 at $39.99 and a 15% launch discount.',
    details: [
      'The release date remains the anchor for all pre-launch planning, including platform choice, demo testing, and wishlist timing.',
      'The launch discount is especially relevant for players comparing Steam, Switch, Switch 2, and Android purchases during the first week.',
    ],
  },
];
