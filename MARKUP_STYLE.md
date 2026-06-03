# MARKUP_STYLE（AI 切版指引）

本文件定義 **AI 在本專案切版時的標準做法**，重點在：

✅ 快速判斷  
✅ 一致寫法  
✅ 避免常見錯誤  

搭配 `CODING_STYLE.md` 使用。

---

# 🧠 1. AI 切版決策流程（必讀）

```txt
① 這是整頁嗎？
   → 是 → 使用 PageLayout（不可加 layout-shell）
   → 否 → 下一步

② 這是首頁 / 大區塊嗎？
   → 是 → section + SectionPanelLayout
   → 否 → 一般元件（不可用 layout-shell）

③ 有圓角面板 / 漸層嗎？
   → 有 → panelClassName
   → 無 → 直接內容

④ 間距怎麼寫？
   → 4 的倍數 → Tailwind scale
   → 非 4 → arbitrary 或 token

⑤ 字型怎麼寫？
   → 有 typo-* → 一律用
   → breakpoint 不符 → Tailwind text-*

⑥ class 怎麼寫？
   → 有條件 / 衝突 → cn()
   → 靜態 → 直接 className
```

---

# 🧩 2. 版面結構（核心模型）

```txt
PageLayout（整頁）
  └─ section（背景）
        └─ SectionPanelLayout
             ├─ panel（可選）
             │    └─ layout-shell
             │         └─ 內容
             └─（無 panel）
                  └─ layout-shell
                       └─ 內容
```

👉 一句話：

> SectionPanelLayout =「內容容器 + 左右 margin + 可選面板」

---

# 📐 3. RWD（固定規則）

```txt
預設：<1024
tablet: ≥1024
desktop: ≥1440
wide: ≥1560
```

✅ Mobile First  
❌ 禁止自定義 breakpoint

---

# 🎨 4. 視覺規則

## 4.1 字型（必須）

```txt
標題 → typo-h1 ~ h4
內文 → typo-body*
副標 → typo-sub*
```

---

## 4.2 顏色（必須）

```txt
✅ navy-* / sky-* / gray-*
✅ text-foreground / bg-background
```

---

## 4.3 間距（最重要）

```txt
px ÷ 4 = Tailwind 數字
```

| px | class |
|----|-------|
| 60 | 15 |
| 80 | 20 |
| 120 | 30 |
| 140 | 35 |
| 164 | 41 |
| 519 | 129.75 |
| 540 | 135 |
| 800 | 200 |
| 92 | 23 |

**任何情況都不寫 `[XXpx]`，包括寬高、border、圓角、字距等。**

```txt
w-[519px]    ❌ → w-129.75   ✅
border-[32px] ❌ → border-32  ✅
rounded-[100px] ❌ → rounded-full ✅
rounded-[800px] ❌ → rounded-full ✅
text-[14px]  ❌ → text-sm 或 typo-body4-m ✅
tracking-[0.28px] ❌ → 用 typo-* utility ✅
```

---

# 🧱 5. Section 標準寫法

```tsx
<section
  id="section-id"
  aria-labelledby="section-heading"
  className="w-full bg-sky-50"
>
  <SectionPanelLayout
    panelClassName="rounded-5xl [background:var(--gradient-xxx)]"
    shellClassName="flex flex-col gap-18 py-30"
  >
    <h2
      id="section-heading"
      className="typo-h2 text-navy-900"
    >
      標題
    </h2>

    <div className="layout-grid gap-8">
      <article className="tablet:col-span-4">
        內容
      </article>
    </div>
  </SectionPanelLayout>
</section>
```

---

# 🧩 6. cn() 使用規則

## 使用時機

- 有條件 class（`isActive && "…"`、三元）
- 有互斥 class（兩個 `text-*`、variant props）
- class 很長、需要分段閱讀

靜態且短、無條件、無衝突 → 直接 `className="…"`

```tsx
// ✅ 有條件
className={cn(
  "flex w-full items-center gap-2 rounded-xl bg-sky-50 px-4 py-3",
  "typo-body2-m text-navy-900",
  isLast && "rounded-b-2xl",
)}

// ✅ 靜態且短：不用 cn
<span className="typo-body2-m text-navy-900">{title}</span>
```

`cn()` 從 `@/lib/utils` 引入；條件 class 放**最後一個參數**（避免 tailwind-merge 覆寫順序不清）。

---

# 🚫 7. 常見錯誤（禁止）

```txt
❌ PageLayout + layout-shell 疊加
❌ Section 外再包 layout-shell
❌ Panel 內外雙 shell
❌ 背景寫在 shell
❌ text-[13px]、w-[519px]、border-[32px] 等任何 [XXpx] arbitrary 寫法
❌ blue-500
❌ div 當 button / h1
❌ font-bold 覆蓋 typo
```

---

# 🧠 8. 語意 & SEO（固定規則）

```txt
✅ header / main / section / footer
✅ section 要 id + aria-labelledby
✅ 全頁只有一個 h1；heading 不跳級
✅ nav 要 aria-label（主選單 / 頁尾導覽）
✅ img 要 alt；裝飾圖 alt="" + aria-hidden="true"
✅ link 要有意義（不要純「了解更多」）
✅ 站內連結用 <Link>；外部連結用 <a rel="noopener noreferrer">
✅ a 要有真實 href，佔位 href="#" 上線前必須換掉
```

**圖片效能（影響 LCP）**

```txt
Hero 主圖 → priority（不加 loading="lazy"）
首屏以下的圖 → loading="lazy"（next/image 預設）
裝飾圖 → CSS background 或 alt="" + aria-hidden="true"
```

---

# ✅ 9. 切版流程

```txt
1. 判斷 Page / Section / Component
2. 建立 SectionPanelLayout
3. 排版（grid / flex）
4. 套 typo / color
5. 套 spacing（÷4）
6. 加語意標籤
7. 檢查 class / cn
```

---

# ✅ 10. AI 自檢

```txt
□ 有用 SectionPanelLayout
□ 沒有多餘 layout-shell
□ 背景在 section
□ 字型用 typo
□ 間距符合 ÷4
□ 有語意標籤；nav 有 aria-label
□ h1 只有一個；heading 不跳級
□ img 有 alt；Hero 主圖加 priority
□ a 有真實 href；站內用 Link
```
