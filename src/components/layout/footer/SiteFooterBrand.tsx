import Image from "next/image";
import bankSinopacLogoWhite from "@/assets/images/bank-sinopac-logo-white.png";
import fbBtn from "@/assets/images/fb-btn.png";
import lineBtn from "@/assets/images/line-btn.png";
import { footerCompany } from "@/lib/footerContent";

export function SiteFooterBrand() {
  return (
    <div className="flex min-h-0 min-w-0 flex-col items-start self-stretch min-[1024px]:col-span-5">
      <div className="mb-10 flex shrink-0 items-center">
        <Image
          src={bankSinopacLogoWhite}
          alt="永豐銀行 Bank SinoPac"
          width={203}
          height={60}
          className="h-[60px] w-[203px] max-w-full object-contain object-left"
          sizes="203px"
          priority={false}
        />
      </div>

      <address className="mb-10 flex w-full flex-col items-start gap-2 not-italic">
        <p className="typo-body2-m text-white">{footerCompany.legalName}</p>
        <p className="typo-body3-r text-white">{footerCompany.address}</p>
        <p className="typo-body3-r text-white">{footerCompany.taxId}</p>
      </address>

      <ul className="flex shrink-0 gap-4" aria-label="社群媒體">
        <li>
          <a
            href="#"
            className="focus-visible:ring-offset-navy-900 inline-flex shrink-0 rounded-lg transition-opacity outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            aria-label="Facebook"
          >
            <Image
              src={fbBtn}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              aria-hidden
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="focus-visible:ring-offset-navy-900 inline-flex shrink-0 rounded-lg transition-opacity outline-none hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            aria-label="LINE"
          >
            <Image
              src={lineBtn}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              aria-hidden
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
