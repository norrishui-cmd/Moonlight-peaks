const coinUnknown = 'X Coin';

const toolIcon = (slug: string, name: string) => `image:/images/tools/${slug}.png|${name} icon`;

const tool = (
  icon: string,
  name: string,
  description: string,
  obtainedBy: string,
  buyPrice: string,
  sellPrice: string,
): string[] => [icon, name, description, obtainedBy, buyPrice, sellPrice];

export const toolItemRows: string[][] = [
  tool(toolIcon('rusty-shovel', 'Rusty Shovel'), 'Rusty Shovel', '-', 'Starting Tool', coinUnknown, coinUnknown),
  tool(toolIcon('copper-shovel', 'Copper Shovel'), 'Copper Shovel', '-', 'Howling Hammer', coinUnknown, coinUnknown),
  tool('File:Icon Shovel Steel.png', 'Iron Shovel', '-', 'Howling Hammer', coinUnknown, coinUnknown),
  tool(toolIcon('gold-shovel', 'Gold Shovel'), 'Gold Shovel', '-', 'Howling Hammer', coinUnknown, coinUnknown),
  tool(toolIcon('enchanted-shovel', 'Enchanted Shovel'), 'Enchanted Shovel', '-', 'Location Name', coinUnknown, coinUnknown),

  tool(toolIcon('rusty-watering-can', 'Rusty Watering Can'), 'Rusty Watering Can', '-', 'Starting Tool', coinUnknown, coinUnknown),
  tool(toolIcon('copper-watering-can', 'Copper Watering Can'), 'Copper Watering Can', '-', 'Howling Hammer', '1,000 Coin', coinUnknown),
  tool(toolIcon('iron-watering-can', 'Iron Watering Can'), 'Iron Watering Can', '-', 'Howling Hammer', '4,000 Coin', coinUnknown),
  tool(toolIcon('gold-watering-can', 'Gold Watering Can'), 'Gold Watering Can', '-', 'Howling Hammer', '16,000 Coin', coinUnknown),
  tool(toolIcon('enchanted-watering-can', 'Enchanted Watering Can'), 'Enchanted Watering Can', '-', 'Location Name', coinUnknown, coinUnknown),

  tool(toolIcon('rusty-axe', 'Rusty Axe'), 'Rusty Axe', '-', 'Starting Tool', coinUnknown, coinUnknown),
  tool(toolIcon('copper-axe', 'Copper Axe'), 'Copper Axe', '-', 'Howling Hammer', '1,000 Coin', coinUnknown),
  tool(toolIcon('iron-axe', 'Iron Axe'), 'Iron Axe', '-', 'Howling Hammer', '4,000 Coin', coinUnknown),
  tool(toolIcon('gold-axe', 'Gold Axe'), 'Gold Axe', '-', 'Howling Hammer', '16,000 Coin', coinUnknown),
  tool(toolIcon('enchanted-axe', 'Enchanted Axe'), 'Enchanted Axe', '-', 'Location Name', coinUnknown, coinUnknown),

  tool(toolIcon('fishing-rod', 'Fishing Rod'), 'Fishing Rod', '-', 'Noel Quest', coinUnknown, coinUnknown),
  tool(toolIcon('silver-fishing-rod', '- Fishing Rod'), '- Fishing Rod', '-', 'Location Name', coinUnknown, coinUnknown),
  tool('File:Icon FishingRod Gold.png', 'Premium Fishing Rod', '-', 'Howling Hammer', '16,000 Coin', coinUnknown),
  tool(toolIcon('enchanted-fishing-rod', 'Enchanted Fishing Rod'), 'Enchanted Fishing Rod', '-', 'Location Name', coinUnknown, coinUnknown),

  tool(toolIcon('wand', 'Wand'), 'Wand', '-', 'Location Name', coinUnknown, coinUnknown),
  tool(toolIcon('wand-taped', 'Wand (taped)'), 'Wand (taped)', '-', 'Location Name', coinUnknown, coinUnknown),
  tool(toolIcon('wand-broken', 'Wand (broken)'), 'Wand (broken)', '-', 'Starting Tool', coinUnknown, coinUnknown),

  tool(toolIcon('rusty-pickaxe', 'Rusty Pickaxe'), 'Rusty Pickaxe', '-', 'Starting Tool', coinUnknown, coinUnknown),
  tool('File:Icon Pickaxe Bronze.png', 'Copper Pickaxe', '-', 'Howling Hammer', '1,000 Coin', coinUnknown),
  tool(toolIcon('iron-pickaxe', 'Iron Pickaxe'), 'Iron Pickaxe', '-', 'Howling Hammer', '4,000 Coin', coinUnknown),
  tool(toolIcon('gold-pickaxe', 'Gold Pickaxe'), 'Gold Pickaxe', '-', 'Howling Hammer', '16,000 Coin', coinUnknown),
  tool(toolIcon('enchanted-pickaxe', 'Enchanted Pickaxe'), 'Enchanted Pickaxe', '-', 'Location Name', coinUnknown, coinUnknown),

  tool(toolIcon('rusty-scythe', 'Rusty Scythe'), 'Rusty Scythe', '-', 'Starting Tool', coinUnknown, coinUnknown),
  tool(toolIcon('copper-scythe', 'Copper Scythe'), 'Copper Scythe', '-', 'Howling Hammer', '1,000 Coin', coinUnknown),
  tool(toolIcon('iron-scythe', 'Iron Scythe'), 'Iron Scythe', '-', 'Howling Hammer', '4,000 Coin', coinUnknown),
  tool(toolIcon('gold-scythe', 'Gold Scythe'), 'Gold Scythe', '-', 'Location Name', coinUnknown, coinUnknown),
  tool(toolIcon('enchanted-scythe', 'Enchanted Scythe'), 'Enchanted Scythe', '-', 'Location Name', coinUnknown, coinUnknown),
];
