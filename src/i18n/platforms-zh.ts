// src/i18n/platforms-zh.ts
export type PlatformTrZh = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsZh: Record<string, PlatformTrZh> = {
  'steam-deck': {
    title: 'Moonlight Peaks Steam Deck', dek: 'Moonlight Peaks 已在 PC 和 Mac 版 Steam 上发售,因此也可以在 Steam Deck 上运行。',
    body: [
      'Moonlight Peaks 已在 Windows 和 Mac 版 Steam 上发售,所以和其他 Steam 游戏一样能在 Steam Deck 上运行。',
      '一个已确认的首发周问题:部分玩家在 Steam Deck 上启动时会遇到崩溃。据报道的解决方法是把兼容性工具切换到 Proton 9.0-4(在游戏的 属性 → 兼容性 设置中)。目前这里还没有官方 Valve"Steam Deck 认证"评级。',
    ],
    faq: [{ q: 'Moonlight Peaks 通过 Steam Deck 认证了吗?', a: '目前这里还没有官方 Valve"Steam Deck 认证"评级。游戏可以在 Deck 上通过 Steam 运行;如果启动时崩溃,据报道切换到 Proton 9.0-4 可以解决。' }],
  },
  'switch': {
    title: 'Moonlight Peaks Nintendo Switch', dek: 'Moonlight Peaks 已在初代 Nintendo Switch 上发售——价格、免费试玩版,以及 Switch 2 升级方案。',
    body: [
      'Moonlight Peaks 已于 2026 年 7 月 7 日在初代 Nintendo Switch 上发售,eShop 上也有免费试玩版。',
      '此外还有单独推出的强化版 Nintendo Switch 2 版本;购买初代 Switch 版本的玩家被告知会提供从 Switch 升级到 Switch 2 的通行证。',
      '发售时已确认:从一开始就完整支持手柄——评测者将这款游戏描述为专为手柄设计,这和便携式 Switch 游戏很契合。',
    ],
    faq: [{ q: 'Moonlight Peaks 在初代 Nintendo Switch 上吗?', a: '是的——已于 2026 年 7 月 7 日在初代 Switch 上发售,eShop 上有免费试玩版。此外还有单独推出的强化版 Switch 2 版本。' }],
  },
  'switch-2': {
    title: 'Moonlight Peaks Nintendo Switch 2', dek: '原生 Nintendo Switch 2 版本已确认售价 39.99 美元——以下是评测者在掌机模式下的体验。',
    body: [
      'Moonlight Peaks 在初代 Switch 版本之外还有自己独立的 Nintendo Switch 2 版本,售价 39.99 美元(相比之下 Steam、Switch 和 Android 上是 34.99 美元),免费试玩版也可以在 Switch 2 上运行。',
      '为购买初代 Switch 版本的玩家提到了从 Switch 升级到 Switch 2 的通行证。',
      '首发周评测确认:Switch 2 版本在掌机模式下表现异常出色,按键布局扎实且组织合理——在已确认的平台中,是掌机体验最出色的之一。',
    ],
    faq: [{ q: 'Moonlight Peaks 有 Switch 2 版本吗?', a: '有——原生 Nintendo Switch 2 版本已确认售价 39.99 美元,免费试玩版也可以在 Switch 2 上运行。评测者认为它在掌机模式下表现异常出色。' }],
  },
  'android': {
    title: 'Moonlight Peaks Android(Google Play)', dek: 'Moonlight Peaks 已通过 Google Play 在 Android 上发售——一次性买断,没有抽卡或内购。',
    body: [
      'Moonlight Peaks 已于 2026 年 7 月 7 日通过 Google Play(Google Play Games)在 Android 上发售,这使它成为少数几款这个规模的温馨生活模拟游戏中,首发当天就登陆移动端的作品之一,价格与 Steam 和 Switch 相同,都是 34.99 美元。',
      '已确认:这是一次性买断,没有抽卡机制、体力计时器或内购——用这一个价格就能解锁完整游戏,和 PC 或主机版完全一样。',
      '目前没有公布 iOS 版本;通过 Google Play 上的 Android 是唯一已确认的移动平台。',
      '这里还未独立确认:确切的最低设备配置要求,以及触屏操作方案的完整细节。',
    ],
    faq: [
      { q: 'Moonlight Peaks 在 iOS 或 iPhone 上吗?', a: '目前没有公布 iOS 版本。在移动端,Moonlight Peaks 可以通过 Google Play 上的 Android 版本获得。' },
      { q: 'Moonlight Peaks 移动版有抽卡或内购吗?', a: '没有,已确认:这是一次性买断,完整游戏全部解锁,没有抽卡、体力计时器或内购。' },
    ],
  },
};
