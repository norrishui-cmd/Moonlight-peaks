// src/i18n/platforms-ko.ts
export type PlatformTrKo = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsKo: Record<string, PlatformTrKo> = {
  'steam-deck': {
    title: 'Moonlight Peaks Steam Deck', dek: 'Moonlight Peaks는 PC와 Mac용 Steam에서 이용 가능하므로 Steam Deck에서도 플레이할 수 있습니다.',
    body: [
      'Moonlight Peaks는 Windows와 Mac용 Steam에서 이용 가능하므로, 다른 Steam 타이틀처럼 Steam Deck에서 실행됩니다.',
      '확인된 출시 주간 문제: 일부 플레이어가 Steam Deck에서 시작 시 크래시를 겪습니다. 제보된 해결책은 게임의 속성 → 호환성 설정에서 호환성 도구를 Proton 9.0-4로 변경하는 것입니다. 공식 Valve "Steam Deck 인증" 등급은 아직 여기서 확인되지 않았습니다.',
    ],
    faq: [{ q: 'Moonlight Peaks는 Steam Deck 인증을 받았나요?', a: '공식 Valve "Steam Deck 인증" 등급은 아직 여기서 확인되지 않았습니다. 게임은 Deck에서 Steam을 통해 플레이 가능하며, 시작 시 크래시가 발생하면 Proton 9.0-4로 전환하는 것이 제보된 해결책입니다.' }],
  },
  'switch': {
    title: 'Moonlight Peaks Nintendo Switch', dek: 'Moonlight Peaks는 오리지널 Nintendo Switch에서 이용 가능합니다 — 가격, 무료 데모, Switch 2 업그레이드.',
    body: [
      'Moonlight Peaks는 2026년 7월 7일 오리지널 Nintendo Switch에 출시되었으며, eShop에서 무료 데모를 이용할 수 있습니다.',
      '별도의 개선된 Nintendo Switch 2 에디션도 있습니다. 오리지널 Switch에서 구매한 플레이어에게는 Switch에서 Switch 2로의 업그레이드 패스가 제공될 예정이라고 안내되었습니다.',
      '출시 시점에 확인됨: 처음부터 완전한 컨트롤러 지원 — 리뷰어들은 이 게임이 컨트롤러 중심으로 설계되었다고 설명하며, 이는 휴대용 Switch 플레이에 잘 어울립니다.',
    ],
    faq: [{ q: 'Moonlight Peaks는 오리지널 Nintendo Switch에서 이용 가능한가요?', a: '네 — 2026년 7월 7일 오리지널 Switch에 출시되었으며, eShop에서 무료 데모를 이용할 수 있습니다. 별도의 개선된 Switch 2 에디션도 이용 가능합니다.' }],
  },
  'switch-2': {
    title: 'Moonlight Peaks Nintendo Switch 2', dek: '네이티브 Nintendo Switch 2 에디션이 39.99달러로 확인되었습니다 — 리뷰어들이 휴대 모드에서 발견한 내용입니다.',
    body: [
      'Moonlight Peaks는 오리지널 Switch 버전 외에 자체 Nintendo Switch 2 에디션을 가지고 있으며, 가격은 39.99달러입니다(Steam, Switch, Android의 34.99달러 대비), 무료 데모도 Switch 2에서 플레이 가능합니다.',
      '오리지널 Switch에서 구매하는 플레이어를 위한 Switch에서 Switch 2로의 업그레이드 패스가 언급되었습니다.',
      '출시 주간 리뷰로 확인됨: Switch 2 에디션은 휴대 모드에서 매우 잘 작동했으며, 견고하고 잘 정리된 컨트롤러 배치를 갖추어 확인된 플랫폼 중 더 강력한 휴대용 경험 중 하나였습니다.',
    ],
    faq: [{ q: 'Moonlight Peaks의 Switch 2 버전이 있나요?', a: '네 — 네이티브 Nintendo Switch 2 에디션이 39.99달러로 확인되었으며, 무료 데모도 Switch 2에서 플레이 가능합니다. 리뷰어들은 휴대 모드에서 매우 잘 작동했다고 평가했습니다.' }],
  },
  'android': {
    title: 'Moonlight Peaks Android (Google Play)', dek: 'Moonlight Peaks는 Google Play를 통해 Android에서 이용 가능합니다 — 가챠나 인앱 구매 없는 일회성 구매입니다.',
    body: [
      'Moonlight Peaks는 2026년 7월 7일 Google Play(Google Play Games)를 통해 Android에 출시되었으며, 이 정도 규모의 아늑한 라이프 심 중 첫날부터 모바일에 출시되는 몇 안 되는 게임 중 하나로, Steam 및 Switch와 동일한 34.99달러 가격입니다.',
      '확인됨: 이는 가챠 메커니즘, 에너지 타이머, 인앱 구매 없이 이 한 가격으로 전체 게임이 해금되는 일회성 구매입니다 — PC나 콘솔과 정확히 동일합니다.',
      'iOS 버전은 발표되지 않았습니다. 모바일에서는 Google Play를 통한 Android가 유일하게 확인된 모바일 플랫폼입니다.',
      '아직 여기서 독립적으로 확인되지 않음: 정확한 최소 기기 요구 사항과 터치 조작 방식의 전체 세부 사항.',
    ],
    faq: [
      { q: 'Moonlight Peaks는 iOS나 iPhone에서 이용 가능한가요?', a: 'iOS 버전은 발표되지 않았습니다. 모바일에서는 Google Play를 통한 Android로 Moonlight Peaks를 이용할 수 있습니다.' },
      { q: 'Moonlight Peaks 모바일 버전에 가챠나 인앱 구매가 있나요?', a: '아니요, 확인됨: 가챠, 에너지 타이머, 인앱 구매 없이 전체 게임이 해금되는 일회성 구매입니다.' },
    ],
  },
};
