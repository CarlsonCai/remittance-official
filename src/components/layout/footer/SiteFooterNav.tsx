import Link from "next/link";
import {
  footerCommonAndContact,
  footerQuickLinks,
  footerRemittanceServices,
} from "@/lib/footerContent";

function ChevronRight({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {" "}
      &gt;
    </span>
  );
}

export function SiteFooterNav() {
  return (
    <nav
      aria-label="頁尾網站連結"
      className="flex min-h-0 min-w-0 flex-col gap-10 max-[1023px]:grid max-[1023px]:grid-cols-2 max-[1023px]:gap-x-4 max-[1023px]:gap-y-10 max-[1023px]:auto-rows-min min-[1024px]:col-span-7 min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:gap-8 min-[1024px]:self-stretch"
    >
      <section
        aria-labelledby="footer-nav-quick"
        className="flex max-[1023px]:min-w-0 min-h-0 min-w-0 flex-1 basis-0 flex-col gap-8 self-stretch"
      >
        <h2 id="footer-nav-quick" className="sr-only">
          快速連結
        </h2>
        <ul className="flex w-full flex-col gap-8">
          {footerQuickLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="typo-body2-m inline-flex items-center gap-1 rounded-sm text-white outline-none hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                {item.label}
                <ChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="footer-nav-remit"
        className="flex max-[1023px]:min-w-0 min-h-0 min-w-0 flex-1 basis-0 flex-col self-stretch px-0 min-[1024px]:px-[20px]"
      >
        <h2
          id="footer-nav-remit"
          className="typo-body2-b mb-4 shrink-0 text-white"
        >
          {footerRemittanceServices.title}
        </h2>
        <ul className="flex w-full flex-col gap-3">
          {footerRemittanceServices.links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="typo-body3-r inline-block rounded-sm text-white outline-none hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
              >
                - {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col gap-8 self-stretch max-[1023px]:contents">
        {footerCommonAndContact.map((group) => (
          <section
            key={group.sectionId}
            aria-labelledby={group.sectionId}
            className="flex min-h-0 min-w-0 flex-col self-stretch"
          >
            <h2
              id={group.sectionId}
              className="typo-body2-b mb-4 shrink-0 text-white"
            >
              {group.title}
            </h2>
            <ul className="flex w-full flex-col gap-3">
              {group.links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="typo-body3-r inline-block rounded-sm text-white outline-none hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                  >
                    - {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </nav>
  );
}
