import { FooterBrand } from "@/components/layout/footer/FooterBrand";
import { FooterDisclaimers } from "@/components/layout/footer/FooterDisclaimers";
import { FooterLegalBar } from "@/components/layout/footer/FooterLegalBar";
import { FooterNav } from "@/components/layout/footer/FooterNav";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      className={cn(
        "bg-navy-900 tablet:rounded-t-5xl w-full rounded-t-4xl",
        "text-white",
      )}
    >
      <div className="layout-shell tablet:pt-15 tablet:pb-8 pt-8 pb-5">
        <div
          className={cn(
            "layout-container flex flex-col items-start gap-10",
            "tablet:items-center tablet:gap-35",
          )}
        >
          <section
            aria-label="頁尾品牌與網站連結"
            className="w-full self-stretch"
          >
            <div
              className={cn(
                "grid w-full grid-cols-1 gap-12",
                "tablet:grid-cols-12 tablet:gap-10",
              )}
            >
              <FooterBrand />
              <FooterNav />
            </div>
          </section>

          <section
            aria-label="頁尾警語與法務資訊"
            className="flex w-full flex-col gap-8 self-stretch"
          >
            <FooterDisclaimers />
            <FooterLegalBar />
          </section>
        </div>
      </div>
    </footer>
  );
}
