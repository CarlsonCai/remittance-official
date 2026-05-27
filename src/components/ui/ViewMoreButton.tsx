import type { ButtonHTMLAttributes } from "react";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

type ViewMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

// 文字上移 / 箭頭右移共用相同 easing（全站標準 450ms cubic-bezier）
const TRANSFORM_MOTION = `transition-transform ${SITE_MOTION}`;

export function ViewMoreButton({
  className,
  children = "VIEW MORE",
  ...props
}: ViewMoreButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        // 表面：版型 + hover 顏色過場
        "group inline-flex items-center gap-1",
        `transition-colors ${SITE_MOTION}`,
        // 字形
        "text-navy-500 hover:text-sky-600",
        "text-sm leading-[140%] font-medium tracking-[0.28px] capitalize",
        // 定位（caller 傳入）
        className,
      )}
    >
      {/* 文字：hover 往上移 2px */}
      <span className={cn(TRANSFORM_MOTION, "group-hover:-translate-y-0.5")}>
        {children}
      </span>

      {/* 箭頭：hover 往右移 4px；顏色繼承 button currentColor */}
      <span className={cn(TRANSFORM_MOTION, "group-hover:translate-x-1")}>
        <ArrowRightSvg width={20} height={20} />
      </span>
    </button>
  );
}
