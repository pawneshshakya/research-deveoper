"use client";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../assets/images/banner.jpg";
import popularBlog from "../../../data/popularBlog";
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
                Projects in MATLAB
              </h2>

              <p className="mt-2 text-justify">
                The software known as MATLAB is well recognised and extensively
                utilised in the engineering domain for various purposes such as
                signal processing, numerical data analysis, modelling,
                programming, simulation, and computer graphic visualisation.
                MATLAB enables the resolution of complex computational problems
                by combining visualisation, programming, and calculation within
                a user-friendly environment. Recently, it has gained widespread
                acceptance as a highly effective tool, leading to a large growth
                in its usage among scientific societies.
              </p>
              <p className="font-bold">Typical Uses of MATLAB includes:</p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div>
                    <li>
                      Math and computation
                      <br />
                    </li>
                    <li>
                      Modeling, simulation, and prototyping
                      <br />
                    </li>
                    <li>
                      Application development, including Graphical User
                      Interface building
                      <br />
                    </li>
                    <li>
                      Algorithm development
                      <br />
                    </li>
                    <li>
                      Scientific and engineering graphics
                      <br />
                    </li>
                    <p className="text-justify">
                      Selecting a project in MATLAB is a challenging endeavour
                      due to the wide range of applications it has across
                      several domains. Among the various choices made by a PhD
                      student, the identification of the appropriate study area,
                      and specifically, the research topic, holds utmost
                      significance. The selection of a study topic should
                      possess the capacity to identify the true problem and
                      ascertain its extent.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-justify">
                The following topics are a selection of PhD topics that yield
                groundbreaking findings.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      The adaptive controller model is utilised for parameter
                      estimation in motor speed control.
                      <br />
                    </li>
                    <li>
                      Utilising an ideal algorithm to enhance power quality
                      through the placement of Dstatcom.
                      <br />
                    </li>
                    <li>
                      Utilising multiobjective optimisation to determine the
                      most efficient positioning of dispersed generators.
                      <br />
                    </li>
                    <li>
                      The utilisation of a Model reference adaptive controller
                      for the control of distributed generator side converters.
                      <br />
                    </li>
                    <li>
                      Utilising deep neural networks to categorise obstacles and
                      concealed weapons.
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
