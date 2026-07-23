// src/i18n/locations-zh.ts
export type LocationTrZh = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsZh: Record<string, LocationTrZh> = {
  town: {
    title: '小镇', dek: '七大超自然家族的魔法山间小镇,你在这里开始吸血鬼的新生活。',
    body: [
      'Moonlight Peaks 的故事发生在一座魔法山间小镇,几个世纪以来一直是七大家族的家园。你以一名年轻吸血鬼的身份到来,离开了大城市。',
      '小镇把温馨的村庄生活和超自然元素混合在一起——你的邻居是狼人、女巫、人鱼等等,认识他们是游戏的重要部分。',
    ],
    faq: [
      { q: 'Moonlight Peaks 的故事发生在哪里?', a: '发生在一座魔法山间小镇,是七大超自然家族的家园。' },
      { q: 'Moonlight Peaks 里的邻居是谁?', a: '已确认:分属七大家族的狼人、女巫、人鱼和其他超自然居民——认识他们是游戏的核心内容。' },
    ],
  },
  'town-square': {
    title: '小镇广场', dek: '小镇的社区中心,居民聚集、季节活动举办的地方。',
    body: [
      '和大多数温馨模拟游戏的小镇一样,Moonlight Peaks 也聚焦于居民每天会经过的社区空间。',
      '季节性庆典是小镇生活的一部分——已展示过一位戏剧化的活动主持人在这里活跃气氛。具体布局和在这里举办的活动会在正式发售时确认。',
    ],
  },
  'your-farm': {
    title: '你的农场', dek: '你搬进并重建为月光农场的那座废弃家族农场。',
    body: [
      '你的起点是一座废弃的家族农场,把它重建为正常运作的农场是游戏的核心。',
      '你种植被施了魔法的作物和发光的花朵,饲养像德古拉羊这样的魔法家畜——这一切都在夜里维护,因为日出时你要回到棺材里。',
      '已确认:你在创建角色时给自己的农场命名(连同你的地狱猫一起)——并没有唯一固定的"官方"名字,因为这是你自己选择的名字。发售前泄露的文件中提到过一个内部工作代号"the Plot",但那只是开发者一侧的标签,不是你在游戏里看到或选择的名字。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里白天能种地吗?', a: '不能——你在夜里种地,日出时回到棺材里。' },
      { q: 'Moonlight Peaks 里你的农场叫什么名字?', a: '没有唯一固定的名字——已确认:你在创建角色时自己选择农场的名字,就像给角色和地狱猫命名一样。' },
    ],
  },
  'your-cottage': {
    title: '你的小屋', dek: '你可以自定义的哥特风住所,可以按自己的喜好装饰和布置。',
    body: [
      '你住在一座哥特风小屋里,可以把它变成自己的家。装饰——摆放和布置家具与装饰品——是核心的温馨活动之一。',
      '具体有哪些房间、家具套装和自定义选项,会在完整版正式发售时确认。',
    ],
  },
  forest: {
    title: '森林', dek: '小镇周围的树林,你在这里日落之后采集。',
    body: [
      '在森林里采集是游戏已确认的活动之一,所以可以期待在小镇边缘的树林间发现应季的东西。',
      '具体能采集到什么,以及森林里有没有地标,会在完整版正式发售时确认。',
    ],
  },
  lake: {
    title: '银纱湖', dek: '小镇已确认的湖泊,是钓鱼活动和人鱼家族的家园。',
    body: [
      '已确认的名字:银纱湖。这片水域支持钓鱼——试玩版展示过的活动之一——小镇的人鱼(Hosu 家族)也与这片水域有关。',
      '具体的鱼种名称和确切钓点还没有资料来源——目前已确认的内容参见钓鱼指南。',
    ],
  },
  pier: {
    title: '码头', dek: '一个在水面上钓鱼和享受宁静时光的地方。',
    body: [
      '温馨模拟游戏的钓鱼区通常包括一座码头或栈桥用来抛竿。',
      'Moonlight Peaks 是否给某个具体码头命名,会在正式发售时确认——目前先把它当作湖泊钓鱼区的一部分。',
    ],
  },
  mines: {
    title: '回声洞穴 & 矿场', dek: '如何解锁回声洞穴、去哪找铜和铁,以及最常见的进度卡关问题。',
    sections: [
      { title: '如何解锁回声洞穴', body: '已确认:回声洞穴位于 Misty Shores 区域左下方,在 Orlock 庄园的西边。它一开始是锁着的,完成"A Bridge Too Far"任务后才会打开——这个任务会重新开放 Ambrosia 庄园以及周边的 Misty Shores 区域。' },
      { title: '为什么回声洞穴还是锁着', body: '如果你还进不去,几乎总是任务问题——而不是缺了某个关键物品或商店购买——才是真正的原因。社区报告:这个区域被 Orlock 和 Fiona 之间关于一座"被诅咒"的桥的剧情纠纷锁住了。' },
      { title: '"A Bridge Too Far" 如何与进度绑定', body: '完整的前置条件和步骤请见"A Bridge Too Far"任务完整攻略。简而言之:先完成"Orlock 的酿酒计划",然后和镇上的女巫们谈谈,再回到桥边解开纠纷/诅咒,打开这个区域。' },
      { title: '铜矿石在哪找', body: '社区报告:进去之后,铜矿石看起来就像带铜色斑点的普通岩石,用镐子采集。较大的矿脉可能一次给 6 份矿石,而不是普通矿脉的 1 份。在炉子用 4 份铜矿石 + 1 份木炭制作铜锭。' },
      { title: '铁矿石在哪找', body: '已确认是同一个矿场系统里的后期资源,在剧情推进超过初期的铜阶段后解锁。具体的解锁触发条件和洞穴内位置,这里还没有独立验证。' },
      { title: '新的矿石种类何时解锁', body: '已确认:矿石的获取是分阶段的,而不是一次性全部开放——铜矿石最先可用,铁矿石和金矿石会随着主线剧情推进而在之后开放,而不是一进洞穴就都有。' },
      { title: '矿场里常见的进度问题', body: '如果你缺铜,先检查"A Bridge Too Far"的进度,而不是更卖力地在洞穴里搜索。如果你的镐子敲不碎某个矿脉,很可能需要先在嚎叫锤子(Ridge 的商店)升级一个等级,才能开采那种矿石。' },
      { title: '矿场里有战斗吗?', body: '没有——已确认 Moonlight Peaks 全程(包括矿场)都没有战斗,所以地下探索始终保持平静。' },
    ],
    faq: [
      { q: '矿场里有战斗吗?', a: '没有——预览资料确认 Moonlight Peaks 全程(包括矿场)都没有战斗。' },
      { q: '为什么我在矿场找不到铜矿石?', a: '已确认:铜矿石位于回声洞穴,而回声洞穴只有在完成"A Bridge Too Far"任务后才会打开——在假设自己错过了某个矿点之前,先检查一下任务进度。' },
    ],
  },
  graveyard: {
    title: '墓地', dek: 'Misty Shores 里一个安静的月光笼罩之处,你在这里遇见 Death——已确认是 Ambrosia 家族的墓地。',
    body: [
      '发售时已确认:这座墓地位于 Misty Shores 区域,一开始被一座桥挡住,那座桥是 Fiona 在与 Orlock 醉酒争吵后诅咒的。完成"A Bridge Too Far"任务能解除诅咒,打开通路。',
      '进去之后,你会在这里第一次遇见 Death——他已确认的住所"Death 的小屋"就在附近。',
      '发售前泄露的游戏文件把这个地方称为"Ambrosia 墓地",并配有一座对应的"Ambrosia 庄园"——很可能是这个吸血鬼家族的祖宅。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里怎么解锁墓地?', a: '已确认:完成"A Bridge Too Far"任务,这会解除 Fiona 因为和 Orlock 争吵而对通往 Misty Shores 的桥施加的诅咒。' },
      { q: 'Moonlight Peaks 里在哪能遇到 Death?', a: '已确认:在 Ambrosia 墓地,前提是"A Bridge Too Far"已经解锁了 Misty Shores。Death 已确认的住所"Death 的小屋"就在附近。' },
    ],
  },
  shops: {
    title: '小镇商店', dek: '小镇上已命名的商店——大多数店主现已确认。',
    body: [
      '已确认的商店和店主:嚎叫锤子是 Ridge 的工具升级商店(只在工作日营业);破灯酒馆是 Samael 的酒吧;咖啡与棺材是 Mina 和 Evan 的咖啡馆;Third Eye Threads 是 Aras 的裁缝店;Webb of Wonders 是 Sabrina 的商店,出售另我药水和法术——这个名字也是拿她自己的姓氏 Webb 玩的文字游戏。',
      '发售前泄露的游戏文件还提到过 Midnight Market 和 Bloom Boutique——目前还没有在实际游戏中确认。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里有哪些商店?', a: '已确认:嚎叫锤子(工具升级,Ridge)、破灯酒馆(酒吧,Samael)、咖啡与棺材(咖啡馆,Mina 和 Evan)、Third Eye Threads(服装,Aras)以及 Webb of Wonders(药水与服装,Sabrina)。' },
      { q: 'Moonlight Peaks 里有 Midnight Market 或 Bloom Boutique 吗?', a: '目前还没有确认——这两个名字出现在发售前泄露的文件中,但还没有在实际游戏中得到验证。' },
    ],
  },
  landmarks: {
    title: '地标与知名地点', dek: '核心区域之外的知名地点——大多数现已确认并附有真实背景信息。',
    sections: [
      { title: 'Misty Shores、月光松林、粉红树林 & Luna Bay', body: '已确认:Misty Shores 是 Ambrosia 家族的领地,是回声洞穴(矿石)和你遇见 Death 的墓地的所在地,通过"A Bridge Too Far"任务解锁。月光松林是女巫团的所在地。粉红树林是爱情恶魔 Llemi 的家,通常只在节日期间出现在那里。Luna Bay 是人鱼家族 Hosu 居住的地方,在剧情开始约一年后到达。' },
      { title: 'Howling Marshes', body: '多个首发周资料来源确认:位于小镇主城区正北方,月光松林东边。已确认两个入口——一个在月光松林 Luna 的种子摊位正东边,另一个在市政厅正东边。你会作为"Tension in the Crest Garden"任务的一部分被派往这里。这里已确认的可采集物包括 Sugarbone 和几种花——值得在烹饪台或干燥架加工,而不是直接生卖。Logan 家族的房子也在这里,首次到访时有一个进不去的地窖,以及一个同样还进不去的北部区域——这两处很可能与后续任务相关。' },
      { title: 'Moonlit Slopes、地窖、Moonlight Tower & Crest Garden', body: '也通过官方 wiki 确认:Moonlit Slopes、地窖、Moonlight Tower 以及 Khazan 家族的 Crest Garden 都是真实存在的地点。各自的完整描述仍有待验证。' },
    ],
  },
  'town-hall': {
    title: '市政厅', dek: '在镇长 Brook 的指引下,你在这里登记成为新居民。',
    body: [
      '发售时已确认:市政厅是你早期登记成为新居民、并遇见镇长 Brook(狼人家族 Logan 之首)的地方,她会在这次拜访中送给你 Chester——一个活的储物箱。',
      '小镇的告示板——由一只名叫 Albertus 的猫头鹰管理的"Albertus 打工板"——也设在这里,上面列出了可用的任务。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里市政厅由谁管理?', a: '已确认:镇长 Brook,狼人家族 Logan 之首,在你登记成为新居民时会送给你 Chester(一个活的储物箱)。' },
      { q: 'Moonlight Peaks 里任务告示板在哪?', a: '已确认:Albertus 打工板,由一只名叫 Albertus 的猫头鹰管理的告示板,设在市政厅,列出了可用的任务。' },
    ],
  },
  'ambrosia-mansion': {
    title: 'Ambrosia 庄园', dek: '吸血鬼家族 Ambrosia 的祖宅。',
    body: [
      '通过游戏官方 wiki 确认:Ambrosia 庄园是吸血鬼家族 Ambrosia 的住所,与附近有 Death 存在的 Ambrosia 墓地相关联。',
    ],
    faq: [
      { q: 'Ambrosia 庄园里住着谁?', a: '通过游戏官方 wiki 确认:吸血鬼家族 Ambrosia,这里是他们的祖宅。' },
      { q: 'Ambrosia 庄园离墓地近吗?', a: '是的,已确认:Ambrosia 庄园与附近有 Death 存在的 Ambrosia 墓地相关联。' },
    ],
  },
  'silverveil-museum': {
    title: '博物馆', dek: '一座基于捐赠的收藏建筑,在 Persephone、Jada 和 Winston 搬到镇上后,于第一年年中开放。',
    body: [
      '已确认:博物馆并非从第一天就存在——它是在涉及 Persephone、Jada 和 Winston 搬到镇上(码头那座废弃的房子)的剧情线推进后才开放的。社区报告:对很多玩家来说,这大约发生在第一年秋季初,具体取决于你自己前期任务的推进节奏。',
      '已确认:捐赠的运作方式和与商人对话不同。博物馆有多个主题收藏室,通过主厅里的一道传送门进入,你通过走到对应收藏室并与旁边的感叹号面板互动来完成捐赠——这和游戏其他地方用来标记待处理剧情内容的图标样式相同。',
      '已确认:你身上还欠缺的收藏品会在背包里显示一个小小的博物馆图标,以免你不小心卖掉或用掉还需要的东西。品质要求因收藏而异——农业收藏特别要求更高品质的作物和农产品(而不是随便什么都行),所以留下你最好的收成而不是全部卖掉是值得的。',
      '这里还未独立确认:确切的收藏室数量、每个房间的完整捐赠清单,以及每个收藏具体解锁什么奖励。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里博物馆什么时候开放?', a: '已确认:不是第一天就开放——它是在 Persephone、Jada 和 Winston 搬到镇上之后才开放的,这条剧情线对很多玩家来说大约发生在第一年秋季初。' },
      { q: '博物馆怎么捐赠?', a: '已确认:前往对应的收藏室(通过主厅里的传送门进入),与旁边的感叹号面板互动,而不是和商人对话。' },
    ],
  },
  'yoga-shack': {
    title: '瑜伽小屋', dek: '一个已确认的活动地点,对应游戏"暗黑消遣"之一的瑜伽。',
    body: [
      '通过游戏官方 wiki 确认存在,与瑜伽相关联——这是与钓鱼、烹饪和 Nokturna 并列的爱好之一。',
    ],
  },
  'khazan-temple': {
    title: 'Khazan 神殿', dek: '与预言家族 Khazan 相关联的地点。',
    body: [
      '通过游戏官方 wiki 确认存在。这里具体发生什么,目前还没有更多资料来源。',
    ],
  },
  'crystal-cave': {
    title: '水晶洞穴 & 暮光墓穴', dek: '一个与回声洞穴不同的富含宝石的洞穴,位于 Fiona 家旁边。',
    body: [
      '已确认:水晶洞穴是与回声洞穴不同的独立地下区域,位于 Fiona 家的左边。一块大石头挡住了入口,直到你把镐子至少升级到铜级为止。',
      '已确认:内部有大量的 Rose Quartz 矿脉,还有其他宝石。Rose Quartz 用魔法研钵(开始学习魔法后解锁)研磨成粉末,用于多个工艺配方和任务中。',
      '通过游戏官方 wiki 确认:除了回声洞穴之外,矿场还包括另一个叫暮光墓穴的区域——这表明地下区域被分成了多个独立区块,而不是单一的一个洞穴。另有其他地方确认:蝙蝠人(藏在镇上和大多数房子里的小生物)一旦早期剧情任务解锁墓穴通道,也会通过这里的一个洞被带到这里,完成它们的收集任务链。',
      '要到达水晶洞穴本身,需要先解锁 Misty Shores(通过"A Bridge Too Far"任务),因为回声洞穴及其镐子升级都在那里。',
    ],
    faq: [
      { q: 'Moonlight Peaks 里水晶洞穴在哪?', a: '已确认:这是一个与回声洞穴不同的独立地下区域,位于 Fiona 家左边。一块石头挡住入口,直到你的镐子达到铜级为止。' },
      { q: '水晶洞穴能获得什么?', a: '已确认:内部有大量 Rose Quartz 矿脉,还有其他宝石。Rose Quartz 用魔法研钵研磨成粉末,用于多个工艺配方和任务中。' },
    ],
  },
  'howling-marshes': {
    title: 'Howling Marshes', dek: '就在小镇正北方、月光松林东边——两个已确认的入口,可收获的 Sugarbone 和花朵,以及 Logan 家族的房子。',
    body: [
      '多个首发周资料来源确认:Howling Marshes 位于小镇主城区正北方,月光松林东边。',
      '已确认两个入口:一个在月光松林 Luna 的种子摊位正东边,另一个在市政厅正东边。你会作为"Tension in the Crest Garden"任务的一部分被派往这里。',
      '这里已确认的可采集物包括 Sugarbone 和几种花——值得在烹饪台或干燥架加工,而不是直接生卖。',
      'Logan 家族的房子也在这里,首次到访时有一个进不去的地窖,以及一个同样还进不去的北部区域——这两处很可能与后续任务相关。',
    ],
    related: [{ label: '所有地标', href: '/locations/landmarks' }, { label: 'Logan 家族', href: '/families' }, { label: '小镇', href: '/locations/town' }],
    faq: [
      { q: 'Moonlight Peaks 里 Howling Marshes 在哪?', a: '已确认:就在小镇主城区正北方,月光松林东边。有两个入口——一个在月光松林 Luna 的种子摊位正东边,另一个在市政厅正东边。' },
      { q: 'Howling Marshes 怎么解锁?', a: '你会作为"Tension in the Crest Garden"主线任务的一部分被派往这里——这里并不是靠单独的解锁条件锁住的。' },
      { q: 'Howling Marshes 能采集到什么?', a: '已确认的可采集物包括 Sugarbone 和几种花。值得在烹饪台或干燥架加工,而不是直接生卖。' },
    ],
  },
  'twilight-catacombs': {
    title: '暮光墓穴', dek: '一个锁着的地下隧道网络,连接地窖、水晶洞穴、Misty Shores 墓地、Luna Bay 和 Howling Marshes,通过向博物馆捐赠解锁。',
    body: [
      '已确认:暮光墓穴是一个锁着的地下隧道网络,入口/出口散布在地图各处,而不是单一的独立地下城。地窖(Viktor 所在处)和 Misty Shores 墓地都有门;解锁前互动只会显示"另一边锁着",不会说明怎么打开。',
      '已确认:解锁路径要通过博物馆,而不是探索时找到的独立关键物品。博物馆捐赠总进度达到 25% 后,Jada 会给你德古拉封印钥匙。把这把钥匙拿给地窖里的 Viktor 看,会触发"A Key to the Deep"任务,打开墓穴。',
      '已确认:进去之后,这个隧道网络通过蓝色感应板连接了游戏里多个地下和地面区域——一个通向水晶洞穴里一扇坍塌的门,另一个通向 Misty Shores 墓地的墓穴入口,再一个通向北边河流附近 Luna Bay 的一扇坍塌门,还有一个通向东边 Howling Marshes 的墓穴入口。',
      '一份攻略的报告:找到这些连接点之后,在棺材里睡一觉、第二天查看信箱,会收到 Samael 的一封信。到破灯酒馆拜访他会解锁一个额外的入口。',
    ],
    related: [{ label: '水晶洞穴', href: '/locations/crystal-cave' }, { label: '矿场', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: '博物馆', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'Moonlight Peaks 里暮光墓穴怎么解锁?', a: '已确认:博物馆捐赠进度达到 25% 后从 Jada 那里获得德古拉封印钥匙,然后拿给地窖里的 Viktor 看,触发"A Key to the Deep"任务,打开墓穴。' },
      { q: 'Moonlight Peaks 里暮光墓穴的入口在哪?', a: '已确认的入口在地窖(Viktor 所在处)和 Misty Shores 墓地。一份攻略的报告:进去之后,内部的感应板还会连接到水晶洞穴、Luna Bay 和 Howling Marshes。' },
      { q: '暮光墓穴里的蓝色感应板是做什么的?', a: '一份攻略的报告:踩上每一块都会打开一条通往地图其他地方另一扇坍塌门的捷径连接——水晶洞穴、Misty Shores 墓地、Luna Bay 和 Howling Marshes——让墓穴成为缩短这些区域之间往返路程的枢纽。' },
    ],
  },
  'crest-garden': {
    title: 'Crest Garden', dek: '市政厅旁边的一座小镇花园,会随着你在主线剧情中的推进,逐一展示七大家族的纹章。',
    body: [
      '通过官方 wiki 确认:Crest Garden 位于市政厅旁边,会随着剧情推进逐一展示 Moonlight Peaks 七大家族各自的纹章——这是你在游戏核心家族剧情线中进度的一个视觉追踪器。',
      '一份攻略的报告:Logan 家族的纹章在剧情中途特别消失了,导致你要绕道完成一个找回任务——Dragan 会指引你去破灯酒馆打听消息,这会引向 Howling Marshes,结果发现是 Yabbis 把纹章吃了,想要用一根铜锭来交换。',
      '一份攻略的报告:最后填满的两个纹章属于两个吸血鬼家族,Ambrosia 和 Dracula。Orlock 会为 Ambrosia 纹章索要工艺材料(精炼石、金锭和玻璃),而 Dracula 纹章任务被描述为主线剧情的情感高潮,在解锁蝙蝠变身几天后由一封信触发。',
    ],
    related: [{ label: '市政厅', href: '/locations/town-hall' }, { label: '家族', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Moonlight Peaks 里 Crest Garden 在哪?', a: '通过官方 wiki 确认:它位于市政厅旁边。' },
      { q: 'Moonlight Peaks 里 Crest Garden 有什么作用?', a: '已确认:它展示小镇七大家族的纹章,随着你在每个家族主线剧情中的推进而逐一解锁。' },
      { q: '为什么 Crest Garden 里少了一个家族纹章?', a: '一份攻略的报告:至少有一个纹章(Logan 家族的)被写成了一个小型的找回任务,而不是自动解锁——在这个例子里,Yabbis 把它吃了,想用一根铜锭交换回去。' },
      { q: 'Crest Garden 里哪些纹章最后解锁?', a: '一份攻略的报告:两个吸血鬼家族的纹章,Ambrosia 和 Dracula,是最后填满的,其中 Dracula 纹章任务被描述为剧情的情感高潮。' },
    ],
  },
  'moonlit-slopes': {
    title: 'Moonlit Slopes', dek: '月亮女神的居所,已确认在你第一次受邀之后会重新锁上,直到解锁蝙蝠形态为止。',
    body: [
      '已确认:Moonlit Slopes 是月亮女神的居所,在完成"A Missing Moon"剧情线之后可以进入——在这条剧情线里,Khazan 家族的预言家们同时陷入了恍惚,月亮也从天空中消失了。一个简短的后续任务"The Moon in the Sky"会让她正式邀请你去拜访。',
      '已确认:这次首次拜访之后,Moonlit Slopes 会重新锁上,一直到你通过"Master of the Night"任务解锁蝙蝠形态为止——所以如果你在遇见月亮女神之后无法直接再回去,这是正常现象,不是 bug。',
    ],
    related: [{ label: '变身', href: '/shapeshifting' }, { label: '月亮女神', href: '/characters/moon-goddess' }, { label: '任务', href: '/quests' }],
    faq: [
      { q: 'Moonlight Peaks 里在哪能遇到月亮女神?', a: '已确认:在 Moonlit Slopes,前提是完成"A Missing Moon"和简短的后续任务"The Moon in the Sky",她会在那里正式邀请你。' },
      { q: '为什么第一次拜访后我回不去 Moonlit Slopes 了?', a: '已确认:这个区域在你首次拜访后会重新锁上,只有通过"Master of the Night"任务解锁蝙蝠形态后才会再次打开——这是正常现象,不是 bug。' },
    ],
  },
  'midnight-market': {
    title: 'Midnight Market', dek: '镇上一个只在周末开放的市场,出售动物帽子、药水材料和其他平日买不到的物品。',
    body: [
      '经社区报告确认:Midnight Market 是镇上的一个周末活动,在周六和周日举行,与游戏常规的平日商店是分开的。',
      '据报道:Snek 会在 Midnight Market 出售给你农场动物戴的迷你帽子,Sabrina 也会在那里出售炼金术士宝珠和其他药水相关物品——这些物品目前都没有确认在两位角色平日的正常营业时间内出售。',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: '农场动物', href: '/farm/animals' }, { label: '药水', href: '/items/potions' }],
    faq: [
      { q: 'Moonlight Peaks 里 Midnight Market 什么时候开放?', a: '社区报告:只在周六和周日,和游戏常规的平日营业时间是分开的。' },
      { q: 'Moonlight Peaks 的 Midnight Market 能买到什么?', a: '据报道:Snek 出售的农场动物迷你帽子,以及 Sabrina 出售的炼金术士宝珠和其他药水相关物品——这些物品都没有确认在平日出售。' },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: '根据官方 wiki 导航确认存在于镇上的一家命名商店,细节尚未确认。',
    body: [
      '通过官方 wiki 自身的页面导航确认存在,和游戏其他已命名的商店并列列出。除了名字之外,我们目前还没有独立验证过 Bloom Boutique 卖什么、由谁经营,或者营业时间——我们不会仅仅因为名字暗示"花"就去猜测它的主题。',
      '考虑到这个名字,以及游戏中已有的插花和送礼系统,一个以花卉或装饰为主题的商店是合理的猜测,但在有资料来源对照实际游戏验证之前,我们把这标记为预期,而不是已确认。',
    ],
    related: [{ label: '商店', href: '/locations/shops' }, { label: '活动:插花', href: '/activities/flower-arranging' }],
    faq: [
      { q: 'Moonlight Peaks 里 Bloom Boutique 是什么?', a: '根据官方 wiki 自身的导航确认存在这样一家命名商店。它卖什么、由谁经营,这里还没有独立确认——我们不会仅凭名字就猜测商店内容。' },
    ],
  },
};
