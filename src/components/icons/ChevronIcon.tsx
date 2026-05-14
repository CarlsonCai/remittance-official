import { cn } from "@/lib/utils";

type ChevronIconProps = {
  className?: string;
};

export function ChevronIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={cn("size-[15px] shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
