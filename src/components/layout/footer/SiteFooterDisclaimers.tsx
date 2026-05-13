import { footerDisclaimerLines, footerSlogan } from "@/lib/footerContent";

export function SiteFooterDisclaimers() {
  return (
    <section aria-label="警語與客服資訊" className="w-full">
      <div className="grid w-full grid-cols-1 gap-5 min-[1024px]:grid-cols-12 min-[1024px]:gap-x-10 min-[1024px]:gap-y-0">
        <div className="flex min-h-0 min-w-0 items-center justify-center min-[1024px]:col-span-5 min-[1024px]:justify-start">
          <p className="w-full text-center typo-h4 tracking-[0.56px] text-white min-[1024px]:w-auto min-[1024px]:text-left">
            {footerSlogan}
          </p>
        </div>

        <div className="w-full min-[1024px]:col-span-7 min-[1024px]:flex min-[1024px]:min-h-0 min-[1024px]:min-w-0 min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:gap-8">
          <div className="w-full space-y-2 text-left min-[1024px]:flex min-[1024px]:min-h-0 min-[1024px]:min-w-0 min-[1024px]:flex-1 min-[1024px]:basis-0 min-[1024px]:flex-col min-[1024px]:self-stretch">
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
