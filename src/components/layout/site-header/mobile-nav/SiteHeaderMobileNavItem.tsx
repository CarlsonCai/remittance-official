import Link from "next/link";

import { GlobeIcon } from "@/components/icons/GlobeIcon";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import { HEADER_SERVICE_MEGA_CARDS } from "@/lib/headerServiceMegaMenu";
import {
  MOBILE_NAV_CTA_ACCORDION_ID,
  siteHeaderNavItemKey,
  type SiteHeaderNavItem,
} from "@/lib/siteHeaderNav";

import { MobileNavAccordion } from "./MobileNavAccordion";
import { MobileServiceMegaMenuCard } from "./MobileServiceMegaMenuCard";

type SiteHeaderMobileNavItemProps = {
  item: SiteHeaderNavItem;
  index: number;
  expandedId: string | null;
  onToggleAccordion: (id: string) => void;
  onNavigate: () => void;
};

export function SiteHeaderMobileNavItem({
  item,
  index,
  expandedId,
  onToggleAccordion,
  onNavigate,
}: SiteHeaderMobileNavItemProps) {
  const id = siteHeaderNavItemKey(item, index);
  const expanded = expandedId === id;
  const accordionProps = {
    expanded,
    onToggle: () => onToggleAccordion(id),
    onNavigate,
  };

  if (item.kind === "link") {
    return (
      <li>
        <Link
          href={item.href}
          className="typo-body1-m border-navy-100 text-navy-900 flex w-full items-center justify-between border-b py-(--header-mobile-nav-btn-py) ps-(--header-mobile-nav-btn-ps) pe-(--header-mobile-nav-btn-pe) transition-colors [&_svg]:opacity-80"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  if (item.kind === "serviceMega") {
    return (
      <MobileNavAccordion {...accordionProps} triggerLabel="匯款服務">
        {HEADER_SERVICE_MEGA_CARDS.map((card, cardIndex) => (
          <li key={card.id}>
            <MobileServiceMegaMenuCard
              card={card}
              isLast={cardIndex === HEADER_SERVICE_MEGA_CARDS.length - 1}
              onNavigate={onNavigate}
              tabIndex={expanded ? undefined : -1}
            />
          </li>
        ))}
      </MobileNavAccordion>
    );
  }

  if (item.kind === "menu") {
    return (
      <MobileNavAccordion
        {...accordionProps}
        triggerLabel={item.label}
        links={HEADER_GUIDE_MENU_ITEMS}
      />
    );
  }

  if (item.kind === "lang") {
    return (
      <MobileNavAccordion
        {...accordionProps}
        triggerLabel="語言"
        triggerContent={
          <span className="flex items-center gap-2">
            <GlobeIcon aria-hidden="true" />
            <span className="sr-only">語言</span>
          </span>
        }
        links={HEADER_LANG_MENU_ITEMS}
      />
    );
  }

  return null;
}

type SiteHeaderMobileNavCtaProps = {
  expandedId: string | null;
  onToggleAccordion: (id: string) => void;
  onNavigate: () => void;
  ctaLabel: string;
};

export function SiteHeaderMobileNavCta({
  expandedId,
  onToggleAccordion,
  onNavigate,
  ctaLabel,
}: SiteHeaderMobileNavCtaProps) {
  return (
    <MobileNavAccordion
      variant="cta"
      expanded={expandedId === MOBILE_NAV_CTA_ACCORDION_ID}
      onToggle={() => onToggleAccordion(MOBILE_NAV_CTA_ACCORDION_ID)}
      onNavigate={onNavigate}
      triggerLabel={ctaLabel}
      links={HEADER_REMIT_MENU_ITEMS}
    />
  );
}
