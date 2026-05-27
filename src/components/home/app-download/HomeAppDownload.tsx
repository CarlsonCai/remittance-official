import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { cn } from "@/lib/utils";

import { AppDownloadCard } from "./AppDownloadCard";
import { APP_DOWNLOAD_OPTIONS } from "./app-download-options";

export function HomeAppDownload() {
  return (
    <section
      id="app-download"
      aria-labelledby="app-download-heading"
      className="text-navy-900 w-full bg-sky-50"
    >
      <SectionPanelLayout
        shellClassName={cn(
          "flex w-full flex-col gap-6 pt-15 pb-30",
          "tablet:gap-18 tablet:pt-30 tablet:pb-41",
        )}
      >
        <div className="layout-grid">
          <div className="col-span-4 tablet:col-span-12">
            <h2
              id="app-download-heading"
              className="typo-h2 text-gradient-app-download-heading w-fit"
            >
              準備好匯款了嗎？
            </h2>
            <p
              className={cn(
                "typo-body3-r text-navy-900 mt-4 tracking-[0.32px]",
                "tablet:typo-body1-r tablet:mt-5",
              )}
            >
              多國匯款一次搞定，每一步都清楚掌握。
            </p>
          </div>
        </div>
        <div className="layout-grid">
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
