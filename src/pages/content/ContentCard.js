import React from "react";
import Image from "next/image";
const ContentCard = ({ image, title, desc }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
       <div
      className="p-4 md:p-4 md:hidden grid place-items-center">
      <Image className="rounded-lg" src={image} alt="img" />
    </div>
    <div
      className="bg-slate-100 p-4 md:p-4 flex justify-center items-center"
      data-aos="fade-left"
    >
      <div className="max-w-md ">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d]">
          {title}
        </h2>
        <div className="w-48 h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-4"></div>
        <p className="mt-2 text-justify lg:text-justify">{desc}</p>
      </div>
    </div>

    <div
      className="p-4 md:p-4 hidden md:inline-block lg:grid place-items-center">
      <Image className="rounded-lg" src={image} alt="img" />
    </div>
  </div>
  )
}

export default ContentCard
