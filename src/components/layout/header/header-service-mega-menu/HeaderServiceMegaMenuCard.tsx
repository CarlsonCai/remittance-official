"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import type { HeaderServiceMegaCard as HeaderServiceMegaCardData } from "@/lib/headerServiceMegaMenu";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

const imageZoomMotion = `transition-transform ${SITE_MOTION}`;
const titleUnderlineMotion = `after:transition-transform ${SITE_MOTION}`;

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
  const t = useTranslations("header");

  return (
    <li className="min-w-0">
      <Link
        href={card.href}
        className="group flex w-full min-w-0 flex-[1_0_0] flex-col items-start gap-3"
        onClick={onClose}
      >
        <span
          className={cn(
            "after:bg-navy-900 relative inline-block capitalize after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:content-['']",
            "typo-body2 text-navy-900 font-semibold",
            titleUnderlineMotion,
            "group-hover:after:scale-x-100",
          )}
        >
          {t(`serviceMega.${card.id}.title`)}
        </span>
        <div className="group/image relative aspect-4/3 w-full self-stretch overflow-hidden rounded-xl bg-gray-200">
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat",
              imageZoomMotion,
              "group-hover/image:scale-105",
            )}
            style={{
              backgroundImage: serviceMegaCardBackground(card.image.src),
            }}
          />
          <span className="sr-only">{t(`serviceMega.${card.id}.imageAlt`)}</span>
          <p className="typo-body3-b absolute right-3 bottom-3 left-3 z-10 line-clamp-2 overflow-hidden text-white capitalize">
            {t(`serviceMega.${card.id}.description`)}
          </p>
        </div>
      </Link>
    </li>
  );
}
