// src/data/image-manifest.ts
// Typed manifest for official Moonlight Peaks press-kit images. Entities/locations/topics here
// come ONLY from filename tokens (see scripts/build-image-manifest.mjs) — never from visual
// inspection, which this workflow explicitly cannot and does not perform.

export type ImageSourceType = 'official-press-kit' | 'user-gameplay' | 'generated' | 'other';

export interface ImageAsset {
  id: string;
  file: string;
  sourceType: ImageSourceType;
  sourceRef?: string;
  sourceUrl?: string;
  rightsNote?: string;
  originalFilename: string;

  width?: number;
  height?: number;

  entities: string[];
  locations: string[];
  items: string[];
  quests: string[];
  topics: string[];

  scene?: string;

  exactRoutes: string[];
  candidateRoutes: string[];

  altBase?: string;
  caption?: string;

  confidence: number;
  matchBasis: string[];
}

const PRESS_KIT_RIGHTS_NOTE =
  "Official press-kit asset; usage terms should follow the publisher's press-kit conditions.";
const PRESS_KIT_SOURCE_REF = 'Moonlight Peaks official press kit';

export const imageManifest: ImageAsset[] = [
  {
    id: 'world-map-screenshot', file: '/images/moonlight-peaks/official/world-map-screenshot.webp',
    sourceType: 'user-gameplay', sourceRef: 'User-submitted in-game map screenshot', rightsNote: 'In-game screenshot, used for reference/commentary purposes.',
    originalFilename: 'Moonlight-Peaks-Map-840x473.jpg', width: 840, height: 473,
    entities: [], locations: ['town', 'misty-shores'], items: [], quests: [], topics: ['map', 'overworld'],
    exactRoutes: ['/map'], candidateRoutes: [],
    altBase: 'In-game overworld map showing Moonlit Pines, Moonlight Peaks town, Misty Shores, and Silverveil Lake', confidence: 0.85, matchBasis: ['user-submitted'],
  },
  {
    id: 'moonlit-pines-vampster-map', file: '/images/moonlight-peaks/official/moonlit-pines-vampster-map.webp',
    sourceType: 'other', sourceRef: 'Community-made Vampster location map (Moonlit Pines)', rightsNote: 'Community-annotated reference image, used for guidance purposes.',
    originalFilename: '800px-Moonlit_Pines_Vampster_Map.webp', width: 800, height: 538,
    entities: [], locations: [], items: ['vampster'], quests: [], topics: ['map', 'vampster', 'collectibles'],
    exactRoutes: ['/map'], candidateRoutes: ['/items/vampster'],
    altBase: 'Community-annotated map showing 14 numbered Vampster locations within the Moonlit Pines area', confidence: 0.7, matchBasis: ['user-submitted'],
  },
  {
    id: 'town-hall-garden-01', file: '/images/moonlight-peaks/official/town-hall-garden-01.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonLightPeaks_TownHallGarden01_QHD.jpg', width: 1920, height: 1080,
    entities: [], locations: ['town-hall'], items: [], quests: [], topics: ['town-hall', 'garden'],
    exactRoutes: ['/locations/town-hall'], candidateRoutes: [],
    altBase: 'Town Hall area in Moonlight Peaks', confidence: 0.9, matchBasis: ['filename-token:town-hall', 'filename-token:garden'],
  },
  {
    id: 'dracula-castle', file: '/images/moonlight-peaks/official/dracula-castle.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_DraculaCastle_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['dracula-castle'],
    // No exact route: this repository's data treats the Dracula family and Ambrosia family as
    // distinct branches, and no location slug named "dracula-castle" exists — merging this into
    // /locations/ambrosia-mansion would be an unsupported inference. Left unmatched on purpose.
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Dracula Castle scene in Moonlight Peaks', confidence: 0.3, matchBasis: ['filename-token:dracula-castle'],
  },
  {
    id: 'farm-02', file: '/images/moonlight-peaks/official/farm-02.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Farm02_QHD.jpg', width: 1920, height: 1080,
    entities: [], locations: ['farm'], items: [], quests: [], topics: ['farming', 'crops'],
    exactRoutes: ['/farming', '/locations/your-farm'], candidateRoutes: ['/beginner-guide'],
    altBase: 'Farm area in Moonlight Peaks', confidence: 0.95, matchBasis: ['filename-token:farm'],
  },
  {
    id: 'farm-06', file: '/images/moonlight-peaks/official/farm-06.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Farm06_QHD.png', width: 1920, height: 1080,
    entities: [], locations: ['farm'], items: [], quests: [], topics: ['farming', 'crops'],
    exactRoutes: ['/farming', '/locations/your-farm'], candidateRoutes: ['/beginner-guide'],
    altBase: 'Farm area in Moonlight Peaks', confidence: 0.95, matchBasis: ['filename-token:farm'],
  },
  {
    id: 'forest-01-summer', file: '/images/moonlight-peaks/official/forest-01-summer.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Forest01_Summer_4K.png', width: 1920, height: 1080,
    entities: [], locations: ['forest'], items: [], quests: [], topics: ['forest', 'season-summer'],
    exactRoutes: ['/locations/forest'], candidateRoutes: ['/environment'],
    altBase: 'Forest environment in Moonlight Peaks (Summer)', confidence: 0.9, matchBasis: ['filename-token:forest', 'filename-token:summer'],
  },
  {
    id: 'forest-02-winter', file: '/images/moonlight-peaks/official/forest-02-winter.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Forest02_Winter_QHD.png', width: 1920, height: 1067,
    entities: [], locations: ['forest'], items: [], quests: [], topics: ['forest', 'season-winter'],
    exactRoutes: ['/locations/forest'], candidateRoutes: ['/environment'],
    altBase: 'Forest environment in Moonlight Peaks (Winter)', confidence: 0.9, matchBasis: ['filename-token:forest', 'filename-token:winter'],
  },
  {
    id: 'interior-01', file: '/images/moonlight-peaks/official/interior-01.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior01_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'interior-02', file: '/images/moonlight-peaks/official/interior-02.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior02_4K.png', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'interior-04', file: '/images/moonlight-peaks/official/interior-04.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior04_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'interior-06', file: '/images/moonlight-peaks/official/interior-06.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior06_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'interior-07', file: '/images/moonlight-peaks/official/interior-07.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior07_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'interior-09', file: '/images/moonlight-peaks/official/interior-09.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Interior09_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['interior'],
    exactRoutes: [], candidateRoutes: [],
    altBase: 'Interior scene in Moonlight Peaks', confidence: 0.2, matchBasis: ['filename-token:interior'],
  },
  {
    id: 'marshes-01', file: '/images/moonlight-peaks/official/marshes-01.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Marshes01_QHD.jpg', width: 1920, height: 1080,
    entities: [], locations: ['marshes'], items: [], quests: [], topics: ['marshes'],
    // No dedicated /locations/marshes route exists — "Howling Marshes" is currently only prose
    // text inside /locations/landmarks, not its own page, so this is a candidate, not exact.
    exactRoutes: [], candidateRoutes: ['/locations/landmarks'],
    altBase: 'Marshes area in Moonlight Peaks', confidence: 0.55, matchBasis: ['filename-token:marshes'],
  },
  {
    id: 'minigame', file: '/images/moonlight-peaks/official/minigame.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Minigame.jpg', width: 1920, height: 1080,
    entities: [], locations: [], items: [], quests: [], topics: ['minigames'],
    exactRoutes: ['/mini-games'], candidateRoutes: [],
    altBase: 'Moonlight Peaks minigame screenshot', confidence: 0.8, matchBasis: ['filename-token:minigame'],
  },
  {
    id: 'moonlit-slopes-03', file: '/images/moonlight-peaks/official/moonlit-slopes-03.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_MoonlitSlopes03_4K.png', width: 1920, height: 1080,
    entities: [], locations: ['moonlit-slopes'], items: [], quests: [], topics: ['moonlit-slopes'],
    // Same situation as Marshes — Moonlit Slopes is prose-only inside /locations/landmarks.
    exactRoutes: [], candidateRoutes: ['/locations/landmarks'],
    altBase: 'Moonlit Slopes environment in Moonlight Peaks', confidence: 0.55, matchBasis: ['filename-token:moonlit-slopes'],
  },
  {
    id: 'museum-02', file: '/images/moonlight-peaks/official/museum-02.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Museum02_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: ['museum'], items: [], quests: [], topics: ['museum'],
    exactRoutes: ['/locations/silverveil-museum'], candidateRoutes: [],
    altBase: 'Museum area in Moonlight Peaks', confidence: 0.85, matchBasis: ['filename-token:museum'],
  },
  {
    id: 'museum-05', file: '/images/moonlight-peaks/official/museum-05.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Museum05_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: ['museum'], items: [], quests: [], topics: ['museum'],
    exactRoutes: ['/locations/silverveil-museum'], candidateRoutes: [],
    altBase: 'Museum area in Moonlight Peaks', confidence: 0.85, matchBasis: ['filename-token:museum'],
  },
  {
    id: 'museum-09', file: '/images/moonlight-peaks/official/museum-09.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Museum09_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: ['museum'], items: [], quests: [], topics: ['museum'],
    exactRoutes: ['/locations/silverveil-museum'], candidateRoutes: [],
    altBase: 'Museum area in Moonlight Peaks', confidence: 0.85, matchBasis: ['filename-token:museum'],
  },
  {
    id: 'pier-01', file: '/images/moonlight-peaks/official/pier-01.webp',
    sourceType: 'official-press-kit', sourceRef: PRESS_KIT_SOURCE_REF, rightsNote: PRESS_KIT_RIGHTS_NOTE,
    originalFilename: 'MoonlightPeaks_Pier01_4K.jpg', width: 1920, height: 1080,
    entities: [], locations: ['pier'], items: [], quests: [], topics: ['pier', 'fishing'],
    exactRoutes: ['/locations/pier', '/fishing'], candidateRoutes: [],
    altBase: 'Pier area in Moonlight Peaks', confidence: 0.9, matchBasis: ['filename-token:pier'],
  },
];
