import type { SeoPage, SeoFaq, SeoLink } from './seoGraph.ts';

export type LocaleCode = 'en' | 'es' | 'ja' | 'zh' | 'fr';

export type LocaleInfo = {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  htmlLang: string;
  prefix: string;
};

export const locales: LocaleInfo[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', htmlLang: 'en', prefix: '' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', htmlLang: 'es', prefix: '/es' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', htmlLang: 'ja', prefix: '/ja' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文', htmlLang: 'zh-CN', prefix: '/zh' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', htmlLang: 'fr', prefix: '/fr' },
];

export const localizedLocales = locales.filter((locale) => locale.code !== 'en');

export const isLocaleCode = (value: string): value is LocaleCode =>
  locales.some((locale) => locale.code === value);

export const localeByCode = (code: LocaleCode): LocaleInfo =>
  locales.find((locale) => locale.code === code) || locales[0];

export const withLocale = (path: string, locale: LocaleCode): string => {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const existing = clean.split('/').filter(Boolean)[0];
  if (existing && isLocaleCode(existing)) return clean || '/';
  if (locale === 'en') return clean || '/';
  return `${localeByCode(locale).prefix}${clean}` || localeByCode(locale).prefix;
};

export const stripLocale = (path: string): { locale: LocaleCode; sourcePath: string } => {
  const parts = path.split('/').filter(Boolean);
  const first = parts[0];
  if (first && isLocaleCode(first) && first !== 'en') {
    const source = `/${parts.slice(1).join('/')}`.replace(/\/$/, '');
    return { locale: first, sourcePath: source === '/' ? '/' : source || '/' };
  }
  return { locale: 'en', sourcePath: path || '/' };
};

const ui = {
  en: {
    home: 'Home',
    relatedGuides: 'Related guides',
    faq: 'FAQ',
    latestNews: 'Latest news',
    latestNewsText: 'Check the game updates, news, and official confirmations pages for new Moonlight Peaks details as launch coverage expands.',
    language: 'Language',
    updated: 'Updated',
    nav: {
      release: 'Release',
      demo: 'Demo',
      platforms: 'Platforms',
      guide: 'Guide',
      characters: 'Characters',
      romance: 'Romance',
      guides: 'Guides',
      faq: 'FAQ',
    },
    footer: 'Moonlight Peaks Wiki & Guide is an independent, fan-made guide. It is not affiliated with, endorsed by, or connected to Little Chicken Game Company or XSEED Games. Moonlight Peaks and all related names and assets are trademarks of their respective owners.',
  },
  es: {
    home: 'Inicio',
    relatedGuides: 'Guías relacionadas',
    faq: 'Preguntas frecuentes',
    latestNews: 'Últimas noticias',
    latestNewsText: 'Consulta actualizaciones, noticias y confirmaciones oficiales para seguir los nuevos detalles de Moonlight Peaks.',
    language: 'Idioma',
    updated: 'Actualizado',
    nav: {
      release: 'Lanzamiento',
      demo: 'Demo',
      platforms: 'Plataformas',
      guide: 'Guía',
      characters: 'Personajes',
      romance: 'Romance',
      guides: 'Guías',
      faq: 'FAQ',
    },
    footer: 'Moonlight Peaks Wiki & Guide es una guía independiente creada por fans. No está afiliada ni respaldada por Little Chicken Game Company o XSEED Games. Moonlight Peaks y los nombres relacionados pertenecen a sus respectivos propietarios.',
  },
  ja: {
    home: 'ホーム',
    relatedGuides: '関連ガイド',
    faq: 'FAQ',
    latestNews: '最新情報',
    latestNewsText: 'Moonlight Peaks の新情報は、アップデート、ニュース、公式確認ページで確認できます。',
    language: '言語',
    updated: '更新',
    nav: {
      release: '発売日',
      demo: 'デモ',
      platforms: '対応機種',
      guide: 'ガイド',
      characters: 'キャラクター',
      romance: '恋愛',
      guides: '攻略',
      faq: 'FAQ',
    },
    footer: 'Moonlight Peaks Wiki & Guide はファン制作の独立ガイドです。Little Chicken Game Company または XSEED Games とは提携していません。Moonlight Peaks および関連名称は各権利者の商標です。',
  },
  zh: {
    home: '首页',
    relatedGuides: '相关指南',
    faq: '常见问题',
    latestNews: '最新消息',
    latestNewsText: '查看游戏更新、新闻和官方确认页面，跟进 Moonlight Peaks 的最新信息。',
    language: '语言',
    updated: '更新',
    nav: {
      release: '发售',
      demo: '试玩',
      platforms: '平台',
      guide: '指南',
      characters: '角色',
      romance: '恋爱',
      guides: '攻略',
      faq: 'FAQ',
    },
    footer: 'Moonlight Peaks Wiki & Guide 是独立粉丝指南，与 Little Chicken Game Company 或 XSEED Games 无隶属、认可或合作关系。Moonlight Peaks 及相关名称归各自权利方所有。',
  },
  fr: {
    home: 'Accueil',
    relatedGuides: 'Guides liés',
    faq: 'FAQ',
    latestNews: 'Dernières nouvelles',
    latestNewsText: 'Consultez les mises à jour, les actualités et les confirmations officielles pour suivre Moonlight Peaks.',
    language: 'Langue',
    updated: 'Mis à jour',
    nav: {
      release: 'Sortie',
      demo: 'Démo',
      platforms: 'Plateformes',
      guide: 'Guide',
      characters: 'Personnages',
      romance: 'Romance',
      guides: 'Guides',
      faq: 'FAQ',
    },
    footer: 'Moonlight Peaks Wiki & Guide est un guide indépendant créé par des fans. Il n’est pas affilié à Little Chicken Game Company ou XSEED Games. Moonlight Peaks et les noms associés appartiennent à leurs propriétaires respectifs.',
  },
};

export const t = (locale: LocaleCode) => ui[locale] || ui.en;

const localeTemplates: Record<Exclude<LocaleCode, 'en'>, {
  title: (focus: string, hub: string) => string;
  description: (focus: string, hub: string) => string;
  intro: (focus: string, hub: string) => string;
  sections: { title: string; body: (focus: string, hub: string) => string }[];
  faqs: (focus: string, hub: string) => SeoFaq[];
}> = {
  es: {
    title: (focus, hub) => `Moonlight Peaks ${focus} | ${hub} | Wiki en español`,
    description: (focus, hub) => `Guía en español sobre Moonlight Peaks ${focus}: datos confirmados, notas de lanzamiento, preguntas frecuentes y enlaces relacionados del ${hub}.`,
    intro: (focus, hub) => `Página en español dedicada a Moonlight Peaks ${focus}, generada desde la misma base de datos del ${hub}.`,
    sections: [
      { title: 'Qué cubre esta página', body: (focus, hub) => `Esta página resume Moonlight Peaks ${focus} dentro del ${hub}. Separa datos confirmados de detalles que deben verificarse en el lanzamiento.` },
      { title: 'Estado actual', body: () => 'Moonlight Peaks se lanza el 7 de julio de 2026. Los valores exactos de objetos, regalos, rutas y recompensas se actualizan cuando existan fuentes fiables.' },
      { title: 'Cómo seguir leyendo', body: () => 'Usa los enlaces relacionados para pasar a páginas de personajes, plataformas, misiones, objetos, ubicaciones y preguntas frecuentes.' },
    ],
    faqs: (focus, hub) => [
      { q: `¿Para qué sirve la página Moonlight Peaks ${focus}?`, a: `Agrupa información sobre ${focus} para jugadores que buscan una respuesta concreta dentro del ${hub}.` },
      { q: '¿Toda la información está confirmada?', a: 'No. Las partes no confirmadas se marcan como pendientes y se actualizan tras el lanzamiento.' },
      { q: '¿Tengo que editar esta traducción por separado?', a: 'No. Esta versión se genera desde la misma fuente editorial principal para mantener las URL sincronizadas.' },
    ],
  },
  ja: {
    title: (focus, hub) => `Moonlight Peaks ${focus} | ${hub} | 日本語Wiki`,
    description: (focus, hub) => `Moonlight Peaks ${focus} の日本語ガイド。確認済み情報、発売時の注意点、FAQ、関連ページを ${hub} から整理します。`,
    intro: (focus, hub) => `Moonlight Peaks ${focus} を日本語で確認できるページです。同じ ${hub} のデータから自動生成されます。`,
    sections: [
      { title: 'このページの内容', body: (focus, hub) => `このページでは ${hub} 内の Moonlight Peaks ${focus} を扱います。確認済み情報と発売後に確認する情報を分けています。` },
      { title: '現在の状況', body: () => 'Moonlight Peaks は 2026年7月7日に発売予定です。アイテム数値、ギフト、スケジュール、報酬などは信頼できる情報が出た後に更新します。' },
      { title: '次に読むページ', body: () => '関連リンクからキャラクター、プラットフォーム、クエスト、アイテム、場所、FAQ へ進めます。' },
    ],
    faqs: (focus, hub) => [
      { q: `Moonlight Peaks ${focus} ページは何のためですか？`, a: `${hub} の中で ${focus} に関する情報を探しやすくするためのページです。` },
      { q: 'すべて確定情報ですか？', a: 'いいえ。未確認の内容は推測せず、発売後に確認して更新します。' },
      { q: '翻訳版を別々に編集する必要がありますか？', a: 'いいえ。主要な編集元から各言語ページを生成する設計です。' },
    ],
  },
  zh: {
    title: (focus, hub) => `Moonlight Peaks ${focus} | ${hub} | 中文 Wiki`,
    description: (focus, hub) => `Moonlight Peaks ${focus} 中文指南：整理确认信息、发售说明、常见问题和 ${hub} 中的相关页面。`,
    intro: (focus, hub) => `这是 Moonlight Peaks ${focus} 的中文页面，由同一份 ${hub} 数据生成，方便之后只维护主版本。`,
    sections: [
      { title: '本页内容', body: (focus, hub) => `本页聚焦 ${hub} 下的 Moonlight Peaks ${focus}，会区分已确认信息和需要发售后验证的内容。` },
      { title: '当前状态', body: () => 'Moonlight Peaks 将于 2026 年 7 月 7 日发售。物品数值、礼物、日程、任务奖励等精确信息会在有可靠来源后更新。' },
      { title: '继续阅读', body: () => '你可以通过相关链接继续查看角色、平台、任务、物品、地点、活动和 FAQ 页面。' },
    ],
    faqs: (focus, hub) => [
      { q: `Moonlight Peaks ${focus} 页面有什么用？`, a: `它把 ${hub} 中关于 ${focus} 的信息整理成独立页面，方便玩家和搜索引擎找到具体答案。` },
      { q: '所有内容都已经确认了吗？', a: '不是。未确认内容会标记为待验证，不会凭空编造。' },
      { q: '以后需要分别编辑中文、西语、日语、法语吗？', a: '不需要。多语言页面从同一份主数据派生，主要维护一个版本即可。' },
    ],
  },
  fr: {
    title: (focus, hub) => `Moonlight Peaks ${focus} | ${hub} | Wiki français`,
    description: (focus, hub) => `Guide français de Moonlight Peaks ${focus} avec faits confirmés, notes de lancement, FAQ et liens associés du ${hub}.`,
    intro: (focus, hub) => `Page française consacrée à Moonlight Peaks ${focus}, générée depuis la même source éditoriale du ${hub}.`,
    sections: [
      { title: 'Ce que couvre cette page', body: (focus, hub) => `Cette page couvre Moonlight Peaks ${focus} dans le ${hub}. Elle distingue les faits confirmés des détails à vérifier au lancement.` },
      { title: 'État actuel', body: () => 'Moonlight Peaks sort le 7 juillet 2026. Les valeurs exactes, cadeaux, horaires et récompenses seront mis à jour avec des sources fiables.' },
      { title: 'Continuer la lecture', body: () => 'Utilisez les liens associés pour passer aux personnages, plateformes, quêtes, objets, lieux et FAQ.' },
    ],
    faqs: (focus, hub) => [
      { q: `À quoi sert la page Moonlight Peaks ${focus} ?`, a: `Elle regroupe les informations sur ${focus} pour répondre aux recherches précises dans le ${hub}.` },
      { q: 'Tout est-il confirmé ?', a: 'Non. Les détails non confirmés sont indiqués comme à vérifier et seront mis à jour après le lancement.' },
      { q: 'Faut-il modifier chaque langue séparément ?', a: 'Non. Ces pages linguistiques sont générées depuis la même source principale.' },
    ],
  },
};

const displayFocus = (page: SeoPage): string =>
  page.h1.replace(/^Moonlight Peaks\s*/i, '').trim() || page.title.replace(/\s*\|.*$/, '');

export const localizeSeoPage = (page: SeoPage, locale: LocaleCode): SeoPage => {
  if (locale === 'en') return page;
  const templates = localeTemplates[locale];
  const focus = displayFocus(page);
  const hub = page.hub.replace(' Hub', '');
  const related: SeoLink[] = page.related.map((link) => ({
    ...link,
    href: withLocale(link.href, locale),
  }));
  return {
    ...page,
    path: withLocale(page.path, locale),
    hub,
    hubPath: withLocale(page.hubPath, locale),
    title: templates.title(focus, hub),
    description: templates.description(focus, hub),
    h1: `Moonlight Peaks ${focus}`,
    intro: templates.intro(focus, hub),
    sections: templates.sections.map((section) => ({
      title: section.title,
      body: section.body(focus, hub),
    })),
    faqs: templates.faqs(focus, hub),
    related,
  };
};
