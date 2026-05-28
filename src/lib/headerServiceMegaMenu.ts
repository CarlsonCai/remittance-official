import type { StaticImageData } from "next/image";

import westernUnionMegaImage from "@/assets/images/service-mega/western-union.png";
import mastercardQsendMegaImage from "@/assets/images/service-mega/mastercard-qsend.png";
import visaDirectMegaImage from "@/assets/images/service-mega/visa-direct.png";
import vipExpressMegaImage from "@/assets/images/service-mega/vip-express.png";

export type HeaderServiceMegaCard = {
  id: string;
  href: string;
  image: StaticImageData;
  title: string;
  description: string;
  imageAlt: string;
};

export const HEADER_SERVICE_MEGA_CARDS: readonly HeaderServiceMegaCard[] = [
  {
    id: "western-union",
    href: "#",
    image: westernUnionMegaImage,
    title: "西聯匯款",
    description: "免銀行帳戶，數分鐘內即可領現",
    imageAlt: "西聯匯款服務示意圖",
  },
  {
    id: "mastercard-qsend",
    href: "#",
    image: mastercardQsendMegaImage,
    title: "Mastercard(Q-Send)",
    description: "24小時隨會隨到，支援全球多國",
    imageAlt: "Mastercard Q-Send 匯款服務示意圖",
  },
  {
    id: "visa-direct",
    href: "#",
    image: visaDirectMegaImage,
    title: "Visa 直接通",
    description: "即時到帳，應援海外緊急支出",
    imageAlt: "Visa 直接通匯款服務示意圖",
  },
  {
    id: "vip-express",
    href: "#",
    image: vipExpressMegaImage,
    title: "大戶速匯",
    description: "換匯讓分最優，大額資金首選",
    imageAlt: "大戶速匯服務示意圖",
  },
];
