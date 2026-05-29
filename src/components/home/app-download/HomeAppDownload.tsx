import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";

import { AppDownloadCard } from "./AppDownloadCard";
import { APP_DOWNLOAD_OPTIONS } from "./app-download-options";

export function HomeAppDownload() {
  return (
    <section
      id="app-download"
      aria-labelledby="app-download-heading"
      className="text-navy-900 w-full bg-sky-50"
    >
      <SectionPanelLayout shellClassName="flex w-full flex-col gap-6 pt-15 pb-30 tablet:gap-18 tablet:pt-30 tablet:pb-41">
        <div className="layout-grid">
          <div className="tablet:col-span-12 col-span-4">
            <h2
              id="app-download-heading"
              className="typo-h2 text-gradient-app-download-heading tablet:text-5xl tablet:tracking-[0.06em] w-fit"
            >
              準備好匯款了嗎？
            </h2>
            <p className="typo-body3-r text-navy-900 tablet:typo-body1-r tablet:mt-5 mt-4">
              多國匯款一次搞定，每一步都清楚掌握。
            </p>
          </div>
        </div>
        <div className="layout-grid gap-y-5">
          {APP_DOWNLOAD_OPTIONS.map((option, index) => (
            <div key={option.title} className="col-span-4">
              <AppDownloadCard option={option} index={index} />
            </div>
          ))}
        </div>
      </SectionPanelLayout>
    </section>
  );
}
