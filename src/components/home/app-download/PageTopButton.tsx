"use client";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";

export function PageTopButton() {
  return (
    <button
      type="button"
      className="tablet:flex absolute right-20 bottom-8 z-10 hidden items-center gap-3"
      aria-label="回到頁面頂部"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="border-navy-100 flex items-center justify-center rounded-full border bg-white px-3 py-4">
        <ArrowRightSvg
          className="text-navy-500 -rotate-90"
          width={20}
          height={20}
        />
      </span>
      <span className="typo-body3-m text-navy-500 whitespace-nowrap capitalize">
        Page Top
      </span>
    </button>
  );
}
