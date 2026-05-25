import type { StaticImageData } from "next/image";

import westernUnionMegaImage from "@/assets/images/service-mega/western-union.png";
import mastercardQsendMegaImage from "@/assets/images/service-mega/mastercard-qsend.png";
import visaDirectMegaImage from "@/assets/images/service-mega/visa-direct.png";
import vipExpressMegaImage from "@/assets/images/service-mega/vip-express.png";

export type HeaderServiceMegaCard = {
  id: string;
  href: string;
  image: StaticImageData;
};

export const HEADER_SERVICE_MEGA_CARDS: readonly HeaderServiceMegaCard[] = [
  { id: "western-union", href: "#", image: westernUnionMegaImage },
  { id: "mastercard-qsend", href: "#", image: mastercardQsendMegaImage },
  { id: "visa-direct", href: "#", image: visaDirectMegaImage },
  { id: "vip-express", href: "#", image: vipExpressMegaImage },
];
