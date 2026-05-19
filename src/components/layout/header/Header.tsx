"use client";

import { useCallback, useId, useState } from "react";

import { HeaderServiceMegaMenu } from "@/components/layout/header/header-service-mega-menu";
import { HamburgerIcon } from "@/components/layout/header/HamburgerIcon";
import { HeaderBrand } from "@/components/layout/header/HeaderBrand";
import { HeaderDesktopNav } from "@/components/layout/header/HeaderDesktopNav";
import { HeaderMobileNav } from "@/components/layout/header/HeaderMobileNav";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { MOBILE_NAV_PANEL_ID } from "@/lib/headerNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEscapeKey(closeMenu, menuOpen);

  return (
    <header
      className={cn(
        "bg-background relative z-50 w-full",
        "tablet:border-navy-100 tablet:border-b",
        !menuOpen && "border-navy-100 border-b",
      )}
    >
      <HeaderServiceMegaMenu>
        {(serviceMegaTrigger) => (
          <>
            <div className="layout-shell">
              <div className="layout-container">
                <div className="tablet:h-auto tablet:gap-(--layout-gutter-md) tablet:py-4 flex h-16 w-full min-w-0 items-center justify-between gap-(--layout-gutter-sm)">
                  <HeaderBrand />

                  <HeaderDesktopNav serviceMegaTrigger={serviceMegaTrigger} />

                  <button
                    id={menuButtonId}
                    type="button"
                    className={cn(
                      "focus-visible:outline-navy-700 tablet:hidden inline-flex shrink-0 items-center justify-center rounded-(--radius-control) p-2 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2",
                      "text-navy-900",
                      "transition-colors",
                    )}
                    aria-controls={MOBILE_NAV_PANEL_ID}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "關閉主選單" : "開啟主選單"}
                    onClick={() => setMenuOpen((open) => !open)}
                  >
                    <HamburgerIcon open={menuOpen} />
                  </button>
                </div>
              </div>
            </div>

            <HeaderMobileNav open={menuOpen} onClose={closeMenu} />
          </>
        )}
      </HeaderServiceMegaMenu>
    </header>
  );
}
