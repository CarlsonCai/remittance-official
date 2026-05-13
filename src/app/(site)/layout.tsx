import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
