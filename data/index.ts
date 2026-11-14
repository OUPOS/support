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
import { troubleshootingCategory } from './categories/troubleshooting';
import { blogCategory } from './categories/blog';

export const categories = [
  gettingStartedCategory,
  guidesCategory,
  troubleshootingCategory,
  blogCategory,
];

// ─── Articles: Getting Started ────────────────────────────────────────────────
import { welcomeArticle } from './articles/getting-started/welcome';
import { installationArticle } from './articles/getting-started/installation';
import { quickStartArticle } from './articles/getting-started/quick-start';


// ─── Articles: Guides ─────────────────────────────────────────────────────────
import { configurationArticle } from './articles/guides/configuration';
import { themingArticle } from './articles/guides/theming';
import { addingContentArticle } from './articles/guides/adding-content';


// ─── Articles: Troubleshooting ────────────────────────────────────────────────
import { commonErrorsArticle } from './articles/troubleshooting/common-errors';
import { performanceArticle } from './articles/troubleshooting/performance';

// ─── Articles: Blog ───────────────────────────────────────────────────────────
import { introducingHelioArticle } from './articles/blog/introducing-helio';
import { buildingDocsWithBlocksArticle } from './articles/blog/building-docs-with-blocks';
import { seoForDocsArticle } from './articles/blog/seo-for-docs';
import { deployingToCloudflareArticle } from './articles/blog/deploying-to-cloudflare';
import { darkModeThemingArticle } from './articles/blog/dark-mode-theming';
import { writingGreatDocsArticle } from './articles/blog/writing-great-docs';

export const articles = [
  // Getting Started
  welcomeArticle,
  installationArticle,
  quickStartArticle,
  // Guides
  configurationArticle,
  themingArticle,
  addingContentArticle,
  // Troubleshooting
  commonErrorsArticle,
  performanceArticle,
  // Blog
  introducingHelioArticle,
  buildingDocsWithBlocksArticle,
  seoForDocsArticle,
  deployingToCloudflareArticle,
  darkModeThemingArticle,
  writingGreatDocsArticle,
];
