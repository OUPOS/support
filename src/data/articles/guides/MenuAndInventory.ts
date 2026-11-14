import { bn, h2, p, callout, codeGroup, step, numbered, inlineLink, bullet} from '../../blocks';

export const MenuAndInventoryArticle = {
  id: 'menu-and-inventory',
  title: '菜單與庫存管理',
  slug: 'menu-and-inventory',
  excerpt: '如何在OUPOS`中管理菜單與庫存?',
  category_id: 'guides',
  is_published: true,
  display_order: 1,
  sidebar_title: null,
  icon: null,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  content: bn([
    h2('新增菜單'),

    numbered('前往設定頁面'),
    numbered('點選「菜單與配料」'),
    numbered('建立一個菜單分類'),
    numbered('切換至商品，填寫商品名稱、價格以及所屬的分類。'),
    numbered('如該商品有配料，請切換至配料頁面，先新增配料群組，在新增配料。'),
    numbered('填寫配料名稱與加價，並選擇所屬分類與適用商品。'),

    h2('透過Ai建立菜單'),
    callout('info', ["OUPOS不提供Ai服務，此處Ai意旨使用者可透過Ai工具生成菜單，並將其匯入OUPOS。"]),
    numbered("前往設定，菜單與配料頁面，點選「Ai新增菜單」"),
    numbered("將提示詞語菜單貼到Ai工具中，生成json格式的菜單。"),
    numbered("貼上或選擇json檔案，按下「檢查貼上的json」，滑到底下，點擊匯入菜單。完成！"),

    h2("庫存管理"),
    bullet("目前OUPOS僅能手動將商品的供應狀態開關，並不能使用售出的量計算。"),
    bullet("當商品為售完，Pos端將無法下單該商品。"),
    numbered("前往「售完管理」頁面，將該商品的供應狀態開關。"),
    
  ]),
};