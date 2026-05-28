"use client";

import type { ReactNode } from "react";

import GlobeSvg from "@/assets/icons/globe.svg";
import { NavDropdown } from "@/components/ui/NavDropdown";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import {
  HEADER_NAV_ITEMS,
  headerNavItemKey,
  type HeaderNavItem,
} from "@/lib/headerNav";

type HeaderDesktopNavProps = {
  serviceMegaTrigger: ReactNode;
};

function HeaderDesktopNavItem({
  item,
  index,
  serviceMegaTrigger,
  pathname,
}: {
  item: HeaderNavItem;
  index: number;
  serviceMegaTrigger: ReactNode;
  pathname: string;
}) {
  const key = headerNavItemKey(item, index);

  if (item.kind === "link") {
    return (
      <li key={key}>
        <Link
          href={item.href}
          className={cn(
            "typo-body2-m text-navy-900 hover:text-navy-600",
            "transition-colors",
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  if (item.kind === "serviceMega") {
    return serviceMegaTrigger;
  }

  if (item.kind === "menu") {
    const guideItems = HEADER_GUIDE_MENU_ITEMS.map(({ label, href }) => ({
      label,
      href,
    }));

    return (
      <NavDropdown
        key={key}
        menuAriaLabel={`${item.label}相關連結`}
        items={guideItems}
        triggerClassName={cn(
          "typo-body2-m text-navy-900 hover:text-navy-600",
          "transition-colors",
        )}
        triggerContent={item.label}
        chevronClassName="opacity-70"
        panelClassName="mt-10"
      />
    );
  }

  if (item.kind === "lang") {
    const langItems = HEADER_LANG_MENU_ITEMS.map(({ label, code }) => ({
      label,
      href: `/${code}${pathname}`,
      onSelect: () => localStorage.setItem("lang", code),
    }));

    return (
      <NavDropdown
        key={key}
        menuAriaLabel="介面語言"
        items={langItems}
        triggerClassName={cn(
          "typo-body2-m text-navy-900 hover:text-sky-600",
          "transition-colors",
        )}
        triggerContent={<GlobeSvg className="block size-6 shrink-0 opacity-80" />}
        triggerAriaLabel="選擇介面語言"
        chevronClassName="opacity-70"
        panelClassName="mt-9"
      />
    );
  }

  const remitItems = HEADER_REMIT_MENU_ITEMS.map(({ label, href }) => ({
    label,
    href,
  }));

  return (
    <NavDropdown
      key={key}
      menuAriaLabel="前往匯款管道"
      items={remitItems}
      triggerClassName={cn(
        "focus-visible:outline-navy-700 bg-navy-500 hover:bg-navy-600 h-[57px] w-[138px] shrink-0 rounded-xl py-3 pr-4 pl-6 focus-visible:outline-2 focus-visible:outline-offset-2",
        "typo-body2-m text-white",
        "transition-colors",
      )}
      triggerContent={item.label}
      chevronClassName="text-white opacity-90"
      className="shrink-0"
      panelClassName="mt-6 min-w-45"
    />
  );
}

export function HeaderDesktopNav({
  serviceMegaTrigger,
}: HeaderDesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="tablet:flex hidden min-w-0 shrink-0 items-center gap-(--layout-gutter-md) overflow-visible"
      aria-label="主選單"
    >
      <ul className="flex items-center gap-(--layout-gutter-md) whitespace-nowrap">
        {HEADER_NAV_ITEMS.map((item, index) => (
          <HeaderDesktopNavItem
            key={headerNavItemKey(item, index)}
            item={item}
            index={index}
            serviceMegaTrigger={serviceMegaTrigger}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
}
