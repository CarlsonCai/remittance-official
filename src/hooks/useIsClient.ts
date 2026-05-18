import { useEffect, useState } from "react";

/** SSR 與 hydration 首屏一致；mount 後才為 true（可安全使用 createPortal） */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return isClient;
}
