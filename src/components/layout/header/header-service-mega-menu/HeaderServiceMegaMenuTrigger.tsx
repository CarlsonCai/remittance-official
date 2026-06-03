"use client";

import type { RefObject } from "react";

import ArrowDownSvg from "@/assets/icons/arrow-down.svg";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

const chevronTransition = `transition-transform ${SITE_MOTION}`;

type HeaderServiceMegaMenuTriggerProps = {
  open: boolean;
  panelId: string;
  onToggle: () => void;
  rootRef?: RefObject<HTMLLIElement | null>;
};

export function HeaderServiceMegaMenuTrigger({
  open,
  panelId,
  onToggle,
  rootRef,
}: HeaderServiceMegaMenuTriggerProps) {
  return (
    <li ref={rootRef} className="relative list-none">
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center gap-1",
          "typo-body2-m pl-3 pr-2 py-4",
          "transition-colors",
          open ? "text-sky-600" : "text-navy-900 hover:text-navy-600",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={onToggle}
      >
        匯款服務
        <ArrowDownSvg
          className={cn(
            "size-5 shrink-0 opacity-70",
            chevronTransition,
            open ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
    </li>
  );
}
