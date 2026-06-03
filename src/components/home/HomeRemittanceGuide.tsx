import Image from "next/image";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { Tag } from "@/components/ui/Tag";
import { ViewMoreButton } from "@/components/ui/ViewMoreButton";
import { cn } from "@/lib/utils";

import newsImage1 from "@/assets/images/latest-news/latest-news-1.png";
import newsImage2 from "@/assets/images/latest-news/latest-news-2.png";
import newsImage3 from "@/assets/images/latest-news/latest-news-3.png";
import guideBook from "@/assets/images/remittance-guide/remittance-guide-book.png";
import guideTransfer from "@/assets/images/remittance-guide/remittance-guide-transfer.png";
import spark from "@/assets/images/spark.png";

const GUIDE_IMAGES = [newsImage1, newsImage2, newsImage3, newsImage1];

const GUIDE_CATEGORIES = [
  "西聯匯款",
  "Mastercard(Q-Send)",
  "Visa直接通",
  "大戶速匯",
  "通用指南",
] as const;

const GUIDE_CARDS = [0, 1, 2, 3];

export function HomeRemittanceGuide() {
  return (
    <section
      id="remittance-guide"
      aria-labelledby="remittance-guide-heading"
      className="relative z-20 w-full overflow-x-clip"
    >
      {/* 左側放射光暈裝飾 — 800×800 */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-0 hidden size-200 [background:var(--gradient-app-download-glow)]"
        style={{ left: -400, top: 82 }}
      />

      {/* 左下放射光暈裝飾（手機專用）— 400×400 */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 flex size-100 items-center justify-center [background:var(--gradient-app-download-glow)]"
        style={{ left: -200, bottom: 74.625 }}
      />

      {/* 右側放射光暈裝飾 — 800×800（tablet+） */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-0 hidden size-200 [background:var(--gradient-app-download-glow)]"
        style={{ right: -443, bottom: 160.25 }}
      />

      {/* 右側放射光暈裝飾（手機專用）— 400×400 */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-0 flex size-100 items-center justify-center [background:var(--gradient-app-download-glow)]"
        style={{ right: -201, top: 99 }}
      />

      {/* Homepage/Book 書本插圖 — 154×122px，超出頂部（tablet+） */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-10 hidden"
        style={{ left: 90, top: -42, width: 154, height: 122 }}
      >
        <Image
          src={guideBook}
          alt=""
          fill
          className="object-contain"
          sizes="154px"
        />
      </div>

      {/* Homepage/Book 書本插圖 — 400×400px，右下（手機專用） */}
      <div
        aria-hidden="true"
        className="tablet:hidden pointer-events-none absolute z-10 flex size-100 items-center justify-center"
        style={{ right: 20, top: -30, width: 117, height: 93 }}
      >
        <Image
          src={guideBook}
          alt=""
          fill
          className="object-contain"
          sizes="400px"
        />
      </div>

      {/* Homepage/Transfer 轉帳插圖 — 332×193px */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-0 hidden"
        style={{ left: 48, bottom: 193.25, width: 332, height: 193 }}
      >
        <Image
          src={guideTransfer}
          alt=""
          fill
          className="object-contain"
          sizes="332px"
        />
      </div>

      {/* Spark 裝飾 ×1 — 13×14px */}
      <div
        aria-hidden="true"
        className="animate-twinkle tablet:block pointer-events-none absolute z-0 hidden [animation-delay:0.3s]"
        style={{ left: 263, bottom: 337.25, width: 13, height: 14 }}
      >
        <Image
          src={spark}
          alt=""
          fill
          className="object-contain"
          sizes="13px"
        />
      </div>

      {/* Spark 裝飾 ×2 — 13×14px */}
      <div
        aria-hidden="true"
        className="animate-twinkle tablet:block pointer-events-none absolute z-0 hidden [animation-delay:1s]"
        style={{ left: 132, bottom: 239.25, width: 13, height: 14 }}
      >
        <Image
          src={spark}
          alt=""
          fill
          className="object-contain"
          sizes="13px"
        />
      </div>

      {/* Line / Blue 裝飾線條 */}
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-0 hidden h-20 w-1.5 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 108, top: 32 }}
      />
      <div
        aria-hidden="true"
        className="tablet:block pointer-events-none absolute z-0 hidden h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ right: 80, top: 68 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-20 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 434, top: "calc(50% + 77.37px)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 h-15 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
        style={{ left: 406, top: "calc(50% + 103.37px)" }}
      />

      {/* Marquee 跑馬燈 — "Together, a better life." 水平捲動 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 z-0 w-full overflow-hidden"
      >
        <div className="animate-marquee tablet:text-[9.375rem] flex w-max gap-10 text-[4rem] leading-[1.3] font-bold whitespace-nowrap text-sky-100">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>Together, a better life.</span>
          ))}
        </div>
      </div>

      <SectionPanelLayout
        panelClassName="rounded-5xl"
        shellClassName={cn(
          "relative z-10 pt-15 pb-25",
          "tablet:pt-35 tablet:pb-60",
        )}
      >
        <div className="layout-grid items-start gap-y-8">
          <aside className="col-span-4" aria-label="指南分類">
            <h2
              id="remittance-guide-heading"
              className="typo-h2 text-gradient-latest-news-heading w-fit"
            >
              匯款指南
            </h2>
            <p className="typo-body1-r text-navy-900 tablet:mt-5 tablet:max-w-[87.5%] mt-4">
              掌握國際趨勢，匯款知識與優惠訊息不漏接，讓每一分心意準確送達。
            </p>
            <ul className="tablet:mt-12 tablet:flex-col mt-6 flex flex-wrap gap-2">
              {GUIDE_CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center justify-center gap-2.5 rounded-lg px-4 py-2 text-center",
                      "typo-body2-m border-navy-100 text-navy-500 border bg-white",
                    )}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="bg-navy-500 tablet:inline-flex mt-12 hidden items-center justify-center gap-2 rounded-xl py-4 pr-4 pl-5"
            >
              <span className="typo-body1-b text-white">閱讀更多</span>
              <ArrowRightSvg width={24} height={24} className="text-white" />
            </button>
          </aside>

          <div className="tablet:col-span-8 col-span-4 flex min-w-0 flex-col gap-8">
            <ul className="tablet:grid-cols-2 grid grid-cols-1 gap-6">
              {GUIDE_CARDS.map((i) => (
                <li key={i}>
                  <article
                    aria-labelledby={`guide-card-${i}-title`}
                    className="flex flex-col gap-6"
                  >
                    {/* Img+Text */}
                    <div className="flex flex-col gap-3">
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                        <Image
                          src={GUIDE_IMAGES[i]}
                          alt=""
                          fill
                          className="object-cover"
                        />
                        {/* 藍色半透明疊層 */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-2xl"
                          style={{ background: "rgba(44,161,254,0.05)" }}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3
                          id={`guide-card-${i}-title`}
                          className="typo-body1-m text-navy-900 truncate"
                        >
                          海外匯款全攻略，從新手到專家的省錢秘笈海外匯款全攻略，從新手到專家的省錢秘笈
                        </h3>
                        <p className="typo-body3-r text-navy-900 tablet:block line-clamp-2 hidden">
                          手續費、電報費怎麼算?
                          幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。手續費、電報費怎麼算?
                          幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。
                        </p>
                      </div>
                    </div>
                    {/* Tag+ViewMore */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Tag>西聯匯款</Tag>
                        <Tag>大戶速匯</Tag>
                      </div>
                      <ViewMoreButton />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <div className="tablet:hidden flex w-full justify-center">
              <button
                type="button"
                className="bg-navy-500 inline-flex items-center justify-center gap-2 rounded-xl py-4 pr-4 pl-5"
              >
                <span className="typo-body1-b text-white">閱讀更多</span>
                <ArrowRightSvg width={24} height={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
