import { SectionLayout } from "@/components/layout/SectionLayout";

export function HomeRemittanceGuide() {
  return (
    <section
      id="remittance-guide"
      aria-labelledby="remittance-guide-heading"
      className="bg-background text-navy-900 w-full"
    >
      <SectionLayout>
        <h2 id="remittance-guide-heading" className="typo-h2 text-navy-900">
          匯款指南
        </h2>
        <p className="typo-body2 mt-3 max-w-2xl text-gray-600">
          區塊副標說明（佔位）。
        </p>
        <div className="tablet:grid-cols-12 mt-10 grid gap-8">
          <aside className="tablet:col-span-3" aria-label="指南分類">
            <p className="typo-body4-m text-navy-900">分類篩選</p>
            <ul className="mt-4 space-y-2">
              <li className="bg-navy-600 typo-body5 rounded-(--radius-chip) px-4 py-2 text-white">
                分類一（佔位）
              </li>
              <li className="typo-body5 rounded-(--radius-chip) bg-gray-100 px-4 py-2 text-gray-600">
                分類二（佔位）
              </li>
              <li className="typo-body5 rounded-(--radius-chip) bg-gray-100 px-4 py-2 text-gray-600">
                分類三（佔位）
              </li>
            </ul>
          </aside>
          <div className="tablet:col-span-9 tablet:grid-cols-2 grid grid-cols-1 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <article
                key={i}
                aria-labelledby={`guide-card-${i}-title`}
                className="border-navy-100 overflow-hidden rounded-(--radius-card) border bg-white"
              >
                <div className="typo-body5 flex aspect-video items-center justify-center bg-gray-200 text-gray-500">
                  縮圖（佔位）
                </div>
                <div className="p-5">
                  <h3
                    id={`guide-card-${i}-title`}
                    className="typo-h4 text-navy-900"
                  >
                    指南文章標題 {i + 1}（佔位）
                  </h3>
                  <p className="typo-body5-m mt-3 text-sky-600">
                    閱讀全文（佔位）
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
