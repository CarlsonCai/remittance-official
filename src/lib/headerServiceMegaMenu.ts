import type { StaticImageData } from "next/image";

import mastercardQsendImage from "@/assets/images/service-mega/mastercard-qsend.png";
import vipExpressImage from "@/assets/images/service-mega/vip-express.png";
import visaDirectImage from "@/assets/images/service-mega/visa-direct.png";
import westernUnionImage from "@/assets/images/service-mega/western-union.png";

/** 桌面版「匯款服務」Mega Menu 文案與卡片（連結為佔位） */
export const HEADER_SERVICE_MEGA_INTRO = {
  title: "匯款服務",
  description: "多種匯款服務選擇，給在異鄉的您最即時的支援。",
} as const;

export type HeaderServiceMegaCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
};

export const HEADER_SERVICE_MEGA_CARDS: readonly HeaderServiceMegaCard[] = [
  {
    id: "western-union",
    title: "西聯匯款",
    description: "免銀行帳戶，數分鐘內即可領現",
    href: "#",
    image: westernUnionImage,
    imageAlt: "西聯匯款服務示意圖",
  },
  {
    id: "mastercard-qsend",
    title: "Mastercard(Q-Send)",
    description: "24小時隨會隨到，支援全球多國",
    href: "#",
    image: mastercardQsendImage,
    imageAlt: "Mastercard Q-Send 匯款服務示意圖",
  },
  {
    id: "visa-direct",
    title: "Visa 直接通",
    description: "即時到帳，應援海外緊急支出",
    href: "#",
    image: visaDirectImage,
    imageAlt: "Visa 直接通匯款服務示意圖",
  },
  {
    id: "vip-express",
    title: "大戶速匯",
    description: "換匯讓分最優，大額資金首選",
    href: "#",
    image: vipExpressImage,
    imageAlt: "大戶速匯服務示意圖",
  },
];
