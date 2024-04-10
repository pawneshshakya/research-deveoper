"use client"
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import contact from "../../assets/images/contact.jpg"
// import contact from "../assets/images/contact.jpg";


const Contact = ({children}) => {
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
    <div className="px-4 mt-16 md:px-16 max-w-screen-xl mx-auto">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="mt-4 px-4 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-16 py-8 md:mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"
      >
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d]">
              Get In Touch
              <div className="w-56 h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-4"></div>
            </h2>
          </div>
          <div className="md:mb-8 pr-6">
            <Image src={contact} alt="contact" className="rounded-xl" />
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="mt-20">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="fullname"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Phone
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="mobile"
              name="mobile"
            />
          </div>
          <div className="mt-2">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              className="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="message"
            ></textarea>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide hover:text-white hover:bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] border-2 bg-slate-700 text-white p-3 rounded-lg w-full
         focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {children}
    </div>

  )
}

export default Contact

