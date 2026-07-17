// src/i18n/demo-ja.ts
// Japanese translation overlay for demo/[slug] detail pages, merged onto the English base data
// (data/demo.ts) in src/pages/ja/demo/[slug].astro.
export const demoJa: Record<string, { title: string; dek: string; body: string[]; faq?: { q: string; a: string }[] }> = {
  'whats-in-the-demo': {
    title: 'ムーンライト・ピークス体験版の内容',
    dek: '無料体験版で実際にできること。',
    body: [
      '無料体験版では、自分の吸血鬼を作成し、コジーライフの一部を体験できます——釣り、生け花、刺繍、そして町の住民との初期の交流も含まれます。',
      'これはゲーム全体ではなく、本編の一部を味わえる内容です。正式版は2026年7月7日から発売されています。',
    ],
    faq: [{ q: 'ムーンライト・ピークスの体験版は無料ですか?', a: 'はい——SteamとNintendo eShop(Switch 2でも)で無料です。' }],
  },
  'how-to-download-the-demo': {
    title: 'ムーンライト・ピークス体験版のダウンロード方法',
    dek: 'SteamとSwitchで無料体験版を入手する方法。',
    body: [
      'Steamでは、ムーンライト・ピークスのストアページを開き、体験版のダウンロードボタンを使用してください。Nintendoでは、eShopで体験版を探すと、SwitchとSwitch 2の両方でプレイできます。',
      '体験版はどちらのプラットフォームでも無料です。',
    ],
    faq: [{ q: 'Switchでムーンライト・ピークスの体験版はありますか?', a: 'はい——無料体験版はNintendo eShopにあり、SwitchとSwitch 2の両方でプレイ可能です。' }],
  },
  'demo-vs-full-game': {
    title: 'ムーンライト・ピークス体験版と正式版の違い',
    dek: '引き継がれる内容と、正式版で追加される内容。',
    body: [
      '体験版の進行状況は正式版には引き継がれません——正式版は最初から始まります。',
      '正式版は体験版の範囲をはるかに超えており、完全な町、七つの家族、農業、魔法、恋愛、結婚が含まれます。2026年7月7日の発売により、詳細はすべて確認済みです。',
    ],
    faq: [{ q: 'ムーンライト・ピークスの体験版の進行状況は引き継がれますか?', a: 'いいえ——正式版は最初から始まります。' }],
  },
};
