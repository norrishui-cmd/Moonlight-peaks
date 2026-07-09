// Translated content for the 6 highest-search-interest character profiles, chosen for this
// phase: the protagonist's father (huge search volume) plus the most-documented romance
// options. Base fields that don't need translating (img, colors, status, romanceable, type)
// still come from src/data/characters.ts — only text content lives here.

export type CharTranslation = {
  name: string;
  familyLabel: string;
  typeLabel: string;
  desc: string;
  knownInfo: string[];
  romanceYes: string;
  romanceNo: string;
  romanceTbc: string;
};

export const charTranslations: Record<'es' | 'ja' | 'zh' | 'de', Record<string, CharTranslation>> = {
  de: {
    saga: {
      name: 'Saga', familyLabel: 'Werwolf', typeLabel: 'Werwolf',
      desc: 'Eine bestätigte Romanze-Option — Werwölfin, Tochter von Bürgermeister Brook, Schwester von Ludo und Nichte von Ridge. Ihre Energie verändert sich mit dem Vollmond.',
      knownInfo: [
        'Bestätigt: Tochter von Brook (Bürgermeister), Schwester von Ludo und Nichte von Ridge.',
        'Bestätigte Geschenke: liebt Weißwein; mag Rotwein, Bier und einzelne Blumen (keine Blumensträuße); mag keine Blumensträuße.',
        'Geburtstag bestätigt: Sommer 27. Wohnt auf einem Hausboot in der Nähe des Rathauses.',
      ],
      romanceYes: 'Saga ist eine bestätigte Romanze-Option. Dates werden ab Herzstufe 4 freigeschaltet, ein Heiratsantrag ab Herzstufe 8.',
      romanceNo: '', romanceTbc: '',
    },
  },
  es: {
    'count-dracula': {
      name: 'Conde Drácula', familyLabel: 'Vampiro', typeLabel: 'Vampiro',
      desc: 'Tu padre y la leyenda del pueblo, cuya sombra buscas dejar atrás. Central para la historia — no es una opción de romance.',
      knownInfo: [
        'Es tu padre; la historia enmarca tu mudanza a Moonlight Peaks como un paso para salir de su larga sombra.',
        'Una figura central de la historia, no una opción de romance.',
        'La premisa te lleva a demostrar que una vida no-muerta más amable y gentil es posible — algo de lo que él es escéptico.',
      ],
      romanceYes: '', romanceNo: 'Conde Drácula no es una opción de romance.', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: 'Hombre lobo', typeLabel: 'Hombre lobo',
      desc: 'Una residente revelada por los desarrolladores; su energía cambia con la luna llena.',
      knownInfo: [
        'Una residente hombre lobo revelada por los desarrolladores.',
        'Su energía se describe como cambiante con la luna llena.',
        'Una reseña del Steam Next Fest la destacó entre el elenco.',
      ],
      romanceYes: 'Saga está confirmada como opción de romance. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: 'Bruja', typeLabel: 'Bruja',
      desc: 'Reportada como una bruja agricultora — probablemente una fuente temprana de hechizos y conocimientos de jardinería.',
      knownInfo: [
        'Reportada como bruja agricultora en avances de prensa.',
        'Probablemente una fuente temprana de hechizos y conocimientos de jardinería.',
        'Detalles por confirmar contra el juego en vivo en el lanzamiento.',
      ],
      romanceYes: 'Se reporta que Luna es conquistable. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: 'Vampiro', typeLabel: 'Vampiro',
      desc: 'Reportado como el cabeza de una familia de vampiros — una figura de influencia del viejo mundo en el pueblo.',
      knownInfo: [
        'Reportado como el cabeza de una familia de vampiros.',
        'Escrito como una figura cómica en los avances de prensa.',
        'Una presencia del viejo mundo entre los vampiros del pueblo.',
      ],
      romanceYes: 'Se reporta que Orlock es conquistable. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: 'Hombre lobo', typeLabel: 'Hombre lobo',
      desc: 'El alcalde de Moonlight Peaks, patriarca de la familia Logan (hombres lobo). No es una opción de romance.',
      knownInfo: [
        'Confirmado como alcalde del pueblo, a cargo del registro en el Ayuntamiento y de entregarte a Chester.',
        'Patriarca de la familia Logan; padre de Saga y Ludo, y hermano mayor de Ridge.',
        'Dirige el Martillo Aullador (Howling Hammer), la tienda de mejoras de herramientas, abierta de lunes a viernes de 18:00 a medianoche.',
      ],
      romanceYes: '', romanceNo: 'Brook no es una opción de romance confirmada.', romanceTbc: '',
    },
    'the-warlock': {
      name: 'El Brujo', familyLabel: 'Bruja', typeLabel: 'Bruja',
      desc: 'Visto en un avance de prensa: un brujo ensimismado que ronda el pueblo. Su nombre real está por confirmarse.',
      knownInfo: [
        'Un brujo ensimismado visto en un avance de prensa.',
        'En ese avance coquetea con el jugador interrumpiendo constantemente.',
        'Su nombre real dentro del juego no ha sido confirmado.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Si se puede conquistar a El Brujo todavía no está confirmado — lo actualizaremos en el lanzamiento.',
    },
  },
  ja: {
    'count-dracula': {
      name: 'ドラキュラ伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: 'あなたの父親であり、町の伝説的存在。その影から抜け出すことが物語の出発点になる——恋愛対象ではなく、物語の中心人物。',
      knownInfo: [
        'あなたの父親であり、Moonlight Peaksへの引っ越しは彼の長い影から抜け出す一歩として描かれる。',
        '恋愛対象ではなく、物語の中心人物。',
        'より優しく穏やかな不死の生き方が可能だと証明していく——それは彼が懐疑的に思っていること。',
      ],
      romanceYes: '', romanceNo: 'ドラキュラ伯爵は恋愛対象ではありません。', romanceTbc: '',
    },
    saga: {
      name: 'サーガ', familyLabel: '人狼', typeLabel: '人狼',
      desc: '開発元が発表した住民の一人。満月とともにエネルギーが変化する。',
      knownInfo: [
        '開発元が発表した人狼の住民。',
        '満月とともにエネルギーが変化すると説明されている。',
        'Steam Next Festのレビューでキャスト陣の中でも取り上げられた。',
      ],
      romanceYes: 'サーガは確定の恋愛対象です。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'ルナ', familyLabel: '魔女', typeLabel: '魔女',
      desc: '農業を営む魔女として報道されている——序盤の呪文や園芸知識の情報源になりそうな存在。',
      knownInfo: [
        'ハンズオン試遊の報道で、農業を営む魔女として紹介されている。',
        '序盤の呪文や園芸知識の情報源になりそう。',
        '詳細は発売時に正式版で確認予定。',
      ],
      romanceYes: 'ルナは恋愛対象になれると報じられています。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'オルロック', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: 'ある吸血鬼一族の長として報じられている——町では旧世界的な影響力を持つ人物。',
      knownInfo: [
        'ある吸血鬼一族の長として報じられている。',
        'ハンズオン試遊のレポートではコミカルな人物として描かれている。',
        '町の吸血鬼たちの中でも旧世界的な存在感を持つ。',
      ],
      romanceYes: 'オルロックは恋愛対象になれると報じられています。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '人狼', typeLabel: '人狼',
      desc: 'Moonlight Peaksの町長で、人狼のローガン家の家長。恋愛対象ではない。',
      knownInfo: [
        '町長として確認済み。タウンホールでの登録とChesterの授与を担当する。',
        'ローガン家の家長。Sagaの父親でLudoの父親、Ridgeの兄。',
        'ハウリング・ハンマー(道具アップグレード店)を経営、月曜〜金曜の18時から深夜0時まで営業。',
      ],
      romanceYes: '', romanceNo: 'Brookは恋愛対象として確認されていません。', romanceTbc: '',
    },
    'the-warlock': {
      name: '謎の魔術師', familyLabel: '魔女', typeLabel: '魔女',
      desc: 'ハンズオン試遊で見かけた、自惚れの強い魔術師。町を歩き回っている。本名はまだ確認されていない。',
      knownInfo: [
        'ハンズオン試遊で見かけた、自惚れの強い魔術師。',
        'その試遊では、絶えず割り込んできてプレイヤーに言い寄ってくる。',
        'ゲーム内での本名はまだ確認されていない。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'この魔術師が恋愛対象になれるかどうかはまだ確認されていません——発売時に更新します。',
    },
  },
  zh: {
    'count-dracula': {
      name: '德古拉伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '你的父亲,也是小镇的传奇人物,你此行正是为了走出他的阴影。他是故事的核心人物——不是可攻略角色。',
      knownInfo: [
        '他是你的父亲;故事把你搬到 Moonlight Peaks 这件事,设定成走出他长年阴影的一步。',
        '他是故事的核心人物,而不是恋爱对象。',
        '游戏的设定是让你证明一种更温柔、更善良的不死生活方式是可能的——而这正是他一直心存怀疑的事。',
      ],
      romanceYes: '', romanceNo: '德古拉伯爵不是可攻略角色。', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: '狼人', typeLabel: '狼人',
      desc: '开发商公开介绍过的一位居民,她的情绪状态会随满月变化。',
      knownInfo: [
        '开发商公开介绍过的一位狼人居民。',
        '据描述,她的状态会随满月起伏变化。',
        'Steam Next Fest 的一篇报道特意点名提到了她。',
      ],
      romanceYes: 'Saga 是官方确认的可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '女巫', typeLabel: '女巫',
      desc: '据报道是一位务农的女巫——很可能是前期法术和园艺知识的重要来源。',
      knownInfo: [
        '在试玩报道中被描述为一位务农的女巫。',
        '很可能是前期法术和园艺知识的重要来源。',
        '具体细节要等正式版上线后确认。',
      ],
      romanceYes: '据报道 Luna 是可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '据报道是某个吸血鬼家族的家主——在镇上是位带着旧世界影响力的人物。',
      knownInfo: [
        '据报道是某个吸血鬼家族的家主。',
        '在试玩报道里被描写成一个喜剧感十足的角色。',
        '在镇上的吸血鬼群体中带着旧世界式的存在感。',
      ],
      romanceYes: '据报道 Orlock 是可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '狼人', typeLabel: '狼人',
      desc: 'Moonlight Peaks 的镇长,狼人洛根(Logan)家族的家长,不可攻略。',
      knownInfo: [
        '已确认为镇长,负责在镇公所办理登记手续,并把 Chester 交给你。',
        '洛根家族家长,Saga 和 Ludo 的父亲,Ridge 的兄长。',
        '经营 Howling Hammer 工具升级商店,周一到周五 18:00 至凌晨营业。',
      ],
      romanceYes: '', romanceNo: 'Brook 未被确认为可攻略角色。', romanceTbc: '',
    },
    'the-warlock': {
      name: '神秘术士', familyLabel: '女巫', typeLabel: '女巫',
      desc: '在一篇试玩报道中出现过,是镇上一位相当自恋的术士,真实姓名尚未确认。',
      knownInfo: [
        '在一篇试玩报道中出现过的一位自恋术士。',
        '据那篇报道描述,他会不断打断对话向玩家搭讪调情。',
        '他在游戏里的真实姓名目前还没有确认。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '这位术士能不能被攻略目前还没有确认——正式版上线后会更新。',
    },
  },
};
