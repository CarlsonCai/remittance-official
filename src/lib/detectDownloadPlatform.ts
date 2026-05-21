export type DownloadPlatform = "ios" | "android" | "unknown";

/** 依 User-Agent 判斷行動裝置平台（含 iPadOS 桌面模式） */
export function detectDownloadPlatform(
  userAgent: string,
  maxTouchPoints = 0,
): DownloadPlatform {
  if (/android/i.test(userAgent)) {
    return "android";
  }
  if (/iPad|iPhone|iPod/i.test(userAgent)) {
    return "ios";
  }
  if (/Macintosh/i.test(userAgent) && maxTouchPoints > 1) {
    return "ios";
  }
  return "unknown";
}
