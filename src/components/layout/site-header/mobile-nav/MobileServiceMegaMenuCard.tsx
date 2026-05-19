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
        "flex w-full items-center gap-(--header-mobile-nav-service-card-gap) border-b border-white bg-sky-50 py-(--header-mobile-nav-service-card-py) ps-(--header-mobile-nav-service-card-ps) pe-(--header-mobile-nav-service-card-pe)",
        isLast &&
          "rounded-b-(--header-mobile-nav-sub-panel-radius-b) border-b border-white bg-sky-50",
      )}
      onClick={onNavigate}
      tabIndex={tabIndex}
    >
      <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
        <span className="typo-body2-m text-navy-900">{card.title}</span>
        <p className="typo-body5-r text-navy-900">{card.description}</p>
      </span>
      <span
        className="flex w-(--header-mobile-nav-service-card-image-w) shrink-0 flex-col items-start self-stretch overflow-hidden rounded-(--header-mobile-nav-service-card-image-radius) bg-gray-200 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${card.image.src})` }}
        role="img"
        aria-label={card.imageAlt}
      />
    </Link>
  );
}
