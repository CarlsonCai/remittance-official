import Image from "next/image";

import { cn } from "@/lib/utils";

import { AppDownloadStoreButtons } from "./AppDownloadStoreButtons";
import type { AppDownloadOption } from "./app-download-options";
import { APP_VERSION_LINES } from "./app-download-options";

type AppDownloadCardProps = {
  option: AppDownloadOption;
  index: number;
};

export function AppDownloadCard({ option, index }: AppDownloadCardProps) {
  return (
    <article
      aria-labelledby={`app-card-${index}-title`}
      className={cn(
        "border-navy-100 shadow-l flex flex-col gap-4 rounded-[20px] border bg-white p-5",
        "tablet:gap-5 tablet:p-7",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-4",
          "tablet:gap-5",
        )}
      >
        <div
          className={cn(
            "relative flex aspect-square w-20 shrink-0 flex-col items-start overflow-hidden rounded-[13px] border border-gray-300",
            "tablet:w-[100px] tablet:rounded-2xl",
          )}
        >
          <Image
            src={option.icon}
            alt={option.iconAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 80px, 100px"
          />
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <h3
            id={`app-card-${index}-title`}
            className={cn(
              "typo-sub1-s text-navy-900 text-center capitalize tracking-[0.4px]",
              "tablet:text-2xl tablet:tracking-[0.48px]",
            )}
          >
            {option.title}
          </h3>
          <p className="typo-body4-m text-navy-900 text-center tracking-[0.28px]">
            {option.description}
          </p>
          <div
            className={cn(
              "flex w-full flex-col items-center gap-1 text-center",
              "tablet:hidden",
            )}
          >
            {APP_VERSION_LINES.map((line) => (
              <p
                key={line}
                className="typo-body6-r tracking-[0.24px] text-gray-700"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden w-full items-start gap-6 tablet:flex">
        <div
          className={cn(
            "border-navy-100 flex aspect-square size-[100px] shrink-0 items-center justify-center rounded-[6.733px] border",
          )}
        >
          <div className="relative aspect-square size-[90px]">
            <Image
              src={option.qr}
              alt={option.qrAlt}
              fill
              className="object-contain"
              sizes="90px"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p
            className={cn(
              "typo-body3-m text-navy-900 tracking-[0.32px]",
              "tablet:typo-body2-m tablet:tracking-[0.36px]",
            )}
          >
            掃描下載APP
          </p>
          {APP_VERSION_LINES.map((line) => (
            <p
              key={line}
              className="typo-body6-r tracking-[0.24px] text-gray-700"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <AppDownloadStoreButtons
        appTitle={option.title}
        storeUrls={option.storeUrls}
      />
    </article>
  );
}
