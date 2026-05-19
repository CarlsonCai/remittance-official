"use client";

import Link from "next/link";

import type { HeaderServiceMegaCard as HeaderServiceMegaCardData } from "@/lib/headerServiceMegaMenu";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

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
        <span className="typo-body2 text-navy-900 after:bg-navy-900 relative inline-block font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-(--motion-duration-default) after:ease-(--motion-ease-default) after:content-[''] group-hover:after:scale-x-100">
          {card.title}
        </span>
        <div className="group/image relative aspect-4/3 w-full self-stretch overflow-hidden rounded-(--radius-card) bg-gray-200">
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform group-hover/image:scale-105",
              SITE_MOTION,
            )}
            style={{
              backgroundImage: serviceMegaCardBackground(card.image.src),
            }}
          />
          <span className="sr-only">{card.imageAlt}</span>
          <p className="typo-body3-b absolute right-3 bottom-(--space-3) left-3 z-10 line-clamp-2 overflow-hidden text-white capitalize">
            {card.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
