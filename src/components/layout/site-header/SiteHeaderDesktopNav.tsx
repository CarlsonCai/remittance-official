import Link from "next/link";
import type { PointerEventHandler } from "react";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { HeaderServiceMegaMenuTrigger } from "@/components/layout/site-header/HeaderServiceMegaMenu";
import { NavDropdown } from "@/components/ui/NavDropdown";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import {
  SERVICE_MEGA_PANEL_ID,
  SITE_HEADER_NAV_ITEMS,
  siteHeaderNavItemKey,
  type SiteHeaderNavItem,
} from "@/lib/siteHeaderNav";

type SiteHeaderDesktopNavProps = {
  serviceMegaOpen: boolean;
  onToggleServiceMega: () => void;
  onPointerDownCapture?: PointerEventHandler<HTMLElement>;
};

function SiteHeaderDesktopNavItem({
  item,
  index,
  serviceMegaOpen,
  onToggleServiceMega,
}: {
  item: SiteHeaderNavItem;
  index: number;
  serviceMegaOpen: boolean;
  onToggleServiceMega: () => void;
}) {
  const key = siteHeaderNavItemKey(item, index);

  if (item.kind === "link") {
    return (
      <li key={key}>
        <Link
          href={item.href}
          className="typo-body2-m text-navy-900 hover:text-navy-600 transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  if (item.kind === "serviceMega") {
    return (
      <HeaderServiceMegaMenuTrigger
        key={key}
        open={serviceMegaOpen}
        panelId={SERVICE_MEGA_PANEL_ID}
        onToggle={onToggleServiceMega}
      />
    );
  }

  if (item.kind === "menu") {
    return (
      <NavDropdown
        key={key}
        menuAriaLabel={`${item.label}相關連結`}
        items={HEADER_GUIDE_MENU_ITEMS}
        triggerClassName="typo-body2-m text-navy-900 hover:text-navy-600 transition-colors"
        triggerContent={item.label}
        chevronClassName="opacity-70"
        panelClassName="mt-10"
      />
    );
  }

  if (item.kind === "lang") {
    return (
      <NavDropdown
        key={key}
        menuAriaLabel="介面語言"
        items={HEADER_LANG_MENU_ITEMS}
        triggerClassName="typo-body2-m text-navy-900 hover:text-sky-600 transition-colors"
        triggerContent={<GlobeIcon className="opacity-80" />}
        triggerAriaLabel="選擇介面語言"
        chevronClassName="opacity-70"
        panelClassName="mt-9"
      />
    );
  }

  return (
    <NavDropdown
      key={key}
      menuAriaLabel="前往匯款管道"
      items={HEADER_REMIT_MENU_ITEMS}
      triggerClassName="typo-body2-m focus-visible:outline-navy-700 h-[57px] w-[138px] shrink-0 rounded-[12px] bg-navy-500 py-3 pr-4 pl-6 text-white transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2"
      triggerContent={item.label}
      chevronClassName="text-white opacity-90"
      className="shrink-0"
      panelClassName="mt-6 min-w-[180px]"
    />
  );
}

export function SiteHeaderDesktopNav({
  serviceMegaOpen,
  onToggleServiceMega,
  onPointerDownCapture,
}: SiteHeaderDesktopNavProps) {
  return (
    <nav
      className="tablet:flex hidden min-w-0 shrink-0 items-center gap-(--layout-gutter-md) overflow-visible"
      aria-label="主選單"
      onPointerDownCapture={onPointerDownCapture}
    >
      <ul className="flex items-center gap-(--layout-gutter-md) whitespace-nowrap">
        {SITE_HEADER_NAV_ITEMS.map((item, index) => (
          <SiteHeaderDesktopNavItem
            key={siteHeaderNavItemKey(item, index)}
            item={item}
            index={index}
            serviceMegaOpen={serviceMegaOpen}
            onToggleServiceMega={onToggleServiceMega}
          />
        ))}
      </ul>
    </nav>
  );
}
