const forageIcon = (slug: string, name: string) => `image:/images/items/foraging/${slug}.png|${name} icon`;

const forage = (
  slug: string,
  name: string,
  location: string,
  baseSellPrice: string,
  oneStarSellPrice: string,
): string[] => [forageIcon(slug, name), name, location, baseSellPrice, oneStarSellPrice];

export const foragingItemRows: string[][] = [
  forage('eggplant', 'Eggplant', 'Moonlit Pines', '90', '110'),
  forage('wild-potato', 'Wild Potato', 'Moonlit Pines', '20', '25'),
  forage('sugarbones', 'Sugarbones', 'Howling Marshes', '30', 'Not yet confirmed'),
  forage('common-mushroom', 'Common Mushroom', 'Cave of Echoes; Farm (Summer)', '10', '11'),
  forage('glowglammer', 'Glowglammer', 'Crystal Cave', '20', '25'),
  forage('white-conch-small', 'White Conch (Small)', 'Beaches', '10', 'Not yet confirmed'),
  forage('pink-conch-small', 'Pink Conch (Small)', 'Beaches', '10', 'Not yet confirmed'),
  forage('white-conch-large', 'White Conch (Large)', 'Beaches', '30', 'Not yet confirmed'),
  forage('pink-conch-large', 'Pink Conch (Large)', 'Beaches', '30', 'Not yet confirmed'),
  forage('blue-clam', 'Blue Clam', 'Beaches', '10', 'Not yet confirmed'),
  forage('maxima-clam', 'Maxima Clam', 'Beaches', '30', 'Not yet confirmed'),
];
