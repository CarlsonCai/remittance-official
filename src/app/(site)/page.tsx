export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background font-sans">
      <div className="layout-shell flex min-h-full flex-1 flex-col">
        <main className="layout-container flex min-h-full flex-1 flex-col bg-background py-24">
          <div className="layout-grid">
            <div className="col-span-4 min-[1024px]:col-span-12" />
          </div>
        </main>
      </div>
    </div>
  );
}
