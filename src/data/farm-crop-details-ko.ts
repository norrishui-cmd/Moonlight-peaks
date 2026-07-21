// src/data/farm-crop-details-ko.ts
export type CropDetailKo = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsKo: Record<string, CropDetailKo> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: '농지 작물',
    dek: '확인된 5일 성장, 비마법 봄/여름 작물로, 정확한 수확량과 가격 데이터가 있습니다.',
    body: [
      '공식 위키로 확인됨: Blood Grapes는 수확까지 5일이 걸리고 이후 4일마다 재성장하며, 수확당 3개의 포도를 줍니다. 포도 하나는 5골드에 팔리고, 씨앗은 20골드입니다.',
      'Blood Grapes는 봄과 여름에 자라며 마법 작물이 아니므로 일반 물뿌리개로도 문제없이 키울 수 있습니다.',
      'Blood Grapes는 플레이어가 처음 가지고 시작하는 작물이며, 통(Keg)에서 레드 와인이나 Blood Grape 주스로 흔히 가공됩니다(포도 4개로 와인 1개, 또는 3개로 주스 1개).',
    ],
    faq: [
      { q: 'Blood Grapes는 자라는 데 얼마나 걸리나요?', a: '확인됨: 첫 수확까지 5일, 이후 4일마다.' },
      { q: 'Blood Grapes로 무엇을 만들 수 있나요?', a: '확인됨: 레드 와인(포도 4개) 또는 Blood Grape 주스(포도 3개), 둘 다 통에서 제작됩니다.' },
    ],
  },
  'rice': {
    name: '쌀', category: '농지 작물',
    dek: '확인된 5일 성장, 비마법 작물로, 세 계절에 걸쳐 자라며 실제 판매 데이터가 있습니다.',
    body: [
      '공식 위키로 확인됨: 쌀은 수확까지 5일이 걸리며 수확당 1개를 줍니다. 60골드에 팔리고, 씨앗은 30골드입니다.',
      '쌀은 봄, 여름, 가을에 자라며 확인된 농지 작물 중 재배 가능 기간이 긴 편에 속합니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 쌀은 자라는 데 얼마나 걸리나요?', a: '확인됨: 5일, 수확당 1개, 60골드에 판매됩니다.' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: '농지 작물 (마법)',
    dek: '표준 물주기가 아니라 컵을 물로 채워야 자라는 것으로 확인된 마법 작물입니다.',
    body: [
      '공식 위키로 확인됨: Drikker는 정말로 독특한 성장 조건을 가진 마법 작물입니다 — 심어진 칸에 물을 주는 대신, 직접 그 컵을 물로 채워야 자랍니다.',
      '모든 마법 작물과 마찬가지로 일반 물뿌리개가 아니라 Aquaflux 주문이 필요할 가능성이 높지만, 공식 위키는 "컵 채우기" 이상으로 정확한 도구 요구 사항을 명시하지 않았습니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 Drikker는 어떻게 키우나요?', a: '확인됨: 일반 작물처럼 주변 땅에 물을 주는 대신 컵을 물로 채우세요.' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: '농지 작물 (마법)',
    dek: '물이 아니라 물고기나 작은 생물을 먹여야 자라는 것으로 확인된 마법 작물입니다.',
    body: [
      '공식 위키로 확인되고 출시 주간 보도와 교차 확인됨: Gobbler는 일반 작물처럼 물을 주는 대신 물고기나 작은 생물을 먹여야 자라는 마법 작물입니다.',
      '커뮤니티 제보: 어떤 아이템(물고기 또는 작은 생물)을 원하는지는 식물마다 무작위이므로, 여러 개를 동시에 키운다면 둘 다 비축해 두는 것이 안전합니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 Gobbler는 어떻게 키우나요?', a: '확인됨: 물을 주는 대신 물고기나 작은 생물을 먹이세요. 커뮤니티 제보: 어떤 것을 원하는지는 식물마다 다릅니다.' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: '농지 작물 (마법)',
    dek: '주변 Weeping Wicca가 우는 것을 막아 Sweet Wicca로 바꾸는 것으로 확인된 마법 작물입니다.',
    body: [
      '공식 위키로 확인됨: Hold Me Close는 이웃에게 특이한 영향을 미치는 마법 작물입니다 — 주변 Weeping Wicca가 우는 것을 막아, 그 Weeping Wicca를 Sweet Wicca로 바꿉니다.',
      '이는 Hold Me Close를 독립적인 작물이자 동반 재배 작물로 만듭니다: 주요 가치는 자신의 수확보다 이웃한 Weeping Wicca 밭에 미치는 영향에 있을 수 있습니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 Hold Me Close는 무엇을 하나요?', a: '확인됨: 주변 Weeping Wicca가 우는 것을 막아 대신 Sweet Wicca로 바꿉니다.' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: '농지 작물 (마법)',
    dek: '주변 Mandrake에 따라 화난 버전 또는 행복한 버전을 만드는 것으로 확인된 마법 작물입니다.',
    body: [
      '공식 위키로 확인됨: Mandrake는 수확물로 화난 Mandrake 또는 행복한 Mandrake 중 하나를 만들며, 어느 쪽이 나오는지는 근처에 다른 Mandrake가 심어져 있는지에 달려 있습니다.',
      '이는 실질적인 배치 결정입니다: Mandrake를 모아 심는 것과 떨어뜨려 심는 것은 일관되게 어떤 버전을 수확하는지를 바꿉니다.',
    ],
    faq: [
      { q: '왜 제 Mandrake가 행복하지 않고 화가 났나요?', a: '확인됨: 화남/행복 결과는 근처에 다른 Mandrake가 심어져 있는지에 달려 있습니다 — 간격을 조정해 보세요.' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: '농지 작물 (마법)',
    dek: '울면서 주변 3x3 농지를 자동으로 물 주는 것으로 확인된 마법 작물입니다.',
    body: [
      '공식 위키로 확인됨: Weeping Wicca는 울어서 주변 3x3 농지에 마법으로 물을 주며, 단순히 수확하는 작물이 아니라 진짜 자동화 작물입니다.',
      '밭 한가운데에 전략적으로 Weeping Wicca를 심으면 주변 작물에 필요한 수동 물주기를 줄일 수 있습니다 — 다만 Hold Me Close와의 상호작용(우는 것을 멈추고, 아마 그와 함께 이 물주기 효과도 멈추면서 Sweet Wicca로 바꿈)에 유의하세요.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 Weeping Wicca는 무엇을 하나요?', a: '확인됨: 울어서 주변 3x3 농지에 마법으로 물을 줍니다. 근처에 Hold Me Close를 두면 우는 것을 멈추고 대신 Sweet Wicca로 바뀝니다.' },
    ],
  },
  'instant-growth-mushrooms': {
    name: '즉시 성장 버섯', category: '농지 작물 그룹',
    dek: '확인됨: 여섯 가지 버섯류 작물이 같은 즉시 성장 및 확산 메커니즘을 공유합니다.',
    body: [
      '공식 위키로 확인됨: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, Amanita는 모두 정확히 같은 메커니즘을 공유합니다 — 물을 주면 즉시 자라며, 완전히 자란 후 다시 물을 주면 주변 농지로 확산됩니다.',
      '이는 버섯 계열을 Moonlight Peaks 작물 중 진정한 예외로 만듭니다: 수확까지 며칠을 기다리는 대신, 첫 버섯이 다 자란 후 단 한 번의 물주기 세션으로 밭 전체에 버섯 밭을 효과적으로 늘릴 수 있습니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 어떤 버섯이 즉시 자라나요?', a: '확인됨: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, Amanita는 모두 물을 주면 즉시 자라고, 다 자란 후 다시 물을 주면 주변 칸으로 확산됩니다.' },
    ],
  },
};
