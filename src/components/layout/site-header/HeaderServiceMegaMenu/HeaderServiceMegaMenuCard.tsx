"use client";

import Link from "next/link";

import type { HeaderServiceMegaCard as HeaderServiceMegaCardData } from "@/lib/headerServiceMegaMenu";

function serviceMegaCardBackground(imageSrc: string) {
  return `linear-gradient(180deg, rgba(0, 33, 77, 0) 0%, rgba(0, 33, 77, 0.3) 40%, var(--navy-900) 100%), url(${imageSrc})`;
}

type HeaderServiceMegaMenuCardProps = {
  card: HeaderServiceMegaCardData;
  onClose: () => void;
};

export function HeaderServiceMegaMenuCard({
  card,
  onClose,
}: HeaderServiceMegaMenuCardProps) {
  return (
    <li className="min-w-0">
      <Link
        href={card.href}
        className="group flex w-full min-w-0 flex-[1_0_0] flex-col items-start gap-3"
        onClick={onClose}
      >
        <span className="typo-body2 text-navy-900 font-semibold capitalize">
          {card.title}
        </span>
        <div
          className="relative aspect-4/3 w-full self-stretch overflow-hidden rounded-[12px] bg-gray-200 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: serviceMegaCardBackground(card.image.src),
          }}
        >
          <span className="sr-only">{card.imageAlt}</span>
          <p className="typo-body3-b absolute right-3 bottom-[12.333px] left-3 line-clamp-2 overflow-hidden text-white capitalize">
            {card.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
