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
          "flex w-full flex-col",
          "pt-15 pb-30",
          "tablet:pt-30 tablet:pb-41",
        )}
      >
        <h2
          id="app-download-heading"
          className={cn(
            "typo-h2 text-gradient-app-download-heading w-fit",
            "tablet:text-5xl tablet:tracking-[0.06em]",
          )}
        >
          準備好匯款了嗎？
        </h2>
        <p
          className={cn(
            "typo-body3-r text-navy-900 mt-4 max-w-2xl tracking-[0.32px]",
            "tablet:typo-body1-r tablet:mt-5",
          )}
        >
          多國匯款一次搞定，每一步都清楚掌握。
        </p>
        <div className="tablet:grid-cols-3 tablet:mt-18 mt-6 grid grid-cols-1 gap-6">
          {APP_DOWNLOAD_OPTIONS.map((option, index) => (
            <AppDownloadCard key={option.title} option={option} index={index} />
          ))}
        </div>
      </SectionPanelLayout>
    </section>
  );
}
