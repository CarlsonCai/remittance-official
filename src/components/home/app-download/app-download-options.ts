import type { StaticImageData } from "next/image";

import dawhoIcon from "@/assets/images/app-download/dawho.png";
import dawhoQr from "@/assets/images/app-download/dawho-qr.png";
import jingHuiTongIcon from "@/assets/images/app-download/jing-hui-tong.png";
import jingHuiTongQr from "@/assets/images/app-download/jing-hui-tong-qr.png";
import mobileBankingIcon from "@/assets/images/app-download/mobile-banking.png";
import mobileBankingQr from "@/assets/images/app-download/mobile-banking-qr.png";

export const APP_VERSION_LINES = [
  "最新版本號碼：iOS v2.0.1，Android v2.0.1",
  "最低支援作業系統：iOS 13.0(含)以上，Android 9.0(含)以上",
] as const;

export type AppDownloadOption = {
  title: string;
  description: string;
  icon: StaticImageData;
  iconAlt: string;
  qr: StaticImageData;
  qrAlt: string;
};

export const APP_DOWNLOAD_OPTIONS = [
  {
    title: "永豐京匯通",
    description:
      "沒有永豐帳戶也可以！下載永豐京匯通APP，使用Mastercard(Ｑ-Send)/西聯匯款。",
    icon: jingHuiTongIcon,
    iconAlt: "永豐京匯通 App 圖示",
    qr: jingHuiTongQr,
    qrAlt: "永豐京匯通 App 下載 QR Code",
  },
  {
    title: "永豐DAWHO",
    description:
      "大額匯款首選！下載永豐DAWHO APP，享有專屬匯率減讓與全額到帳服務。",
    icon: dawhoIcon,
    iconAlt: "永豐DAWHO App 圖示",
    qr: dawhoQr,
    qrAlt: "永豐DAWHO App 下載 QR Code",
  },
  {
    title: "永豐行動銀行",
    description: "支援Visa直接通、西聯匯款，全方位金融一手掌握。",
    icon: mobileBankingIcon,
    iconAlt: "永豐行動銀行 App 圖示",
    qr: mobileBankingQr,
    qrAlt: "永豐行動銀行 App 下載 QR Code",
  },
] as const satisfies ReadonlyArray<AppDownloadOption>;
