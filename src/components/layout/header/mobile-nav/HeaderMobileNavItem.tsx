"use client";

import GlobeSvg from "@/assets/icons/globe.svg";
import { Link } from "@/i18n/navigation";
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

import { MobileNavAccordion } from "./MobileNavAccordion";
import { MobileServiceMegaMenuCard } from "./MobileServiceMegaMenuCard";

type HeaderMobileNavItemProps = {
  item: HeaderNavItem;
  index: number;
  expandedId: string | null;
  onToggleAccordion: (id: string) => void;
  onNavigate: () => void;
  currentPath: string;
};

export function HeaderMobileNavItem({
  item,
  index,
  expandedId,
  onToggleAccordion,
  onNavigate,
  currentPath,
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
          className="border-navy-100 typo-body1-m text-navy-900 flex w-full items-center justify-between border-b bg-transparent py-(--layout-gutter-sm) ps-3 pe-2 transition-colors [&_svg]:opacity-80"
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
    const guideLinks = HEADER_GUIDE_MENU_ITEMS.map(({ label, href }) => ({
      label,
      href,
    }));

    return (
      <MobileNavAccordion
        {...accordionProps}
        triggerLabel={item.label}
        links={guideLinks}
      />
    );
  }

  if (item.kind === "lang") {
    const langLinks = HEADER_LANG_MENU_ITEMS.map(({ label, code }) => ({
      label,
      href: `/${code}${currentPath}`,
      onSelect: () => localStorage.setItem("lang", code),
    }));

    return (
      <MobileNavAccordion
        {...accordionProps}
        triggerLabel="語言"
        triggerContent={
          <span className="flex items-center gap-2">
            <GlobeSvg className="block size-6 shrink-0" aria-hidden="true" />
            <span className="sr-only">語言</span>
          </span>
        }
        links={langLinks}
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
  const remitLinks = HEADER_REMIT_MENU_ITEMS.map(({ label, href }) => ({
    label,
    href,
  }));

  return (
    <MobileNavAccordion
      variant="cta"
      expanded={expandedId === MOBILE_NAV_CTA_ACCORDION_ID}
      onToggle={() => onToggleAccordion(MOBILE_NAV_CTA_ACCORDION_ID)}
      onNavigate={onNavigate}
      triggerLabel={ctaLabel}
      links={remitLinks}
    />
  );
}
