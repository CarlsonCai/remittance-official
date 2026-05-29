import Image from "next/image";

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
      className="border-navy-100 shadow-s tablet:shadow-l tablet:gap-5 tablet:rounded-[20px] tablet:p-7 flex flex-col gap-4 rounded-xl border bg-white p-5"
    >
      <div className="tablet:gap-5 flex flex-col items-center gap-4">
        <div className="tablet:w-25 tablet:rounded-2xl relative flex aspect-square w-20 shrink-0 flex-col items-start overflow-hidden rounded-[13px] border border-gray-300">
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
            className="typo-sub1-s text-navy-900 tablet:text-2xl tablet:tracking-[0.02em] text-center tracking-[0.02em] capitalize"
          >
            {option.title}
          </h3>
          <p className="typo-body4-m text-navy-900 text-center tracking-[0.02em]">
            {option.description}
          </p>
          <div className="tablet:hidden flex w-full flex-col items-center gap-1 text-center">
            {APP_VERSION_LINES.map((line) => (
              <p
                key={line}
                className="typo-body6-r tracking-[0.02em] text-gray-700"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="tablet:flex hidden w-full items-start gap-6">
        <div className="border-navy-100 flex aspect-square size-25 shrink-0 items-center justify-center rounded-[6.733px] border">
          <div className="relative aspect-square size-22.5">
            <Image
              src={option.qr}
              alt={option.qrAlt}
              fill
              className="object-contain"
              sizes="90px"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
          <p className="typo-body3-m text-navy-900">掃描下載APP</p>
          <div>
            {APP_VERSION_LINES.map((line) => (
              <p
                key={line}
                className="typo-body6-r tracking-[0.02em] text-gray-700"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <AppDownloadStoreButtons
        appTitle={option.title}
        storeUrls={option.storeUrls}
      />
    </article>
  );
}
