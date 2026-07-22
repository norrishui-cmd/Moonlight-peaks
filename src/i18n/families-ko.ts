// src/i18n/families-ko.ts
export type FamilyTrKo = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesKo: Record<string, FamilyTrKo> = {
  vampires: {
    title: '뱀파이어', dek: '두 개의 뱀파이어 혈통 — 여러분 자신의 Dracula 가문과 마을의 Ambrosia 가문.',
    body: [
      '여러분은 Vlad Dracula의 자녀인 젊은 뱀파이어를 플레이하므로, Dracula 가문이 여러분이 태어난 가문입니다. 출시 시점에 확인됨: 마을에는 또 다른 별개의 뱀파이어 가문도 있습니다 — Orlock이 이끄는 Ambrosia 가문으로, 그의 자녀 Mina와 Evan, 그리고 조카 Samael과 Elvira를 포함합니다.',
      '여러분의 어머니 Laveau는 Dracula 가문과 결혼하기 전 Webb 서클을 이끌던 마녀였습니다 — 그래서 여러분의 캐릭터는 뱀파이어와 마녀가 섞인 혈통을 가지고 있습니다.',
    ],
    faq: [{ q: 'Moonlight Peaks에서 나는 뱀파이어인가요?', a: '네 — 여러분은 Vlad Dracula의 자녀인 젊은 뱀파이어를 플레이합니다. 마을에는 Orlock이 이끄는 또 다른 뱀파이어 가문 Ambrosia도 있습니다.' }],
  },
  werewolves: {
    title: '늑대인간', dek: '보름달에 거칠어지는 — Brook 시장이 이끄는 Logan 가문.',
    body: [
      '늑대인간은 일곱 가문 중 하나이며, 이름이 붙은 늑대인간 가문은 Logan입니다. 출시 시점에 확인됨: 가문의 수장은 마을 시장인 Brook입니다 — 출시 전 일부 보도에서 그를 "늑대인간 시장 Logan"이라고 불렀는데, 실제로는 그녀 자신의 이름 대신 가문 이름을 사용해 그녀를 가리킨 것이었습니다.',
      'Brook의 남동생 Ridge는 마을의 목수입니다. 그녀의 자녀 Saga(보름달에 따라 에너지가 변하는 확인된 로맨스 옵션)와 Ludo 모두 로맨스가 가능합니다.',
    ],
  },
  witches: {
    title: '마녀', dek: '마법의 마을에서 지팡이와 물약을 지키는 자들 — Webb 가문.',
    body: [
      '마녀는 일곱 가문 중 하나로, 게임의 지팡이 기반 마법과 물약 제조와 연결되어 있습니다. 이름이 붙은 마녀 가문은 Webb으로, 이전에는 Laveau(플레이어 캐릭터의 어머니)가 이끌었으나 Dracula 가문과 결혼하기 위해 떠났습니다.',
      '이제 Fiona가 마을의 꽃집 주인으로서 Webb 가문과 지역 마녀 서클을 이끌며, 남동생 Noel(마을의 대장장이), 사촌 Sabrina(Webb of Wonders 상점 운영), Luna(마을의 바다 마녀)에게 큰 기대를 걸고 있습니다.',
    ],
  },
  mermaids: {
    title: '인어', dek: '호수와 조수로부터 — Hosu 가문.',
    body: [
      '인어는 일곱 가문 중 하나로 확인되었으며, 마을의 수역과 연결되어 있습니다. 이름이 붙은 인어 가문은 Hosu로 — Luna Bay에서 함께 사는 세 남매이며, 스토리 시작 약 1년 후에 도착해 마을에 다시 적응하는 데 도움이 필요합니다.',
      '확인된 구성원: Kim(밝고 끝없이 호기심 많으며, 잃어버린 사랑과의 재회 이야기가 있음), Rei(조용하고 수줍은 환경운동가), Tae(자신감 있고 격려하는 남성 인어).',
    ],
  },
  seers: {
    title: '예언자', dek: 'Khazan 가문의 점술사들.',
    body: [
      'Khazan 가문은 신뢰도가 제각각인 예지력을 가진 삼남매로 구성된 가문입니다 — 확인된 일곱 가문 중 하나입니다.',
      'Dragan은 자신의 능력과 씨름하고 있지만, 세계관 내에서 카드 게임 Nokturna를 발명했습니다. Alina는 가문의 고집 세고 열정적인 반항아이며, Aras는 자신의 능력을 피하면서 재단 상점 "Third Eye Threads"를 운영합니다.',
    ],
  },
  henderson: {
    title: 'Henderson 가문', dek: '마을의 인간 가문 — 일곱 번째이자 가장 늦게 도착한 가문.',
    body: [
      '일곱 번째 가문으로 확인됨: Henderson 가문은 마을의 유일한 평범한 인간 가정으로, 첫 해의 중반쯤에 Moonlight Peaks로 이사 옵니다.',
      '자유분방한 이모 Persephone이 가문을 이끌며 조카 Jada(늑대인간과 뱀파이어 사이에서 사는 것을 즐거워함)와 조카 Winston(항상 두려움 속에 사는)을 돌봅니다. 셋 모두 로맨스 옵션입니다.',
    ],
  },
};
