"use client"
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import ClearIcon from "@mui/icons-material/Clear";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useAnimationFrame } from "framer-motion";
import { Toaster } from "react-hot-toast";
const Enquiry = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isShown, setIsShown] = useState(true);

//   const ref = useRef();
// console.log("ref",ref.current)
//   useAnimationFrame((t) => {
//     const y = (1 + Math.sin(t / 1000)) * -20;
//     ref.current.style.transform = isShown
//       ? `translateY(${y}px) rotateY(${0}deg) rotateY(${1}deg)`
//       : `${null}`;
//   });

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(delayTimeout);
  }, []);

  const onClose = () => {
    setShowPopup(false);
  };

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // Service Id
        "service_apqc54u",
        // Template Id
        "template_1q8wnio",
        formRef.current,
        "12kou2J7vUF80r7C2"
      )
      .then((result) => {
        console.log("Email successfully sent", result.text);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
    e.target.reset();
  };

  return (
    <div>
      <Toaster />
      <div className={`fixed inset-0 z-40 ${showPopup ? "visible" : "hidden"}`}>
        <div className="flex justify-end align-end bg-transparent bg-opacity-30">
          <div
            className={`fixed bottom-0 flex flex-col gap-1 mr-6`}
            data-aos="fade-up"
            data-aos-duration="2000"
            // ref={ref}
            onMouseEnter={() => setIsShown(false)}
            onMouseLeave={() => setIsShown(true)}
          >
            <button
              className="text-purple-800 hover:bg-red-500 hover:text-white place-self-end bg-gray-100 rounded-2xl"
              onClick={onClose}
            >
              <ClearIcon size={30} />
            </button>
            <div className="bg-gray-200 rounded-xl py-2 px-2 flex flex-col gap-5 items-center mx-4">
              <div className=" max-w-md ">
                <h1 className="pl-10 pr-10 p-2 text-l font-semibold rounded-xl rounded-b-none text-white bg-purple-800 ">
                  Let us know your queries:
                </h1>
                <button className="text-white bg-purple-800 p-2 my-2 m-5 rounded-2xl">
                  <LocalPhoneIcon size={22} />{" "}
                </button>
                <span className="text-center text-slate-700">
                  +91 97888 88292
                </span>
                <hr className="border-purple-500 border-1" />

                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="max-w-md mx-auto p-4"
                >
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="full_name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                      placeholder=" "
                      required
                      autoComplete="off"
                    />
                    <label
                      htmlFor="floating_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-700 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                      placeholder=" "
                      required
                      autoComplete="off"
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="mobile"
                      autoComplete="off"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-700 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Contact Number
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="textarea"
                      name="message"
                      id="floating_ques"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-slate-700 focus:outline-none focus:ring-0 focus:border-slate-700 peer"
                      placeholder=" "
                      autoComplete="off"
                      required
                    />
                    <label
                      htmlFor="floating_ques"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      What you want to enquire?
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-purple-800 hover:text-white hover:bg-purple-600 border-2 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;