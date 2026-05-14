import type { ReactNode } from "react";

export function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-shell py-16 tablet:py-20">
      <div className="layout-container">{children}</div>
    </div>
  );
}
