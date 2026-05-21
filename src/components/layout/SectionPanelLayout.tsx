import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionPanelLayoutProps = {
  children: ReactNode;
  panelClassName?: string;
  shellClassName?: string;
  /** 覆寫外層 `py-16 tablet:py-20`（例：區塊自訂 shell 上下距時設 `tablet:py-0`） */
  outerClassName?: string;
};

export function SectionPanelLayout({
  children,
  panelClassName,
  shellClassName,
  outerClassName,
}: SectionPanelLayoutProps) {
  const shell = (
    <div className={cn("layout-shell", shellClassName)}>{children}</div>
  );

  return (
    <div className={cn("py-16 tablet:py-20", outerClassName)}>
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
