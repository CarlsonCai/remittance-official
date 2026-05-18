# MARKUP_STYLE（AI 切版約束）

本文件約束 **AI 在此 repo 依設計稿切版** 時的 HTML 結構、版面、樣式用法。與 `CODING_STYLE.md`（邏輯與程式品質）搭配使用。

**技術棧**：Tailwind CSS v4、`src/styles/` 設計 token、`typo-*` 字型 utility、`layout-*` 版面 class。

---

## 1. 設計稿對齊原則（必須遵守）

- **優先使用專案既有 token**，禁止為了「像設計稿」而大量寫死 `text-[13px]`、`mt-[37px]` 等任意值。
- 設計稿若與 token 有落差：**先查** `src/styles/palette.css`、`layout-tokens.css`、`typography.css`；仍無對應時才用 Tailwind 任意值，並在 PR／說明中註記需否補 token。
- **Mobile First**：預設為小螢（≤1023）；再用 `tablet:`、`desktop:`、`wide:` 覆寫。
- 文案使用**繁體中文**；語意標籤正確（見 §6）。

---

## 2. RWD 斷點（必須遵守）

與 Figma Grid、`src/styles/theme.css` 一致。JSX 中**只使用命名前綴**，不要用自訂 `min-w-[1030px]` 取代斷點。

| 前綴 | 最小寬度 | 對應稿 |
|------|----------|--------|
| （無，預設） | &lt; 1024px | Small：4 欄，margin 20，gutter 16 |
| `tablet:` | 1024px | Medium：12 欄，margin 40，gutter 20 |
| `desktop:` | 1440px | Large：12 欄，margin 80，gutter 24 |
| `wide:` | 1560px | 超寬：主欄置中、左右留白加大 |

- 字型階層（`typo-h1` 等）在 `typography.css` 內已含 `desktop` 媒體查詢；**多數標題不必再包一層 `desktop:typo-h1`**，除非稿面要求在特定斷點換用不同 utility。
- `typo-*` 可疊加斷點前綴（例：`tablet:typo-body3-m`），見 `globals.css` 註解。

---

## 3. 版面結構（必須遵守）

### 3.1 三層模型

```
<section>          ← 滿版：背景色、文字色
  <SectionLayout>  ← 或手動 layout-shell + layout-container
    內容
  </SectionLayout>
</section>
```

| 層級 | 用途 | 用法 |
|------|------|------|
| 外層 `section` / `footer` | 滿版底色、圓角、全寬視覺 | `w-full` + `bg-*`；**不要**只把滿版背景加在 `layout-container` 上 |
| `layout-shell` | 左右 margin（隨斷點變 20 / 40 / 80） | 見 `layout-grid.css` |
| `layout-container` | 內容最大寬並置中 | max-width 隨斷點：390 → 944 → 1440 |

**`SectionLayout` 實作**（`src/components/layout/SectionLayout.tsx`）= `layout-shell` + `py-16 tablet:py-20` + `layout-container`，無額外版面邏輯。

### 3.2 何時使用（區塊 vs 元件）

| 對象 | 是否使用 | 說明 |
|------|----------|------|
| **大區塊**（首頁 `Home*`、內頁一個 `<section>`） | ✅ `SectionLayout` | 外層 `<section>` 負責滿版背景；內層 `SectionLayout` 對齊全站欄寬與區塊上下間距 |
| **整頁主內容**（404、`PlaceholderPage`） | ✅ 手寫 `layout-shell` + `layout-container` | 與 `SectionLayout` 同寬度規則；自行控制 `py-*`，不必強制 `SectionLayout` |
| **Header / Footer** | ⚠️ 特例 | 可有自訂結構（例 Footer 用 `max-w-[var(--layout-container-lg)]`）；概念上仍對齊同一 max-width |
| **小元件**（`FeatureCard`、按鈕、選單、`NavDropdown`） | ❌ 不要用 | 已位於父層 `layout-container` 內，再包會雙重 margin／錯誤縮排 |
| **`page.tsx`** | 通常不直接包 | 首頁由多個 section 元件各自包 `SectionLayout`；內頁單區則在 page 或區塊元件擇一處包即可 |

```
page.tsx
  └─ HomeHero（區塊元件）
       └─ <section class="bg-…">          ← 滿版背景
            └─ <SectionLayout>           ← 僅區塊級
                 └─ 標題、卡片…           ← 小元件不再包 layout-*
```

### 3.3 優先使用的元件／class

- **區塊級內容**：`<SectionLayout>`（見 §3.2）。
- **12 欄格線**：`layout-grid`（放在 `layout-container` **內**；欄數與 gutter 已依斷點設定）。
- **內部排版**：可用 Tailwind `grid` / `flex`，欄位跨度對齊 12 欄邏輯（例：`tablet:col-span-4`），間距優先使用 gutter 倍數（`gap-6`、`gap-8` 等），與稿一致即可。

### 3.4 禁止的版面做法

- 不要用 `max-w-screen-xl` 等**未在專案定義**的 container 取代 `layout-container`。
- 不要在每個區塊重複發明一套 `px-4 md:px-8 lg:px-20` margin；應走 `SectionLayout` / `layout-shell`。
- 不要把 Header/Footer 的特例 padding 複製到所有內容區（Header/Footer 可有獨立結構，但新 section 仍走 §3.1）。

---

## 4. 色彩與字型（必須遵守）

### 4.1 色彩

使用 `@theme` 已註冊的 Tailwind 色名，來源 `palette.css`：

- **主色**：`navy-*`（品牌深藍）、`sky-*`（輔助淺藍）
- **中性**：`gray-*`
- **語意**：`bg-background`、`text-foreground`（見 `semantic.css`）
- **特殊**：`logo-red` 等已存在 token

禁止：`bg-[#003375]`（除非過渡期且無 token）、隨意 `text-blue-500`（Tailwind 預設色盤未對齊品牌）。

### 4.2 字型

- 內文與標題使用 **`typo-*` utility**（定義於 `src/styles/typography.css`）。
- 標題對應：`typo-h1`～`typo-h4`；內文 `typo-body1`～`typo-body6`；副標 `typo-sub1-*`。
- 字重已含在 utility 內（`-b` bold、`-m` medium、`-r` regular 等）；**不要**再疊 `font-bold` 蓋掉設計字重，除非稿面明確要求覆寫。
- 文字顏色用 `text-navy-900`、`text-gray-600` 等 token，與區塊背景保持對比。

### 4.3 圓角與陰影

- 卡片圓角：優先 `rounded-xl`（對應 `--radius-card`）或稿面指定 class。
- 陰影：使用 theme 內 `shadow-s` / `shadow-l`（若已用於元件）；不任意 `shadow-[0_4px_20px_...]`。

---

## 5. 間距與尺寸（必須遵守）

- **區塊上下間距**：內容區優先依 `SectionLayout` 的 `py-16 tablet:py-20`；區塊內標題與內容常用 `mt-3`（副標）、`mt-10`（主內容區），與現有首頁區塊一致。
- **元件內距**：卡片等參考 `FeatureCard`（`p-6 tablet:p-8`）。
- **最大寬度**：長文/副標可用 `max-w-2xl` 等 Tailwind 標準尺度；全頁內容寬度仍受 `layout-container` 限制。
- **間距尺度**：優先 Tailwind spacing scale（`4`、`6`、`8`、`10`…），避免 `mt-[22px]`。
- **合併 class**：使用 `cn()`（`@/lib/utils`）。

### 5.1 Tailwind `class` 順序（必須遵守）

`className` 內的 utility **依 Tailwind 官方建議的可讀順序**排列（與 [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) 一致）。

**專案已設定**：`prettier.config.mjs` 啟用該插件，且 `tailwindFunctions: ["cn"]`——`cn("…", condition && "…")` 內的字串也會被排序。產碼後應可通過 `npm run format`。

**AI 手寫時建議群組順序**（由前到後；同組內依稿面微調）：

1. **版面定位**：`static` / `relative` / `absolute`、`inset-*`、`z-*`
2. **盒模型與顯示**：`box-*`、`block` / `flex` / `grid`、`hidden`、`overflow-*`
3. **Flex / Grid**：`flex-*`、`grid-*`、`col-*`、`row-*`、`gap-*`、`place-*`
4. **尺寸**：`w-*`、`h-*`、`min-*`、`max-*`、`aspect-*`
5. **間距**：`p-*`、`px-*`、`py-*`、`m-*`、`mt-*`…
6. **邊框與圓角**：`border-*`、`rounded-*`、`ring-*`
7. **背景**：`bg-*`
8. **文字**：`typo-*`、`text-*`、`font-*`（非 typo 時）、`leading-*`、`tracking-*`、`text-*` 對齊
9. **效果**：`shadow-*`、`opacity-*`、`outline-*`
10. **轉場與動畫**：`transition-*`、`duration-*`、`ease-*`
11. **互動與狀態**：`cursor-*`、`select-*`、`pointer-events-*`
12. **RWD 變體**：同一 utility 的 `tablet:` / `desktop:` / `wide:` 緊接在對應 base class **之後**（插件會處理；手寫時勿把斷點類散落各處）

```tsx
// ✅ 可讀順序示例
className={cn(
  "relative flex w-full flex-col gap-6 rounded-xl bg-background p-6 shadow-s desktop:shadow-l",
  "typo-body4 text-navy-900",
  "tablet:grid tablet:grid-cols-12 tablet:gap-8 tablet:p-8",
)}
```

- **禁止**：同一元素上隨意排列（如 `text-white bg-navy-900 flex p-4` 與 `flex p-4 bg-navy-900 text-white` 混用風格）；提交前以 format 結果為準。
- 自訂 class（`layout-container`、`typo-h2`）在插件排序中通常靠前；與 Tailwind utility 混用時仍跑 `npm run format`。

---

## 6. 語意化標籤、無障礙與 SEO（必須遵守）

### 6.1 語意化 HTML（結構）

優先使用語意標籤，**禁止**用一堆無語意的 `<motion.div>` / `<div>` 取代整頁結構（動效 wrapper 除外）。

| 用途 | 標籤 |
|------|------|
| 網站頁首導覽 | `<header>` + `<nav aria-label="…">` |
| 主內容 | `<main>`（站內 layout 每頁一個；見 `(site)/layout` + page） |
| 頁尾 | `<footer>` |
| 主題區塊 | `<section>` + `id` |
| 獨立內容卡／文章 | `<article>` |
| 標題 | `<h1>`～`<h6>`，**不跳級**（h2 下直接 h4） |
| 內文段落 | `<p>` |
| 列表 | `<ul>` / `<ol>` + `<li>` |
| 按鈕／連結 | `<button>` / `<Link>`（`<a>`）；勿用 `<motion.div onClick>` 當按鈕 |
| 強調 | `<strong>`、`<em>`（非僅靠粗體 class） |

- 每個主要區塊：`<section id="…" aria-labelledby="…-heading">` + 區塊標題 `h2`/`h3` 的 `id`。
- **全頁僅一個 `h1`**（首頁 hero 或內頁主標）；區塊標題從 `h2` 起。
- 頁面骨架：`(site)/layout` 已有 `SiteHeader` / `SiteFooter`；page 內用 `<main>` 包住主要內容（首頁 `page.tsx` 已用 `<main>`）。

### 6.2 無障礙（a11y）

- 裝飾性元素：`aria-hidden="true"`。
- 互動元件：可鍵盤聚焦、`aria-expanded` / `aria-controls`（選單、摺疊）。
- 圖片：`next/image` + 有意義 `alt`；純裝飾 `alt=""`。

### 6.3 SEO（Next.js Metadata + 內容）

**頁面級（App Router）**——每個 `page.tsx` 應有 `export const metadata`（或 `generateMetadata`）：

- `title`：具描述性（站內 template 會加「｜匯款官方網站」，見 root `layout.tsx`）。
- `description`：繁中、約 50～160 字，**勿**與 title 完全相同或只寫「佔位」上線。
- 內頁建議：`alternates.canonical`（路徑帶 **trailing slash**，與 `next.config` 一致）。
- 重要頁可補 `openGraph`（參考首頁 `src/app/(site)/page.tsx`）。

**HTML 與內容**：

- 根 `<html lang="zh-Hant">` 已於 `layout.tsx` 設定，勿改錯。
- 連結文字須**可讀**（避免僅「點此」「了解更多」重複堆疊；改「查看匯款方案」等）。
- 標題關鍵字自然出現在 `h1` / 前段 `p`，不堆砌。
- 圖片 `alt` 描述內容，有利理解與搜尋摘要。
- 結構化資料（JSON-LD）：若任務未要求，不自行加入；若加入須與可見內容一致。

**禁止**：

- 用 `<motion.div>` 或 `<div>` 取代 `<h1>`～`<h6>` 做「視覺標題」。
- 隱藏與畫面無關的關鍵字（off-screen text、與設計不符的 `display:none` 文案堆疊）。

---

## 7. 首頁區塊慣例（建置中頁面）

新增首頁 section 時，對齊既有 `Home*` 元件：

```tsx
<section
  id="section-id"
  aria-labelledby="section-id-heading"
  className="w-full bg-… text-…"
>
  <SectionLayout>
    <h2 id="section-id-heading" className="typo-h2 …">標題</h2>
    <p className="typo-body2 mt-3 max-w-2xl …">副標</p>
    {/* 內容 */}
  </SectionLayout>
</section>
```

- 區塊背景在 **`section` 上**設定（例：`bg-navy-600`、`bg-background`）。

---

## 8. 圖示、圖片、媒體

- 品牌圖：`@/assets/images/…` + `next/image`。
- SVG 圖示：優先 `src/components/icons/` 既有元件或 `src/assets/icons/`。
- 社群按鈕等已有切圖：沿用 `assets/images/social/`，勿改用外部 CDN 取代。
- 響應式圖：必要時用 `sizes`；靜態匯出專案仍須符合 `images.unoptimized` 設定。

---

## 9. 新增樣式的規則

| 情況 | 做法 |
|------|------|
| 單一元件、一次性版面 | Tailwind class 寫在 JSX |
| 重複 ≥3 次的相同 pattern | 考慮 `src/styles/*.css` 的 `@layer components` 或共用元件 |
| 新顏色／字級／斷點 | 擴充 `palette.css` / `typography.css` / `theme.css`，**不要**只在 JSX 堆任意值 |
| 禁止 | 在元件內寫 `<style jsx>`、隨意新增全域 CSS 檔（未經任務要求） |

---

## 10. 切版流程（AI 執行順序）

1. 確認區塊屬於首頁 section、內頁、Header/Footer 哪一類，選對外層結構（§3、§7）。
2. 從稿面取：**背景色、標題字級（typo-*）、欄數、斷點行為**。
3. 用 `SectionLayout` + `grid`/`flex` 搭骨架，再填文案與圖片佔位。
4. 加上語意標籤、`aria-*`、heading `id` 與 page `metadata`（§6）。
5. 檢查 class 順序（§5.1）、format；未使用任意色碼/字級；斷點正確；滿版背景在外層。

---

## AI 切版自檢（簡表）

- [ ] 大區塊用 `SectionLayout`（或整頁用手寫 shell+container）；小元件未重複包裹
- [ ] 滿版背景在 `section` 外層，不在 container  alone
- [ ] 色彩為 `navy-*` / `sky-*` / `gray-*` / 語意色
- [ ] 文字為 `typo-*`，無多餘 `font-*` 覆寫
- [ ] RWD 使用 `tablet:` / `desktop:` / `wide:`，Mobile First
- [ ] 使用 `header` / `main` / `section` / `article` / `nav` / `footer` 等語意標籤
- [ ] 全頁一個 `h1`；heading 不跳級；section 具 `id`、`aria-labelledby`
- [ ] 內頁 `metadata`（title、description、canonical）已填且非空泛佔位
- [ ] 連結與圖片 `alt` 文字對 SEO／螢幕閱讀器有意義
- [ ] Tailwind class 順序符合 §5.1（或已 `npm run format`）
- [ ] class 合併使用 `cn()`
- [ ] 無大量任意 `[px]` / `[#hex]`（除非已註記缺 token）

---

_其餘切版規範待補充。_
