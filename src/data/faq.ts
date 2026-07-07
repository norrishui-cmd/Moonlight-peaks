// Moonlight Peaks FAQ — each entry becomes its own page at /faq/<slug> and is listed on the /faq hub.
// RULE: only entries with a real, sourced answer go live here. Do NOT invent gift tables, schedules,
// or data that the game has not revealed. Pending questions are kept as commented templates at the
// bottom — fill them (or I will) once the July 7, 2026 build confirms the answer.

export type FaqCat = 'platforms' | 'romance' | 'characters' | 'world' | 'general';

export const faqCatLabels: Record<FaqCat, string> = {
  platforms: 'Platforms, price & demo',
  romance: 'Romance & marriage',
  characters: 'Characters',
  world: 'World & gameplay',
  general: 'General',
};

export type Related = { label: string; href: string };
export type Faq = {
  slug: string;
  cat: FaqCat;
  q: string;
  a: string;
  more?: string[];
  related?: Related[];
};

export const faqs: Faq[] = [
  // ── Platforms, price & demo ──
  {
    slug: 'when-does-moonlight-peaks-release', cat: 'platforms',
    q: 'When does Moonlight Peaks release?',
    a: 'Moonlight Peaks launches on July 7, 2026.',
    more: ['It arrives the same day on Steam (PC and Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.'],
    related: [{ label: 'Release date & platforms', href: '/release-date' }, { label: 'Price & platforms FAQ', href: '/previews/price-platforms-faq' }],
  },
  {
    slug: 'how-much-does-moonlight-peaks-cost', cat: 'platforms',
    q: 'How much does Moonlight Peaks cost?',
    a: 'It is $34.99 on Steam (PC/Mac), Switch, and Android, and $39.99 on Switch 2.',
    more: ['There is a launch discount in the first week, and a Switch-to-Switch 2 upgrade has been mentioned.'],
    related: [{ label: 'Platforms & price', href: '/platforms' }, { label: 'Release date', href: '/release-date' }],
  },
  {
    slug: 'what-platforms-is-moonlight-peaks-on', cat: 'platforms',
    q: 'What platforms is Moonlight Peaks on?',
    a: 'Steam (Windows and Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2, and Android via Google Play.',
    related: [{ label: 'Platforms guide', href: '/platforms' }],
  },
  {
    slug: 'is-moonlight-peaks-on-ps5-or-xbox', cat: 'platforms',
    q: 'Is Moonlight Peaks on PS5 or Xbox?',
    a: 'No PlayStation or Xbox version has been announced. The confirmed platforms are Steam, Steam Deck, Switch, Switch 2, and Android.',
    more: ['If a PS5 or Xbox release is announced later, we will update this page.'],
    related: [{ label: 'Platforms guide', href: '/platforms' }],
  },
  {
    slug: 'is-there-a-moonlight-peaks-demo', cat: 'platforms',
    q: 'Is there a Moonlight Peaks demo?',
    a: 'Yes — a free demo is available on Steam and the Nintendo eShop (also playable on Switch 2).',
    more: ['It includes character creation and cozy activities like fishing, flower arranging, and embroidery, plus early interactions with townsfolk.'],
    related: [{ label: 'Demo guide', href: '/demo' }, { label: 'Is the demo worth it?', href: '/previews/is-the-demo-worth-it' }],
  },
  {
    slug: 'does-demo-progress-carry-over', cat: 'platforms',
    q: 'Does Moonlight Peaks demo progress carry over?',
    a: 'No — treat the demo as a taster. The full game starts fresh.',
    related: [{ label: 'Demo guide', href: '/demo' }],
  },

  // ── General ──
  {
    slug: 'what-is-moonlight-peaks-about', cat: 'general',
    q: 'What is Moonlight Peaks about?',
    a: 'It is a cozy vampire life sim. You play Count Dracula\u2019s child, leaving the city to restore an abandoned family homestead in a supernatural town of werewolves, witches, mermaids, and more.',
    more: ['You farm by night, learn magic and brew potions, and befriend or romance the locals across the town\u2019s seven families.'],
    related: [{ label: 'Beginner guide', href: '/beginner-guide' }, { label: '10 things to know', href: '/previews/things-to-know-before-playing' }],
  },
  {
    slug: 'who-makes-moonlight-peaks', cat: 'general',
    q: 'Who makes Moonlight Peaks?',
    a: 'It is developed by Little Chicken Game Company, with XSEED Games publishing in the Americas and Marvelous Europe in Europe.',
    related: [{ label: 'Release date', href: '/release-date' }],
  },
  {
    slug: 'is-moonlight-peaks-multiplayer', cat: 'general',
    q: 'Is Moonlight Peaks multiplayer?',
    a: 'No multiplayer or co-op has been announced — it is a single-player life sim (Steam lists it as Singleplayer).',
    more: ['If co-op is announced later, we will update this page.'],
    related: [{ label: 'Price & platforms FAQ', href: '/previews/price-platforms-faq' }],
  },
  {
    slug: 'moonlight-peaks-reddit-discord-community', cat: 'general',
    q: 'Is there a Moonlight Peaks Reddit or Discord?',
    a: "We haven't sourced a dedicated official subreddit yet — we won't guess at one or link an unofficial community and call it official. The confirmed community hubs are the official Discord server and the Steam Community discussion boards for the game, both linked by the developers.",
    more: ['If an official subreddit is confirmed, we will add it here rather than pointing to an unverified one.'],
    related: [{ label: 'Review roundup', href: '/reviews' }, { label: 'Previews & community reception', href: '/previews' }],
  },
  {
    slug: 'how-to-get-married-in-moonlight-peaks', cat: 'romance',
    q: 'How do you get married in Moonlight Peaks?',
    a: 'Confirmed at launch: dating unlocks once a resident hits Heart Level 4. From there you can invite them on dates, which involve minigames — it\u2019s possible to fail a date (e.g. by showing up late), which costs friendship points rather than ending the relationship outright. Marriage itself is monogamous once it happens. Exact proposal steps and heart-event requirements beyond that are still being verified.',
    related: [{ label: 'Romance guide', href: '/romance' }, { label: 'Gift Tracker', href: '/tools/gift-tracker' }],
  },
  {
    slug: 'how-to-turn-into-a-bat-hellkitten', cat: 'world',
    q: 'How do you turn into a bat or Hellkitten in Moonlight Peaks?',
    a: 'Confirmed at launch: once shapeshifting is unlocked through story progression, hold the left shoulder button to open a magic wheel and pick your form — bat for fast travel, or your three-eyed Hellkitten for faster movement and free tilling.',
    related: [{ label: 'Shapeshifting', href: '/shapeshifting' }],
  },
  {
    slug: 'how-to-find-quests-heart-events', cat: 'world',
    q: 'How do you find quests and heart events in Moonlight Peaks?',
    a: 'Confirmed at launch: check the map for markers — an exclamation point means entering that area triggers a cutscene, and a sparkling aura around a building means going inside triggers one. The bulletin board in town (run by Albertus, an owl) also lists available jobs/quests.',
    related: [{ label: 'Characters', href: '/characters' }, { label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'how-to-change-portrait-style', cat: 'general',
    q: 'How do you change your character\u2019s portrait style in Moonlight Peaks?',
    a: 'Confirmed at launch: open the main game menu (the "+" button on Nintendo Switch) to switch your character\u2019s portrait between two presets — a cartoon style with realistic shading, or a cuter, anime-inspired style.',
    related: [{ label: 'Character creator', href: '/character-creator' }],
  },
  {
    slug: 'moonlight-peaks-age-rating', cat: 'general',
    q: 'What is the age rating for Moonlight Peaks?',
    a: 'Confirmed at launch: PEGI 12 in the UK/Europe and ESRB Teen (T) in the US, due to references to alcohol (you can craft and drink beer and wine) and mildly suggestive romantic language.',
    related: [{ label: 'Review roundup', href: '/reviews' }],
  },

  // ── World & gameplay ──
  {
    slug: 'is-there-combat-in-moonlight-peaks', cat: 'world',
    q: 'Is there combat in Moonlight Peaks?',
    a: 'No. Previews confirm there is no combat anywhere — even the mines and catacombs stay peaceful, so it remains a cozy experience.',
    related: [{ label: 'Activities', href: '/activities' }],
  },
  {
    slug: 'do-you-farm-at-night', cat: 'world',
    q: 'Do you farm at night in Moonlight Peaks?',
    a: 'Yes. As a vampire you do your growing and tending after dark, then return to your coffin by sunrise — a twist on the usual daytime farming loop.',
    related: [{ label: 'Farming guide', href: '/farming' }],
  },
  {
    slug: 'how-does-magic-work-in-moonlight-peaks', cat: 'world',
    q: 'How does magic work in Moonlight Peaks?',
    a: 'Magic is wand-based: you repair a broken wand, draw spell runes to cast, and manage mana (which you refill by eating).',
    more: ['There is a small watering mini-game, and you unlock energy-saving spells that cut down farm busywork. You also brew potions such as the Alter Ego Elixir that changes your appearance.'],
    related: [{ label: 'Magic guide', href: '/magic' }],
  },
  {
    slug: 'can-you-shapeshift-in-moonlight-peaks', cat: 'world',
    q: 'Can you shapeshift in Moonlight Peaks?',
    a: 'Yes. You can shapeshift — for example into a bat — to cross town quickly and reach hidden areas.',
    related: [{ label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'what-is-nokturna', cat: 'world',
    q: 'What is Nokturna in Moonlight Peaks?',
    a: 'Nokturna is the town\u2019s collectible card game. You collect cards and challenge residents to matches.',
    more: ['Full rules and the card list are confirmed at launch — we will not invent cards.'],
    related: [{ label: 'Nokturna guide', href: '/nokturna' }],
  },
  {
    slug: 'what-pets-and-livestock-are-there', cat: 'world',
    q: 'What pets and livestock are in Moonlight Peaks?',
    a: 'You can keep a three-eyed Hellkitten as a pet, and raise magical livestock such as the Draculamb.',
    related: [{ label: 'Farming guide', href: '/farming' }],
  },

  // ── Romance & marriage ──
  {
    slug: 'can-you-get-married-in-moonlight-peaks', cat: 'romance',
    q: 'Can you get married in Moonlight Peaks?',
    a: 'Yes, you can marry a romance partner. There are no children in the game.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-have-children-in-moonlight-peaks', cat: 'romance',
    q: 'Can you have children in Moonlight Peaks?',
    a: 'No. You can date and marry residents, but raising children is not a feature.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'how-many-romance-options-are-there', cat: 'romance',
    q: 'How many romance options are in Moonlight Peaks?',
    a: 'The Steam page describes around two dozen (roughly 24) romanceable residents. Earlier coverage cited 15, so the roster grew during development.',
    more: ['Dating is gender-neutral, and the full named list is confirmed closer to launch.'],
    related: [{ label: 'Romance & families', href: '/romance' }, { label: 'Families explained', href: '/previews/families-and-residents' }],
  },
  {
    slug: 'is-dating-gender-locked-in-moonlight-peaks', cat: 'romance',
    q: 'Is dating gender-locked in Moonlight Peaks?',
    a: 'No. Character models are deliberately gender-neutral, so you can romance any eligible resident regardless of how you build your own vampire.',
    related: [{ label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-romance-a-werewolf', cat: 'romance',
    q: 'Can you romance a werewolf in Moonlight Peaks?',
    a: 'Yes. Saga, a werewolf, is a confirmed romance option. Since vampires and werewolves famously bicker, dating across that divide is part of the charm.',
    related: [{ label: 'Saga', href: '/characters/saga' }, { label: 'Romance & families', href: '/romance' }],
  },
  {
    slug: 'can-you-date-multiple-characters', cat: 'romance',
    q: 'Can you date multiple characters at once in Moonlight Peaks?',
    a: 'This has not been confirmed before launch — exclusivity and polyamory rules have not been revealed.',
    more: ['We will update this answer once the live build shows how dating multiple residents works.'],
    related: [{ label: 'Romance & families', href: '/romance' }],
  },

  // ── Characters ──
  {
    slug: 'who-is-saga', cat: 'characters',
    q: 'Who is Saga in Moonlight Peaks?',
    a: 'Saga is a werewolf townsperson revealed by the developers, and a confirmed romance option. Her energy is said to shift with the full moon.',
    related: [{ label: 'Saga profile', href: '/characters/saga' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-luna', cat: 'characters',
    q: 'Who is Luna in Moonlight Peaks?',
    a: 'Luna is reported to be a farming witch — likely an early source of spells and gardening know-how. Details are confirmed at launch.',
    related: [{ label: 'Luna profile', href: '/characters/luna' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-orlock', cat: 'characters',
    q: 'Who is Orlock in Moonlight Peaks?',
    a: 'Orlock is reported to be the head of a vampire family, written as a comedic figure in hands-on previews.',
    related: [{ label: 'Orlock profile', href: '/characters/orlock' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'who-is-count-dracula', cat: 'characters',
    q: 'Who is Count Dracula in Moonlight Peaks?',
    a: 'Count Dracula is your father and a story-central figure. He is not a romance option; the story has you stepping out of his shadow to prove a kinder undead life is possible.',
    related: [{ label: 'Count Dracula profile', href: '/characters/count-dracula' }, { label: 'All characters', href: '/characters' }],
  },

  // ── Added angle: high-intent "is/does/how" questions ──
  {
    slug: 'is-moonlight-peaks-worth-it', cat: 'general',
    q: 'Is Moonlight Peaks worth it?',
    a: 'It is shaping up as one of 2026\u2019s most distinctive cozy sims — a 3D vampire life sim with night farming, wand magic and a large romance roster — but since it launches July 7, 2026, the honest answer is to try the free demo first.',
    more: ['The demo lets you test the character creator and cozy activities at no cost, which is the best way to judge whether it suits you before buying.'],
    related: [{ label: 'The demo', href: '/demo' }, { label: 'What is it about?', href: '/faq/what-is-moonlight-peaks-about' }],
  },
  {
    slug: 'is-moonlight-peaks-free', cat: 'platforms',
    q: 'Is Moonlight Peaks free?',
    a: 'No — the full game is $34.99 ($39.99 on Switch 2). There is, however, a free demo on Steam and the Nintendo eShop.',
    related: [{ label: 'Platforms & price', href: '/platforms' }, { label: 'The demo', href: '/demo' }],
  },
  {
    slug: 'is-moonlight-peaks-open-world', cat: 'world',
    q: 'Is Moonlight Peaks open world?',
    a: 'It is not marketed as an open-world game. It is a cozy life sim in which you roam the town, your farm, and surrounding areas like the forest, lake and mines.',
    more: ['The exact map layout and how freely you can explore are confirmed at launch.'],
    related: [{ label: 'Locations', href: '/locations' }, { label: 'The town', href: '/locations/town' }],
  },
  {
    slug: 'is-moonlight-peaks-cozy', cat: 'general',
    q: 'Is Moonlight Peaks a cozy game?',
    a: 'Yes. It is a cozy-gothic life sim with no combat anywhere, focused on farming, crafts, magic and relationships.',
    related: [{ label: 'Activities', href: '/activities' }, { label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }],
  },
  {
    slug: 'how-long-is-moonlight-peaks', cat: 'general',
    q: 'How long is Moonlight Peaks?',
    a: 'Like most life sims, it is open-ended rather than a fixed-length story, so playtime varies widely by player. A concrete estimate will only be possible once the full game is out on July 7, 2026.',
    related: [{ label: 'What is it about?', href: '/faq/what-is-moonlight-peaks-about' }, { label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'is-moonlight-peaks-on-game-pass', cat: 'platforms',
    q: 'Is Moonlight Peaks on Game Pass?',
    a: 'No Game Pass release has been announced, and since there is no confirmed Xbox version, Game Pass is not expected. The confirmed platforms are Steam, Steam Deck, Switch, Switch 2 and Android.',
    related: [{ label: 'Platforms', href: '/platforms' }, { label: 'Is it on PS5 or Xbox?', href: '/faq/is-moonlight-peaks-on-ps5-or-xbox' }],
  },
  {
    slug: 'can-you-play-moonlight-peaks-offline', cat: 'platforms',
    q: 'Can you play Moonlight Peaks offline?',
    a: 'Moonlight Peaks is a single-player game with no announced online requirement, so it is expected to be playable offline. Exact details will be confirmed at launch.',
    related: [{ label: 'Is it multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'Platforms', href: '/platforms' }],
  },
  {
    slug: 'is-moonlight-peaks-coming-to-mobile', cat: 'platforms',
    q: 'Is Moonlight Peaks coming to mobile?',
    a: 'Yes — on Android, via Google Play, on launch day. No iOS or iPhone version has been announced.',
    related: [{ label: 'On Android', href: '/platforms/android' }, { label: 'Platforms', href: '/platforms' }],
  },
  {
    slug: 'does-moonlight-peaks-have-co-op', cat: 'general',
    q: 'Does Moonlight Peaks have local or online co-op?',
    a: 'No co-op has been announced. A player asked the developers directly about online co-op in the Steam Community discussions, and there has been no confirmation of it being added. Everything currently points to Moonlight Peaks being single-player.',
    related: [{ label: 'Is it multiplayer?', href: '/faq/is-moonlight-peaks-multiplayer' }, { label: 'Platforms', href: '/platforms' }],
  },
  {
    slug: 'what-age-rating-is-moonlight-peaks', cat: 'general',
    q: 'What age rating does Moonlight Peaks have?',
    a: 'As of our last check, Moonlight Peaks had not yet been rated by the ESRB. Given the game has no combat and a cozy, gentle gothic tone, it is likely to land in a low age bracket, but we will update this once an official rating is published.',
    related: [{ label: 'Is there combat?', href: '/faq/is-there-combat-in-moonlight-peaks' }, { label: 'Is it cozy?', href: '/faq/is-moonlight-peaks-cozy' }],
  },
  {
    slug: 'how-do-you-make-money-in-moonlight-peaks', cat: 'farming',
    q: 'How do you make money in Moonlight Peaks?',
    a: 'The main confirmed loop is growing and selling your harvest — the Steam page frames unlocking abilities and upgrades around having "a more bountiful harvest." One secondary game-database summary adds that stranger, more "unnatural" crops sell for more, though that detail is not developer-confirmed. Exact prices, buyers, and shop mechanics are confirmed at launch.',
    related: [{ label: 'How to make money guide', href: '/previews/how-does-money-work-in-moonlight-peaks' }, { label: 'Farming', href: '/farming' }],
  },
  {
    slug: 'can-you-sell-crops-in-moonlight-peaks', cat: 'farming',
    q: 'Can you sell your crops in Moonlight Peaks?',
    a: 'Selling your harvest for coins is the implied core loop of a farm sim like this, and Moonlight Peaks\u2019 own store page ties your farm\u2019s output to unlocking upgrades and abilities. We have not seen developer-confirmed specifics on exactly who buys your crops or how selling works mechanically — that lands at launch.',
    related: [{ label: 'How to make money guide', href: '/previews/how-does-money-work-in-moonlight-peaks' }, { label: 'Farming', href: '/farming' }],
  },
  {
    slug: 'is-there-a-shop-in-moonlight-peaks', cat: 'world',
    q: 'Is there a shop in Moonlight Peaks?',
    a: 'Pre-launch datamined files name several shops in town (see our shops page), and one player\u2019s own demo account described a traveling merchant selling seeds and decor items. Whether that merchant also buys your goods, or whether selling happens elsewhere, is not yet confirmed.',
    related: [{ label: 'Town shops', href: '/locations/shops' }, { label: 'How to make money guide', href: '/previews/how-does-money-work-in-moonlight-peaks' }],
  },
  {
    slug: 'can-you-romance-death-in-moonlight-peaks', cat: 'romance',
    q: 'Can you romance Death in Moonlight Peaks?',
    a: 'Unconfirmed. Death is a real name in pre-launch datamined game files, with his own home ("Death\u2019s Shack"), and some pre-launch chatter has floated him as a possible romance option — but this is speculation, not a developer confirmation. We\u2019ll update this the moment the full game settles it.',
    related: [{ label: 'Romance Match Quiz', href: '/tools/romance-match-quiz' }, { label: 'All characters', href: '/characters' }],
  },
  {
    slug: 'is-count-dracula-romanceable', cat: 'romance',
    q: 'Is Count Dracula romanceable in Moonlight Peaks?',
    a: 'No. Count Dracula is your character\u2019s father and a story-central figure, not a romance option — the game is explicit that your relationship with him is family, not dating.',
    related: [{ label: 'Count Dracula profile', href: '/characters/count-dracula' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'is-logan-romanceable-in-moonlight-peaks', cat: 'romance',
    q: 'Is Logan romanceable in Moonlight Peaks?',
    a: 'Reported, not yet developer-confirmed with full certainty — Logan appears as a werewolf resident in press coverage, and independent hints (a dev diary and pre-launch datamined files) both point to his name and home being real. Treat him as a likely, not guaranteed, romance option until launch.',
    related: [{ label: 'Logan profile', href: '/characters/logan' }, { label: 'Is Logan the mayor?', href: '/previews/is-logan-the-mayor' }],
  },
  {
    slug: 'can-you-divorce-in-moonlight-peaks', cat: 'romance',
    q: 'Can you divorce or break up in Moonlight Peaks?',
    a: 'Not confirmed. The developers have confirmed you can marry a romance partner, but whether you can later divorce, break up, or re-marry someone else has not been addressed anywhere we\u2019ve found.',
    related: [{ label: 'Marriage FAQ', href: '/faq/can-you-get-married-in-moonlight-peaks' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'is-there-a-wedding-ceremony-in-moonlight-peaks', cat: 'romance',
    q: 'Is there a wedding ceremony in Moonlight Peaks?',
    a: 'Not confirmed. Marriage itself is confirmed, but whether it comes with an actual ceremony, guests, or a dedicated event — versus a simple menu confirmation — has not been shown or described anywhere yet.',
    related: [{ label: 'Marriage FAQ', href: '/faq/can-you-get-married-in-moonlight-peaks' }, { label: 'Romance', href: '/romance' }],
  },
  {
    slug: 'do-families-disapprove-of-cross-family-romance', cat: 'romance',
    q: 'Do families disapprove of you dating outside your own family in Moonlight Peaks?',
    a: 'Not confirmed as a game mechanic, but it fits the tone: vampires and werewolves are reported to bicker constantly, and press coverage describes an old feud between the town\u2019s supernatural families. Whether that translates into an actual in-game disapproval mechanic for cross-family romance is unknown.',
    related: [{ label: 'The family feud, explained', href: '/previews/family-feud-explained' }, { label: 'Can you romance a werewolf?', href: '/faq/can-you-romance-a-werewolf' }],
  },
  {
    slug: 'is-moonlight-peaks-scary', cat: 'general',
    q: 'Is Moonlight Peaks scary or a horror game?',
    a: 'No. Despite the gothic aesthetic (vampires, graveyards, a character literally named Death), everything shown so far — the demo, press previews, official trailers — points to a cozy, lighthearted tone. Coverage has described it as \u201cchibi-cute but seriously toxic\u201d in its social drama, not frightening. There is no confirmed combat or horror content.',
    related: [{ label: 'Is Moonlight Peaks a cozy game?', href: '/faq/is-moonlight-peaks-cozy' }, { label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'is-moonlight-peaks-based-on-a-book-or-show', cat: 'general',
    q: 'Is Moonlight Peaks based on a book, movie, or TV show?',
    a: 'No. As far as we\u2019ve found, Moonlight Peaks is an original property created by Little Chicken Game Company \u2014 it isn\u2019t adapting an existing book, film, or series.',
    related: [{ label: 'Who makes Moonlight Peaks?', href: '/faq/who-makes-moonlight-peaks' }, { label: 'What is Moonlight Peaks about?', href: '/faq/what-is-moonlight-peaks-about' }],
  },
  {
    slug: 'does-moonlight-peaks-have-a-tutorial', cat: 'general',
    q: 'Does Moonlight Peaks have a tutorial for new players?',
    a: 'Not confirmed in detail, but the free demo already walks new players through character creation and a handful of core activities (fishing, flower arranging, embroidery) with early town interactions \u2014 which functions as a soft introduction even without a formally announced tutorial mode.',
    related: [{ label: 'Demo guide', href: '/demo' }, { label: 'Beginner guide', href: '/beginner-guide' }],
  },
  {
    slug: 'does-moonlight-peaks-have-a-story', cat: 'general',
    q: 'Does Moonlight Peaks have a story, or is it open-ended?',
    a: 'It has a light story hook \u2014 you\u2019re a vampire moving into your family\u2019s abandoned homestead to prove to your skeptical father that a gentler undead life is possible \u2014 layered onto an open-ended cozy life-sim loop of farming, magic, and relationships. Exactly how much scripted story content there is beyond that premise isn\u2019t detailed yet.',
    related: [{ label: 'What is Moonlight Peaks about?', href: '/faq/what-is-moonlight-peaks-about' }, { label: 'Count Dracula profile', href: '/characters/count-dracula' }],
  },
  {
    slug: 'does-moonlight-peaks-support-a-controller', cat: 'platforms',
    q: 'Can you play Moonlight Peaks with a controller?',
    a: 'Yes on Switch, Switch 2, and Steam Deck, where a controller is the default input. On PC, a hands-on press preview specifically recommended using a gamepad over mouse and keyboard, suggesting the game is designed with controller play in mind even on Steam.',
    related: [{ label: 'Platforms', href: '/platforms' }, { label: 'System requirements', href: '/system-requirements' }],
  },
  {
    slug: 'is-moonlight-peaks-difficult', cat: 'general',
    q: 'Is Moonlight Peaks difficult, or can you fail?',
    a: 'Nothing suggests a punishing difficulty \u2014 there\u2019s no confirmed combat, and the tone throughout is cozy rather than challenge-focused. Whether there are fail states (like running out of money) or difficulty options hasn\u2019t been detailed yet.',
    related: [{ label: 'Is Moonlight Peaks a cozy game?', href: '/faq/is-moonlight-peaks-cozy' }, { label: 'Is there combat in Moonlight Peaks?', href: '/faq/is-there-combat-in-moonlight-peaks' }],
  },
  {
    slug: 'does-moonlight-peaks-have-voice-acting', cat: 'general',
    q: 'Does Moonlight Peaks have voice acting?',
    a: 'Not confirmed. Nothing in the demo, trailers, or press coverage we\u2019ve seen mentions voiced dialogue \u2014 treat this as unconfirmed either way until the full game is out.',
    related: [{ label: 'Languages', href: '/languages' }, { label: 'Demo guide', href: '/demo' }],
  },
  {
    slug: 'is-moonlight-peaks-turn-based-or-real-time', cat: 'general',
    q: 'Is Moonlight Peaks turn-based or real-time?',
    a: 'Real-time, like most cozy life-sims in this genre \u2014 the day/night clock keeps moving as you farm, explore, and talk to residents, rather than waiting for you to end a turn.',
    related: [{ label: 'Is Moonlight Peaks a cozy game?', href: '/faq/is-moonlight-peaks-cozy' }, { label: 'Farming', href: '/farming' }],
  },
  {
    slug: 'does-moonlight-peaks-have-achievements', cat: 'platforms',
    q: 'Does Moonlight Peaks have achievements or trophies?',
    a: 'Not confirmed yet for any platform. If Steam achievements or platform-specific trophy lists exist, we\u2019ll document them once the full game launches.',
    related: [{ label: 'Platforms', href: '/platforms' }, { label: 'System requirements', href: '/system-requirements' }],
  },
  {
    slug: 'is-moonlight-peaks-family-friendly', cat: 'general',
    q: 'Is Moonlight Peaks appropriate for kids?',
    a: 'Likely yes for most ages given the cozy tone and lack of combat, but we can\u2019t give a firm answer \u2014 the game has not been ESRB-rated as of this writing (some outlets have reported a T for Teen rating on consoles/mobile, which we haven\u2019t been able to independently verify). Check the official rating once it\u2019s confirmed, especially given the game\u2019s adult-oriented romance and marriage systems.',
    related: [{ label: 'What age rating does Moonlight Peaks have?', href: '/faq/what-age-rating-is-moonlight-peaks' }, { label: 'How old are the romanceable characters?', href: '/faq/how-old-are-the-romanceable-characters' }],
  },
];

// ───────────────────────── PENDING (no confirmed answer yet — fill at launch, then move up) ─────────────────────────
// Do NOT publish these until the live game confirms the answer. Suggested slugs:
//   romance:  best-romance-character, luna-gifts, saga-gifts, how-to-increase-friendship, can-you-divorce, how-to-get-married (mechanics)
//   farming:  best-crop-for-money, do-crops-die, full-crops-list, how-to-water-crops (exact), best-season-crops
//   world:    full-spell-list, all-potions, how-to-fast-travel (confirm Witches' Circle), festival-dates, all-fish-list
//   cheats:   does-moonlight-peaks-have-cheats, money-cheat (only if a real console exists)
// Template:
// { slug: 'luna-gifts', cat: 'romance', q: 'What gifts does Luna like in Moonlight Peaks?',
//   a: 'Confirmed gift preferences will be added once the live game reveals them — we will not guess.',
//   related: [{ label: 'Luna profile', href: '/characters/luna' }] },
