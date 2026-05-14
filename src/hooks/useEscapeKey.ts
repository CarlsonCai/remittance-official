"use client";

import { useEffect } from "react";

/**
 * 在 `enabled` 為 true 時監聽 `window` 的 `keydown`，按下 Escape 時呼叫 `handler`。
 */
export function useEscapeKey(
  handler: (event: KeyboardEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handler(event);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, handler]);
}
