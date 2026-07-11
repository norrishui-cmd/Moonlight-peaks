// Shared UI strings for site-wide chrome (nav, search, common buttons). Content pages
// (articles, character bios, FAQ answers) are translated separately in their own files —
// this dictionary only covers the repeating interface text that appears on every page.
export type Locale = 'en' | 'es' | 'ja' | 'zh' | 'zh-hant' | 'de';

export const uiStrings: Record<Locale, Record<string, string>> = {
  en: {
    characters: 'Characters', families: 'Families', romance: 'Romance',
    tools: 'Tools', faq: 'FAQ', about: 'About',
    guides: 'Guides', allGuides: 'All guides', release: 'Release', demo: 'Demo', platforms: 'Platforms',
    world: 'World', locations: 'Locations', activities: 'Activities', items: 'Items', map: 'Map', farm: 'Farm', collection: 'Collection',
    search: 'Search', searchPlaceholder: 'Search characters, guides, FAQ, items…',
    home: 'Home', notFound: 'Not found',
  },
  es: {
    characters: 'Personajes', families: 'Familias', romance: 'Romance',
    tools: 'Herramientas', faq: 'Preguntas frecuentes', about: 'Acerca de',
    guides: 'Guías', allGuides: 'Todas las guías', release: 'Lanzamiento', demo: 'Demo', platforms: 'Plataformas',
    world: 'Mundo', locations: 'Ubicaciones', activities: 'Actividades', items: 'Objetos', map: 'Mapa', farm: 'Granja', collection: 'Colección',
    search: 'Buscar', searchPlaceholder: 'Busca personajes, guías, preguntas, objetos…',
    home: 'Inicio', notFound: 'No encontrado',
  },
  ja: {
    characters: 'キャラクター', families: '家族', romance: '恋愛',
    tools: 'ツール', faq: 'よくある質問', about: 'このサイトについて',
    guides: 'ガイド', allGuides: 'すべてのガイド', release: 'リリース', demo: '体験版', platforms: '対応機種',
    world: '世界', locations: 'ロケーション', activities: 'アクティビティ', items: 'アイテム', map: 'マップ', farm: '農場', collection: 'コレクション',
    search: '検索', searchPlaceholder: 'キャラクター、ガイド、FAQ、アイテムを検索…',
    home: 'ホーム', notFound: 'ページが見つかりません',
  },
  zh: {
    characters: '角色', families: '家族', romance: '恋爱',
    tools: '工具', faq: '常见问题', about: '关于本站',
    guides: '攻略', allGuides: '全部攻略', release: '发售', demo: '试玩版', platforms: '平台',
    world: '世界', locations: '地点', activities: '活动', items: '物品', map: '地图', farm: '农场', collection: '收藏',
    search: '搜索', searchPlaceholder: '搜索角色、攻略、常见问题、物品…',
    home: '首页', notFound: '页面未找到',
  },
  'zh-hant': {
    characters: '角色', families: '家族', romance: '戀愛',
    tools: '工具', faq: '常見問題', about: '關於本站',
    guides: '攻略', allGuides: '全部攻略', release: '發售', demo: '試玩版', platforms: '平台',
    world: '世界', locations: '地點', activities: '活動', items: '物品', map: '地圖', farm: '農場', collection: '收藏',
    search: '搜尋', searchPlaceholder: '搜尋角色、攻略、常見問題、物品…',
    home: '首頁', notFound: '頁面未找到',
  },
  de: {
    characters: 'Charaktere', families: 'Familien', romance: 'Romanze',
    tools: 'Werkzeuge', faq: 'FAQ', about: 'Über uns',
    guides: 'Guides', allGuides: 'Alle Guides', release: 'Release', demo: 'Demo', platforms: 'Plattformen',
    world: 'Welt', locations: 'Orte', activities: 'Aktivitäten', items: 'Gegenstände', map: 'Karte', farm: 'Bauernhof', collection: 'Sammlung',
    search: 'Suche', searchPlaceholder: 'Charaktere, Guides, FAQ, Gegenstände suchen…',
    home: 'Startseite', notFound: 'Nicht gefunden',
  },
};

export const t = (lang: Locale, key: string): string => uiStrings[lang]?.[key] ?? uiStrings.en[key] ?? key;
