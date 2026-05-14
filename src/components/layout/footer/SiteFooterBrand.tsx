import Image from "next/image";
import bankSinopacLogoWhite from "@/assets/images/brand/bank-sinopac-logo-white.png";
import fbBtn from "@/assets/images/social/fb-btn.png";
import fbBtnHover from "@/assets/images/social/fb-btn-hover.png";
import lineBtn from "@/assets/images/social/line-btn.png";
import lineBtnHover from "@/assets/images/social/line-btn-hover.png";
import { footerCompany } from "@/lib/footerContent";

export function SiteFooterBrand() {
  return (
    <div className="tablet:col-span-5 flex min-h-0 min-w-0 flex-col items-start self-stretch">
      <div className="mb-10 flex shrink-0 items-center">
        <Image
          src={bankSinopacLogoWhite}
          alt="永豐銀行 Bank SinoPac"
          width={203}
          height={60}
          className="tablet:h-[60px] tablet:w-[203px] h-10 w-[135px] max-w-full object-contain object-left"
          sizes="(max-width: 1023px) 135px, 203px"
          priority={false}
        />
      </div>

      <address className="mb-10 flex w-full flex-col items-start gap-2 not-italic">
        <p className="typo-body3-m tablet:typo-body2-m text-white">
          {footerCompany.legalName}
        </p>
        <p className="typo-body4-r tablet:typo-body3-r text-white">
          {footerCompany.address}
        </p>
        <p className="typo-body4-r tablet:typo-body3-r text-white">
          {footerCompany.taxId}
        </p>
      </address>

      <ul className="flex shrink-0 gap-4" aria-label="社群媒體">
        <li>
          <a
            href="#"
            className="group focus-visible:ring-offset-navy-900 relative inline-flex h-10 w-10 shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            aria-label="Facebook"
          >
            <Image
              src={fbBtn}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-opacity duration-200 group-hover:opacity-0"
              aria-hidden
            />
            <Image
              src={fbBtnHover}
              alt=""
              width={40}
              height={40}
              className="absolute inset-0 h-10 w-10 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group focus-visible:ring-offset-navy-900 relative inline-flex h-10 w-10 shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            aria-label="LINE"
          >
            <Image
              src={lineBtn}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-contain transition-opacity duration-200 group-hover:opacity-0"
              aria-hidden
            />
            <Image
              src={lineBtnHover}
              alt=""
              width={40}
              height={40}
              className="absolute inset-0 h-10 w-10 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
