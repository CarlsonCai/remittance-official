import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageLayout } from "@/components/layout/PageLayout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <Header />
      {children}
      <Footer />
    </PageLayout>
  );
}
