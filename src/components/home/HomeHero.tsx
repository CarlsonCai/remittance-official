import Image from "next/image";
import Link from "next/link";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import heroEarth from "@/assets/images/hero/hero-earth.png";
import heroExhaust from "@/assets/images/hero/hero-exhaust.png";
import heroDotGroup from "@/assets/images/hero/hero-dot-group-m.png";
import heroMom from "@/assets/images/hero/hero-mom.png";
import heroRocket from "@/assets/images/hero/hero-rocket-m.png";
import heroSon from "@/assets/images/hero/hero-son.png";
import heroSparkLWhite from "@/assets/images/hero/hero-spark-l-white.png";
import heroStarL from "@/assets/images/hero/hero-star-l.png";
import heroStarM from "@/assets/images/hero/hero-star-m.png";
import heroTriangle from "@/assets/images/hero/hero-triangle-s.png";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rounded-b-5xl w-full overflow-hidden [background:var(--gradient-remittance-options)]"
    >
      <SectionPanelLayout shellClassName="pt-[140px] pb-[260px]">
        <div className="layout-grid items-center">
          {/* 左側文字 */}
          <div className="tablet:col-span-5 col-span-4 flex flex-col">
            <h1
              id="hero-heading"
              className="typo-h1 text-shadow-on-blue text-white"
            >
              跨越國界，
              <br />
              傳遞最實質的愛與支持
            </h1>
            <p className="typo-sub1-m mt-4 text-white/90">
              業界最全面的跨境匯款服務，讓每一分心意確準送達。
            </p>
            <Link
              href="#remittance-options"
              className="bg-navy-800 mt-10 inline-flex w-fit items-center gap-2 rounded-2xl py-5 pr-5 pl-6"
            >
              <span className="typo-body1-b text-white">查看全方案評比</span>
              <ArrowRightSvg
                width={24}
                height={24}
                aria-hidden="true"
                className="text-white"
              />
            </Link>
          </div>

          {/* 右側 KV 插圖區（拆層） */}
          <div
            aria-hidden="true"
            className="tablet:col-span-7 tablet:block relative col-span-4 hidden"
            style={{ height: 514 }}
          >
            {/* Light — 地球後方 Ripple 光暈（SVG 同心圓擴散動畫） */}
            <div
              className="absolute -translate-y-1/2"
              style={{
                right: 108,
                top: "calc(50% - 48px)",
                width: 558,
                height: 514,
              }}
            >
              <svg
                viewBox="0 0 558 514"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-full"
                aria-hidden="true"
              >
                <circle
                  cx="279"
                  cy="257"
                  r="120"
                  fill="white"
                  fillOpacity="0.45"
                >
                  <animate
                    attributeName="r"
                    values="120;240"
                    dur="4s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.45;0"
                    dur="4s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="279"
                  cy="257"
                  r="120"
                  fill="white"
                  fillOpacity="0.45"
                >
                  <animate
                    attributeName="r"
                    values="120;240"
                    dur="4s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.45;0"
                    dur="4s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="279"
                  cy="257"
                  r="120"
                  fill="white"
                  fillOpacity="0.45"
                >
                  <animate
                    attributeName="r"
                    values="120;240"
                    dur="4s"
                    begin="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.45;0"
                    dur="4s"
                    begin="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="279"
                  cy="257"
                  r="120"
                  fill="white"
                  fillOpacity="0.45"
                >
                  <animate
                    attributeName="r"
                    values="120;240"
                    dur="4s"
                    begin="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.45;0"
                    dur="4s"
                    begin="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>

            {/* Earth — 地球本體 */}
            <div
              className="absolute -translate-y-1/2"
              style={{ right: 108, top: "calc(50% - 48px)", width: 558, height: 514 }}
            >
              <Image
                src={heroEarth}
                alt=""
                fill
                className="object-contain"
                sizes="558px"
                priority
              />
            </div>

            {/* Son — 兒子人物 */}
            <div
              className="absolute"
              style={{
                right: 487,
                top: "calc(50% - 155px)",
                width: 147,
                height: 108,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSon}
                alt=""
                fill
                className="object-contain"
                sizes="147px"
              />
            </div>

            {/* Mom — 媽媽人物 */}
            <div
              className="absolute"
              style={{
                right: 94,
                top: "calc(50% - 3.5px)",
                width: 136,
                height: 113,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroMom}
                alt=""
                fill
                className="object-contain"
                sizes="136px"
              />
            </div>

            {/* Rocket — 火箭 */}
            <div
              className="absolute"
              style={{
                right: 724,
                top: "calc(50% + 40px)",
                width: 98,
                height: 46,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroRocket}
                alt=""
                fill
                className="object-contain"
                sizes="98px"
              />
            </div>

            {/* Exhaust — 火箭尾焰 */}
            <div
              className="absolute"
              style={{
                right: 677,
                top: "calc(50% + 22.5px)",
                width: 40,
                height: 21,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroExhaust}
                alt=""
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>

            {/* Triangle — 三角形裝飾 */}
            <div
              className="absolute"
              style={{
                right: 41,
                top: "calc(50% - 121px)",
                width: 22,
                height: 26,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroTriangle}
                alt=""
                fill
                className="object-contain"
                sizes="22px"
              />
            </div>

            {/* Dot Group — 點群組裝飾 */}
            <div
              className="absolute"
              style={{
                right: 565,
                top: "calc(50% - 299px)",
                width: 31,
                height: 38,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroDotGroup}
                alt=""
                fill
                className="object-contain"
                sizes="31px"
              />
            </div>

            {/* Stars — 星星裝飾（L:18px ×2，M:14px ×2） */}
            <div
              className="absolute"
              style={{
                right: 49,
                top: "calc(50% - 297px)",
                width: 18,
                height: 18,
                transform: "translateY(-50%) rotate(18deg)",
              }}
            >
              <Image
                src={heroStarL}
                alt=""
                fill
                className="object-contain"
                sizes="18px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 663,
                top: "calc(50% - 322px)",
                width: 18,
                height: 18,
                transform: "translateY(-50%) rotate(-50deg)",
              }}
            >
              <Image
                src={heroStarL}
                alt=""
                fill
                className="object-contain"
                sizes="18px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 134,
                top: "calc(50% - 324px)",
                width: 14,
                height: 14,
                transform: "translateY(-50%) rotate(-28deg)",
              }}
            >
              <Image
                src={heroStarM}
                alt=""
                fill
                className="object-contain"
                sizes="14px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 731,
                top: "calc(50% - 280px)",
                width: 14,
                height: 14,
                transform: "translateY(-50%) rotate(-28deg)",
              }}
            >
              <Image
                src={heroStarM}
                alt=""
                fill
                className="object-contain"
                sizes="14px"
              />
            </div>

            {/* Sparks — 閃光裝飾 ×6 */}
            <div
              className="absolute"
              style={{
                right: 172,
                top: "calc(50% - 242px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 161,
                top: "calc(50% - 140px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 258,
                top: "calc(50% - 96px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 383,
                top: "calc(50% - 27px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 466,
                top: "calc(50% + 18px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>
            <div
              className="absolute"
              style={{
                right: 639,
                top: "calc(50% + 20px)",
                width: 11,
                height: 12,
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src={heroSparkLWhite}
                alt=""
                fill
                className="object-contain"
                sizes="11px"
              />
            </div>

            {/* Dots — 彩色圓點 ×5 */}
            {/* Orange #FFD4BD */}
            <div
              className="absolute rounded-full"
              style={{
                right: 63,
                top: "calc(50% - 19px)",
                width: 6,
                height: 6,
                transform: "translateY(-50%)",
                backgroundColor: "#FFD4BD",
              }}
            />
            {/* Green #9FE3B4 */}
            <div
              className="absolute rounded-full"
              style={{
                right: 149,
                top: "calc(50% + 126px)",
                width: 6,
                height: 6,
                transform: "translateY(-50%)",
                backgroundColor: "#9FE3B4",
              }}
            />
            {/* Blue #C2E4FF */}
            <div
              className="absolute rounded-full"
              style={{
                right: 100,
                top: "calc(50% - 225px)",
                width: 6,
                height: 6,
                transform: "translateY(-50%)",
                backgroundColor: "#C2E4FF",
              }}
            />
            {/* Yellow #FFF3B8 */}
            <div
              className="absolute rounded-full"
              style={{
                right: 474,
                top: "calc(50% - 315px)",
                width: 6,
                height: 6,
                transform: "translateY(-50%)",
                backgroundColor: "#FFF3B8",
              }}
            />
            {/* Purple #E1D1FF */}
            <div
              className="absolute rounded-full"
              style={{
                right: 666,
                top: "calc(50% - 86px)",
                width: 6,
                height: 6,
                transform: "translateY(-50%)",
                backgroundColor: "#E1D1FF",
              }}
            />

            {/* Line/White ×4 — 白色漸層線條裝飾 */}
            <div
              className="absolute"
              style={{
                right: 72,
                top: "calc(50% + 111px)",
                width: 4,
                height: 80,
                transform: "translateY(-50%)",
              }}
            >
              <div className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white to-white/0" />
            </div>
            <div
              className="absolute"
              style={{
                right: 660,
                top: "calc(50% - 187px)",
                width: 4,
                height: 80,
                transform: "translateY(-50%)",
              }}
            >
              <div className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white to-white/0" />
            </div>
            <div
              className="absolute"
              style={{
                right: 49,
                top: "calc(50% + 132px)",
                width: 3,
                height: 60,
                transform: "translateY(-50%)",
              }}
            >
              <div className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white to-white/0" />
            </div>
            <div
              className="absolute"
              style={{
                right: 690,
                top: "calc(50% - 156px)",
                width: 3,
                height: 60,
                transform: "translateY(-50%)",
              }}
            >
              <div className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white to-white/0" />
            </div>
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
