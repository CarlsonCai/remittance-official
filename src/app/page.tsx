"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Locale | null;
    const locale =
      saved && routing.locales.includes(saved) ? saved : routing.defaultLocale;
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
