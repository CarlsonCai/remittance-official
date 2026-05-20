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
      className="w-full"
    >
      {/* 區塊與區塊之間的上下距；左右不包 shell，避免與面板內 80px 疊加 */}
      <div className="tablet:py-20 py-16">
        <div className="layout-container">
          <div
            className={cn(
              "w-full overflow-hidden rounded-5xl",
              "[background:var(--gradient-remittance-options)]",
            )}
          >
            <div
              className={cn(
                "layout-shell flex w-full flex-col items-start gap-18 py-30",
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
          </div>
        </div>
      </div>
    </section>
  );
}
