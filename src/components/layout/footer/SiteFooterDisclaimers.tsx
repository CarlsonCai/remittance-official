import { footerDisclaimer, footerSlogan } from "@/lib/footerContent";

export function SiteFooterDisclaimers() {
  return (
    <section aria-label="警語與客服資訊" className="w-full">
      <div className="tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0 grid w-full grid-cols-1 gap-5">
        <div className="tablet:col-span-5 tablet:justify-start flex min-h-0 min-w-0 items-center justify-center">
          <p className="typo-h4 tablet:w-auto tablet:text-left w-full text-center tracking-[0.56px] text-white">
            {footerSlogan}
          </p>
        </div>

        <div className="tablet:col-span-7 tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-row tablet:items-start tablet:gap-8 w-full">
          <div className="tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-1 tablet:basis-0 tablet:flex-col tablet:self-stretch w-full text-left">
            <p className="typo-body4-r text-white">
              {footerDisclaimer.split("\n").flatMap((line, i) =>
                i === 0 ? [line] : [<br key={`br-${i}`} />, line],
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
