import ChevronRightSvg from "@/assets/icons/chevron-right.svg";

export function HomeFeeCalculator() {
  return (
    <section
      id="fee-calculator"
      aria-labelledby="fee-calculator-heading"
      className="relative z-20 -mt-37.5 w-full"
    >
      <div className="layout-shell">
        <form
          className="shadow-l border-navy-100 mx-auto flex max-w-265.5 flex-col gap-5 rounded-4xl border bg-white p-6"
          aria-labelledby="fee-calculator-heading"
        >
          {/* 上半：標題 + Radio + 免責 */}
          <div className="flex flex-col gap-2">
            <h2 id="fee-calculator-heading" className="typo-h3 text-navy-900">
              快速估算手續費
            </h2>
            <div className="flex flex-col gap-3">
              <p className="typo-body2-m text-navy-900">
                輸入目的地與金額，立即試算推薦方案
              </p>
              <div className="flex items-center gap-6">
                <span className="typo-body3-r text-navy-900 shrink-0">
                  永豐帳戶扣款
                </span>
                <div className="flex items-center gap-3">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="bank-deduct"
                      value="yes"
                      className="accent-navy-500 size-5"
                    />
                    <span className="typo-body3-r text-navy-900">是</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="bank-deduct"
                      value="no"
                      className="accent-navy-500 size-5"
                    />
                    <span className="typo-body3-r text-navy-900">否</span>
                  </label>
                </div>
              </div>
              <p className="typo-body4-r text-gray-700">
                *本試算依各方案一般費率估算，實際匯率與手續費請以辦理當下頁面顯示為準。
              </p>
            </div>
          </div>

          {/* 分隔線 */}
          <hr className="border-navy-100" />

          {/* 下半：欄位 + 按鈕 */}
          <div className="flex items-end gap-6">
            <div className="flex min-w-0 flex-1 items-end gap-5">
              {/* 目的地國家 */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <span id="label-country" className="typo-body3-r text-navy-900">
                  目的地國家
                </span>
                <button
                  type="button"
                  aria-labelledby="label-country"
                  className="border-navy-100 flex w-full items-center gap-4 rounded-xl border bg-white py-4 pr-4 pl-5"
                >
                  <span className="typo-body2-m text-navy-900 min-w-0 flex-1 text-left">
                    請選擇國家
                  </span>
                  <ChevronRightSvg
                    width={20}
                    height={20}
                    className="text-navy-900 shrink-0 rotate-90"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* 幣別 */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <span
                  id="label-currency"
                  className="typo-body3-r text-navy-900"
                >
                  幣別
                </span>
                <button
                  type="button"
                  aria-labelledby="label-currency"
                  className="border-navy-100 flex w-full items-center gap-4 rounded-xl border bg-white py-4 pr-4 pl-5"
                >
                  <span className="typo-body2-m text-navy-900 min-w-0 flex-1 text-left">
                    請選擇幣別
                  </span>
                  <ChevronRightSvg
                    width={20}
                    height={20}
                    className="text-navy-900 shrink-0 rotate-90"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* 匯款金額 */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <label
                  htmlFor="remittance-amount"
                  className="typo-body3-r text-navy-900"
                >
                  匯款金額
                </label>
                <input
                  id="remittance-amount"
                  type="text"
                  inputMode="numeric"
                  placeholder="請輸入金額"
                  className="border-navy-100 typo-body2-r text-navy-900 w-full rounded-xl border bg-white px-5 py-4 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* 查看方案按鈕 */}
            <button
              type="submit"
              className="bg-navy-500 typo-body2-b flex shrink-0 items-center gap-1 rounded-xl py-4 pr-4 pl-6 text-white"
            >
              查看方案
              <ChevronRightSvg
                width={20}
                height={20}
                className="shrink-0 rotate-90 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
