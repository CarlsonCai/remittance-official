export function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="home-section-scaffold text-navy-900 bg-sky-50"
    >
      <span className="home-section__dev-label" aria-hidden="true">
        Hero
      </span>
      <div className="layout-shell py-16 min-[1024px]:py-24">
        <div className="layout-container">
          <div className="max-w-2xl">
            <h1 id="hero-heading" className="typo-h1 text-navy-900">
              永豐銀行跨境匯款（主標題佔位）
            </h1>
            <p className="text-navy-700 typo-sub1-m mt-4">
              副標題與價值主張文案將於此區補上。
            </p>
            <p className="mt-8">
              <span className="bg-navy-600 typo-body3-b inline-flex rounded-lg px-6 py-3 text-white">
                主要行動按鈕（佔位）
              </span>
            </p>
          </div>
          <div
            className="border-navy-200 bg-background text-navy-900 mt-12 rounded-xl border p-6 shadow-sm min-[1024px]:mt-16 min-[1024px]:p-8"
            role="region"
            aria-label="快速匯率試算（建置中）"
          >
            <p className="typo-h4 text-navy-900">快速匯率試算</p>
            <p className="typo-body4 mt-2 text-gray-600">
              幣別選擇、金額輸入與試算按鈕將於此區實作（ExchangeRateCalculator）。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
