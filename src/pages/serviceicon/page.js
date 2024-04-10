import React from "react";
import Image from "next/image";
import styles from "../../styles/servicecard.module.css";
import icons from "../../data/icon";
import Link from "next/link";

const ServiceIconCard = () => {
  return (
    <div className="mb-10">
      <h2 className="lg:w-full mt-12 text-4xl lg:text-md font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-2">
        Services We Provide
        <div className="w-48 m-auto h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-2"></div>
      </h2>
      <div className=" flex items-center justify-center px-5 sm:px-0 pt-10">
        <div className="grid  grid-cols-2 gap-5 sm:gap-5 md:gap-9  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ">
          {icons.map((data, index) => (
            <div className={`${styles.book}`} key={index}>
              <div className={`text-center font-raleway p-4 text-sm`}>
                {data.description}
                <div className="mt-2">
                  <Link
                    href={data.path}
                    className="text-sm text-white mt-2 bg-slate-800 py-1 px-2 rounded-xl hover:bg-slate-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>

              <div className={`${styles.cover} flex-col p-4`}>
                <div>
                  <p
                    className={`${styles.serviceText} 
                     text-center font-raleway`}
                  >
                    {data.name}
                  </p>
                </div>
                <div className="flex justify-center pt-4 ">
                  <Image src={data.img} alt="" className="w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIconCard;
