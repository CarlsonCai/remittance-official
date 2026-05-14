# 設計 Token 速查（Remittance Official）

數值以程式為準；改動請直接編對應 CSS，本檔只做對照索引。

---

## 1. 樣式從哪裡載入（`globals.css` 順序）

| 順序 | 檔案 | 用途 |
|------|------|------|
| 1 | `src/styles/palette.css` | 色票、字級／行高／陰影來源 |
| 2 | `src/styles/layout-tokens.css` | 版型數值：margin、gutter、欄數、container 寬 |
| 3 | `src/styles/semantic.css` | `--background`、`--foreground` |
| 4 | `src/styles/theme.css` | Tailwind `@theme`：`bg-sky-*`、`tablet:` 等 |
| 5 | `tailwindcss` | 框架 |
| 6 | `home-scaffold.css` | 開發用區塊外框（非正式 token） |
| 7 | `typography.css` | `typo-*` 工具類 |
| 8 | `layout-grid.css` | `.layout-shell`、`.layout-container`、`.layout-grid` |

---

## 2. 色彩

| 前綴（`palette.css`） | 用途 |
|----------------------|------|
| `--sky-*` | 淺藍階 |
| `--navy-*` | 深藍／品牌藍 |
| `--gray-*` | 中性灰 |
| `--logo-red` | 標誌紅 |

| 語意（`semantic.css`） | 值 |
|------------------------|-----|
| `--background` | `var(--white)` |
| `--foreground` | `var(--navy-900)` |

Tailwind 例：`bg-sky-500`、`text-navy-900`、`bg-background`、`text-foreground`。

---

## 3. 字型

| 項目 | 說明 |
|------|------|
| 英文主體 | Manrope（`next/font`，見 `src/app/layout.tsx`） |
| 中文 fallback | `Noto Sans TC` 等（`theme.css` `--font-sans`） |

---

## 4. 字階工具類（`typography.css`）

| 類名前綴 | 用途 |
|----------|------|
| `typo-h1` … `typo-h4` | 標題（大螢會放大，斷點見 `theme.css`） |
| `typo-sub1-s` / `typo-sub1-m` | Subtitle1 |
| `typo-body1-*` … `typo-body6-*` | 內文 Body1–Body6 |

可疊加 `tablet:`、`desktop:`、`wide:`。

---

## 5. 陰影與圓角（`palette.css` / `theme.css`）

| Token | 用途 |
|-------|------|
| `--shadow-l` / `shadow-l` | 大卡陰影 |
| `--shadow-s` / `shadow-s` | 小卡陰影 |
| `--shadow-text` / `shadow-text` | 藍底白字陰影 |
| `--radius-card` | 卡片圓角 `0.75rem` |

---

## 6. 版型（Figma Guide／Grid 對照）

### 6.1 三個 layout class

| Class | 作用 |
|-------|------|
| `.layout-shell` | 全寬 + 左右 `padding-inline`（`--layout-margin-*`） |
| `.layout-container` | `max-width` + 置中（`--layout-container-*`） |
| `.layout-grid` | 與稿一致的欄數 + gutter（`--layout-columns-*`、`--layout-gutter-*`） |

### 6.2 斷點與稿數值（`layout-tokens.css`）

| 階層 | 視窗 | 左右 margin | Container 寬 | 欄數 | Gutter |
|------|------|---------------|--------------|------|--------|
| Small | ≤1023 | 20px | 390px | 4 | 16px |
| Medium | 1024–1439 | 40px | 944px | 12 | 20px |
| Large | ≥1440 | 80px | 1440px | 12 | 24px |

`layout-grid.css` 用 `min-width: 64rem`（1024）、`min-width: 90rem`（1440）切換上表。

### 6.3 Tailwind 斷點前綴（`theme.css`）

| 前綴 | 約略寬度 |
|------|----------|
| `tablet:` | 1024px+ |
| `desktop:` | 1440px+ |
| `wide:` | 1560px+ |

### 6.4 首頁區塊 `SectionLayout`

| 項目 | 說明 |
|------|------|
| 檔案 | `src/components/layout/SectionLayout.tsx` |
| DOM | 等同 `.layout-shell` + `.layout-container`，內建 `py-16 tablet:py-20` |
| 外層 | 滿版底色請放在 `<section>`，不要只加在 `layout-container` |

### 6.5 例外（未走標準 shell）

| 檔案 | 說明 |
|------|------|
| `SiteHeader.tsx` | 稿定左右距，自管 padding |
| `SiteFooter.tsx` | `max-w-[var(--layout-container-lg)]` 等自管 |

---

## 7. 想改〇〇時改哪裡

| 目標 | 檔案 |
|------|------|
| 品牌色／灰階數值 | `palette.css` |
| 頁面底／預設字色 | `semantic.css` |
| Tailwind 顏色名、斷點名、radius | `theme.css` |
| margin／gutter／欄寬／container 寬 | `layout-tokens.css` |
| shell／container／grid 行為 | `layout-grid.css` |
| 標題／內文 class 名與斷點 | `typography.css` + `palette.css` |
| 載入字體 | `src/app/layout.tsx` |

---

## 8. 給 Figma／設計

對齊用：**色**（`palette` + semantic）、**字**（`palette` 尺寸表 + `typography`）、**格**（上表第 6.2 + Shell→Container 結構）。
