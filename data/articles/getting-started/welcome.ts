export const welcomeArticle = {
  id: 'welcome',
  title: '歡迎使用 OUPOS',
  slug: 'welcome',
  excerpt: 'OUPOS 是一套免費、開放原始碼的 POS 系統，提供自助部署與雲端託管兩種使用方式，協助商家管理日常營運，並保有系統與資料的自主權。',
  category_id: 'getting-started',
  is_published: true,
  display_order: 1,
  sidebar_title: null as string | null,
  icon: 'hugeicons:star' as string | null,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  content: `
<h2>歡迎來到 OUPOS</h2>
<p>感謝您選擇 OUPOS。</p>
<p>OUPOS 是一套以開放原始碼為核心的銷售時點系統（Point of Sale，POS），致力於提供商家一個自由、彈性且容易擴充的營運管理工具。</p>
<p>我們希望 POS 系統不應該受到昂貴授權費用、封閉平台或特定硬體的限制。因此，OUPOS 採用開放原始碼的方式開發，讓任何人都能免費取得程式碼、檢視系統運作方式，並依照自己的需求部署與修改。</p>

<blockquote>
  <p><strong>好的 POS 系統，不應該限制商家的選擇。</strong></p>
  <p>您可以自行架設、自由修改，也可以選擇由 OUPOS 提供雲端服務。系統如何部署、資料如何管理，由您決定。</p>
</blockquote>

<h2>什麼是 OUPOS？</h2>
<p>OUPOS 不只是一套收銀工具，而是一個以商家日常營運為出發點打造的 POS 系統。</p>
<p>從商品管理、銷售結帳到員工管理與營運報表，我們希望透過整合式的操作介面，讓商家能夠更有效率地處理每天的營運工作。</p>

<h2>您可以如何使用 OUPOS？</h2>
<p>OUPOS 提供兩種使用方式，您可以依照技術能力、預算與營運需求選擇適合自己的方案。</p>

<h3>自行部署（Self-hosted）</h3>
<p>如果您具備基本的伺服器管理能力，可以將 OUPOS 部署在自己的伺服器或雲端主機上。</p>
<ul>
  <li><strong>免費使用：</strong>無須支付 OUPOS 軟體授權費用。</li>
  <li><strong>自主管理：</strong>自行管理伺服器、資料庫與系統環境。</li>
  <li><strong>自由修改：</strong>可以依照自身需求調整程式碼及功能。</li>
  <li><strong>資料自主：</strong>資料存放位置與備份方式由您自行決定。</li>
</ul>

<h3>使用 OUPOS 雲端服務</h3>
<p>不想自行維護伺服器，也不熟悉系統部署嗎？您可以選擇 OUPOS 提供的雲端託管服務。</p>
<p>我們協助處理系統部署與伺服器維護，讓您不必花費額外時間管理基礎架構，就能專注於商店營運。</p>
<ul>
  <li>免自行準備伺服器。</li>
  <li>免自行處理系統部署。</li>
  <li>依照商家需求選擇適合的服務方案。</li>
  <li>由 OUPOS 協助提供雲端環境與相關服務。</li>
</ul>
<p>雲端服務的具體功能、限制與收費方式，請參閱官方方案說明。</p>

<h2>OUPOS 提供哪些功能？</h2>
<p>OUPOS 以商家日常營運需求為核心，整合多項 POS 常用功能，並持續擴充系統能力。</p>

<table>
  <thead>
    <tr><th>功能</th><th>說明</th></tr>
  </thead>
  <tbody>
    <tr><td>銷售結帳</td><td>提供直覺的 POS 操作介面，快速完成商品選擇與交易。</td></tr>
    <tr><td>商品管理</td><td>管理商品資訊、價格及相關設定。</td></tr>
    <tr><td>庫存管理</td><td>掌握商品庫存與日常庫存異動。</td></tr>
    <tr><td>多元支付串接</td><td>目前提供LINEPay/街口支付/全支付。</td></tr>
    <tr><td>員工管理</td><td>管理員工帳號及不同人員的操作權限。</td></tr>
    <tr><td>營運報表</td><td>透過銷售數據了解營業狀況。</td></tr>
    <tr><td>離線操作</td><td>支援離線情境下的 POS 使用，降低網路中斷對現場結帳的影響。</td></tr>
    <tr><td>多商家架構</td><td>以多商家架構為發展方向，支援不同商家的獨立營運需求。</td></tr>
  </tbody>
</table>

<p>實際可使用的功能會依照軟體版本、部署環境及所選服務方案而有所不同。</p>

<h2>開放原始碼與社群</h2>
<p>OUPOS 相信開放原始碼能讓軟體持續進步，也能讓使用者擁有更多選擇。</p>
<p>我們希望開發者、商家及社群成員都能參與 OUPOS 的發展，無論是回報問題、提出功能建議、改善程式碼，或是協助文件撰寫，都能讓整個專案變得更好。</p>
<ul>
  <li>自由檢視公開的程式碼。</li>
  <li>依照專案授權條款使用及修改。</li>
  <li>回報錯誤並提出改善建議。</li>
  <li>參與功能開發與社群交流。</li>
</ul>
<p>開放原始碼不代表所有相關服務都免費。第三方服務、伺服器、網域及其他營運成本，仍可能需要由使用者自行負擔。</p>

<h2>開始使用 OUPOS</h2>
<p>如果您是第一次接觸 OUPOS，建議依照以下順序開始：</p>
<ol>
  <li><strong>選擇部署方式：</strong>若您具備基本能力，您可以 <a href="/article/installation">部署在自己的伺服器上</a>；想要輕鬆地開始使用OUPOS嗎？<a href="/article/pricing">不需要使用您的伺服器。</a></li>
  <li><strong>完成初始設定：</strong>設定商家資訊、商品、員工帳號及相關營運項目。</li>
  <li><strong>開始營業：</strong>完成基本設定後，即可開始使用 POS 進行日常銷售。</li>
</ol>

<h2>文件中心導覽</h2>
<p>本文件中心將持續整理 OUPOS 的操作方式、設定流程及常見問題，協助您更快熟悉系統。</p>
<ul>
  <li><strong>快速開始：</strong>從初始設定到完成第一次結帳。</li>
  <li><strong>POS 操作：</strong>了解商品選擇、結帳與訂單管理。</li>
  <li><strong>系統設定：</strong>管理商家資訊、員工及系統設定。</li>
  <li><strong>部署教學：</strong>了解自行部署所需的環境與操作步驟。</li>
  <li><strong>常見問題：</strong>查看使用過程中可能遇到的問題與解決方式。</li>
</ul>

<h2>與我們聯絡</h2>
<p>如果您在使用 OUPOS 時遇到問題，或有任何功能建議，歡迎透過官方管道與我們聯絡。</p>
<ul>
  <li>官方網站：<a href="https://oupos.app">oupos.app</a></li>
  <li>技術支援：<a href="mailto:support@oupos.app">support@oupos.app</a></li>
  <li>官方Line：<a href="https://line.me/R/ti/p/@183fjvbn">@183fjvbn</a></li>
</ul>

<blockquote>
  <p><strong>讓工具回歸工具，讓商家專注於自己的事業。</strong></p>
  <p>OUPOS 將持續以開放、自由與實用為核心，打造更適合商家的 POS 系統。</p>
</blockquote>
  `.trim(),
};

