
import { bn, h2, p, callout, codeGroup, step, numbered, inlineLink, bullet} from '../../blocks';

export const deleteAccountArticle = {
  id: 'delete-account',
  title: '刪除帳號',
  slug: 'delete-account',
  excerpt: '如何在OUPOS中刪除帳號?',
  category_id: 'guides',
  is_published: true,
  display_order: 2,
  sidebar_title: null,
  icon: null,
  created_at: '2026-11-16T19:30:00Z',
  updated_at: '2026-11-16T19:30:00Z',
  content: bn([
    h2('如何刪除帳號（包括所有資料）'),
    numbered('點擊右上角顯示使用者名稱的位置'),
    numbered('依照指示完成刪除帳號的流程'),
    
    callout('info', ["刪除帳號後，所有資料將無法復原，請務必確認是否要刪除帳號。"]),
  ]),
};