"use client";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../assets/images/banner.jpg";
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
                Topics in Mechanical Engineering
              </h2>

              <p className="mt-2 text-justify">
                Preparing a PhD topic in mechanical engineering can be a
                challenging task, particularly when there is a sense of urgency
                and pressure to complete it promptly. It is apparent that in
                numerous instances, a student dedicates a substantial amount of
                time to determining the most suitable and pertinent issue that
                can substantiate their diligent efforts and doctoral research.
                The significance of topic selection should not be overlooked,
                since there are instances where the simplicity of the topic
                overshadows the diligent effort required for research. If the
                chosen issue lacks significance, the research conducted would be
                considered ordinary and would not significantly add to the
                academic field of Mechanical Engineering.
              </p>
              <p className="text-justify">
                Our experts can assist you in avoiding such errors and
                generating a study topic that will acknowledge your research,
                thesis, and diligent efforts. Our goal is to provide a topic
                that allows you to apply your knowledge and analytical skills to
                transform your research proposal into a practical reality. Our
                institution provides a diverse selection of PhD subjects in the
                field of Mechanical Engineering that are distinct, pertinent,
                and tailored to cater to the specific requirements of your
                study.
              </p>
              <p className="font-bold text-justify">
                Below, we have presented a selection of PhD research subjects to
                showcase our research capabilities and the credibility of our
                topic choosing service:{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      The fatigue lifetime of MEMS accelerometers can be
                      predicted using a combination of parameter feature
                      clustering and machine learning techniques.
                      <br />
                    </li>
                    <li>
                      This study proposes a unique approach to categorise
                      heat-shrinkable material by utilising learning techniques
                      to assess its ageing characteristics.
                      <br />
                    </li>
                    <li>
                      Welding Parameter Determining the best resistance spot
                      welding parameter for achieving high-quality welding in
                      low carbon steel.
                      <br />
                      <br />
                    </li>
                    <li>
                      A Multiscale Computational Framework is proposed for the
                      purpose of enhancing metal properties in sheet metal
                      forming through the analysis of microstructure.
                      <br />
                    </li>
                    <li>
                      This study aims to conduct an investigation on the
                      degradation of powder coated enclosure panels through the
                      optimisation of panel parameters.
                      <br />
                    </li>
                    <li>
                      Utilising machine learning approaches to forecast the
                      impact of temperature on ultrasonic fluid flow metering.
                      <br />
                    </li>
                    <li>
                      A novel method for simulating temperature distribution in
                      metal using the examination of material parameters.
                      <br />
                    </li>
                    <li>
                      Utilising hybrid optimisation approaches to optimise
                      parameters in micro-electro-mechanical systems (MEMS).
                      <br />
                    </li>
                    <li>
                      One effective approach for predicting defects in materials
                      involves the utilisation of feature grouping and an
                      upgraded neural network.
                      <br />
                    </li>
                    <li>
                      Utilising Artificial Intelligence to estimate various
                      oscillation control loops over the entire facility.
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
        {/* blog footer */}
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
