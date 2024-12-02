import React from "react";

const DesktopHeader = () => {
  return (
    <div className="flex">
        <a className="text-base leading-[19px] text-white m-[5px_9px_6px] text-left relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100" href="/features">
          Features
        </a>
        <a
          className="text-base leading-[19px] text-white m-[5px_9px_6px] text-left relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          href="/features/online-courses"
        >
          Courses
        </a>
        <a className="text-base leading-[19px] text-white m-[5px_9px_6px] text-left relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100" href="/pro">
          Branded Apps
        </a>
        <a className="text-base leading-[19px] text-white m-[5px_9px_6px] text-left relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100" href="/migration">
          Move to Mighty
        </a>
        <a className="text-base leading-[19px] text-white m-[5px_9px_6px] text-left relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100" href="/pricing">
          Pricing
        </a>
    </div>
  );
};

export default DesktopHeader;
