/** 主選單下拉項目（連結為佔位，之後換正式 URL） */
export const HEADER_REMIT_MENU_ITEMS = [
  { label: "remitItems.jinghuiApp", href: "#" },
  { label: "remitItems.dawhoApp", href: "#" },
  { label: "remitItems.netBankApp", href: "#" },
  { label: "remitItems.mmaNet", href: "#" },
] as const;

export const HEADER_GUIDE_MENU_ITEMS = [
  { label: "guideItems.articles", href: "#" },
  { label: "guideItems.videos", href: "#" },
] as const;

export const HEADER_LANG_MENU_ITEMS = [
  { label: "繁體中文", href: "#", code: "zh-TW" },
  { label: "English", href: "#", code: "en" },
  { label: "Tiếng Việt", href: "#", code: "vi" },
] as const;
