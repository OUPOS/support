import type { APIRoute } from 'astro';
import { getHelpCenterConfig } from '../lib/localData';
import { getSiteUrl } from '../lib/siteUrl';

export const GET: APIRoute = async ({ request, url }) => {
  const config = await getHelpCenterConfig();
  const baseUrl = getSiteUrl(request, url, config);

  // Note: /_helio/ (JS/CSS bundles) must stay crawlable — every page is rendered
  // client-side, and Google can't render (or index) pages whose assets are blocked.
  const robots = `User-agent: *
Allow: /
Disallow: /api/

# SEO tool scrapers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
};
