"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image.js";
import data from "../../data/data";
import { usePathname } from "next/navigation";
import Navbar from "../header/Navbar";
import NavigationButton from "../utils/NavigationButton";
import popularService from "../../data/popularService";
import { CheckCircleOutline } from "@mui/icons-material";
const AccordionFaq = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border my-5 border-gray-300 rounded-md" data-aos="fade-up">
      <div
        className={`flex justify-between items-center px-4 py-5 rounded  hover:text-white hover:bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] cursor-pointer ${
          isOpen
            ? "bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] text-white"
            : ""
        }`}
        onClick={onClick}
      >
        <span className="font-semibold">{title}</span>
        <span className="text-xl">
          {isOpen ? (
            <b>{/* <LuMinusCircle /> */}</b>
          ) : (
            <b>{/* <IoMdAddCircleOutline /> */}</b>
          )}
        </span>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const ServiceDetail = () => {
  const pathName = usePathname();

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  const dataPath = data.find((item) => item.path === pathName);
  const dataFaqs = data.find((item) => item.faqs);
  return (
    <>
      <div className="md:mt-5 mt-5">
        <Navbar />
      </div>
      <div className=" bg-gradient-to-r pb-16 from-[#0176bc] via-purple-500 to-[#e82e5d]">
        <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-3 mx-auto pt-16   text-gray-900 rounded-lg shadow-lg">
          <div className="lg:w-full col-span-2 bg-white">
            <Image
              className="h-[400] w-full"
              src={dataPath.banner.src}
              width={400}
              height={300}
              alt="img"
            />
            <div className=" bg-white md:pt-10 px-10"></div>
            {dataPath?.content?.map((value, i) => (
              <div className=" bg-white pt-10 px-6 md:px-10" key={i}>
                <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d]">
                  {value.question}
                </h2>
                <h2 className="text-justify">
                  {value?.para?.map((p, i) => (
                    <div key={i}>
                      <p>{p}</p> <br />
                    </div>
                  ))}
                </h2>
              </div>
            ))}
            {dataPath?.faqs === dataFaqs?.faqs ? (
              <div className="max-w-[1100px] mx-auto">
                <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
                  FAQ&#39;S
                  <div className="w-24 m-auto h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-4"></div>
                </h2>
                {dataPath?.faqs?.map((value, index) => (
                  <AccordionFaq
                    key={index}
                    title={value.question}
                    isOpen={openIndex === index}
                    onClick={() => handleAccordionClick(index)}
                  >
                    <p>{value.para}</p>
                  </AccordionFaq>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="bg-white py-8 rounded-xl">
            <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] text-center">
              Popular Services
            </h2>
            <div className="mt-5">
              <div className="grid grid-cols-2 py-2 px-4">
                {popularService.map((value, i) => {
                  return (
                    <PopularServiceCard
                      key={i}
                      title={value?.title}
                      href={value.pathName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <NavigationButton />
      </div>
    </>
  );
};

export default ServiceDetail;

const PopularServiceCard = ({ title, href }) => {
  return (
    <>
      <Link href={`${href}`}>
        <div className="grid grid-cols-3 mb-5 px-4 text-sm text-blue-700">
          <div className="flex justify-center items-center">
            <CheckCircleOutline className="text-[#e82e5d]" />
          </div>
          <div className="col-span-2 flex items-center hover:text-[#e82e5d] cursor-pointer">
            {title}
          </div>
        </div>
      </Link>
    </>
  );
};
