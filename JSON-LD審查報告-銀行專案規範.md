# 銀行專案 JSON-LD 結構化資料審查報告規範

> **適用專案類型：** 銀行活動頁、產品頁、官網、金融服務頁面
> **最後更新：** 2026-03-27
> **審查標準：** Schema.org + Google Rich Results Guidelines + Google SEO 入門指南

---

## 📋 目錄

1. [審查流程](#審查流程)
2. [必備實體類型](#必備實體類型)
3. [銀行業特定規範](#銀行業特定規範)
4. [內容來源原則](#內容來源原則)
5. [Google SEO 符合性](#google-seo-符合性)
6. [上線前必要檢查](#上線前必要檢查)
7. [檢查清單](#檢查清單)
8. [常見錯誤](#常見錯誤)
9. [評分標準](#評分標準)
10. [驗證工具](#驗證工具)

---

## 🔍 審查流程

### Step 1: 初步檢查

- [ ] JSON-LD 位於 `<head>` 區塊
- [ ] 使用 `<script type="application/ld+json">`
- [ ] JSON 格式正確（無註解、無尾隨逗號）
- [ ] 使用 `@graph` 組織多個實體

### Step 2: 實體完整性檢查

- [ ] 所有必要屬性存在
- [ ] 使用正確的 `@type`
- [ ] URL 使用 HTTPS
- [ ] 日期格式符合 ISO 8601

### Step 3: 關聯性檢查

- [ ] 實體間使用 `@id` 正確關聯
- [ ] WebPage 關聯到正確的主要內容
- [ ] Organization 作為 publisher/organizer

### Step 4: 內容一致性檢查

- [ ] 結構化資料與頁面實際內容一致
- [ ] 日期、價格、名稱無衝突
- [ ] 圖片 URL 可訪問

---

## ✅ 必備實體類型

### 1️⃣ Organization（組織）- 必要

**適用場景：** 所有銀行專案
**優先級：** 🔴 P0 必要

**必要屬性：**

```json
{
  "@type": "Organization",
  "@id": "https://example.com/#organization",
  "name": "完整組織名稱",
  "url": "https://example.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://example.com/logo.svg",
    "width": 200,
    "height": 60
  }
}
```

**建議補充：**

- `alternateName`: 品牌別名、簡稱
- `description`: 組織簡介
- `contactPoint`: 客服資訊（電話、服務時間）
- `sameAs`: 社群媒體連結
- `address`: 實體地址（PostalAddress）
- `foundingDate`: 成立時間

**銀行業特定檢查：**

- ✅ 包含完整法定名稱（例：永豐商業銀行股份有限公司）
- ✅ 統一編號應在頁面但不一定在 JSON-LD
- ✅ 客服電話格式：`+886-2-xxxx-xxxx`

---

### 2️⃣ WebPage / WebSite（網頁）- 必要

**適用場景：** 所有頁面
**優先級：** 🔴 P0 必要

**必要屬性：**

```json
{
  "@type": "WebPage",
  "@id": "https://example.com/page/#webpage",
  "url": "https://example.com/page/",
  "name": "頁面標題",
  "description": "頁面描述",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://example.com/#website"
  },
  "about": {
    "@id": "https://example.com/page/#event"
  },
  "mainEntity": {
    "@id": "https://example.com/page/#faq"
  },
  "inLanguage": "zh-TW",
  "publisher": {
    "@id": "https://example.com/#organization"
  }
}
```

**關鍵檢查：**

- ✅ `about` 指向頁面主要內容（Event/Product/Service）
- ✅ `mainEntity` 指向 FAQ（如果有）
- ✅ `inLanguage` 與 `<html lang>` 一致

---

### 3️⃣ Event（活動）- 條件必要

**適用場景：** 行銷活動頁、促銷活動
**優先級：** 🟡 條件必要（活動頁必須）

**必要屬性：**

```json
{
  "@type": "Event",
  "@id": "https://example.com/event/#event",
  "name": "活動名稱",
  "description": "活動詳細說明",
  "image": ["https://example.com/event.jpg"],
  "startDate": "2026-04-20T00:00:00+08:00",
  "endDate": "2026-06-30T23:59:59+08:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://example.com/event/"
  },
  "organizer": {
    "@type": "Organization",
    "@id": "https://example.com/#organization"
  }
}
```

**銀行活動必須補充：**

- ✅ `performer`: 執行銀行（通常與 organizer 相同）
- ✅ `sponsor`: 合作品牌（如有）
- ✅ `isAccessibleForFree`: 是否免費參加
- ✅ `keywords`: 活動關鍵字陣列

**金融產品優惠/回饋說明：**

> ⚠️ **重要：** 金融產品不適合使用 `Offer` Schema，優惠與回饋內容應完整描述在 `description` 欄位中，並在 FAQ 章節補充詳細條件、限制與入帳方式。

**常見錯誤：**

- ❌ eventStatus 寫錯（應為完整 URL）
- ❌ 缺少活動詳細說明
- ❌ 優惠/回饋說明不完整（應在 description 詳述）
- ❌ 未在 FAQ 補充參加資格與限制條件

---

### 4️⃣ FAQPage（常見問題）- 強烈建議

**適用場景：** 有 FAQ 區塊的所有頁面
**優先級：** 🟠 強烈建議

**必要屬性：**

```json
{
  "@type": "FAQPage",
  "@id": "https://example.com/page/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "問題標題？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "完整答案內容。"
      }
    }
  ]
}
```

**銀行 FAQ 檢查項目：**

- ✅ 至少 5 個問答(若pm沒提供，也不要杜撰，code review時產文件給pm建議補齊五則)
- ✅ 涵蓋：活動時間、參加資格、回饋方式、入帳時間、注意事項
- ✅ 答案完整（不要只寫「請洽客服」）
- ✅ 時間與主活動一致
- ✅ 避免敏感資訊（身分證字號、帳號等範例）

---

### 5️⃣ BreadcrumbList（麵包屑）- 必要

**適用場景：** 非首頁的所有頁面**優先級：** 🔴 P0 必要

> ⚠️ **重要性：** BreadcrumbList 能幫助 Google 理解網站結構，提升搜尋結果中的麵包屑導航顯示，對 SEO 與使用者體驗都有重要影響，因此列為必要項目。

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://example.com/event/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首頁",
      "item": "https://dawho.tw/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "大戶最熱門",
      "item": "https://dawho.tw/hot/new/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "活動名稱",
      "item": "https://example.com/event/"
    }
  ]
}
```

**關鍵檢查：**

- ✅ 每個項目必須有 `position`、`name`、`item` 屬性
- ✅ position 從 1 開始連續編號
- ✅ 最後一項應為當前頁面
- ✅ URL 必須完整且可訪問

---

### 6️⃣ FinancialProduct（金融產品）- 條件必要

**適用場景：** 產品頁（信用卡、貸款、帳戶）
**優先級：** 🟡 產品頁必要

```json
{
  "@type": "FinancialProduct",
  "name": "產品名稱",
  "description": "產品說明",
  "url": "https://example.com/product/",
  "provider": {
    "@id": "https://example.com/#organization"
  },
  "feesAndCommissionsSpecification": "費用說明連結",
  "interestRate": {
    "@type": "QuantitativeValue",
    "value": "5-15",
    "unitText": "PERCENT"
  }
}
```

---

## 🏦 銀行業特定規範

### 法規合規檢查

#### 1. 資訊揭露義務

- ✅ 活動期間明確標示
- ✅ 參加資格清楚說明
- ✅ 回饋/優惠限制條件完整
- ✅ 入帳時間具體描述
- ✅ 免責聲明/注意事項

#### 2. 金額表示規範

- ✅ 統一使用「新臺幣」或「元」
- ✅ 金額數字正確無誤
- ✅ 幣別標示：`priceCurrency: "TWD"`
- ✅ 避免誤導性標示（例：「最高可得」要說明條件）

#### 3. 時間標示規範

- ✅ 時區統一：台灣使用 `+08:00`
- ✅ 格式統一：ISO 8601
- ✅ 起迄時間完整（含時分秒）
- ✅ 文案與 JSON-LD 一致

#### 4. 客服資訊

必須包含以下項目：

- ✅ 24小時客服專線
- ✅ 服務範圍（地區限制）
- ✅ 語言支援
- ✅ 聯絡方式（電話格式標準）

---

## ✍️ 內容來源原則

> 此節為強制規範。所有進入 JSON-LD 的文字內容，必須可溯源至行銷頁面本身或 PM 正式提供的素材，**嚴禁杜撰、過度美化或自行補充頁面上不存在的資訊。**

### 🔴 強制要求：來源真實性

**所有 JSON-LD 內容必須直接來自以下來源，不得自行創作或美化：**

1. **頁面實際可見內容**（HTML body 中的文字、標題、段落）
2. **`<meta name="title">`** 或 **`<title>`** 標籤內容
3. **`<meta name="description">`** 標籤內容
4. **PM 正式核發的文案素材**（需有書面記錄或 email 確認）

❌ **嚴禁行為：**

- 自行改寫或「優化」PM 提供的文案
- 從其他頁面、其他活動或想像中補充內容
- 為了「讓 JSON-LD 更完整」而杜撰資訊
- 過度美化或誇大頁面上的實際描述

### 合法來源（只能使用以下來源）

| 欄位                           | 合法來源                                                                                                  | 檢查方式                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `name`（活動名稱、產品名稱） | 頁面 `<title>`、`<meta name="title">`、主視覺大標、PM 提供之 meta title                               | 檢視原始碼 `<head>` 區塊或頁面主標       |
| `description`                | 頁面實際文案段落、`<meta name="description">`、PM 正式提供之 meta description（金融優惠應完整描述於此） | 檢視原始碼 meta 標籤或頁面實際內容文字     |
| `startDate` / `endDate`    | 頁面明確標示之活動期間文字                                                                                | 頁面上必須有「活動期間」相關文字說明       |
| `FAQ` 問答                   | 頁面 FAQ 區塊原始文字（一字不改）                                                                         | 對照頁面 FAQ 文字內容                      |
| `image`                      | 頁面已載入的圖片 URL（可從原始碼或 Network 取得）                                                         | 檢視原始碼 `<img>` 標籤或 CSS background |
| `Organization.name`          | 法定公司名稱（官方網站 footer 或 PM 確認）                                                                | 官網頁尾版權宣告或營業登記資料             |

### 禁止行為

- ❌ 自行添加頁面上沒有的優惠數字或條件
- ❌ 以「更好聽」的措辭替換 PM 提供的原始描述
- ❌ 從其他活動或其他頁面複製文案填入
- ❌ 為了「讓 FAQ 更完整」而虛構問答
- ❌ 金額、日期、資格條件任何一項與頁面不符

### 審查確認步驟

1. **開啟頁面原始碼**（右鍵 → 檢視網頁原始碼），確認 `<head>` 區塊中的：

   - `<title>` 或 `<meta name="title">` 內容
   - `<meta name="description">` 內容
2. **對照頁面實際內容**，逐一核對 JSON-LD 中每個文字欄位：

   - 活動名稱是否與頁面主標一致
   - 活動說明是否來自頁面實際文案
   - FAQ 問答是否一字不差
3. **確認 meta 標籤一致性**：

   - `WebPage.name` 必須與 `<title>` 或 `<meta name="title">` **完全一致**
   - `WebPage.description` 必須與 `<meta name="description">` **完全一致**（或為其縮短版，不可擴充語意）
   - `Event.description` 可基於頁面文案整合，但所有資訊必須來自頁面實際內容
4. **日期時間驗證**：

   - 以頁面標示為準，JSON-LD 只做格式轉換（ISO 8601）
   - 不可自行推算或假設未明確標示的日期
5. **內容缺漏處理**：

   - 若頁面內容模糊或缺漏，**應向 PM 確認，而非自行補全**
   - 若 PM 無法提供，則該欄位留空或使用最基本的描述

---

## 🔍 Google SEO 符合性

> 詳細說明請參閱 [Google-SEO入門規範.md](Google-SEO入門規範.md)。本節為快速對照清單。

### 頁面基礎 SEO 檢查

- [ ] `<title>` 唯一、精確描述頁面內容，長度建議 **50–60 字元**以內
- [ ] `<meta name="description">` 存在且與 `WebPage.description` 一致，建議 **120–160 字元**
- [ ] `<html lang="zh-TW">` 與 `WebPage.inLanguage: "zh-TW"` 一致
- [ ] 頁面有唯一正規 URL（`<link rel="canonical">`）
- [ ] 圖片皆有有意義的 `alt` 屬性
- [ ] 標題層級（`h1`→`h2`→`h3`）語意正確，每頁僅一個 `<h1>`
- [ ] 頁面在 Mobile 裝置可正常使用（RWD）

### 結構化資料符合 Google 政策

- [ ] 不標記使用者看不見的隱藏內容
- [ ] 不在與頁面無關的類型上套用標記（例：活動頁不得使用 `Product` schema 誤導爬蟲）
- [ ] 結構化資料描述的內容確實存在於頁面可見區域
- [ ] 通過 [Google Rich Results Test](https://search.google.com/test/rich-results) 零錯誤
- [ ] Schema 類型選擇符合頁面實際推廣內容（活動頁 → `Event`；產品頁 → `FinancialProduct`）

### 內容品質（Google 有益內容)

- [ ] 頁面主要為使用者撰寫，而非為搜尋引擎優化
- [ ] 所有文案來自 PM 核發素材，內容真實可信
- [ ] 無重複或大量複製的樣板文字

---

## 🚀 上線前必要檢查

> 此節為上線 **Gate 條件**，全部通過才可發布。

### 一、Console 錯誤與警告檢查

**操作方式：** 開啟 Chrome DevTools → Console 分頁，依序執行以下步驟：

1. **清除 Console** 後重新整理頁面（硬重整：`Ctrl+Shift+R` / `Cmd+Shift+R`）
2. 完整捲動頁面，觸發所有懶加載與動畫
3. 點擊頁面上所有互動元素（按鈕、連結、展開項目）

**合格標準：**

| 類型                                    | 要求                                                              |
| --------------------------------------- | ----------------------------------------------------------------- |
| 🔴`Error`                             | **必須為零** — 任何錯誤均需修正後才可上線                  |
| 🟡`Warning`                           | 來自第三方 lib 的已知警告可接受，需列入記錄；自撰程式碼不得有警告 |
| ℹ️`console.log` / `console.debug` | 開發用輸出**必須全部移除**，不可留在正式環境                |

**常見應修正項目：**

- 找不到的 DOM 元素（`Cannot read properties of null`）
- 未攔截的 Promise rejection
- CORS 或資源載入失敗
- `console.log` 留在正式程式碼中
- 未定義變數或函式

### 二、失效連結檢查

**需檢查的連結類型：**

- [ ] 頁面上所有 `<a href>` 連結（包含頁腳、導覽列）
- [ ] 所有 CTA 按鈕的目標 URL
- [ ] 圖片來源（`<img src>`、CSS `background-image`）
- [ ] JSON-LD 中的 `url`、`image`、`logo` 欄位
- [ ] `<link rel="canonical">` 指向的 URL
- [ ] `<meta property="og:image">` 圖片 URL

**操作方式：**

1. **DevTools Network 分頁**：過濾 `4xx` / `5xx` 狀態碼，確認無紅色項目
2. 手動點擊所有對外連結，確認開啟正確目標頁面
3. 確認連結目標頁面已上線（非 404、非轉址到錯誤頁）

**合格標準：**

- ❌ 任何 404、403、500 回應均需修正
- ❌ 連到錯誤環境（staging URL 殘留在正式稿）需修正
- ⚠️ 301 永久轉址需確認目標正確；302 暫時轉址需說明原因

### 三、上線前 Checklist 總覽

- [ ] Console 無 Error
- [ ] 自撰程式碼無 Warning
- [ ] 所有 `console.log` / `console.debug` 已從正式環境移除
- [ ] 頁面所有連結可正常訪問（HTTP 200）
- [ ] 圖片、字型、CSS、JS 資源全部成功載入
- [ ] JSON-LD 中的 URL 全部可訪問
- [ ] 通過 Google Rich Results Test
- [ ] 未殘留 staging / localhost URL

---

## 📝 完整檢查清單

### A. 語法與格式 (10分)

- [ ] JSON 語法正確（無錯誤、無警告）
- [ ] 無 JavaScript 註解（`//` 或 `/* */`）
- [ ] 無尾隨逗號
- [ ] 字串正確轉義
- [ ] 縮排一致（2 或 4 空格）

### B. 結構完整性 (20分)

- [ ] 使用 `@context` 和 `@graph`
- [ ] 每個實體有唯一 `@id`
- [ ] 實體間正確使用 `@id` 參照
- [ ] 必要屬性完整
- [ ] 屬性值類型正確

### C. Organization (10分)

- [ ] 包含法定全名
- [ ] Logo 圖片可訪問
- [ ] 客服資訊完整
- [ ] 社群連結有效
- [ ] alternateName 包含品牌簡稱

### D. WebPage (10分)

- [ ] URL 與實際頁面一致
- [ ] 標題與 `<title>` 一致
- [ ] 描述與 meta description 一致
- [ ] 正確關聯到主要內容
- [ ] 正確關聯到 FAQ（如有）

### E. BreadcrumbList (10分)

- [ ] 非首頁必須包含麵包屑
- [ ] position 從 1 開始連續編號
- [ ] 每個項目包含 name 和 item
- [ ] 最後一項為當前頁面
- [ ] 所有 URL 可訪問
- [ ] 層級結構正確反映網站架構

### F. Event（活動頁適用）(20分)

- [ ] 活動名稱清楚
- [ ] 描述完整（包含參加方式）
- [ ] 日期時間正確
- [ ] eventStatus 正確
- [ ] location 適當（線上/線下）
- [ ] organizer 關聯正確
- [ ] performer 已補充
- [ ] description 包含完整優惠/回饋說明
- [ ] keywords 適當

### G. FAQPage (10分)

- [ ] 至少 5 個問答
- [ ] 問題涵蓋關鍵資訊
- [ ] 答案完整實用
- [ ] 時間資訊一致
- [ ] 無敏感資訊洩漏
- [ ] 包含完整優惠條款說明（資格、限制、入帳方式）

### H. 內容一致性 (10分)

- [ ] 結構化資料與頁面內容一致
- [ ] 日期無衝突
- [ ] 金額無衝突
- [ ] 名稱無衝突
- [ ] 圖片 URL 有效

### I. 內容來源合規 (額外必要，不計分但為 Gate)

- [ ] `name` 來源可追溯至 meta title 或頁面主標
- [ ] `description` 來源可追溯至 meta description 或頁面文案
- [ ] 未出現頁面上不存在的優惠數字或條件
- [ ] FAQ 問答均來自頁面實際內容
- [ ] 所有 URL（image、url 欄位）均可正常訪問（HTTP 200）

### J. 上線前技術檢查 (額外必要，不計分但為 Gate)

- [ ] Console 無任何 Error
- [ ] 自撰程式碼無 Warning
- [ ] `console.log` / `console.debug` 已從正式環境移除
- [ ] 頁面所有連結 HTTP 狀態正常（無 4xx / 5xx）
- [ ] 無殘留 staging 或 localhost URL

---

## ❌ 常見錯誤

### 1. JSON 語法錯誤

**錯誤：** 包含註解

```json
"price": "-300",  // 負價格表示回饋  ❌
```

**正確：**

```json
"price": "-300"
```

---

### 2. 日期格式錯誤

**錯誤：**

```json
"startDate": "2026-04-20",  ❌ 缺少時間與時區
"startDate": "2026/04/20 00:00:00"  ❌ 格式錯誤
```

**正確：**

```json
"startDate": "2026-04-01T00:00:00+08:00"  ✅
```

---

### 3. WebPage 缺少關聯

**錯誤：**

```json
{
  "@type": "WebPage",
  "about": {
    "@id": "https://example.com/event/#event"
  }
  // ❌ 缺少 mainEntity 指向 FAQ
}
```

**正確：**

```json
{
  "@type": "WebPage",
  "about": {
    "@id": "https://example.com/event/#event"
  },
  "mainEntity": {
    "@id": "https://example.com/event/#faq"
  }
}
```

---

### 4. Event 缺少 performer

**錯誤：**

```json
{
  "@type": "Event",
  "organizer": {
    "@id": "https://example.com/#organization"
  }
  // ❌ 缺少 performer
}
```

**正確：**

```json
{
  "@type": "Event",
  "organizer": {
    "@id": "https://example.com/#organization"
  },
  "performer": {
    "@type": "Organization",
    "name": "執行單位名稱",
    "url": "https://example.com/"
  }
}
```

---

### 5. Event description 優惠說明不完整

**錯誤：**

```json
{
  "@type": "Event",
  "description": "春季優惠活動"  ❌ 過於簡略
}
```

**正確：**

```json
{
  "@type": "Event",
  "description": "春季優惠活動：持指定信用卡於活動期間消費滿額，即可享現金回饋最高300元。詳細參加資格、回饋條件與入帳方式請參閱活動辦法。"  ✅
}
```

---

### 6. BreadcrumbList position 不連續

**錯誤：**

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首頁",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 3,  ❌ 跳號
      "name": "活動名稱",
      "item": "https://example.com/event/"
    }
  ]
}
```

**正確：**

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "首頁",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,  ✅ 連續編號
      "name": "活動名稱",
      "item": "https://example.com/event/"
    }
  ]
}
```

---

### 7. FAQ 時間不一致

**錯誤：**

```json
// Event 中
"startDate": "2026-04-20T00:00:00+08:00",

// FAQ 中
"text": "活動期間（2026年1月1日至2026年6月30日）"  ❌ 不一致
```

**正確：** 統一時間描述

---

## 📊 評分標準

### 總分：100 分

| 等級 | 分數   | 狀態        | 說明                     |
| ---- | ------ | ----------- | ------------------------ |
| S    | 95-100 | ✨ 優秀     | 完全符合規範，無任何問題 |
| A    | 85-94  | ✅ 良好     | 符合規範，僅有建議項目   |
| B    | 70-84  | ⚠️ 需改進 | 核心功能正常，有次要問題 |
| C    | 60-69  | 🔴 不及格   | 有影響功能的錯誤         |
| F    | <60    | ❌ 嚴重錯誤 | 無法通過驗證或有重大遺漏 |

### 各項目權重

| 項目           | 權重 | 說明                                 |
| -------------- | ---- | ------------------------------------ |
| 語法與格式     | 10%  | JSON 語法正確性                      |
| 結構完整性     | 15%  | Schema.org 結構正確                  |
| Organization   | 10%  | 組織資訊完整度                       |
| WebPage        | 10%  | 頁面標記正確性                       |
| BreadcrumbList | 10%  | 麵包屑導覽完整度                     |
| Event/Product  | 25%  | 主要內容標記質量（含優惠說明完整度） |
| FAQPage        | 10%  | FAQ 內容質量                         |
| 內容一致性     | 10%  | 與頁面實際內容一致性                 |

---

## 🔧 驗證工具

### 1. Google Rich Results Test ⭐ 推薦

- **網址：** https://search.google.com/test/rich-results
- **用途：** 驗證 Google 是否能正確識別結構化資料
- **重點檢查：** Event, FAQPage, BreadcrumbList

### 2. Schema.org Validator

- **網址：** https://validator.schema.org/
- **用途：** 驗證 Schema.org 語法正確性
- **重點檢查：** 實體類型、屬性完整性

### 3. JSON-LD Playground

- **網址：** https://json-ld.org/playground/
- **用途：** 視覺化檢視 JSON-LD 結構
- **重點檢查：** 實體關聯、圖形結構

### 4. Google Search Console（上線後）

- **位置：** 增強功能 → 結構化資料
- **用途：** 監控實際索引狀態
- **重點檢查：** 錯誤、警告、有效項目數

---

## 📚 參考資源

### Schema.org 官方文檔

- Event: https://schema.org/Event
- Organization: https://schema.org/Organization
- FAQPage: https://schema.org/FAQPage
- FinancialProduct: https://schema.org/FinancialProduct
- Offer: https://schema.org/Offer

### Google 指南

- Structured Data Guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Event Rich Results: https://developers.google.com/search/docs/appearance/structured-data/event
- FAQ Rich Results: https://developers.google.com/search/docs/appearance/structured-data/faqpage

---

## 📝 審查報告範本

```markdown
# 專案名稱 - JSON-LD 審查報告

**審查日期：** YYYY-MM-DD  
**審查人員：** [姓名]  
**專案 URL：** https://example.com/event/

---

## 總體評分

| 項目 | 得分 | 權重 | 加權分數 |
|------|------|------|----------|
| 語法與格式 | 95 | 10% | 9.5 |
| 結構完整性 | 90 | 15% | 13.5 |
| Organization | 90 | 10% | 9.0 |
| WebPage | 95 | 10% | 9.5 |
| BreadcrumbList | 90 | 10% | 9.0 |
| Event/Product | 85 | 25% | 21.25 |
| FAQPage | 90 | 10% | 9.0 |
| 內容一致性 | 95 | 10% | 9.5 |
| **總分** | | | **90.25** |
| **等級** | | | **A - 良好** |

---

## 發現問題

### 🔴 高優先（必須修正）
無

### 🟡 中優先（建議修正）
1. Event 缺少 performer 屬性
2. Event description 優惠說明可以更詳細

### 🟢 低優先（可選）
1. 建議補充 Organization.address

---

## 修正建議

[詳細建議內容]

---

## 驗證結果

- ✅ Google Rich Results Test: PASS
- ✅ Schema.org Validator: NO ERRORS
- ⚠️ Minor warnings: 2 items (non-blocking)

---

## 結論

[總結與建議]
```

---

## 結語

遵循此規範可確保：

- ✅ Google 正確識別內容
- ✅ SEO 最佳化
- ✅ 符合銀行業合規要求
- ✅ 提升搜尋結果呈現
- ✅ 增強使用者體驗

**最後提醒：** 結構化資料應與頁面實際內容完全一致，切勿誇大或誤導。

---

**版本歷史：**

- v1.1 (2026-03-27): 移除 Offers Schema（金融產品不適用），將 BreadcrumbList 設為必要項
- v1.0 (2026-03-26): 初版發布，基於敦煌案審查經驗
