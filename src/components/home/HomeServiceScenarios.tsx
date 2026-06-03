import Image from "next/image";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import decorationDotGroup from "@/assets/images/service-scenarios/decoration-dot-group.png";
import decorationTriangle from "@/assets/images/service-scenarios/decoration-triangle.png";
import nextPeek from "@/assets/images/service-scenarios/next-peek.png";
import studyAbroad from "@/assets/images/service-scenarios/study-abroad.png";
import { cn } from "@/lib/utils";

const SITUATION_TABS = [
  "海外留學應援",
  "跨境投資理財",
  "全球商務貿易",
  "海外工作支援",
] as const;

export function HomeServiceScenarios() {
  return (
    <section
      id="service-scenarios"
      aria-labelledby="service-scenarios-heading"
      className="relative w-full overflow-x-clip"
    >
      <div className="flex flex-col items-start gap-6 self-stretch px-20 py-60">
        {/* 右側次要情境插圖 — 350×350，blur 6px，部分超出右側 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex items-center justify-end filter-[blur(6px)]"
          style={{
            right: 62,
            top: 302,
            width: 350,
            height: 350,
            padding: "62.998px 45.138px 70.7px 54.833px",
          }}
        >
          <Image src={nextPeek} alt="" width={250} height={216} />
        </div>
        {/* 左側 Triangle 裝飾 — 26×31 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: 355, top: 549, width: 26, height: 31 }}
        >
          <Image src={decorationTriangle} alt="" width={26} height={31} />
        </div>
        {/* 右上 Dot Group 裝飾 — 38×46 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: 932, top: 388, width: 38, height: 46 }}
        >
          <Image src={decorationDotGroup} alt="" width={38} height={46} />
        </div>
        {/* 左側裝飾線 — 粗線 6×80 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-20 w-1.5 rounded-full [background:linear-gradient(to_bottom,var(--sky-200),transparent)]"
          style={{ left: 409, top: 441 }}
        />
        {/* 左側裝飾線 — 細線 4×60 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-15 w-1 rounded-full [background:linear-gradient(to_bottom,var(--sky-200),transparent)]"
          style={{ left: 381, top: 477 }}
        />
        {/* 右側裝飾線 — 粗線 6×80 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-20 w-1.5 rounded-full [background:linear-gradient(to_bottom,var(--sky-200),transparent)]"
          style={{ left: 1064, top: 727 }}
        />
        {/* 右側裝飾線 — 細線 4×60 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-15 w-1 rounded-full [background:linear-gradient(to_bottom,var(--sky-200),transparent)]"
          style={{ left: 1094, top: 763 }}
        />
        {/* 左上角放射光暈裝飾— 800×800 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex size-200 items-center justify-center [background:var(--gradient-service-scenarios-glow-tl)]"
          style={{ left: -400, bottom: -632 }}
        />
        {/* 左下角圓形裝飾 — 800×800，部分超出容器 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 size-200 shrink-0 rounded-full border-32 border-sky-100 opacity-70"
          style={{ left: -206, bottom: -537 }}
        />
        {/* 右下角放射光暈裝飾 — 800×800，部分超出容器 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 size-200 [background:var(--gradient-service-scenarios-glow)]"
          style={{ right: -443, bottom: -312 }}
        />
        <h2
          id="service-scenarios-heading"
          className="typo-h2 text-gradient-service-scenarios-heading"
        >
          滿足您的各種匯款情境
        </h2>
        <p className="typo-body1-r text-navy-900 -mt-1">
          無論是海外求學、商務貿易或親友急用，我們為不同需求的您，提供最合適的匯款建議。
        </p>
        <div className="flex w-full items-center">
          <button
            type="button"
            aria-label="上一個"
            className="border-navy-100 flex h-23 w-23 flex-none flex-col items-center justify-center rounded-2xl border bg-white p-6"
          >
            <ArrowRightSvg
              width={24}
              height={24}
              className="text-navy-500 rotate-180"
            />
          </button>
          <div className="mx-auto aspect-square w-135">
            <Image
              src={studyAbroad}
              alt="留學海外匯款情境插圖"
              width={540}
              height={540}
            />
          </div>
          <button
            type="button"
            aria-label="下一個"
            className="border-navy-100 flex h-23 w-23 flex-none flex-col items-center justify-center rounded-2xl border bg-white p-6"
          >
            <ArrowRightSvg width={24} height={24} className="text-navy-500" />
          </button>
        </div>

        {/* Situation Card + Tab Group */}
        <div className="flex w-full items-start justify-between">
          {/* Situation Card */}
          <article className="shadow-l border-navy-100 relative z-10 flex w-129.75 flex-col gap-3 rounded-3xl border bg-white px-8 py-7">
            <p className="typo-body4-m font-manrope text-sky-600">
              01 Study abroad
            </p>
            <div className="text-navy-900 flex flex-col gap-1">
              <h3 className="typo-h3">海外留學應援</h3>
              <p className="typo-sub1-m">成為子女圓夢的「賦能者」</p>
            </div>
            <p className="typo-body1-r text-navy-900">
              我們懂您想並肩同行的心，從學費匯款到海外支付，為您打造最安心的財務後盾。
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                className="typo-body2-m text-navy-500 flex items-center gap-0.5"
              >
                查看方案
                <ArrowRightSvg width={20} height={20} aria-hidden="true" />
              </button>
            </div>
          </article>

          {/* Tab Group */}
          <ul className="`w-45.5 relative z-10 flex flex-col gap-4">
            {SITUATION_TABS.map((tab, i) => (
              <li key={tab}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-full py-4 pr-6 pl-4",
                    "typo-body2-m whitespace-nowrap",
                    i === 0
                      ? "bg-navy-500 text-white"
                      : "border-navy-100 text-navy-500 border bg-white",
                  )}
                >
                  <span
                    className={cn(
                      "size-6 shrink-0 rounded-full",
                      i === 0 ? "bg-white" : "bg-navy-500",
                    )}
                  />
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
