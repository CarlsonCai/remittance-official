# 設計 Token 速查（Remittance Official）

數值以程式為準；改動請直接編對應 CSS，本檔只做對照索引。

---

## 1. 樣式從哪裡載入（`globals.css` 順序）

| 順序 | 檔案                | 層級          | 內容                                                                    |
| ---- | ------------------- | ------------- | ----------------------------------------------------------------------- |
| 1    | `palette.css`       | Primitive     | 色票 `--sky-*`、`--navy-*`、`--gray-*`                                  |
| 2    | `type-scale.css`    | Primitive     | 字重、字号、行高、字距                                                  |
| 3    | `effects.css`       | Primitive     | 陰影、漸層                                                              |
| 4    | `radius.css`        | Primitive     | 圓角 token；目前橋接 `rounded-5xl`                                      |
| 5    | `motion.css`        | Primitive     | 動效時序 token                                                          |
| 6    | `layout-tokens.css` | Primitive     | layout margin、gutter、columns、container                               |
| 7    | `semantic.css`      | Semantic      | `--background`、`--foreground`                                          |
| 8    | `theme.css`         | Tailwind 橋接 | `bg-sky-*`、`tablet:`、`shadow-s`、`rounded-5xl`                         |
| 9    | `tailwindcss`       | —             | 框架                                                                    |
| 10   | `typography.css`    | Utility       | `typo-*` 工具類                                                         |
| 11   | `layout-grid.css`   | Component     | `.page-layout`、`.layout-shell`、`.layout-header-shell`、`.layout-grid` |

**改數值去哪裡**

| 要改                             | 檔案                                           |
| -------------------------------- | ---------------------------------------------- |
| 品牌色                           | `palette.css`                                  |
| 字級／字距                       | `type-scale.css`                               |
| 陰影／漸層                       | `effects.css`                                  |
| 圓角                             | `radius.css`                                   |
| 動效                             | `motion.css`                                   |
| layout margin／gutter／grid 數值 | `layout-tokens.css`                            |
| 頁面底／預設字色                 | `semantic.css`                                 |
| Tailwind class 名映射／斷點 px   | `theme.css`（勿寫死新 px）                     |
| 標題／內文 class                 | `typography.css`（通常只加 utility，不改數值） |

### 1.1 尺寸類 token 用法

| 層級       | 前綴例                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Radius     | `radius.css`：`--radius-5xl-size`                                                              |
| Motion     | `motion.css`：`--motion-*`                                                                      |
| Layout     | `layout-tokens.css`：`--layout-margin-*`、`--layout-gutter-*`、`--layout-columns-*`             |
| 元件尺寸   | 固定元件尺寸需要跨元件共用時才補 `--size-*`，不要拿來取代 spacing scale                         |
| Breakpoint | Tailwind 斷點定義在 `theme.css` 的 `--breakpoint-*`；CSS media query 以相同 literal px 對齊     |

間距：使用 Tailwind 預設 spacing scale；4～24px → `1`～`6`，60/80/120/140/164px → `15`/`20`/`30`/`35`/`41`。不另外維護 `--space-*` token。圓角：2～32px → `rounded-xs`～`4xl`；60px → `rounded-5xl`（`radius.css` `--radius-5xl-size`）。

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

## 5. 版型 grid（`layout-tokens.css` + `layout-grid.css`）

### 5.1 三個 layout class

| Class                  | 作用                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| `.layout-shell`        | 全寬 + `padding-inline`（`--layout-margin-*`）                                                       |
| `.layout-header-shell` | Header 全寬；**&lt;1024：`--layout-margin-sm`（20px）**；**≥1024：`--layout-margin-header`（48px）** |
| `.page-layout`         | `width: 100%`；wide 以上 max-width 1440px；不要包在 `layout-shell` 裡面                              |
| `.layout-grid`         | 欄數 + gutter                                                                                        |

### 5.2 稿數值（Small / Medium / Large）

| 階層   | 視窗      | margin | Container                                | 欄數 | Gutter |
| ------ | --------- | ------ | ---------------------------------------- | ---- | ------ |
| Small  | ≤1023     | 20px   | 撐滿（稿面 artboard 390）                | 4    | 16px   |
| Medium | 1024–1439 | 40px   | 撐滿（有效寬≈944@1024）                  | 12   | 20px   |
| Large  | ≥1440     | 80px   | 撐滿（整頁 cap 見 `.page-layout` ≥1560） | 12   | 24px   |

`layout-grid.css` / `typography.css` 的 media 寫死 `1024px` / `1440px`，需與 `theme.css` 的 `--breakpoint-*` 手動對齊；Tailwind／PostCSS 斷點不可用 `var()`。

### 5.3 Tailwind 斷點（`theme.css`）

| 前綴       | 寬度    |
| ---------- | ------- |
| `tablet:`  | 1024px+ |
| `desktop:` | 1440px+ |
| `wide:`    | 1560px+ |

---

## 6. 想改〇〇時改哪裡（速查）

| 目標                         | 檔案                                |
| ---------------------------- | ----------------------------------- |
| 品牌色                       | `palette.css`                       |
| 字級                         | `type-scale.css` + `typography.css` |
| 陰影／漸層                   | `effects.css`                       |
| 圓角                         | `radius.css`                        |
| 動效                         | `motion.css`                        |
| 間距／尺寸／grid             | `layout-tokens.css`                 |
| 語意色                       | `semantic.css`                      |
| Tailwind 映射／斷點          | `theme.css`                         |
| 載入字體                     | `src/app/layout.tsx`                |

---

## 7. 給 Figma／設計

對齊用：**色**（palette + semantic）、**字**（type-scale + typo utilities）、**格**（§5.2 + layout 結構）、**陰影**（effects）。

## 8. 目前實作註記

- 斷點數值放在 `theme.css` 的 Tailwind `--breakpoint-*`；`layout-grid.css` / `typography.css` 的 media query 用相同 px 手動對齊。
- 間距刻意交給 Tailwind 預設 spacing scale（例如 `pt-15`、`pb-30`、`tablet:pb-41`），不要再新增平行的 `--space-*` token。
