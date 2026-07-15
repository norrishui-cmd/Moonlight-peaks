// src/data/farm-crop-details-zh.ts
export type CropDetailZhHant = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsZhHant: Record<string, CropDetailZhHant> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: '田地作物',
    dek: '一種已確認的非魔法作物，5天成熟，春夏兩季均可種植，產量和售價資料齊全。',
    body: [
      '經官方wiki確認:Blood Grapes需要5天成熟，之後每4天再生一次，每次收穫3顆。每顆賣5金，種子售價20金。',
      'Blood Grapes在春季和夏季種植，不是魔法作物，用普通澆水壺就能澆灌。',
      'Blood Grapes是玩家開局就擁有的第一種作物，常在酒桶(Keg)加工成紅酒或Blood Grape果汁(4顆做1瓶紅酒，或3顆做1瓶果汁)。',
    ],
    faq: [
      { q: 'Blood Grapes要多久才能成熟?', a: '確認:首次收穫需5天，之後每4天再生一次。' },
      { q: 'Blood Grapes能做成什麼?', a: '確認:紅酒(4顆)或Blood Grape果汁(3顆)，都在酒桶製作。' },
    ],
  },
  'rice': {
    name: 'Rice(稻米)', category: '田地作物',
    dek: '一種已確認的非魔法作物，5天成熟，橫跨三個季節都能種植，售價資料齊全。',
    body: [
      '經官方wiki確認:Rice需要5天成熟，每次收穫1個。售價60金，種子售價30金。',
      'Rice在春季、夏季、秋季均可種植，是已確認的田地作物中種植視窗較長的一種。',
    ],
    faq: [
      { q: '月光峰的Rice要多久成熟?', a: '確認:5天，每次收穫1個，售價60金。' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: '田地作物(魔法)',
    dek: '一種已確認的魔法作物，需要往它的杯子裡倒滿水才能生長——不是常規澆水方式。',
    body: [
      '經官方wiki確認:Drikker是一種魔法作物，生長需求確實與眾不同——不是澆灌種植地塊，而是直接給它的杯子倒滿水才能生長。',
      '與所有魔法作物一樣，Drikker很可能也需要用Aquaflux法術才能進行這種互動，而不是普通澆水壺。',
    ],
    faq: [
      { q: '月光峰的Drikker怎麼種?', a: '確認:給它的杯子倒滿水，而不是像普通作物那樣澆灌周圍的土壤。' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: '田地作物(魔法)',
    dek: '一種已確認的魔法作物，生長需要餵魚或喂蟲子，而不是澆水。',
    body: [
      '經官方wiki確認，並與發售週報道交叉核實:Gobbler是一種魔法作物，需要餵食魚類或蟲子才能生長，而不是像普通作物那樣澆水。',
      '社群報告:每株植物想要的具體食物(魚還是蟲子)是隨機的，所以如果同時種了好幾株，兩種都備一些是比較穩妥的做法。',
    ],
    faq: [
      { q: '月光峰的Gobbler怎麼種?', a: '確認:餵它魚或蟲子，而不是澆水。社群報告:每株想要哪種食物會有所不同。' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: '田地作物(魔法)',
    dek: '一種已確認的魔法作物，能讓周圍的Weeping Wicca停止哭泣，把它們變成Sweet Wicca。',
    body: [
      '經官方wiki確認:Hold Me Close是一種魔法作物，對鄰近作物有個不同尋常的效果——能阻止附近的Weeping Wicca哭泣，這會讓那些Weeping Wicca變成Sweet Wicca。',
      '這使得Hold Me Close既是一種伴生種植作物，也是一種作物本身:它的主要價值可能在於它對鄰近Weeping Wicca地塊的作用，而不是它自己的收穫物。',
    ],
    faq: [
      { q: '月光峰的Hold Me Close有什麼作用?', a: '確認:能阻止附近的Weeping Wicca哭泣，把它們變成Sweet Wicca。' },
    ],
  },
  'mandrake': {
    name: 'Mandrake(曼德拉草)', category: '田地作物(魔法)',
    dek: '一種已確認的魔法作物，會根據附近是否有其他曼德拉草，長出憤怒版或開心版。',
    body: [
      '經官方wiki確認:Mandrake會長出憤怒版曼德拉草或開心版曼德拉草作為收穫物，具體是哪種取決於附近是否種了其他曼德拉草。',
      '這是一個真正需要考慮的種植佈局決策:把曼德拉草種在一起，還是分散開來，會持續影響你收穫到哪個版本。',
    ],
    faq: [
      { q: '為什麼我的Mandrake長成了憤怒版而不是開心版?', a: '確認:憤怒版/開心版的結果取決於附近是否種了其他曼德拉草——試著調整一下種植間距。' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: '田地作物(魔法)',
    dek: '一種已確認的魔法作物，會哭泣，自動澆灌周圍3x3範圍的田地。',
    body: [
      '經官方wiki確認:Weeping Wicca會哭泣，用魔法自動澆灌周圍3x3範圍的田地，使它成為一種真正的自動化作物，而不只是用來收穫的東西。',
      '把Weeping Wicca戰略性地種在一片地塊中間，可能會減少周圍作物所需的手動澆水量——不過要注意它與Hold Me Close的相互作用(後者會阻止它哭泣，進而大機率也會阻止這個澆灌效果，把它變成Sweet Wicca)。',
    ],
    faq: [
      { q: '月光峰的Weeping Wicca有什麼作用?', a: '確認:會哭泣，用魔法自動澆灌周圍3x3範圍的田地。把Hold Me Close種在附近會阻止它哭泣，把它變成Sweet Wicca。' },
    ],
  },
  'instant-growth-mushrooms': {
    name: '瞬間生長蘑菇組', category: '田地作物群組',
    dek: '確認:6種蘑菇類作物共享同樣的瞬間生長與擴散機制。',
    body: [
      '經官方wiki確認:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom和Amanita共享完全相同的機制——每一種被澆水後都會瞬間長成，而且一旦完全長成後再澆一次水，還會擴散到周圍的地塊。',
      '這讓蘑菇這個族群成為月光峰作物中真正的異類:你不需要等上好幾天才能收穫，一旦最初的幾株成熟，只需一次澆水就能有效地讓一片蘑菇地在整塊農田上倍增。',
    ],
    faq: [
      { q: '月光峰哪些蘑菇能瞬間長成?', a: '確認:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom和Amanita都能在澆水後瞬間長成，長成後再澆水會擴散到周圍地塊。' },
    ],
  },
};
