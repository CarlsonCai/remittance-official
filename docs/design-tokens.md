# 設計 Token 速查（Remittance Official）

數值以程式為準；改動請直接編對應 CSS，本檔只做對照索引。

---

## 1. 樣式從哪裡載入（`globals.css` 順序）

| 順序 | 檔案              | 層級                 | 內容                                                                         |
| ---- | ----------------- | -------------------- | ---------------------------------------------------------------------------- |
| 1    | `palette.css`     | Primitive            | 色票 `--sky-*`、`--navy-*`、`--gray-*`                                       |
| 2    | `type-scale.css`  | Primitive            | 字重、字号、行高、字距                                                       |
| 3    | `effects.css`     | Primitive            | 陰影 `--shadow-*-source`                                                     |
| 4    | `dimensions.css`  | Primitive → Semantic | 間距、圓角、尺寸、動效、grid、`--bp-*` 斷點                                  |
| 5    | `semantic.css`    | Semantic             | `--background`、`--foreground`                                               |
| 6    | `theme.css`       | Tailwind 橋接        | `bg-sky-*`、`tablet:`、`shadow-s`                                            |
| 7    | `tailwindcss`     | —                    | 框架                                                                         |
| 8    | `typography.css`  | Utility              | `typo-*` 工具類                                                              |
| 9    | `layout-grid.css` | Component            | `.layout-shell`、`.layout-header-shell`、`.layout-container`、`.layout-grid` |

**改數值去哪裡**

| 要改                                      | 檔案                                           |
| ----------------------------------------- | ---------------------------------------------- |
| 品牌色                                    | `palette.css`                                  |
| 字級／字距                                | `type-scale.css`                               |
| 陰影                                      | `effects.css`                                  |
| 間距、圓角、元件尺寸、grid、動效、斷點 px | `dimensions.css`                               |
| 頁面底／預設字色                          | `semantic.css`                                 |
| Tailwind class 名映射                     | `theme.css`（勿寫死新 px）                     |
| 標題／內文 class                          | `typography.css`（通常只加 utility，不改數值） |

### 1.1 `dimensions.css` 用法

| 層級       | 前綴例                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Primitive  | `--space-15`/`20`/`35`、`--radius-5xl-size`、`--motion-*`；4～24px 間距與 2～32px 圓角用 Tailwind utility |
| 元件尺寸   | `--size-*`（固定 px，非 spacing scale；與 `--space-*` 相同數值時直接用 space）                            |
| Layout     | `--layout-margin-*`、`--layout-margin-header`（48px）、`--layout-gutter-*`（`layout-grid.css`）           |
| Breakpoint | `--bp-tablet`、`--bp-desktop`、`--bp-wide`（`theme` 的 `tablet:` 來源）                                   |

間距：4～24px → Tailwind `1`～`6`；60/80/140px → `15`/`20`/`35`（`dimensions` 亦定義 `--space-15` 等供 CSS 引用）。圓角：2～32px → `rounded-xs`～`4xl`；60px → `rounded-5xl`（`dimensions` `--radius-5xl-size`）。

---

## 2. 色彩

| 前綴（`palette.css`） | 用途         |
| --------------------- | ------------ |
| `--sky-*`             | 淺藍階       |
| `--navy-*`            | 深藍／品牌藍 |
| `--gray-*`            | 中性灰       |

| 語意（`semantic.css`） | 值                |
| ---------------------- | ----------------- |
| `--background`         | `var(--white)`    |
| `--foreground`         | `var(--navy-900)` |

---

## 3. 字型

| 項目          | 說明                                            |
| ------------- | ----------------------------------------------- |
| 英文主體      | Manrope（`next/font`，見 `src/app/layout.tsx`） |
| 中文 fallback | `Noto Sans TC` 等（`theme.css` `--font-sans`）  |
| 字階 utility  | `typography.css` 的 `typo-*`                    |
| 字級來源      | `type-scale.css`                                |

---

## 4. 陰影（`effects.css`）

| Token                  | Tailwind                      |
| ---------------------- | ----------------------------- |
| `--shadow-l-source`    | `shadow-l`（≥1440 大卡）      |
| `--shadow-s-source`    | `shadow-s`                    |
| `--shadow-text-source` | `text-shadow-on-blue` utility |

---

## 5. 版型 grid（`dimensions.css` + `layout-grid.css`）

### 5.1 三個 layout class

| Class                  | 作用                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| `.layout-shell`        | 全寬 + `padding-inline`（`--layout-margin-*`）                                                       |
| `.layout-header-shell` | Header 全寬；**&lt;1024：`--layout-margin-sm`（20px）**；**≥1024：`--layout-margin-header`（48px）** |
| `.layout-container`    | `width: 100%`；左右 margin 由內層或外層 `layout-shell`                                               |
| `.layout-grid`         | 欄數 + gutter                                                                                        |

### 5.2 稿數值（Small / Medium / Large）

| 階層   | 視窗      | margin | Container                                | 欄數 | Gutter |
| ------ | --------- | ------ | ---------------------------------------- | ---- | ------ |
| Small  | ≤1023     | 20px   | 撐滿（稿面 artboard 390）                | 4    | 16px   |
| Medium | 1024–1439 | 40px   | 撐滿（有效寬≈944@1024）                  | 12   | 20px   |
| Large  | ≥1440     | 80px   | 撐滿（整頁 cap 見 `.page-layout` ≥1560） | 12   | 24px   |

`layout-grid.css` / `typography.css` 的 media 寫死 `1024px` / `1440px`（與 `--bp-*` 同步；Tailwind／PostCSS 斷點不可用 `var()`）。

### 5.3 Tailwind 斷點（`theme.css` ← `--bp-*`）

| 前綴       | 寬度    |
| ---------- | ------- |
| `tablet:`  | 1024px+ |
| `desktop:` | 1440px+ |
| `wide:`    | 1560px+ |

---

## 6. 想改〇〇時改哪裡（速查）

| 目標                               | 檔案                                |
| ---------------------------------- | ----------------------------------- |
| 品牌色                             | `palette.css`                       |
| 字級                               | `type-scale.css` + `typography.css` |
| 陰影                               | `effects.css`                       |
| 間距／圓角／尺寸／grid／動效／斷點 | `dimensions.css`                    |
| 語意色                             | `semantic.css`                      |
| Tailwind 映射                      | `theme.css`                         |
| 載入字體                           | `src/app/layout.tsx`                |

---

## 7. 給 Figma／設計

對齊用：**色**（palette + semantic）、**字**（type-scale + typo utilities）、**格**（§5.2 + layout 結構）、**陰影**（effects）。
