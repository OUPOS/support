import {
  bn, h2, h3, p, bullet, numbered,
  codeBlock, callout, codeGroup, tabs, divider,
  inlineLink
} from '../../blocks';

export const installationArticle = {
  id: 'installation',
  title: '安裝 OUPOS',
  slug: 'installation',
  excerpt: '如何安裝OUPOS?',
  category_id: 'getting-started',
  is_published: true,
  display_order: 2,
  sidebar_title: null as string | null,
  icon: 'hugeicons:download-04' as string | null,
  created_at: '2024-01-02T00:00:00Z',
  updated_at: '2024-01-02T00:00:00Z',
  content: bn([
  h2('在您的 iPad 下載 OUPOS'),

  bullet([
    { type: 'text', text: '前往 ', styles: {} },
    inlineLink('GitHub', 'https://github.com/OUPOS/oupos-pos'),
    { type: 'text', text: ' 下載並使用 Xcode 編譯安裝 OUPOS', styles: {} },
  ]),

  bullet('或前往 App Store 下載 OUPOS'),

  callout('info', 'App Store 目前還尚未上架 OUPOS'),
]),
};
