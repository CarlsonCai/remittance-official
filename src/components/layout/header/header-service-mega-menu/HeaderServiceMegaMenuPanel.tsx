"use client";

import type { RefObject } from "react";

import { HEADER_SERVICE_MEGA_CARDS } from "@/lib/headerServiceMegaMenu";
import { PortalBackdrop } from "@/components/ui/PortalBackdrop";
import { SITE_MOTION } from "@/lib/siteMotion";
import { cn } from "@/lib/utils";

import { HeaderServiceMegaMenuCard } from "./HeaderServiceMegaMenuCard";

const panelTransition = `transition-[opacity,transform] ${SITE_MOTION}`;

type HeaderServiceMegaMenuPanelProps = {
  open: boolean;
  panelId: string;
  onClose: () => void;
  rootRef?: RefObject<HTMLDivElement | null>;
};

export function HeaderServiceMegaMenuPanel({
  open,
  panelId,
  onClose,
  rootRef,
}: HeaderServiceMegaMenuPanelProps) {
  return (
    <>
      <PortalBackdrop open={open} onClose={onClose} />

      <div
        ref={rootRef}
        id={panelId}
        aria-hidden={!open}
        className={cn(
          "border-navy-100 tablet:block absolute inset-x-0 top-full z-50 hidden overflow-hidden rounded-b-4xl border-t bg-white",
          panelTransition,
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-(--layout-container-lg) shrink-0 items-start gap-15 self-stretch px-(--layout-margin-lg) pt-10 pb-12">
          <div className="border-navy-100 flex max-w-xs shrink-0 flex-col gap-4 self-stretch border-r pr-15">
            <h2 className="typo-h4 text-navy-900 desktop:tracking-(--letter-spacing-h4-tight) font-bold">
              匯款服務
            </h2>
            <p className="typo-body3-r text-navy-900">
              多種匯款服務選擇，給在異鄉的您最即時的支援。
            </p>
          </div>

          <ul className="desktop:grid-cols-4 grid min-w-0 flex-1 grid-cols-2 gap-8">
            {HEADER_SERVICE_MEGA_CARDS.map((card) => (
              <HeaderServiceMegaMenuCard
                key={card.id}
                card={card}
                onClose={onClose}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
