import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { seoPages, seoStats, SEO_PROGRAM_ENABLED } from '../data/seoGraph';

export const GET: APIRoute = () => {
  const payload = {
    site: SITE.url,
    generatedAt: new Date().toISOString(),
    programmaticSeoEnabled: SEO_PROGRAM_ENABLED,
    stats: seoStats,
    generatedUrlCount: seoPages.length,
    generatedUrls: seoPages.map((page) => ({
      path: page.path,
      url: new URL(page.path, SITE.url).href,
      title: page.title,
      kind: page.kind,
      hub: page.hub,
      sourceCount: page.sources?.length || 0,
      sources: (page.sources || []).map((source) => ({
        label: source.label,
        url: new URL(source.href, SITE.url).href,
      })),
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=300',
    },
  });
};
