"use client";

import { type PointerEvent, useCallback } from "react";

import { isInsideServiceMega } from "@/lib/siteHeaderNav";

/** Mega 開啟時，點 header 其他區域先關閉（capture，不影響後續 NavDropdown toggle） */
export function useCloseMegaOnHeaderPointer(
  serviceMegaOpen: boolean,
  closeServiceMega: () => void,
) {
  return useCallback(
    (event: PointerEvent) => {
      if (!serviceMegaOpen) return;
      if (isInsideServiceMega(event.target as Node)) return;
      closeServiceMega();
    },
    [serviceMegaOpen, closeServiceMega],
  );
}
