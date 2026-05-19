import { SectionLayout } from "@/components/layout/SectionLayout";

import { RemittanceOptionCard } from "./RemittanceOptionCard";

const REMITTANCE_OPTION_TITLES = [
  "Western Union（佔位）",
  "Mastercard（Q-Send）（佔位）",
  "Visa Direct（佔位）",
  "大戶速匯（佔位）",
];

export function HomeRemittanceOptions() {
  return (
    <section
      id="remittance-options"
      aria-labelledby="remittance-options-heading"
      className="bg-navy-600 w-full text-white"
    >
      <SectionLayout>
        <h2
          id="remittance-options-heading"
          className="typo-h2 text-shadow-on-blue text-white"
        >
          多種匯款選擇
        </h2>
        <p className="typo-body2 mt-3 max-w-2xl text-sky-100">
          區塊副標說明（佔位）。
        </p>
        <div className="tablet:grid-cols-4 mt-10 grid grid-cols-1 gap-6">
          {REMITTANCE_OPTION_TITLES.map((title, i) => (
            <RemittanceOptionCard key={title} title={title} index={i} />
          ))}
        </div>
      </SectionLayout>
    </section>
  );
}
