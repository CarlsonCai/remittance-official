# MARKUP_STYLE（AI 切版約束）

本文件約束 **AI 在此 repo 依設計稿切版** 時的 HTML 結構、版面、樣式用法。與 `CODING_STYLE.md`（邏輯與程式品質）搭配使用。

**技術棧**：Tailwind CSS v4、`src/styles/` 設計 token、`typo-*` 字型 utility、`layout-*` 版面 class。

---

## 1. 設計稿對齊原則（必須遵守）

- **優先使用專案既有 token**，禁止為了「像設計稿」而大量寫死 `text-[13px]`、`mt-[37px]` 等任意值。
- **字型**：`type-scale.css` 僅供 `typography.css` 的 `typo-*`；元件見 **§4.2.1**，勿用 arbitrary text-length 引用 type-scale 字級變數。
- **間距（padding / margin / gap）**：見 **§5.0**（稿面 px 為 4 的倍數時**禁止**寫 `pb-[164px]` 等）。
- 設計稿若與 token 有落差：**先查** `palette.css`、`type-scale.css`、`effects.css`、`radius.css`、`motion.css`、`layout-tokens.css`；仍無對應時才用 Tailwind 任意值，並在 PR／說明中註記需否補 token（見 `docs/design-tokens.md`）。
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
| `wide:` | 1560px | 超寬：`.page-layout` 整頁 max 1440 置中，兩側**外部**留白（見 §3.1） |

- 字型階層（`typo-h1` 等）在 `typography.css` 內已含 `desktop` 媒體查詢；**多數標題不必再包一層 `desktop:typo-h1`**，除非稿面要求在特定斷點換用不同 utility。
- `typo-*` 可疊加斷點前綴（例：`tablet:typo-body3-m`），見 `globals.css` 註解。

---

## 3. 版面結構（必須遵守）

### 3.1 四層模型（整頁 vs 區塊內）

```
(site)/layout
  <PageLayout>              ← 整頁：≥1560 外側留白（.page-layout），不含 shell
    <Header />              ← layout-header-shell（&lt;1024：20px；≥1024：48px）
    <main>
      <section>             ← 滿版背景
        <SectionPanelLayout>  ← [Panel 可選] → shell
          內容
        </SectionPanelLayout>
      </section>
    </main>
    <Footer />              ← layout-shell
  </PageLayout>
```

| 層級 | 用途 | 用法 |
|------|------|------|
| **`PageLayout`**（`.page-layout`） | **整頁**欄寬；≥1560 時 max 1440 置中，兩側**外部**留白 | `(site)/layout.tsx` 包 Header、`{children}`、Footer；**不含** `layout-shell` |
| 外層 `section` / `footer` | 滿版底色、圓角 | `w-full` + `bg-*`；背景在 shell **外**（或 section 包 shell） |
| **`layout-shell`** | 左右 margin（20 / 40 / 80） | 直接包內容；Panel 存在時在 Panel **內** |
| **`layout-header-shell`** | Header 導覽列左右：**&lt;1024 → 20px**；**≥1024 → 48px** | `Header.tsx`；行動選單 `px` 用 `--layout-margin-sm`（與小螢幕 shell 同值） |
| **Mega Menu 內層**（匯款服務） | 全寬白底面板；內容區 `padding` 依稿 | `HeaderServiceMegaMenuPanel`：內層 `px-(--layout-margin-lg)`（80px）+ `max-w-(--layout-container-lg)`；**不走** `layout-header-shell` |

**`SectionPanelLayout`**（`SectionPanelLayout.tsx`）= **[Panel 可選]** → `layout-shell` → 內容。無 Panel 時 shell 直接包內容；有漸層／大圓角時傳 `panelClassName`（見 `src/components/home/remittance-options/HomeRemittanceOptions.tsx`）。

### 3.2 何時使用（區塊 vs 元件）

| 對象 | 是否使用 | 說明 |
|------|----------|------|
| **全站** | ✅ `PageLayout` 一層 | 僅整頁寬與 ≥1560 置中；不取代各區 `layout-shell` |
| **大區塊**（`Home*`） | ✅ `<section>` + `SectionPanelLayout` | 背景在 `section`；有 Panel 傳 `panelClassName`（§7） |
| **404、無 site layout 的頁** | ✅ `PageLayout` + `SectionPanelLayout` | 建議與首頁同元件 |
| **內頁 Placeholder**（在 site layout 內） | ✅ 建議改 `SectionPanelLayout` | — |
| **Header** | ✅ `layout-header-shell` | **&lt;1024：20px**；**≥1024：48px**（非 grid 40） |
| **Footer** | ✅ `layout-shell` | 直接包內容 |
| **小元件**（Card、按鈕） | ❌ 不要 layout-shell | 已在父層 shell 內 |
| **`page.tsx`** | 不包 PageLayout | 由 `(site)/layout` 已包；只列 `Home*` |

```
(site)/layout → PageLayout
  └─ HomeHero
       └─ <section class="bg-…">
            └─ <SectionPanelLayout>  → [Panel] → shell
                 └─ 內容
```

### 3.3 優先使用的元件／class

- **區塊級內容**：`<SectionPanelLayout>`（見 §3.2、§7）。
- **12 欄格線**：`layout-grid`（放在 `layout-shell` **內**；欄數與 gutter 已依斷點設定）。
- **內部排版**：可用 Tailwind `grid` / `flex`，欄位跨度對齊 12 欄邏輯（例：`tablet:col-span-4`），間距優先使用 gutter 倍數（`gap-6`、`gap-8` 等），與稿一致即可。

### 3.4 禁止的版面做法

- **禁止**在 `PageLayout` 上再加 `layout-shell`（會與各區塊 shell 疊兩層 margin）。
- **禁止** Panel 外層 `layout-shell` + Panel 內層再 `layout-shell`（或外層 shell + 內層 `px-20`）疊兩層 margin。
- 不要在每個區塊重複發明 `px-4 md:px-8`；左右 margin 走 `layout-shell` / `layout-header-shell`。
- 不要把 Header／Mega Menu／Footer 的特例 padding 複製到所有內容區。

### 3.5 Figma Grid 與 shell 放哪（必讀）

稿面 **Guide/Grid**（Small ≤1023 / Medium 1024–1439 / Large ≥1440）對應 `layout-shell` 的 `padding-inline`：

| 稿面 | 視窗 | Margin（`layout-shell`） | Gutter | 欄數 |
|------|------|--------------------------|--------|------|
| Small | ≤1023 | **20px** | 16px | 4 |
| Medium | 1024–1439 | **40px** | 20px | 12 |
| Large | ≥1440 | **80px** | 24px | 12 |

**`SectionPanelLayout`、首頁 `Home*`、Footer**

```
section（可滿版 bg）
  py-16 tablet:py-20          ← 區塊與區塊之間
    [Panel 可選：滿寬漸層/圓角]
      layout-shell            ← 稿面 margin 在這（Small 20 / Medium 40 / Large 80）
        內容
```

**例外**

| 區塊 | 左右間距 |
|------|----------|
| Header 導覽列 | `layout-header-shell`（≥1024：**48px**，非 40） |
| Mega Menu 內層 | 手寫 `px-(--layout-margin-lg)`（目前全斷點 80px，Medium 若要對稿 40 需加 RWD） |

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

#### 4.2.1 `type-scale.css` → `typography.css` → 元件（必須遵守）

> **Tailwind v4 會掃描專案內字串**（見 `globals.css` 的 `@source`）：Markdown／CSS 註解**勿寫**可被當成 class 的 arbitrary 字級語法（例如 `text-length` 搭配 `--font-size-` 變數、或含 `*` 的萬用字元），否則會編進 `globals.css` 導致 PostCSS 失敗。

```
type-scale.css (:root 字階變數，Figma 對照表)
       ↓ 僅由此檔引用
typography.css（typo-h1、typo-body3-r … @utility）
       ↓
元件 JSX（className="typo-h2" …）
```

| 層級 | 用途 | AI 怎麼寫 |
|------|------|-----------|
| **`type-scale.css`** | 字級／行高／字距 **token 定義** | **勿**在元件用 arbitrary 字級引用 `--font-size-…`（改用 `typo-*` 或 `text-2xl` 等） |
| **`typography.css`** | 把 token 包成 **`typo-*`** | 全站標題／內文 **必須**用 `typo-*`，不手抄 font-size |
| **元件 JSX** | 組合 `typo-*` + 色 + RWD | 見下表「特例」 |

**元件預設**

- 內文與標題：**`typo-*`**（定義於 `typography.css`，數值來自 `type-scale.css`）。
- 標題：`typo-h1`～`typo-h4`；內文：`typo-body1`～`typo-body6`；副標：`typo-sub1-*`。
- 字重已含在 utility（`-b` / `-m` / `-r`）；**不要**再疊 `font-bold` 蓋掉設計字重。
- 文字顏色：`text-navy-900`、`text-gray-600` 等（`palette.css` / `@theme`）。

**斷點或單區塊特例（`typo-*` 斷點與稿不符時）**

- 用 **Tailwind 預設字級 scale** 覆寫；**禁止**在 className 用 arbitrary text-length 搭配 type-scale 的 `--font-size-…`。
- 換算與間距 §5.0 相同思路：稿面 px **÷ 4** 對 Tailwind 字級（例 24px → `text-2xl`，48px → `text-5xl`）。
- 非 4 倍數字距（例 `0.48px`）：**單一元件、單一處**可寫 `tracking-[0.48px]`。

**何時才動 `type-scale.css` / 擴充 `typo-*`**

- 同一字級／字距 **≥2 處**要用，或全站 `typo-*` 斷點要改 → 改 `type-scale.css` + `typography.css`。
- **僅一處**、且只是「比 `typo-*` 早一個斷點變大」→ JSX 用 `tablet:text-2xl` 等即可，**不要**為該區新增 type-scale 變數。

```tsx
// ✅ App 下載主標：typo-h2 + tablet 提早 48px
className="typo-h2 tablet:text-5xl tablet:tracking-[0.06em] text-gradient-app-download-heading"

// ✅ 卡片標題：typo-sub1-s + tablet 提早 24px
className="typo-sub1-s tablet:text-2xl tablet:tracking-[0.48px]"

// ❌ 禁止：tablet 字級用 arbitrary text-length + type-scale 變數（勿寫成可掃描的 Tailwind class 字串）
```

**現有少數直接引用 type-scale 變數的例外**（多處前勿再增加）

- `tracking-(--letter-spacing-h4-tight)`：Footer／Mega Menu（`--letter-spacing-h4-tight` 在 `type-scale.css`）；新需求優先評估是否改為 `typo-*` 或 Tailwind。

### 4.3 圓角與陰影

- 卡片圓角：2～32px 用 `rounded-xs`～`rounded-4xl`；稿面 **60px** 用 `rounded-5xl`（數值在 `radius.css` `--radius-5xl-size`）。
- 陰影：使用 theme 內 `shadow-s` / `shadow-l`（若已用於元件）；不任意 `shadow-[0_4px_20px_...]`。

---

## 5. 間距與尺寸（必須遵守）

- **區塊上下間距**：內容區優先依 `SectionPanelLayout` 的 `py-16 tablet:py-20`；區塊內標題與內容常用 `mt-3`（副標）、`mt-10`（主內容區），與現有首頁區塊一致。
- **元件內距**：卡片等參考 `RemittanceOptionCard`（`src/components/home/remittance-options/RemittanceOptionCard.tsx`，`p-4 tablet:p-6`）。
- **最大寬度**：長文/副標可用 `max-w-2xl` 等；區塊全寬由 `layout-shell` margin（20/40/80）決定。
- **間距尺度**：遵守 **§5.0**；小間距用 `4`、`6`、`8`…，大間距用 scale 數字（`15`、`30`、`41`…），避免 `mt-[22px]`、`pb-[164px]`。
- **合併 class**：有條件或需 `tailwind-merge` 時用 `cn()`（`@/lib/utils`）；規則見 **§5.2**。

### 5.0 Tailwind 預設 spacing scale（必須遵守）

本 repo 的 `theme.css` **未覆寫** Tailwind spacing；`p-*` / `m-*` / `gap-*` 等走 **Tailwind 預設 scale**（`src/styles/theme.css` 無 `--spacing-*` 自訂表）。

| 規則 | 說明 |
|------|------|
| **換算** | 稿面 px **÷ 4** = utility 數字（根字級 16px：`N` → `N × 0.25rem` = `N × 4px`） |
| **必須** | 稿面為 **4 的倍數** 時，用 scale class（`pt-15`、`pb-30`、`tablet:pb-41`），**禁止** `pt-[60px]`、`pb-[120px]`、`pb-[164px]` 等「對稿直寫 px」 |
| **一致** | 同一區塊勿混用：`tablet:pt-30` 配 `tablet:pb-[164px]` 屬錯誤寫法；應為 `tablet:pb-41` |
| **例外** | 稿面 **非 4 的倍數**（例 37px）→ 先查是否已有對應 token；仍無則 `mt-[37px]` 或補 token（§1、§9） |

**常見對照（AI 勿再發明任意 px）**

| 稿面 | ✅ 寫法 | ❌ 勿寫 |
|------|---------|---------|
| 60px | `pt-15` / `py-15` / `gap-15` | `pt-[60px]` |
| 80px | `p-20` / `gap-20` | `p-[80px]` |
| 120px | `pb-30` / `pt-30` | `pb-[120px]` |
| 140px | `pb-35` / `gap-35` | `pb-[140px]` |
| 164px | `pb-41` | `pb-[164px]` |

JSX 大間距一律用 **Tailwind scale 數字**（`pt-15`、`pt-20`、`pt-35`…），**不必**也**不要**為每個稿面 px 新增 `--space-*` 或寫 `[…px]`，除非該值**無法**用 ÷4 對齊（見例外）。

```tsx
// ✅
shellClassName={cn(
  "pt-15 pb-30",
  "tablet:pt-30 tablet:pb-41",
)}

// ❌ 禁止（與上同視覺，但破壞全站一致）
shellClassName="pt-15 pb-[120px] tablet:pt-30 tablet:pb-[164px]"
```

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
- 自訂 class（`layout-shell`、`typo-h2`）在插件排序中通常靠前；與 Tailwind utility 混用時仍跑 `npm run format`。

### 5.2 `cn()` 語意分層（建議遵守）

與 **§5.1**（單一字串內的 utility 排序）並存：§5.1 管「每段字串怎麼排」；本節管「`cn()` 為何要拆成多個參數、各參數放什麼」。

#### 何時用 `cn()`、何時不用

| 情況 | 做法 |
|------|------|
| 有 `expanded && …`、`open ? …`、variant 等**條件 class** | ✅ `cn()` |
| 可能互斥的 utility（兩個 `text-*`、`mt-4` 與 `mt-6`）需 merge | ✅ `cn()` |
| 複雜元素、需分層閱讀的長 class | ✅ `cn()` 多參數 |
| **固定且簡短**、無條件、無衝突 | ❌ 直接 `className="typo-body2-m text-navy-900"`，勿包一層 `cn()` |

**禁止**為每個元素機械式拆三層 `cn()`；簡單靜態區塊一行即可。參考：`src/components/layout/header/mobile-nav/`。

#### `cn()` 參數順序（語意層）

由前到後；**條件／狀態 class 永遠放最後一個參數**（避免 `tailwind-merge` 覆寫意圖不清）。

| 順序 | 名稱 | 放什麼 | 不放什麼 |
|------|------|--------|----------|
| 1 | **表面** | `flex` / `grid`、`w-*` `h-*`、間距、`border-*`、`rounded-*`、**`bg-*`**、**`hover:bg-*`**、`shadow-*`、`focus-visible:outline-*` | `typo-*`、純 `text-*`（字色） |
| 2 | **字形** | `typo-*` 與 `text-*` **同一參數字串**（例：`"typo-body1-m text-navy-900"`） | layout、`transition-*` |
| 3 | **動畫** | `transition-*`；或檔頂常數 + `SITE_MOTION`（見 `src/lib/siteMotion.ts`） | — |
| 4 | **狀態**（最後） | `expanded && "text-sky-600"`、`isLast && "rounded-b-…"`、`open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"` | 固定、不隨狀態變的樣式 |

- **背景色**（含占位 `bg-gray-200`、`bg-cover`）一律算**表面**，不要因拆行而誤當「第二層字形」。
- 無轉場的元件可**省略動畫層**。
- `hover:` 預設放在表面層；若僅在特定狀態才變色，改放**狀態層**。

#### RWD 與 `cn()` 分層

**`tablet:` / `desktop:` / `wide:` 不是第五個語意層**；斷點前綴跟著它所修飾的 utility 歸類（見 **§2** Mobile First）。

| 斷點修飾的內容 | 歸在哪一層 |
|----------------|------------|
| layout、`grid` / `flex`、`col-span-*`、間距、`p-*` / `gap-*` | **表面** |
| `typo-*`、`text-*`（含 `tablet:typo-body3-m`） | **字形** |
| `transition-*`（含斷點變體，少見） | **動畫** |
| 僅在 `expanded` / `open` 等狀態才出現的斷點 class | **狀態**（最後） |

**單一參數字串內**：同一 utility 的 RWD 變體須緊接在 base class 之後，遵守 **§5.1** 第 12 點（`npm run format` 會排序）。

**可選 — 獨立 `cn()` 參數放 RWD**（提升可讀性，非必須）：

- 在**同一語意層**內，可把「預設（≤1023）」與「`tablet:` 起」拆成相鄰的兩個參數；**不要**把表面的 `tablet:grid` 與字形的 `tablet:typo-*` 混在同一參數。
- 順序仍為：**表面（含表面 RWD）→ 字形（含字形 RWD）→ 動畫 → 狀態**；RWD 參數不可插在動畫層之後、狀態層之前以外的位置。
- 簡短、僅一兩個斷點時，維持與 base 寫在同一字串即可，勿為 RWD 機械式多拆一層。

```tsx
// ✅ 表面 base + 表面 RWD（可選拆參數）
className={cn(
  "flex min-h-0 min-w-0 flex-col items-start self-stretch",
  "tablet:col-span-5",
  "typo-body3-m text-white",
  "tablet:typo-body2-m",
)}

// ✅ 同一字串內：base 緊接斷點（§5.1）
className={cn(
  "typo-h4 w-full text-center text-white tablet:w-auto tablet:text-left",
)}
```

#### 與 §5.1、動效 token 的關係

- 每個 `cn()` 參數字串內部仍遵守 **§5.1**；提交前執行 `npm run format`。
- 跨元件共用的 duration／easing 用 `siteMotion.ts`（例：`SITE_MOTION`），勿在 JSX 重複寫死 `duration-[450ms]`。
- **數值對稿**：間距遵守 **§5.0**（4～24px → `1`～`6`；60/80/120/140/164px → `15`/`20`/`30`/`35`/`41` 等，**禁止** `[…px]`）；圓角用 `rounded-xs`～`5xl`；grid 用 `--layout-*`；漸層用 `effects.css`。

#### 示例

```tsx
// ✅ 有條件：表面 → 字形 → 動畫 → 狀態
className={cn(
  "flex w-full border-b border-white bg-sky-50 py-3 hover:bg-sky-100",
  "typo-body2-m text-navy-900",
  "transition-colors",
  isLast && "rounded-b-2xl",
)}

// ✅ 靜態且短：不用 cn
<span className="typo-body2-m text-navy-900">{title}</span>

// ✅ 僅表面 + 狀態（無字形、無動畫）
className={cn(
  "flex w-full items-center gap-2 bg-sky-50",
  isLast && "rounded-b-2xl",
)}
```

- **禁止**新增 `*Classes.ts` 整包抽離 Tailwind（除非任務明確要求）；樣式以元件內 `className` 為主，動效常數可放 `src/lib/*Motion.ts`（亦見 `CODING_STYLE.md` **§4**）。
- `cn()` 參數順序**不決定** CSS cascade；互斥 utility 由 `tailwind-merge` 處理，故狀態層必須最後。

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
- 頁面骨架：`(site)/layout` 已有 `Header` / `Footer`；page 內用 `<main>` 包住主要內容（首頁 `page.tsx` 已用 `<main>`）。

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

新增首頁 section 時，對齊既有 `Home*` 元件。

### 7.1 區塊版面（`SectionPanelLayout`）

```tsx
<section id="section-id" className="w-full bg-…">
  <SectionPanelLayout>
    <h2 className="typo-h2 …">標題</h2>
    {/* 內容 */}
  </SectionPanelLayout>
</section>
```

- 區塊背景在 **`section` 上**（例：`HomeHero` `bg-sky-50`）。
- 無 Panel 時省略 `panelClassName`，`layout-shell` 直接包內容。
- 內距、排版可加在 `shellClassName`（例：`flex flex-col gap-18 py-30`）。

### 7.2 內層大面板（漸層／大圓角）

稿面為 **container 內一塊圓角面板** 時（見 `src/components/home/remittance-options/HomeRemittanceOptions.tsx`）：

```tsx
<SectionPanelLayout
  panelClassName={cn(
    "rounded-5xl",
    "[background:var(--gradient-remittance-options)]",
  )}
  shellClassName="flex w-full flex-col items-start gap-18 py-30"
>
  {/* 內容 */}
</SectionPanelLayout>
```

- 外層 `<section>` 可不設底色；**勿**在 `SectionPanelLayout` 外再包 `layout-shell`。
- 漸層用 `[background:var(--gradient-…)]`（`effects.css`），**勿**只用 `bg-*`。
- 大圓角用 `rounded-5xl`；Panel 內上下 `py-30`、區塊內 `gap-18` 等寫在 `shellClassName`。

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
| 重複 ≥2 次的相同 pattern | 考慮 `src/styles/*.css` 的 `@layer components` 或共用元件 |
| 新顏色／字級／斷點 | 擴充 `palette.css` / `typography.css` / `theme.css`，**不要**只在 JSX 堆任意值 |
| 禁止 | 在元件內寫 `<style jsx>`、隨意新增全域 CSS 檔（未經任務要求） |

---

## 10. 切版流程（AI 執行順序）

1. 確認區塊屬於首頁 section、內頁、Header/Footer 哪一類，選對外層結構（§3、§7）。
2. 從稿面取：**背景色、標題字級（typo-*）、欄數、斷點行為**。
3. 用 `SectionPanelLayout` + `grid`/`flex` 搭骨架，再填文案與圖片佔位。
4. 加上語意標籤、`aria-*`、heading `id` 與 page `metadata`（§6）。
5. 檢查 class 順序（§5.1）、間距 scale（§5.0）、`cn()` 分層（§5.2）、format；未使用任意色碼/字級；斷點正確；滿版背景在外層。

---

## AI 切版自檢（簡表）

- [ ] `(site)/layout` 有 `PageLayout`；未在 PageLayout 上再包 shell
- [ ] 大區塊用 `SectionPanelLayout`（§7）；有 Panel 傳 `panelClassName`
- [ ] 漸層 Panel 勿在 `SectionPanelLayout` 外再包 `layout-shell`（§7.2）
- [ ] Header `layout-header-shell`；Mega Menu 若對 Medium 稿需 40px 左右（現 80）
- [ ] 滿版背景在 `section`（shell 外層）
- [ ] 色彩為 `navy-*` / `sky-*` / `gray-*` / 語意色
- [ ] 文字為 `typo-*`，無多餘 `font-*` 覆寫；未在 JSX 用 arbitrary 字級引用 type-scale（§4.2.1）
- [ ] 字級／字距特例用 Tailwind scale 或單處任意值；非多處重複才改 `type-scale.css`
- [ ] RWD 使用 `tablet:` / `desktop:` / `wide:`，Mobile First
- [ ] 使用 `header` / `main` / `section` / `article` / `nav` / `footer` 等語意標籤
- [ ] 全頁一個 `h1`；heading 不跳級；section 具 `id`、`aria-labelledby`
- [ ] 內頁 `metadata`（title、description、canonical）已填且非空泛佔位
- [ ] 連結與圖片 `alt` 文字對 SEO／螢幕閱讀器有意義
- [ ] Tailwind class 順序符合 §5.1（或已 `npm run format`）
- [ ] 有條件／衝突時用 `cn()`，且符合 §5.2 分層（含 RWD 歸屬）；靜態短 class 不濫用 `cn()`
- [ ] 間距符合 **§5.0**（4 的倍數勿寫 `pb-[164px]` 等；與同區塊 `pt-30` 等寫法一致）
- [ ] 無大量任意 `[px]` / `[#hex]`（字型／非 4 倍數間距等，除非已註記缺 token）

---

_其餘切版規範待補充。_
