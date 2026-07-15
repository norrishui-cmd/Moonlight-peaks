export type SpellcastingSection = {
  title: string;
  slug: string;
  spells: SpellcastingSpell[];
};

export type SpellcastingSpell = {
  slug: string;
  name: string;
  description: string;
  manaCost: string;
  buyPrice: string;
  icon?: string;
};

const icon = (slug: string) => `/images/spellcasting/${slug}.png`;

export const spellcastingSections: SpellcastingSection[] = [
  {
    title: 'Normal Spells',
    slug: 'normal-spells',
    spells: [
      {
        slug: 'hoisthaven',
        name: 'Hoisthaven',
        description: 'Magically move a building.',
        manaCost: '3 Mana',
        buyPrice: '-',
        icon: icon('hoisthaven'),
      },
      {
        slug: 'refilliarmus',
        name: 'Refilliarmus',
        description: 'Instantly refill your watering can.',
        manaCost: '0 Mana',
        buyPrice: '2,000 Coin',
        icon: icon('refilliarmus'),
      },
      {
        slug: 'tomorrows-tears',
        name: "Tomorrow's Tears",
        description: 'Make it rain the next night.',
        manaCost: '3 Mana',
        buyPrice: '4,000 Coin',
        icon: icon('tomorrows-tears'),
      },
    ],
  },
  {
    title: 'Tiered Spells',
    slug: 'tiered-spells',
    spells: [
      {
        slug: 'arborascend-i',
        name: 'Arborascend I',
        description: 'Magically move 1 tree.',
        manaCost: '2 Mana',
        buyPrice: '1,200 Coin',
        icon: icon('arborascend-i'),
      },
      {
        slug: 'arborascend-ii',
        name: 'Arborascend II',
        description: 'Magically move 5 trees.',
        manaCost: '2 Mana',
        buyPrice: '5,000 Coin',
        icon: icon('arborascend-ii'),
      },
      {
        slug: 'arborascend-iii',
        name: 'Arborascend III',
        description: 'Magically move 10 trees.',
        manaCost: '2 Mana',
        buyPrice: '25,000 Coin',
        icon: icon('arborascend-iii'),
      },
      {
        slug: 'aquaflux-i',
        name: 'Aquaflux I',
        description: 'Summon a watering can that can water up to 16 crops.',
        manaCost: '1 Mana',
        buyPrice: '-',
        icon: icon('aquaflux-i'),
      },
      {
        slug: 'aquaflux-ii',
        name: 'Aquaflux II',
        description: 'Summon a watering can that can water up to - crops.',
        manaCost: '1 Mana',
        buyPrice: '-',
        icon: icon('aquaflux-ii'),
      },
      {
        slug: 'aquaflux-iii',
        name: 'Aquaflux III',
        description: 'Summon a watering can that can water up to 144 crops.',
        manaCost: '1 Mana',
        buyPrice: '40,000 Coin',
        icon: icon('aquaflux-iii'),
      },
      {
        slug: 'ethereal-hands-i',
        name: 'Ethereal Hands I',
        description: 'Summon helping hands that together can harvest up to 32 crops.',
        manaCost: '1 Mana',
        buyPrice: '1,400 Coin',
        icon: icon('ethereal-hands-i'),
      },
      {
        slug: 'ethereal-hands-ii',
        name: 'Ethereal Hands II',
        description: 'Summon helping hands that together can harvest up to 64 crops.',
        manaCost: '1 Mana',
        buyPrice: '10,000 Coin',
        icon: icon('ethereal-hands-ii'),
      },
      {
        slug: 'ethereal-hands-iii',
        name: 'Ethereal Hands III',
        description: 'Summon helping hands that together can harvest up to 128 crops.',
        manaCost: '1 Mana',
        buyPrice: '28,000 Coin',
        icon: icon('ethereal-hands-iii'),
      },
      {
        slug: 'metamorphosia-i',
        name: 'Metamorphosia I',
        description: 'Transform 1 crop into another random crop.',
        manaCost: '3 Mana',
        buyPrice: '1,600 Coin',
        icon: icon('metamorphosia-i'),
      },
      {
        slug: 'metamorphosia-ii',
        name: 'Metamorphosia II',
        description: 'Transform 2 by 2 area of crops into other random crops.',
        manaCost: '3 Mana',
        buyPrice: '7,000 Coin',
        icon: icon('metamorphosia-ii'),
      },
      {
        slug: 'metamorphosia-iii',
        name: 'Metamorphosia III',
        description: 'Transform 3 by 3 area of crops into other random crops.',
        manaCost: '3 Mana',
        buyPrice: '32,000 Coin',
        icon: icon('metamorphosia-iii'),
      },
      {
        slug: 'maturio-i',
        name: 'Maturio I',
        description: 'Instantly grow crops to maturity in a 1 by 1 area.',
        manaCost: '2 Mana',
        buyPrice: '2,000 Coin',
      },
      {
        slug: 'maturio-ii',
        name: 'Maturio II',
        description: 'Instantly grow crops to maturity in a 2 by 2 area.',
        manaCost: '2 Mana',
        buyPrice: '10,000 Coin',
      },
      {
        slug: 'maturio-iii',
        name: 'Maturio III',
        description: 'Instantly grow crops to maturity in a 3 by 3 area.',
        manaCost: '2 Mana',
        buyPrice: '-',
      },
      {
        slug: 'ethereal-shovels-i',
        name: 'Ethereal Shovels I',
        description: 'Summon a shovel that can dig up to 32 spots.',
        manaCost: '1 Mana',
        buyPrice: '2,200 Coin',
        icon: icon('ethereal-shovels-i'),
      },
      {
        slug: 'ethereal-shovels-iii',
        name: 'Ethereal Shovels III',
        description: 'Summon a shovel that can dig up to 128 spots.',
        manaCost: '1 Mana',
        buyPrice: '30,000 Coin',
        icon: icon('ethereal-shovels-iii'),
      },
      {
        slug: 'ethereal-axes-i',
        name: 'Ethereal Axes I',
        description: 'Summon an axe that can chop up to 16 logs or trees.',
        manaCost: '2 Mana',
        buyPrice: '2,400 Coin',
        icon: icon('ethereal-axes-i'),
      },
      {
        slug: 'ethereal-axes-ii',
        name: 'Ethereal Axes II',
        description: 'Summon axes that can chop up to - logs or trees.',
        manaCost: '2 Mana',
        buyPrice: '12,000 Coin',
        icon: icon('ethereal-axes-ii'),
      },
      {
        slug: 'ethereal-axes-iii',
        name: 'Ethereal Axes III',
        description: 'Summon an axe that can chop up to 48 logs or trees.',
        manaCost: '2 Mana',
        buyPrice: '34,000 Coin',
        icon: icon('ethereal-axes-iii'),
      },
      {
        slug: 'ethereal-pickaxes-i',
        name: 'Ethereal Pickaxes I',
        description: 'Summon a pickaxe that can crush up to 16 rocks.',
        manaCost: '2 Mana',
        buyPrice: '2,600 Coin',
        icon: icon('ethereal-pickaxes-i'),
      },
      {
        slug: 'ethereal-pickaxes-ii',
        name: 'Ethereal Pickaxes II',
        description: 'Summon pickaxe that can crush up to - rocks.',
        manaCost: '2 Mana',
        buyPrice: '13,000 Coin',
        icon: icon('ethereal-pickaxes-ii'),
      },
      {
        slug: 'ethereal-pickaxes-iii',
        name: 'Ethereal Pickaxes III',
        description: 'Summon pickaxes that can crush up to 48 rocks.',
        manaCost: '2 Mana',
        buyPrice: '40,000 Coin',
        icon: icon('ethereal-pickaxes-iii'),
      },
    ],
  },
];

export const spellcastingSpells = spellcastingSections.flatMap((section) => section.spells);
