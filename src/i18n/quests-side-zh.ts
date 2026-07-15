// src/i18n/quests-side-zh.ts
// Simplified Chinese translations for side quests (title/summary/reward/troubleshooting text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrZh = { title: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const sideQuestsZh: Record<string, SideQuestTrZh> = {
  'noels-fishing-contest': {
    title: 'Noel的钓鱼比赛(第一根鱼竿)',
    summary: '确认:在游戏最初几个夜晚内，Noel会在河边向你发起钓鱼比赛的挑战——比他先钓到3种不同的鱼。比赛没有时间限制，所以很容易赢。社区报告:有些攻略提到比赛涉及250金的赌注，所以开始前身上备点钱可能有用，不过这并不是一个硬性要求。',
    reward: '你的第一根鱼竿，外加一笔奖金',
    troubleshooting: [
      { q: '我还没有鱼竿——去哪里能拿到?', a: '确认(与whisperofthehouse.com的解锁条件指南交叉核实):鱼竿在任何商店都买不到——它是Noel钓鱼比赛的任务奖励。如果你还没在河边遇见Noel，那才是真正的卡点，而不是缺了某个购买项。' },
      { q: '找不到Noel开始比赛怎么办?', a: '社区报告:Noel在游戏早期通常出现在河边。如果已经过了好几个游戏内的夜晚都没见到他的踪影，先检查一下你是否完成了最早的引导任务(在镇公所登记、结识镇上居民)，因为部分早期NPC要等这些任务完成后才会出现。' },
    ],
  },
  'fix-the-roof': {
    title: '修屋顶(房屋升级被锁)',
    summary: '确认:Ridge给出的一个任务，解锁房屋升级(之后在Howling Hammer购买)。同时也会解锁Refiner的建造图纸。',
    reward: '获得房屋升级权限、Refiner建造图纸',
    troubleshooting: [
      { q: 'Howling Hammer不卖我房屋升级——为什么?', a: '确认:房屋升级要先完成Ridge的"修屋顶"任务才能解锁。如果Howling Hammer里没有显示升级选项，说明缺的是这个任务，而不是商店出了bug。' },
      { q: '我没有Refiner，做不了饲料或木板——是什么卡住了?', a: '确认:Refiner的建造图纸是与这条修屋顶任务链绑定的奖励，不是单独购买的东西。请先完成"修屋顶"。' },
    ],
  },
  'the-magic-of-crops': {
    title: '作物的魔法(Aquaflux/坏掉的法杖)',
    summary: '确认:Luna通过书信触发的一个任务，解锁Aquaflux法术(魔法自动浇水)——这是通向"魔力探寻之旅"，并最终通向法杖修复与施法系统的前置任务。',
    reward: '解锁Aquaflux法术',
    troubleshooting: [
      { q: '我的法杖还是坏的——怎么修?', a: '社区报告(whisperofthehouse.com):法杖修复不是靠商店购买的——它来自这条剧情任务链(Luna→Sabrina→Fiona→魔力提取器→Aquaflux)。如果你还没从Luna那里触发"作物的魔法"，那才是真正的起点。' },
      { q: '我没有Aquaflux，只能手动浇水卡住了——触发条件是什么?', a: '确认:这个任务由Luna的来信触发。如果还没开始，先确认你是否已经推进了更早的剧情节点(直到"遥远的桥")，因为后续的来信通常要等前置任务完成才会触发。' },
    ],
  },
  'the-net-and-death': {
    title: '解锁捕虫网(Death与Soul Blobs)',
    summary: '确认(与whisperofthehouse.com交叉核实):捕虫网要通过Death获得，前提是完成Orlock的酿酒计划、遥远的桥，并解锁Misty Shores——不是商店道具。在小镇上第二次遇见Death后，他会介绍100个Soul Blobs，并让你用网把它们都收集起来。',
    reward: '捕虫网(用于捕捉虫子/Soul Blobs);集齐全部100个Soul Blobs后获得古董钟(将夜晚时长从15分钟延长到25分钟)',
    troubleshooting: [
      { q: '我抓不到虫子或Soul Blobs——网在哪里?', a: '确认:网在任何地方都买不到——它要通过Death解锁，前提是完成更早的剧情进度(Orlock的酿酒计划、遥远的桥，以及解锁Misty Shores)。如果你还没见过Death两次，那就是卡点所在。' },
      { q: '在月光峰哪里能找到Death?', a: '确认:在小镇上，位于Ambrosia墓地区域，该区域在"遥远的桥"解锁Misty Shores之后开放。' },
      { q: '为什么我用网总是抓不到虫子和Soul Blobs?', a: '确认:每次挥网都会消耗体力，无论有没有抓到都一样，所以挥空也会耗体力。社区报告:虫子和Soul Blobs在你跑步靠近时往往会逃跑，所以慢慢走近再挥网，命中率更高，也比冲刺过去更省体力。' },
    ],
  },
  'vampster-collection-quest': {
    title: 'Vampster大集合',
    summary: '确认:在Cave of Echoes里能找到的Alina会解释，散落在镇上各处的100只Vampster都迷路了，需要你把它们一只一只运回Misty Shores的一个洞穴。其中有一只叫Larry，确认住在Alina自己家里，它会选择留下而不是被收集。',
    troubleshooting: [
      { q: '我总是弄丢正在运送的Vampster——为什么?', a: '社区报告:跟任何居民对话，或触发任何过场动画，都会让你手上正在运送的Vampster掉落。它会留在被放下的地方，所以出发前最好先清空对话密集的区域。' },
      { q: '我开始不了这个任务——Alina在哪里?', a: '确认:在Cave of Echoes里，而这个地方只有在"遥远的桥"解锁Misty Shores之后才会开放。如果你还没到达Cave of Echoes，那就是前置条件所在。' },
    ],
  },
  'albertus-job-board': {
    title: 'Albertus的工作没有显示',
    summary: '确认:这是一个持续存在、可重复完成的支线系统，而不是一次性任务——在镇公所Albertus的布告栏上会发布一些短小的委托，每个都会奖励金币，有时还有道具，以及与发布者的好感度。',
    troubleshooting: [
      { q: '镇公所的工作布告栏看起来是空的——是bug吗?', a: '社区报告:布告栏要先通过"在镇公所登记"到达镇公所才会开放。如果你已经完成登记但仍然什么都看不到，工作内容可能只是按周期刷新，不会一直有东西可接——睡一觉之后再来看看。' },
    ],
  },
  'npc-stuck-cant-interact': {
    title: 'NPC卡住了/僵住不说话',
    summary: '经游戏官方"已知问题"追踪和Steam社区bug报告确认:部分玩家发现某个特定NPC(尤其是Orlock)卡在原地，无法互动。这是一个已知但尚未解决的bug，而不是任务限制导致的问题。',
    troubleshooting: [
      { q: 'NPC对我的对话没有反应——是bug还是我漏了什么?', a: '经官方"已知问题"追踪确认:这个问题已被报告，尤其常见于Orlock卡在原地的情况。重新加载该区域、睡一觉到第二天，目前对受影响的玩家都没有效果，也还没有确认的解决办法。这是一个真实的bug，不是你漏掉了什么任务要求。' },
      { q: '在等待修复期间有临时解决办法吗?', a: '在官方Steam bug帖子里有玩家报告:重新加载区域和睡到第二天都无效之后，反复从NPC的东南方向进行互动，最终成功触发了对话。这不是保证有效的办法，但目前是唯一被报告确实有效的临时解决方案。' },
      { q: '如果我遇到这种情况该怎么办?', a: '确认:发邮件到support@xseedgames.com，注明你的平台并描述具体情况，因为目前还没有玩家端能保证生效的解决办法。' },
    ],
  },
  'form-wheel-softlock': {
    title: '卡在变身轮盘上/无法移动',
    summary: '经Steam上官方开发者的bug追踪帖确认:部分键鼠玩家会卡在打开的变身轮盘界面上(尤其是在离开Ambrosia庄园时)，无法关闭轮盘或恢复操作。',
    troubleshooting: [
      { q: '我卡在打开的变身轮盘上无法移动——怎么办?', a: '经XSEED Games官方开发者帖子确认:这个问题影响了键鼠玩家，通常发生在离开Ambrosia庄园时。有一个被报告的原因是没有给"变身轮盘"这个操作绑定任何按键——检查一下设置里的按键绑定，看是否有"打开变身轮盘"这一项(部分配置下默认是R键)，如果是空的就绑定一个。' },
      { q: '我被锁在这个状态里，进不了设置菜单——现在怎么办?', a: '经同一开发者帖子确认:受影响的玩家不得不强制关闭游戏(PC上按Alt+F4)作为最后手段。由于游戏只在睡觉时存档，你可能会丢失自上次存档以来的进度——通过官方bug帖或support@xseedgames.com向XSEED Games反馈问题，以便他们优先修复。' },
    ],
  },
  'elviras-treasure-hunt': {
    title: 'Elvira的寻宝之旅(失落的宝物猎人)',
    summary: '确认:Elvira会让你在镇上完成一场5个线索的寻宝任务——据报告的路线是:Samael的酒吧→墓地→矿场的一口钟→Cave of Echoes→Khazan神殿。完成后与"失落的宝物猎人"成就绑定。',
    reward: '"失落的宝物猎人"成就',
    troubleshooting: [
      { q: '我卡在Elvira寻宝任务的某个线索上——路线是什么?', a: '社区报告:确认的地点顺序是Samael的酒吧(The Broken Lamp)、然后是墓地、然后是矿场的一口钟、然后是Cave of Echoes，最后是Khazan神殿。如果你卡在某个线索上，先确认自己是否已经彻底探索过上一个地点——据报告线索是绑定在每个区域内的特定地点，而不是只要进入大致范围就行。' },
      { q: '这个任务从哪里开始?', a: '确认:由Elvira给出。如果你还没见过她，或者她没有任务可接，她的线索链可能被更早的剧情进度锁着，因为Khazan神殿那一段需要更晚才会开放的区域。' },
    ],
  },
  'ui-softlock-after-shop': {
    title: '离开商店后界面卡死/无响应',
    summary: '经Steam社区官方bug报告确认:部分玩家在离开商店或某个任务过场动画后，所有UI元素都失效了，无法打开任何菜单或进入其他地点——通常在连续游玩约2小时后出现，有时之前会伴随卡顿。',
    troubleshooting: [
      { q: '我离开了商店或过场动画，现在什么都没反应了——这是已知bug吗?', a: '经多份Steam社区官方报告确认:是的，这是一个已知的卡死问题，最常见于连续游玩约2小时之后，有时发生前会出现卡顿。这不是你操作上的问题。' },
      { q: '有解决办法或临时方案吗?', a: '目前还没有确认有效的玩家端解决办法。受影响的玩家不得不强制关闭游戏。由于月光峰只在睡觉时存档，你可能会丢失自上次存档以来的进度——把你的平台信息反馈给support@xseedgames.com，帮助开发者优先处理补丁。' },
      { q: '我能预防这种情况发生吗?', a: '尚未确认，但作为预防措施:比其他种田模拟游戏更频繁地睡觉存档，因为没有手动存档功能;如果发现开始出现卡顿，考虑每隔一两个小时短暂休息一下。' },
    ],
  },
  'lost-save-data': {
    title: '存档数据丢失/进度消失',
    summary: '经Steam社区官方报告确认:玩家在游戏崩溃或意外关闭(例如停电)后，丢失了好几个夜晚的进度，因为月光峰只在睡觉时存档，没有手动存档选项。',
    troubleshooting: [
      { q: '我的存档在崩溃或停电后消失了——能找回来吗?', a: '经Steam社区官方报告确认:这种情况也发生在其他玩家身上，目前没有确认的恢复方法——游戏只在你在棺材里睡觉时才会写入存档，所以如果游戏意外关闭，上次睡觉之后的一切都会丢失。' },
      { q: '如果我想自己备份存档，存档文件在哪里?', a: '经XSEED Games官方开发者的帖子确认——Windows:%USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/。Mac:~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/。在一次不错的游玩之后手动复制这个文件夹是个合理的预防措施，直到(如果)手动/小型存档功能被加入。' },
      { q: '要怎么向开发者反馈这个问题?', a: '确认:发邮件到support@xseedgames.com。如果丢失是崩溃导致的，也请检查一下%LOCALAPPDATA%\\CrashDumps文件夹里是否有"Moonlight Peaks.exe"的崩溃转储文件并一并提及——开发者在官方bug追踪帖里要求提供这些细节。' },
      { q: '有手动存档选项吗?', a: '目前没有——确认发售时缺失此功能。在棺材里睡觉是唯一的存档方式，这也是游戏官方Steam社区bug帖里被频繁要求加入的功能。' },
    ],
  },
  'fallen-tree-arborascend': {
    title: '找不到倒下的树(神秘海湾)',
    summary: '经PC Gamer确认:在"神秘海湾"任务中，你需要清除一棵倒下的树，好让你新发现的人鱼邻居们能重新回到镇上。这棵树不在大多数玩家猜测的Howling Marshes——它挡在另一个区域的瀑布前。解决办法是法术而不是工具:在Webb of Wonders向Sabrina购买Arborascend法术，然后对倒下的树施法(消耗3点魔力)，触发一段清除树木的过场动画。',
    reward: '为Hosu人鱼家族重返小镇扫清道路;通向Samael的恋爱剧情线',
    troubleshooting: [
      { q: '挡住瀑布的那棵倒树到底在哪里?', a: '经PC Gamer确认:不在Howling Marshes，尽管那是最容易猜到的地方。它挡在另一个区域的瀑布前，与Hosu人鱼家族返镇的路线有关——如果你已经检查过Howling Marshes什么都没找到，这正好说明你找错了地方，而不是漏看了那里的隐藏地点。' },
      { q: '我没有能清理这棵树的工具——需要什么?', a: '确认:根本不是工具——你需要的是Arborascend法术，在Webb of Wonders向Sabrina购买。施放需要消耗3点魔力，所以出发前请确保存够了魔力(吃恢复魔力的食物有帮助)，因为你无法手动砍掉或推开这棵树。' },
      { q: '我买了Arborascend，但在树那里什么都没发生——为什么?', a: '社区报告:直接对倒下的树施放Arborascend会触发一段清除它的过场动画。如果什么都没发生，先仔细确认一下你是否真的有足够的魔力(3点)来施法，而不是直接认定法术失效了。' },
    ],
  },
};
