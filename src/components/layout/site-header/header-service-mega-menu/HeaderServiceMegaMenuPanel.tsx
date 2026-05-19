"use client";

import type { RefObject } from "react";
import { createPortal } from "react-dom";

import {
  HEADER_SERVICE_MEGA_CARDS,
  HEADER_SERVICE_MEGA_INTRO,
} from "@/lib/headerServiceMegaMenu";
import { useIsClient } from "@/hooks/useIsClient";
import { cn } from "@/lib/utils";

import { HeaderServiceMegaMenuCard } from "./HeaderServiceMegaMenuCard";

const MOTION = "duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.35,1)]";
const panelTransition = `transition-[opacity,transform] ${MOTION}`;
const backdropTransition = `transition-opacity ${MOTION}`;

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
  const isClient = useIsClient();

  return (
    <>
      {isClient &&
        createPortal(
          <div
            aria-hidden="true"
            className={cn(
              backdropTransition,
              "fixed inset-0 z-40 bg-black/40",
              open ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            onClick={onClose}
          />,
          document.body,
        )}

      <div
        ref={rootRef}
        id={panelId}
        aria-hidden={!open}
        className={cn(
          panelTransition,
          "border-navy-100 tablet:block absolute inset-x-0 top-full z-50 hidden overflow-hidden rounded-b-[32px] border-t bg-white",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-[var(--layout-container-lg)] shrink-0 items-start gap-[60px] self-stretch px-20 pt-10 pb-12">
          <div className="border-navy-100 flex max-w-xs shrink-0 flex-col gap-4 self-stretch border-r pr-[60px]">
            <h2 className="typo-h4 text-navy-900 desktop:tracking-[0.56px] font-bold">
              {HEADER_SERVICE_MEGA_INTRO.title}
            </h2>
            <p className="typo-body3-r text-navy-900">
              {HEADER_SERVICE_MEGA_INTRO.description}
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
