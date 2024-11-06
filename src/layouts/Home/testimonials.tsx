import React from "react";
import SvgWrapper from "../../components/core/svgWrapper/SvgWrapper";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 p-[2rem_1rem] tablet:p-[6rem_4rem]">
        <div className="max-w-[70rem] mx-auto">
            <SvgWrapper svgSrc="doubleQuote" className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600" />
            <p className="text-center text-2xl font-semibold leading-relaxed text-gray-900">
            JungleGigs provided us with an exceptional LMS that transformed the way our school operates. The ease of use and seamless integration made a significant difference for both teachers and students.
            </p>
            <div className="mt-6 flex items-center justify-center gap-[9px]">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjIwNjV8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTJDJTIwcG9ydHJhaXQlMjBvZiUyMGElMjBzbWlsaW5nJTIwd29tYW58ZW58MXwwfHx8MTczMDgwNDcwOXww&ixlib=rb-4.0.3&q=80&w=200" alt="" className="h-6 w-6 rounded-full" />
                <div className="flex items-center gap-3">
                    <span className="text-center font-medium text-gray-900 dark:text-white">Abhishek Raj</span>
                    <span className="text-base font-semibold leading-tight">/</span>
                    <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400">School Principal</span>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Testimonials;
