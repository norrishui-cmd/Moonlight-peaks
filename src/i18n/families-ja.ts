// src/i18n/families-ja.ts
export type FamilyTrJa = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesJa: Record<string, FamilyTrJa> = {
  vampires: {
    title: '吸血鬼', dek: '2つの吸血鬼一族——自分自身のDracula家と、町のAmbrosia家。',
    body: [
      'プレイヤーはVlad Draculaの子である若い吸血鬼を演じるため、Dracula家は自分が生まれ持った一族です。発売時に確認済み:町にはもう一つ、別の吸血鬼一族も存在します——Orlockを長とするAmbrosia家で、その家族には子であるMinaとEvan、甥/姪であるSamaelとElviraが含まれます。',
      '母であるLaveauはWebb一族を率いていた魔女で、Dracula家に嫁ぐ前のことです——そのため主人公は吸血鬼と魔女の血を引く、混血の出自を持っています。',
    ],
    faq: [{ q: 'ムーンライト・ピークスで自分は吸血鬼ですか?', a: 'はい——Vlad Draculaの子である若い吸血鬼を演じます。町にはもう一つの吸血鬼一族、Orlockを長とするAmbrosia家も存在します。' }],
  },
  werewolves: {
    title: '狼男', dek: '満月でさらに野性的に——Brook町長が率いるLogan家。',
    body: [
      '狼男は7つの一族の一つで、名前が判明している狼男一族はLogan家です。発売時に確認済み:一族の家長は町長のBrookです——発売前の情報で「狼男の町長Logan」と呼ばれていたのは彼女のことで、本人の名前ではなく家族の姓が使われていました。',
      'Brookの弟Ridgeは町の大工です。彼女の子であるSaga(満月でエネルギーが変化する確認済みの恋愛対象)とLudoはどちらも恋愛可能です。',
    ],
  },
  witches: {
    title: '魔女', dek: 'この魔法の町で杖とポーションを司る——Webb家。',
    body: [
      '魔女は7つの一族の一つで、ゲームの杖を使った魔法とポーション作りに関わっています。名前が判明している魔女一族はWebb家で、以前は主人公の母であるLaveauが率いていましたが、彼女はDracula家に嫁ぐために一族を去りました。',
      '現在はFionaがWebb家と地元の魔女の集会を率いており、町の花屋を営んでいます。弟のNoel(町の鍛冶屋)、いとこのSabrina(Webb of Wondersを営む)、そしてLuna(町の海の魔女)に高い期待をかけています。',
    ],
  },
  mermaids: {
    title: '人魚', dek: '湖と潮の一族——Hosu家。',
    body: [
      '人魚は7つの一族の一つとして確認済みで、町の水辺エリアと関わりがあります。名前が判明している人魚一族はHosu家(一部の情報ではHorseus/Hisuとも表記)——Luna Bayで共に暮らす3人の兄弟姉妹で、物語開始からおよそ1年後に到着し、町に再び馴染むための助けを必要とします。',
      '確認済みのメンバー:Kim(明るく、限りない好奇心を持ち、失われた恋の再会という物語がある)、Rei(物静かで内気な環境保護活動家)、そしてTae(自信家で人を励ますのが得意な人魚の男性)。',
    ],
  },
  seers: {
    title: '預言者', dek: 'Khazan家の占い師たち。',
    body: [
      'Khazan家は、信頼性にばらつきのある予知能力を持つ3人兄弟姉妹の一族です——確認済みの7つの一族の一つです。',
      'Draganは自分自身の力に苦労していますが、作中設定ではカードゲームNokturnaの考案者です。Alinaは一族の中で頑固で情熱的な反逆者的存在、Arasは自分の力を使うことを避けながら仕立て屋「Third Eye Threads」を営んでいます。',
    ],
  },
  henderson: {
    title: 'Henderson家', dek: '町の人間の一族——7番目にして、最後に到着した一族。',
    body: [
      '7番目の一族として確認済み:Henderson家は、町で唯一の普通の人間の家族で、プレイヤーの最初の年のちょうど半ば頃にムーンライト・ピークスへ引っ越してきます。',
      '自由な精神を持つ叔母のPersephoneが一族を率いており、姪のJada(狼男や吸血鬼たちと暮らせることに大喜び)と甥のWinston(常に怯えて暮らしている)の面倒を見ています。3人とも恋愛対象です。',
    ],
  },
};
