const blueprintIcon = (slug: string, name: string) => `image:/images/blueprints/${slug}.png|${name} blueprint icon`;

const blueprint = (
  slug: string,
  name: string,
  obtainedBy: string,
  buyPrice: string,
  sellPrice: string,
): string[] => [blueprintIcon(slug, name), name, obtainedBy, buyPrice, sellPrice];

export const craftingBlueprintRows: string[][] = [
  blueprint('ambrosia', 'Ambrosia', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('antiques', 'Antiques', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('bush', 'Bush', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('comfy-couch', 'Comfy Couch', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('festival', 'Festival', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('flowerbeds', 'Flowerbeds', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('flower-cauldron', 'Flower Cauldron', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('flowerpots', 'Flowerpots', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('grave', 'Grave', 'Location Name', 'X Coin', 'X Coin'),
  blueprint('kitchen-set', 'Kitchen Set', 'Coffee & Coffins', '2,500 Coin', 'X Coin'),
  blueprint('lantern', 'Lantern', 'Location Name', 'X Coin', 'X Coin'),
];
