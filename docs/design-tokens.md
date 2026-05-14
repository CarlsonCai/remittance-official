# 設計 Token 參考（Remittance Official）

本文件整理專案如何「切出」視覺風格：從 **原始色票／數值** 到 **語意色與 Tailwind**，以及 **版型與字型工具類** 的對應關係。實際數值以程式為準；修改請改對應的 CSS 檔。

---

## 1. 風格從哪裡來（載入順序）

全域樣式入口：`src/app/globals.css`，依序引入：

| 順序 | 檔案 | 角色 |
|------|------|------|
| 1 | `src/styles/palette.css` | **Primitive**：色票、字重、字型尺寸／行高／字距、陰影來源 |
| 2 | `src/styles/layout-tokens.css` | **Layout primitive**：欄數、 gutter、 margin、 container 寬、斷點數值（px） |
| 3 | `src/styles/semantic.css` | **Semantic**：頁面底色 `--background`、文字色 `--foreground` |
| 4 | `src/styles/theme.css` | **Tailwind `@theme inline`**：把 primitive 映射成 `bg-sky-500`、`tablet:` 斷點等 |
| 5 | `tailwindcss` | 框架 |
| 6 | `home-scaffold.css` | 開發用區塊外框（非正式 design token） |
| 7 | `typography.css` | **字型階層**：`@utility typo-*` |
| 8 | `layout-grid.css` | **版型元件**：`.layout-shell`、`.layout-container`、`.layout-grid` |

**切風格時建議**：改品牌色 → 先動 `palette.css`；改語意（例如深色模式預留）→ `semantic.css`；要讓 Tailwind class 跟著變 → 檢查 `theme.css` 是否仍指向正確的 `var(--…)`。

---

## 2. 字型（Font stack）

- **英文／數字主體**：`next/font` 載入的 **Manrope**，CSS 變數 `--font-manrope`（見 `src/app/layout.tsx`）。
- **Fallback**：`"Noto Sans TC", "Helvetica Neue", Helvetica, Arial, sans-serif`（定義在 `theme.css` 的 `--font-sans`）。
- **等寬**：`--font-mono`（系統 monospace 堆疊）。

---

## 3. 色彩 Primitive（`palette.css` → `:root`）

### 色階命名

| Token 前綴 | 用途概覽 |
|------------|----------|
| `--sky-*` | 淺藍系（50–900） |
| `--navy-*` | 深藍／品牌藍系（50–900） |
| `--gray-*` | 中性灰（100–900） |
| `--black` / `--white` | 純黑／純白 |
| `--logo-red` | 標誌紅 `#d03238` |

### Tailwind 對應（`theme.css`）

Primitive 會再映射為 Tailwind 顏色，例如：`bg-sky-500`、`text-navy-900`、`border-gray-300`、`text-logo-red`。

語意色（目前）：

| CSS 變數 | 值 |
|----------|---|
| `--background` | `var(--white)` |
| `--foreground` | `var(--navy-900)` |

Tailwind：`--color-background`、`--color-foreground`（與 `bg-background`、`text-foreground` 等用法對齊專案設定）。

---

## 4. 字階與字重（`palette.css`）

### 字重

| Token | 數值 |
|-------|------|
| `--font-weight-regular` | 400 |
| `--font-weight-medium` | 500 |
| `--font-weight-semibold` | 600 |
| `--font-weight-bold` | 700 |
| `--font-weight-extrabold` | 800 |

### 標題（H1–H4）

- 小螢幕與大螢幕 **字級／字距** 不同；大螢幕斷點與 **`--breakpoint-desktop`（90rem / 1440px）** 一致，實作在 `typography.css` 的 `@utility` 內。
- 每階有 `--font-size-*-sm` / `--font-size-*-lg`、`--letter-spacing-*-sm` / `*-lg`、`--line-height-*`。

### 內文階層（Body1–Body6）

- Body1–Body6：固定 `--font-size-body*`、`--line-height-body*`、`--letter-spacing-body*`（註解標為全斷點共用）。
- **Legacy 別名**：`--font-size-body2-m`、`--font-size-body3-r` 等對應 Figma 舊命名。

### 字型工具類（`typography.css` 的 `@utility`）

可在 JSX 使用，並可疊加 **`tablet:`** / **`desktop:`** / **`wide:`**（與 `theme.css` 斷點一致）：

| 類別 | 說明 |
|------|------|
| `typo-h1` … `typo-h4` | 標題；≥1440 放大字級與字距 |
| `typo-sub1-s` / `typo-sub1-m` | Subtitle1（semibold / medium） |
| `typo-body1-b` / `-m` / `-r` / `typo-body1` | Body1 |
| `typo-body2-b` / `-m` / `-r` / `typo-body2` | Body2 |
| `typo-body3-b` / `-m` / `-r` / `typo-body3` | Body3 |
| `typo-body4-m` / `-r` / `typo-body4` | Body4 |
| `typo-body5-m` / `-r` / `typo-body5` | Body5 |
| `typo-body6-m` / `-r` / `typo-body6` | Body6（稿 12px） |

---

## 5. 陰影（`palette.css`）

| Token | 說明（註解／用途） |
|-------|-------------------|
| `--shadow-l-source` / `--shadow-l` | 大卡／大螢卡片陰影 |
| `--shadow-s-source` / `--shadow-s` | 小螢卡片陰影 |
| `--shadow-text-source` / `--shadow-text` | 藍底上的白字陰影 |

Tailwind：`shadow-l`、`shadow-s`、`shadow-text`（對應 `@theme`）。

---

## 6. 圓角與區塊間距（`theme.css`）

| Token | 值 |
|-------|-----|
| `--radius-card` | `0.75rem` |
| `--spacing-section` | `5rem` |

---

## 7. 布局系統（Layout）

實作集中在 **`src/styles/layout-tokens.css`**（數值）與 **`src/styles/layout-grid.css`**（三個 class 的行為）。與 Figma Guide／Grid 註解對齊：Small ≤1023、Medium 1024–1439、Large ≥1440。

### 7.1 三層概念：Shell → Container →（選用）Grid

| 層級 | Class | 做什麼 |
|------|--------|--------|
| **Shell** | `.layout-shell` | 全寬；用 **`padding-inline`** 吃 `--layout-margin-sm/md/lg`，等同稿裡的 **左右 margin**。內容不會貼齊視窗邊。 |
| **Container** | `.layout-container` | 在 shell 內 **`max-width` + `margin-inline: auto`**，吃 `--layout-container-sm/md/lg`，限制主欄最大寬並置中。 |
| **Grid** | `.layout-grid` | 在 container 內（或需要欄狀排版處）使用；`grid-template-columns: repeat(欄數, minmax(0,1fr))`，欄距為 **`column-gap` / `row-gap`** = `--layout-gutter-*`。 |

建議 DOM（多數首頁區塊已採用）：

```text
<section>   <!-- 可選：滿版 bg / 全寬圖在這層加 w-full -->
  <div class="layout-shell">      <!-- 左右留白 -->
    <div class="layout-container"> <!-- 主欄寬上限 -->
      …內容…
      <!-- 需要 4/12 欄時 -->
      <div class="layout-grid">…</div>
    </div>
  </div>
</section>
```

**滿版底色或橫幅圖**：加在 **包住** `.layout-shell` 的外層（例如 `section` / `footer` 外殼設 `w-full` + `bg-*` 或背景圖），不要只把底色加在 `.layout-container` 上，否則兩側 shell 留白區不會上色（見 `layout-grid.css` 註解）。

### 7.2 斷點與誰對齊

**Tailwind 前綴**（`theme.css` 的 `@theme inline`）：`tablet:`、`desktop:`、`wide:` 對應：

| 語意 | CSS 變數 | rem | px（16px 基準） |
|------|----------|-----|------------------|
| Tablet | `--breakpoint-tablet` | `64rem` | 1024 |
| Desktop | `--breakpoint-desktop` | `90rem` | 1440 |
| Wide | `--breakpoint-wide` | `97.5rem` | 1560 |

**Layout 用 px 變數**（`layout-tokens.css`，給 JS 或要與稿同單位時）：`--layout-breakpoint-tablet`（1024）、`--layout-breakpoint-desktop`（1440）、`--layout-breakpoint-wide` / `--layout-content-wide-min`（1560）。寬螢行為說明：**≥1440** 起沿用 Large 的 shell padding（80）+ container max（1440）；視窗再變寬時，**留白由 shell 的 padding 自然加大**，主欄寬不會超過 1440。

**`layout-grid.css` 的 media query** 使用 **`min-width: 64rem`**（tablet）與 **`min-width: 90rem`**（desktop），與上表一致；**沒有**獨立的 1560px media query 去改欄寬——1560 主要是稿面「寬螢示意」與 `wide:` 工具類用途。

### 7.3 各斷點數值一覽（與稿一致）

| 階層 | 視窗寬 | Shell 左右 padding<br>`--layout-margin-*` | Container `max-width`<br>`--layout-container-*` | 欄數<br>`--layout-columns-*` | Gutter<br>`--layout-gutter-*` |
|------|--------|---------------------------------------------|-----------------------------------------------------|------------------------------|-------------------------------|
| **Small** | ≤1023 | 20px | 390px | 4 | 16px |
| **Medium** | 1024–1439 | 40px | 944px（註：1024 − 40×2） | 12 | 20px |
| **Large** | ≥1440 | 80px | 1440px | 12 | 24px |

### 7.4 三個 class 的具體行為（`layout-grid.css`）

- **`.layout-shell`**：`width: 100%`；`padding-inline` 依序為 `var(--layout-margin-sm)` →（≥64rem）`md` →（≥90rem）`lg`。
- **`.layout-container`**：`width: 100%`、`margin-inline: auto`；`max-width` 依序為 `sm` → `md` → `lg`。
- **`.layout-grid`**：`display: grid`；欄數與 `column-gap` / `row-gap` 同上表三階切換。

### 7.5 專案內參考實作

- **標準 shell + container**：`SiteHeader.tsx`、`HomeHero.tsx`、`HomeFeatureMatrix.tsx` 等多數 `src/components/home/*`。
- **shell + container + grid**：`src/app/not-found.tsx`（`layout-grid` 直放內容下）。
- **未用 shell、自管寬度**：`SiteFooter.tsx` 用 `max-w-[var(--layout-container-lg)]` 與自訂 `px-*`／gap，與主 grid 系統並行，改版尾時需單獨對稿。

### 7.6 修改布局時改哪裡

- 只改 **數值**（margin、gutter、欄數、container 寬）：`layout-tokens.css`。  
- 改 **斷點何時切換** 或 **class 行為**：`layout-grid.css`（並確認與 `theme.css` 的 `tablet:` / `desktop:` 是否仍要一致）。  
- Tailwind 斷點 **名稱與 rem 值**：`theme.css`。

---

## 8. 快速對照：要改什麼改哪裡

| 目標 | 主要檔案 |
|------|----------|
| 品牌藍／天藍／灰階數值 | `palette.css` |
| 預設頁面底／字色 | `semantic.css` |
| Tailwind 顏色名、斷點名、shadow／radius 暴露給 class | `theme.css` |
| 欄寬、邊距、欄數 | `layout-tokens.css` + `layout-grid.css` |
| 標題／內文字級與響應 | `palette.css`（數值）+ `typography.css`（斷點與 utility 名） |
| 載入字體 | `src/app/layout.tsx` |
| 頁面／區塊布局、shell／container／grid、斷點與稿對齊 | 見 **第 7 節**；檔案 `layout-tokens.css`、`layout-grid.css` |

---

## 9. 匯出給 Figma／設計協作

若要把「專案風格」同步給設計工具，建議匯出三層：

1. **Color**：`sky` / `navy` / `gray` 階 + `logo-red` + semantic（background／foreground）。  
2. **Typography**：由 `palette.css` 的 size／line-height／letter-spacing／weight 表列；標註 **1440+** 與 **≤1023** 差異見 `typography.css`。  
3. **Grid／布局**：Small／Medium／Large 的 margin、gutter、columns、max container 與 Shell→Container 結構（本文件 **第 7 節**）。

數值若有單一真相來源需求，可維持只在 `palette.css` / `layout-tokens.css` 編輯，本文件僅作索引，不必重複貼 hex（避免日後漂移）。
