// scripts/build-image-manifest.mjs
// Deterministic filename tokenizer for official press-kit images.
// RULE: parse only what the filename literally contains. Never infer characters, quests, or
// exact sub-locations from appearance, mood, or color — see IMAGE_PRESS_KIT_INVENTORY.md for why.

/** @type {Record<string, { topics: string[]; locations: string[] }>} */
export const TOKEN_MAP = {
  farm: { topics: ['farming', 'crops'], locations: ['farm'] },
  forest: { topics: ['forest'], locations: ['forest'] },
  museum: { topics: ['museum'], locations: ['museum'] },
  pier: { topics: ['pier', 'fishing'], locations: ['pier'] },
  marshes: { topics: ['marshes'], locations: ['marshes'] },
  'moonlit-slopes': { topics: ['moonlit-slopes'], locations: ['moonlit-slopes'] },
  'dracula-castle': { topics: ['dracula-castle'], locations: ['dracula-castle'] },
  minigame: { topics: ['minigames'], locations: [] },
  interior: { topics: ['interior'], locations: [] },
  'town-hall': { topics: ['town-hall'], locations: ['town-hall'] },
  garden: { topics: ['garden'], locations: [] },
  summer: { topics: ['season-summer'], locations: [] },
  winter: { topics: ['season-winter'], locations: [] },
};

// Multi-word compound tokens that must be matched before single-word splitting (longest first).
const COMPOUND_ORDER = ['town-hall', 'moonlit-slopes', 'dracula-castle'];

/**
 * Parse a production slug (e.g. "town-hall-garden-01", "farm-02", "forest-01-summer") into
 * { topics, locations, scene } using ONLY the token map above. Numbers are dropped (they're
 * scene/shot numbers, not semantic tokens). Unrecognized tokens are ignored, not guessed at.
 */
export function tokenizeSlug(slug) {
  let remaining = slug.replace(/-\d+$/, ''); // strip trailing scene number like "-01"
  remaining = remaining.replace(/-\d+-/g, '-'); // strip embedded scene number like farm-02-summer edge case
  const topics = new Set();
  const locations = new Set();
  const matchedTokens = [];

  for (const compound of COMPOUND_ORDER) {
    if (remaining.includes(compound)) {
      const map = TOKEN_MAP[compound];
      map.topics.forEach((t) => topics.add(t));
      map.locations.forEach((l) => locations.add(l));
      matchedTokens.push(compound);
      remaining = remaining.replace(compound, '');
    }
  }

  const leftoverParts = remaining.split('-').filter(Boolean);
  for (const part of leftoverParts) {
    if (TOKEN_MAP[part]) {
      TOKEN_MAP[part].topics.forEach((t) => topics.add(t));
      TOKEN_MAP[part].locations.forEach((l) => locations.add(l));
      matchedTokens.push(part);
    }
  }

  return {
    topics: [...topics],
    locations: [...locations],
    matchBasis: matchedTokens.map((t) => `filename-token:${t}`),
  };
}
