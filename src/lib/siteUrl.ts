/**
 * Public base URL of the help center (no trailing slash), used for canonical
 * links, sitemap and robots.txt so they always agree.
 *
 * Priority:
 *  1. config.site_url            — explicit production URL (recommended)
 *  2. config.sub_path_domain     — sub-path deployment (e.g. example.com/docs)
 *  3. X-Forwarded-Host / X-Original-Host from a proxy
 *  4. the request origin
 */
export function getSiteUrl(request: Request, url: URL, config: any): string {
  if (config?.site_url) return String(config.site_url).replace(/\/+$/, '');

  const subPathDomain = config?.sub_path_domain || null;
  const subPath = config?.sub_path || '';
  if (subPathDomain) {
    return `${url.protocol}//${subPathDomain}${subPath || ''}`.replace(/\/+$/, '');
  }

  const forwardedHost =
    request.headers.get('X-Forwarded-Host') || request.headers.get('X-Original-Host');
  return forwardedHost ? `${url.protocol}//${forwardedHost}` : url.origin;
}
