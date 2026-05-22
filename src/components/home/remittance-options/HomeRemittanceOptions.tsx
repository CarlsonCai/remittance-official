import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { cn } from "@/lib/utils";

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
      className="w-full"
    >
      <SectionPanelLayout
        panelClassName={cn(
          "tablet:rounded-5xl rounded-4xl",
          "[background:var(--gradient-remittance-options)]",
        )}
        shellClassName={cn(
          "flex w-full flex-col items-start gap-6 self-stretch pt-15 pb-[72px]",
          "tablet:gap-18 tablet:py-30",
        )}
      >
        <div className="flex w-full flex-col items-start">
          <h2
            id="remittance-options-heading"
            className={cn(
              "typo-h2 text-shadow-on-blue text-white",
              "max-[1023px]:tracking-[1.12px]",
            )}
          >
            多種匯款選擇
          </h2>
          <p
            className={cn(
              "typo-body3-r tablet:typo-body1-r tablet:mt-3 mt-4 text-white",
            )}
          >
            不論是給孩子的一份心意、家人的緊急需求，或是個人的全球資產調度，給在異鄉的您最即時的支援。
          </p>
        </div>
        <div className="tablet:grid-cols-[repeat(4,minmax(0,1fr))] grid w-full grid-cols-1 items-start gap-6">
          {REMITTANCE_OPTIONS.map((option, index) => (
            <RemittanceOptionCard
              key={option.number}
              number={option.number}
              title={option.title}
              subtitle={option.subtitle}
              image={option.image}
              imageAlt={option.imageAlt}
              index={index}
              className={
                index === 1 || index === 3 ? "tablet:mt-15" : undefined
              }
            />
          ))}
        </div>
      </SectionPanelLayout>
    </section>
  );
}
