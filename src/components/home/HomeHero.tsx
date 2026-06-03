import Image from "next/image";
import Link from "next/link";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import heroKvIllustration from "@/assets/images/hero/hero-kv-illustration.png";
import { SectionPanelLayout } from "@/components/layout/SectionPanelLayout";

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rounded-b-5xl w-full overflow-hidden [background:var(--gradient-remittance-options)]"
    >
      <SectionPanelLayout shellClassName="py-20 tablet:py-25 desktop:pt-35 desktop:pb-16">
        <div className="layout-grid items-center">
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

          <div
            aria-hidden="true"
            className="tablet:col-span-7 tablet:block relative col-span-4 hidden"
          >
            <Image
              src={heroKvIllustration}
              alt=""
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </SectionPanelLayout>
    </section>
  );
}
