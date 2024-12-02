import React, { useState } from "react";
import { Sling as HamburgerSling } from "hamburger-react";
import Navigation from "./Header/navigation.jsx";
import DesktopHeader from "./Header/desktopHeader.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  return (
    <nav className="h-[88px] bg-black">
      <div
        id="header"
        className="h-[88px] fixed top-0 left-0 w-full flex justify-between desktop:justify-normal items-center px-3 z-50  overflow-hidden bg-[#094F53]"
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[-1]`}
        ></div>

        <a aria-current="page" href="/">
          <h1 className="text-[30px] font-semibold text-white">JungleGigs</h1>
        </a>
        <div className="flex justify-end desktop:justify-between w-full desktop:mr-[80px] desktop:pl-[96px]">
          <div className="hidden desktop:block">
          <DesktopHeader />
          </div>
          <div className="flex justify-center">
            <a
              href="/"
              className="px-[11px] py-2 bg-[#faf118] border border-black rounded-[36px]"
            >
              Start Free Trial
              {/* <span>
            <SvgWrapper svgSrc="menu" className="fill-white w-3"></SvgWrapper>
          </span> */}
            </a>
            <div className="hamburger-wrapper z-50 desktop:hidden">
              <HamburgerSling
                toggled={isOpen}
                toggle={setIsOpen}
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
      <Navigation isOpen={isOpen} />
    </nav>
  );
};

export default Header;
