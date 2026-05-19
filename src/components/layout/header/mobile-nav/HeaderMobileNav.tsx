"use client";

import { useMobileNavAccordion } from "@/hooks/useMobileNavAccordion";
import {
  HEADER_MOBILE_NAV_ITEM_FADE_DELAY,
  HEADER_MOTION,
} from "@/lib/headerMotion";
import {
  HEADER_MOBILE_CTA_ITEM,
  HEADER_MOBILE_LIST_ITEMS,
  headerNavItemKey,
  MOBILE_NAV_PANEL_ID,
} from "@/lib/headerNav";
import { cn } from "@/lib/utils";

import { MobileNavBackdrop } from "./MobileNavBackdrop";
import { HeaderMobileNavCta, HeaderMobileNavItem } from "./HeaderMobileNavItem";

const panelMotion = `transition-[grid-template-rows] ${HEADER_MOTION}`;
const contentFadeMotion = `transition-opacity ${HEADER_MOTION}`;

function mobileNavListFadeClass(open: boolean) {
  return cn(
    contentFadeMotion,
    open
      ? cn("opacity-100", HEADER_MOBILE_NAV_ITEM_FADE_DELAY)
      : "opacity-0 delay-0",
  );
}

type HeaderMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function HeaderMobileNav({ open, onClose }: HeaderMobileNavProps) {
  const { expandedId, toggle } = useMobileNavAccordion(open);
  const listFade = mobileNavListFadeClass(open);

  return (
    <>
      <MobileNavBackdrop open={open} onClose={onClose} />

      <div
        id={MOBILE_NAV_PANEL_ID}
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background tablet:hidden absolute inset-x-0 top-full z-50 grid overflow-hidden rounded-b-(--radius-panel-bottom-lg) shadow-none",
          panelMotion,
          open && "border-navy-100 border-t",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          !open && "pointer-events-none delay-120",
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="min-w-0 px-(--layout-margin-sm) pt-(--spacing-inset-top-sm) pb-(--layout-margin-sm)"
            aria-label="主選單（行動版）"
          >
            <ul
              className={cn(
                listFade,
                "[&>li:last-child>button]:border-b-0",
                "[&>li:last-child>a]:border-b-0",
              )}
            >
              {HEADER_MOBILE_LIST_ITEMS.map((item, index) => (
                <HeaderMobileNavItem
                  key={headerNavItemKey(item, index)}
                  item={item}
                  index={index}
                  expandedId={expandedId}
                  onToggleAccordion={toggle}
                  onNavigate={onClose}
                />
              ))}
            </ul>

            {HEADER_MOBILE_CTA_ITEM && (
              <ul
                className={cn(
                  "mt-(--layout-gutter-lg) list-none bg-sky-50",
                  "[&:has(button[aria-expanded=true])]:overflow-hidden",
                  "[&:has(button[aria-expanded=true])]:rounded-b-(--radius-panel-bottom-md)",
                  listFade,
                )}
              >
                <HeaderMobileNavCta
                  expandedId={expandedId}
                  onToggleAccordion={toggle}
                  onNavigate={onClose}
                  ctaLabel={HEADER_MOBILE_CTA_ITEM.label}
                />
              </ul>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
