// src/data/farm-crop-details.ts
// Detail content for crops with genuinely distinctive mechanics — kept in a separate module so
// getStaticPaths (which Astro extracts into its own build-time bundle) always has access to it.
export type CropDetail = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetails: Record<string, CropDetail> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: 'Farmland crop',
    dek: 'A confirmed 5-day, non-magical Spring/Summer crop with exact yield and price data.',
    body: [
      'Confirmed via the official wiki: Blood Grapes take 5 days to harvest and regrow every 4 days after that, yielding 3 grapes per harvest. Each grape sells for 5 gold, and seeds cost 20 gold.',
      'Blood Grapes are grown in Spring and Summer, and are not a magical crop, so a regular watering can works fine on them.',
      'Blood Grapes are the first crop players start with, and are commonly processed into Red Wine or Blood Grape Juice at a Keg (4 Blood Grapes for 1 Red Wine, or 3 for 1 juice).',
    ],
    faq: [
      { q: 'How long do Blood Grapes take to grow?', a: 'Confirmed: 5 days for the first harvest, then every 4 days after that.' },
      { q: 'What can you make with Blood Grapes?', a: 'Confirmed: Red Wine (4 grapes) or Blood Grape Juice (3 grapes), both made at a Keg.' },
    ],
  },
  'rice': {
    name: 'Rice', category: 'Farmland crop',
    dek: 'A confirmed 5-day, non-magical crop that grows across three seasons with real sell data.',
    body: [
      'Confirmed via the official wiki: Rice takes 5 days to harvest, yielding 1 per harvest. It sells for 60 gold, with seeds costing 30 gold.',
      'Rice grows in Spring, Summer, and Autumn, giving it one of the longer growing windows among confirmed farmland crops.',
    ],
    faq: [
      { q: 'How long does Rice take to grow in Moonlight Peaks?', a: 'Confirmed: 5 days, yielding 1 per harvest, selling for 60 gold.' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: 'Farmland crop (magical)',
    dek: 'A magical crop confirmed to need its cup filled with water — not standard watering — to grow.',
    body: [
      'Confirmed via the official wiki: Drikker is a magical crop with a genuinely distinct growing requirement — rather than watering the tile it\u2019s planted on, you fill its cup with water directly for it to grow.',
      'Like all magical crops, Drikker likely requires the Aquaflux spell to interact with in this way rather than a regular watering can, though the official wiki doesn\u2019t spell out the exact tool requirement beyond "fill its cup."',
    ],
    faq: [
      { q: 'How do you grow Drikker in Moonlight Peaks?', a: 'Confirmed: fill its cup with water, rather than watering the ground around it like a normal crop.' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: 'Farmland crop (magical)',
    dek: 'A magical crop confirmed to require feeding it fish or critters, not water, to grow.',
    body: [
      'Confirmed via the official wiki and cross-checked against launch-week coverage: Gobbler is a magical crop that needs to be fed fish or critters in order to grow, rather than watered like a normal crop.',
      'Community-reported: which specific item it wants (a fish or a critter) is random per plant, so keeping a stock of both on hand is the safe approach if you\u2019re growing several at once.',
    ],
    faq: [
      { q: 'How do you grow Gobbler in Moonlight Peaks?', a: 'Confirmed: feed it fish or critters rather than watering it. Community-reported: which one it wants varies per plant.' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: 'Farmland crop (magical)',
    dek: 'A magical crop confirmed to stop nearby Weeping Wiccas from crying, turning them into Sweet Wiccas.',
    body: [
      'Confirmed via the official wiki: Hold Me Close is a magical crop with an unusual effect on its neighbors — it prevents nearby Weeping Wiccas from crying, which turns those Weeping Wiccas into Sweet Wiccas instead.',
      'This makes Hold Me Close a companion-planting crop as much as a crop in its own right: its main value may be in what it does to a neighboring Weeping Wicca patch rather than its own harvest.',
    ],
    faq: [
      { q: 'What does Hold Me Close do in Moonlight Peaks?', a: 'Confirmed: it stops nearby Weeping Wiccas from crying, turning them into Sweet Wiccas instead.' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: 'Farmland crop (magical)',
    dek: 'A magical crop confirmed to produce an Angry or Happy variant depending on nearby mandrakes.',
    body: [
      'Confirmed via the official wiki: Mandrake produces either an Angry Mandrake or a Happy Mandrake as its harvest, and which one you get depends on whether other mandrakes are planted nearby.',
      'This is a genuine planting-layout decision: clustering mandrakes together versus spacing them out will change which variant you consistently harvest.',
    ],
    faq: [
      { q: 'Why did my Mandrake turn out Angry instead of Happy?', a: 'Confirmed: the Angry/Happy outcome depends on whether other mandrakes are planted nearby \u2014 try adjusting your spacing.' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: 'Farmland crop (magical)',
    dek: 'A magical crop confirmed to cry and auto-water a 3x3 patch of farmland around it.',
    body: [
      'Confirmed via the official wiki: Weeping Wicca cries to magically water a 3x3 patch of farmland around it, making it a genuine automation crop rather than just something to harvest.',
      'Planting Weeping Wicca strategically in the middle of a plot could reduce how much manual watering the surrounding crops need \u2014 though note its interaction with Hold Me Close (which stops the crying, and with it presumably this watering effect, turning it into a Sweet Wicca instead).',
    ],
    faq: [
      { q: 'What does Weeping Wicca do in Moonlight Peaks?', a: 'Confirmed: it cries to magically water a 3x3 patch of farmland around it. Placing Hold Me Close nearby stops the crying and turns it into a Sweet Wicca instead.' },
    ],
  },
  'instant-growth-mushrooms': {
    name: 'Instant-Growth Mushrooms', category: 'Farmland crop group',
    dek: 'Confirmed: six mushroom-type crops share the same instant-growth-and-spread mechanic.',
    body: [
      'Confirmed via the official wiki: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, and Amanita all share the exact same mechanic \u2014 each grows instantly when watered, and spreads to neighboring farmland if watered again once fully grown.',
      'This makes the mushroom family a genuine outlier among Moonlight Peaks crops: instead of waiting days for a harvest, you can effectively multiply a mushroom patch across your farmland in a single watering session once the first ones are mature.',
    ],
    faq: [
      { q: 'Which mushrooms grow instantly in Moonlight Peaks?', a: 'Confirmed: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, and Amanita all grow instantly when watered and spread to neighboring tiles if watered again once grown.' },
    ],
  },
};
