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
      className="tablet:gap-(--layout-gutter-md) flex min-w-0 flex-1 items-center gap-(--layout-gutter-sm)"
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
          className="tablet:h-(--size-brand-logo-height-md) tablet:w-(--size-brand-logo-width-md) h-(--size-brand-logo-height-sm) w-(--size-brand-logo-width-sm) object-contain object-left"
          priority
        />
      </Link>
      {/* 1024–1439px nav 7 項佔 ~678px，空間不足，tablet 隱藏；desktop(1440+) 才顯示 */}
      <span
        className="bg-navy-100 tablet:hidden desktop:block h-(--size-header-separator-height-sm) desktop:h-(--size-header-separator-height-md) w-px shrink-0 self-center"
        aria-hidden="true"
      />
      <p className="typo-body4-m desktop:typo-body2-m text-navy-900 min-w-0 flex-1 truncate tablet:hidden desktop:block">
        全方位數位跨境匯款平台
      </p>
    </div>
  );
}
