/** 主選單下拉項目（連結為佔位，之後換正式 URL） */
export const HEADER_REMIT_MENU_ITEMS = [
  { label: "永豐京匯通App", href: "#" },
  { label: "永豐DAWHO App", href: "#" },
  { label: "永豐網路銀行App", href: "#" },
  { label: "MMA金融交易網", href: "#" },
] as const;

/** @deprecated 行動版請改用 HEADER_SERVICE_MEGA_CARDS */
export const HEADER_SERVICE_MENU_ITEMS = [
  { label: "西聯匯款", href: "#" },
  { label: "Mastercard(Q-Send)", href: "#" },
  { label: "Visa 直接通", href: "#" },
  { label: "大戶速匯", href: "#" },
] as const;

export const HEADER_GUIDE_MENU_ITEMS = [
  { label: "精選文章", href: "#" },
  { label: "操作影片", href: "#" },
] as const;

export const HEADER_LANG_MENU_ITEMS = [
  { label: "繁體中文", href: "#" },
  { label: "English", href: "#" },
  { label: "Tiếng Việt", href: "#" },
] as const;
