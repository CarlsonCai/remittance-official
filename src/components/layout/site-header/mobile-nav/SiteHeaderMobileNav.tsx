"use client";

import { useMobileNavAccordion } from "@/hooks/useMobileNavAccordion";
import {
  HEADER_MOBILE_NAV_ITEM_FADE_DELAY,
  HEADER_MOTION,
} from "@/lib/headerMotion";
import {
  MOBILE_NAV_PANEL_ID,
  SITE_HEADER_MOBILE_CTA_ITEM,
  SITE_HEADER_MOBILE_LIST_ITEMS,
  siteHeaderNavItemKey,
} from "@/lib/siteHeaderNav";
import { cn } from "@/lib/utils";

import { MobileNavBackdrop } from "./MobileNavBackdrop";
import {
  SiteHeaderMobileNavCta,
  SiteHeaderMobileNavItem,
} from "./SiteHeaderMobileNavItem";

const panelMotion = `transition-[grid-template-rows] ${HEADER_MOTION}`;
const contentFadeMotion = `transition-opacity ${HEADER_MOTION}`;

type SiteHeaderMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function SiteHeaderMobileNav({
  open,
  onClose,
}: SiteHeaderMobileNavProps) {
  const { expandedId, toggle } = useMobileNavAccordion(open);

  return (
    <>
      <MobileNavBackdrop open={open} onClose={onClose} />

      <div
        id={MOBILE_NAV_PANEL_ID}
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background tablet:hidden absolute inset-x-0 top-full z-50 grid overflow-hidden rounded-b-(--header-mobile-nav-panel-radius-b) shadow-none",
          open && "border-navy-100 border-t",
          panelMotion,
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          !open && "pointer-events-none delay-120",
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="min-w-0 px-(--header-mobile-nav-frame-px) pt-(--header-mobile-nav-frame-pt) pb-(--header-mobile-nav-frame-pb)"
            aria-label="主選單（行動版）"
          >
            <ul
              className={cn(
                contentFadeMotion,
                open
                  ? cn("opacity-100", HEADER_MOBILE_NAV_ITEM_FADE_DELAY)
                  : "opacity-0 delay-0",
                "[&>li:last-child>button]:border-b-0",
                "[&>li:last-child>a]:border-b-0",
              )}
            >
              {SITE_HEADER_MOBILE_LIST_ITEMS.map((item, index) => (
                <SiteHeaderMobileNavItem
                  key={siteHeaderNavItemKey(item, index)}
                  item={item}
                  index={index}
                  expandedId={expandedId}
                  onToggleAccordion={toggle}
                  onNavigate={onClose}
                />
              ))}
            </ul>

            {SITE_HEADER_MOBILE_CTA_ITEM && (
              <ul
                className={cn(
                  "mt-(--header-mobile-nav-cta-gap) list-none bg-sky-50",
                  "[&:has(button[aria-expanded=true])]:overflow-hidden",
                  "[&:has(button[aria-expanded=true])]:rounded-b-(--header-mobile-nav-sub-panel-radius-b)",
                  contentFadeMotion,
                  open
                    ? cn("opacity-100", HEADER_MOBILE_NAV_ITEM_FADE_DELAY)
                    : "opacity-0 delay-0",
                )}
              >
                <SiteHeaderMobileNavCta
                  expandedId={expandedId}
                  onToggleAccordion={toggle}
                  onNavigate={onClose}
                  ctaLabel={SITE_HEADER_MOBILE_CTA_ITEM.label}
                />
              </ul>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
