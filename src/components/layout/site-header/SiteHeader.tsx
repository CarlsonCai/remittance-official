"use client";

import { useCallback, useId, useState } from "react";

import { HeaderServiceMegaMenu } from "@/components/layout/site-header/HeaderServiceMegaMenu";
import { HamburgerIcon } from "@/components/layout/site-header/HamburgerIcon";
import { SiteHeaderBrand } from "@/components/layout/site-header/SiteHeaderBrand";
import { SiteHeaderDesktopNav } from "@/components/layout/site-header/SiteHeaderDesktopNav";
import { SiteHeaderMobileNav } from "@/components/layout/site-header/SiteHeaderMobileNav";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { MOBILE_NAV_PANEL_ID } from "@/lib/siteHeaderNav";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEscapeKey(closeMenu, menuOpen);

  return (
    <header className="border-navy-100 bg-background relative z-50 w-full border-b">
      <HeaderServiceMegaMenu>
        {(serviceMegaTrigger) => (
          <div className="layout-shell">
            <div className="layout-container">
              <div className="tablet:h-auto tablet:gap-(--layout-gutter-md) tablet:py-4 flex h-16 w-full min-w-0 items-center justify-between gap-(--layout-gutter-sm)">
                <SiteHeaderBrand />

                <SiteHeaderDesktopNav serviceMegaTrigger={serviceMegaTrigger} />

                <button
                  id={menuButtonId}
                  type="button"
                  className="text-navy-900 focus-visible:outline-navy-700 tablet:hidden inline-flex shrink-0 items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2"
                  aria-controls={MOBILE_NAV_PANEL_ID}
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "關閉主選單" : "開啟主選單"}
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <HamburgerIcon open={menuOpen} />
                </button>
              </div>

              <SiteHeaderMobileNav open={menuOpen} onClose={closeMenu} />
            </div>
          </div>
        )}
      </HeaderServiceMegaMenu>
    </header>
  );
}
