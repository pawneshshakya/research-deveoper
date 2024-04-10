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
                Topics in Signal Processing
              </h2>

              <p className="mt-2 text-justify">
                Signal, in simple words, refers to information, whereas
                processing refers to operation. The entirety of the process
                revolves around the transformation and modification of
                information in order to obtain the intended signal. The subject
                matter pertains to the examination and alteration of signals in
                order to effectively convey accurate information. Various
                strategies are employed to enhance the accuracy of signals,
                optimise storage efficiency, and optimise the components of
                signals.
              </p>
              <p className="text-justify">
                The discipline of signal processing offers extensive
                opportunities for PhD academics to engage in study and research.
                Every piece of information produced in the world can be
                considered a signal, encompassing various mediums such as images
                and voices. The data is derived from intricate signals and
                subjected to diverse processing techniques in order to improve
                the quality of the signal. A crucial aspect of conducting
                research and composing a thesis is to initially identify a
                problem and subsequently conduct a thorough investigation into
                it. In order to effectively communicate this dilemma to the
                readers, the primary prerequisite is to have an appropriate
                thesis topic. The crux of effective research is in the
                development of a research problem and identifying the deficiency
                in the field, followed by the selection of a topic that
                succinctly embodies this concept.{" "}
              </p>
              <p className="font-bold text-justify">
                We have proposed several PhD topics in the field of signal
                processing to our clients. One such topic is the application of
                signal-strength optimisation approaches for transmission
                methods, which involves the utilisation of filtering and
                multiobjective optimisation techniques.{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      An improved method for recognising speech signal patterns
                      using wavelet-based approaches and machine learning
                      techniques.
                      <br />
                    </li>
                    <li>
                      The audio stream is analysed using an intensive feature
                      extraction approach with a random forest classifier to
                      identify high nasality.
                      <br />
                    </li>
                    <li>
                      An improved method for noise cancellation in voice signals
                      by employing a wavelet-based multiobjective optimum
                      technique.
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
