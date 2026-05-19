import { footerCopyright, footerLegalLinks } from "@/lib/footerContent";
import { footerLinkMotion } from "@/lib/footerLinkMotion";
import { cn } from "@/lib/utils";

const legalLinkClass = cn(
  "inline-block rounded-(--radius-focus-ring) underline decoration-solid decoration-auto underline-offset-auto outline-none",
  "typo-body4 text-white",
  "[text-decoration-skip-ink:auto] [text-underline-position:from-font]",
  footerLinkMotion,
  "hover:text-sky-600 hover:decoration-sky-600 focus-visible:ring-offset-navy-900 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
);

export function FooterLegalBar() {
  return (
    <div
      className={cn(
        "relative z-10 w-full border-t border-white/20 bg-navy-900 pt-6",
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          "tablet:grid tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0",
        )}
      >
        <p
          className={cn(
            "typo-body4 order-2 min-h-0 w-full min-w-0 shrink text-center text-white",
            "tablet:order-1 tablet:col-span-5 tablet:text-left",
          )}
        >
          {footerCopyright}
        </p>

        <nav
          aria-label="法規與政策連結"
          className={cn(
            "order-1 flex min-h-0 w-full min-w-0 justify-center",
            "tablet:order-2 tablet:col-span-7 tablet:justify-start",
          )}
        >
          <ul className="flex flex-wrap items-center justify-start gap-5">
            {footerLegalLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={legalLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
