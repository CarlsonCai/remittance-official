import type { Metadata } from "next";
import { HomeAppDownload } from "@/components/home/app-download";
import { HomeRemittanceOptions } from "@/components/home/remittance-options";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeLatestNews } from "@/components/home/HomeLatestNews";
import { HomeRemittanceGuide } from "@/components/home/HomeRemittanceGuide";
import { HomeServiceScenarios } from "@/components/home/HomeServiceScenarios";

export const metadata: Metadata = {
  title: "跨境匯款服務",
  description:
    "永豐銀行跨境匯款官方資訊：匯率試算、匯款情境、指南與最新消息，安全便利完成海外匯款需求。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "跨境匯款服務 | 匯款官方網站",
    description:
      "永豐銀行跨境匯款官方資訊：匯率試算、匯款情境、指南與最新消息。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function Home() {
  return (
    <div className="bg-background flex min-h-full flex-1 flex-col font-sans">
      <main className="flex flex-1 flex-col">
        <HomeHero />
        <HomeServiceScenarios />
        <HomeRemittanceOptions />
        <HomeRemittanceGuide />
        <HomeLatestNews />
        <HomeAppDownload />
      </main>
    </div>
  );
}
