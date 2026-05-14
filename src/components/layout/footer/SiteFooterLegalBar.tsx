import { footerCopyright, footerLegalLinks } from "@/lib/footerContent";
import { footerLinkMotion } from "@/lib/footerLinkMotion";

export function SiteFooterLegalBar() {
  return (
    <div className="bg-navy-900 relative z-10 w-full border-t border-white/20 pt-6">
      <div className="tablet:grid tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0 flex flex-col gap-5">
        <p className="typo-body4 tablet:order-1 tablet:col-span-5 tablet:text-left order-2 min-h-0 w-full min-w-0 shrink text-center text-white">
          {footerCopyright}
        </p>

        <nav
          aria-label="法規與政策連結"
          className="tablet:order-2 tablet:col-span-7 tablet:justify-start order-1 flex min-h-0 w-full min-w-0 justify-center"
        >
          <ul className="flex flex-wrap items-center justify-start gap-5">
            {footerLegalLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${footerLinkMotion} typo-body4 focus-visible:ring-offset-navy-900 inline-block rounded-sm text-white underline decoration-solid decoration-auto underline-offset-auto outline-none [text-decoration-skip-ink:auto] [text-underline-position:from-font] hover:text-sky-600 hover:decoration-sky-600 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2`}
                >
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
