"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { useDownloadStoreVisibility } from "@/hooks/useDownloadStoreVisibility";

import appStoreDownload from "@/assets/images/app-download/app-store-download.png";
import googlePlayDownload from "@/assets/images/app-download/google-play-download.png";

import type { AppStoreUrls } from "./app-download-store-urls";

type AppDownloadStoreButtonsProps = {
  appTitle: string;
  storeUrls: AppStoreUrls;
};

const storeLinkClassName = cn(
  "inline-flex shrink-0",
  "focus-visible:ring-navy-500 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
);

export function AppDownloadStoreButtons({
  appTitle,
  storeUrls,
}: AppDownloadStoreButtonsProps) {
  const { showAppStore, showGooglePlay } = useDownloadStoreVisibility();

  return (
    <div className="flex w-full items-start justify-center gap-3 self-stretch">
      {showAppStore ? (
        <a
          href={storeUrls.ios}
          target="_blank"
          rel="noopener noreferrer"
          className={storeLinkClassName}
          aria-label={`於 App Store 下載${appTitle}`}
        >
          <Image
            src={appStoreDownload}
            alt=""
            width={appStoreDownload.width}
            height={appStoreDownload.height}
            className="h-10 w-auto"
          />
        </a>
      ) : null}
      {showGooglePlay ? (
        <a
          href={storeUrls.android}
          target="_blank"
          rel="noopener noreferrer"
          className={storeLinkClassName}
          aria-label={`於 Google Play 下載${appTitle}`}
        >
          <Image
            src={googlePlayDownload}
            alt=""
            width={googlePlayDownload.width}
            height={googlePlayDownload.height}
            className="h-10 w-auto"
          />
        </a>
      ) : null}
    </div>
  );
}
