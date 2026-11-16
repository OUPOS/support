/**
 * Helio — Help Center & Documentation Template
 * Edit this file to configure branding, fonts, SEO, and portal settings.
 */
export const helpCenterConfig = {
  // Branding
  portal_name: 'OUPOS',
  primary_color: '#89a6c2',
  secondary_color: '#ee673a',
  welcome_title: 'OUPOS 支援網站',
  welcome_subtitle: '搜尋關鍵字或是瀏覽分類以找到你需要的資訊',
  theme_mode: 'auto' as 'light' | 'dark' | 'auto',
  logo_url: '/oupos.svg' as string | null,
  favicon_url: '/oupos.svg' as string | null,

  // Layout
  show_search: true,
  show_categories: true,
  ai_answer_enabled: false,
  sidebar_style: 'default' as const,

  // Fonts — Geist Mono (uppercase) for headings, Onest for body
  heading_font: 'Geist Mono' as string | null,
  body_font: 'Onest' as string | null,

  // Header
  header_links: [
    { label: '首頁', url: '/' },
    { label: 'GitHub', url: 'https://github.com/OUPOS/OUPOS-pos' },
    { label: '官方網站', url: 'https://oupos.app' },
  ],
  show_primary_button: true,
  primary_button_label: '免費下載',
  primary_button_url: '/article/installation',

  // SEO
  meta_title: '技術支援中心｜OUPOS',
  meta_description:
    'OUPOS為開源的Pos系統，提供完整的POS功能，並且支援多種支付方式。立即在Appstore下載',
  og_image_url: '/og-image.png' as string | null,
  // Production URL used for canonical links, sitemap and robots.txt.
  // Set this to your real domain (e.g. 'https://support.oupos.app') so that
  // preview hosts like *.workers.dev are never treated as canonical.
  site_url: 'https://support.oupos.app' as string | null,
  // <html lang> / og:locale
  locale: 'zh-Hant-TW',
  // Official profiles for Organization structured data
  same_as: ['https://oupos.app', 'https://github.com/OUPOS/OUPOS-pos'] as string[],

  // Misc
  sub_path: null as string | null,
};
