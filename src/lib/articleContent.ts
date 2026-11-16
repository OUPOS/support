/**
 * Server-side helpers for article content stored as BlockNote JSON
 * (the `<script data-bn type="application/json">` payload produced by `bn()`).
 *
 * Used to:
 *  - pass blocks to the React island separately from `content` (avoids
 *    nested <script> tags when Astro serializes island props)
 *  - render a static HTML version of the article for crawlers / no-JS
 *    visitors and as the fallback when the interactive viewer fails
 *  - build meta descriptions from the real article text
 */

const BN_RE = /<script data-bn type="application\/json">([\s\S]*?)<\/script>/;

export function extractBlocks(content: string | null | undefined): any[] | null {
  if (!content) return null;
  const m = content.match(BN_RE);
  if (!m) return null;
  try {
    const parsed = JSON.parse(m[1]);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const safeHref = (href: unknown) => {
  const h = String(href ?? '').trim();
  return /^(https?:|mailto:|tel:|\/|#)/i.test(h) ? h : '#';
};

function inlineToHtml(content: unknown): string {
  if (typeof content === 'string') return esc(content);
  if (!Array.isArray(content)) return '';
  return content
    .map((n: any) => {
      if (!n) return '';
      if (n.type === 'link') {
        const external = /^https?:/i.test(String(n.href));
        return `<a href="${esc(safeHref(n.href))}"${external ? ' rel="noopener" target="_blank"' : ''}>${inlineToHtml(n.content)}</a>`;
      }
      let html = esc(n.text ?? '');
      const st = n.styles || {};
      if (st.code) html = `<code>${html}</code>`;
      if (st.bold) html = `<strong>${html}</strong>`;
      if (st.italic) html = `<em>${html}</em>`;
      if (st.underline) html = `<u>${html}</u>`;
      if (st.strike) html = `<s>${html}</s>`;
      return html;
    })
    .join('');
}

function inlineToText(content: unknown): string {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content.map((n: any) => (n?.type === 'link' ? inlineToText(n.content) : n?.text ?? '')).join('');
}

const LIST_TAG: Record<string, string> = {
  bulletListItem: 'ul',
  checkListItem: 'ul',
  numberedListItem: 'ol',
};

function blockToHtml(b: any): string {
  const p = b?.props || {};
  const inner = inlineToHtml(b?.content);
  const children = Array.isArray(b?.children) && b.children.length ? blocksToHtml(b.children) : '';
  switch (b?.type) {
    case 'heading': {
      // The page already has the article title as <h1>; demote content h1 → h2
      const level = Math.min(Math.max(Number(p.level) || 2, 2), 6);
      return `<h${level}>${inner}</h${level}>${children}`;
    }
    case 'paragraph':
      return inner ? `<p>${inner}</p>${children}` : children;
    case 'bulletListItem':
    case 'numberedListItem':
      return `<li>${inner}${children}</li>`;
    case 'checkListItem':
      return `<li>${p.checked ? '☑' : '☐'} ${inner}${children}</li>`;
    case 'quote':
      return `<blockquote>${inner}</blockquote>${children}`;
    case 'codeBlock':
      return `<pre><code>${esc(inlineToText(b.content))}</code></pre>`;
    case 'divider':
      return '<hr />';
    case 'callout':
      return `<aside class="ssr-callout" data-type="${esc(p.calloutType)}"><p>${inner}</p>${children}</aside>`;
    case 'step':
      return `<section><h3>${esc(p.stepNumber)}. ${esc(p.stepTitle)}</h3><p>${inner}</p>${children}</section>`;
    case 'accordion':
      return `<details><summary>${esc(p.accordionTitle)}</summary><p>${esc(p.accordionBody)}</p></details>`;
    case 'expandable':
      return `<details><summary>${esc(p.title)}</summary><p>${inner}</p></details>`;
    case 'tabs': {
      const n = Number(p.tabCount) || 0;
      let out = '';
      for (let i = 0; i < n; i++) {
        out += `<section><h4>${esc(p[`tab${i}label`])}</h4><p>${esc(p[`tab${i}body`])}</p></section>`;
      }
      return out;
    }
    case 'codeGroup':
      return (Array.isArray(p.tabs) ? p.tabs : [])
        .map((t: any) => `<h4>${esc(t.label)}</h4><pre><code>${esc(t.code)}</code></pre>`)
        .join('');
    case 'card': {
      const title = esc(p.cardTitle);
      const head = p.href ? `<a href="${esc(safeHref(p.href))}">${title}</a>` : title;
      return `<section><h4>${head}</h4><p>${esc(p.cardBody)}</p></section>`;
    }
    case 'cardGroup': {
      let cards: any[] = [];
      try { cards = typeof p.cards === 'string' ? JSON.parse(p.cards) : p.cards || []; } catch { /* ignore */ }
      return cards
        .map((c) => {
          const head = c.href ? `<a href="${esc(safeHref(c.href))}">${esc(c.title)}</a>` : esc(c.title);
          return `<section><h4>${head}</h4><p>${esc(c.body)}</p></section>`;
        })
        .join('');
    }
    case 'image': {
      const src = p.url || p.src;
      if (!src) return '';
      const alt = p.caption || p.name || '';
      return `<figure><img src="${esc(safeHref(src))}" alt="${esc(alt)}" loading="lazy" />${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ''}</figure>`;
    }
    case 'paramField':
      return `<p><code>${esc(p.paramName)}</code> <em>${esc(p.paramType)}</em>${p.required ? ' (required)' : ''} — ${inner}</p>`;
    case 'responseField':
      return `<p><code>${esc(p.fieldName)}</code> <em>${esc(p.fieldType)}</em> — ${inner}</p>`;
    case 'columnList':
    case 'column':
      return children;
    default:
      return inner ? `<p>${inner}</p>${children}` : children;
  }
}

/** Render BlockNote blocks to simple semantic HTML (consecutive list items are grouped). */
export function blocksToHtml(blocks: any[] | null | undefined): string {
  if (!Array.isArray(blocks)) return '';
  let out = '';
  let openList: string | null = null;
  for (const b of blocks) {
    const tag = LIST_TAG[b?.type] ?? null;
    if (tag !== openList) {
      if (openList) out += `</${openList}>`;
      if (tag) out += `<${tag}>`;
      openList = tag;
    }
    try {
      out += blockToHtml(b);
    } catch {
      /* skip malformed block */
    }
  }
  if (openList) out += `</${openList}>`;
  return out;
}

/** Plain text of the blocks (for meta descriptions). */
export function blocksToText(blocks: any[] | null | undefined): string {
  if (!Array.isArray(blocks)) return '';
  const parts: string[] = [];
  const walk = (list: any[]) => {
    for (const b of list) {
      if (!b || b.type === 'codeBlock' || b.type === 'codeGroup') continue;
      const t = inlineToText(b.content).trim();
      if (t) parts.push(t);
      if (Array.isArray(b.children)) walk(b.children);
    }
  };
  walk(blocks);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

/** Strip HTML tags from legacy (non-BlockNote) article content. */
export function htmlToText(html: string | null | undefined): string {
  return String(html ?? '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Truncate to ~maxLen characters without cutting mid-word for latin text. */
export function truncate(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > maxLen * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

/**
 * Everything an article page needs from the raw article on the server:
 * blocks for the island, a sanitized article (content stripped when blocks exist),
 * static HTML, and a meta description.
 */
export function prepareArticle<T extends { content?: string; excerpt?: string | null; title: string }>(article: T) {
  const blocks = extractBlocks(article.content);
  const html = blocks ? blocksToHtml(blocks) : String(article.content ?? '').replace(/<script[\s\S]*?<\/script>/gi, '');
  const bodyText = blocks ? blocksToText(blocks) : htmlToText(article.content);
  const excerpt = (article.excerpt || '').trim();
  // Combine excerpt (often a short question) with body text for a fuller description
  const description = truncate([excerpt, bodyText].filter(Boolean).join(' ') || article.title);
  const safeArticle = blocks ? { ...article, content: '' } : article;
  return { blocks, html, description, safeArticle };
}
