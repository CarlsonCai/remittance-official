/** 各 App 官方商店連結（台灣區） */
export type AppStoreUrls = Readonly<{
  ios: string;
  android: string;
}>;

export const JING_HUI_TONG_STORE_URLS = {
  ios: "https://apps.apple.com/tw/app/id393497156",
  android:
    "https://play.google.com/store/apps/details?id=com.sionpac.app.SinoPac&hl=zh_TW",
} as const satisfies AppStoreUrls;

export const DAWHO_STORE_URLS = {
  ios: "https://apps.apple.com/tw/app/id1494273814",
  android:
    "https://play.google.com/store/apps/details?id=com.sinopac.dawho&hl=zh_TW",
} as const satisfies AppStoreUrls;

export const MOBILE_BANKING_STORE_URLS = {
  ios: "https://apps.apple.com/tw/app/id393497156",
  android:
    "https://play.google.com/store/apps/details?id=com.sionpac.app.SinoPac&hl=zh_TW",
} as const satisfies AppStoreUrls;
