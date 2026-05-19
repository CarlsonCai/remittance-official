import { footerDisclaimer, footerSlogan } from "@/lib/footerContent";
import { cn } from "@/lib/utils";

export function FooterDisclaimers() {
  return (
    <section aria-label="警語與客服資訊" className="w-full">
      <div
        className={cn(
          "grid w-full grid-cols-1 gap-5",
          "tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0",
        )}
      >
        <div
          className={cn(
            "flex min-h-0 min-w-0 items-center justify-center",
            "tablet:col-span-5 tablet:justify-start",
          )}
        >
          <p
            className={cn(
              "typo-h4 w-full text-center tracking-[0.56px] text-white",
              "tablet:w-auto tablet:text-left",
            )}
          >
            {footerSlogan}
          </p>
        </div>

        <div
          className={cn(
            "w-full",
            "tablet:col-span-7 tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-row tablet:items-start tablet:gap-8",
          )}
        >
          <div
            className={cn(
              "w-full text-left",
              "tablet:flex tablet:min-h-0 tablet:min-w-0 tablet:flex-1 tablet:basis-0 tablet:flex-col tablet:self-stretch",
            )}
          >
            <p className="typo-body4-r text-white">
              {footerDisclaimer
                .split("\n")
                .flatMap((line, i) =>
                  i === 0 ? [line] : [<br key={`br-${i}`} />, line],
                )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
