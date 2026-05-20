import type { StaticImageData } from "next/image";

import westernUnionMegaImage from "@/assets/images/service-mega/western-union.png";
import mastercardQsendMegaImage from "@/assets/images/service-mega/mastercard-qsend.png";
import visaDirectMegaImage from "@/assets/images/service-mega/visa-direct.png";
import vipExpressMegaImage from "@/assets/images/service-mega/vip-express.png";

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
    image: westernUnionMegaImage,
    imageAlt: "西聯匯款服務示意圖",
  },
  {
    id: "mastercard-qsend",
    title: "Mastercard(Q-Send)",
    description: "24小時隨會隨到，支援全球多國",
    href: "#",
    image: mastercardQsendMegaImage,
    imageAlt: "Mastercard Q-Send 匯款服務示意圖",
  },
  {
    id: "visa-direct",
    title: "Visa 直接通",
    description: "即時到帳，應援海外緊急支出",
    href: "#",
    image: visaDirectMegaImage,
    imageAlt: "Visa 直接通匯款服務示意圖",
  },
  {
    id: "vip-express",
    title: "大戶速匯",
    description: "換匯讓分最優，大額資金首選",
    href: "#",
    image: vipExpressMegaImage,
    imageAlt: "大戶速匯服務示意圖",
  },
];
