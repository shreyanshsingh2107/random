import React from "react";

const Navigation = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full bg-black transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out text-white z-40`}
    >
      <div className="p-[11vh_10vw_6vh]">
        <div className="flex flex-col">
          <a className="text-[40px] font-bold text-left" href="/features">
            Features
          </a>
          <a
            className="text-[40px] font-bold text-left"
            href="/features/online-courses"
          >
            Courses
          </a>
          <a className="text-[40px] font-bold text-left" href="/pro">
            Branded Apps
          </a>
          <a className="text-[40px] font-bold text-left" href="/migration">
            Move to Mighty
          </a>
          <a className="text-[40px] font-bold text-left" href="/pricing">
            Pricing
          </a>
        </div>
        <div>
          <a href="https://cohost.mn.co/?plan=free-trial&amp;_ga=2.231404442.401924015.1731866980-1192987218.1731688244&amp;experimentVisitorId=03c938dc-c4ce-4e5e-96be-e6176f855a7f">
            Start Free Trial
            <span>
              {/* <SvgWrapper /> */}
            </span>
          </a>
          <a
            id="sign-in-link"
            href="https://mightynetworks.com/sign_in?_ga=2.231404442.401924015.1731866980-1192987218.1731688244"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
