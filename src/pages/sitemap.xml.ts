import type { APIRoute } from 'astro';
import { getArticles, getCategories, getHelpCenterConfig } from '../lib/localData';
import { getSiteUrl } from '../lib/siteUrl';

const xmlEscape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ request, url }) => {
  const [articles, categories, config] = await Promise.all([
    getArticles(),
    getCategories(),
    getHelpCenterConfig(),
  ]);

  const baseUrl = getSiteUrl(request, url, config);

  const toDate = (a: any) => new Date(a.updated_at || a.created_at || Date.now());
  const latestOf = (list: any[]) =>
    list.length ? new Date(Math.max(...list.map((a) => toDate(a).getTime()))).toISOString() : undefined;

  const entries: { loc: string; lastmod?: string }[] = [];

  // Homepage — lastmod = most recently updated article
  entries.push({ loc: `${baseUrl}/`, lastmod: latestOf(articles) });

  // Category pages — use the category id: names can be non-ASCII (e.g. 首次使用)
  // and would otherwise collapse to an empty slug.
  for (const cat of categories) {
    const catArticles = articles.filter((a) => a.category_id === cat.id);
    if (!catArticles.length) continue; // don't list empty categories
    entries.push({ loc: `${baseUrl}/category/${encodeURIComponent(cat.id)}`, lastmod: latestOf(catArticles) });
  }

  // Article pages — canonical /article/<slug> form only
  const seen = new Set<string>();
  for (const article of articles) {
    if (seen.has(article.slug)) continue;
    seen.add(article.slug);
    entries.push({
      loc: `${baseUrl}/article/${encodeURIComponent(article.slug)}`,
      lastmod: toDate(article).toISOString(),
    });
  }

  const body = entries
    .map(
      (e) => `  <url>
    <loc>${xmlEscape(e.loc)}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
