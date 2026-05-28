"use client";

import { createPortal } from "react-dom";

import { useIsClient } from "@/hooks/useIsClient";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

type PortalBackdropProps = {
  open: boolean;
  onClose: () => void;
  className?: string;
};

export function PortalBackdrop({
  open,
  onClose,
  className,
}: PortalBackdropProps) {
  const isClient = useIsClient();

  if (!isClient) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-40 bg-black/40",
        `transition-opacity ${SITE_MOTION}`,
        open ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
      onClick={onClose}
    />,
    document.body,
  );
}
