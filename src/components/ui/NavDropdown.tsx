"use client";

import Link from "next/link";
import { type ReactNode, useCallback, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useIsClient } from "@/hooks/useIsClient";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

const panelTransition = `transition-[opacity,transform] ${SITE_MOTION}`;
const backdropTransition = `transition-opacity ${SITE_MOTION}`;
const chevronTransition = `transition-transform ${SITE_MOTION}`;

export type NavDropdownItem = {
  label: string;
  href: string;
};

export type NavDropdownProps = {
  menuAriaLabel: string;
  items: readonly NavDropdownItem[];
  triggerClassName: string;
  triggerContent: ReactNode;
  chevronClassName?: string;
  className?: string;
  panelClassName?: string;
  triggerAriaLabel?: string;
};

export function NavDropdown({
  menuAriaLabel,
  items,
  triggerClassName,
  triggerContent,
  chevronClassName,
  className,
  panelClassName,
  triggerAriaLabel,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();
  const rootRef = useRef<HTMLLIElement>(null);
  const panelDomId = `nav-dropdown-panel-${useId().replace(/:/g, "")}`;

  const close = useCallback(() => setOpen(false), []);
  const toggle = () => setOpen((prev) => !prev);

  useOnClickOutside(rootRef, close, open);
  useEscapeKey(close, open);

  return (
    <li ref={rootRef} className={cn("relative list-none", className)}>
      {isClient &&
        createPortal(
          <div
            aria-hidden="true"
            className={cn(
              "fixed inset-0 z-40 bg-black/40",
              backdropTransition,
              open ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            onClick={close}
          />,
          document.body,
        )}

      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center gap-1",
          triggerClassName,
        )}
        aria-label={triggerAriaLabel}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={panelDomId}
        onClick={toggle}
      >
        {triggerContent}
        <ChevronIcon
          className={cn(
            chevronClassName,
            chevronTransition,
            open ? "-rotate-90" : "rotate-90",
          )}
        />
      </button>

      <div
        id={panelDomId}
        role="menu"
        aria-label={menuAriaLabel}
        aria-hidden={!open}
        className={cn(
          "border-navy-100 absolute top-full left-1/2 z-50 mt-4 flex w-fit max-w-[min(90vw,var(--size-dropdown-panel-max-width))] min-w-(--size-dropdown-panel-min-width-sm) flex-col rounded-2xl border bg-white",
          panelTransition,
          open
            ? "visible -translate-x-1/2 translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-x-1/2 -translate-y-1 opacity-0",
          panelClassName,
        )}
      >
        <ul className="flex flex-col p-2" role="none">
          {items.map((item, index) => (
            <li key={`${item.href}-${index}`} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className={cn(
                  "block w-full py-2 text-center wrap-break-word hover:rounded-xl hover:bg-sky-100 focus-visible:rounded-xl focus-visible:bg-sky-100",
                  "typo-body3-m text-navy-900",
                  "transition-colors",
                )}
                onClick={close}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
