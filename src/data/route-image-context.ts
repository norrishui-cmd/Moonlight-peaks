// src/data/route-image-context.ts
// Route context index for image matching. Every entry here is derived from real repository data
// (actual location slugs in src/data/locations.ts, actual page topics) — not guessed. A route with
// no exact-matching image group intentionally has an empty or narrow context rather than a padded
// one, per the "no image is better than the wrong image" rule.

export type RouteContext = {
  route: string;
  topics: string[];
  locations: string[]; // must correspond to a real slug in src/data/locations.ts, or be empty
  entities: string[];
  quests: string[];
  items: string[];
};

export const routeImageContext: RouteContext[] = [
  { route: '/farming', topics: ['farming', 'crops'], locations: ['your-farm'], entities: [], quests: [], items: [] },
  { route: '/locations', topics: ['locations'], locations: [], entities: [], quests: [], items: [] },
  { route: '/locations/your-farm', topics: ['farming'], locations: ['your-farm'], entities: [], quests: [], items: [] },
  { route: '/locations/forest', topics: ['forest'], locations: ['forest'], entities: [], quests: [], items: [] },
  { route: '/locations/pier', topics: ['pier', 'fishing'], locations: ['pier'], entities: [], quests: [], items: [] },
  { route: '/locations/town-hall', topics: ['town-hall'], locations: ['town-hall'], entities: [], quests: [], items: [] },
  { route: '/locations/silverveil-museum', topics: ['museum'], locations: ['silverveil-museum'], entities: [], quests: [], items: [] },
  { route: '/locations/landmarks', topics: ['marshes', 'moonlit-slopes'], locations: ['landmarks'], entities: [], quests: [], items: [] },
  { route: '/mini-games', topics: ['minigames'], locations: [], entities: [], quests: [], items: [] },
  { route: '/fishing', topics: ['fishing', 'pier'], locations: ['pier'], entities: [], quests: [], items: [] },
  { route: '/map', topics: ['locations', 'map'], locations: [], entities: [], quests: [], items: [] },
  { route: '/beginner-guide', topics: ['farming'], locations: ['your-farm'], entities: [], quests: [], items: [] },
  { route: '/environment', topics: ['season-summer', 'season-winter', 'forest'], locations: ['forest'], entities: [], quests: [], items: [] },
  { route: '/nokturna', topics: ['nokturna', 'cards', 'deck-building'], locations: [], entities: [], quests: [], items: [] },
  { route: '/characters/death', topics: [], locations: [], entities: ['death'], quests: [], items: [] },
  // Explicitly NOT mapped, per the "do not add Misty Shores unless repository data supports it"
  // style rule: 'dracula-castle' has no matching location slug (Dracula family and Ambrosia family
  // are distinct branches in this repository's data — merging "Dracula Castle" into
  // "Ambrosia Mansion" would be an unsupported inference), and generic 'interior' images have no
  // location token at all by design (see build-image-manifest.mjs), so they get no route context.
];
