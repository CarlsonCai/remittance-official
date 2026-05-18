"use client";

import Link from "next/link";
import { createPortal } from "react-dom";

import { ChevronIcon } from "@/components/icons/ChevronIcon";
import {
  HEADER_SERVICE_MEGA_CARDS,
  HEADER_SERVICE_MEGA_INTRO,
} from "@/lib/headerServiceMegaMenu";
import { cn } from "@/lib/utils";

const MOTION = "duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.35,1)]";
const panelTransition = `transition-[opacity,transform] ${MOTION}`;
const backdropTransition = `transition-opacity ${MOTION}`;
const chevronTransition = `transition-transform ${MOTION}`;

function serviceMegaCardBackground(imageSrc: string) {
  return `linear-gradient(180deg, rgba(0, 33, 77, 0) 0%, rgba(0, 33, 77, 0.3) 40%, var(--navy-900) 100%), url(${imageSrc})`;
}

type HeaderServiceMegaMenuTriggerProps = {
  open: boolean;
  panelId: string;
  onToggle: () => void;
};

export function HeaderServiceMegaMenuTrigger({
  open,
  panelId,
  onToggle,
}: HeaderServiceMegaMenuTriggerProps) {
  return (
    <li className="relative list-none" data-service-mega-trigger>
      <button
        type="button"
        className={cn(
          "typo-body2-m inline-flex items-center justify-center gap-1 transition-colors",
          open
            ? "text-sky-600"
            : "text-navy-900 hover:text-navy-600",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={onToggle}
      >
        {HEADER_SERVICE_MEGA_INTRO.title}
        <ChevronIcon
          className={cn(
            chevronTransition,
            "opacity-70",
            open ? "-rotate-90" : "rotate-90",
          )}
        />
      </button>
    </li>
  );
}

type HeaderServiceMegaMenuPanelProps = {
  open: boolean;
  panelId: string;
  onClose: () => void;
};

export function HeaderServiceMegaMenuPanel({
  open,
  panelId,
  onClose,
}: HeaderServiceMegaMenuPanelProps) {
  return (
    <>
      {typeof document !== "undefined" &&
        createPortal(
          <div
            aria-hidden="true"
            className={cn(
              backdropTransition,
              "fixed inset-0 z-40 bg-black/40",
              open
                ? "opacity-100"
                : "pointer-events-none opacity-0",
            )}
            onClick={onClose}
          />,
          document.body,
        )}

      <div
        id={panelId}
        data-service-mega-panel
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
            <h2 className="typo-h4 text-navy-900 font-bold desktop:tracking-[0.56px]">
              {HEADER_SERVICE_MEGA_INTRO.title}
            </h2>
            <p className="typo-body3-r text-navy-900">
              {HEADER_SERVICE_MEGA_INTRO.description}
            </p>
          </div>

          <ul className="desktop:grid-cols-4 grid min-w-0 flex-1 grid-cols-2 gap-8">
              {HEADER_SERVICE_MEGA_CARDS.map((card) => (
                <li key={card.id} className="min-w-0">
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
                        backgroundImage: serviceMegaCardBackground(
                          card.image.src,
                        ),
                      }}
                    >
                      <span className="sr-only">{card.imageAlt}</span>
                      <p className="typo-body3-b absolute right-3 bottom-[12.333px] left-3 line-clamp-2 overflow-hidden text-white capitalize">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
