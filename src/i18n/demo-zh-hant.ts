// src/i18n/demo-zh-hant.ts
export const demoZhHant: Record<string, { title: string; dek: string; body: string[]; faq?: { q: string; a: string }[] }> = {
  'whats-in-the-demo': {
    title: 'Moonlight Peaks 試玩版裏有什麼',
    dek: '免費試玩版裏實際能體驗到的內容。',
    body: [
      '免費試玩版讓你創建自己的吸血鬼,並體驗一段溫馨生活——包括釣魚、插花和刺繡,加上與小鎮居民的早期互動。',
      '這只是完整體驗的一個預告,不是整個遊戲;完整版已於 2026 年 7 月 7 日發售。',
    ],
    faq: [{ q: 'Moonlight Peaks 的試玩版免費嗎?', a: '是的——在 Steam 和 Nintendo eShop(Switch 2 上也可以)都能免費獲取。' }],
  },
  'how-to-download-the-demo': {
    title: '如何下載 Moonlight Peaks 試玩版',
    dek: '在 Steam 和 Switch 上哪裏可以獲取免費試玩版。',
    body: [
      '在 Steam 上,打開 Moonlight Peaks 商店頁面,使用試玩版下載按鈕;在任天堂平臺,你可以在 eShop 裏找到試玩版,Switch 和 Switch 2 都能玩。',
      '試玩版在兩個平臺上都是免費的。',
    ],
    faq: [{ q: 'Switch 上有 Moonlight Peaks 試玩版嗎?', a: '有——免費試玩版可以在 Nintendo eShop 獲取,Switch 和 Switch 2 都能玩。' }],
  },
  'demo-vs-full-game': {
    title: 'Moonlight Peaks 試玩版 vs 完整版',
    dek: '哪些內容會保留,完整版又新增了什麼。',
    body: [
      '試玩版的進度不會轉移到完整版——正式發售版會重新開始。',
      '完整版的內容遠超試玩版的片段,包含完整的小鎮、七大家族、農耕、魔法、戀愛和結婚系統。完整細節詳見 2026 年 7 月 7 日發售的正式版本。',
    ],
    faq: [{ q: 'Moonlight Peaks 試玩版的進度會保留嗎?', a: '不會——完整版會重新開始。' }],
  },
};
