import {
  SITE_MOTION,
  SITE_MOTION_DELAY_SHORT,
  SITE_MOTION_DURATION,
  SITE_MOTION_EASE,
} from "@/lib/siteMotion";

/** @deprecated 請優先使用 `siteMotion`；保留別名供 Header 既有 import */
export const HEADER_MOTION_DURATION = SITE_MOTION_DURATION;
export const HEADER_MOTION_EASE = SITE_MOTION_EASE;
export const HEADER_MOTION = SITE_MOTION;
export const HEADER_MOBILE_NAV_ITEM_FADE_DELAY = SITE_MOTION_DELAY_SHORT;
