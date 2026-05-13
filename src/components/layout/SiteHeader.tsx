"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const MOBILE_NAV_PANEL_ID = "site-header-primary-nav-panel";

type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "menu"; label: string }
  | { kind: "lang" }
  | { kind: "cta"; href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { kind: "link", href: "/plans/", label: "推薦方案" },
  { kind: "menu", label: "匯款服務" },
  { kind: "menu", label: "匯款指南" },
  { kind: "link", href: "/news/", label: "最新消息" },
  { kind: "link", href: "/faq/", label: "常見問題" },
  { kind: "lang" },
  { kind: "cta", href: "/remit/", label: "前往匯款" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={12}
      height={12}
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M6 8.25 1.5 3.75h9L6 8.25Z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      focusable="false"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6H12V3.282A9.003 9.003 0 0012 21zm0 0a9.004 9.004 0 01-8.716-6H12V3.282A9.003 9.003 0 0112 21z"
      />
    </svg>
  );
}

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
  return `${item.kind}-${index}-${"href" in item ? item.href : item.kind === "menu" ? item.label : "lang"}`;
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
            className="typo-body3 text-navy-900 hover:text-navy-600 font-medium transition-colors"
          >
            {item.label}
          </Link>
        </li>
      );
    }
    if (item.kind === "menu") {
      return (
        <li key={key}>
          <button
            type="button"
            className="typo-body3 text-navy-900 hover:text-navy-600 inline-flex items-center gap-1 font-medium transition-colors"
            aria-expanded="false"
            aria-haspopup="menu"
          >
            {item.label}
            <ChevronDown className="opacity-70" />
          </button>
        </li>
      );
    }
    if (item.kind === "lang") {
      return (
        <li key={key}>
          <button
            type="button"
            className="typo-body3 text-navy-900 hover:text-navy-600 inline-flex items-center gap-1 font-medium transition-colors"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-label="選擇介面語言"
          >
            <GlobeIcon className="opacity-80" />
            <ChevronDown className="opacity-70" />
          </button>
        </li>
      );
    }
    return (
      <li key={key}>
        <Link
          href={item.href}
          className="typo-body3 bg-navy-500 hover:bg-navy-600 focus-visible:outline-navy-700 inline-flex items-center gap-1 rounded-md px-4 py-2.5 font-medium text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {item.label}
          <ChevronDown className="text-white opacity-90" />
        </Link>
      </li>
    );
  }

  function renderMobileItem(item: NavItem, index: number) {
    const key = navItemKey(item, index);
    const rowClass =
      "typo-body3 flex w-full items-center justify-between border-b border-navy-100 py-3 font-medium text-navy-900 last:border-b-0";

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
      return (
        <li key={key}>
          <button
            type="button"
            className={rowClass}
            aria-expanded="false"
            aria-haspopup="menu"
          >
            <span>{item.label}</span>
            <ChevronDown className="opacity-70" />
          </button>
        </li>
      );
    }
    if (item.kind === "lang") {
      return (
        <li key={key}>
          <button
            type="button"
            className={rowClass}
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-label="選擇介面語言"
          >
            <span className="inline-flex items-center gap-2">
              <GlobeIcon className="opacity-80" />
              語言
            </span>
            <ChevronDown className="opacity-70" />
          </button>
        </li>
      );
    }
    return (
      <li key={key}>
        <Link
          href={item.href}
          className="typo-body3 bg-navy-500 hover:bg-navy-600 focus-visible:outline-navy-700 flex w-full items-center justify-center gap-1 rounded-md py-3 font-medium text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={closeMenu}
        >
          {item.label}
          <ChevronDown className="text-white opacity-90" />
        </Link>
      </li>
    );
  }

  return (
    <header className="border-navy-100 bg-background w-full border-b">
      <div className="layout-shell">
        <div className="layout-container">
          <div className="flex h-16 w-full items-center justify-between gap-(--layout-gutter-sm) tablet:h-auto tablet:min-h-[89px] tablet:gap-(--layout-gutter-md) tablet:py-4">
            <div className="flex min-w-0 flex-1 items-center gap-(--layout-gutter-sm) tablet:gap-(--layout-gutter-md)">
              <Link
                href="/"
                className="flex min-w-0 shrink-0 items-center gap-2 tablet:gap-3"
                aria-label="永豐銀行 Bank SinoPac，返回首頁"
              >
                <span
                  className="bg-logo-red inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white tablet:size-10 tablet:text-xs"
                  aria-hidden="true"
                >
                  永
                </span>
                <span className="flex min-w-0 flex-col tablet:hidden">
                  <span className="text-navy-900 text-sm leading-tight font-bold">
                    永豐銀行
                  </span>
                  <span className="text-navy-900 text-[11px] leading-tight font-semibold">
                    Bank SinoPac
                  </span>
                </span>
                <span className="typo-body3-b text-navy-900 hidden min-w-0 truncate tablet:inline tablet:whitespace-normal">
                  永豐銀行 Bank SinoPac
                </span>
              </Link>
              <span
                className="bg-navy-100 block h-8 w-px shrink-0"
                aria-hidden="true"
              />
              <p className="text-navy-900 tablet:typo-body3 min-w-0 flex-1 truncate text-[13px] leading-snug tablet:leading-normal">
                全方位數位跨境匯款平台
              </p>
            </div>

            <nav
              className="hidden shrink-0 items-center gap-(--layout-gutter-md) overflow-x-auto tablet:flex"
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
      </div>

      <div
        id={MOBILE_NAV_PANEL_ID}
        className={`border-navy-100 border-t tablet:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <div className="layout-shell">
          <div className="layout-container pb-4">
            <nav aria-label="主選單（行動版）">
              <ul>{NAV_ITEMS.map((item, i) => renderMobileItem(item, i))}</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
