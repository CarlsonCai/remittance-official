"use client";

import { useEffect } from "react";

const LOCALE_TO_HTML_LANG: Record<string, string> = {
  "zh-TW": "zh-Hant",
  en: "en",
  vi: "vi",
};

export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = LOCALE_TO_HTML_LANG[locale] ?? locale;
  }, [locale]);

  return null;
}
