import type { ReactNode } from "react";

/**
 * 首頁／內頁區塊：py（區塊間距）→ layout-container → layout-shell（左右 margin）。
 * 有滿寬 Panel（漸層、大圓角）時勿用本元件，改手寫 container → panel → shell（見 HomeRemittanceOptions）。
 */
export function SectionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="tablet:py-20 py-16">
      <div className="layout-container">
        <div className="layout-shell">{children}</div>
      </div>
    </div>
  );
}
