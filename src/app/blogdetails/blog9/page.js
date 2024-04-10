"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import banner1 from "../../../assets/images/banner.jpg";
import pic1 from "../../../assets/images/testi01.jpg";
import about from "../../../assets/images/about.jpg";
import popularBlog from "@/data/popularBlog";
import Navbar from "@/pages/header/Navbar";
import { CheckCircleOutline } from "@mui/icons-material";
const page = () => {
  return (
    <>
      <div className=" bg-gradient-to-r pb-16 from-[#0176bc] via-purple-500 to-[#e82e5d]">
        <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-3 mx-auto md:pt-16 text-gray-900 rounded-lg shadow-lg">
          <div className="lg:w-full col-span-2">
            <Image src={banner1} className="h-[400] sm:w-full" alt="img" />
            <div className="md:hidden">
              <Navbar />
            </div>
            <div className="col-span-2 bg-white p-10 mt-10">
              <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d]">
                Topics in Covid related research
              </h2>

              <p className="mt-2 text-justify">
                Everyone around the world knows that the Coronavirus Diseases is
                an infectious disease and can be spread by coming into the close
                proximity of the infected person or touching an infected
                surface. Many scientific researches have been going around the
                world and doses have been developed which can reduce the
                transmission of this virus upto half. However, still a cure for
                this virus hasn’t been found.
              </p>
              <p className="text-justify">
                Many Universities have initiated PhD research projects on
                researching SARS CO-V2, the coronavirus which is the reason
                behind the development of COVID-19 novel coronavirus. These
                researches have been initiated in order to have more information
                and more minds researching about the virus to find a better
                solution. Research Developers has also been covering the details
                and updates about the virus and are aware of what topics are
                best suited for your research work.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      A study on ACE-Inhibitors/Angiotensin Receptor Blocker.
                      What’s the ratio of death for COVID-19 infected people?
                      <br />
                    </li>
                    <li>
                      Studying the Dynamic Suppression Intervention, it’s
                      frequency and dynamics to control the COVID-19 pandemic
                      with a multicountry comparison
                      <br />
                    </li>
                    <li>
                      Impact on Psychosocial and Mental Health due to the
                      COVID-19: The changes one can make in Self-Isolation
                      measures
                      <br />
                    </li>
                    <li>
                      Using PAN-Genome Graph Algorithms and Data Integration to
                      study the new strains of virus and comparing their genomes
                      <br />
                    </li>
                    <li>
                      Studying the ecology and evolution of COVID-19 and how is
                      it affecting the health?
                      <br />
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* blog */}
          <div className=" bg-white px-3 py-10">
            <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d]">
              Popular Blog
            </h2>
            <div className="mt-5">
              <div className="grid py-2">
                {popularBlog?.map((item, index) => {
                  return (
                    <PopularServiceCard
                      key={index}
                      src={item?.pic}
                      title={item?.title}
                      href={item.pathName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

const PopularServiceCard = ({ title, href }) => {
  return (
    <>
      <Link href={`${href}`}>
        <div className="grid grid-cols-3 mb-5">
          <div className="flex justify-center items-center">
            <CheckCircleOutline />
          </div>
          <div className="col-span-2 flex items-center hover:text-[#e82e5d] cursor-pointer">
            {title}
          </div>
        </div>
      </Link>
    </>
  );
};
