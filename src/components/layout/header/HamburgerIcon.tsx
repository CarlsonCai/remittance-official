import CloseSvg from "@/assets/icons/close.svg";
import HamburgerSvg from "@/assets/icons/hamburger.svg";

export function HamburgerIcon({ open }: { open: boolean }) {
  const Icon = open ? CloseSvg : HamburgerSvg;
  return (
    <Icon
      width={24}
      height={24}
      className="text-navy-900"
      aria-hidden="true"
      focusable="false"
    />
  );
}
