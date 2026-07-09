// scripts/match-images-to-routes.mjs
// Deterministic scoring: image manifest × route context → seo-output/IMAGE_ROUTE_MATCHES.csv
// No fuzzy/semantic guessing — every point awarded traces to an explicit shared token.

import { imageManifest } from '../src/data/image-manifest.ts';
import { routeImageContext } from '../src/data/route-image-context.ts';
import fs from 'node:fs';

function score(image, route) {
  let pts = 0;
  const reasons = [];

  if (image.exactRoutes.includes(route.route)) {
    pts += 100;
    reasons.push('explicit exactRoutes match');
  }
  for (const e of image.entities) {
    if (route.entities.includes(e)) { pts += 80; reasons.push(`entity:${e}`); }
  }
  for (const l of image.locations) {
    if (route.locations.includes(l)) { pts += 70; reasons.push(`location:${l}`); }
  }
  for (const q of image.quests) {
    if (route.quests.includes(q)) { pts += 70; reasons.push(`quest:${q}`); }
  }
  for (const it of image.items) {
    if (route.items.includes(it)) { pts += 65; reasons.push(`item:${it}`); }
  }
  const topicOverlap = image.topics.filter((t) => route.topics.includes(t));
  if (topicOverlap.length >= 2) { pts += 40; reasons.push(`topics:${topicOverlap.join('+')}`); }
  else if (topicOverlap.length === 1) { pts += 15; reasons.push(`topic:${topicOverlap[0]}`); }

  // Normalize: 100 (an exact-route hit) is treated as the ceiling for a single clean match.
  const normalized = Math.min(pts / 100, 1);
  return { score: normalized, reasons };
}

function classify(normScore) {
  if (normScore >= 0.90) return 'AUTO_ASSIGN';
  if (normScore >= 0.75) return 'REVIEW';
  return 'NO_ASSIGN';
}

const rows = [];
for (const route of routeImageContext) {
  for (const image of imageManifest) {
    const { score: s, reasons } = score(image, route);
    if (s <= 0) continue;
    rows.push({
      route: route.route,
      image_id: image.id,
      score: s.toFixed(2),
      match_reason: reasons.join('; '),
      status: classify(s),
      original_filename: image.originalFilename,
    });
  }
}

rows.sort((a, b) => b.score - a.score);

const header = 'route,image_id,score,match_reason,status,original_filename';
const csvLines = rows.map((r) =>
  [r.route, r.image_id, r.score, `"${r.match_reason}"`, r.status, r.original_filename].join(',')
);
fs.writeFileSync('seo-output/IMAGE_ROUTE_MATCHES.csv', [header, ...csvLines].join('\n') + '\n');

console.log(`Wrote ${rows.length} route×image match rows.`);
console.log('AUTO_ASSIGN:', rows.filter((r) => r.status === 'AUTO_ASSIGN').length);
console.log('REVIEW:', rows.filter((r) => r.status === 'REVIEW').length);
console.log('NO_ASSIGN (score>0 but below threshold):', rows.filter((r) => r.status === 'NO_ASSIGN').length);
