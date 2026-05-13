import { SiteFooterBrand } from "@/components/layout/footer/SiteFooterBrand";
import { SiteFooterDisclaimers } from "@/components/layout/footer/SiteFooterDisclaimers";
import { SiteFooterLegalBar } from "@/components/layout/footer/SiteFooterLegalBar";
import { SiteFooterNav } from "@/components/layout/footer/SiteFooterNav";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 w-full rounded-t-[32px] tablet:rounded-t-[60px] text-white">
      <div className="mx-auto flex w-full max-w-[var(--layout-container-lg)] flex-col items-start gap-10 px-5 pb-5 pt-8 tablet:items-center tablet:gap-[140px] tablet:px-20 tablet:pb-8 tablet:pt-[60px]">
        <section
          aria-label="頁尾品牌與網站連結"
          className="w-full self-stretch"
        >
          <div className="grid w-full gap-12 tablet:grid-cols-12 tablet:gap-10">
            <SiteFooterBrand />
            <SiteFooterNav />
          </div>
        </section>

        <section
          aria-label="頁尾警語與法務資訊"
          className="flex w-full flex-col gap-8 self-stretch"
        >
          <SiteFooterDisclaimers />
          <SiteFooterLegalBar />
        </section>
      </div>
    </footer>
  );
}
