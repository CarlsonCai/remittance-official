import { SiteFooterBrand } from "@/components/layout/footer/SiteFooterBrand";
import { SiteFooterDisclaimers } from "@/components/layout/footer/SiteFooterDisclaimers";
import { SiteFooterLegalBar } from "@/components/layout/footer/SiteFooterLegalBar";
import { SiteFooterNav } from "@/components/layout/footer/SiteFooterNav";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 w-full max-[1023px]:rounded-t-[32px] min-[1024px]:rounded-t-[60px] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-5 pb-5 pt-8 min-[1024px]:items-center min-[1024px]:gap-[140px] min-[1024px]:px-20 min-[1024px]:pb-8 min-[1024px]:pt-[60px]">
        <section
          aria-label="頁尾品牌與網站連結"
          className="w-full self-stretch"
        >
          <div className="grid w-full gap-12 min-[1024px]:grid-cols-12 min-[1024px]:gap-10">
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
