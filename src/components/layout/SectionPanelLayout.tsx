import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionPanelLayoutProps = {
  children: ReactNode;
  panelClassName?: string;
  shellClassName?: string;
};

export function SectionPanelLayout({
  children,
  panelClassName,
  shellClassName,
}: SectionPanelLayoutProps) {
  const shell = (
    <div className={cn("layout-shell", shellClassName)}>{children}</div>
  );

  return (
    <div className="tablet:py-20 py-16">
      <div className="layout-container">
        {panelClassName ? (
          <div className={cn("w-full overflow-hidden", panelClassName)}>
            {shell}
          </div>
        ) : (
          shell
        )}
      </div>
    </div>
  );
}
