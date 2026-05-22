"use client";

import { useLayoutEffect, useState } from "react";

import {
  detectDownloadPlatform,
  type DownloadPlatform,
} from "@/lib/detectDownloadPlatform";

const MOBILE_MAX_WIDTH_QUERY = "(max-width: 1023px)";

export function useDownloadStoreVisibility() {
  const [platform, setPlatform] = useState<DownloadPlatform>("unknown");
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(MOBILE_MAX_WIDTH_QUERY);
    const sync = () => {
      setIsMobileLayout(media.matches);
      setPlatform(
        detectDownloadPlatform(navigator.userAgent, navigator.maxTouchPoints),
      );
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const filterByPlatform = isMobileLayout && platform !== "unknown";

  return {
    showAppStore: !filterByPlatform || platform === "ios",
    showGooglePlay: !filterByPlatform || platform === "android",
  };
}
