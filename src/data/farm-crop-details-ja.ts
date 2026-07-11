// src/data/farm-crop-details-ja.ts
export type CropDetailJa = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsJa: Record<string, CropDetailJa> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: '農地作物',
    dek: '春・夏に育つ非魔法の5日成長作物。確認済みの収穫量と価格データあり。',
    body: [
      '公式wikiで確認済み:Blood Grapesは収穫まで5日、その後4日ごとに再収穫可能で、1回の収穫で3個採れます。1個5ゴールドで売却でき、種は20ゴールド。',
      'Blood Grapesは春と夏に育つ非魔法の作物で、通常のじょうろで問題なく育てられます。',
      'Blood Grapesはプレイヤーが最初に持つ作物で、樽で赤ワインやBlood Grape Juiceに加工されることが多いです(4個で赤ワイン1本、または3個でジュース1本)。',
    ],
    faq: [
      { q: 'Blood Grapesの成長には何日かかりますか?', a: '確認済み:最初の収穫まで5日、その後4日ごとに再収穫できます。' },
      { q: 'Blood Grapesから何が作れますか?', a: '確認済み:赤ワイン(4個)またはBlood Grape Juice(3個)、どちらも樽で作ります。' },
    ],
  },
  'rice': {
    name: 'Rice(米)', category: '農地作物',
    dek: '3つの季節にまたがって育つ、非魔法の5日成長作物。確認済みの売却データあり。',
    body: [
      '公式wikiで確認済み:米は収穫まで5日、1回の収穫で1個採れます。売却価格は60ゴールド、種は30ゴールド。',
      '米は春・夏・秋に育ち、確認済みの農地作物の中では栽培期間が長い方です。',
    ],
    faq: [
      { q: 'Moonlight Peaksで米の成長には何日かかりますか?', a: '確認済み:5日で、1回の収穫で1個、売却価格は60ゴールドです。' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: '農地作物(魔法)',
    dek: '通常の水やりではなく、カップに水を満たす必要があると確認されている魔法作物。',
    body: [
      '公式wikiで確認済み:Drikkerは独特な成長条件を持つ魔法作物です——畑に水をやるのではなく、カップに直接水を満たして育てます。',
      '他の魔法作物と同様、通常のじょうろではなくAquaflux呪文が必要と思われますが、公式wikiでは「カップを満たす」以上の詳細は明記されていません。',
    ],
    faq: [
      { q: 'Moonlight PeaksでDrikkerを育てるには?', a: '確認済み:畑に水をやるのではなく、カップに水を満たしてください。' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: '農地作物(魔法)',
    dek: '水ではなく魚や小動物を与える必要があると確認されている魔法作物。',
    body: [
      '公式wikiと発売週の報道で確認済み:Gobblerは水やりの代わりに魚や小動物を与える必要がある魔法作物です。',
      'コミュニティ報告:どちらを欲しがるか(魚か小動物か)は株ごとにランダムなので、複数育てる場合は両方をストックしておくのが安全です。',
    ],
    faq: [
      { q: 'Moonlight PeaksでGobblerを育てるには?', a: '確認済み:水やりの代わりに魚や小動物を与えてください。コミュニティ報告ではどちらを欲しがるかは株ごとに異なります。' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: '農地作物(魔法)',
    dek: '近くのWeeping Wiccaを泣き止ませ、Sweet Wiccaに変える効果があると確認されている魔法作物。',
    body: [
      '公式wikiで確認済み:Hold Me Closeは周囲に珍しい効果を及ぼす魔法作物です——近くのWeeping Wiccaの涙を止め、Sweet Wiccaに変化させます。',
      'そのためHold Me Closeは、自分自身の収穫よりも、隣接するWeeping Wicca畑への効果にこそ価値があるコンパニオンプランツと言えるかもしれません。',
    ],
    faq: [
      { q: 'Moonlight PeaksでHold Me Closeは何をしますか?', a: '確認済み:近くのWeeping Wiccaの涙を止め、Sweet Wiccaに変えます。' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: '農地作物(魔法)',
    dek: '周囲のMandrakeの有無によってAngryかHappyのバリエーションが決まると確認されている魔法作物。',
    body: [
      '公式wikiで確認済み:Mandrakeの収穫はAngry MandrakeかHappy Mandrakeのどちらかになり、近くに他のMandrakeが植えられているかどうかで決まります。',
      'これは実際の配置計画に関わる要素です——Mandrakeを密集させて植えるか、間隔を空けて植えるかで、安定してどちらのバリエーションを収穫できるかが変わります。',
    ],
    faq: [
      { q: 'なぜMandrakeがHappyではなくAngryになったのですか?', a: '確認済み:近くに他のMandrakeが植えられているかどうかで結果が決まります——間隔を調整してみてください。' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: '農地作物(魔法)',
    dek: '泣くことで周囲3x3の畑に自動的に水をやると確認されている魔法作物。',
    body: [
      '公式wikiで確認済み:Weeping Wiccaは泣くことで周囲3x3の農地に魔法で水をやります——単なる収穫物ではなく、本物の自動化作物です。',
      '畑の中央付近に戦略的に植えることで、周囲の作物への手動の水やりの手間を減らせるかもしれません。ただしHold Me Closeとの相互作用に注意——涙(とそれに伴う水やり効果)を止め、Sweet Wiccaに変えてしまいます。',
    ],
    faq: [
      { q: 'Moonlight PeaksでWeeping Wiccaは何をしますか?', a: '確認済み:泣くことで周囲3x3の畑に魔法で水をやります。近くにHold Me Closeがあると涙が止まり、Sweet Wiccaに変わります。' },
    ],
  },
  'instant-growth-mushrooms': {
    name: '即成長キノコ類', category: '農地作物グループ',
    dek: '確認済み:6種類のキノコ系作物が同じ「即成長・拡散」の仕組みを共有しています。',
    body: [
      '公式wikiで確認済み:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom、Amanitaはすべて同じ仕組みを共有しています——水をやると即座に成長し、成長後にもう一度水をやると隣接する農地に拡散します。',
      'これによりキノコ系はMoonlight Peaksの作物の中でも真の例外となっています——収穫まで何日も待つ代わりに、最初の株が育てば1回の水やりセッションで農地全体にキノコ畑を増やせます。',
    ],
    faq: [
      { q: 'Moonlight Peaksで即座に成長するキノコはどれですか?', a: '確認済み:Common Mushroom、Frosteria、Glowglammer、Yellow Glowglammer、Volacio Mushroom、Amanitaは全て水をやると即座に成長し、成長後に再度水をやると隣接するマスに拡散します。' },
    ],
  },
};
