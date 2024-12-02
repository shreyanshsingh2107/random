import React, { useState } from "react";
import faqData from './faq.json'; 
import SvgWrapper from "../../components/core/svgWrapper/SvgWrapper";

interface FAQ {
  question: string;
  answer: string;
}

const FAQComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="p-[2rem_1rem] tablet:p-[6rem_4rem]">
        <h3 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 tablet:tracking-[-0.36px] desktop:mb-8 desktop:text-4xl">Frequently Asked Questions</h3>
        <div className="px-4">
          {faqData.faq.map((faq: FAQ, index: number) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between border-b border-gray-200 bg-inherit py-6 text-left text-lg font-medium leading-tight text-gray-900 tablet:leading-none"
              >
                <span>{faq.question}</span>
                <SvgWrapper svgSrc="accordian" className={`h-6 w-6  shrink-0 ${openIndex === index ? ' rotate-180 ' : ''}`}/>
              </button>
              {openIndex === index && (
                <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer || 'Answer not available'}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQComponent;