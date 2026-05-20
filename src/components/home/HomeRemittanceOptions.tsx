import { SectionLayout } from "@/components/layout/SectionLayout";
import { cn } from "@/lib/utils";

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
    >
      <SectionLayout>
        <div
          className={cn(
            "flex w-full flex-col items-start gap-18 self-stretch overflow-hidden",
            "rounded-5xl [background:var(--gradient-remittance-options)]",
            "px-5 pt-15 pb-18",
            "tablet:px-20 tablet:py-30",
          )}
        >
          <div className="flex w-full flex-col items-start">
            <h2
              id="remittance-options-heading"
              className="typo-h2 text-shadow-on-blue text-white"
            >
              多種匯款選擇
            </h2>
            <p className="typo-body2 mt-3 max-w-2xl text-sky-100">
              區塊副標說明（佔位）。
            </p>
          </div>
          <div className="tablet:grid-cols-4 grid w-full grid-cols-1 gap-6">
            {REMITTANCE_OPTION_TITLES.map((title, i) => (
              <RemittanceOptionCard key={title} title={title} index={i} />
            ))}
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
