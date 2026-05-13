import { footerDisclaimerLines, footerSlogan } from "@/lib/footerContent";

export function SiteFooterDisclaimers() {
  return (
    <section aria-label="警語與客服資訊" className="w-full">
      <div className="grid w-full grid-cols-1 gap-5 min-[1024px]:grid-cols-12 min-[1024px]:gap-x-10 min-[1024px]:gap-y-0">
        <div className="flex min-h-0 min-w-0 items-center min-[1024px]:col-span-5">
          <p className="typo-h4 tracking-[0.56px] text-white">{footerSlogan}</p>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col gap-8 min-[1024px]:col-span-7 min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:gap-8">
          {/* 第一欄：對齊上方 Nav 第一區（含「常見問題」） */}
          <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col self-stretch">
            <div className="space-y-2 text-left">
              {footerDisclaimerLines.map((line) => (
                <p
                  key={line}
                  className="typo-body4 font-normal tracking-[0.28px] text-white"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
