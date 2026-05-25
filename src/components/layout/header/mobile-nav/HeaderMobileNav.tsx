"use client";

import { usePathname } from "@/i18n/navigation";

import { useMobileNavAccordion } from "@/hooks/useMobileNavAccordion";
import { SITE_MOTION, SITE_MOTION_DELAY_SHORT } from "@/lib/siteMotion";
import { PortalBackdrop } from "@/components/ui/PortalBackdrop";
import {
  HEADER_MOBILE_CTA_ITEM,
  HEADER_MOBILE_LIST_ITEMS,
  headerNavItemKey,
  MOBILE_NAV_PANEL_ID,
} from "@/lib/headerNav";
import { cn } from "@/lib/utils";

import { HeaderMobileNavCta, HeaderMobileNavItem } from "./HeaderMobileNavItem";

const panelMotion = `transition-[grid-template-rows] ${SITE_MOTION}`;
const contentFadeMotion = `transition-opacity ${SITE_MOTION}`;

function mobileNavListFadeClass(open: boolean) {
  return cn(
    contentFadeMotion,
    open ? "opacity-100" : "opacity-0 delay-0",
    open && SITE_MOTION_DELAY_SHORT,
  );
}

type HeaderMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function HeaderMobileNav({ open, onClose }: HeaderMobileNavProps) {
  const { expandedId, toggle } = useMobileNavAccordion(open);
  const pathname = usePathname();
  const listFade = mobileNavListFadeClass(open);

  return (
    <>
      <PortalBackdrop open={open} onClose={onClose} className="tablet:hidden" />

      <div
        id={MOBILE_NAV_PANEL_ID}
        data-state={open ? "open" : "closed"}
        className={cn(
          "bg-background tablet:hidden absolute inset-x-0 top-[calc(100%+1px)] z-50 grid overflow-hidden rounded-b-3xl shadow-none",
          panelMotion,
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          !open && "pointer-events-none delay-120",
        )}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="min-w-0 px-(--layout-margin-sm) pt-2 pb-(--layout-margin-sm)"
            aria-label="主選單（行動版）"
          >
            <ul
              className={cn(
                "[&>li:last-child>button]:border-b-0",
                "[&>li:last-child>a]:border-b-0",
                listFade,
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
                  currentPath={pathname}
                />
              ))}
            </ul>

            {HEADER_MOBILE_CTA_ITEM && (
              <ul
                className={cn(
                  "mt-(--layout-gutter-lg) list-none bg-sky-50",
                  "[&:has(button[aria-expanded=true])]:overflow-hidden",
                  "[&:has(button[aria-expanded=true])]:rounded-b-2xl",
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
