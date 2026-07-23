// src/i18n/faq-zh.ts
export type FaqTranslationZh = { q: string; a: string; more?: string[] };

export const faqZh: Record<string, FaqTranslationZh> = {
  // ── 平台、价格 & 试玩版 ──
  'when-does-moonlight-peaks-release': {
    q: 'Moonlight Peaks 什么时候发售?',
    a: 'Moonlight Peaks 已于 2026 年 7 月 7 日发售,现已上市。',
    more: ['同一天在 Steam(PC 和 Mac)、Steam Deck、Nintendo Switch、Nintendo Switch 2 和 Android(通过 Google Play)上同步发售。'],
  },
  'how-much-does-moonlight-peaks-cost': {
    q: 'Moonlight Peaks 多少钱?',
    a: '在 Steam(PC/Mac)、Switch 和 Android 上售价 34.99 美元,Switch 2 上为 39.99 美元。',
    more: ['首发第一周有折扣,也提到过从 Switch 升级到 Switch 2 的方案。'],
  },
  'what-platforms-is-moonlight-peaks-on': {
    q: 'Moonlight Peaks 支持哪些平台?',
    a: 'Moonlight Peaks 现已在 Steam(Windows 和 Mac)、Steam Deck、Nintendo Switch、Nintendo Switch 2 和 Android(通过 Google Play)上发售。',
  },
  'is-moonlight-peaks-on-ps5-or-xbox': {
    q: 'Moonlight Peaks 有 PS5 或 Xbox 版本吗?',
    a: '简单说:没有。没有公布任何 PlayStation 或 Xbox 版本。已确认的平台是 Steam、Steam Deck、Switch、Switch 2 和 Android。',
    more: ['如果之后公布了 PS5 或 Xbox 版本,我们会更新这个页面。'],
  },
  'is-there-a-moonlight-peaks-demo': {
    q: '有 Moonlight Peaks 的试玩版吗?',
    a: '有——Steam 和任天堂 eShop 都提供免费试玩版。',
    more: ['包含角色创建和温馨活动,如钓鱼、插花和刺绣,加上与小镇居民的早期互动。'],
  },
  'does-demo-progress-carry-over': {
    q: '试玩版的进度会保留到 Moonlight Peaks 正式版吗?',
    a: '不会——没有确认任何进度转移机制,所以无论你在试玩版里进展到哪里,完整版都会重新开始。可以把试玩版当作测试节奏、操作手感和早期流程的预告片。',
  },

  // ── 通用 ──
  'what-is-moonlight-peaks-about': {
    q: 'Moonlight Peaks 讲的是什么?',
    a: '这是一款温馨的吸血鬼生活模拟游戏。你扮演德古拉伯爵的孩子,离开大城市去重建一座废弃的家族农场,小镇上满是狼人、女巫、人鱼等超自然居民。',
    more: ['你在夜里种地,学习魔法和药水酿造,与七大家族的居民交朋友或谈恋爱。'],
  },
  'who-makes-moonlight-peaks': {
    q: 'Moonlight Peaks 是谁开发的?',
    a: '由 Little Chicken Game Company 开发,美洲地区发行商为 XSEED Games,欧洲地区为 Marvelous Europe。',
  },
  'is-moonlight-peaks-multiplayer': {
    q: 'Moonlight Peaks 是多人游戏吗?',
    a: '不是——Moonlight Peaks 是纯单人体验。没有公布任何多人或联机合作模式;Steam 上标注为单人游戏,曾有玩家在 Steam 社区讨论区直接询问开发者关于联机合作的问题,但没有得到确认回应。',
    more: ['如果之后公布了联机合作功能,我们会更新此页面。'],
  },
  'moonlight-peaks-reddit-discord-community': {
    q: 'Moonlight Peaks 有官方 Reddit 或 Discord 吗?',
    a: '我们目前还没找到官方专属的 subreddit——我们不会去猜测,也不会把非官方社区当作官方来呈现。已确认的社区聚集地是官方 Discord 服务器和 Steam 社区讨论区,两者都由开发者链接。',
    more: ['如果确认了官方 subreddit,我们会加进来,而不是链接到未经验证的社区。'],
  },
  'how-to-change-portrait-style': {
    q: 'Moonlight Peaks 里怎么更改角色肖像风格?',
    a: '发售时已确认:打开主菜单(Nintendo Switch 上是"+"按钮),可以在角色肖像的两种预设之间切换——写实上色的卡通风格,或更可爱的动漫风格。',
  },
  'moonlight-peaks-age-rating': {
    q: 'Moonlight Peaks 的年龄分级是什么?',
    a: '发售时已确认:英国/欧洲 PEGI 12,美国 ESRB Teen(T)级,原因是涉及酒精内容(可以酿造并饮用啤酒和葡萄酒)以及略带暗示性的浪漫用语。',
  },
  'moonlight-peaks-crashing-freezing': {
    q: 'Moonlight Peaks 为什么会崩溃或卡死?',
    a: '多份已确认的玩家报告描述了每隔几秒出现的短暂卡顿(即使在高端 PC 上也会发生),以及在 Steam Deck 上离开农场或启动时崩溃。目前还没有官方解决方案,但更新 GPU 驱动、开启"最高性能"模式,以及在 Steam Deck 上切换到 Proton 9.0-4,对部分玩家有效。',
  },
  'moonlight-peaks-controller-not-working': {
    q: '我的手柄在 Moonlight Peaks 里不能用怎么办?',
    a: '这是一个已报告且尚未解决的问题——手柄在角色创建时能用,但之后可能失去响应,重新映射选项也会变灰。可以尝试断开重连手柄,或者暂时切换到键鼠,直到官方修复出现。',
  },
  'moonlight-peaks-crops-wither-season-change': {
    q: 'Moonlight Peaks 里换季会导致作物枯萎吗?',
    a: '是的——经测试者确认:春季转入夏季时(其他换季可能也是如此),春季作物会枯萎,连魔法作物也不例外。做好围绕季节边界规划种植的准备。',
  },
  'moonlight-peaks-mana-stamina-balance': {
    q: 'Moonlight Peaks 里法力/体力的管理难吗?',
    a: '多位测试者批评了法力管理,尤其是游戏前期——你一开始只有很少的法力池,每晚睡觉只恢复一颗星,而能恢复法力的食物/饮品早期又很稀缺。多篇评测认为,这一点加上体力条和日出限制,平衡性还有提升空间。',
  },
  'moonlight-peaks-night-length-cycle': {
    q: 'Moonlight Peaks 里一个夜晚有多长?',
    a: '已确认:游戏内的夜晚从 18:00 持续到 6:00,默认现实时长约 15 分钟(类似《星露谷物语》的一天)。为 Death 收集满 100 个灵魂球会奖励一座古董钟,能把这个时长延长到 25 分钟。',
  },
  'moonlight-peaks-how-to-save': {
    q: 'Moonlight Peaks 怎么存档?',
    a: '已确认:只能通过在棺材里睡觉存档,这会让你直接推进到第二天 18:00。半夜没有手动存档,所以要规划好活动,确保在日出前赶回去。',
  },
  'moonlight-peaks-starting-mana-energy': {
    q: '一开始有多少法力和体力?',
    a: '已确认:你一开始只有 3 点法力,每晚睡觉大约只恢复一颗星,而不是完全回满。你的体力(耐力)和法力都可以通过吃烹饪食物来恢复——所以储备一点食物比单纯依赖经济作物更重要。',
  },
  'moonlight-peaks-mini-map': {
    q: 'Moonlight Peaks 有小地图吗?',
    a: '没有——已确认没有小地图。你的位置和重要地标显示在一张完整地图上,这张地图还会显示居民当前所在的位置。',
  },
  'moonlight-peaks-well-price': {
    q: 'Moonlight Peaks 里水井多少钱?',
    a: '据报道:水井售价 1500 金,有助于浇水——比 4000 金的谷仓更便宜的早期购买项。',
  },
  'moonlight-peaks-best-universal-gifts': {
    q: 'Moonlight Peaks 里适合送给所有人的礼物是什么?',
    a: '社区礼物测试(通过 TheGamer 和玩家报告)表明,紫色郁金香普遍受欢迎,而洋葱种子普遍不受欢迎——应该避开。除此之外,大多数居民都有各自的偏好,目前仍在收集整理中。Saga 是唯一完全确认的例子:她最爱白葡萄酒和单支的花,但不喜欢花束。',
  },
  'moonlight-peaks-how-to-get-copper': {
    q: 'Moonlight Peaks 里怎么获得铜?',
    a: '已确认:铜来自回声洞穴,位于 Misty Shores 区域左下方(Orlock 庄园西边)。它一开始被 Orlock 和 Fiona 的纠纷锁住——你需要完成"Orlock 的酿酒计划"和"A Bridge Too Far",解开桥的诅咒,打开这个区域。进去之后,用镐子采集带铜色斑点的岩石;较大的矿脉可能一次给 6 份矿石而不是 1 份。在炉子用 4 份铜矿石 + 1 份木炭制作铜锭。',
  },
  'moonlight-peaks-how-to-go-on-dates': {
    q: 'Moonlight Peaks 里怎么去约会?',
    a: '已确认:先与某位居民达到 4 级好感,才能邀请对方约会。约会以小游戏的形式进行(比如按要求的颜色组一束花)——不是被动的过场动画。要找好感度事件的过场动画,打开地图查看感叹号(进入某区域触发)或建筑上的闪烁光环(进去触发)。',
  },
  'moonlight-peaks-tool-upgrade-materials': {
    q: 'Moonlight Peaks 里升级工具需要什么?',
    a: '已确认:工具在嚎叫锤子(Ridge 的商店,仅工作日周一到周五营业)升级。找 Ridge 交谈,选择"商店",再选"我想买点东西",往右滑两次到达升级标签页。升级需要金币加铜锭、银锭或金锭,具体取决于等级——所以你需要先能进入矿场。社区报告:优先把镐子升到金级,因为它决定了回声洞穴能给你多少矿石,来制作其他所有工具的材料。',
  },
  'moonlight-peaks-cant-interact-indoors': {
    q: '为什么我在家里点不了东西?',
    a: '这是一个已报告且尚未解决的 bug——部分玩家无法在室内点击物品(比如用来睡觉的棺材或宠物),而室外互动却正常。目前还没有确认的解决方法;可以尝试重新加载区域,或睡到第二天,如果问题持续,请联系 support@xseedgames.com。',
  },
  'moonlight-peaks-exe-deleted-antivirus': {
    q: '我的杀毒软件删除了 Moonlight Peaks.exe 怎么办?',
    a: '据报道:部分杀毒软件会误报并删除"Moonlight Peaks.exe",可能导致启动错误。把该 .exe 加入杀毒软件的例外列表,并检查游戏文件完整性(Steam → 右键游戏 → 属性 → 已安装的文件 → 验证文件完整性)来恢复它。',
  },

  // ── 世界 & 玩法 ──
  'is-there-combat-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里有战斗吗?',
    a: '没有。预览资料确认游戏全程都没有战斗——连矿场和地下墓穴都是平静的,全程保持温馨的基调。',
  },
  'do-you-farm-at-night': {
    q: 'Moonlight Peaks 里是在晚上种地吗?',
    a: '是的。作为吸血鬼,你会在日落之后种地和照料农场,日出之前回到棺材里——这是对常见白天农耕循环的一种反转。',
  },
  'how-does-magic-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里魔法是怎么运作的?',
    a: '魔法以魔杖为基础:你修好一根坏掉的魔杖,画出法术图案来施法,并管理法力(通过进食来恢复)。',
    more: ['有一个小小的浇水小游戏,你还会解锁省力法术来减轻农活负担。你也会酿造像"另我药水"这样能改变外貌的药剂。'],
  },
  'can-you-shapeshift-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能变身吗?',
    a: '能。你可以变身——比如变成蝙蝠——快速穿越小镇,到达隐藏区域。',
  },
  'what-is-nokturna': {
    q: 'Moonlight Peaks 里 Nokturna 是什么?',
    a: 'Nokturna 是小镇上流行的集换式卡牌游戏。你收集卡牌,和居民们对战。',
    more: ['完整规则和卡牌列表会在正式发售时确认——我们不会编造卡牌。'],
  },
  'what-pets-and-livestock-are-there': {
    q: 'Moonlight Peaks 里有什么宠物和家畜?',
    a: '你可以养一只三只眼的地狱猫作为宠物,还能饲养像德古拉羊这样的魔法家畜。',
  },

  // ── 恋爱 & 结婚 ──
  'can-you-get-married-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能结婚吗?',
    a: '能——发售时已确认。达到好感度 8 级时求婚,婚礼会在一周内举行,小镇上的吸血鬼和狼人都会来参加。之后你的伴侣会搬进你的农场,还会解锁一个额外的好感度事件。游戏里没有孩子系统。',
  },
  'can-you-have-children-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能生孩子吗?',
    a: '不能。你可以和居民约会结婚,但抚养孩子不是一个功能。',
  },
  'best-general-gifts-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里通用的保险礼物是什么?',
    a: '社区礼物测试(通过 TheGamer 和玩家报告)表明,把礼物的颜色配合居民喜欢的颜色通常反响不错,而自己用插花小游戏做出符合对方喜欢颜色的花束是一个安全又随时可用的选择——即使不被采纳也能当装饰品用。据报道:手工礼物(包括花束和刺绣)在个人偏好之外普遍反响不错。',
  },
  'how-many-romance-options-are-there': {
    q: 'Moonlight Peaks 里有多少恋爱对象?',
    a: 'Steam 页面描述约有两打(约 24 个)可恋爱的居民。早期报道曾提到过 15 个,说明阵容在开发过程中有所扩大。',
    more: ['约会不限制性别,完整命名列表已在临近发售时确认。'],
  },
  'is-dating-gender-locked-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里约会限制性别吗?',
    a: '不限制。角色模型刻意做成不分性别,所以无论你怎么创建自己的吸血鬼,都可以和任何可用居民恋爱。',
  },
  'can-you-romance-a-werewolf': {
    q: 'Moonlight Peaks 里能和狼人谈恋爱吗?',
    a: '能。Saga 是一名女性狼人,是已确认的恋爱对象。既然吸血鬼和狼人素来不和,跨越这个鸿沟去谈恋爱正是它的魅力所在。',
  },
  'can-you-date-multiple-characters': {
    q: 'Moonlight Peaks 里能同时和多个角色约会吗?',
    a: '发售前没有确认这一点——排他性和多角恋规则尚未公开。',
    more: ['一旦正式版展示了同时约会多位居民的具体规则,我们会更新这个答案。'],
  },

  // ── 角色 ──
  'who-is-saga': {
    q: 'Moonlight Peaks 里 Saga 是谁?',
    a: 'Saga 是开发者展示过的一位狼人居民,也是已确认的恋爱对象。据说她的能量会随满月变化。',
  },
  'who-is-luna': {
    q: 'Moonlight Peaks 里 Luna 是谁?',
    a: '据报道 Luna 是一位偏向农耕方向的女巫——可能是早期法术和园艺知识的来源。具体细节会在正式发售时确认。',
  },
  'who-is-orlock': {
    q: 'Moonlight Peaks 里 Orlock 是谁?',
    a: '据报道 Orlock 是一个吸血鬼家族之首,在实机试玩报道中被描绘成一个搞笑角色。',
  },
  'who-is-count-dracula': {
    q: 'Moonlight Peaks 里德古拉伯爵是谁?',
    a: '德古拉伯爵是你的父亲,也是核心剧情人物。他不是恋爱对象;剧情让你走出他的阴影,证明更温和的不死生活是可能的。',
  },

  // ── 高意图"是不是/怎么"类问题 ──
  'is-moonlight-peaks-worth-it': {
    q: 'Moonlight Peaks 值得入手吗?',
    a: '它已经确立为 2026 年最有特色的温馨模拟游戏之一——一款 3D 吸血鬼生活模拟游戏,有夜间农耕、魔杖魔法和丰富的恋爱选项——但诚实的答案是先试试免费试玩版。',
    more: ['试玩版让你免费体验角色创建器和温馨活动——这是购买前判断自己是否喜欢的最好方式。'],
  },
  'is-moonlight-peaks-free': {
    q: 'Moonlight Peaks 免费吗?',
    a: '不免费——完整版售价 34.99 美元(Switch 2 上为 39.99 美元)。不过 Steam 和任天堂 eShop 上有免费试玩版。',
  },
  'is-moonlight-peaks-open-world': {
    q: 'Moonlight Peaks 是开放世界吗?',
    a: '它没有以开放世界游戏的名义宣传。这是一款温馨生活模拟游戏,你在小镇、自己的农场以及周边区域(如森林、湖泊和矿场)之间穿行。',
    more: ['具体的地图布局以及自由探索程度会在正式发售时确认。'],
  },
  'is-moonlight-peaks-cozy': {
    q: 'Moonlight Peaks 是温馨游戏吗?',
    a: '是的。这是一款没有任何战斗的哥特式温馨生活模拟游戏,专注于种地、手工、魔法和人际关系。',
  },
  'how-long-is-moonlight-peaks': {
    q: 'Moonlight Peaks 要玩多久?',
    a: '和大多数生活模拟游戏一样,它是开放式的,而不是固定的剧情长度,所以游玩时长因人而异,差别很大。',
  },
  'is-moonlight-peaks-on-game-pass': {
    q: 'Moonlight Peaks 在 Game Pass 上吗?',
    a: '没有公布 Game Pass 上线计划,而且由于没有确认 Xbox 版本,预计也不会上 Game Pass。已确认平台是 Steam、Steam Deck、Switch、Switch 2 和 Android。',
  },
  'can-you-play-moonlight-peaks-offline': {
    q: 'Moonlight Peaks 能离线玩吗?',
    a: 'Moonlight Peaks 是单人游戏,没有公布联网要求,所以预计可以离线游玩。具体细节会在正式发售时确认。',
  },
  'is-moonlight-peaks-coming-to-mobile': {
    q: 'Moonlight Peaks 会登陆移动端吗?',
    a: '会——在发售当天就通过 Google Play 登陆了 Android。没有公布 iOS 或 iPhone 版本。',
  },
  'does-moonlight-peaks-have-co-op': {
    q: 'Moonlight Peaks 有本地或联机合作模式吗?',
    a: '没有公布任何合作模式。曾有玩家在 Steam 社区讨论区直接向开发者询问联机合作的问题,但没有得到确认回应。目前一切迹象都表明 Moonlight Peaks 是单人游戏。',
  },
  'what-age-rating-is-moonlight-peaks': {
    q: 'Moonlight Peaks 的年龄分级是什么?',
    a: '已确认:欧洲 PEGI 12,美国 ESRB Teen(T)级——尽管整体基调温馨、没有战斗,分级仍然是由酒精内容(可以酿造并饮用啤酒和葡萄酒)以及略带暗示性的浪漫用语决定的,而不是暴力内容。',
  },
  'how-do-you-make-money-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里怎么赚钱?',
    a: '已确认的主要循环是种植并出售作物——Steam 页面把解锁技能和升级的方式描述为围绕"更丰厚的收成"展开。一份次要的游戏数据库摘要补充说,更奇怪、"不自然"的作物卖得更贵,但这一细节没有得到开发者确认。具体价格、买家和售卖机制会在正式发售时确认。',
  },
  'can-you-sell-crops-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能卖作物吗?',
    a: '出售作物换取金币,作为这类农耕模拟游戏的核心循环是可以推断出来的,而且 Moonlight Peaks 自己的商店页面也把农场收入和解锁升级、技能联系了起来。我们还没看到开发者确认具体谁会买你的作物,或者出售机制在游戏机制层面如何运作——这些会在正式发售时揭晓。',
  },
  'is-there-a-shop-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里有商店吗?',
    a: '有,已确认——镇上有几家已命名的商店,包括 Webb of Wonders(Sabrina,药水和服装)、嚎叫锤子(Ridge,工具升级)、Third Eye Threads(Aras,服装)和咖啡与棺材(Mina 和 Evan 经营的咖啡馆)。出售你自己的物品是通过 Chester 单独进行的,而不是和商人交易。',
  },
  'how-to-get-dark-wood-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里怎么获得暗黑木材?',
    a: '已确认:用铜斧(升级过的斧头等级——初始生锈的斧头不行)砍伐农场地块上的大型树桩。暗黑木材用于多个装饰配方,包括一把毛皮扶手椅(需要硬木板和布料)和一个棺材书架(需要木板)。',
  },
  'how-does-the-museum-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里博物馆是怎么运作的?',
    a: '已确认:博物馆要到第一年内才会开放,前提是涉及 Persephone、Jada 和 Winston 搬到镇上的剧情线完成——而不是一开始就有。捐赠是通过走到主题收藏室并与感叹号面板互动来完成的,而不是找馆长对话。你还欠缺的收藏品会在背包里标出一个博物馆图标。品质要求因收藏而异;农业收藏特别要求更高品质的作物。',
  },
  'does-moonlight-peaks-have-accessibility-options': {
    q: 'Moonlight Peaks 有无障碍选项吗?',
    a: '有一些,但不算全面:已确认的选项包括垂直同步开关、手柄震动、屏幕互动提示和文字动画开关,外加可重新映射的按键、帧率上限和渲染缩放。未确认:目前没有报告任何色盲模式或适合阅读障碍者的文字选项。',
  },
  'can-you-romance-death-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能和 Death 谈恋爱吗?',
    a: '尚未确认。Death 在发售前泄露的游戏文件中是一个真实的名字,有自己的住所("Death 的小屋"),部分发售前传闻曾把他列为可能的恋爱对象——但这只是推测,不是开发者确认的内容。等正式版澄清这一点后我们会更新。',
  },
  'is-count-dracula-romanceable': {
    q: 'Moonlight Peaks 里德古拉伯爵是恋爱对象吗?',
    a: '不是。德古拉伯爵是你角色的父亲,也是核心剧情人物,而不是恋爱对象——游戏明确表示你和他的关系是亲情,而非浪漫关系。',
  },
  'is-logan-romanceable-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里 Logan 是恋爱对象吗?',
    a: '据报道,但还没有被开发者完全确认——Logan 作为狼人居民出现在媒体报道中,独立的线索(一篇开发日志和发售前泄露的文件)都表明他的名字和住所是真实的。在正式发售前,可以把他当作一个大概率但尚未保证的恋爱对象。',
  },
  'can-you-divorce-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里能离婚或分手吗?',
    a: '尚未确认。开发者确认了可以和恋爱对象结婚,但之后能不能离婚、分手,或者再婚,我们目前没有找到任何相关说明。',
  },
  'is-there-a-wedding-ceremony-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里有婚礼仪式吗?',
    a: '尚未确认。结婚本身已经确认,但它是否伴随真正的仪式、宾客或专门的活动——而不只是一个菜单确认——目前还没有展示或描述过。',
  },
  'do-families-disapprove-of-cross-family-romance': {
    q: 'Moonlight Peaks 里家族会反对跨家族恋爱吗?',
    a: '作为游戏机制尚未确认,但这符合游戏的基调:据报道吸血鬼和狼人一直争吵不休,媒体报道也描述了小镇超自然家族之间的一段旧恩怨。这是否会转化为跨家族恋爱的实际反对机制,目前未知。',
  },
  'is-moonlight-peaks-scary': {
    q: 'Moonlight Peaks 恐怖吗,算恐怖游戏吗?',
    a: '不算。尽管有哥特式美学(吸血鬼、墓地,还有一个角色直接就叫 Death),但目前展示过的所有内容——试玩版、媒体预览、官方预告片——都指向温馨轻松的基调。报道把它的社交剧情描述为"萌系但严重有毒",而不是恐怖。目前没有确认任何战斗或恐怖内容。',
  },
  'is-moonlight-peaks-based-on-a-book-or-show': {
    q: 'Moonlight Peaks 改编自某本书、电影或剧集吗?',
    a: '不是。据我们所知,Moonlight Peaks 是 Little Chicken Game Company 的原创作品——它没有改编任何现有的书籍、电影或剧集。',
  },
  'does-moonlight-peaks-have-a-tutorial': {
    q: 'Moonlight Peaks 有新手教程吗?',
    a: '细节尚未确认,但免费试玩版已经通过角色创建和一些核心活动(钓鱼、插花、刺绣)以及早期的小镇互动,为新玩家提供了引导——即使没有正式宣布"教程模式",这也起到了柔和入门的作用。',
  },
  'does-moonlight-peaks-have-a-story': {
    q: 'Moonlight Peaks 有剧情吗,还是完全开放式?',
    a: '它有一个轻量的叙事起点——你是一名吸血鬼,搬进废弃的家族农场,向持怀疑态度的父亲证明更温和的不死生活是可能的——建立在一个开放式的温馨生活模拟循环(种地、魔法、人际关系)之上。除了这个前提之外还有多少剧本化的叙事内容,目前还没有详细描述。',
  },
  'does-moonlight-peaks-support-a-controller': {
    q: 'Moonlight Peaks 能用手柄玩吗?',
    a: '能,在 Switch、Switch 2 和 Steam Deck 上,手柄是默认输入方式。在 PC 上,一篇媒体实机预览明确建议用手柄而不是键鼠,暗示游戏本身设计时就考虑了手柄操作,即便在 Steam 上也是如此。',
  },
  'is-moonlight-peaks-difficult': {
    q: 'Moonlight Peaks 难吗,会失败吗?',
    a: '没有任何迹象表明有严苛的难度——没有确认战斗,基调也一直是温馨而非挑战导向。是否存在失败条件(比如没钱了)或难度选项,目前还没有详细描述。',
  },
  'does-moonlight-peaks-have-voice-acting': {
    q: 'Moonlight Peaks 有配音吗?',
    a: '未确认。我们看过的试玩版、预告片或媒体报道里都没有提到配音对白——在正式发售前,这一点保持未确认状态。',
  },
  'is-moonlight-peaks-turn-based-or-real-time': {
    q: 'Moonlight Peaks 是回合制还是实时制?',
    a: '实时制,和大多数这类温馨生活模拟游戏一样——昼夜时钟会在你种地、探索、和居民交谈时持续走动,而不是等你完成一个回合。',
  },
  'does-moonlight-peaks-have-achievements': {
    q: 'Moonlight Peaks 有成就或奖杯吗?',
    a: '目前任何平台都还没有确认。如果 Steam 成就或特定平台的奖杯列表存在,我们会在正式版发售后记录下来。',
  },
  'is-moonlight-peaks-family-friendly': {
    q: 'Moonlight Peaks 适合孩子玩吗?',
    a: '从温馨基调和没有战斗来看,大多数年龄段可能都合适,但我们无法给出确切答案——截稿时游戏还没有 ESRB 分级(部分媒体报道过主机/移动端的 Teen 分级,但我们无法独立核实)。等官方分级确认后请查看,尤其考虑到游戏面向成人的恋爱和结婚系统。',
  },
  'how-to-get-married-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里怎么结婚?',
    a: '发售时已确认:约会在好感度 4 级解锁,好感度达到 8 级就可以求婚。约会以小游戏形式进行(比如按要求的颜色组一束花)——有可能约会失败,比如迟到,这会扣掉好感度点数,但不会直接分手。求婚后一周内举行婚礼,小镇上的吸血鬼和狼人都会来参加。婚姻本身是一夫一妻制,婚后伴侣会搬进你的农场。',
  },
  'can-you-date-multiple-people-moonlight-peaks': {
    q: 'Moonlight Peaks 里能同时和多人约会吗?',
    a: '能,发售时已确认——你可以同时追求多位居民。他们会注意到并有所反应,但被描述为轻微的吃醋,而不是硬性的竞争系统。一旦求婚,婚姻本身是严格一夫一妻制的。',
  },
  'moonlight-peaks-step-parent-children': {
    q: 'Moonlight Peaks 里能有孩子或成为继父母吗?',
    a: '不能有亲生孩子——多个来源确认,也没有公布添加这个机制的计划。据报道的一个细节:如果你和已经有孩子的年长角色结婚,比如 Orlock(Mina 和 Evan 的父亲),你就会成为他们的继父母。',
  },
  'how-to-turn-into-a-bat-hellkitten': {
    q: 'Moonlight Peaks 里怎么变成蝙蝠或地狱猫?',
    a: '发售时已确认:一旦通过剧情推进解锁变身能力,长按左扳机打开法术轮盘,选择你的形态——蝙蝠用于快速旅行,或你的三眼地狱猫用于更快的移动和免费耕地。',
  },
  'is-there-fast-travel-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里有快速旅行吗?',
    a: '有,多个来源确认:女巫团提供镇内快速旅行选项,蝙蝠形态解锁后也能快速穿越地图。游戏没有小地图或任务标记系统,所以游戏内地图(带有感叹号和闪烁光环符号,标记待处理剧情)是主要的导航辅助工具。',
  },
  'how-to-find-quests-heart-events': {
    q: 'Moonlight Peaks 里怎么找到任务和好感度事件?',
    a: '发售时已确认:查看地图上的标记——感叹号表示进入该区域会触发剧情,建筑周围的闪烁光环表示进去会触发剧情。镇上的告示板(由猫头鹰 Albertus 管理)也列出了可接的委托/任务。',
  },
  'how-many-quests-are-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里有多少任务?',
    a: '经交叉核对的任务日志确认:主线剧情至少包含 20 多个已命名任务,从抵达小镇一直到婚礼剧情线,外加多个已确认的支线任务和持续系统,比如告示板。可能还有比目前记录更多的剧情内容。',
    more: ['完整任务指南见 /quests(目前仅有英文版)。'],
  },
  'what-does-a-bridge-too-far-quest-unlock': {
    q: 'Moonlight Peaks 里 "A Bridge Too Far" 任务解锁了什么?',
    a: '已确认:完成后会解除通往 Misty Shores 的桥的诅咒,打开这个区域(包括回声洞穴,你最早的铜矿石来源)以及墓地,并触发下一段在 Crest Garden 展开的剧情线。',
  },
  'what-quest-unlocks-hellkitten-form': {
    q: '哪个任务解锁地狱猫(猫形态)?',
    a: '经交叉核对的任务日志确认:任务"The Dinner Party"奖励猫形态(地狱猫变身)。它出现在"A Bridge Too Far"之后的几个剧情节点,紧随法力提取器任务链之后。',
  },
  'why-is-my-quest-not-starting-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里任务为什么不触发?',
    a: '社区报告:很多任务只是通过进入新区域、等待特定天数,或阅读一封信/邀请函来触发,而不是靠明显的屏幕提示。如果某个任务卡住了,先检查这条任务链的前一个任务是否真的完成了、天数是否够了,以及你是否进入了下一步所绑定的区域或建筑。',
  },
  'how-does-the-job-board-work-in-moonlight-peaks': {
    q: 'Moonlight Peaks 里告示板是怎么运作的?',
    a: '已确认:Albertus 打工板是市政厅里一块持续可用、可重复完成的告示板,由猫头鹰 Albertus 管理。完成一份公告的委托能获得金币,有时还有物品,以及和委托人的好感度提升——这是一个持续性系统,而不是一次性任务。',
  },
  'what-are-the-main-story-quests-in-moonlight-peaks': {
    q: 'Moonlight Peaks 的主线任务按顺序是什么?',
    a: '经交叉核对的任务日志确认:任务链大致从在市政厅登记、遇见 Orlock 开始,经过"A Bridge Too Far"(Fiona/Orlock 的桥梁纠纷)、Crest Garden 的一个谜团、解锁你的第一个魔法和法力提取器、"The Dinner Party"(解锁猫形态),一直到一段婚礼剧情线。完整的分章节顺序和解锁条件见总览页面。',
  },
};
