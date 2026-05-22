import Image from "next/image";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { cn } from "@/lib/utils";

import newsImage1 from "@/assets/images/latest-news/latest-news-1.png";
import newsImage2 from "@/assets/images/latest-news/latest-news-2.png";
import newsImage3 from "@/assets/images/latest-news/latest-news-3.png";

const NEWS_IMAGES = [newsImage1, newsImage2, newsImage3];

export function HomeLatestNews() {
  return (
    <section
      id="latest-news"
      aria-labelledby="latest-news-heading"
      className="text-navy-900 w-full bg-sky-50/80"
    >
      <SectionPanelLayout
        panelClassName="rounded-5xl bg-sky-100"
        shellClassName={cn(
          "flex flex-col items-start gap-8 pt-15 pb-40",
          "tablet:flex-row tablet:gap-18",
        )}
      >
        <aside
          className="tablet:w-1/4 tablet:shrink-0 w-full"
          aria-label="消息分類"
        >
          <h2
            id="latest-news-heading"
            className="typo-h2 text-gradient-latest-news-heading w-fit"
          >
            最新消息
          </h2>
          <p className="typo-body3-r tablet:mt-5 text-navy-900 mt-4 max-w-2xl">
            提供即時的優惠訊息或重要公告，分享永豐跨境匯款服務的最新動態。
          </p>
          <ul className="tablet:flex-col tablet:mt-12 mt-6 flex flex-wrap gap-2">
            <li>
              <span className="bg-navy-500 typo-body2-m inline-flex items-center justify-center gap-2.5 rounded-lg px-4 py-2 text-center text-white">
                優惠訊息
              </span>
            </li>
            <li>
              <span className="border-navy-100 typo-body2-m text-navy-500 inline-flex items-center justify-center gap-2.5 rounded-lg border bg-white px-4 py-2 text-center">
                重要公告
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="bg-navy-500 typo-body1-b tablet:inline-flex mt-12 hidden items-center justify-center gap-2 rounded-xl py-4 pr-4 pl-5 text-white"
          >
            閱讀更多
            <ArrowRightIcon size={24} className="text-white" />
          </button>
        </aside>
        <div className="flex w-full min-w-0 flex-1 flex-col gap-8">
          <ul className="w-full space-y-4">
            {NEWS_IMAGES.map((img, i) => (
              <li key={i}>
                <article
                  aria-labelledby={`news-item-${i}-title`}
                  className="border-navy-100 tablet:flex-row tablet:items-start tablet:gap-6 flex flex-col gap-4 self-stretch rounded-xl"
                >
                  <div className="tablet:w-(--size-remittance-option-card-width) relative flex aspect-[3/2] w-full shrink-0 flex-col items-start overflow-hidden rounded-lg">
                    <Image src={img} alt="" fill className="object-cover" />
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(44, 161, 254, 0.05)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="typo-body6 flex w-full items-center">
                      <span className="border-navy-100 typo-body5-m text-navy-500 inline-flex items-center justify-center gap-2.5 rounded-lg border bg-white px-3 py-2 text-center tracking-[0.26px]">
                        大戶速匯
                      </span>

                      <time
                        className="text-navy-500 ml-5 overflow-hidden text-ellipsis text-sm font-medium leading-[130%] tracking-[0.28px]"
                        dateTime="2026-01-01"
                      >
                        2026.01.01
                      </time>

                      <button
                        type="button"
                        className="text-navy-500 ml-auto inline-flex items-center gap-1 text-sm leading-[140%] font-medium tracking-[0.28px] capitalize tablet:hidden"
                      >
                        VIEW MORE
                        <ArrowRightIcon size={20} className="text-navy-500" />
                      </button>
                    </p>
                    <h3
                      id={`news-item-${i}-title`}
                      className="typo-body1-m text-navy-900 mt-4 truncate"
                    >
                      春季匯款大賞，西聯匯款手續費8折，指定國家再享匯率減讓
                    </h3>
                    <p className="typo-body3-r mt-4 hidden tablet:line-clamp-2">
                      手續費、電報費怎麼算?
                      幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。手續費、電報費怎麼算?
                      幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。
                    </p>
                    <button
                      type="button"
                      className="text-navy-500 tablet:inline-flex mt-4 hidden items-center gap-1 self-end text-sm leading-[140%] font-medium tracking-[0.28px] capitalize"
                    >
                      VIEW MORE
                      <ArrowRightIcon size={20} className="text-navy-500" />
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div className="tablet:hidden flex w-full justify-center">
            <button
              type="button"
              className="bg-navy-500 typo-body1-b inline-flex items-center justify-center gap-2 rounded-xl py-4 pr-4 pl-5 text-white"
            >
              閱讀更多
              <ArrowRightIcon size={24} className="text-white" />
            </button>
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
