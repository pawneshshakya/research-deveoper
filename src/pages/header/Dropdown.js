import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../../data/data";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div>
      <FlyoutLink FlyoutContent={DropdownContent}>Services</FlyoutLink>
    </div>
  );
};
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white hover:text-yellow-300">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-gray-400 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 rounded-xl text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {/* <div className="absolute left-48 top-[-30px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const DropdownContent = () => {
  return (
    <div className="w-[70%] md:ms-40 md:w-[750px] mt-[-220px] md:-mt-0 lg:w-[1024px] bg-white overflow-y-auto md:overflow-hidden lg:overflow-hidden h-[100vh] md:h-[1/2] lg:h-1/2 md:p-5 p-4 grid md:grid-cols-3 md:ml-0 ml-[460px] lg:grid-cols-4 rounded-xl shadow-2xl">
      {data.map((value, i) => (
        <div key={i}>
          <Link href={value.path}>
            <ContentCard heading={value.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
const ContentCard = ({ heading }) => {
  return (
    <>
      <div className="space-x-9">
        <p className="font-normal text-[12px] md:text-sm text-blue-800 my-1 hover:text-[#e82e5d] hover:underline">
          {heading}
        </p>
      </div>
    </>
  );
};

export default Dropdown;
