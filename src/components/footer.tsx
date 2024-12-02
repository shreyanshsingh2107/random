import React from "react";
import SvgWrapper from "./core/svgWrapper/SvgWrapper"

const Footer = () => {
  return (
    <footer className="p-[2rem_1rem] tablet:p-[6rem_4rem]">
      <div className="flex flex-col gap-5">
        <span className="text-center text-sm text-gray-500">
          © 2024{" "}
          <a
            href="/"
            className="hover:underline"
            target="_blank"
          ></a>
          . All rights reserved.
        </span>
        <span className="text-center text-sm text-gray-500 dark:text-gray-400">
          Powered by{" "}
          <a
            href="https://jungleGigs.com/"
            target="_blank"
            className="font-bold hover:underline"
          >
            JungleGigs ❤️
          </a>
        </span>

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
      </div>
    </footer>
  );
};

export default Footer;
