import Link from "next/link";

import { ChevronIcon } from "@/components/icons/ChevronIcon";
import {
  footerCommonAndContact,
  footerQuickLinks,
  footerRemittanceServices,
} from "@/lib/footerContent";
import { footerLinkMotion } from "@/lib/footerLinkMotion";
import { cn } from "@/lib/utils";

function footerNavLinkClass(variant: "primary" | "secondary") {
  return cn(
    "rounded-sm outline-none",
    variant === "primary"
      ? "typo-body2-m inline-flex items-center gap-1 text-white"
      : "typo-body3-r inline-block text-white",
    footerLinkMotion,
    "hover:text-sky-600 focus-visible:ring-offset-navy-900 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
  );
}

export function FooterNav() {
  return (
    <nav
      aria-label="頁尾網站連結"
      className={cn(
        "grid min-h-0 min-w-0 auto-rows-min grid-cols-2 gap-x-4 gap-y-10",
        "tablet:col-span-7 tablet:flex tablet:flex-row tablet:items-start tablet:gap-8 tablet:self-stretch",
      )}
    >
      <section
        aria-labelledby="footer-nav-quick"
        className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col gap-8 self-stretch"
      >
        <h2 id="footer-nav-quick" className="sr-only">
          快速連結
        </h2>
        <ul className="flex w-full flex-col gap-8">
          {footerQuickLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={footerNavLinkClass("primary")}>
                {item.label}
                <ChevronIcon className="ml-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="footer-nav-remit"
        className={cn(
          "flex min-h-0 min-w-0 flex-1 basis-0 flex-col self-stretch px-0",
          "tablet:px-[var(--layout-gutter-md)]",
        )}
      >
        <h2
          id="footer-nav-remit"
          className="typo-body2-m mb-4 shrink-0 text-white tablet:typo-body2-b"
        >
          {footerRemittanceServices.title}
        </h2>
        <ul className="flex w-full flex-col gap-3">
          {footerRemittanceServices.links.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={footerNavLinkClass("secondary")}>
                - {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div
        className={cn(
          "contents min-h-0 min-w-0 flex-1 basis-0",
          "tablet:flex tablet:flex-col tablet:gap-8 tablet:self-stretch",
        )}
      >
        {footerCommonAndContact.map((group) => (
          <section
            key={group.sectionId}
            aria-labelledby={group.sectionId}
            className="flex min-h-0 min-w-0 flex-col self-stretch"
          >
            <h2
              id={group.sectionId}
              className="typo-body2-m mb-4 shrink-0 text-white tablet:typo-body2-b"
            >
              {group.title}
            </h2>
            <ul className="flex w-full flex-col gap-3">
              {group.links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={footerNavLinkClass("secondary")}
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
