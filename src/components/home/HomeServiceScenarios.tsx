import { SectionLayout } from "@/components/layout/SectionLayout";

export function HomeServiceScenarios() {
  return (
    <section
      id="service-scenarios"
      aria-labelledby="service-scenarios-heading"
      className="bg-background text-navy-900 w-full"
    >
      <SectionLayout>
        <h2 id="service-scenarios-heading" className="typo-h2 text-navy-900">
          滿足您的各種匯款情境
        </h2>
        <p className="typo-body2 mt-3 max-w-2xl text-gray-600">
          區塊副標說明（佔位）。
        </p>
        <div className="tablet:grid-cols-12 tablet:gap-6 mt-10 grid gap-8">
          <div className="typo-body4 tablet:col-span-3 rounded-(--radius-chip) bg-gray-100 p-6 text-gray-600">
            左側：情境分類／Tabs（佔位）
          </div>
          <div className="text-navy-700 typo-body4 tablet:col-span-5 flex min-h-48 items-center justify-center rounded-(--radius-chip) bg-sky-100">
            中央：情境插圖（佔位）
          </div>
          <div className="bg-navy-50 text-navy-800 typo-body4 tablet:col-span-4 rounded-(--radius-chip) p-6">
            右側：依選項顯示的說明卡（佔位，之後 ServiceDetailCard）
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
