import Image from "next/image";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";
import { cn } from "@/lib/utils";

import newsImage1 from "@/assets/images/latest-news/latest-news-1.png";
import newsImage2 from "@/assets/images/latest-news/latest-news-2.png";
import newsImage3 from "@/assets/images/latest-news/latest-news-3.png";

const GUIDE_IMAGES = [newsImage1, newsImage2, newsImage3, newsImage1];

const GUIDE_CATEGORIES = ["全部", "入門指南", "費用試算", "常見問題"] as const;

const GUIDE_CARDS = [0, 1, 2, 3];

export function HomeRemittanceGuide() {
  return (
    <section
      id="remittance-guide"
      aria-labelledby="remittance-guide-heading"
      className="w-full"
    >
      <SectionPanelLayout
        panelClassName="rounded-5xl"
        shellClassName={cn(
          "flex flex-col items-start gap-8 pt-15 pb-25",
          "tablet:flex-row tablet:gap-18 tablet:pt-35 tablet:pb-60",
        )}
      >
        <aside
          className="tablet:w-1/4 tablet:shrink-0 w-full"
          aria-label="指南分類"
        >
          <h2
            id="remittance-guide-heading"
            className="typo-h2 text-gradient-latest-news-heading w-fit"
          >
            匯款指南
          </h2>
          <p className="typo-body3-r text-navy-900 tablet:mt-5 mt-4 max-w-2xl">
            手續費、電報費怎麼算？幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。
          </p>
          <ul className="tablet:mt-12 tablet:flex-col mt-6 flex flex-wrap gap-2">
            {GUIDE_CATEGORIES.map((cat, i) => (
              <li key={cat}>
                <span
                  className={cn(
                    "inline-flex items-center justify-center gap-2.5 rounded-lg px-4 py-2 text-center",
                    "typo-body2-m",
                    i === 0
                      ? "bg-navy-500 text-white"
                      : "border-navy-100 text-navy-500 border bg-white",
                  )}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-navy-500 tablet:inline-flex mt-12 hidden items-center justify-center gap-2 rounded-xl py-4 pr-4 pl-5"
          >
            <span className="typo-body1-b text-white">閱讀更多</span>
            <ArrowRightIcon size={24} className="text-white" />
          </button>
        </aside>

        <div className="flex w-full min-w-0 flex-1 flex-col gap-8">
          <ul className="tablet:grid-cols-2 grid grid-cols-1 gap-6">
            {GUIDE_CARDS.map((i) => (
              <li key={i}>
                <article
                  aria-labelledby={`guide-card-${i}-title`}
                  className="overflow-hidden rounded-xl bg-white"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={GUIDE_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h3
                      id={`guide-card-${i}-title`}
                      className="typo-body1-m text-navy-900 truncate"
                    >
                      海外匯款全攻略，從新手到專家的省錢秘笈海外匯款全攻略，從新手到專家的省錢秘笈
                    </h3>
                    <p className="typo-body3-r tablet:line-clamp-2 text-navy-900 mt-3 hidden">
                      手續費、電報費怎麼算?
                      幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。手續費、電報費怎麼算?
                      幫您整理最完整的匯款知識，讓您的每一分錢都精準到位。
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="border-navy-100 inline-flex items-center justify-center gap-2.5 rounded-lg border bg-white px-3 py-2 tracking-[0.26px]">
                        <span className="typo-body5-m text-navy-500">
                          入門指南
                        </span>
                      </span>
                      <button
                        type="button"
                        className="text-navy-500 inline-flex items-center gap-1 text-sm leading-[140%] font-medium tracking-[0.28px] capitalize"
                      >
                        VIEW MORE
                        <ArrowRightIcon size={20} className="text-navy-500" />
                      </button>
                    </div>
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
              <ArrowRightIcon size={24} className="text-white" />
            </button>
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
