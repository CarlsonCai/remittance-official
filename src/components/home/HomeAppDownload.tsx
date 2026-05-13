export function HomeAppDownload() {
  return (
    <section
      id="app-download"
      aria-labelledby="app-download-heading"
      className="home-section-scaffold bg-background text-navy-900"
    >
      <span className="home-section__dev-label" aria-hidden="true">
        AppDownload
      </span>
      <div className="layout-shell py-16 tablet:py-24">
        <div className="layout-container">
          <h2 id="app-download-heading" className="typo-h2 text-navy-900">
            準備好匯款了嗎？
          </h2>
          <p className="typo-body2 mt-3 max-w-2xl text-gray-600">
            區塊副標說明（佔位）。
          </p>
          <div className="mt-10 grid gap-6 tablet:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <article
                key={i}
                aria-labelledby={`app-card-${i}-title`}
                className="border-navy-100 flex flex-col rounded-xl border bg-white p-6 shadow-sm tablet:p-8"
              >
                <div className="typo-body6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
                  App
                </div>
                <h3
                  id={`app-card-${i}-title`}
                  className="typo-h4 text-navy-900 mt-6 text-center"
                >
                  數位服務 {i + 1}（佔位）
                </h3>
                <p className="typo-body4 mt-2 text-center text-gray-600">
                  簡短說明與 QR、商店徽章將於此補上。
                </p>
                <div className="typo-body6 mt-6 flex aspect-square max-w-40 items-center justify-center self-center rounded-lg bg-gray-200 text-gray-500">
                  QR（佔位）
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
