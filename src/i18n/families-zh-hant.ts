// src/i18n/families-zh-hant.ts
export type FamilyTrZhHant = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesZhHant: Record<string, FamilyTrZhHant> = {
  vampires: {
    title: '吸血鬼', dek: '兩支吸血鬼血脈——你自己的德古拉家族,以及鎮上的 Ambrosia 家族。',
    body: [
      '你扮演的是 Vlad Dracula(德古拉伯爵)的孩子,一名年輕的吸血鬼,所以德古拉家族就是你出生的家族。發售時已確認:鎮上還有另一個獨立的吸血鬼家族——由 Orlock 領導的 Ambrosia 家族,包括他的孩子 Mina 和 Evan,以及侄子/侄女 Samael 和 Elvira。',
      '你的母親 Laveau 曾是一名女巫,在嫁入德古拉家族之前領導着 Webb 女巫團——所以你的角色繼承了吸血鬼和女巫的混合血統。',
    ],
    faq: [{ q: '在 Moonlight Peaks 中你是吸血鬼嗎?', a: '是的——你扮演 Vlad Dracula(德古拉伯爵)的孩子,一名年輕的吸血鬼。鎮上還有另一個吸血鬼家族 Ambrosia,由 Orlock 領導。' }],
  },
  werewolves: {
    title: '狼人', dek: '滿月時會變得狂野——由鎮長 Brook 領導的 Logan 家族。',
    body: [
      '狼人是七大家族之一,已確認的狼人家族名爲 Logan。發售時已確認:家族之首是鎮長 Brook——發售前一些報道稱她爲"狼人鎮長 Logan",實際上是用家族姓氏而非她本人的名字來指代她。',
      'Brook 的弟弟 Ridge 是鎮上的木匠;她的孩子 Saga(一個已確認的戀愛對象,能量會隨滿月變化)和 Ludo 都可以戀愛。',
    ],
  },
  witches: {
    title: '女巫', dek: '在這座魔法小鎮裏守護魔杖與藥水的人——Webb 家族。',
    body: [
      '女巫是七大家族之一,與遊戲中的魔杖法術和藥水釀造系統相關聯。已確認的女巫家族名爲 Webb,之前由 Laveau(玩家角色的母親)領導,後來她離開去嫁給了德古拉家族的一員。',
      '現在 Fiona 作爲鎮上的花店老闆領導着 Webb 家族和當地的女巫團,對弟弟 Noel(鎮上的鐵匠)、表妹 Sabrina(經營 Webb of Wonders 商店)和 Luna(鎮上的海洋女巫)都寄予厚望。',
    ],
  },
  mermaids: {
    title: '人魚', dek: '來自湖泊與潮汐——Hosu 家族。',
    body: [
      '人魚已確認爲七大家族之一,與鎮上的水域相關聯。已確認的人魚家族名爲 Hosu——三兄妹一起住在 Luna Bay,大約在劇情開始一年後到達,需要幫助才能重新融入小鎮生活。',
      '已確認的成員:Kim(陽光開朗、無窮好奇,有一段與失散多年的戀人重逢的故事線)、Rei(安靜害羞的環保主義者)以及 Tae(自信而善於鼓勵人的男性人魚)。',
    ],
  },
  seers: {
    title: '預言家族', dek: 'Khazan 家族的占卜師們。',
    body: [
      'Khazan 家族由三兄妹組成,他們的預知能力可靠程度各不相同——這是已確認的七大家族之一。',
      'Dragan 一直在與自己的能力抗爭,但在世界觀內發明了卡牌遊戲 Nokturna。Alina 是家族裏固執而熱烈的叛逆者,Aras 一邊經營着服裝店"Third Eye Threads",一邊逃避着自己的能力。',
    ],
  },
  henderson: {
    title: 'Henderson 家族', dek: '鎮上唯一的人類家族——第七個,也是最後到來的家族。',
    body: [
      '已確認爲第七個家族:Henderson 家族是鎮上唯一普通的人類家庭,大約在你第一年過半時搬到 Moonlight Peaks。',
      '自由奔放的姑姑 Persephone 領導着這個家族,照顧着侄女 Jada(很享受生活在狼人和吸血鬼之間)和侄子 Winston(一直生活在恐懼之中)。三人都是戀愛對象。',
    ],
  },
};
