import Link from "next/link";

import { GlobeIcon } from "@/components/icons/GlobeIcon";
import {
  HEADER_GUIDE_MENU_ITEMS,
  HEADER_LANG_MENU_ITEMS,
  HEADER_REMIT_MENU_ITEMS,
} from "@/lib/headerNavMenus";
import { HEADER_SERVICE_MEGA_CARDS } from "@/lib/headerServiceMegaMenu";
import {
  headerNavItemKey,
  MOBILE_NAV_CTA_ACCORDION_ID,
  type HeaderNavItem,
} from "@/lib/headerNav";
import { cn } from "@/lib/utils";

import { MobileNavAccordion } from "./MobileNavAccordion";
import { MobileServiceMegaMenuCard } from "./MobileServiceMegaMenuCard";

type HeaderMobileNavItemProps = {
  item: HeaderNavItem;
  index: number;
  expandedId: string | null;
  onToggleAccordion: (id: string) => void;
  onNavigate: () => void;
};

export function HeaderMobileNavItem({
  item,
  index,
  expandedId,
  onToggleAccordion,
  onNavigate,
}: HeaderMobileNavItemProps) {
  const id = headerNavItemKey(item, index);
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
          className={cn(
            "border-navy-100 flex w-full items-center justify-between border-b bg-transparent py-(--header-mobile-nav-btn-py) ps-(--header-mobile-nav-btn-ps) pe-(--header-mobile-nav-btn-pe)",
            "typo-body1-m text-navy-900 [&_svg]:opacity-80",
            "transition-colors",
          )}
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

type HeaderMobileNavCtaProps = {
  expandedId: string | null;
  onToggleAccordion: (id: string) => void;
  onNavigate: () => void;
  ctaLabel: string;
};

export function HeaderMobileNavCta({
  expandedId,
  onToggleAccordion,
  onNavigate,
  ctaLabel,
}: HeaderMobileNavCtaProps) {
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
