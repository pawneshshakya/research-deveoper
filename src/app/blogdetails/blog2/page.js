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
                How We Help with Topic Selection
              </h2>

              <p className="mt-2 text-justify">
                Our PhD topic selection service guarantees a comprehensive
                examination of your ideas and thoughts to help you choose the
                most suitable study topic. We aim to understand your preferences
                and dislike for various study topics and help you choose the one
                that most closely matches your personality and interests. When
                helping you chooses the appropriate thesis topic, our main areas
                of attention are as follows:
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      The subject matter should possess academic significance.
                      Your research is evaluated based on your ability to make
                      valuable contributions to your field of study. Given that
                      the purpose of your research is to address the current
                      gaps in the field, it is imperative that you do not
                      deviate from it due to an incorrect selection of a topic.
                      Therefore, our specialists assist you in choosing a
                      noteworthy subject that can yield considerable results.{" "}
                      <br></br>
                      <br></br> The subject matter should captivate your
                      interest. It can serve as a source of motivation for the
                      extended duration of your investigation. If your
                      enthusiasm in a subject diminishes over time, you will be
                      unable to cultivate a robust project. Therefore, it is
                      imperative that one possesses a strong interest for their
                      chosen thesis topic. Our experts provide topic selections
                      based on a thorough evaluation of your enthusiasm and
                      drive in particular subject domains.
                      <br />
                      <br />
                    </li>
                    <li>
                      The subject matter should be readily comprehensible. The
                      feasibility of performing the task within the given
                      timeframe and available resources should be considered. If
                      you choose to investigate a multifaceted subject with
                      numerous aspects, it is possible that you may not be able
                      to comprehensively address every part of it. Therefore, it
                      is advisable to concentrate on a precisely delineated
                      subject that can be thoroughly examined within a
                      reasonable timeframe. We provide assistance in this
                      matter. <br />
                      <br />
                    </li>
                    <li>
                      The selected subject and the field of study should not
                      contradict your primary area of interest. Your present
                      topic choice can serve as a guiding force for your
                      personal and professional interests. Therefore, we aid you
                      in selecting a subject that can be beneficial for your
                      academic and professional trajectory.
                      <br />
                      <br />
                    </li>
                    <li>
                      Excessive time should not be expended on the process of
                      selecting an ideal thesis topic. We possess a diverse
                      range of informational tools that facilitate our
                      exploration of the literature in a specific field and
                      enable us to promptly identify the current research
                      deficiencies.Conducting an initial consultation for PhD
                      topics can assist in the process of identifying a
                      selection of relevant and researchable subjects. You have
                      the option to select the final choice from our list of
                      shortlisted possibilities.
                      <br />
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
