"use client";
import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="grid place-items-center p-1 md:p-1">
        <nav
          className={`border-none flex-col md:relative md:w-[80%] sm:w-[80%] z-30 md:mt-[-25px] mt-[-30px] ${
            isOpen
              ? "w-[60%] mt-[-50%] mr-40 md:mr-0 fixed h-[90vh] md:h-10 bg-gradient-to-r from-[#0176bc]/90 via-purple-500/90 to-[#e82e5d]/90"
              : ""
          } shadow-lg flex md:px-2 rounded-lg md:rounded-full md:py-1 justify-center bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] mt-[1rem]`}
        >
          <ul className="md:flex font-bold text-white md:text-sm lg:text-xl hidden justify-center">
            <li className="pr-16 hover:text-yellow-300">
              <Link href="/">Home</Link>
            </li>
            <li className="pr-16 hover:text-yellow-300">
              <Link href="/about">About</Link>
            </li>
            <li className="pr-16 cursor-pointer">
              <Dropdown />
            </li>
            <li className="pr-16 hover:text-yellow-300">
              <Link href="/faqs"> FAQ&#39;S</Link>
            </li>
            <li className="pr-16 hover:text-yellow-300">
              <Link href="/career">Career</Link>
            </li>
            <li className="hover:text-yellow-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex md:hidden relative self-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-white inline-flex items-center justify-center p-2 ${
                isOpen ? "pt-44" : ""
              } rounded-md focus:outline-none`}
            >
              {isOpen ? "" : <b>MENU</b>}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Menu! */}
          {isOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1">
                <div className="md:flex block ps-5 font-bold text-white text-[16px]">
                  <div className=" hover:text-yellow-300 pb-6">
                    <Link href="/">Home</Link>
                  </div>
                  <div className="hover:text-yellow-300 pb-6">
                    <Link href="/about">About</Link>
                  </div>
                  <div className=" pb-6">
                    <Dropdown />
                  </div>
                  <div className=" hover:text-yellow-300 pb-6">
                    <Link href="/faqs">FAQ&#39;S</Link>
                  </div>
                  <div className=" hover:text-yellow-300 pb-6">
                    <Link href="/career">Career</Link>
                  </div>
                  <div className="hover:text-yellow-300 pb-6">
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
