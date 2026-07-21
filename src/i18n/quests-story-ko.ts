// src/i18n/quests-story-ko.ts
// Korean translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrKo = { title: string; unlock?: string; summary: string; reward?: string };

export const storyChaptersKo: { number: number; title: string; dek: string }[] = [
  { number: 1, title: 'Moonlight Peaks에 도착', dek: '주민 등록, Orlock과 Viktor 만나기, 그리고 첫 작물.' },
  { number: 2, title: 'A Bridge Too Far', dek: 'Orlock의 다리에 걸린 Fiona의 저주와 그것을 푸는 의식.' },
  { number: 3, title: 'Crest Garden과 마나', dek: 'Crest Garden의 미스터리, 그리고 첫 진짜 마법의 해금.' },
  { number: 4, title: '마을 생활과 가족 드라마', dek: '시청 정치, 가족 간 긴장, 그리고 Moonlight Peaks에 정착하기.' },
  { number: 5, title: '결혼식 이야기', dek: '마을의 결혼식 — 초대장, 리허설, 그리고 마무리되지 않은 일들.' },
];

export const storyQuestsKo: Record<string, StoryQuestTrKo> = {
  'register-at-town-hall': {
    title: '시청에 등록하기',
    summary: '여러 자료로 확인됨: Orlock을 만난 후(아래 참고) 마을로 향하면 Brook 시장이 시청에서 새 주민으로 등록해 주고, 안에 넣어둔 것을 밤새 자동으로 파는 살아있는 상자 Chester를 줍니다.',
    reward: 'Brook을 만나고 Chester를 받음',
  },
  'meet-the-townsfolk': {
    title: '마을 사람들 만나기 / 새로운 시작',
    unlock: '시청 등록 완료',
    summary: '확인됨: Orlock(잔디밭에서 잠든 숙취에 시달리는 뱀파이어로, 물을 붓는 대신 톡톡 두드리면 더 나은 대화 선택지가 나옵니다)을 만나는 초반 설정 목표, 이어서 농장 왼쪽 무덤/돔형 건물에 사는 Orlock의 삼촌 Viktor를 만나 농사의 기초를 배웁니다.',
    reward: '완전한 초기 도구 세트: 삽, 물뿌리개, 도끼, 곡괭이, 부서진 지팡이',
  },
  'a-roof-over-your-head': {
    title: '머리 위 지붕 / 편안함을 향한 첫걸음',
    summary: '새 게임 설정 루트의 일부로 확인됨: 첫 Blood Grapes 심기(Orlock을 깨운 후 받는 그의 시작 작물)와 병행되는 기본 주거 및 편의 목표. 지붕을 고치면 정제기(Refiner) 설계도도 해금됩니다.',
    reward: '정제기 설계도(지붕 수리 시)',
  },
  'darkness-over-moonlight-peaks': {
    title: 'Moonlight Peaks의 어둠',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 제보된 초반 메인 스토리 지점입니다. 구체적인 목표는 아직 여기서 독립적으로 세부 확인되지 않았습니다.',
  },
  'a-bridge-too-far': {
    title: 'A Bridge Too Far',
    summary: '전용 공략(Output Lag)으로 확인되고 Into Indie Games, Bonus Action과 교차 확인됨: Moonlit Pines의 마녀 Fiona는 Orlock이 술집에서 그녀에 대해 한 무례한 농담 때문에 그의 마을 쪽으로 가는 다리를 저주했습니다. Fiona와 대화해 이를 알아낸 다음, Broken Lamp에서 Orlock을 찾으세요(그는 주로 그곳에서 술을 마십니다). 사과하도록 그의 술값 350골드를 대신 내주겠다고 제안하세요. Coffee and Coffins의 Mina는 여러분이 직접 돈을 쓰지 않도록 350골드를 선물로 줍니다. 바텐더 Samael에게 술값을 지불한 후, Orlock을 Fiona의 집으로 데려가 사과 컷신을 봅니다. Fiona는 혼자서는 저주를 풀 수 없으며 마을 곳곳에 있는 세 마녀 — Noel, Sabrina, Luna — 가 필요하다고 밝힙니다. 셋 모두를 모은 후 다리로 돌아가 저주 해제 의식을 시작하세요.',
    reward: '다리 재개방 — 묘지와 Misty Shores 해금, 업적 하나 추가',
  },
  'tension-in-the-crest-garden': {
    title: 'Crest Garden의 긴장',
    unlock: '"A Bridge Too Far" 완료 후 다음 날까지 대기',
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 다리 저주가 풀린 직후의 후속 지점으로, Crest Garden의 미스터리를 중심으로 전개됩니다.',
    reward: '직접적인 아이템 보상 없음 — 후속 퀘스트 "A Croak and a Crest"를 해금',
  },
  'the-quest-for-mana': {
    title: 'The Quest for Mana',
    unlock: '"The Magic of Crops" 완료, 1일 대기, 마을에 들어가 "A Mayor\'s Burden" 발동, 2일 대기 후 Sabrina의 편지 읽기',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨: 여러분의 첫 진짜 마법 제작 인프라로 이어지는 퀘스트 체인입니다.',
  },
  'building-a-mana-extractor': {
    title: 'Building a Mana Extractor',
    unlock: '"The Quest for Mana" 완료 후 2일 대기',
    summary: '확인됨: The Quest for Mana의 직접적인 후속 퀘스트입니다.',
    reward: '마나 정수와 마나 추출기 설계도',
  },
  'the-dinner-party': {
    title: 'The Dinner Party',
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 마을의 사교 행사 퀘스트입니다.',
    reward: '고양이 형태(Hellkitten 변신 해금)',
  },
  'mend-it-with-magic': {
    title: 'Mend it with Magic / A Touch of Magic',
    unlock: '"Mend it with Magic" 완료, 2일 대기 후 Fiona의 편지 읽기',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨: 마법에 초점을 맞춘 후속 퀘스트 한 쌍입니다.',
  },
  'town-hall-drama': {
    title: 'Dinner with the Parents / Town Hall Drama',
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 마을과 가족에 초점을 맞춘 스토리 지점입니다.',
  },
  'the-plastic-chairs': {
    title: 'The Plastic Chairs',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨.',
    reward: '생강차 4개',
  },
  'a-family-reunion': {
    title: 'A Family Reunion',
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 가족에 초점을 맞춘 스토리 지점입니다.',
  },
  'the-mermaids-wish': {
    title: "The Mermaid's Wish",
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 이 퀘스트를 "A Touch of Magic"과 함께 완료하는 것이 "The Rehearsal Dinner"의 전제 조건입니다.',
    reward: '물의 형태(인어 변신 해금)',
  },
  'the-rehearsal-dinner': {
    title: 'The Rehearsal Dinner',
    unlock: '"The Mermaid\'s Wish"와 "A Touch of Magic" 완료, 1일 대기 후 저녁 초대장 읽기',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨 — 게임의 결혼식 이야기 지점의 시작입니다.',
  },
  'kims-invite': {
    title: "Kim's Invite",
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 결혼식 이야기의 일부입니다.',
  },
  'brides-attendant-duty': {
    title: "Bride's Attendant Duty",
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 결혼식 이야기의 일부입니다.',
  },
  'unfinished-business': {
    title: 'Unfinished Business',
    summary: 'Neoseeker의 퀘스트 로그로 확인됨: 결혼식 이야기 중 현재까지 문서화된 마지막 지점입니다. 이후 스토리 콘텐츠가 이를 넘어설 수 있으며, 확인되는 대로 업데이트할 예정입니다.',
  },
  'orlocks-wine-scheme': {
    title: "Orlock의 와인 계획 (Blood Wine)",
    summary: 'Bonus Action으로 확인되고 Into Indie Games와 교차 확인됨: 도착 직후 잔디밭에서 잠든 숙취에 시달리는 뱀파이어 Orlock을 발견합니다 — 물을 붓는 대신 톡톡 두드리면 더 나은 대화 선택지가 나옵니다. 그는 Blood Grapes 씨앗을 주며 레드/블러드 와인을 만들어 달라고 부탁합니다. 와인을 만들고 Fiona에게 사과하라고 압박하면, 그는 Samael에게 진 350골드 술값을 갚으라며 여러분을 보냅니다.',
    reward: '블러드 와인 만들기; Orlock이 사과하도록 압박, Samael에게 350골드 빚 갚기; "A Bridge Too Far"로 이어짐',
  },
  'a-croak-and-a-crest': {
    title: 'A Croak and a Crest',
    unlock: '"Tension in the Crest Garden" 완료',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨: Crest Garden 미스터리의 직접적인 후속입니다.',
    reward: 'Crest Garden에 Logan 문장을 배치하며 문장 관련 업적에 기여함',
  },
  'a-missing-moon': {
    title: 'A Missing Moon',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨: 마나 추출기 체인 이후의 중반 스토리 지점으로, Ambrosia 가문 위기로 이어집니다.',
  },
  'the-ambrosia-crisis': {
    title: 'The Ambrosia Crisis',
    unlock: '"Master of the Night" 완료, 2일 대기 후 Ambrosia 저택 편지 읽기',
    summary: 'Neoseeker의 퀘스트 로그 기록으로 확인됨: 뱀파이어 가문 Ambrosia의 가족 위기 스토리 지점으로, "Master of the Night" 완료와 짧은 편지 대기 후 해금됩니다.',
  },
};
