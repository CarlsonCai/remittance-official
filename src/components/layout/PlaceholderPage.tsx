type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="bg-background flex min-h-full flex-1 flex-col font-sans">
      <div className="layout-shell flex min-h-full flex-1 flex-col">
        <main className="layout-container bg-background flex min-h-full flex-1 flex-col py-24">
          <h1 className="typo-h1 text-navy-900">{title}</h1>
        </main>
      </div>
    </div>
  );
}
