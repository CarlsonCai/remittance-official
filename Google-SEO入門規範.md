# Google 搜尋引擎最佳化（SEO）入門規範

> **適用專案類型：** 行銷活動頁、產品頁、官網  
> **最後更新：** 2026-03-26  
> **來源：** [Google 搜尋引擎最佳化 (SEO) 入門指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

---

## 📋 目錄

1. [基本原則](#基本原則)
2. [幫助 Google 找到您的網頁](#幫助-google-找到您的網頁)
3. [頁面標題與描述](#頁面標題與描述)
4. [結構化資料](#結構化資料)
5. [內容品質](#內容品質)
6. [圖片最佳化](#圖片最佳化)
7. [連結管理](#連結管理)
8. [行動裝置相容性](#行動裝置相容性)
9. [頁面速度](#頁面速度)
10. [快速檢查清單](#快速檢查清單)

---

## 🎯 基本原則

Google 的核心標準只有一條：

> **為使用者撰寫，而不是為搜尋引擎撰寫。**

所有 SEO 設定的目的是讓 Google「讀懂」頁面，進而讓真正的使用者找到它。任何試圖欺騙或操縱搜尋排名的技巧（隱藏文字、關鍵字堆砌、誤導性結構化資料）都違反 [Google 垃圾政策](https://developers.google.com/search/docs/essentials/spam-policies)，可能導致降權或移除索引。

---

## 🔍 幫助 Google 找到您的網頁

### Canonical URL

每個頁面必須在 `<head>` 宣告正規 URL，避免重複內容問題：

```html
<link rel="canonical" href="https://example.com/event/" />
```

**規則：**
- 必須與頁面實際 URL 一致
- 使用 HTTPS
- 不含不必要的 Query String（除非為確認用途）
- 與 JSON-LD `WebPage.url` 保持一致

### Sitemap

活動頁上線時，確認主網站的 sitemap.xml 已納入該頁面 URL，或 robots.txt 未封鎖爬取。

---

## 📝 頁面標題與描述

### `<title>` 標籤

```html
<title>活動名稱 | 銀行品牌名稱</title>
```

**規範：**

| 項目 | 規定 |
|------|------|
| 長度 | **50–60 字元**（中文約 25–30 字）為佳，超出會被截斷 |
| 唯一性 | 每個頁面必須**不重複** |
| 內容 | 精確描述頁面主題，不堆砌關鍵字 |
| 來源 | **必須來自 PM 核發的 meta title**，不可自行發想 |
| 格式 | 頁面主題在前，品牌名稱在後（例：`活動名稱 \| 永豐銀行`） |

**禁止：**
- ❌ 所有頁面使用同一個 title
- ❌ 過長的標題（填塞關鍵字）
- ❌ 與 JSON-LD `WebPage.name` 不一致

### `<meta name="description">`

```html
<meta name="description" content="活動詳細說明，吸引使用者點擊，120–160 字元。" />
```

**規範：**

| 項目 | 規定 |
|------|------|
| 長度 | **120–160 字元**（中文約 60–80 字）為佳 |
| 唯一性 | 每個頁面必須**不重複** |
| 內容 | 正確呈現頁面內容讓使用者決定是否點擊；不可過度承諾 |
| 來源 | **必須來自 PM 核發的 meta description**，不可自行發想 |

**重要：** meta description 不直接影響排名，但影響點閱率（CTR）。Google 有時會自行從頁面內容截取，如果 description 不夠好的話。

---

## 🔖 結構化資料

> 詳細規範請參閱 [JSON-LD審查報告-銀行專案規範.md](JSON-LD審查報告-銀行專案規範.md)。本節僅列出 Google 政策層面的核心要求。

### Google 結構化資料政策重點

1. **內容必須在頁面上實際可見**  
   結構化資料描述的內容，使用者在頁面上必須看得到。不可標記頁面上不存在的資訊。

2. **使用與內容相關的 schema 類型**  
   - 活動行銷頁 → `Event`
   - 金融產品頁 → `FinancialProduct`
   - FAQ 區塊 → `FAQPage`
   - 不可套用與頁面內容不符的類型

3. **不得以結構化資料欺騙使用者或 Google**  
   - 禁止誤導性的 `Offer`（誇大回饋、隱藏條件）
   - 禁止虛假的 FAQ（虛構問答）
   - 禁止標記使用者看不見的隱藏內容

4. **驗證工具**  
   - [Rich Results Test](https://search.google.com/test/rich-results) — 上線前必跑，零錯誤才可上線
   - [Schema.org Validator](https://validator.schema.org/) — 語法正確性驗證

---

## ✍️ 內容品質

### E-E-A-T 原則（Experience, Expertise, Authoritativeness, Trustworthiness）

Google 評估內容品質時考量的框架，對金融類內容（Your Money or Your Life, YMYL）要求特別嚴格：

| 指標 | 在銀行行銷頁的體現 |
|------|------------------|
| **Experience** | 活動說明真實反映產品實際體驗與限制 |
| **Expertise** | 金融資訊正確（費率、資格條件、入帳時間） |
| **Authoritativeness** | 來源為合法金融機構，具聯絡資訊 |
| **Trustworthiness** | 無誤導性文案，注意事項完整揭露 |

### 內容規範

- ✅ 以使用者需求為中心（能參加嗎？怎麼參加？得到什麼？）
- ✅ 文案真實、不誇大（「最高可得」須說明達成條件）
- ✅ 所有數字、日期、資格條件皆來自 PM 核發素材
- ❌ 禁止關鍵字堆砌（「信用卡 現金回饋 信用卡優惠 最好信用卡…」）
- ❌ 禁止重複複製貼上相同段落製造字數

---

## 🖼️ 圖片最佳化

### alt 屬性

每張 `<img>` 都必須有 `alt`，幫助 Google 理解圖片內容：

```html
<!-- 好的寫法 -->
<img src="event-banner.jpg" alt="2026 永豐銀行刷卡回饋活動 Banner" />

<!-- 禁止：空 alt（裝飾性圖片例外，應明確留空） -->
<img src="event-banner.jpg" alt="圖片" />   <!-- ❌ 無意義 -->
<img src="divider.png" />                    <!-- ❌ 缺少 alt -->
<img src="divider.png" alt="" />             <!-- ✅ 裝飾性圖片用空字串 -->
```

**規範：**
- 內容圖片（KV、活動說明圖）：提供有意義的描述
- 裝飾性圖片（分隔線、背景）：`alt=""` 明確標示為空
- 圖示（icon）：若僅為視覺輔助，`alt=""` 或搭配 `aria-hidden="true"`

### 圖片格式建議

- 優先使用 **WebP**（Chrome、Safari 均支援，壓縮率高）
- 大型 Hero/KV 圖：設定 `loading="eager"`；其他圖片：`loading="lazy"`
- 提供 `width` 和 `height` 屬性避免 CLS（版面累積偏移）

---

## 🔗 連結管理

### 內部連結

- 連結文字（anchor text）應具描述性，讓使用者知道目標是什麼
  - ✅ `<a href="/event/">參加 2026 刷卡回饋活動</a>`
  - ❌ `<a href="/event/">點此</a>`、`<a href="/event/">了解更多</a>`

### 外部連結

- 連結至可信任的外部資源時，建議加 `rel="noopener noreferrer"`（安全性考量）
- 確認外部目標頁面可正常訪問

### 失效連結檢查（上線前必做）

參見「[上線前必要檢查 — 失效連結](JSON-LD審查報告-銀行專案規範.md#二失效連結檢查)」。

---

## 📱 行動裝置相容性

Google 採用 **Mobile-first indexing**，以行動版頁面為主要索引依據。

### 必要設定

```html
<!-- viewport meta tag，必須存在 -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 檢查項目

- [ ] 全頁面在 Chrome DevTools 行動裝置模擬器（375px 寬）下正常顯示
- [ ] 無橫向捲軸
- [ ] 按鈕/連結可輕易點擊（建議最小觸控區域 48×48px）
- [ ] 文字不需縮放即可閱讀（建議本文字體 ≥ 16px）
- [ ] [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)：通過

---

## ⚡ 頁面速度

Google 將 **Core Web Vitals** 納入排名訊號：

| 指標 | 目標值 | 說明 |
|------|--------|------|
| **LCP**（最大內容繪製） | ≤ 2.5 秒 | 頁面主要內容載入速度 |
| **INP**（互動至下一次繪製） | ≤ 200 毫秒 | 使用者互動回應速度 |
| **CLS**（累積版面配置偏移） | ≤ 0.1 | 視覺穩定性，避免元素跳動 |

### 常見優化方向（銀行行銷頁適用）

- Hero 圖（KV）使用 WebP，並設定明確的 `width`/`height` 防止 CLS
- 非首屏圖片加 `loading="lazy"`
- CSS / JS 資源壓縮
- 使用 [PageSpeed Insights](https://pagespeed.web.dev/) 確認分數

---

## ✅ 快速檢查清單

### 上線前必跑（每個頁面）

#### HTML Head 基本
- [ ] `<title>` 存在，內容來自 PM meta title，長度 50–60 字元
- [ ] `<meta name="description">` 存在，內容來自 PM meta description，長度 120–160 字元
- [ ] `<link rel="canonical">` 指向正確 HTTPS URL
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] `<html lang="zh-TW">` 正確設定

#### 內容品質
- [ ] 頁面 `<h1>` 唯一且描述主題
- [ ] 標題層級（h1→h2→h3）語義正確，無跳級
- [ ] 每張內容圖片有有意義的 `alt`
- [ ] 裝飾性圖片 `alt=""` 明確標空

#### 結構化資料
- [ ] JSON-LD 通過 Google Rich Results Test（零錯誤）
- [ ] 結構化資料內容來源可追溯至頁面或 PM 素材

#### 技術品質
- [ ] Console 無 Error
- [ ] 自撰程式碼無 Warning
- [ ] 所有 `console.log` / `console.debug` 已從正式環境移除
- [ ] 所有頁面連結 HTTP 200（無 4xx、5xx）
- [ ] 無殘留 staging / localhost URL
- [ ] 行動裝置顯示正常（375px 模擬）

---

## 📚 官方參考資源

| 資源 | 連結 |
|------|------|
| Google SEO 入門指南 | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Google 結構化資料政策 | https://developers.google.com/search/docs/appearance/structured-data/sd-policies |
| Rich Results Test | https://search.google.com/test/rich-results |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly |
| Google Search Console | https://search.google.com/search-console |
| Core Web Vitals | https://developers.google.com/search/docs/appearance/core-web-vitals |
