import { footerDisclaimerLines, footerSlogan } from "@/lib/footerContent";

export function SiteFooterDisclaimers() {
  return (
    <section aria-label="警語與客服資訊" className="w-full">
      <div className="grid w-full grid-cols-1 gap-5 tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0">
        <div className="flex min-h-0 min-w-0 items-center justify-center tablet:col-span-5 tablet:justify-start">
          <p className="w-full text-center typo-h4 tracking-[0.56px] text-white tablet:w-auto tablet:text-left">
            {footerSlogan}
          </p>
        </div>

        <div className="w-full tablet:col-span-7 tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-row tablet:items-start tablet:gap-8">
          <div className="w-full space-y-2 text-left tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-1 tablet:basis-0 tablet:flex-col tablet:self-stretch">
            {footerDisclaimerLines.map((line) => (
              <p
                key={line}
                className="typo-body4 text-white"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
