import Image from "next/image";

import appDownloadKv from "@/assets/images/app-download/app-download-kv.png";
import spark from "@/assets/images/spark.png";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";

import { AppDownloadCard } from "./AppDownloadCard";
import { PageTopButton } from "./PageTopButton";
import { APP_DOWNLOAD_OPTIONS } from "./app-download-options";

export function HomeAppDownload() {
  return (
    <section
      id="app-download"
      aria-labelledby="app-download-heading"
      className="text-navy-900 relative w-full overflow-x-clip bg-sky-50"
    >
      {/* 左光暈裝飾 — mobile: 400×400 / desktop: 800×800 */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 size-100 [background:var(--gradient-app-download-glow)]"
        style={{ left: -200, bottom: 262.63 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 size-200 [background:var(--gradient-app-download-glow)]"
        style={{ left: -400, top: 0 }}
      />

      {/* 右光暈裝飾 — mobile: 400×400 / desktop: 800×800 */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 size-100 [background:var(--gradient-app-download-glow)]"
        style={{ right: -201, top: 89.38 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 size-200 [background:var(--gradient-app-download-glow)]"
        style={{ right: -443, bottom: -180 }}
      />

      {/* 左下大圓裝飾 — mobile: 400×400 / desktop: 800×800 */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 size-100 shrink-0 rounded-full border-16 border-sky-100 opacity-70"
        style={{ left: -165, bottom: -220.37 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 size-200 shrink-0 rounded-full border-32 border-sky-100 opacity-70"
        style={{ left: -206, bottom: -502 }}
      />

      {/* Line / Blue 右上 — mobile */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 51, top: 36.38 }}
      />
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 h-12 w-0.75 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 33, top: 16.38 }}
      />

      {/* Line / Blue 右上 — desktop */}
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 h-20 w-1.5 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 277, top: 101.75 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 249, top: 68.75 }}
      />

      {/* Line / Blue 左下 — mobile */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 47, bottom: 38.63 }}
      />
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 h-12 w-0.75 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 28, bottom: 30.63 }}
      />

      {/* Line / Blue 左下 — desktop */}
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 h-20 w-1.5 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 108, bottom: 40.25 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block hidden pointer-events-none absolute z-0 h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 80, bottom: 24.25 }}
      />

      {/* Spark 閃光裝飾 ×2 */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-10 hidden"
        style={{ right: 81, top: 81.75, width: 13, height: 14 }}
      >
        <Image src={spark} alt="" fill className="object-contain" sizes="13px" />
      </div>
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-10 hidden"
        style={{ right: 180, top: 228.75, width: 13, height: 14 }}
      >
        <Image src={spark} alt="" fill className="object-contain" sizes="13px" />
      </div>

      {/* KV illustration */}
      <div
        className="tablet:block absolute top-22.5 right-10 z-10 hidden h-45 w-42"
        aria-hidden="true"
      >
        <Image
          src={appDownloadKv}
          alt=""
          fill
          className="object-contain"
          sizes="168px"
        />
      </div>

      {/* Page Top button */}
      <PageTopButton />

      <SectionPanelLayout shellClassName="relative z-10 flex w-full flex-col gap-6 pt-15 pb-30 tablet:gap-18 tablet:pt-30 tablet:pb-41">
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
