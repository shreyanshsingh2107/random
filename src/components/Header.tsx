import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import SvgWrapper from "../components/core/svgWrapper/SvgWrapper";
import ContactModal from "../layouts/Home/components/ContactModal.tsx";
import { Sling as HamburgerSling } from "hamburger-react";
import Navigation from "./Header/navigation.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  return (
    <nav className="h-[88px] bg-black">
      {/* <div>
      <div>
        <p>
          LIMITED TIME OFFER—Unlock Extra Features on Our Most Popular Plans
          <a href="/november-offer">Get the Details</a>
        </p>
      </div>
      <span>X</span>
    </div> */}
      <div
        id="header"
        className={`h-[88px]  fixed top-0 left-0 w-full  flex justify-between items-center px-3 z-50 transform translate-x-0 transition-transform duration-400 ease-in-out ${isOpen ? "bg-black " : "bg-[#094F53]"}`}
      >
        <a aria-current="page" href="/">
          {/* <img src={logo} alt="JungleGigs" width="30px"/> */}
          <h1 className="text-[30px] font-semibold text-white">JungleGigs</h1>
        </a>
        <div className="flex justify-center">
          {/* <div>
          <a href="/features">Features</a>
          <a href="/features/online-courses">Courses</a>
          <a href="/pro">Branded Apps</a>
          <a href="/migration">Move to Mighty</a>
          <a href="/pricing">Pricing</a>
        </div> */}
          {/* <a id="sign-in-link" href="https://mightynetworks.com/sign_in">
          Log In
        </a> */}
          <a
            href="/"
            className="px-[11px] py-2 bg-[#faf118] border border-black rounded-[18px]"
          >
            Start Free Trial
            {/* <span>
            <SvgWrapper svgSrc="menu" className="fill-white w-3"></SvgWrapper>
          </span> */}
          </a>
          <div className="hamburger-wrapper">
            <HamburgerSling toggled={isOpen} toggle={setIsOpen} color="white" />
          </div>
        </div>
      </div>
      {isOpen && <Navigation isOpen={isOpen} />}
    </nav>
  );
};

export default Header;
