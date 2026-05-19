"use client";

import { type ReactNode, useCallback, useMemo, useRef, useState } from "react";

import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { SERVICE_MEGA_PANEL_ID } from "@/lib/headerNav";

import { HeaderServiceMegaMenuPanel } from "./HeaderServiceMegaMenuPanel";
import { HeaderServiceMegaMenuTrigger } from "./HeaderServiceMegaMenuTrigger";

type HeaderServiceMegaMenuProps = {
  children: (trigger: ReactNode) => ReactNode;
};

export function HeaderServiceMegaMenu({
  children,
}: HeaderServiceMegaMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLLIElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((value) => !value), []);
  const outsideRefs = useMemo(() => [triggerRef, panelRef], []);

  useOnClickOutside(outsideRefs, close, open);
  useEscapeKey(close, open);

  const trigger = (
    <HeaderServiceMegaMenuTrigger
      open={open}
      panelId={SERVICE_MEGA_PANEL_ID}
      onToggle={toggle}
      rootRef={triggerRef}
    />
  );

  return (
    <>
      {children(trigger)}

      <HeaderServiceMegaMenuPanel
        open={open}
        panelId={SERVICE_MEGA_PANEL_ID}
        onClose={close}
        rootRef={panelRef}
      />
    </>
  );
}
