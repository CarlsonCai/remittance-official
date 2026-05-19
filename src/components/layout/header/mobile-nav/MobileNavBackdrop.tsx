"use client";

import { createPortal } from "react-dom";

import { useIsClient } from "@/hooks/useIsClient";
import { HEADER_MOTION } from "@/lib/headerMotion";
import { cn } from "@/lib/utils";

const backdropMotion = `transition-opacity ${HEADER_MOTION}`;

type MobileNavBackdropProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavBackdrop({ open, onClose }: MobileNavBackdropProps) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className={cn(
        "tablet:hidden fixed inset-0 z-40 bg-black/40",
        backdropMotion,
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={onClose}
    />,
    document.body,
  );
}
