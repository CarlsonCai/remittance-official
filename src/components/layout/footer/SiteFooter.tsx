import { SiteFooterBrand } from "@/components/layout/footer/SiteFooterBrand";
import { SiteFooterDisclaimers } from "@/components/layout/footer/SiteFooterDisclaimers";
import { SiteFooterLegalBar } from "@/components/layout/footer/SiteFooterLegalBar";
import { SiteFooterNav } from "@/components/layout/footer/SiteFooterNav";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 tablet:rounded-t-[60px] w-full rounded-t-[32px] text-white">
      <div className="layout-shell tablet:pb-8 tablet:pt-[60px] pt-8 pb-5">
        <div className="layout-container tablet:items-center tablet:gap-[140px] flex flex-col items-start gap-10">
          <section
            aria-label="頁尾品牌與網站連結"
            className="w-full self-stretch"
          >
            <div className="tablet:grid-cols-12 tablet:gap-10 grid w-full gap-12">
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
      </div>
    </footer>
  );
}
