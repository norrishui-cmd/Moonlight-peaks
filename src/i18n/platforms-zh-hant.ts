// src/i18n/platforms-zh-hant.ts
export type PlatformTrZhHant = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsZhHant: Record<string, PlatformTrZhHant> = {
  'steam-deck': {
    title: 'Moonlight Peaks Steam Deck', dek: 'Moonlight Peaks 已在 PC 和 Mac 版 Steam 上發售,因此也可以在 Steam Deck 上運行。',
    body: [
      'Moonlight Peaks 已在 Windows 和 Mac 版 Steam 上發售,所以和其他 Steam 遊戲一樣能在 Steam Deck 上運行。',
      '一個已確認的首發周問題:部分玩家在 Steam Deck 上啓動時會遇到崩潰。據報道的解決方法是把兼容性工具切換到 Proton 9.0-4(在遊戲的 屬性 → 兼容性 設置中)。目前這裏還沒有官方 Valve"Steam Deck 認證"評級。',
    ],
    faq: [{ q: 'Moonlight Peaks 通過 Steam Deck 認證了嗎?', a: '目前這裏還沒有官方 Valve"Steam Deck 認證"評級。遊戲可以在 Deck 上通過 Steam 運行;如果啓動時崩潰,據報道切換到 Proton 9.0-4 可以解決。' }],
  },
  'switch': {
    title: 'Moonlight Peaks Nintendo Switch', dek: 'Moonlight Peaks 已在初代 Nintendo Switch 上發售——價格、免費試玩版,以及 Switch 2 升級方案。',
    body: [
      'Moonlight Peaks 已於 2026 年 7 月 7 日在初代 Nintendo Switch 上發售,eShop 上也有免費試玩版。',
      '此外還有單獨推出的強化版 Nintendo Switch 2 版本;購買初代 Switch 版本的玩家被告知會提供從 Switch 升級到 Switch 2 的通行證。',
      '發售時已確認:從一開始就完整支持手柄——評測者將這款遊戲描述爲專爲手柄設計,這和便攜式 Switch 遊戲很契合。',
    ],
    faq: [{ q: 'Moonlight Peaks 在初代 Nintendo Switch 上嗎?', a: '是的——已於 2026 年 7 月 7 日在初代 Switch 上發售,eShop 上有免費試玩版。此外還有單獨推出的強化版 Switch 2 版本。' }],
  },
  'switch-2': {
    title: 'Moonlight Peaks Nintendo Switch 2', dek: '原生 Nintendo Switch 2 版本已確認售價 39.99 美元——以下是評測者在掌機模式下的體驗。',
    body: [
      'Moonlight Peaks 在初代 Switch 版本之外還有自己獨立的 Nintendo Switch 2 版本,售價 39.99 美元(相比之下 Steam、Switch 和 Android 上是 34.99 美元),免費試玩版也可以在 Switch 2 上運行。',
      '爲購買初代 Switch 版本的玩家提到了從 Switch 升級到 Switch 2 的通行證。',
      '首發周評測確認:Switch 2 版本在掌機模式下表現異常出色,按鍵佈局紮實且組織合理——在已確認的平臺中,是掌機體驗最出色的之一。',
    ],
    faq: [{ q: 'Moonlight Peaks 有 Switch 2 版本嗎?', a: '有——原生 Nintendo Switch 2 版本已確認售價 39.99 美元,免費試玩版也可以在 Switch 2 上運行。評測者認爲它在掌機模式下表現異常出色。' }],
  },
  'android': {
    title: 'Moonlight Peaks Android(Google Play)', dek: 'Moonlight Peaks 已通過 Google Play 在 Android 上發售——一次性買斷,沒有抽卡或內購。',
    body: [
      'Moonlight Peaks 已於 2026 年 7 月 7 日通過 Google Play(Google Play Games)在 Android 上發售,這使它成爲少數幾款這個規模的溫馨生活模擬遊戲中,首發當天就登陸移動端的作品之一,價格與 Steam 和 Switch 相同,都是 34.99 美元。',
      '已確認:這是一次性買斷,沒有抽卡機制、體力計時器或內購——用這一個價格就能解鎖完整遊戲,和 PC 或主機版完全一樣。',
      '目前沒有公佈 iOS 版本;通過 Google Play 上的 Android 是唯一已確認的移動平臺。',
      '這裏還未獨立確認:確切的最低設備配置要求,以及觸屏操作方案的完整細節。',
    ],
    faq: [
      { q: 'Moonlight Peaks 在 iOS 或 iPhone 上嗎?', a: '目前沒有公佈 iOS 版本。在移動端,Moonlight Peaks 可以通過 Google Play 上的 Android 版本獲得。' },
      { q: 'Moonlight Peaks 移動版有抽卡或內購嗎?', a: '沒有,已確認:這是一次性買斷,完整遊戲全部解鎖,沒有抽卡、體力計時器或內購。' },
    ],
  },
};
