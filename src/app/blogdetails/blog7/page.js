"use client";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../assets/images/banner.jpg";
import popularBlog from "../../../data/popularBlog.js";
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
                Topics in Deep Learning
              </h2>
              <p className="mt-2 text-justify">
                Deep Learning is one of the fastest growing fields in the
                current times as it is one of the types of Machine Learning
                which comes under the wider field of Artificial Intelligence.
                Deep Learning imitates human behaviour and knowledge and it can
                be further subdivided into supervised, semi-supervised and
                unsupervised. Deep Learning has become a crucial part of data
                science including the statistics and predictive modelling and is
                still a highly researched area in machine learning. A lot of
                candidates come up with the idea of preparing a research paper
                or developing their PhD thesis on deep learning but cannot
                figure out the method and plan to do a research that does not
                include unnecessary information. The newness of a subject can
                also make it hard for choosing the right research method with
                lesser available resources. However, Research Developers has
                editors and writers who are well aware of the appropriate topics
                that can fit your research and are of interest.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Deep Learning Changing the way things have been done in
                      Medical Field : A New Achievement on its Way
                      <br />
                    </li>
                    <li>
                      Modeling and Predicting Time Series with the help of Deep
                      Learning
                      <br />
                    </li>
                    <li>
                      Biomechanical Simulation and it’s advancement by using
                      Deep Learning
                      <br />
                    </li>
                    <li>
                      Retrieving the lost media by Deep Learning : A Probable
                      Savior?
                      <br />
                    </li>
                    <li>
                      Deep Learning getting its way in the Financial Field :
                      Does it make the work easier or increase the threats?
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
