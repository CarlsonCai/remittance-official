export const SERVICE_MEGA_PANEL_ID = "header-service-mega-panel";
export const MOBILE_NAV_PANEL_ID = "site-header-primary-nav-panel";
export const MOBILE_NAV_CTA_ACCORDION_ID = "cta";

export type SiteHeaderNavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "serviceMega" }
  | { kind: "menu"; label: string }
  | { kind: "lang" }
  | { kind: "cta"; label: string };

export const SITE_HEADER_NAV_ITEMS: SiteHeaderNavItem[] = [
  { kind: "link", href: "/plans/", label: "推薦方案" },
  { kind: "serviceMega" },
  { kind: "menu", label: "匯款指南" },
  { kind: "link", href: "/news/", label: "最新消息" },
  { kind: "link", href: "/faq/", label: "常見問題" },
  { kind: "lang" },
  { kind: "cta", label: "前往匯款" },
];

export const SITE_HEADER_MOBILE_LIST_ITEMS = SITE_HEADER_NAV_ITEMS.filter(
  (item) => item.kind !== "cta",
);

export const SITE_HEADER_MOBILE_CTA_ITEM = SITE_HEADER_NAV_ITEMS.find(
  (item): item is Extract<SiteHeaderNavItem, { kind: "cta" }> =>
    item.kind === "cta",
);

export function siteHeaderNavItemKey(
  item: SiteHeaderNavItem,
  index: number,
): string {
  if (item.kind === "link") return `${item.kind}-${index}-${item.href}`;
  if (item.kind === "menu" || item.kind === "cta") {
    return `${item.kind}-${index}-${item.label}`;
  }
  return `${item.kind}-${index}`;
}
