"use client";

import Link from "next/link";
import { type ReactNode, useId } from "react";

import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { HEADER_MOTION } from "@/lib/headerMotion";
import { cn } from "@/lib/utils";

const accordionPanelMotion = `transition-[grid-template-rows] ${HEADER_MOTION}`;
const chevronMotion = `transition-transform ${HEADER_MOTION}`;

type NavLink = { href: string; label: string };

export type MobileNavAccordionProps = {
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  triggerLabel: string;
  triggerContent?: ReactNode;
  links?: readonly NavLink[];
  children?: ReactNode;
  variant?: "default" | "cta";
};

export function MobileNavAccordion({
  expanded,
  onToggle,
  onNavigate,
  triggerLabel,
  triggerContent,
  links,
  children,
  variant = "default",
}: MobileNavAccordionProps) {
  const panelId = useId().replace(/:/g, "");
  const isCta = variant === "cta";

  return (
    <li
      className={cn(
        isCta && "bg-sky-50",
        isCta &&
          expanded &&
          "overflow-hidden rounded-b-(--radius-panel-bottom-md)",
      )}
    >
      <button
        type="button"
        className={
          isCta
            ? cn(
                "focus-visible:outline-navy-700 bg-navy-500 hover:bg-navy-600 flex h-(--size-button-cta-height) w-full shrink-0 items-center justify-center gap-(--spacing-button-cta-gap) self-stretch rounded-(--radius-button) py-(--spacing-button-cta-block) ps-(--spacing-button-cta-inline-start) pe-(--spacing-button-cta-inline-end) focus-visible:outline-2 focus-visible:outline-offset-2",
                "typo-body1-m text-white",
                "transition-colors",
              )
            : cn(
                "border-navy-100 flex w-full items-center justify-between border-b bg-transparent py-(--layout-gutter-sm) ps-(--spacing-nav-item-inline-start) pe-(--spacing-nav-item-inline-end)",
                "typo-body1-m text-navy-900 [&_svg]:opacity-80",
                "transition-colors",
                expanded &&
                  "text-sky-600 [&_svg]:text-sky-600 [&_svg]:opacity-100",
              )
        }
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {triggerContent ?? <span>{triggerLabel}</span>}
        <ChevronIcon
          className={cn(
            isCta ? "size-5" : "size-6",
            isCta
              ? "text-white opacity-90"
              : expanded
                ? "text-sky-600"
                : "opacity-70",
            chevronMotion,
            expanded ? "-rotate-90" : "rotate-90",
          )}
        />
      </button>

      <div
        className={cn(
          "grid",
          accordionPanelMotion,
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden rounded-b-(--radius-panel-bottom-md)">
          <ul
            id={panelId}
            className="overflow-hidden rounded-b-(--radius-panel-bottom-md) bg-sky-50"
            aria-hidden={!expanded}
          >
            {children ??
              links?.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block w-full border-b border-white bg-sky-50 py-(--spacing-subnav-link-block) ps-(--spacing-subnav-link-inline-start) pe-(--spacing-subnav-link-inline-end) hover:bg-sky-100",
                      "typo-body2-m text-navy-900",
                      "transition-colors",
                      index === links.length - 1 &&
                        "rounded-b-(--radius-panel-bottom-md)",
                    )}
                    onClick={onNavigate}
                    tabIndex={expanded ? undefined : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
