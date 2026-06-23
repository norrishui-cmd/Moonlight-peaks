// Moonlight Peaks demo preview articles.
// These are ROUNDUPS of public demo feedback (players + press), written in our own words — NOT first-hand reviews.
// To add an article: copy a block, give it a unique slug, fill body[] and sources[]. It auto-appears on /previews,
// the homepage "Demo impressions" section, and the Release page list.

export type Block = { type: 'h2' | 'p' | 'ul' | 'callout'; text?: string; items?: string[] };
export type Source = { label: string; url: string };
export type Preview = {
  slug: string;
  title: string;
  dek: string;       // short summary / intro
  date: string;      // e.g. 'June 2026'
  readTime: string;  // e.g. '5 min'
  tag: string;       // eyebrow word
  body: Block[];
  sources: Source[];
};

export const previews: Preview[] = [
  {
    slug: 'demo-impressions-roundup',
    title: 'Moonlight Peaks Demo: What Players & Press Are Saying',
    dek: 'A roundup of public impressions of the free demo — the praise, the gripes, and the overall mood ahead of the July 7 launch.',
    date: 'June 2026', readTime: '5 min', tag: 'Roundup',
    body: [
      { type: 'p', text: "The demo has appeared in a few forms now, and plenty of people have shared their thoughts on Steam's forums, on Reddit, and in press hands-on previews. Here is the overall picture, summarized in our own words." },
      { type: 'h2', text: 'The praise' },
      { type: 'p', text: 'The most consistent compliment is visual. Players repeatedly call the art adorable and the character portraits gorgeous, and the relaxing soundtrack and cozy night-time atmosphere get singled out too. The gothic spin on farm-sim staples lands well — three-eyed pets, oddly named crops, and a generally charming world.' },
      { type: 'p', text: 'People who played the bigger build also liked the writing, describing it as funny and sharp, and enjoyed small touches like turning into a cat to dash around. More than a few said the demo was what convinced them to wishlist the full game.' },
      { type: 'h2', text: 'The common gripes' },
      { type: 'ul', items: [
        'Onboarding: a lot of players could not work out how to plant at first (you dig the soil with the shovel), and found seeds buried deep in the vendor menu.',
        'Pacing: the early quests can feel slow — one widely shared complaint is that the opening wine task takes a full in-game week.',
        'The older farm-only demo kept players on the farm with no town access, which several found repetitive.',
        'Small stuff: catching bugs and blobs has a fiddly hitbox, and there were requests for in-game audio settings.',
      ] },
      { type: 'h2', text: 'The overall mood' },
      { type: 'p', text: 'Sentiment skews positive, especially on art, tone, and concept, with most criticism aimed at onboarding and the limited scope of the demo rather than the game itself. A large share of posts essentially amount to: this convinced me to wishlist it.' },
      { type: 'callout', text: 'This is a summary of public feedback from players and press, written in our own words — not a first-hand review. Sources are listed below.' },
    ],
    sources: [
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Steam — Moonlight Peaks community discussions', url: 'https://steamcommunity.com/app/2209900/discussions/' },
      { label: 'Bonus Action — Steam Next Fest demo roundup', url: 'https://bonus-action.com/guides/best-10-steam-next-fest-demos-that-wouldnt-let-me-go/' },
    ],
  },

  {
    slug: 'demo-versions-explained',
    title: 'The Moonlight Peaks Demo Has Had Two Versions — Here Is the Difference',
    dek: 'Some of the negative demo feedback online is about an older build. Here is how the early farm-only demo differs from the bigger, newer one.',
    date: 'June 2026', readTime: '4 min', tag: 'Explainer',
    body: [
      { type: 'p', text: 'If you read demo impressions, you will notice they do not all describe the same thing. That is because the demo has changed over time.' },
      { type: 'h2', text: 'The early farm-only demo' },
      { type: 'p', text: 'An earlier build dropped you onto a partly furnished farm and kept you there. You could clear weeds, plant, craft, and brew potions, but you could not enter the town — your only merchant was a toad. A recurring complaint was that it grew repetitive: one main quest type, a slow opening, and no town access even after the quests were done.' },
      { type: 'h2', text: 'The bigger, newer demo' },
      { type: 'p', text: 'A later build, shown around Wholesome Direct and Steam Next Fest, added a lot. According to the developers it includes the character creator that players had asked for, new interactions with some of the townsfolk, and the relaxing mini-games — fishing, flower arranging, and embroidery — plus more crafting and materials to gather.' },
      { type: 'p', text: 'Press who played extended builds described meeting named residents and seeing story beats, so the newer demo is much closer to the real experience than the farm-only one.' },
      { type: 'h2', text: 'Why it matters' },
      { type: 'p', text: 'If you tried an older demo and bounced off the farm-locked loop, the newer build is worth another look. And when you read criticism online, check which version it is describing before you let it shape your expectations.' },
      { type: 'callout', text: 'A roundup of public info and feedback, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks hub & developer posts', url: 'https://steamcommunity.com/app/2209900' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
    ],
  },

  {
    slug: 'demo-complaints-rough-edges',
    title: 'Moonlight Peaks Demo: Common Complaints & Rough Edges',
    dek: 'The recurring nitpicks from demo players — and which ones are just demo-scope limits rather than problems with the full game.',
    date: 'June 2026', readTime: '5 min', tag: 'Analysis',
    body: [
      { type: 'p', text: 'No demo is perfect. Here are the issues players brought up most often, along with our read on which ones actually matter.' },
      { type: 'h2', text: 'Onboarding is unclear at first' },
      { type: 'p', text: 'The single most common confusion is how to plant. Several players spent days unsure before learning you dig the soil with the shovel, and many could not find seeds because they sit low in the flower vendor list behind easy-to-miss tabs. This is a clarity issue the team could smooth out, not a sign of shallow design.' },
      { type: 'h2', text: 'Pacing in the opening' },
      { type: 'p', text: 'Some found the first stretch slow — the early wine quest takes about an in-game week, and a few players felt the back-to-back tasks lacked payoff. Worth remembering the demo is a thin slice, so early pacing may not reflect the full game.' },
      { type: 'h2', text: 'The farm-only build felt limited' },
      { type: 'p', text: 'In the older demo, being stuck on the farm with no town access wore thin for some. The newer demo and the full game open the town up, so this is largely a demo-scope issue. (See our piece on the two demo versions.)' },
      { type: 'h2', text: 'Small rough edges' },
      { type: 'ul', items: [
        'Catching bugs and blobs has a small hitbox that can feel imprecise.',
        'Requests for in-game audio options rather than relying on system settings.',
        'At least one player noted a witch looked paler in-game than in her portrait art.',
      ] },
      { type: 'h2', text: 'How seriously to take these' },
      { type: 'p', text: 'Most complaints are about onboarding clarity and the demo deliberately narrow scope, not core design. If those are smoothed out by launch, the underlying life sim seems to land well with the players who tried it.' },
      { type: 'callout', text: 'A summary of public feedback, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks community discussions', url: 'https://steamcommunity.com/app/2209900/discussions/' },
    ],
  },

  {
    slug: 'press-hands-on-impressions',
    title: 'What a 6-Hour Hands-On Revealed About Moonlight Peaks',
    dek: 'Press who played extended builds got further than the public demo. Here is what their previews suggest about tone, cast, and how it plays — paraphrased.',
    date: 'June 2026', readTime: '5 min', tag: 'Press',
    body: [
      { type: 'p', text: 'A few outlets played longer, story-enabled builds. We are summarizing their impressions in our own words; links are below.' },
      { type: 'h2', text: 'The tone is comedy-drama, not pure cozy calm' },
      { type: 'p', text: "PC Gamer's hands-on described a town of feuding supernatural families who can barely get through a chat without an argument, likening the vibe to a sitcom version of a reality show. The first few minutes reportedly include a hungover vampire patriarch passed out by your house, the werewolf mayor bickering with his brother over a bench, and a self-obsessed warlock flirting through constant interruptions." },
      { type: 'h2', text: 'The cast' },
      { type: 'p', text: 'Names that came up include Luna, a farming witch, and Orlock, a vampire family head written as a comedic, hard-drinking figure (which the reviewer felt was a slightly dated trope). A family of seers and a rogue love demon also featured, and the broader cast was described as endearingly flawed. A separate Next Fest write-up singled out Saga as a standout.' },
      { type: 'h2', text: 'How it plays' },
      { type: 'p', text: 'Reviewers confirmed there is no combat, even in the mines, so it stays cozy. A gamepad is recommended, though keyboard and mouse are supported. There is a small spellcasting mini-game for watering, energy-saving spells you unlock, and a shapeshift ability to cross town and reach hidden areas. The farm-sim fundamentals were called competent, with the verdict coming down to taste in art style and tone.' },
      { type: 'callout', text: 'Paraphrased from press hands-on previews — not our own first-hand review. Sources below.' },
    ],
    sources: [
      { label: 'PC Gamer — I played 6 hours of Moonlight Peaks', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Bonus Action — Steam Next Fest demos', url: 'https://bonus-action.com/guides/best-10-steam-next-fest-demos-that-wouldnt-let-me-go/' },
    ],
  },

  {
    slug: 'is-the-demo-worth-it',
    title: 'Is the Moonlight Peaks Demo Worth Playing?',
    dek: 'Who will love the demo, who might bounce off it, a few tips before you start, and what the full game adds on July 7.',
    date: 'June 2026', readTime: '4 min', tag: 'Verdict',
    body: [
      { type: 'p', text: 'Short version: if the art style and a cozy-with-an-edge tone appeal to you, the demo is an easy yes — it is free on Steam and Switch. Here is the nuance.' },
      { type: 'h2', text: 'You will probably love it if…' },
      { type: 'ul', items: [
        'You are here for aesthetics and atmosphere — the art and music are the most-praised parts.',
        'You enjoy decorating and slow hobby loops like fishing, flower arranging, and embroidery.',
        'You like character-driven, slightly chaotic comedy and romance.',
      ] },
      { type: 'h2', text: 'You might bounce off it if…' },
      { type: 'ul', items: [
        'You want fast, immediately rewarding progression — the opening pace is gentle and a little grindy.',
        'You tried the older farm-only demo and disliked being unable to explore — try the newer build instead.',
        'You want action; there is no combat by design.',
      ] },
      { type: 'h2', text: 'Tips before you start' },
      { type: 'ul', items: [
        'To plant, dig the soil with your shovel — this trips up a lot of newcomers.',
        'Seeds sit lower in the vendor list; look for the menu tabs.',
        'Use your watering spell to speed up crops, and manage your magic energy across the night.',
      ] },
      { type: 'h2', text: 'What the full game adds (July 7)' },
      { type: 'p', text: 'The demo is a slice. The full release opens up the town and its seven families, the romance system with around two dozen candidates, the Nokturna card game, more crops and potions, and the main story about reconciling the feuding families. Demo saves do not carry over.' },
      { type: 'callout', text: 'A decision guide based on public feedback and info, in our own words — not a first-hand review.' },
    ],
    sources: [
      { label: 'Steam — Moonlight Peaks store page', url: 'https://store.steampowered.com/app/2209900/' },
      { label: 'PC Gamer — hands-on preview', url: 'https://www.pcgamer.com/games/life-sim/moonlight-peaks-preview-impressions/' },
      { label: 'Official site', url: 'https://www.moonlightpeaks.com/' },
    ],
  },
];
