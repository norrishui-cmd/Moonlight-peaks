// src/i18n/locations-ko.ts
// Korean translations for locations.ts entries (title/dek/body/sections/faq text only).
// slug/tag/status/image/related href are shared from data/locations.ts.
export type LocationTrKo = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsKo: Record<string, LocationTrKo> = {
  town: {
    title: '마을', dek: '일곱 초자연적 가문의 마법 산악 마을로, 여러분은 이곳에서 뱀파이어로서 새 삶을 시작합니다.',
    body: [
      'Moonlight Peaks는 수 세기 동안 일곱 가문의 고향이었던 작은 마법 산악 마을을 배경으로 합니다. 여러분은 대도시를 떠나온 젊은 뱀파이어로 도착합니다.',
      '마을은 아늑한 마을 생활과 초자연적인 요소를 섞어 놓았습니다 — 이웃들은 늑대인간, 마녀, 인어 등이며, 그들을 알아가는 것이 게임의 큰 부분입니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks는 어디를 배경으로 하나요?', a: '일곱 초자연적 가문의 고향인 작은 마법 산악 마을입니다.' },
      { q: 'Moonlight Peaks의 이웃들은 누구인가요?', a: '확인됨: 일곱 가문에 걸친 늑대인간, 마녀, 인어, 기타 초자연적 주민들 — 그들을 알아가는 것이 게임의 핵심 요소입니다.' },
    ],
  },
  'town-square': {
    title: '마을 광장', dek: '주민들이 모이고 계절 행사가 열리는 마을의 공동체 중심지입니다.',
    body: [
      '대부분의 아늑한 심 마을처럼 Moonlight Peaks는 주민들이 매일 마주치는 공동체 공간에 중점을 둡니다.',
      '계절 축하 행사는 마을 생활의 일부입니다 — 연극적인 이벤트 진행자가 모임을 활기차게 만드는 모습이 보여졌습니다. 정확한 배치와 여기서 열리는 행사는 출시 시 확인될 예정입니다.',
    ],
  },
  'your-farm': {
    title: '나의 농장', dek: '여러분이 이사 와서 달빛 농장으로 복구하는 버려진 가족 농장입니다.',
    body: [
      '여러분의 출발점은 버려진 가족 농장이며, 이를 제대로 기능하는 농장으로 복구하는 것이 게임의 근간입니다.',
      '마법에 걸린 작물과 빛나는 꽃을 재배하고, Draculamb 같은 마법 가축을 기릅니다 — 해가 뜨면 관으로 돌아가므로 모든 것이 밤에 관리됩니다.',
      '확인됨: 캐릭터 생성 중에 나만의 농장(그리고 Hellkitten)의 이름을 짓습니다 — 고정된 단일 "공식" 농장 이름은 없으며, 이는 여러분이 직접 선택하는 이름이기 때문입니다. 출시 전 유출된 파일에는 "the Plot"이라는 내부 작업명이 언급되어 있었지만, 이는 개발자 측 라벨일 뿐 게임 내에서 보거나 선택하는 이름이 아닙니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 농장은 낮에 경작하나요?', a: '아니요 — 밤에 경작하고 해가 뜨면 관으로 돌아갑니다.' },
      { q: 'Moonlight Peaks에서 나의 농장 이름은 무엇인가요?', a: '고정된 단일 이름은 없습니다 — 확인됨: 캐릭터와 Hellkitten의 이름을 짓는 것처럼 캐릭터 생성 중에 직접 농장 이름을 선택합니다.' },
    ],
  },
  'your-cottage': {
    title: '나의 오두막', dek: '취향에 맞게 꾸미고 배치할 수 있는 커스터마이징 가능한 고딕풍 집입니다.',
    body: [
      '여러분은 나만의 공간으로 만들 수 있는 고딕풍 오두막에서 삽니다. 집을 꾸미는 것 — 가구와 장식품을 배치하고 배열하는 것 — 은 아늑함의 핵심 활동 중 하나입니다.',
      '정확히 어떤 방, 가구 세트, 커스터마이징 옵션이 제공되는지는 전체 게임 출시 시 확인될 예정입니다.',
    ],
  },
  forest: {
    title: '숲', dek: '해가 진 후 채집하는 마을 주변의 숲입니다.',
    body: [
      '숲에서 채집하는 것은 게임의 확인된 활동 중 하나이므로, 마을 외곽의 나무들 사이에서 계절별 발견물을 기대할 수 있습니다.',
      '정확한 채집 대상과 숲의 명소는 전체 게임 출시 시 확인될 예정입니다.',
    ],
  },
  lake: {
    title: 'Silverveil 호수', dek: '낚시와 인어 가문의 고향인 마을의 확인된 호수입니다.',
    body: [
      '확인된 이름: Silverveil 호수. 수역은 데모에서 소개된 활동 중 하나인 낚시를 지원하며, 마을의 인어들(Hosu 가문)은 물과 연결되어 있습니다.',
      '이름이 붙은 물고기와 구체적인 낚시 장소는 아직 출처가 확인되지 않았습니다 — 지금까지 확인된 내용은 낚시 가이드를 참고하세요.',
    ],
  },
  pier: {
    title: '부두', dek: '낚시와 조용한 순간을 위한 물 위의 장소입니다.',
    body: [
      '아늑한 심 게임의 낚시 구역에는 보통 낚싯줄을 던질 수 있는 부두나 선착장이 포함됩니다.',
      'Moonlight Peaks가 특정 부두의 이름을 붙이는지는 출시 시 확인될 예정입니다 — 지금은 호수 낚시 구역의 일부로 취급하세요.',
    ],
  },
  mines: {
    title: 'Cave of Echoes & 광산', dek: 'Cave of Echoes를 해금하는 방법, 구리와 철을 찾는 곳, 그리고 가장 흔한 진행 막힘 현상.',
    sections: [
      { title: 'Cave of Echoes 해금 방법', body: '확인됨: Cave of Echoes는 Misty Shores 구역의 왼쪽 아래, Orlock의 저택 서쪽에 있습니다. 처음에는 잠겨 있으며 Ambrosia 저택과 주변 Misty Shores 구역을 다시 여는 "A Bridge Too Far" 퀘스트를 완료하면 열립니다.' },
      { title: 'Cave of Echoes가 아직 잠긴 이유', body: '아직 접근할 수 없다면, 빠진 핵심 아이템이나 상점 구매가 아니라 퀘스트가 거의 항상 진짜 막힌 원인입니다. 커뮤니티 제보: 이 구역은 저주받았다고 하는 다리를 둘러싼 Orlock과 Fiona 사이의 스토리 불화로 잠겨 있습니다.' },
      { title: '"A Bridge Too Far"가 진행과 연결되는 방식', body: '전제 조건과 단계는 "A Bridge Too Far" 퀘스트 전체 가이드를 참고하세요. 요약하면: 먼저 "Orlock의 와인 계획"을 완료하고, 마을의 마녀들과 대화한 다음 다리로 돌아가 불화/저주를 풀고 이 구역을 여세요.' },
      { title: '구리 광석을 찾는 곳', body: '커뮤니티 제보: 안에 들어가면 구리 광석은 구리 얼룩이 있는 평범한 바위처럼 보이며, 곡괭이로 캡니다. 큰 광석 덩어리는 일반 광맥의 1개 대신 최대 6개의 광석을 줄 수 있습니다. 화로에서 구리 광석 4개 + 숯 1개로 구리 막대를 만드세요.' },
      { title: '철 광석을 찾는 곳', body: '같은 광산 시스템 내 후반 단계의 자원으로 확인되었으며, 스토리가 초기 구리 단계를 넘어서면 해금됩니다. 정확한 해금 조건과 동굴 내 위치는 아직 여기서 독립적으로 검증되지 않았습니다.' },
      { title: '새로운 광석 종류가 해금되는 시기', body: '확인됨: 광석 접근은 한 번에가 아니라 단계별로 이루어집니다 — 구리 광석이 먼저 이용 가능하고, 철과 금 광석은 동굴에 들어가자마자가 아니라 메인 스토리를 진행하면서 나중에 열립니다.' },
      { title: '흔한 광산 진행 문제', body: '구리가 부족하다면, 동굴을 더 집중적으로 뒤지기보다 먼저 "A Bridge Too Far"를 확인하세요. 곡괭이가 광맥을 캘 수 없다면, 그 광석 종류를 캐기 전에 Howling Hammer(Ridge의 상점)에서 단계 업그레이드가 필요할 가능성이 높습니다.' },
      { title: '광산에 전투가 있나요?', body: '아니요 — 광산을 포함해 Moonlight Peaks 어디에도 전투가 없는 것으로 확인되어, 지하 탐험은 평화롭게 유지됩니다.' },
    ],
    faq: [
      { q: '광산에 전투가 있나요?', a: '아니요 — 프리뷰에서는 광산을 포함해 Moonlight Peaks 어디에도 전투가 없다고 확인됩니다.' },
      { q: '광산에서 구리 광석을 찾을 수 없는 이유는 무엇인가요?', a: '확인됨: 구리 광석은 "A Bridge Too Far" 퀘스트를 완료해야만 열리는 Cave of Echoes에 있습니다 — 채굴 지점을 놓쳤다고 가정하기 전에 퀘스트 진행 상황을 확인하세요.' },
    ],
  },
  graveyard: {
    title: '묘지', dek: 'Misty Shores의 조용하고 달빛이 비치는 구석으로, Death를 만나는 곳입니다 — Ambrosia 묘지로 확인됨.',
    body: [
      '출시 시점에 확인됨: 이 묘지는 Misty Shores 구역에 있으며, 처음에는 Orlock과의 술 취한 다툼 후 Fiona가 저주한 다리로 막혀 있습니다. "A Bridge Too Far" 퀘스트를 완료하면 저주가 풀리고 접근이 열립니다.',
      '안에 들어가면 여기서 처음으로 Death를 만납니다 — 그의 확인된 거처인 "Death의 오두막"이 근처에 있습니다.',
      '출시 전 유출된 게임 파일은 이 장소를 "Ambrosia 묘지"라고 부르며, 짝을 이루는 "Ambrosia 저택"도 언급합니다 — 아마도 뱀파이어 가문의 조상 대대로의 집일 것입니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 묘지는 어떻게 해금하나요?', a: '확인됨: Orlock과의 다툼 후 Fiona가 Misty Shores로 가는 다리에 건 저주를 푸는 "A Bridge Too Far" 퀘스트를 완료하세요.' },
      { q: 'Moonlight Peaks에서 Death는 어디서 만나나요?', a: '확인됨: "A Bridge Too Far"가 Misty Shores를 해금하면 Ambrosia 묘지에서요. Death의 확인된 거처인 "Death의 오두막"이 근처에 있습니다.' },
    ],
  },
  shops: {
    title: '마을 상점', dek: '마을의 이름이 붙은 상점들 — 대부분 이제 주인이 확인되었습니다.',
    body: [
      '확인된 상점과 주인: Howling Hammer는 Ridge의 도구 업그레이드 상점(평일에만 영업), The Broken Lamp는 Samael의 술집, Coffee & Coffins는 Mina와 Evan의 카페, Third Eye Threads는 Aras의 재단 상점, Webb of Wonders는 얼터 에고 엘릭서와 주문을 파는 Sabrina의 상점입니다 — 그녀 자신의 가문 이름 Webb을 이용한 말장난입니다.',
      '출시 전 유출된 게임 파일에는 Midnight Market과 Bloom Boutique도 언급되었지만, 아직 실제 게임에서 확인되지 않았습니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에는 어떤 상점이 있나요?', a: '확인됨: Howling Hammer(도구 업그레이드, Ridge), The Broken Lamp(술집, Samael), Coffee & Coffins(카페, Mina와 Evan), Third Eye Threads(의류, Aras), Webb of Wonders(물약과 의류, Sabrina).' },
      { q: 'Moonlight Peaks에 Midnight Market이나 Bloom Boutique가 있나요?', a: '아직 확인되지 않음 — 이 이름들은 출시 전 유출된 파일에 등장하지만 아직 실제 게임에서 검증되지 않았습니다.' },
    ],
  },
  landmarks: {
    title: '명소 & 주목할 만한 장소', dek: '핵심 구역을 넘어선 이름이 붙은 장소들 — 대부분 이제 실제 맥락과 함께 확인되었습니다.',
    sections: [
      { title: 'Misty Shores, Moonlit Pines, Pink Grove & Luna Bay', body: '확인됨: Misty Shores는 Ambrosia 가문의 구역으로, Cave of Echoes(광석)와 Death를 만나는 묘지의 고향이며 "A Bridge Too Far" 퀘스트로 해금됩니다. Moonlit Pines는 마녀 서클의 본거지입니다. Pink Grove는 사랑의 악마 Llemi의 고향으로, 대개 축제 기간에만 그곳에 나타납니다. Luna Bay는 인어 가문 Hosu가 사는 곳으로, 스토리 시작 약 1년 후에 도착합니다.' },
      { title: 'Howling Marshes', body: '여러 출시 주간 자료로 확인됨: 마을 중심부 바로 북쪽, Moonlit Pines 동쪽에 위치합니다. 두 개의 입구가 확인되었습니다 — 하나는 Moonlit Pines의 Luna의 씨앗 가판대 바로 동쪽, 다른 하나는 시청 바로 동쪽입니다. "Tension in the Crest Garden"의 일환으로 이곳으로 보내집니다. 여기서 확인된 수확물로는 Sugarbone과 여러 꽃이 있으며, 생으로 파는 것보다 요리 스테이션이나 건조대에서 가공할 가치가 있습니다. Logan 가문의 집도 여기 있으며, 첫 방문 시 접근할 수 없는 지하실과 아직 접근할 수 없는 북쪽 구역도 있습니다 — 둘 다 아마 이후 퀘스트와 연결되어 있을 것입니다.' },
      { title: 'Moonlit Slopes, 지하실, Moonlight Tower & Crest Garden', body: '게임의 공식 위키를 통해서도 확인됨: Moonlit Slopes, 지하실, Moonlight Tower, Khazan 가문의 Crest Garden은 모두 실제 장소입니다. 각각에 대한 전체 설명은 아직 검증 중입니다.' },
    ],
  },
  'town-hall': {
    title: '시청', dek: 'Brook 시장의 안내로 새 주민으로 등록하는 곳입니다.',
    body: [
      '출시 시점에 확인됨: 시청은 여러분이 초반에 새 주민으로 등록하고 Brook 시장(늑대인간 가문 Logan의 수장)을 만나는 곳으로, 이 방문에서 그녀는 살아있는 보관 상자 Chester를 선물로 줍니다.',
      '마을 게시판인 Albertus의 일거리(Albertus라는 부엉이가 관리)도 여기 있으며 이용 가능한 퀘스트를 나열합니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 시청은 누가 운영하나요?', a: '확인됨: 늑대인간 가문 Logan의 수장인 Brook 시장이 새 주민으로 등록할 때 Chester(살아있는 보관 상자)를 선물로 줍니다.' },
      { q: 'Moonlight Peaks에서 퀘스트 게시판은 어디에 있나요?', a: '확인됨: Albertus라는 부엉이가 관리하는 게시판인 Albertus의 일거리는 시청에 있으며 이용 가능한 퀘스트를 나열합니다.' },
    ],
  },
  'ambrosia-mansion': {
    title: 'Ambrosia 저택', dek: '뱀파이어 가문 Ambrosia의 조상 대대로의 집입니다.',
    body: [
      '게임의 공식 위키로 확인됨: Ambrosia 저택은 뱀파이어 가문 Ambrosia의 집으로, 근처의 Ambrosia 묘지(Death가 있는 곳)와 짝을 이룹니다.',
    ],
    faq: [
      { q: 'Ambrosia 저택에는 누가 사나요?', a: '게임의 공식 위키로 확인됨: 뱀파이어 가문 Ambrosia로, 이곳이 그들의 조상 대대로의 집입니다.' },
      { q: 'Ambrosia 저택은 묘지 근처에 있나요?', a: '네, 확인됨: Ambrosia 저택은 Death가 있는 근처의 Ambrosia 묘지와 짝을 이룹니다.' },
    ],
  },
  'silverveil-museum': {
    title: '박물관', dek: 'Persephone, Jada, Winston이 마을로 이사 오면 첫 해 중반에 열리는 기부 기반 수집 건물입니다.',
    body: [
      '확인됨: 박물관은 첫날부터 존재하지 않습니다 — Persephone, Jada, Winston이 마을(부두의 버려진 집)로 이사 오는 스토리가 진행되면 열립니다. 커뮤니티 제보: 많은 플레이어에게 이는 첫 해 가을 초반쯤이지만, 여러분 자신의 초반 퀘스트 진행 속도에 따라 다릅니다.',
      '확인됨: 기부는 상점 주인과 대화하는 것과 다르게 작동합니다. 박물관에는 메인 룸의 포털을 통해 접근하는 여러 테마별 수집실이 있으며, 해당 수집품으로 걸어가서 옆의 느낌표 표시와 상호작용해 기부합니다 — 다른 곳에서 대기 중인 스토리 콘텐츠에 사용되는 것과 같은 아이콘 스타일입니다.',
      '확인됨: 수집품에 아직 필요한 아이템은 인벤토리에 작은 박물관 아이콘이 표시되어, 아직 필요한 것을 실수로 팔거나 사용하지 않도록 도와줍니다. 품질 요구 사항은 수집품마다 다릅니다 — 농사 수집품은 특히 아무 작물이 아니라 더 높은 품질의 작물과 재배물을 요구하므로, 다 팔기보다 최고의 수확물을 보관할 가치가 있습니다.',
      '아직 여기서 독립적으로 확인되지 않음: 정확한 수집실 개수, 방별 전체 기부 목록, 각 수집품이 정확히 어떤 보상을 해금하는지.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 박물관은 언제 열리나요?', a: '확인됨: 첫날부터가 아닙니다 — Persephone, Jada, Winston이 마을로 이사 오면 열리며, 이 스토리는 많은 플레이어에게 첫 해 가을 초반쯤 도달합니다.' },
      { q: '박물관에 어떻게 기부하나요?', a: '확인됨: 해당 수집실(메인 룸의 포털을 통해 접근)로 가서 옆의 느낌표 표시와 상호작용하세요. 상점 주인과 대화하는 것이 아닙니다.' },
    ],
  },
  'yoga-shack': {
    title: '요가 오두막', dek: '게임의 "어두운 여가 활동" 중 하나인 요가를 위한 확인된 활동 장소입니다.',
    body: [
      '게임의 공식 위키를 통해 존재가 확인되었으며, 낚시, 요리, Nokturna와 함께 취미 활동 중 하나인 요가와 연결되어 있습니다.',
    ],
  },
  'khazan-temple': {
    title: 'Khazan 사원', dek: '예언자 가문 Khazan과 연결된 장소입니다.',
    body: [
      '게임의 공식 위키를 통해 존재가 확인되었습니다. 여기서 무슨 일이 일어나는지에 대한 더 자세한 내용은 아직 출처가 확인되지 않았습니다.',
    ],
  },
  'crystal-cave': {
    title: 'Crystal Cave & Twilight Catacombs', dek: 'Cave of Echoes와는 별개인, Fiona의 집 옆에 위치한 보석이 풍부한 동굴입니다.',
    body: [
      '확인됨: Crystal Cave는 Cave of Echoes와 별개인 독립된 지하 구역으로, Fiona의 집 왼쪽에 있습니다. 곡괭이를 최소 구리 등급으로 업그레이드할 때까지 큰 바위가 입구를 막고 있습니다.',
      '확인됨: 안에서는 Rose Quartz 광맥이 다른 보석들과 함께 풍부하게 나타납니다. Rose Quartz는 마법 절구(마법을 배우기 시작하면 해금됨)로 가루로 갈아 여러 공예 레시피와 퀘스트에 사용됩니다.',
      '게임의 공식 위키로 확인됨: Cave of Echoes 외에도 광산에는 Twilight Catacombs라는 또 다른 구역이 포함되어 있습니다 — 지하 구역이 하나의 동굴이 아니라 여러 개의 독립된 구역으로 나뉘어 있음을 시사합니다. 다른 곳에서 확인됨: 뱀스터(마을과 대부분의 집에 숨어 있는 작은 생물)도 초기 스토리 퀘스트가 카타콤 접근을 해금하면 이곳의 구멍을 통해 옮겨져 수집 퀘스트 체인을 완료합니다.',
      'Crystal Cave 자체에 도달하려면 Misty Shores가 이미 해금되어 있어야 합니다("A Bridge Too Far" 퀘스트를 통해), Cave of Echoes와 그 곡괭이 업그레이드가 거기 있기 때문입니다.',
    ],
    faq: [
      { q: 'Moonlight Peaks에서 Crystal Cave는 어디에 있나요?', a: '확인됨: Fiona의 집 왼쪽에 있는, Cave of Echoes와 별개인 독립된 지하 구역입니다. 곡괭이가 구리 등급에 도달할 때까지 바위가 입구를 막고 있습니다.' },
      { q: 'Crystal Cave에서 무엇을 얻나요?', a: '확인됨: Rose Quartz 광맥이 다른 보석들과 함께 풍부하게 나타납니다. Rose Quartz는 마법 절구로 가루로 갈아 여러 공예 레시피와 퀘스트에 사용됩니다.' },
    ],
  },
  'howling-marshes': {
    title: 'Howling Marshes', dek: '마을 바로 북쪽, Moonlit Pines 동쪽 — 두 개의 확인된 입구, 수확 가능한 Sugarbone과 꽃, 그리고 Logan 가문의 집.',
    body: [
      '여러 출시 주간 자료로 확인됨: Howling Marshes는 마을 중심부 바로 북쪽, Moonlit Pines 동쪽에 위치합니다.',
      '두 개의 입구가 확인되었습니다: 하나는 Moonlit Pines의 Luna의 씨앗 가판대 바로 동쪽, 다른 하나는 시청 바로 동쪽입니다. "Tension in the Crest Garden" 스토리 퀘스트의 일환으로 이곳으로 보내집니다.',
      '여기서 확인된 수확물은 Sugarbone과 여러 꽃입니다 — 생으로 파는 것보다 요리 스테이션이나 건조대에서 가공할 가치가 있습니다.',
      'Logan 가문의 집도 여기 있으며, 첫 방문 시 접근할 수 없는 지하실과 아직 접근할 수 없는 북쪽 구역도 있습니다 — 둘 다 아마 이후 퀘스트와 연결되어 있을 것입니다.',
    ],
    related: [{ label: '모든 명소', href: '/locations/landmarks' }, { label: 'Logan 가문', href: '/families' }, { label: '마을', href: '/locations/town' }],
    faq: [
      { q: 'Moonlight Peaks에서 Howling Marshes는 어디에 있나요?', a: '확인됨: 마을 중심부 바로 북쪽, Moonlit Pines 동쪽입니다. 두 개의 입구가 있습니다 — 하나는 Moonlit Pines의 Luna의 씨앗 가판대 바로 동쪽, 다른 하나는 시청 바로 동쪽입니다.' },
      { q: 'Howling Marshes는 어떻게 해금하나요?', a: '"Tension in the Crest Garden" 스토리 퀘스트의 일환으로 이곳으로 보내집니다 — 별도의 해금으로 잠겨 있지 않습니다.' },
      { q: 'Howling Marshes에서 무엇을 수확할 수 있나요?', a: '확인된 수확물로는 Sugarbone과 여러 꽃이 있습니다. 생으로 파는 것보다 요리 스테이션이나 건조대에서 가공할 가치가 있습니다.' },
    ],
  },
  'twilight-catacombs': {
    title: 'Twilight Catacombs', dek: '지하실, Crystal Cave, Misty Shores 묘지, Luna Bay, Howling Marshes를 연결하는 잠긴 지하 터널망으로, 박물관 기부를 통해 해금됩니다.',
    body: [
      '확인됨: Twilight Catacombs는 하나의 독립된 던전이 아니라 지도 전체에 흩어진 입구와 출구가 있는 잠긴 지하 터널망입니다. 문은 지하실(Viktor가 있는 곳)과 Misty Shores 묘지에서 발견됩니다. 해금 전 상호작용은 그저 "반대편에서 잠겨 있음"만 보여줄 뿐 여는 방법은 설명하지 않습니다.',
      '확인됨: 해금 경로는 탐험으로 찾는 독립된 핵심 아이템이 아니라 박물관을 통합니다. 박물관 기부 전체 진행률 25%에 도달하면 Jada가 Dracula 봉인 열쇠를 줍니다. 이 열쇠를 지하실의 Viktor에게 보여주면 "A Key to the Deep" 퀘스트가 발동되어 카타콤이 열립니다.',
      '확인됨: 안에 들어가면 터널망은 파란 압력판을 통해 게임의 여러 지하 및 지상 구역을 연결합니다 — 하나는 Crystal Cave의 무너진 문으로, 다른 하나는 Misty Shores 묘지의 카타콤 입구로, 또 다른 하나는 북쪽 강가의 Luna Bay 무너진 문으로, 또 하나는 동쪽 Howling Marshes의 카타콤 입구로 이어집니다.',
      '한 walkthrough의 제보: 이 연결점들을 찾은 후 관에서 자고 다음 날 우편함을 확인하면 Samael에게서 편지가 옵니다. The Broken Lamp에서 그를 방문하면 추가 입구가 해금됩니다.',
    ],
    related: [{ label: 'Crystal Cave', href: '/locations/crystal-cave' }, { label: '광산', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: '박물관', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'Moonlight Peaks에서 Twilight Catacombs는 어떻게 해금하나요?', a: '확인됨: 박물관 기부 진행률 25%에 도달해 Jada에게서 Dracula 봉인 열쇠를 받은 다음, 지하실의 Viktor에게 보여주면 카타콤을 여는 "A Key to the Deep" 퀘스트가 시작됩니다.' },
      { q: 'Moonlight Peaks에서 Twilight Catacombs의 입구는 어디에 있나요?', a: '확인된 입구는 지하실(Viktor가 있는 곳)과 Misty Shores 묘지입니다. 한 walkthrough의 제보: 내부 압력판이 안에 들어가면 Crystal Cave, Luna Bay, Howling Marshes로도 연결됩니다.' },
      { q: 'Twilight Catacombs의 파란 압력판은 무엇을 하나요?', a: '한 walkthrough의 제보: 각각을 밟으면 지도의 다른 곳에 있는 다른 무너진 문 — Crystal Cave, Misty Shores 묘지, Luna Bay, Howling Marshes — 으로 가는 지름길 연결이 열려, 카타콤을 이 구역들 사이의 이동을 단축하는 허브로 만듭니다.' },
    ],
  },
  'crest-garden': {
    title: 'Crest Garden', dek: '시청 옆에 있는 마을 정원으로, 메인 스토리를 통해 해금하는 일곱 가문의 문장을 표시합니다.',
    body: [
      '공식 위키로 확인됨: Crest Garden은 시청 옆에 있으며, 스토리 진행을 통해 해금되는 대로 Moonlight Peaks 일곱 가문 각각의 문장을 표시합니다 — 게임의 핵심 가문 스토리라인을 얼마나 진행했는지 보여주는 시각적 추적기입니다.',
      '한 walkthrough의 제보: Logan 가문의 문장은 특히 중간에 사라져, 되찾기 퀘스트 우회로 이어집니다 — Dragan이 정보를 위해 The Broken Lamp를 알려주고, 이는 Howling Marshes로 이어지며, 그곳에서 Yabbis가 문장을 먹어버려 돌려주는 대가로 구리 막대를 원한다는 것이 밝혀집니다.',
      '한 walkthrough의 제보: 마지막으로 채워지는 두 문장은 두 뱀파이어 가문인 Ambrosia와 Dracula의 것입니다. Orlock은 Ambrosia 문장을 위해 공예 재료(정제된 돌, 금괴, 유리)를 요청하며, Dracula 문장 퀘스트는 박쥐 변신을 해금한 며칠 후 편지로 발동되는 메인 스토리의 감정적 결말로 묘사됩니다.',
    ],
    related: [{ label: '시청', href: '/locations/town-hall' }, { label: '가문', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Moonlight Peaks에서 Crest Garden은 어디에 있나요?', a: '공식 위키로 확인됨: 시청 옆에 있습니다.' },
      { q: 'Moonlight Peaks에서 Crest Garden은 무엇을 하나요?', a: '확인됨: 각 가문의 메인 스토리를 진행하면서 하나씩 해금되는 마을 일곱 가문 모두의 문장을 표시합니다.' },
      { q: '왜 Crest Garden에 가문 문장 하나가 빠져 있나요?', a: '한 walkthrough의 제보: 적어도 하나의 문장(Logan의 것)은 자동으로 해금되지 않고 작은 되찾기 퀘스트 우회로 쓰여 있습니다 — 이 경우 Yabbis가 그것을 먹어버려 돌려받는 대가로 구리 막대를 원했습니다.' },
      { q: 'Crest Garden에서 어떤 문장이 마지막으로 해금되나요?', a: '한 walkthrough의 제보: 두 뱀파이어 가문 문장인 Ambrosia와 Dracula가 마지막으로 채워지며, Dracula 문장 퀘스트는 스토리의 감정적 결말로 묘사됩니다.' },
    ],
  },
  'moonlit-slopes': {
    title: 'Moonlit Slopes', dek: 'Moon Goddess의 거처로, 첫 초대 이후 박쥐 형태를 해금할 때까지 다시 잠기는 것으로 확인되었습니다.',
    body: [
      '확인됨: Moonlit Slopes는 Moon Goddess의 거처로, Khazan 가문의 예언자들이 동시에 트랜스 상태에 빠지고 달이 하늘에서 사라지는 "A Missing Moon" 스토리 아크를 완료한 후 접근할 수 있습니다. "The Moon in the Sky"라는 짧은 후속 퀘스트를 통해 그녀가 정식으로 방문을 초대합니다.',
      '확인됨: 이 첫 방문 후 Moonlit Slopes는 다시 잠기며, "Master of the Night" 퀘스트를 통해 박쥐 형태를 해금할 때까지 접근할 수 없습니다 — 그러므로 Moon Goddess를 만난 직후 바로 다시 들어갈 수 없어도 이는 버그가 아니라 예상된 것입니다.',
    ],
    related: [{ label: '변신', href: '/shapeshifting' }, { label: 'Moon Goddess', href: '/characters/moon-goddess' }, { label: '퀘스트', href: '/quests' }],
    faq: [
      { q: 'Moonlight Peaks에서 Moon Goddess는 어디서 만나나요?', a: '확인됨: "A Missing Moon"과 짧은 후속 퀘스트 "The Moon in the Sky"를 완료한 후 Moonlit Slopes에서, 그녀가 정식으로 초대합니다.' },
      { q: '한 번 방문한 후 왜 Moonlit Slopes로 돌아갈 수 없나요?', a: '확인됨: 첫 방문 후 구역이 다시 잠기며, "Master of the Night" 퀘스트를 통해 박쥐 형태를 해금해야만 다시 열립니다 — 이는 버그가 아니라 예상된 것입니다.' },
    ],
  },
  'midnight-market': {
    title: 'Midnight Market', dek: '동물 모자, 물약 재료, 평일에는 구할 수 없는 다른 물건들을 파는 마을의 주말 전용 시장입니다.',
    body: [
      '커뮤니티 제보로 확인됨: Midnight Market은 토요일과 일요일에 열리는 마을의 주말 이벤트로, 게임의 일반 평일 상점과는 별개입니다.',
      '제보됨: Snek은 Midnight Market에서 농장 동물을 위한 작은 모자를 팔며, Sabrina도 그곳에서 연금술사의 구슬과 다른 물약 관련 물건을 팝니다 — 두 캐릭터 중 누구에게서도 평일 정규 영업시간에는 구할 수 있다고 확인되지 않은 물건들입니다.',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: '농장 동물', href: '/farm/animals' }, { label: '물약', href: '/items/potions' }],
    faq: [
      { q: 'Moonlight Peaks에서 Midnight Market은 언제 여나요?', a: '커뮤니티 제보: 토요일과 일요일에만, 게임의 일반 평일 영업시간과는 별개입니다.' },
      { q: 'Moonlight Peaks의 Midnight Market에서 무엇을 살 수 있나요?', a: '제보됨: Snek에게서 농장 동물을 위한 작은 모자, Sabrina에게서 연금술사의 구슬과 다른 물약 관련 물건 — 평일에 판매된다고 확인되지 않은 물건들입니다.' },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: '공식 위키 내비게이션에 따라 마을에 존재하는 것으로 확인된 이름 붙은 상점으로, 세부 사항은 아직 미확인입니다.',
    body: [
      '공식 위키 자체의 페이지 내비게이션을 통해 존재가 확인되었으며, 게임의 다른 이름 붙은 상점들과 함께 나열되어 있습니다. 이름 외에는 Bloom Boutique가 무엇을 파는지, 누가 운영하는지, 영업시간은 어떻게 되는지에 대해 아직 독립적으로 검증된 세부 사항이 없습니다 — 이름이 꽃을 암시한다고 해서 주제를 추측하지 않습니다.',
      '이름과 게임에 이미 있는 꽃꽂이 및 선물 시스템을 고려하면 꽃이나 장식에 초점을 맞춘 상점이라는 것이 합리적인 추측이지만, 실제 게임에서 검증하는 출처가 나올 때까지는 확인됨이 아니라 예상됨으로 표시합니다.',
    ],
    related: [{ label: '상점', href: '/locations/shops' }, { label: '활동: 꽃꽂이', href: '/activities/flower-arranging' }],
    faq: [
      { q: 'Moonlight Peaks에서 Bloom Boutique는 무엇인가요?', a: '공식 위키 자체의 내비게이션에 따라 이름 붙은 상점으로 존재가 확인되었습니다. 무엇을 파는지, 누가 운영하는지는 아직 여기서 독립적으로 확인되지 않았습니다 — 이름만으로 상점 내용을 추측하지 않습니다.' },
    ],
  },
};
