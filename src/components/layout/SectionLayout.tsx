import type { ReactNode } from "react";

export function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-shell tablet:py-20 py-16">
      <div className="layout-container">{children}</div>
    </div>
  );
}
