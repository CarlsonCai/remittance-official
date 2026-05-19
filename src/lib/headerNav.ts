export const SERVICE_MEGA_PANEL_ID = "header-service-mega-panel";
export const MOBILE_NAV_PANEL_ID = "header-primary-nav-panel";
export const MOBILE_NAV_CTA_ACCORDION_ID = "cta";

export type HeaderNavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "serviceMega" }
  | { kind: "menu"; label: string }
  | { kind: "lang" }
  | { kind: "cta"; label: string };

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { kind: "link", href: "/plans/", label: "推薦方案" },
  { kind: "serviceMega" },
  { kind: "link", href: "/news/", label: "最新消息" },
  { kind: "menu", label: "匯款指南" },
  { kind: "link", href: "/faq/", label: "常見問題" },
  { kind: "lang" },
  { kind: "cta", label: "前往匯款" },
];

export const HEADER_MOBILE_LIST_ITEMS = HEADER_NAV_ITEMS.filter(
  (item) => item.kind !== "cta",
);

export const HEADER_MOBILE_CTA_ITEM = HEADER_NAV_ITEMS.find(
  (item): item is Extract<HeaderNavItem, { kind: "cta" }> =>
    item.kind === "cta",
);

export function headerNavItemKey(item: HeaderNavItem, index: number): string {
  if (item.kind === "link") return `${item.kind}-${index}-${item.href}`;
  if (item.kind === "menu" || item.kind === "cta") {
    return `${item.kind}-${index}-${item.label}`;
  }
  return `${item.kind}-${index}`;
}
