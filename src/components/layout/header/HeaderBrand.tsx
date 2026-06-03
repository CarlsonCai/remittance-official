import Image from "next/image";
import Link from "next/link";
import type { PointerEventHandler } from "react";

import bankSinopacLogoBlack from "@/assets/images/brand/bank-sinopac-logo-black.png";

type HeaderBrandProps = {
  onPointerDownCapture?: PointerEventHandler<HTMLDivElement>;
};

export function HeaderBrand({ onPointerDownCapture }: HeaderBrandProps) {
  return (
    <div
      className="flex min-w-0 flex-1 items-center gap-(--layout-gutter-sm)"
      onPointerDownCapture={onPointerDownCapture}
    >
      <Link
        href="/"
        className="inline-flex shrink-0 items-center"
        aria-label="永豐銀行 Bank SinoPac，返回首頁"
      >
        <Image
          src={bankSinopacLogoBlack}
          alt="永豐銀行 Bank SinoPac"
          width={135}
          height={40}
          sizes="(max-width: 1023px) 108px, 135px"
          className="tablet:h-10 tablet:w-[135px] h-8 w-27 object-contain object-left"
          priority
        />
      </Link>
      <span
        className="bg-navy-100 tablet:h-6 block h-4.5 w-px shrink-0 self-center"
        aria-hidden="true"
      />
      <p className="typo-body4-m tablet:typo-body2-m text-navy-900 min-w-0 flex-1 truncate">
        全方位數位跨境匯款平台
      </p>
    </div>
  );
}
