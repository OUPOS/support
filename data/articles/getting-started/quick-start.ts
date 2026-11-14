import { bn, h2, h3, p, bullet, numbered, codeBlock, callout, codeGroup, tabs, accordion, step, cardGroup, divider, inlineLink } from '../../blocks';

export const quickStartArticle = {
  id: 'quick-start',
  title: '快速開始',
  slug: 'quick-start',
  category_id: 'getting-started',
  is_published: true,
  display_order: 3,
  sidebar_title: null as string | null,
  icon: 'hugeicons:rocket-01' as string | null,
  created_at: '2024-01-03T00:00:00Z',
  updated_at: '2024-01-03T00:00:00Z',
  content: bn([
    h2('首次開啟 OUPOS'),
    numbered('填入您的商家名稱，這將會是出單的標題。'),
    numbered('註冊管理員帳戶'),

    h2('建立您的菜單'),
    callout('info', [
      { type: 'text', text: '想要使用Ai建立菜單嗎？', styles: {} },
      inlineLink('點擊前往', '/menu-and-inventory'),
    ]),
    numbered('前往設定頁面'),
    numbered('點選「菜單與配料」'),
    numbered('建立一個菜單分類'),
    numbered('切換至商品，填寫商品名稱、價格以及所屬的分類。'),
    numbered('如該商品有配料，請切換至配料頁面，先新增配料群組，在新增配料。'),
    numbered('填寫配料名稱與加價，並選擇所屬分類與適用商品。'),

    
    h2('建立員工帳號'),
    numbered('前往設定頁面'),
    numbered('點選「員工帳號」'),
    numbered('建立使用者名稱與密碼即完成。'),

    h2('建立支付方式'),
    numbered('前往設定頁面'),
    numbered('點選「支付方式」'),
    numbered('建立支付方式名稱。'),

    h2('建立桌號'),
    numbered('前往設定頁面'),
    numbered('點選「桌號」'),
    numbered('建立桌號名稱。'),

    h2('設定出單機'),
    p('可使用Xprinter系列，以下已Xprinter Q90ec為例。'),
    numbered('前往設定頁面'),
    numbered('點選「出單機」'),
    numbered('設定出單機的ip, tcp連接阜填寫9100，選擇58mm。'),  

    accordion('OUPOS需要網際網路嗎？', '不需要，但若是您連接出單機，則需要連接至內部網路，資料不會上傳到OUPOS.'),
  ]),
};
