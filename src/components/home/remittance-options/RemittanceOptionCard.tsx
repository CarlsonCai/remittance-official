import Image, { type StaticImageData } from "next/image";

import ChevronRightSvg from "@/assets/icons/chevron-right.svg";
import { cn } from "@/lib/utils";

type RemittanceOptionCardProps = {
  number: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  index: number;
  className?: string;
};

export function RemittanceOptionCard({
  number,
  title,
  subtitle,
  image,
  imageAlt,
  index,
  className,
}: RemittanceOptionCardProps) {
  const numberLabel = String(number).padStart(2, "0");

  return (
    <article
      aria-labelledby={`remittance-option-${index}-title`}
      className={cn(
        "border-navy-100 flex w-full min-w-0 flex-col border bg-white",
        "shadow-s rounded-[24px_12px] p-4",
        "tablet:self-start tablet:rounded-[36px_24px] tablet:p-6 tablet:shadow-l",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-row items-start gap-[12px]",
          "tablet:flex-col tablet:gap-0",
        )}
      >
        <div className="tablet:flex-none flex min-w-0 flex-1 flex-col items-start gap-2">
          <div
            className={cn(
              "flex w-[26px] shrink-0 flex-col items-center justify-center rounded-lg bg-sky-600 p-1 text-white",
              "typo-body6-m tablet:typo-body5 leading-none",
              "tablet:w-10 tablet:rounded-xl tablet:p-2",
            )}
            aria-hidden
          >
            {numberLabel}
          </div>

          <h3
            id={`remittance-option-${index}-title`}
            className={cn(
              "typo-sub1-s text-navy-900 capitalize",
              "max-[1023px]:tracking-[0.4px]",
            )}
          >
            {title}
          </h3>

          <p className={cn("typo-body3-m text-navy-900 tracking-[0.32px]")}>
            {subtitle}
          </p>
        </div>

        <div
          className={cn(
            "flex shrink-0 flex-row items-center gap-[10px] rounded-lg bg-sky-50",
            "tablet:mt-5 tablet:w-full tablet:flex-col tablet:gap-2.5 tablet:self-stretch tablet:rounded-xl",
          )}
        >
          <div
            className={cn(
              "relative aspect-square size-[120px] shrink-0",
              "tablet:flex tablet:size-auto tablet:aspect-auto tablet:min-h-0 tablet:w-full tablet:flex-col tablet:items-center tablet:gap-2.5 tablet:rounded-xl tablet:bg-sky-50",
            )}
          >
            <div className="tablet:w-full tablet:max-w-[min(100%,200px)] tablet:shrink-0 relative aspect-square size-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1023px) 120px, 25vw"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className={cn(
          "typo-body2-m text-navy-500 tablet:mt-5 tablet:inline-flex hidden items-center gap-1 self-end",
          "focus-visible:ring-navy-500 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        )}
      >
        <span className="sr-only">{title}：</span>
        查看方案
        <ChevronRightSvg className="size-5 shrink-0" aria-hidden="true" />
      </a>
    </article>
  );
}
