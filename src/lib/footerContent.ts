export type FooterQuickLink = {
  label: string;
  href: string;
};

export type FooterServiceLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  sectionId: string;
  title: string;
  links: FooterServiceLink[];
};

export const footerCompany = {
  legalName: "永豐商業銀行股份有限公司",
  address: "登記地址：臺北市中山區南京東路3段36號",
  taxId: "統一編號：86517384",
} as const;

export const footerQuickLinks: FooterQuickLink[] = [
  { label: "推薦方案", href: "/plans/" },
  { label: "最新消息", href: "/news/" },
  { label: "匯款指南", href: "/guide/" },
  { label: "常見問題", href: "/faq/" },
];

export const footerRemittanceServices = {
  title: "匯款服務",
  links: [
    { label: "西聯匯款", href: "#" },
    { label: "Mastercard(Q-Send)", href: "#" },
    { label: "Visa直接通", href: "#" },
    { label: "大戶速匯", href: "#" },
  ],
} as const;

export const footerCommonAndContact: FooterLinkGroup[] = [
  {
    sectionId: "footer-common-links",
    title: "常用連結",
    links: [
      { label: "匯率查詢", href: "#" },
      { label: "營業據點", href: "#" },
    ],
  },
  {
    sectionId: "footer-contact",
    title: "聯絡我們",
    links: [
      { label: "客服中心", href: "#" },
      { label: "智慧小豐", href: "#" },
    ],
  },
];

export const footerSlogan = "謹慎理財 信用至上";

export const footerDisclaimerLines = [
  "銀行客服24小時服務專線：(02)2505-9999",
  "信用卡客服24小時服務專線：(02)2528-7776",
  "循環信用利率 5%~15% (基準日 2023/3/3)；預借現金手續費：預借現金金額 X 3.5% + 指定金額 (100 元新台幣/3.5 美元/350 日圓/3 歐元)。其他費用請上 永豐銀行 網站查詢",
] as const;

export const footerCopyright =
  "Copyright © 2026 永豐商業銀行股份有限公司. All Rights Reserved.";

export const footerLegalLinks = [
  { label: "法定公告事項", href: "#" },
  { label: "隱私權保護聲明", href: "#" },
  { label: "資訊安全政策", href: "#" },
] as const;
