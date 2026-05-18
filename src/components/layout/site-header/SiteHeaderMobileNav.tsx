import Link from "next/link";
import type { ReactNode } from "react";

import { GlobeIcon } from "@/components/icons/GlobeIcon";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import { HEADER_SERVICE_MEGA_CARDS } from "@/lib/headerServiceMegaMenu";
import {
  MOBILE_NAV_PANEL_ID,
  SITE_HEADER_NAV_ITEMS,
  siteHeaderNavItemKey,
  type SiteHeaderNavItem,
} from "@/lib/siteHeaderNav";
import { cn } from "@/lib/utils";

const MOBILE_LINK_ROW_CLASS =
  "typo-body2-m flex w-full items-center justify-between border-b border-navy-100 py-3 text-navy-900 last:border-b-0";

const MOBILE_SUB_LINK_CLASS =
  "typo-body2-m text-navy-700 hover:text-navy-600 block py-2.5 pl-4 transition-colors";

const MOBILE_SECTION_CLASS = "border-navy-100 border-b last:border-b-0";

type MobileNavSubmenuProps = {
  heading: ReactNode;
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
};

function MobileNavSubmenu({ heading, links, onNavigate }: MobileNavSubmenuProps) {
  return (
    <li className={MOBILE_SECTION_CLASS}>
      <div className="typo-body2-m text-navy-900 py-3">{heading}</div>
      <ul className="pb-3">
        {links.map((link, index) => (
          <li key={`${link.href}-${index}`}>
            <Link
              href={link.href}
              className={MOBILE_SUB_LINK_CLASS}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function SiteHeaderMobileNavItem({
  item,
  index,
  onNavigate,
}: {
  item: SiteHeaderNavItem;
  index: number;
  onNavigate: () => void;
}) {
  const key = siteHeaderNavItemKey(item, index);

  if (item.kind === "link") {
    return (
      <li key={key}>
        <Link href={item.href} className={MOBILE_LINK_ROW_CLASS} onClick={onNavigate}>
          {item.label}
        </Link>
      </li>
    );
  }

  if (item.kind === "serviceMega") {
    return (
      <MobileNavSubmenu
        key={key}
        heading="匯款服務"
        links={HEADER_SERVICE_MEGA_CARDS.map((card) => ({
          href: card.href,
          label: card.title,
        }))}
        onNavigate={onNavigate}
      />
    );
  }

  if (item.kind === "menu") {
    return (
      <MobileNavSubmenu
        key={key}
        heading={item.label}
        links={HEADER_GUIDE_MENU_ITEMS}
        onNavigate={onNavigate}
      />
    );
  }

  if (item.kind === "lang") {
    return (
      <MobileNavSubmenu
        key={key}
        heading={
          <span className="flex items-center gap-2">
            <GlobeIcon className="opacity-80" />
            語言
          </span>
        }
        links={HEADER_LANG_MENU_ITEMS}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <MobileNavSubmenu
      key={key}
      heading={item.label}
      links={HEADER_REMIT_MENU_ITEMS}
      onNavigate={onNavigate}
    />
  );
}

type SiteHeaderMobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function SiteHeaderMobileNav({ open, onClose }: SiteHeaderMobileNavProps) {
  return (
    <div
      id={MOBILE_NAV_PANEL_ID}
      className={cn(
        "border-navy-100 tablet:hidden border-t",
        open ? "block" : "hidden",
      )}
      aria-hidden={!open}
    >
      <nav className="min-w-0 pb-4" aria-label="主選單（行動版）">
        <ul>
          {SITE_HEADER_NAV_ITEMS.map((item, index) => (
            <SiteHeaderMobileNavItem
              key={siteHeaderNavItemKey(item, index)}
              item={item}
              index={index}
              onNavigate={onClose}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
