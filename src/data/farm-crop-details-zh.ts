// src/data/farm-crop-details-zh.ts
export type CropDetailZh = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsZh: Record<string, CropDetailZh> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: '田地作物',
    dek: '一种已确认的非魔法作物，5天成熟，春夏两季均可种植，产量和售价数据齐全。',
    body: [
      '经官方wiki确认:Blood Grapes需要5天成熟，之后每4天再生一次，每次收获3颗。每颗卖5金，种子售价20金。',
      'Blood Grapes在春季和夏季种植，不是魔法作物，用普通浇水壶就能浇灌。',
      'Blood Grapes是玩家开局就拥有的第一种作物，常在酒桶(Keg)加工成红酒或Blood Grape果汁(4颗做1瓶红酒，或3颗做1瓶果汁)。',
    ],
    faq: [
      { q: 'Blood Grapes要多久才能成熟?', a: '确认:首次收获需5天，之后每4天再生一次。' },
      { q: 'Blood Grapes能做成什么?', a: '确认:红酒(4颗)或Blood Grape果汁(3颗)，都在酒桶制作。' },
    ],
  },
  'rice': {
    name: 'Rice(稻米)', category: '田地作物',
    dek: '一种已确认的非魔法作物，5天成熟，横跨三个季节都能种植，售价数据齐全。',
    body: [
      '经官方wiki确认:Rice需要5天成熟，每次收获1个。售价60金，种子售价30金。',
      'Rice在春季、夏季、秋季均可种植，是已确认的田地作物中种植窗口较长的一种。',
    ],
    faq: [
      { q: '月光峰的Rice要多久成熟?', a: '确认:5天，每次收获1个，售价60金。' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: '田地作物(魔法)',
    dek: '一种已确认的魔法作物，需要往它的杯子里倒满水才能生长——不是常规浇水方式。',
    body: [
      '经官方wiki确认:Drikker是一种魔法作物，生长需求确实与众不同——不是浇灌种植地块，而是直接给它的杯子倒满水才能生长。',
      '与所有魔法作物一样，Drikker很可能也需要用Aquaflux法术才能进行这种互动，而不是普通浇水壶。',
    ],
    faq: [
      { q: '月光峰的Drikker怎么种?', a: '确认:给它的杯子倒满水，而不是像普通作物那样浇灌周围的土壤。' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: '田地作物(魔法)',
    dek: '一种已确认的魔法作物，生长需要喂鱼或喂虫子，而不是浇水。',
    body: [
      '经官方wiki确认，并与发售周报道交叉核实:Gobbler是一种魔法作物，需要喂食鱼类或虫子才能生长，而不是像普通作物那样浇水。',
      '社区报告:每株植物想要的具体食物(鱼还是虫子)是随机的，所以如果同时种了好几株，两种都备一些是比较稳妥的做法。',
    ],
    faq: [
      { q: '月光峰的Gobbler怎么种?', a: '确认:喂它鱼或虫子，而不是浇水。社区报告:每株想要哪种食物会有所不同。' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: '田地作物(魔法)',
    dek: '一种已确认的魔法作物，能让周围的Weeping Wicca停止哭泣，把它们变成Sweet Wicca。',
    body: [
      '经官方wiki确认:Hold Me Close是一种魔法作物，对邻近作物有个不同寻常的效果——能阻止附近的Weeping Wicca哭泣，这会让那些Weeping Wicca变成Sweet Wicca。',
      '这使得Hold Me Close既是一种伴生种植作物，也是一种作物本身:它的主要价值可能在于它对邻近Weeping Wicca地块的作用，而不是它自己的收获物。',
    ],
    faq: [
      { q: '月光峰的Hold Me Close有什么作用?', a: '确认:能阻止附近的Weeping Wicca哭泣，把它们变成Sweet Wicca。' },
    ],
  },
  'mandrake': {
    name: 'Mandrake(曼德拉草)', category: '田地作物(魔法)',
    dek: '一种已确认的魔法作物，会根据附近是否有其他曼德拉草，长出愤怒版或开心版。',
    body: [
      '经官方wiki确认:Mandrake会长出愤怒版曼德拉草或开心版曼德拉草作为收获物，具体是哪种取决于附近是否种了其他曼德拉草。',
      '这是一个真正需要考虑的种植布局决策:把曼德拉草种在一起，还是分散开来，会持续影响你收获到哪个版本。',
    ],
    faq: [
      { q: '为什么我的Mandrake长成了愤怒版而不是开心版?', a: '确认:愤怒版/开心版的结果取决于附近是否种了其他曼德拉草——试着调整一下种植间距。' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: '田地作物(魔法)',
    dek: '一种已确认的魔法作物，会哭泣，自动浇灌周围3x3范围的田地。',
    body: [
      '经官方wiki确认:Weeping Wicca会哭泣，用魔法自动浇灌周围3x3范围的田地，使它成为一种真正的自动化作物，而不只是用来收获的东西。',
      '把Weeping Wicca战略性地种在一片地块中间，可能会减少周围作物所需的手动浇水量——不过要注意它与Hold Me Close的相互作用(后者会阻止它哭泣，进而大概率也会阻止这个浇灌效果，把它变成Sweet Wicca)。',
    ],
    faq: [
      { q: '月光峰的Weeping Wicca有什么作用?', a: '确认:会哭泣，用魔法自动浇灌周围3x3范围的田地。把Hold Me Close种在附近会阻止它哭泣，把它变成Sweet Wicca。' },
    ],
  },
  'instant-growth-mushrooms': {
    name: '瞬间生长蘑菇组', category: '田地作物群组',
    dek: '确认:6种蘑菇类作物共享同样的瞬间生长与扩散机制。',
    body: [
      '经官方wiki确认:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom和Amanita共享完全相同的机制——每一种被浇水后都会瞬间长成，而且一旦完全长成后再浇一次水，还会扩散到周围的地块。',
      '这让蘑菇这个族群成为月光峰作物中真正的异类:你不需要等上好几天才能收获，一旦最初的几株成熟，只需一次浇水就能有效地让一片蘑菇地在整块农田上倍增。',
    ],
    faq: [
      { q: '月光峰哪些蘑菇能瞬间长成?', a: '确认:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom和Amanita都能在浇水后瞬间长成，长成后再浇水会扩散到周围地块。' },
    ],
  },
};
