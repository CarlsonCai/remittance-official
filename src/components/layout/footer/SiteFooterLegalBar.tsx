import { footerCopyright, footerLegalLinks } from "@/lib/footerContent";

export function SiteFooterLegalBar() {
  return (
    <div className="w-full border-t border-white/20 pt-6">
      <div className="grid w-full grid-cols-1 gap-5 min-[1024px]:grid-cols-12 min-[1024px]:gap-x-10 min-[1024px]:gap-y-0">
        <p className="typo-body4 min-h-0 min-w-0 shrink font-normal tracking-[0.28px] text-white min-[1024px]:col-span-5">
          {footerCopyright}
        </p>
        <nav
          aria-label="法規與政策連結"
          className="flex w-full min-h-0 min-w-0 justify-start min-[1024px]:col-span-7"
        >
          <ul className="flex flex-wrap items-center justify-start gap-5">
            {footerLegalLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="typo-body4 inline-block rounded-sm font-normal tracking-[0.28px] text-white underline decoration-solid decoration-auto underline-offset-auto [text-decoration-skip-ink:auto] [text-underline-position:from-font] outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
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
