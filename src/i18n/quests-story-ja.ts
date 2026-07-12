// src/i18n/quests-story-ja.ts
// Japanese translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrJa = { title: string; unlock?: string; summary: string; reward?: string };

export const storyChaptersJa: { number: number; title: string; dek: string }[] = [
  { number: 1, title: 'ムーンライト・ピークスへの到着', dek: '住民登録、OrlockとViktorとの出会い、最初の作物。' },
  { number: 2, title: '架け橋の彼方 (A Bridge Too Far)', dek: 'Fionaがかけた橋の呪いと、それを解く儀式。' },
  { number: 3, title: 'クレスト・ガーデンとマナ', dek: 'クレスト・ガーデンの謎と、初めての本格的な魔法の解放。' },
  { number: 4, title: '町の暮らしと家族の確執', dek: 'タウンホールの政治、家族間の緊張、ムーンライト・ピークスへの定着。' },
  { number: 5, title: '結婚式編', dek: '町の結婚式——招待状、リハーサル、そして未解決の出来事。' },
];

export const storyQuestsJa: Record<string, StoryQuestTrJa> = {
  'register-at-town-hall': {
    title: 'タウンホールで登録する',
    summary: '複数のソースで確認済み:Orlockと出会った後(下記参照)、町へ向かうとBrook町長がタウンホールで新住民として登録してくれ、何でも自動的に一晩で売ってくれる生きた収納箱、Chesterをくれます。',
    reward: 'Chester(自動売却ストレージ)',
  },
  'meet-the-townsfolk': {
    title: '町の人々と出会う / 新たな始まり',
    unlock: 'タウンホールでの登録を完了する',
    summary: '確認済み:序盤のセットアップとして、Orlock(自宅の芝生で寝ている二日酔いの吸血鬼——水をかけるより、つついて起こす方が良い会話につながります)、続いてViktor(Orlockの叔父で、農園の左手にある地下墓所/ドーム型の建物に住み、農業の基礎を教えてくれる)と出会います。',
    reward: '完全な初期道具セット:シャベル、じょうろ、斧、つるはし、壊れた杖',
  },
  'a-roof-over-your-head': {
    title: '頭上に屋根を / 快適さへの第一歩',
    summary: '新規ゲームのセットアップの一環として確認済み:基本的な住居と快適さに関する目標で、Orlockからもらう最初のブラッドグレープの植え付けと並行して進みます。屋根の修理に向けて進めると、精製機の設計図が解放されます。',
    reward: '精製機の設計図(屋根修理時)',
  },
  'darkness-over-moonlight-peaks': {
    title: 'ムーンライト・ピークスを覆う闇',
    summary: 'Neoseekerのクエストログ転記により報告済み:序盤のメインストーリーの展開の一つ。具体的な目標はまだ独自に詳細確認できていません。',
  },
  'a-bridge-too-far': {
    title: '架け橋の彼方 (A Bridge Too Far)',
    summary: '専門攻略記事(Output Lag)をInto Indie GamesとBonus Actionと照合して確認済み:Moonlit Pinesに住む魔女Fionaは、バーでOrlockに侮辱されたことに腹を立て、Orlockの家へ続く橋に呪いをかけました。Fionaと話してこれを知った後、The Broken Lampというバーによくいる(たいてい飲んでいる)Orlockを見つけ、彼のツケ350ゴールドを肩代わりする提案をして謝罪させます。Coffee and CoffinsにいるMinaが、自分のお金を使わずに済むよう350ゴールドを贈り物としてくれます。Samael(バーテンダー)にツケを支払った後、Orlockを連れてFionaの家へ行き、謝罪のカットシーンを迎えます。その後Fionaは自分一人では呪いを解けないと明かし、町中にいる3人の魔女——Noel、Sabrina、Luna——を探すよう求めます。3人全員を仲間にして橋に戻ると、呪いを解く儀式が始まります。',
    reward: '橋が解放される——墓地とMisty Shoresが解放され、実績も獲得',
  },
  'tension-in-the-crest-garden': {
    title: 'クレスト・ガーデンの緊張',
    unlock: '「架け橋の彼方」を完了し、翌日まで待つ',
    summary: 'Neoseekerのクエストログで確認済み:橋の呪いが解けた直後に続く展開で、クレスト・ガーデンの謎を中心に進みます。',
    reward: '直接のアイテム報酬なし——後続クエスト「A Croak and a Crest」が解放される',
  },
  'the-quest-for-mana': {
    title: 'マナを求めて (The Quest for Mana)',
    unlock: '「作物の魔法」を完了し、1日待ってから町に入り「町長の重荷」をトリガーし、さらに2日待ってSabrinaの手紙を読む',
    summary: 'Neoseekerのクエストログ転記により確認済み:初めての本格的な魔法クラフト設備につながるクエストチェーンです。',
  },
  'building-a-mana-extractor': {
    title: 'マナ・エクストラクターの建設',
    unlock: '「マナを求めて」を完了し、2日待つ',
    summary: '確認済み:「マナを求めて」の直接の後続クエストです。',
    reward: 'マナ・エッセンスとマナ・エクストラクターの設計図',
  },
  'the-dinner-party': {
    title: 'ディナーパーティー (The Dinner Party)',
    summary: 'Neoseekerのクエストログで確認済み:町の社交イベントクエストです。',
    reward: '猫形態(ヘルキトゥンへの変身)が解放される',
  },
  'mend-it-with-magic': {
    title: '魔法で繕う / 魔法の心得',
    unlock: '「魔法で繕う」を完了し、2日待ってFionaの手紙を読む',
    summary: 'Neoseekerのクエストログ転記により確認済み:魔法に焦点を当てた後続クエストのペアです。',
  },
  'town-hall-drama': {
    title: '両親とのディナー / タウンホールの騒動',
    summary: 'Neoseekerのクエストログで確認済み:町と家族に関する物語の展開です。',
  },
  'the-plastic-chairs': {
    title: 'プラスチックの椅子',
    summary: 'Neoseekerのクエストログ転記により確認済み。',
    reward: 'ジンジャーティー×4',
  },
  'a-family-reunion': {
    title: '家族の再会',
    summary: 'Neoseekerのクエストログで確認済み:家族に関する物語の展開です。',
  },
  'the-mermaids-wish': {
    title: '人魚の願い (The Mermaid\u2019s Wish)',
    summary: 'Neoseekerのクエストログで確認済み:このクエストと「魔法の心得」を両方完了することが「リハーサルディナー」の前提条件です。コミュニティ報告では美人鱼/Aqua変身フォームの解放と関連づけられていますが、この報酬の結びつきは独自には確認できていません。',
  },
  'the-rehearsal-dinner': {
    title: 'リハーサルディナー',
    unlock: '「人魚の願い」と「魔法の心得」を完了し、1日待ってディナーの招待状を読む',
    summary: 'Neoseekerのクエストログ転記により確認済み——ゲームの結婚式編の物語展開の始まりです。',
  },
  'kims-invite': {
    title: 'Kimの招待状',
    summary: 'Neoseekerのクエストログで確認済み:結婚式編の一部です。',
  },
  'brides-attendant-duty': {
    title: '花嫁付き添い人の務め',
    summary: 'Neoseekerのクエストログで確認済み:結婚式編の一部です。',
  },
  'unfinished-business': {
    title: '未解決の出来事',
    summary: 'Neoseekerのクエストログで確認済み:現時点で記録されている結婚式編の最後の展開です。この先のストーリー内容が確認され次第、更新します。',
  },
};
