/** 正式站請設 `NEXT_PUBLIC_SITE_URL`（勿結尾 `/`） */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  return raw.replace(/\/+$/, "");
}
