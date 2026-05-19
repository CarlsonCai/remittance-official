import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-full flex-1 flex-col font-sans">
      <div className="layout-shell flex min-h-full flex-1 flex-col">
        <main className="layout-container bg-background flex min-h-full flex-1 flex-col justify-center py-24">
          <div className="layout-grid">
            <div className="tablet:col-span-12 col-span-4 flex flex-col gap-6 text-center">
              <h1 className="typo-h1 text-navy-900">找不到頁面</h1>
              <p className="typo-body3 font-normal text-gray-600">
                您輸入的網址可能不正確，或頁面已移除。
              </p>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="typo-body3 border-navy-900/15 text-navy-900 inline-flex h-12 items-center justify-center rounded-full border border-solid px-6 font-medium transition-colors hover:bg-gray-100"
                >
                  返回首頁
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
