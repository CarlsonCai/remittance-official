"use client";

import Link from "next/link";

import type { HeaderServiceMegaCard } from "@/lib/headerServiceMegaMenu";
import { cn } from "@/lib/utils";

type MobileServiceMegaMenuCardProps = {
  card: HeaderServiceMegaCard;
  isLast: boolean;
  onNavigate: () => void;
  tabIndex?: number;
};

export function MobileServiceMegaMenuCard({
  card,
  isLast,
  onNavigate,
  tabIndex,
}: MobileServiceMegaMenuCardProps) {
  return (
    <Link
      href={card.href}
      className={cn(
        "flex w-full items-center gap-2 border-b border-white bg-sky-50 py-(--layout-gutter-sm) ps-(--layout-margin-sm) pe-3",
        isLast && "rounded-b-2xl",
      )}
      onClick={onNavigate}
      tabIndex={tabIndex}
    >
      <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
        <span className="typo-body2-m text-navy-900">
          {card.title}
        </span>
        <p className="typo-body5-r text-navy-900">
          {card.description}
        </p>
      </span>
      <span
        className="flex w-(--size-media-card-thumb) shrink-0 self-stretch overflow-hidden rounded-sm bg-gray-200 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${card.image.src})` }}
        role="img"
        aria-label={card.imageAlt}
      />
    </Link>
  );
}
