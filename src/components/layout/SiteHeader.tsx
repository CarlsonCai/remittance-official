"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

import bankSinopacLogoBlack from "@/assets/images/brand/bank-sinopac-logo-black.png";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { NavDropdown } from "@/components/ui/NavDropdown";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
  HEADER_SERVICE_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import { cn } from "@/lib/utils";

const MOBILE_NAV_PANEL_ID = "site-header-primary-nav-panel";

type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "menu"; label: string }
  | { kind: "lang" }
  | { kind: "cta"; label: string };

const NAV_ITEMS: NavItem[] = [
  { kind: "link", href: "/plans/", label: "推薦方案" },
  { kind: "menu", label: "匯款服務" },
  { kind: "menu", label: "匯款指南" },
  { kind: "link", href: "/news/", label: "最新消息" },
  { kind: "link", href: "/faq/", label: "常見問題" },
  { kind: "lang" },
  { kind: "cta", label: "前往匯款" },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="text-navy-900"
      aria-hidden="true"
      focusable="false"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

function navItemKey(item: NavItem, index: number): string {
  return `${item.kind}-${index}-${"href" in item ? item.href : item.kind === "menu" ? item.label : item.kind === "cta" ? item.label : "lang"}`;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function renderDesktopItem(item: NavItem, index: number) {
    const key = navItemKey(item, index);
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
    if (item.kind === "menu") {
      const items =
        item.label === "匯款服務"
          ? HEADER_SERVICE_MENU_ITEMS
          : HEADER_GUIDE_MENU_ITEMS;
      return (
        <NavDropdown
          key={key}
          menuId={`header-nav-menu-${index}`}
          menuAriaLabel={`${item.label}相關連結`}
          items={items}
          triggerClassName="typo-body2-m text-navy-900 hover:text-navy-600 transition-colors"
          triggerContent={item.label}
          chevronClassName="opacity-70"
        />
      );
    }
    if (item.kind === "lang") {
      return (
        <NavDropdown
          key={key}
          menuId="header-nav-lang"
          menuAriaLabel="介面語言"
          items={HEADER_LANG_MENU_ITEMS}
          triggerClassName="typo-body2-m text-navy-900 hover:text-sky-600 transition-colors"
          triggerContent={<GlobeIcon className="opacity-80" />}
          triggerAriaLabel="選擇介面語言"
          chevronClassName="opacity-70"
        />
      );
    }
    return (
      <NavDropdown
        key={key}
        menuId="header-nav-remit-cta"
        menuAriaLabel="前往匯款管道"
        items={HEADER_REMIT_MENU_ITEMS}
        triggerClassName="typo-body2-m focus-visible:outline-navy-700 h-[57px] w-[138px] shrink-0 rounded-[12px] bg-navy-500 py-3 pr-4 pl-6 text-white transition-colors hover:bg-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2"
        triggerContent={item.label}
        chevronClassName="text-white opacity-90"
        className="shrink-0"
      />
    );
  }

  function renderMobileItem(item: NavItem, index: number) {
    const key = navItemKey(item, index);
    const rowClass =
      "typo-body2-m flex w-full items-center justify-between border-b border-navy-100 py-3 text-navy-900 last:border-b-0";

    if (item.kind === "link") {
      return (
        <li key={key}>
          <Link href={item.href} className={rowClass} onClick={closeMenu}>
            {item.label}
          </Link>
        </li>
      );
    }
    if (item.kind === "menu") {
      const items =
        item.label === "匯款服務"
          ? HEADER_SERVICE_MENU_ITEMS
          : HEADER_GUIDE_MENU_ITEMS;
      return (
        <li
          key={key}
          className="border-navy-100 border-b last:border-b-0"
        >
          <div className="typo-body2-m text-navy-900 py-3">{item.label}</div>
          <ul className="pb-3">
            {items.map((sub, i) => (
              <li key={`${sub.href}-${i}`}>
                <Link
                  href={sub.href}
                  className="typo-body2-m text-navy-700 hover:text-navy-600 block py-2.5 pl-4 transition-colors"
                  onClick={closeMenu}
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    if (item.kind === "lang") {
      return (
        <li
          key={key}
          className="border-navy-100 border-b last:border-b-0"
        >
          <div className="typo-body2-m text-navy-900 flex items-center gap-2 py-3">
            <GlobeIcon className="opacity-80" />
            語言
          </div>
          <ul className="pb-3">
            {HEADER_LANG_MENU_ITEMS.map((sub, i) => (
              <li key={`${sub.href}-${i}`}>
                <Link
                  href={sub.href}
                  className="typo-body2-m text-navy-700 hover:text-navy-600 block py-2.5 pl-4 transition-colors"
                  onClick={closeMenu}
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    return (
      <li
        key={key}
        className="border-navy-100 border-b last:border-b-0"
      >
        <div className="typo-body2-m text-navy-900 py-3">{item.label}</div>
        <ul className="pb-3">
          {HEADER_REMIT_MENU_ITEMS.map((sub, i) => (
            <li key={`${sub.href}-${i}`}>
              <Link
                href={sub.href}
                className="typo-body2-m text-navy-700 hover:text-navy-600 block py-2.5 pl-4 transition-colors"
                onClick={closeMenu}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <header className="border-navy-100 bg-background w-full border-b">
      <div className="w-full px-5 tablet:px-12">
        <div className="flex h-16 w-full min-w-0 items-center justify-between gap-(--layout-gutter-sm) tablet:h-auto tablet:gap-(--layout-gutter-md) tablet:py-4">
            <div className="flex min-w-0 flex-1 items-center gap-(--layout-gutter-sm) tablet:gap-(--layout-gutter-md)">
              <Link
                href="/"
                className="inline-flex shrink-0 items-center"
                aria-label="永豐銀行 Bank SinoPac，返回首頁"
              >
                <Image
                  src={bankSinopacLogoBlack}
                  alt="永豐銀行 Bank SinoPac"
                  width={135}
                  height={40}
                  sizes="(max-width: 1023px) 108px, 135px"
                  className="h-8 w-[108px] object-contain object-left tablet:h-10 tablet:w-[135px]"
                  priority
                />
              </Link>
              <span
                className="bg-navy-100 block h-[18px] w-px shrink-0 self-center tablet:h-6"
                aria-hidden="true"
              />
              <p className="typo-body4-m tablet:typo-body2-m text-navy-900 min-w-0 flex-1 truncate">
                全方位數位跨境匯款平台
              </p>
            </div>

            {/* 不可對包住絕對定位下拉的祖先用 overflow-x-auto：規格會把 overflow-y 算成 auto，面板往下展開會出現垂直卷軸 */}
            <nav
              className="hidden min-w-0 shrink-0 items-center gap-(--layout-gutter-md) overflow-visible tablet:flex"
              aria-label="主選單"
            >
              <ul className="flex items-center gap-(--layout-gutter-md) whitespace-nowrap">
                {NAV_ITEMS.map((item, i) => renderDesktopItem(item, i))}
              </ul>
            </nav>

            <button
              id={menuButtonId}
              type="button"
              className="text-navy-900 focus-visible:outline-navy-700 inline-flex shrink-0 items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 tablet:hidden"
              aria-controls={MOBILE_NAV_PANEL_ID}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "關閉主選單" : "開啟主選單"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
        </div>
      </div>

      <div
        id={MOBILE_NAV_PANEL_ID}
        className={`border-navy-100 border-t tablet:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div className="w-full px-5 tablet:px-12">
          <nav className="min-w-0 pb-4" aria-label="主選單（行動版）">
            <ul>{NAV_ITEMS.map((item, i) => renderMobileItem(item, i))}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
