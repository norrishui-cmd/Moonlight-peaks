import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { previews } from '../data/previews';
import { news } from '../data/news';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Articles are dated by month only, so we omit per-item pubDate rather than invent
// precise timestamps; the channel build date is set on each deploy.
const BUILD = new Date('2026-06-30T00:00:00Z').toUTCString();

export const GET: APIRoute = () => {
  const abs = (u: string) => new URL(u, SITE.url).href;
  const newsItems = news
    .map((item) => {
      const link = abs(`/news/${item.slug}`);
      const pubDate = new Date(`${item.date}T00:00:00Z`).toUTCString();
      return `    <item>
      <title>${esc(item.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(item.body)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>news</category>
    </item>`;
    })
    .join('\n');

  const previewItems = previews
    .map((p) => {
      const link = abs(`/previews/${p.slug}`);
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${esc(p.dek)}</description>
    </item>`;
    })
    .join('\n');

  const items = [newsItems, previewItems].filter(Boolean).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Moonlight Peaks — Articles &amp; Guides</title>
    <link>${SITE.url}</link>
    <description>Moonlight Peaks news, guides, demo coverage and cozy-sim comparisons.</description>
    <language>en</language>
    <lastBuildDate>${BUILD}</lastBuildDate>
    <atom:link href="${abs('/rss.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
