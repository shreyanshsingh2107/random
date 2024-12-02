import React, { FC, useState, useEffect } from "react";
import SvgWrapper from "../../../components/core/svgWrapper/SvgWrapper";

interface ContactModalProps {
  onClose: () => void;
}
const ContactModal: FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-modal flex h-full w-screen items-center justify-center">
      <div
        className="fixed inset-0 z-20 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50"
        style={{ opacity: "0.8" }}
        onClick={onClose}
      ></div>
      <div className=" rounded-xl w-full max-h-[calc(100%-64px)] md:max-h-[calc(100%-32px)] flex flex-col z-20 bg-white max-w-[480px] p-0 text-center shadow-none">
        <div
          className="flex flex-row px-5 py-4 items-center justify-between w-full border-gray-200 border-b"
          data-testid="modal-header"
        >
          <div className="w-10 h-10 flex items-center justify-center text-gray-900 bg-transparent"></div>
          <h1 className="text-xl font-bold text-gray-900 font-sans m-0 truncate text-center">
            Contact Us
          </h1>
          <div className="flex flex-row gap-4">
            <button
              data-testid="modal-header-close-button"
              type="button"
              className="w-10 h-10 flex items-center justify-center text-gray-900 bg-transparent"
              onClick={onClose}
            >
              <SvgWrapper svgSrc="cross" />
         
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5 overflow-hidden bg-white p-6 dark:bg-gray-800 sm:rounded-lg"
          >
            <p className="text-center text-base font-normal text-gray-500">
              Tell us a bit about yourself, and we'll get in touch as soon as we
              can.
            </p>

            <div>
              <label htmlFor="fullName" className="asterisk flex mb-2 gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white sentence-case">
                  Full name
                </span>
              </label>
              <input
                className="py-3 rounded-lg outline outline-1 w-full min-h-[48px] focus:outline-brand-600 focus:border-brand-600 text-base font-sans bg-gray-50 text-gray-900 placeholder-gray-500 border-none focus:outline-brand-600 outline-offset-[-1px] outline-gray-300 pl-4 pr-4"
                placeholder="Name"
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="asterisk flex mb-2 gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white sentence-case">
                  Email
                </span>
              </label>
              <input
                className="py-3 rounded-lg outline outline-1 w-full min-h-[48px] focus:outline-brand-600 focus:border-brand-600 text-base font-sans bg-gray-50 text-gray-900 placeholder-gray-500 border-none focus:outline-brand-600 outline-offset-[-1px] outline-gray-300 pl-4 pr-4"
                placeholder="email@google.com"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="asterisk flex mb-2 gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white sentence-case">
                  Phone number
                </span>
              </label>
              <input
                className="py-3 rounded-lg outline outline-1 w-full min-h-[48px] focus:outline-brand-600 focus:border-brand-600 text-base font-sans bg-gray-50 text-gray-900 placeholder-gray-500 border-none focus:outline-brand-600 outline-offset-[-1px] outline-gray-300 pl-4 pr-4"
                placeholder="+91 0000000000"
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="text-left">
              <label htmlFor="message" className="asterisk flex mb-2 gap-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white sentence-case">
                  Your message
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                className="min-w-[200px] font-sans py-3 rounded-lg outline outline-1 w-full min-h-[48px] focus:outline-brand-600 focus:border-brand-600 text-base font-sans bg-gray-50 text-gray-900 placeholder-gray-500 border-none focus:outline-brand-600 outline-offset-[-1px] outline-gray-300 pl-4 pr-4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
        <div
          className="flex p-6 w-full shadow-[inset_0px_1px_0px_0px] shadow-gray-200 flex-col-reverse"
          data-testid="modal-footer"
        >
          <div className="flex flex-col"></div>
          <button
            className="flex font-medium truncate font-sans rounded-lg flex-row gap-2 items-center justify-center h-[48px] py-3 text-base font-medium px-5 bg-brand-700 text-white bg-[#0E9F6E]"
            onClick={handleSubmit}
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

