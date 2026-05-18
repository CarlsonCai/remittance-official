"use client";

import { type RefObject, useEffect } from "react";

type ClickOutsideRef = RefObject<HTMLElement | null>;

/**
 * 在 `enabled` 為 true 時，於 document 上監聽 `pointerdown`（capture）。
 * 若事件目標不在 `ref` 節點樹內，呼叫 `handler`。
 */
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T | null> | readonly ClickOutsideRef[],
  handler: (event: PointerEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return;

    function onPointerDown(event: PointerEvent) {
      const refList = Array.isArray(refs) ? refs : [refs];
      if (
        refList.some((ref) => {
          const el = ref.current;
          return el?.contains(event.target as Node) ?? false;
        })
      ) {
        return;
      }

      handler(event);
    }

    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [enabled, handler, refs]);
}
