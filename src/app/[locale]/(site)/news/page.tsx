import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "5.0 最新消息",
  description: "5.0 最新消息",
};

export default function NewsPage() {
  return <PlaceholderPage title="5.0 最新消息" />;
}
