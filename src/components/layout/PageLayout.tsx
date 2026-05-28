import type { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

// 當大於 1560 負責左右兩側空白間距
export function PageLayout({ children }: PageLayoutProps) {
  // page-layout
  return (
    <div className="flex min-h-full min-w-0 flex-1 flex-col">{children}</div>
  );
}
