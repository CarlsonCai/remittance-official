"use client";

import type { RefObject } from "react";

import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { HEADER_MOTION } from "@/lib/headerMotion";
import { HEADER_SERVICE_MEGA_INTRO } from "@/lib/headerServiceMegaMenu";
import { cn } from "@/lib/utils";

const chevronTransition = `transition-transform ${HEADER_MOTION}`;

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
          "typo-body2-m",
          "transition-colors",
          open ? "text-sky-600" : "text-navy-900 hover:text-navy-600",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={onToggle}
      >
        {HEADER_SERVICE_MEGA_INTRO.title}
        <ChevronIcon
          className={cn(
            "opacity-70",
            chevronTransition,
            open ? "-rotate-90" : "rotate-90",
          )}
        />
      </button>
    </li>
  );
}
