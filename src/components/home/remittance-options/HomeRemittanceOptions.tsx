import Image from "next/image";

import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { cn } from "@/lib/utils";

import moneyIllustration from "@/assets/images/service-mega/remittance-options-money.png";
import spark from "@/assets/images/spark.png";
import westernUnionIllustration from "@/assets/images/service-mega/western-union-cutout.png";
import mastercardQsendIllustration from "@/assets/images/service-mega/mastercard-qsend-cutout.png";
import visaDirectIllustration from "@/assets/images/service-mega/visa-direct-cutout.png";
import vipExpressIllustration from "@/assets/images/service-mega/vip-express-cutout.png";
import { RemittanceOptionCard } from "./RemittanceOptionCard";

const REMITTANCE_OPTIONS = [
  {
    number: 1,
    title: "西聯匯款",
    subtitle: "免銀行帳戶，數分鐘內即可領現",
    image: westernUnionIllustration,
    imageAlt: "西聯匯款服務插圖",
  },
  {
    number: 2,
    title: "Mastercard (Q-Send)",
    subtitle: "24小時隨匯隨到，支援全球多國",
    image: mastercardQsendIllustration,
    imageAlt: "Mastercard Q-Send 匯款服務插圖",
  },
  {
    number: 3,
    title: "Visa直接通",
    subtitle: "即時到帳，應援海外緊急支出",
    image: visaDirectIllustration,
    imageAlt: "Visa 直接通匯款服務插圖",
  },
  {
    number: 4,
    title: "大戶速匯",
    subtitle: "換匯讓分最優，大額資金首選",
    image: vipExpressIllustration,
    imageAlt: "大戶速匯匯款服務插圖",
  },
] as const;

export function HomeRemittanceOptions() {
  return (
    <section
      id="remittance-options"
      aria-labelledby="remittance-options-heading"
      className="relative z-10 w-full overflow-x-clip"
    >
      {/* Homepage/Money 金幣插圖 — 162×208px，超出頂部 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-20"
        style={{ right: 60, top: -60, width: 162, height: 208 }}
      >
        <Image
          src={moneyIllustration}
          alt=""
          fill
          className="object-contain"
          sizes="162px"
        />
      </div>

      {/* Spark ×1 — 11×12px */}
      <div
        aria-hidden="true"
        className="animate-twinkle pointer-events-none absolute z-20 [animation-delay:0.5s]"
        style={{ right: 106, top: 77, width: 11, height: 12 }}
      >
        <Image
          src={spark}
          alt=""
          fill
          className="object-contain"
          sizes="11px"
        />
      </div>

      {/* Spark ×2 — 11×12px */}
      <div
        aria-hidden="true"
        className="animate-twinkle pointer-events-none absolute z-20 [animation-delay:1.2s]"
        style={{ right: 156, top: 6, width: 11, height: 12 }}
      >
        <Image
          src={spark}
          alt=""
          fill
          className="object-contain"
          sizes="11px"
        />
      </div>

      {/* Background/Circle 圓形光暈 — 800×800px，右下角 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 overflow-hidden"
        style={{ right: -345, bottom: -308, width: 800, height: 800 }}
      >
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-full"
        >
          <circle
            opacity="0.2"
            cx="400"
            cy="400"
            r="384"
            stroke="white"
            strokeWidth="32"
          />
        </svg>
      </div>

      {/* Line / White 右大 — 4×80px */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-20 w-1 rounded-full bg-gradient-to-b from-white/60 to-transparent"
        style={{ right: 60, top: 217 }}
      />
      {/* Line / White 右小 — 3×60px */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-15 w-0.75 rounded-full bg-gradient-to-b from-white/60 to-transparent"
        style={{ right: 86, top: 255 }}
      />
      {/* Line / White 左大 — 4×80px */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-20 w-1 rounded-full bg-gradient-to-b from-white/60 to-transparent"
        style={{ left: 40, top: 733 }}
      />
      {/* Line / White 左小 — 3×60px */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-15 w-0.75 rounded-full bg-gradient-to-b from-white/60 to-transparent"
        style={{ left: 68, top: 783 }}
      />
      <SectionPanelLayout
        panelClassName={cn(
          "tablet:rounded-5xl rounded-4xl",
          "[background:var(--gradient-remittance-options)]",
        )}
        shellClassName={cn(
          "flex w-full flex-col gap-6 pt-15 pb-18",
          "tablet:gap-18 tablet:py-30",
        )}
      >
        <div className="layout-grid">
          <div className="tablet:col-span-12 col-span-4">
            <h2
              id="remittance-options-heading"
              className="typo-h2 text-shadow-on-blue text-white"
            >
              多種匯款選擇
            </h2>
            <p className="typo-body3-r tablet:typo-body1-r tablet:mt-3 mt-4 text-white">
              不論是給孩子的一份心意、家人的緊急需求，或是個人的全球資產調度，給在異鄉的您最即時的支援。
            </p>
          </div>
        </div>
        <div className="layout-grid items-start">
          {REMITTANCE_OPTIONS.map((option, index) => (
            <div
              key={option.number}
              className={cn(
                "tablet:col-span-3 col-span-4",
                (index === 1 || index === 3) && "tablet:mt-15",
              )}
            >
              <RemittanceOptionCard
                number={option.number}
                title={option.title}
                subtitle={option.subtitle}
                image={option.image}
                imageAlt={option.imageAlt}
                index={index}
              />
            </div>
          ))}
        </div>
      </SectionPanelLayout>
    </section>
  );
}
