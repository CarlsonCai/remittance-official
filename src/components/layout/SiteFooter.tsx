import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="layout-shell py-12">
        <div className="layout-container">
          <div className="grid gap-10 min-[1024px]:grid-cols-12">
            <div className="min-[1024px]:col-span-4">
              <p className="typo-body3 font-semibold">品牌／聯絡資訊（佔位）</p>
              <p className="typo-body5 mt-4 max-w-sm text-gray-300">
                此區將放置 Logo、客服電話、地址等。目前為結構骨架。
              </p>
            </div>
            <nav
              aria-label="頁尾網站連結"
              className="grid gap-8 min-[1024px]:col-span-8 min-[1024px]:grid-cols-3 sm:grid-cols-2"
            >
              <div>
                <p className="typo-body4 font-semibold text-white">關於我們</p>
                <ul className="typo-body5 mt-3 space-y-2">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white"
                      href="/about/"
                    >
                      公司簡介（佔位）
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-500">其他連結（佔位）</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="typo-body4 font-semibold text-white">客戶服務</p>
                <ul className="typo-body5 mt-3 space-y-2">
                  <li>
                    <span className="text-gray-500">常見問題（佔位）</span>
                  </li>
                  <li>
                    <span className="text-gray-500">聯絡我們（佔位）</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="typo-body4 font-semibold text-white">法規資訊</p>
                <ul className="typo-body5 mt-3 space-y-2">
                  <li>
                    <span className="text-gray-500">隱私權政策（佔位）</span>
                  </li>
                  <li>
                    <span className="text-gray-500">網站安全宣告（佔位）</span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="border-navy-700 mt-10 flex flex-col gap-4 border-t pt-8 min-[1024px]:flex-row min-[1024px]:items-center min-[1024px]:justify-between">
            <p className="typo-body6 text-gray-400">社群圖示區（佔位）</p>
            <p className="typo-body6 text-gray-500">
              © {new Date().getFullYear()} 匯款官方網站 ·
              版權與主管機關宣告（佔位）
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
