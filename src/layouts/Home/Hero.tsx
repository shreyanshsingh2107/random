import React, { useEffect, useState, useCallback, useRef } from "react";

const heroText = ["memberships", "challenges", "events", "courses"];
const items = [
  { id: 1, name: "Welcome" },
  { id: 2, name: "Members" },
  { id: 3, name: "Feed" },
  { id: 4, name: "Courses" },
  { id: 5, name: "Events" },
  { id: 6, name: "Live" },
  { id: 7, name: "Chat" },
  { id: 8, name: "Analytics" },
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const typingSpeed = 300;
  const erasingSpeed = 200;
  const word = heroText[index];

  const handleTyping = useCallback(() => {
    if (!isErasing && currentText.length < word.length) {
      setCurrentText((prev) => prev + word.charAt(currentText.length));
    } else if (isErasing && currentText.length > 0) {
      setCurrentText((prev) => prev.slice(0, -1));
    }
  }, [currentText, isErasing, word]);

  useEffect(() => {
    const typingInterval = setInterval(
      () => {
        handleTyping();
      },
      isErasing ? erasingSpeed : typingSpeed
    );

    if (currentText.length === word.length && !isErasing) {
      setIsErasing(true);
    }

    if (currentText.length === 0 && isErasing) {
      setIsErasing(false);
      setIndex((prevIndex) => (prevIndex + 1) % heroText.length);
    }

    return () => clearInterval(typingInterval);
  }, [currentText, isErasing, word, handleTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];

    if (activeItem && activeIndex !== 0 && activeIndex !== items.length - 1) {
      const parentContainer =
        activeItem.closest(".overflow-x-auto") ||
        activeItem.closest(".overflow-y-auto");
      if (parentContainer) {
        parentContainer.scroll({
          left: activeItem.offsetLeft / 2, // Use offsetLeft for horizontal scroll, offsetTop for vertical scroll
          top: activeItem.offsetTop, // for vertical scrolling
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <section className="relative bg-gradient-to-b from-[rgba(20,25,33,0)] to-[rgba(20,25,33,0.56)] bg-[#007d7d] h-fit flex flex-col items-center justify-start overflow-hidden">
      <article className="grid gap-[2.5rem] desktop:gap-[4.35rem] pt-[calc(64px+6.5rem)] max-w-[1280px] mx-auto box-border transform scale-100 origin-center pb-[3rem] px-[1.5rem] desktop:pt-[calc(66px + 7rem)] desktop:pb-[4.5rem] desktop:px-[2.5rem]">
        <div className="max-w-[720px] tablet:max-w-[840px] desktop:max-w-[960px] mx-auto flex flex-col items-center justify-center gap-[1.5rem]">
          <h1 className="text-[2.125rem] tablet:text-[4rem] desktop:text-[5rem] font-extrabold text-center font-[Walsheim, Arial, sans-serif] m-0 leading-[113%] whitespace-pre-line text-white">
            <span className="relative z-[2]">
              The community platform for
              <span className="block">
                <span
                  key={currentText}
                  className="text-[#faf118] inline-block overflow-hidden border-r-4 border-[#faf118] animate-typing"
                >
                  {currentText}
                </span>
              </span>
            </span>
          </h1>
          <p className="text-xl font-light text-center font-mulish m-0 leading-[1.375] whitespace-pre-line text-white">
            What’s possible when a paid membership, online courses, challenges,
            or events are powered by AI? Your community essentially runs itself.
          </p>
          <a
            href="/"
            target="_blank"
            className="text-[1.125rem] inline-block no-underline py-[1.1875rem] px-[2.5rem] text-[rgb(20,25,33)] bg-[rgb(250,241,24)] font-bold self-center stretch text-center relative box-border transition-all duration-300 ease-in-out leading-[20px] rounded-[36px] border border-[rgb(20,25,33)] max-w-[190px] w-full"
          >
            Get Started
          </a>
        </div>

        <div className="w-full grid gap-8 relative z-20">
          <div className="h-[60px] max-w-full desktop:max-w-[940px] mx-auto p-[0.625rem] rounded-[40px] border border-[rgb(162,209,208)] bg-[rgb(0,125,125)] flex justify-center items-center gap-6 desktop:gap-4 relative overflow-hidden">
            <div className="flex overflow-x-auto gap-4 mobile:justify-start desktop:justify-center">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)} // Assign each item to the ref
                  className={` rounded-[32px] flex justify-center items-center p-[0.5rem_1.5rem] box-border z-20 cursor-pointer transition-all duration-300 
                    ${
                      activeIndex === index
                        ? "bg-[rgba(0,73,73)]"
                        : "hover:bg-[rgba(0,73,73,0.4)]"
                    }
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="text-base font-light text-center font-mulish m-0 leading-[1.375] whitespace-pre-line text-white">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem]  shadow-xl block tablet:hidden">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden  bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                className="dark:hidden"
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                className="hidden dark:block "
                alt=""
              />
            </div>
          </div>

          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem]  hidden tablet:block desktop:hidden">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                className="dark:hidden "
                alt=""
              />
              <img
                src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
                className="hidden dark:block"
                alt=""
              />
            </div>
          </div>

          <div className="hidden desktop:block">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl  w-10/12">
              <div className="rounded-lg overflow-hidden  bg-white dark:bg-gray-800">
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                  className="dark:hidden  w-full rounded-lg"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                  className="hidden dark:block  w-full rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[90%]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
