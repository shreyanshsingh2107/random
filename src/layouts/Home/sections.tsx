import React from "react";

const Section = ({ props, imageAlign }) => {
  const { image, heading, description, cta_text } = props;
  return (
    <section className="p-[2rem_1rem] tablet:p-[6rem_4rem]">
      <div className={`w-full tablet:w-3/4 mx-auto flex flex-col ${imageAlign === "left" ? "tablet:flex-row" : "tablet:flex-row-reverse"} gap-20`}>
        <div className="flex justify-center items-center flex-1">
          <img
            src={image}
            alt=""
            className="max-h-[294px] w-full rounded-lg object-cover max-w-full h-auto tablet:max-h-[485px]"
          />
        </div>
        <div className="mt-4 flex-1 ">
          <h2 className="mb-6 break-words text-4xl font-extrabold tracking-tight text-gray-900 ">
            {heading}
          </h2>
          <p className="mb-6 break-words font-light text-gray-500 tablet:text-lg">
            {description}
          </p>
          <div className="inline-block m-1">
                <a href="/contact" className="flex font-medium truncate font-sans rounded-lg flex-row gap-2 items-center justify-center h-[40px] py-2 text-sm px-3 bg-[#0E9F6E] hover:bg-[#0c865c] text-white service-button hide-on-proposal">{cta_text}</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Section;
