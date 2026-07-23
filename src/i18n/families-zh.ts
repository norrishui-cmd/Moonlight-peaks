// src/i18n/families-zh.ts
export type FamilyTrZh = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesZh: Record<string, FamilyTrZh> = {
  vampires: {
    title: '吸血鬼', dek: '两支吸血鬼血脉——你自己的德古拉家族,以及镇上的 Ambrosia 家族。',
    body: [
      '你扮演的是 Vlad Dracula(德古拉伯爵)的孩子,一名年轻的吸血鬼,所以德古拉家族就是你出生的家族。发售时已确认:镇上还有另一个独立的吸血鬼家族——由 Orlock 领导的 Ambrosia 家族,包括他的孩子 Mina 和 Evan,以及侄子/侄女 Samael 和 Elvira。',
      '你的母亲 Laveau 曾是一名女巫,在嫁入德古拉家族之前领导着 Webb 女巫团——所以你的角色继承了吸血鬼和女巫的混合血统。',
    ],
    faq: [{ q: '在 Moonlight Peaks 中你是吸血鬼吗?', a: '是的——你扮演 Vlad Dracula(德古拉伯爵)的孩子,一名年轻的吸血鬼。镇上还有另一个吸血鬼家族 Ambrosia,由 Orlock 领导。' }],
  },
  werewolves: {
    title: '狼人', dek: '满月时会变得狂野——由镇长 Brook 领导的 Logan 家族。',
    body: [
      '狼人是七大家族之一,已确认的狼人家族名为 Logan。发售时已确认:家族之首是镇长 Brook——发售前一些报道称她为"狼人镇长 Logan",实际上是用家族姓氏而非她本人的名字来指代她。',
      'Brook 的弟弟 Ridge 是镇上的木匠;她的孩子 Saga(一个已确认的恋爱对象,能量会随满月变化)和 Ludo 都可以恋爱。',
    ],
  },
  witches: {
    title: '女巫', dek: '在这座魔法小镇里守护魔杖与药水的人——Webb 家族。',
    body: [
      '女巫是七大家族之一,与游戏中的魔杖法术和药水酿造系统相关联。已确认的女巫家族名为 Webb,之前由 Laveau(玩家角色的母亲)领导,后来她离开去嫁给了德古拉家族的一员。',
      '现在 Fiona 作为镇上的花店老板领导着 Webb 家族和当地的女巫团,对弟弟 Noel(镇上的铁匠)、表妹 Sabrina(经营 Webb of Wonders 商店)和 Luna(镇上的海洋女巫)都寄予厚望。',
    ],
  },
  mermaids: {
    title: '人鱼', dek: '来自湖泊与潮汐——Hosu 家族。',
    body: [
      '人鱼已确认为七大家族之一,与镇上的水域相关联。已确认的人鱼家族名为 Hosu——三兄妹一起住在 Luna Bay,大约在剧情开始一年后到达,需要帮助才能重新融入小镇生活。',
      '已确认的成员:Kim(阳光开朗、无穷好奇,有一段与失散多年的恋人重逢的故事线)、Rei(安静害羞的环保主义者)以及 Tae(自信而善于鼓励人的男性人鱼)。',
    ],
  },
  seers: {
    title: '预言家族', dek: 'Khazan 家族的占卜师们。',
    body: [
      'Khazan 家族由三兄妹组成,他们的预知能力可靠程度各不相同——这是已确认的七大家族之一。',
      'Dragan 一直在与自己的能力抗争,但在世界观内发明了卡牌游戏 Nokturna。Alina 是家族里固执而热烈的叛逆者,Aras 一边经营着服装店"Third Eye Threads",一边逃避着自己的能力。',
    ],
  },
  henderson: {
    title: 'Henderson 家族', dek: '镇上唯一的人类家族——第七个,也是最后到来的家族。',
    body: [
      '已确认为第七个家族:Henderson 家族是镇上唯一普通的人类家庭,大约在你第一年过半时搬到 Moonlight Peaks。',
      '自由奔放的姑姑 Persephone 领导着这个家族,照顾着侄女 Jada(很享受生活在狼人和吸血鬼之间)和侄子 Winston(一直生活在恐惧之中)。三人都是恋爱对象。',
    ],
  },
};
