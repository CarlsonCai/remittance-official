# 靜態資源怎麼放（主流慣例）

## `icons/`（`src/assets/icons/`）

- **放什麼**：介面用的小符號，**優先 `.svg`**（箭頭、勾選、關閉、選單等）。
- **為什麼**：向量可任意縮放；在元件裡用 `currentColor` 時，可跟著 **`text-*`／hover 色** 走。
- **程式裡怎用**：常會再包一層 React，例如 `src/components/icons/ChevronRightIcon.tsx`，與設計稿同名的 `.svg` 可並存作對照。

## `images/`（`src/assets/images/`）

- **放什麼**：**點陣圖**（`.png`、`.webp`、`.jpg` 等）— Logo、插畫、照片、Banner、**第三方品牌規定的按鈕圖**（如社群 icon 的 PNG）。
- **為什麼**：這類素材多半是固定配色或無法簡單用 `currentColor` 表達，用 `next/image` 載入最直覺。
- **子目錄（建議）**
  - **`brand/`**：公司／產品 Logo、識別相關圖。
  - **`social/`**：社群、App 商店等外部品牌提供的按鈕圖。
  - 之後若有 hero、內文圖，可再加 `marketing/`、`content/` 等，依「用途」分，不要只依副檔名。

## 快速決策

| 情境 | 放哪裡 |
|------|--------|
| 單色線條、要跟字色／theme 變 | `icons/*.svg` +（可選）`components/icons/*.tsx` |
| Logo、照片、插畫、品牌 PNG | `images/`，並用子目錄分用途 |
| 不確定 | 先放 `images/`；若後來改成 SVG 且變成 UI 符號，再移到 `icons/` |

本專案目前範例：`icons/chevron-right.svg`、`images/brand/`、`images/social/`。
