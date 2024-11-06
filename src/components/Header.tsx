import React from "react";
import logo from "../assets/images/logo.png";
import SvgWrapper from "../components/core/svgWrapper/SvgWrapper";

const Header = () => {
  return (
    <nav
      id="header"
      className="py-6 px-4 flex flex-row w-full justify-between desktop:px-16"
    >
      <article className="flex w-full flex-col-reverse flex-wrap gap-6 overflow-x-hidden desktop:flex-row desktop:flex-nowrap desktop:justify-between desktop:gap-4">
        <div
          id="logo-siteName-button-group"
          className="flex flex-row flex-wrap justify-between"
        >
          <div
            id="logo-siteName-group"
            className="flex flex-1 flex-row items-center gap-3 overflow-hidden whitespace-nowrap"
          >
            <div className="inline-block w-8 min-w-[32px]">
              <img
                alt="Dynamic jungle-themed logo"
                title="Dynamic jungle-themed logo"
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                className="rounded-full object-cover"
                src={logo}
              />
            </div>
            <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap break-words text-2xl font-semibold text-gray-900 @sm:max-w-none dark:text-gray-300">
              JungleGigs
            </h1>
          </div>
          <div
            id="button-group"
            className="order-3 m-1 justify-center @sm:inline-flex desktop:hidden"
          >
            <div className="flex w-full flex-col justify-center gap-3 tablet:max-w-full tablet:flex-row tablet:items-center tablet:gap-0">
              <div className="flex w-full justify-center tablet:w-fit shop-now-button hide-on-proposal">
                <button
                  className="flex font-medium truncate font-sans rounded-lg flex-row gap-2 items-center justify-center h-[40px] py-2 text-sm  px-3 bg-[#0E9F6E] text-white hover:bg-[#0c865c]"
                  
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul
          id="phone-social-group"
          className="flex w-full flex-row items-center justify-between desktop:flex-1 desktop:justify-end desktop:gap-5"
        >
          <li>
            <a
              href="tel:000-0000-0000"
              className="max-w-[12em] truncate whitespace-nowrap text-sm font-medium text-gray-900 hidden xs:inline-block"
            >
              000-0000-0000
            </a>
          </li>
          <li className="inline-flex justify-end">
            <a
              href="tel:000-0000-0000"
              className="inline-block whitespace-nowrap xs:hidden"
            >
              <SvgWrapper svgSrc="phone" className="w-[24px] h-[24px] " />
            </a>
            <ul className="flex flex-row items-center justify-center gap-4">
              <li>
                <SvgWrapper svgSrc="facebook" className="w-[24px] h-[24px] " />
                <span className="sr-only">Facebook</span>
              </li>
              <li>
                <SvgWrapper svgSrc="XIcon" className="w-[24px] h-[24px] " />
                <span className="sr-only">X</span>
              </li>
              <li>
                <SvgWrapper svgSrc="linkdin" className="w-[24px] h-[24px] " />
                <span className="sr-only">linkdin</span>
              </li>
              <li>
                <SvgWrapper svgSrc="instagram" className="w-[24px] h-[24px] " />
                <span className="sr-only">instagram</span>
              </li>
            </ul>
          </li>
          <li
            id="button-group-desktop"
            className=" hidden justify-center desktop:inline-flex"
          >
            <div className="flex w-full flex-col justify-center gap-3 tablet:max-w-full tablet:flex-row tablet:items-center tablet:gap-0">
              <div className="flex w-full justify-center tablet:w-fit shop-now-button">
                <button
                  className="bg-[#0E9F6E] hover:bg-[#0c865c] text-white font-medium text-sm leading-[21px] py-2 px-3 rounded-lg cursor-pointer h-10"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </nav>
  );
};

export default Header;
