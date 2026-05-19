# CODING_STYLE（AI 產碼約束）

本文件約束 **AI 在此 repo 撰寫或修改程式** 時的行為。人類開發者亦可參考，但優先服務於 Agent。

與 `AGENTS.md`（Next.js 版本與框架）、`MARKUP_STYLE.md`（切版與 `className`）搭配使用。其餘格式以 ESLint / Prettier 為準。

---

## 1. React Hook 順序（必須遵守）

### 1.1 React 官方規則（不可違反）

來源：[Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)

- Hook **只在**函式元件或自訂 Hook 的**最外層**呼叫。
- **禁止**在 `if` / `for` / 巢狀函式 / 早期 `return` 之後才呼叫 Hook。
- 條件邏輯寫在 Hook **內部**，不要靠「有時才呼叫某個 Hook」。

```tsx
// ❌ 禁止
if (open) {
  const [x, setX] = useState(0);
}

// ✅ 正確
const [x, setX] = useState(0);
useEffect(() => {
  if (!open) return;
  // ...
}, [open]);
```

### 1.2 元件內 Hook 建議順序（主流慣例）

每次 render 順序必須固定。AI 產碼時依下列群組由上而下排列；同組內依邏輯相關性分組即可。

| 順序 | 類型 | 範例 |
|------|------|------|
| 1 | State | `useState`, `useReducer` |
| 2 | Context | `useContext`, `use(Context)`（React 19） |
| 3 | Ref | `useRef`, `useImperativeHandle` |
| 4 | 自訂 Hook | `useXxx`（專案 `src/hooks/`） |
| 5 | 記憶化回呼 | `useCallback` |
| 6 | 記憶化值 | `useMemo` |
| 7 | 副作用 | `useEffect` |
| 8 | 同步 DOM 副作用 | `useLayoutEffect`（僅在需要時） |

**`useEffect` 之間**：依「初始化 → 同步外部資料 → 訂閱/監聽」排列；每個 effect 職責單一，依賴陣列完整。

**早期 return（loading / error）**：放在**所有 Hook 宣告之後**、JSX 之前。

### 1.3 自訂 Hook（`src/hooks/useXxx.ts`）

建議順序：`useState` / `useReducer` → `useRef` → `useCallback` → `useMemo` → `useEffect` → 回傳物件。

- 檔名與函式名以 `use` 開頭。
- 不把 UI JSX 寫進自訂 Hook。

### 1.4 元件檔案整體順序（含非 Hook）

1. `"use client"`（若需要）
2. imports
3. 型別、常數
4. 僅本檔使用的小型子元件 / helper
5. 主元件（依 **§1.2** 排列 Hook → 早期 return → JSX）

---

## 2. Clean Code（必須遵守）

AI 產碼須符合下列原則；以**可讀、可維護**為優先，不追求炫技。

### 2.1 單一職責

- 一個函式只做一件事；名稱能直接讀懂用途。
- 元件負責 UI 組合；複雜邏輯抽到 `src/hooks/` 或 `src/lib/`。

### 2.2 可讀性

- 有意義的命名；boolean 用 `is` / `has` / `can` 前綴。
- 避免魔術數字／字串，提成命名常數。
- 巢狀超過 **3 層**時：改 **early return** 或拆函式。
- 註解只解釋 **為什麼**，不解釋顯而易見的「做了什麼」。

### 2.3 DRY（剛好即可）

- 相同邏輯出現 **第 3 次** 再抽象；不要為假想重用預先建通用層。
- 重複的 effect / 資料取得 → 自訂 Hook；重複 JSX 區塊 → 子元件。

### 2.4 YAGNI

- 只實作**目前任務**需要的 props、state、抽象。
- 不加入「之後可能用到」的參數、介面、設定檔開關。

### 2.5 錯誤與副作用

- 不吞錯誤；非預期錯誤應向上拋或顯示明確 UI 狀態。
- `useEffect` 的訂閱、timer、listener 必須在 cleanup 中清除。
- 不留下除錯用 `console.log`（除非使用者明確要求）。

### 2.6 效能（不過度優化）

- **不要**預設每個元件都包 `memo`、每個函式都 `useCallback` / `useMemo`。
- 僅在：穩定引用避免子元件重渲染、或計算明顯昂貴時使用。

---

## 3. 元件設計與拆檔（必須遵守）

### 3.1 不要過度設計

- 優先**最簡單可運作**的實作：能 props 解決就不建 Context；能本地 state 就不提升。
- 不為單一使用情境建「通用框架」或多層 wrapper。
- 不引入與現有 stack 重疊的新套件（除非使用者明確要求）。

### 3.2 超過 300 行必須拆檔

- 單一 `.tsx` 檔案（含型別、常數、子元件、主元件）**超過 300 行** → **必須拆分**。
- 拆分方式（擇適當組合）：
  - 子元件 → 同目錄獨立檔（如 `HeaderDesktopNav.tsx`）
  - 邏輯 → `src/hooks/useXxx.ts`
  - 純資料 / 工具 → `src/lib/`
- 拆分後：主檔保留組合與公開介面；檔名與 export 名稱一致（PascalCase 元件）。

### 3.3 何時不拆（即使接近 300 行）

- 若拆開會讓追蹤流程更難（過度碎片化），可維持單檔但須**主動說明**並盡量壓在 300 行內。
- 未滿 300 行但職責已混雜（多個獨立 UI 區塊、可抽成 hook 的邏輯）→ 仍應拆檔，不必等到行數門檻。
- 禁止為了避免拆檔而把邏輯塞進註解或超長 JSX 一行到底。

---

## 4. `className` 與 `cn()`（必須遵守）

切版、Tailwind、`cn()` 語意分層的完整規則在 **`MARKUP_STYLE.md` §5.1、§5.2**；本節只列程式面必記項。

### 4.1 職責切分

| 內容 | 放哪 |
|------|------|
| `cn()` 何時用、參數分層（表面 → 字形 → 動畫 → 狀態） | `MARKUP_STYLE.md` **§5.2** |
| RWD（`tablet:` 等）歸哪層、可否獨立 `cn()` 參數 | `MARKUP_STYLE.md` **§5.2**（RWD 小節） |
| 單一字串內 utility 排序、Prettier | `MARKUP_STYLE.md` **§5.1** |
| 色票 | `src/styles/palette.css` |
| 字級來源 | `src/styles/type-scale.css` |
| 陰影 | `src/styles/effects.css` |
| 間距／圓角／grid／動效／斷點 | `src/styles/dimensions.css` |
| 語意色 | `src/styles/semantic.css` |
| Tailwind 映射 | `src/styles/theme.css` |
| 跨區塊動效 | `src/lib/siteMotion.ts`（`dimensions` `--motion-*`） |
| 元件邏輯、accordion 狀態 | `src/hooks/`（例：`useMobileNavAccordion`） |

### 4.2 程式慣例（AI 必守）

- 合併 class 用 `cn()`（`@/lib/utils`，內含 `tailwind-merge`）；**有條件或可能衝突**才用，靜態短 class 直接寫 `className`（見 `MARKUP_STYLE.md` §5.2）。
- **禁止**為了 DRY 新增 `*Classes.ts` 整包抽離 Tailwind（除非使用者明確要求）；樣式留在元件 JSX，動效可抽 `src/lib/*Motion.ts`。
- 條件 class（`expanded && …`）放 `cn()` **最後一個參數**。
- 自訂 Hook 放在 `src/hooks/`，**不要**放在元件目錄僅為了「離 JSX 近」。

### 4.3 參考實作

- `src/components/layout/header/mobile-nav/`（mobile 選單；§5.2 分層示例）

---

## AI 產碼前自檢（簡表）

- [ ] Hook 全在頂層，順序符合 §1.2
- [ ] 無過度抽象、無未使用程式碼；未新增 `*Classes.ts`（§4.2）
- [ ] 單檔 ≤ 300 行（或已拆檔並說明）
- [ ] `className` / `cn()` 符合 `MARKUP_STYLE.md` §5.2（§4）
- [ ] `npm run lint` 可通過（不關規則）

---

_其餘規範待補充。_
