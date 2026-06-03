import Image from "next/image";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { ViewMoreButton } from "@/components/ui/ViewMoreButton";

import newsImage1 from "@/assets/images/latest-news/latest-news-1.png";
import newsImage2 from "@/assets/images/latest-news/latest-news-2.png";
import newsImage3 from "@/assets/images/latest-news/latest-news-3.png";
import newsKv from "@/assets/images/latest-news/latest-news-kv.png";
import spark from "@/assets/images/spark.png";

const NEWS_IMAGES = [newsImage1, newsImage2, newsImage3];

export function HomeLatestNews() {
  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-heading"
      className="text-navy-900 relative z-10 w-full bg-sky-50/80"
    >
      <SectionPanelLayout
        panelClassName="rounded-5xl bg-sky-100"
        shellClassName="pt-35 pb-35"
      >
        {/* Homepage/News KV 插圖 — 345×192px，左下角 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-48"
          style={{ left: 80, bottom: 0, width: 345 }}
        >
          <Image
            src={newsKv}
            alt=""
            fill
            className="object-contain object-bottom"
            sizes="345px"
          />
        </div>
        {/* Spark 裝飾 ×1 — 13×14px */}
        <div
          aria-hidden="true"
          className="animate-twinkle pointer-events-none absolute z-0"
          style={{ left: 372, bottom: 171, width: 13, height: 14 }}
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
          className="animate-twinkle pointer-events-none absolute z-0 [animation-delay:0.7s]"
          style={{ left: 189, bottom: 157, width: 13, height: 14 }}
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
          className="pointer-events-none absolute z-0 h-20 w-1.5 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
          style={{ right: 108, top: 32.75 }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-15 w-1 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
          style={{ right: 80, top: 68.75 }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-20 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
          style={{ left: 434, top: "calc(50% + 122.75px)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 h-15 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-200 to-transparent"
          style={{ left: 406, top: "calc(50% + 148.75px)" }}
        />

        <div className="layout-grid items-start gap-y-8">
          <aside className="col-span-4" aria-label="消息分類">
            <h2
              id="latest-news-heading"
              className="typo-h2 text-gradient-latest-news-heading w-fit"
            >
              最新消息
            </h2>
            <p className="typo-body1-r text-navy-900 tablet:mt-5 tablet:max-w-[87.5%] mt-4">
              提供即時的優惠訊息或重要公告，分享永豐跨境匯款服務的最新動態。
            </p>
            <ul className="tablet:flex-col tablet:mt-12 mt-6 flex flex-wrap gap-2">
              <li>
                <button
                  type="button"
                  className="bg-navy-500 typo-body2-m inline-flex items-center justify-center gap-2.5 rounded-lg px-4 py-2 text-center text-white"
                >
                  優惠訊息
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="border-navy-100 typo-body2-m text-navy-500 inline-flex items-center justify-center gap-2.5 rounded-lg border bg-white px-4 py-2 text-center"
                >
                  重要公告
                </button>
              </li>
            </ul>
            <Button
              size="lg"
              iconRight={<ArrowRightSvg width={24} height={24} />}
              className="tablet:inline-flex mt-12 hidden"
            >
              閱讀更多
            </Button>
          </aside>
          <div className="tablet:col-span-8 col-span-4 flex min-w-0 flex-col gap-8">
            <ul className="w-full space-y-4">
              {NEWS_IMAGES.map((img, i) => (
                <li key={i}>
                  <article
                    aria-labelledby={`news-item-${i}-title`}
                    className="border-navy-100 tablet:flex-row tablet:items-start tablet:gap-6 flex flex-col gap-4 self-stretch rounded-xl"
                  >
                    <div className="tablet:w-[302px] relative flex aspect-[3/2] w-full shrink-0 flex-col items-start overflow-hidden rounded-lg">
                      <Image src={img} alt="" fill className="object-cover" />
                      <div
                        className="absolute inset-0 rounded-lg bg-sky-500/5"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="typo-body6 flex w-full items-center">
                        <Tag>大戶速匯</Tag>

                        <time
                          className="typo-body4-m text-navy-500 ml-5 overflow-hidden text-ellipsis"
                          dateTime="2026-01-01"
                        >
                          2026.01.01
                        </time>

                        <ViewMoreButton className="tablet:hidden ml-auto" />
                      </p>
                      <h3
                        id={`news-item-${i}-title`}
                        className="typo-body1-m text-navy-900 mt-4 truncate"
                      >
                        春季匯款大賞，西聯匯款手續費8折，指定國家再享匯率減讓
                      </h3>
                      <p className="typo-body3-r tablet:line-clamp-2 mt-4 hidden">
                        手續費、電報費怎麼算?
                        幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。手續費、電報費怎麼算?
                        幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。
                      </p>
                      <ViewMoreButton className="tablet:inline-flex mt-4 hidden self-end" />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <div className="tablet:hidden flex w-full justify-center">
              <Button
                size="sm"
                iconRight={<ArrowRightSvg width={24} height={24} />}
              >
                閱讀更多
              </Button>
            </div>
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
