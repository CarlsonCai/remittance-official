"use client";

import Link from "next/link";
import { type ReactNode, useCallback, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useIsClient } from "@/hooks/useIsClient";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { cn } from "@/lib/utils";

const MOTION = "duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.35,1)]";
const panelTransition = `transition-[opacity,transform] ${MOTION}`;
const backdropTransition = `transition-opacity ${MOTION}`;
const chevronTransition = `transition-transform ${MOTION}`;

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
              backdropTransition,
              "fixed inset-0 z-40 bg-black/40",
              open
                ? "opacity-100"
                : "pointer-events-none opacity-0",
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
            chevronTransition,
            open ? "-rotate-90" : "rotate-90",
            chevronClassName,
          )}
        />
      </button>

      <div
        id={panelDomId}
        role="menu"
        aria-label={menuAriaLabel}
        aria-hidden={!open}
        className={cn(
          panelTransition,
          "border-navy-100 absolute top-full left-1/2 z-50 mt-4 flex w-fit max-w-[min(90vw,280px)] min-w-[120px] flex-col rounded-[16px] border bg-white",
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
                className="typo-body3-m text-navy-900 block w-full py-2 text-center wrap-break-word transition-colors hover:rounded-[8px] hover:bg-sky-100 focus-visible:rounded-[8px] focus-visible:bg-sky-100"
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

