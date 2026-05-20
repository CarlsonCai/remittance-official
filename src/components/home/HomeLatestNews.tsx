import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";

export function HomeLatestNews() {
  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-heading"
      className="text-navy-900 w-full bg-sky-50/80"
    >
      <SectionPanelLayout>
        <h2 id="latest-news-heading" className="typo-h2 text-navy-900">
          最新消息
        </h2>
        <p className="typo-body2 mt-3 max-w-2xl text-gray-600">
          區塊副標說明（佔位）。
        </p>
        <div className="tablet:grid-cols-12 mt-10 grid gap-8">
          <aside className="tablet:col-span-3" aria-label="消息分類">
            <p className="typo-body4-m text-navy-900">篩選</p>
            <ul className="tablet:flex-col mt-4 flex flex-wrap gap-2">
              <li>
                <span className="bg-navy-600 typo-body5 inline-block rounded-full px-4 py-2 text-white">
                  新訊息（佔位）
                </span>
              </li>
              <li>
                <span className="typo-body5 inline-block rounded-full bg-white px-4 py-2 text-gray-600 ring-1 ring-gray-300">
                  公告（佔位）
                </span>
              </li>
            </ul>
          </aside>
          <ul className="tablet:col-span-9 space-y-4">
            {[0, 1, 2].map((i) => (
              <li key={i}>
                <article
                  aria-labelledby={`news-item-${i}-title`}
                  className="border-navy-100 bg-background tablet:gap-6 tablet:p-6 flex gap-4 rounded-xl border p-4"
                >
                  <div className="typo-body6 tablet:h-(--size-news-thumb-height-md) tablet:w-(--size-news-thumb-width-md) flex h-20 w-(--size-news-thumb-width) shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
                    圖
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="typo-body6 text-gray-500">
                      <time dateTime="2026-01-01">2026.01.01</time>
                      <span className="mx-2" aria-hidden="true">
                        ·
                      </span>
                      <span>分類標籤</span>
                    </p>
                    <h3
                      id={`news-item-${i}-title`}
                      className="typo-h4 text-navy-900 mt-1"
                    >
                      新聞標題 {i + 1}（佔位）
                    </h3>
                    <p className="typo-body5-m mt-2 text-sky-600">
                      閱讀全文（佔位）
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
