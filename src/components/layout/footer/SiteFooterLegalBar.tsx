import { footerCopyright, footerLegalLinks } from "@/lib/footerContent";

export function SiteFooterLegalBar() {
  return (
    <div className="relative z-10 w-full border-t border-white/20 bg-navy-900 pt-6">
      <div className="flex flex-col gap-5 tablet:grid tablet:grid-cols-12 tablet:gap-x-10 tablet:gap-y-0">
        <p className="typo-body4 order-2 min-h-0 min-w-0 shrink text-white tablet:order-1 tablet:col-span-5">
          {footerCopyright}
        </p>
        <nav
          aria-label="法規與政策連結"
          className="order-1 flex w-full min-h-0 min-w-0 justify-start tablet:order-2 tablet:col-span-7"
        >
          <ul className="flex flex-wrap items-center justify-start gap-5">
            {footerLegalLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="typo-body4 inline-block rounded-sm text-white underline decoration-solid decoration-auto underline-offset-auto [text-decoration-skip-ink:auto] [text-underline-position:from-font] outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
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
