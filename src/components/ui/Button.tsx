"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "solid" | "outline";
export type ButtonColor = "primary" | "dark" | "sky";
export type ButtonSize = "xl" | "lg" | "md" | "sm" | "xs";
export type ButtonGap = "lg" | "sm";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  gap?: ButtonGap;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** CTA mode: dot-pulse effect + color change + icon slides down on hover */
  pulse?: boolean;
};

// ─── size tables ──────────────────────────────────────────────────────────────

const SIZE_H: Record<ButtonSize, string> = {
  xl: "h-(--size-btn-xl)",
  lg: "h-17",
  md: "h-15",
  sm: "h-(--size-btn-sm)",
  xs: "h-13",
};

const SIZE_ROUNDED: Record<ButtonSize, string> = {
  xl: "rounded-2xl",
  lg: "rounded-2xl",
  md: "rounded-xl",
  sm: "rounded-xl",
  xs: "rounded-xl",
};

const SIZE_TYPO: Record<ButtonSize, string> = {
  xl: "text-2xl font-bold leading-[140%] tracking-[0.48px]",
  lg: "typo-body1-b",
  md: "typo-body1-b",
  sm: "typo-body2-b",
  xs: "typo-body3-b",
};

const DEFAULT_GAP: Record<ButtonSize, ButtonGap> = {
  xl: "lg",
  lg: "lg",
  md: "sm",
  sm: "lg",
  xs: "sm",
};

const GAP_CLASS: Record<ButtonGap, string> = {
  lg: "gap-2",
  sm: "gap-1",
};

// ─── padding tables ───────────────────────────────────────────────────────────
// Key: "${size}-${gap}". Rule: icon's opposite side gets +4～+8px extra.

type PaddingEntry = { noIcon: string; iconRight: string; iconLeft: string };

const PADDING: Record<string, PaddingEntry> = {
  "xl-lg": { noIcon: "px-6", iconRight: "pl-8 pr-6", iconLeft: "pl-6 pr-8" },
  "lg-lg": { noIcon: "px-5", iconRight: "pl-6 pr-5", iconLeft: "pl-5 pr-6" },
  "md-sm": { noIcon: "px-4", iconRight: "pl-6 pr-4", iconLeft: "pl-4 pr-6" },
  "sm-lg": { noIcon: "px-4", iconRight: "pl-5 pr-4", iconLeft: "pl-4 pr-5" },
  "sm-sm": { noIcon: "px-4", iconRight: "pl-6 pr-4", iconLeft: "pl-4 pr-6" },
  "xs-sm": { noIcon: "px-4", iconRight: "pl-5 pr-4", iconLeft: "pl-4 pr-5" },
};

// ─── color tables ─────────────────────────────────────────────────────────────

const SOLID_BG: Record<ButtonColor, string> = {
  primary: "bg-navy-500",
  dark: "bg-navy-800",
  sky: "bg-sky-600",
};

const SOLID_WIPE_BG: Record<ButtonColor, string> = {
  primary: "bg-navy-700",
  dark: "bg-navy-900",
  sky: "bg-sky-700",
};

const SOLID_PULSE_HOVER: Record<ButtonColor, string> = {
  primary: "hover:bg-navy-700",
  dark: "hover:bg-navy-900",
  sky: "hover:bg-sky-700",
};

const OUTLINE_CLASSES: Record<ButtonColor, string> = {
  primary: "border border-navy-500 bg-white text-navy-500 hover:bg-navy-50",
  sky: "border border-sky-600 bg-white text-sky-600 hover:bg-sky-50",
  dark: "border border-navy-800 bg-white text-navy-800 hover:bg-gray-100",
};

// ─── motion constants ─────────────────────────────────────────────────────────

const WIPE_MOTION =
  "transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(0.2,0.8,0.4,1)]";

const CTA_MOTION =
  "transition-transform duration-(--motion-duration-default) ease-(--motion-ease-default)";

// ─── component ────────────────────────────────────────────────────────────────

export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  gap,
  iconLeft,
  iconRight,
  pulse = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const effectiveGap = gap ?? DEFAULT_GAP[size];
  const paddingKey = `${size}-${effectiveGap}`;
  const padding =
    PADDING[paddingKey] ?? PADDING[`${size}-${DEFAULT_GAP[size]}`] ?? PADDING["xs-sm"];

  const paddingClass =
    iconRight && !iconLeft
      ? padding.iconRight
      : iconLeft && !iconRight
        ? padding.iconLeft
        : padding.noIcon;

  const isSolid = variant === "solid";
  const isPulse = isSolid && pulse && !disabled;
  const isWipe = isSolid && !pulse;

  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center",
        isWipe && "overflow-hidden",
        SIZE_H[size],
        SIZE_ROUNDED[size],
        paddingClass,
        isSolid && !disabled && SOLID_BG[color],
        isSolid && !disabled && "text-white",
        isPulse && SOLID_PULSE_HOVER[color],
        isPulse &&
          "transition-colors duration-(--motion-duration-default) ease-(--motion-ease-default)",
        !isSolid && !disabled && OUTLINE_CLASSES[color],
        !isSolid && !disabled && "transition-colors",
        disabled && "cursor-not-allowed bg-gray-300 text-white pointer-events-none",
        className,
      )}
    >
      {isWipe && (
        <span
          aria-hidden="true"
          className={cn("btn-wipe-overlay absolute inset-0 rounded-[inherit]", SOLID_WIPE_BG[color])}
        />
      )}

      {isPulse && (
        <>
          <span aria-hidden="true" className="btn-dot-left" />
          <span aria-hidden="true" className="btn-dot-right" />
        </>
      )}

      <span className={cn("relative z-10 flex items-center", GAP_CLASS[effectiveGap], SIZE_TYPO[size])}>
        {iconLeft}
        {children}
        {iconRight && (
          <span
            className={cn(
              isPulse ? CTA_MOTION : WIPE_MOTION,
              isPulse ? "group-hover:translate-y-1" : "group-hover:translate-x-1",
            )}
          >
            {iconRight}
          </span>
        )}
      </span>
    </button>
  );
}
