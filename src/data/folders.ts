/**
 * Folders group categories into top-level sections shown in the secondary nav bar.
 * The folder with is_default: true is shown on the root page (/).
 * Other folders are accessible via their slug in the top nav.
 *
 * To add a folder:
 *   1. Add an entry here
 *   2. Set folder_id on the categories that belong to it
 *   3. Export it from src/data/index.ts
 */

export const folders = [
  {
    id: 'docs',
    name: '使用手冊',
    slug: 'docs',
    icon: 'hugeicons:book-open-01',
    description: '使用手冊、設定和元件文件。',
    is_default: true,
    display_order: 1,
  },
  // {
  //   id: 'blog',
  //   name: 'Blog',
  //   slug: 'blog',
  //   icon: 'hugeicons:quill-write-01',
  //   description: 'Oupos的更新、公告、以及其他文章。',
  //   is_default: false,
  //   display_order: 2,
  // },
  // {
  //   id: 'cloud',
  //   name: 'Oupos Cloud',
  //   slug: 'cloud',
  //   icon:'hugeicons:cloud',
  //   description: 'Oupos Cloud 使用OUPOS的伺服器為您的Pos提供支援。',
  //   is_default: false,
  //   display_order: 3
  // }
];
