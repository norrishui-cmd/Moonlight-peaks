// src/i18n/quests-story-zh.ts
// Simplified Chinese translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrZh = { title: string; unlock?: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const storyChaptersZh: { number: number; title: string; dek: string }[] = [
  { number: 1, title: '初到月光峰', dek: '登记成为居民、遇见Orlock和Viktor，以及你的第一株作物。' },
  { number: 2, title: '遥远的桥', dek: 'Fiona对Orlock那座桥施下的诅咒，以及解除诅咒的仪式。' },
  { number: 3, title: '徽章花园与魔力', dek: '失踪的家族徽章、你的第一次真正施法，以及Ambrosia家族的危机。' },
  { number: 4, title: '小镇生活与家庭纠葛', dek: '镇公所的人际往来、家族间的紧张关系，以及在月光峰安顿下来。' },
  { number: 5, title: '婚礼篇章', dek: '一场小镇婚礼——请柬、彩排，以及未了的心事。' },
];

export const storyQuestsZh: Record<string, StoryQuestTrZh> = {
  'register-at-town-hall': {
    title: '在镇公所登记',
    summary: '多个信源确认:离开家、遇见Orlock(见下文)之后，你会前往小镇，镇长Brook会在镇公所为你办理新居民登记，并送给你Chester——一个会在夜里自动出售放入其中物品的活体箱子。',
    reward: '结识Brook，获得Chester',
  },
  'meet-the-townsfolk': {
    title: '结识镇上居民',
    unlock: '完成"在镇公所登记"',
    summary: '确认:一系列早期引导任务，带你认识镇上的关键居民并熟悉环境，打通你的农场与主镇区之间的早期路线。',
    reward: '开启小镇早期路线',
  },
  'orlocks-wine-scheme': {
    title: 'Orlock的酿酒计划(血酒)',
    summary: '经Bonus Action确认，并与Into Indie Games交叉验证:刚抵达时，你会发现宿醉的吸血鬼Orlock睡在你家草坪上——戳他一下而不是往他身上浇水，能获得更好的对话选项。他会给你Blood Grape种子，让你帮他酿造红酒/血酒。酿好后与他对峙、要求他向Fiona道歉，他会让你去The Broken Lamp帮他还清欠Samael的350金酒钱。',
    reward: '酿造血酒;让Orlock道歉，替他偿还欠Samael的350金债务;通向"遥远的桥"',
    troubleshooting: [
      { q: '凑不齐350金还给Samael怎么办?', a: '社区报告(Output Lag):如果你还没见过Mina，或者想跳过她的对话链，可以自己采集贝壳等物品、钓鱼、出售初始住宅里不需要的家具来慢慢攒够350金。另外，在Orlock提到欠账之后去Coffee and Coffins找Mina聊天，她会直接送你这笔钱，不用你自己掏腰包。' },
      { q: '到底在哪里能找到Orlock?', a: '确认:第一次是在你农场家门外的草坪上睡觉。之后，他通常在镇上的The Broken Lamp酒吧里喝酒。' },
    ],
  },
  'a-bridge-too-far': {
    title: '遥远的桥',
    unlock: '完成"Orlock的酿酒计划"',
    summary: '经专门攻略(Output Lag)确认，并与Into Indie Games和Bonus Action交叉验证:Moonlit Pines的女巫Fiona，因为Orlock在酒吧里拿她开的一个粗俗玩笑而大发雷霆，实际上诅咒了通往他那一侧小镇的桥。找Fiona聊天了解此事，然后带Orlock去她家上演一场道歉过场动画。之后Fiona透露她一个人解不了这个"诅咒"，需要三位女巫——Noel、Sabrina和Luna——她们分散在镇上各处。招募齐三人后回到桥边，触发解除诅咒的仪式。',
    reward: '重新开放Ambrosia庄园;解锁Misty Shores与Cave of Echoes(铜矿)',
    troubleshooting: [
      { q: '我跟女巫们都聊过了，但她们没在桥边跟我碰面——是哪里出问题了?', a: '社区报告(Output Lag):请确认你确实跟三位女巫——Noel、Sabrina、Luna——都聊过了。检查一下任务日志里是否还有标记为待完成的项目，然后回镇上找漏掉的那位聊天。' },
      { q: '仪式动画播放完了，但桥还是过不去——现在该怎么办?', a: '社区报告:这种情况不常见，但如果过场动画播完了桥仍然无法通行，可以尝试离开该区域再重新进入，之后应该就能通行了。' },
      { q: '我会不会因为对话选项而卡关?', a: '确认:不会。"遥远的桥"没有会阻挡进度的对话选项——所有对话路径都会推进任务进度。' },
      { q: '如果Misty Shores、钓鱼或挖矿感觉被锁住了，是bug吗?', a: '不是——确认:在这个任务解决之前，Misty Shores会一直完全锁着。如果你在那片区域的钓鱼、挖矿或任何事情上卡住了，几乎总是这个任务(而不是缺了某个商店道具)才是真正的瓶颈。' },
    ],
  },
  'tension-in-the-crest-garden': {
    title: '徽章花园的紧张气氛',
    unlock: '完成"遥远的桥"，然后等到第二天',
    summary: '经Neoseeker任务日志确认，并与Output Lag交叉验证:桥打通后的第二天，走进镇上会触发一段在徽章花园(镇公所旁的新区域)的过场动画，Brook指责Orlock偷了她家丢失的家族徽章，由此展开一段悬疑剧情。',
    reward: '需要完成"遥远的桥"+等待1天;通向"蛙鸣与徽章"',
  },
  'a-croak-and-a-crest': {
    title: '蛙鸣与徽章',
    unlock: '完成"徽章花园的紧张气氛"',
    summary: '经Neoseeker任务日志记录确认，是徽章花园悬疑剧情的直接后续。',
    reward: '将Logan家徽放入徽章花园，并计入徽章相关成就',
  },
  'the-quest-for-mana': {
    title: '魔力探寻之旅',
    unlock: '完成"用魔法修补"、等待1天、进镇触发"镇长的重担"，然后再等2天并阅读Sabrina的信',
    summary: '经Neoseeker任务日志记录确认:这是一条通向你第一套真正制魔基础设施的任务链。与whisperofthehouse.com的解锁条件指南交叉引用，该指南将整条魔法/法杖路线归纳为依次经过Sabrina、Fiona、魔力提取器，以及Luna的Aquaflux法术。',
    troubleshooting: [
      { q: '我的法杖还是坏的，也没有任何法术——要怎么解锁?', a: '社区报告(whisperofthehouse.com):坏掉的法杖和法术是靠剧情进度解锁的，不是靠商店购买——它们来自这条任务链，涉及Sabrina、Fiona、魔力提取器、Luna，以及Aquaflux法术。如果你在剧情上还没走到这一步，任何商店都不会卖给你修复的办法。' },
    ],
  },
  'building-a-mana-extractor': {
    title: '建造魔力提取器',
    unlock: '完成"魔力探寻之旅"，然后等待2天',
    summary: '确认:是"魔力探寻之旅"的直接后续。',
    reward: '魔力精华和魔力提取器的建造图纸',
  },
  'a-missing-moon': {
    title: '消失的月亮',
    summary: '经Neoseeker任务日志记录确认，是剧情中段的一个节点，紧接魔力提取器任务链，并通向Ambrosia家族危机。',
  },
  'the-ambrosia-crisis': {
    title: 'Ambrosia家族危机',
    unlock: '完成"夜之主宰"、等待2天，并阅读Ambrosia庄园的来信',
    summary: '经Neoseeker任务日志记录确认:吸血鬼Ambrosia家族的家庭危机剧情节点，需要先完成"夜之主宰"并等待邀请信送达。',
  },
  'the-dinner-party': {
    title: '晚宴',
    summary: '经Neoseeker任务日志确认:一场小镇社交活动任务。',
    reward: '猫形态(解锁Hellkitten变身)',
    troubleshooting: [
      { q: '具体什么时候能拿到Hellkitten/猫形态?', a: '经交叉验证的任务日志确认:完成"晚宴"就会奖励猫形态。它位于"遥远的桥"之后的几个剧情节点，紧接魔力提取器任务链——如果你还没走到这里，无论买了什么、造了什么，变身功能都还不会解锁。' },
    ],
  },
  'mend-it-with-magic': {
    title: '用魔法修补/魔法初体验',
    unlock: '完成"用魔法修补"，等待2天，并阅读Fiona的来信',
    summary: '经Neoseeker任务日志记录确认，是一对以魔法为核心的后续任务。',
  },
  'town-hall-drama': {
    title: '与父母共进晚餐/镇公所风波',
    summary: '经Neoseeker任务日志确认:围绕小镇和家庭展开的剧情节点。',
  },
  'the-plastic-chairs': {
    title: '塑料椅子',
    summary: '经Neoseeker任务日志记录确认。',
    reward: '4杯姜茶',
  },
  'a-family-reunion': {
    title: '家庭团聚',
    summary: '经Neoseeker任务日志确认，是以家庭为主题的剧情节点。',
  },
  'the-mermaids-wish': {
    title: '美人鱼的愿望',
    summary: '经Neoseeker任务日志确认:完成此任务并配合"魔法初体验"，是解锁"彩排晚宴"的前置条件。',
    reward: '水形态(解锁美人鱼变身)',
  },
  'the-rehearsal-dinner': {
    title: '彩排晚宴',
    unlock: '完成"美人鱼的愿望"和"魔法初体验"，等待1天，并阅读晚宴请柬',
    summary: '经Neoseeker任务日志记录确认——这是游戏婚礼篇章剧情节点的开端。',
  },
  'kims-invite': {
    title: 'Kim的邀请',
    summary: '经Neoseeker任务日志确认，是婚礼篇章的一部分。',
  },
  'brides-attendant-duty': {
    title: '伴娘的职责',
    summary: '经Neoseeker任务日志确认，是婚礼篇章的一部分。',
  },
  'unfinished-business': {
    title: '未了心事',
    summary: '经Neoseeker任务日志确认，是目前婚礼篇章已记录的最终节点。后续剧情内容可能会延伸下去——一旦确认我们会及时更新。',
  },
};
