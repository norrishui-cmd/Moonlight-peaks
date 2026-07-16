// Shared UI strings for site-wide chrome (nav, search, common buttons). Content pages
// (articles, character bios, FAQ answers) are translated separately in their own files —
// this dictionary only covers the repeating interface text that appears on every page.
export type Locale = 'en' | 'es' | 'ja' | 'zh' | 'zh-hant' | 'de' | 'fr' | 'ko';

export const uiStrings: Record<Locale, Record<string, string>> = {
  en: {
    characters: 'Characters', families: 'Families', romance: 'Romance',
    tools: 'Tools', faq: 'FAQ', about: 'About',
    guides: 'Guides', allGuides: 'All guides', quests: 'Quests', release: 'Release', demo: 'Demo', platforms: 'Platforms',
    world: 'World', locations: 'Locations', activities: 'Activities', collection: 'Collection', items: 'Items', map: 'Map', farm: 'Farm',
    search: 'Search', searchPlaceholder: 'Search characters, guides, FAQ, items…',
    home: 'Home', notFound: 'Not found',
  },
  es: {
    characters: 'Personajes', families: 'Familias', romance: 'Romance',
    tools: 'Herramientas', faq: 'Preguntas frecuentes', about: 'Acerca de',
    guides: 'Guías', allGuides: 'Todas las guías', quests: 'Misiones', release: 'Lanzamiento', demo: 'Demo', platforms: 'Plataformas',
    world: 'Mundo', locations: 'Ubicaciones', activities: 'Actividades', collection: 'Colección', items: 'Objetos', map: 'Mapa', farm: 'Granja',
    search: 'Buscar', searchPlaceholder: 'Busca personajes, guías, preguntas, objetos…',
    home: 'Inicio', notFound: 'No encontrado',
  },
  ja: {
    characters: 'キャラクター', families: '家族', romance: '恋愛',
    tools: 'ツール', faq: 'よくある質問', about: 'このサイトについて',
    guides: 'ガイド', allGuides: 'すべてのガイド', quests: 'クエスト', release: 'リリース', demo: '体験版', platforms: '対応機種',
    world: '世界', locations: 'ロケーション', activities: 'アクティビティ', collection: 'コレクション', items: 'アイテム', map: 'マップ', farm: '農場',
    search: '検索', searchPlaceholder: 'キャラクター、ガイド、FAQ、アイテムを検索…',
    home: 'ホーム', notFound: 'ページが見つかりません',
  },
  zh: {
    characters: '角色', families: '家族', romance: '恋爱',
    tools: '工具', faq: '常见问题', about: '关于本站',
    guides: '攻略', allGuides: '全部攻略', quests: '任务', release: '发售', demo: '试玩版', platforms: '平台',
    world: '世界', locations: '地点', activities: '活动', collection: '收藏', items: '物品', map: '地图', farm: '农场',
    search: '搜索', searchPlaceholder: '搜索角色、攻略、常见问题、物品…',
    home: '首页', notFound: '页面未找到',
  },
  'zh-hant': {
    characters: '角色', families: '家族', romance: '戀愛',
    tools: '工具', faq: '常見問題', about: '關於本站',
    guides: '攻略', allGuides: '全部攻略', quests: '任務', release: '發售', demo: '試玩版', platforms: '平台',
    world: '世界', locations: '地點', activities: '活動', collection: '收藏', items: '物品', map: '地圖', farm: '農場',
    search: '搜尋', searchPlaceholder: '搜尋角色、攻略、常見問題、物品…',
    home: '首頁', notFound: '頁面未找到',
  },
  de: {
    characters: 'Charaktere', families: 'Familien', romance: 'Romanze',
    tools: 'Werkzeuge', faq: 'FAQ', about: 'Über uns',
    guides: 'Guides', allGuides: 'Alle Guides', quests: 'Quests', release: 'Release', demo: 'Demo', platforms: 'Plattformen',
    world: 'Welt', locations: 'Orte', activities: 'Aktivitäten', collection: 'Sammlung', items: 'Gegenstände', map: 'Karte', farm: 'Bauernhof',
    search: 'Suche', searchPlaceholder: 'Charaktere, Guides, FAQ, Gegenstände suchen…',
    home: 'Startseite', notFound: 'Nicht gefunden',
  },
  fr: {
    characters: 'Personnages', families: 'Familles', romance: 'Romance',
    tools: 'Outils', faq: 'FAQ', about: 'À propos',
    guides: 'Guides', allGuides: 'Tous les guides', quests: 'Quêtes', release: 'Sortie', demo: 'Démo', platforms: 'Plateformes',
    world: 'Monde', locations: 'Lieux', activities: 'Activités', collection: 'Collection', items: 'Objets', map: 'Carte', farm: 'Ferme',
    search: 'Rechercher', searchPlaceholder: 'Rechercher personnages, guides, FAQ, objets…',
    home: 'Accueil', notFound: 'Introuvable',
  },
  ko: {
    characters: '캐릭터', families: '가문', romance: '로맨스',
    tools: '도구', faq: 'FAQ', about: '소개',
    guides: '가이드', allGuides: '전체 가이드', quests: '퀘스트', release: '출시', demo: '데모', platforms: '플랫폼',
    world: '세계관', locations: '장소', activities: '활동', collection: '컬렉션', items: '아이템', map: '지도', farm: '농장',
    search: '검색', searchPlaceholder: '캐릭터, 가이드, FAQ, 아이템 검색…',
    home: '홈', notFound: '페이지를 찾을 수 없음',
  },
};

export const t = (lang: Locale, key: string): string => uiStrings[lang]?.[key] ?? uiStrings.en[key] ?? key;
