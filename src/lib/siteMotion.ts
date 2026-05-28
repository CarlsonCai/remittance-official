/** 全站共用過場（稿：450ms、cubic-bezier(0.22, 0.61, 0.35, 1)；見 motion.css） */
export const SITE_MOTION_DURATION = "duration-(--motion-duration-default)";
export const SITE_MOTION_EASE = "ease-(--motion-ease-default)";
export const SITE_MOTION = `${SITE_MOTION_DURATION} ${SITE_MOTION_EASE}`;
export const SITE_MOTION_TRANSITION_ALL = `transition-all ${SITE_MOTION}`;
export const SITE_MOTION_DELAY_SHORT = "delay-(--motion-delay-short)";
