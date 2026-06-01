# Remittance Official

以 Next.js App Router、Tailwind CSS v4 與 next-intl 建置的跨境匯款官方行銷網站。

## 技術棧

- Next.js 16（App Router、靜態匯出）
- React 19
- TypeScript 5
- Tailwind CSS 4
- next-intl（語系：`zh-TW`、`en`、`vi`）

## 環境需求

- Node.js 20+
- npm 10+

## 常用指令

- `npm run dev`：啟動本地開發伺服器
- `npm run build`：建置並輸出靜態檔到 `out/`
- `npm run start`：在 3000 埠提供 `out/` 靜態檔預覽
- `npm run lint`：執行 ESLint
- `npm run format`：執行 Prettier 並寫入格式化結果

## 本機開發

1. 安裝相依套件：

```bash
npm install
```

2. 啟動開發伺服器：

```bash
npm run dev
```

3. 開啟：

```txt
http://localhost:3000
```

## 建置與靜態輸出預覽

```bash
npm run build
npm run start
```

本專案在 `next.config.ts` 設定 `output: "export"`，因此正式輸出為 `out/` 目錄下的靜態檔案。

## 環境變數

可在本機建立 `.env.local` 覆蓋設定：

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

正式環境請將 `NEXT_PUBLIC_SITE_URL` 設為最終公開網域，且不要帶結尾斜線 `/`。

## 多語系

- 路由設定：`src/i18n/routing.ts`
- 語系訊息：`messages/*.json`
- 請求解析：`src/i18n/request.ts`

支援語系：

- `zh-TW`（預設）
- `en`
- `vi`

語系路徑範例：

- `/zh-TW/`
- `/en/`
- `/vi/`

## 字體與樣式

- 主要拉丁字體：`src/app/layout.tsx` 透過 `next/font` 載入 `Manrope`
- CJK fallback：`Noto Sans TC`
- 全域樣式入口：`src/app/globals.css`
- Token 對照文件：`src/styles/docs/design-tokens.md`

## 主要目錄

- `src/app/`：路由分段、layout、metadata
- `src/components/`：頁面與共用元件
- `src/styles/`：tokens、utility 與元件 CSS layer
- `src/i18n/`：語系 routing/navigation/request 設定
- `src/lib/`：常數與工具函式
- `messages/`：多語文案

## 團隊規範

進行大型 UI 調整或重構前，先閱讀：

- `AGENTS.md`
- `CODING_STYLE.md`
- `MARKUP_STYLE.md`
