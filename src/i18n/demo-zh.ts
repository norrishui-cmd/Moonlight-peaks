// src/i18n/demo-zh.ts
export const demoZh: Record<string, { title: string; dek: string; body: string[]; faq?: { q: string; a: string }[] }> = {
  'whats-in-the-demo': {
    title: 'Moonlight Peaks 试玩版里有什么',
    dek: '免费试玩版里实际能体验到的内容。',
    body: [
      '免费试玩版让你创建自己的吸血鬼,并体验一段温馨生活——包括钓鱼、插花和刺绣,加上与小镇居民的早期互动。',
      '这只是完整体验的一个预告,不是整个游戏;完整版已于 2026 年 7 月 7 日发售。',
    ],
    faq: [{ q: 'Moonlight Peaks 的试玩版免费吗?', a: '是的——在 Steam 和 Nintendo eShop(Switch 2 上也可以)都能免费获取。' }],
  },
  'how-to-download-the-demo': {
    title: '如何下载 Moonlight Peaks 试玩版',
    dek: '在 Steam 和 Switch 上哪里可以获取免费试玩版。',
    body: [
      '在 Steam 上,打开 Moonlight Peaks 商店页面,使用试玩版下载按钮;在任天堂平台,你可以在 eShop 里找到试玩版,Switch 和 Switch 2 都能玩。',
      '试玩版在两个平台上都是免费的。',
    ],
    faq: [{ q: 'Switch 上有 Moonlight Peaks 试玩版吗?', a: '有——免费试玩版可以在 Nintendo eShop 获取,Switch 和 Switch 2 都能玩。' }],
  },
  'demo-vs-full-game': {
    title: 'Moonlight Peaks 试玩版 vs 完整版',
    dek: '哪些内容会保留,完整版又新增了什么。',
    body: [
      '试玩版的进度不会转移到完整版——正式发售版会重新开始。',
      '完整版的内容远超试玩版的片段,包含完整的小镇、七大家族、农耕、魔法、恋爱和结婚系统。完整细节详见 2026 年 7 月 7 日发售的正式版本。',
    ],
    faq: [{ q: 'Moonlight Peaks 试玩版的进度会保留吗?', a: '不会——完整版会重新开始。' }],
  },
};
