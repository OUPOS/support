import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const { pathname } = context.url;

  if (context.request.method !== 'GET' || pathname.startsWith('/api/')) return response;

  const contentType = response.headers.get('Content-Type') || '';
  if (contentType.includes('text/html')) {
    // HTML must always be revalidated: it references hashed bundles in /_helio/
    // that are deleted on every deploy. Letting browsers reuse stale HTML
    // (the old `max-age=60, stale-while-revalidate=300`) made pages load
    // JS chunks that no longer exist → the article island failed to hydrate.
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  // Non-HTML routes (sitemap.xml, robots.txt, *.txt) keep their own Cache-Control.

  return response;
});
