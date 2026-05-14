type ChevronRightIconProps = {
  className?: string;
};

/** 與 `src/assets/icons/chevron-right.svg` 同形；`stroke="currentColor"` 可隨父層文字色（如 hover:text-sky-600）變化。 */
export function ChevronRightIcon({ className }: ChevronRightIconProps) {
  return (
    <svg
      className={className}
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
