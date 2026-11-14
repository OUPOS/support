/**
 * Central data registry
 * Import categories, articles, and folders from their individual files.
 * localData.ts consumes these exports.
 *
 * To add content:
 *   1. Create a file in src/data/categories/, src/data/articles/<category>/, or src/data/folders.ts
 *   2. Import and add it to the arrays below
 */

// ─── Folders ──────────────────────────────────────────────────────────────────
export { folders } from './folders';

// ─── Categories ──────────────────────────────────────────────────────────────
import { gettingStartedCategory } from './categories/getting-started';
import { guidesCategory } from './categories/guides';
import { blogCategory } from './categories/blog';
import { PrivacyAndTermsCategory } from './categories/privacyandterms';

export const categories = [
  gettingStartedCategory,
  guidesCategory,
  blogCategory,
  PrivacyAndTermsCategory,
];

// ─── Articles: Getting Started ────────────────────────────────────────────────
import { welcomeArticle } from './articles/getting-started/welcome';
import { installationArticle } from './articles/getting-started/installation';
import { quickStartArticle } from './articles/getting-started/quick-start';


// ─── Articles: Guides ─────────────────────────────────────────────────────────
import { MenuAndInventoryArticle } from './articles/guides/MenuAndInventory';
import { deleteAccountArticle } from './articles/guides/deleteAccount';

// ─── Articles: Privacy and Terms ────────────────────────────────────────────────
import { privacyArticle } from './articles/privacyandterms/privacy';
import { termsArticle } from './articles/privacyandterms/terms';

// ─── Articles: Blog ───────────────────────────────────────────────────────────
import { buildingDocsWithBlocksArticle } from './articles/blog/building-docs-with-blocks';

export const articles = [
  // Getting Started
  welcomeArticle,
  installationArticle,
  quickStartArticle,
  // Privacy and Terms
  privacyArticle,
  termsArticle,
  // Guides
  MenuAndInventoryArticle,
  deleteAccountArticle,
  // Blog
  buildingDocsWithBlocksArticle,
];
