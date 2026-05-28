import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2.5",
        "border-navy-100 rounded-lg border bg-white px-3 py-2",
        "typo-body5-m text-navy-500 tracking-[0.26px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
