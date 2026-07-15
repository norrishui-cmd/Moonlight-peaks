// src/i18n/platforms-ja.ts
export type PlatformTrJa = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsJa: Record<string, PlatformTrJa> = {
  'steam-deck': {
    title: 'Steam Deckでのムーンライト・ピークス', dek: 'ムーンライト・ピークスはSteamでPC・Mac向けにすでに発売中のため、Steam Deckでもプレイできます。',
    body: [
      'ムーンライト・ピークスはWindows・Mac向けにSteamで提供されているため、他のSteamタイトルと同様にSteam Deckでも動作します。',
      '確認済みの発売週の問題:一部のプレイヤーがSteam Deckでの起動時にクラッシュを経験しています。報告されている対処法は、ゲームの「プロパティ」→「互換性」設定で互換ツールをProton 9.0-4に切り替えることです。Valve公式の「Steam Deck Verified」評価は、まだ確認されていません。',
    ],
    faq: [{ q: 'ムーンライト・ピークスはSteam Deck Verifiedですか?', a: 'Valve公式の「Steam Deck Verified」評価はまだ確認されていません。ゲームはSteam経由でDeck上でプレイ可能です。起動時にクラッシュする場合は、Proton 9.0-4への切り替えが報告されている対処法です。' }],
  },
  'switch': {
    title: 'Nintendo Switchでのムーンライト・ピークス', dek: 'ムーンライト・ピークスは無印Nintendo Switchですでに発売中——価格、無料体験版、Switch 2版へのアップグレードについて。',
    body: [
      'ムーンライト・ピークスは2026年7月7日に無印Nintendo Switch向けに発売され、無料体験版はeショップで提供されています。',
      '拡張版の独立したNintendo Switch 2エディションも存在します。無印Switchで購入したプレイヤーには、Switch→Switch 2のアップグレードパスが提供されると案内されています。',
      '発売時に確認済み:標準でフルコントローラー対応です——レビュアーはこのゲームを設計上コントローラー中心と評しており、携帯モードでのSwitchプレイによく合っています。',
    ],
    faq: [{ q: 'ムーンライト・ピークスは無印Nintendo Switchでプレイできますか?', a: 'はい——2026年7月7日に無印Switch向けに発売され、無料体験版はeショップにあります。拡張版の独立したSwitch 2エディションも提供されています。' }],
  },
  'switch-2': {
    title: 'Nintendo Switch 2でのムーンライト・ピークス', dek: 'Nintendo Switch 2向けのネイティブ版が39.99ドルで確認済み——携帯モードでのレビュアーの評価をご紹介します。',
    body: [
      'ムーンライト・ピークスには、無印Switch版とは別に専用のNintendo Switch 2エディションがあり、価格は39.99ドル(Steam・Switch・Androidでは34.99ドル)、無料体験版もSwitch 2でプレイ可能です。',
      '無印Switchで購入したプレイヤー向けに、Switch→Switch 2のアップグレードパスが言及されています。',
      '発売週のレビューで確認済み:Switch 2版は携帯モードで非常に良好に動作し、コントローラー操作の割り当ても手堅くよく整理されている——確認済みプラットフォームの中でも携帯体験として評価の高い部類です。',
    ],
    faq: [{ q: 'ムーンライト・ピークスにSwitch 2版はありますか?', a: 'はい——Nintendo Switch 2向けのネイティブ版が39.99ドルで確認済みで、無料体験版もSwitch 2でプレイ可能です。レビュアーは携帯モードでの動作が非常に良好だったと評価しています。' }],
  },
  'android': {
    title: 'Android(Google Play)でのムーンライト・ピークス', dek: 'ムーンライト・ピークスはAndroid向けにGoogle Playですでに発売中——買い切り制で、ガチャやアプリ内課金はありません。',
    body: [
      'ムーンライト・ピークスは2026年7月7日にGoogle Play(Google Play Games)経由でAndroid向けに発売されました。この規模のコージーライフシムがモバイルで同時発売されるのは珍しいケースで、価格もSteam・Switchと同じ34.99ドルです。',
      '確認済み:これは買い切り制で、ガチャの仕組みやエネルギー制のタイマー、アプリ内課金はありません——PCやコンソール版と同じく、その一度の支払いでゲーム全体が遊べます。',
      'iOS版は発表されていません。モバイルではGoogle Play経由のAndroid版のみが確認済みのプラットフォームです。',
      'ここではまだ独自に確認できていない点:正確な最小動作要件と、タッチ操作の詳細な仕様全体。',
    ],
    faq: [
      { q: 'ムーンライト・ピークスはiOS・iPhoneでプレイできますか?', a: 'iOS版は発表されていません。モバイルでは、ムーンライト・ピークスはGoogle Play経由のAndroid版で提供されています。' },
      { q: 'ムーンライト・ピークスのモバイル版にガチャやアプリ内課金はありますか?', a: 'いいえ、確認済み:買い切り制でゲーム全体がその場で遊べるようになり、ガチャやエネルギー制タイマー、アプリ内課金はありません。' },
    ],
  },
};
