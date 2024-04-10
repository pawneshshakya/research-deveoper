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
                Topics in Civil Engineering
              </h2>

              <p className="mt-2 text-justify">
                A PhD in civil engineering is essential for individuals aspiring
                to pursue an academic career in a university or development
                corporation that focuses on researching and providing innovative
                technological solutions. Similar to other doctoral degrees,
                civil engineering necessitates conducting original research and
                producing a well-crafted thesis on a concise research topic that
                illuminates the unexplored aspects of the research field within
                the discipline. The foundation of a successful and impressive
                research lies in the selection of a brief and relevant topic.
                The selection of an appropriate research topic within the
                academic domain of civil engineering undermines the fundamental
                underpinnings of the research process. The field of study is
                extensive and presents numerous challenges that students must
                persevere through. The study topic should possess qualities of
                familiarity, breadth, and engagement, as doctoral research often
                unfolds in intricate and unforeseen manners. The services of our
                research experts can aid in the avoidance of such themes and
                provide assistance in the formulation of a dependable and
                meaningful study topic. Our platform facilitates the acquisition
                of current advancements, research findings, background readings,
                and resources in the subject of civil engineering, enabling
                individuals to enhance their knowledge base.
              </p>
              <p className="font-bold text-justify">
                Below is a compilation of PhD subjects in Civil Engineering
                recommended by research developers:{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      A highly effective methodology for the real-time
                      monitoring of water content in materials utilising sensor
                      technology.
                      <br />
                    </li>
                    <li>
                      A novel approach to monitoring engineering structures
                      using embedded sensors.
                      <br />
                    </li>
                    <li>
                      Improved machine learning algorithm for predicting the
                      strength of building blocks based on raw materials.
                      <br />
                    </li>
                    <li>
                      An innovative methodology is proposed for the prediction
                      of compressive strength in concrete, employing an Adaptive
                      Genetic Neural Network (AGN) and optimised kernel ridge
                      regression (ORR) techniques.
                      <br />
                    </li>
                    <li>
                      Utilising feature grouping and artificial neural network
                      (ANN) to forecast the compressive strength of
                      high-performance concrete.
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

const PopularServiceCard = ({ src, title, href }) => {
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
