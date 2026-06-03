"use client";

import ArrowRightSvg from "@/assets/icons/arrow-right.svg";

export function PageTopButton() {
  return (
    <button
      type="button"
      className="tablet:right-20 tablet:bottom-8 tablet:gap-3 absolute right-5 bottom-5 z-10 flex items-center gap-2"
      aria-label="回到頁面頂部"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="border-navy-100 flex items-center justify-center rounded-full border bg-white px-2 py-3 tablet:px-3 tablet:py-4">
        <ArrowRightSvg
          className="text-navy-500 -rotate-90"
          width={20}
          height={20}
        />
      </span>
      <span className="typo-body4-m tablet:typo-body3-m text-navy-500 whitespace-nowrap capitalize">
        Page Top
      </span>
    </button>
  );
}
