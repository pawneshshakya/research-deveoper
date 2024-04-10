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
                HOW WE CREATE OUTSTANDING PHD RESEARCH PROPOSALS?
              </h2>

              <p className="mt-2 text-justify">
                At RESEARCH DEVELOPERS, we take immense pride in ensuring that
                every aspect of a great PhD research proposal is present in the
                work we deliver. Our commitment to excellence revolves around
                the following key factors:
              </p>
              <p className="pt-4">Clarity</p>
              <p className="pt-2 text-justify">
                We prioritize clear and concise writing, ensuring that your
                proposal is easy to read and understand. Our team organizes the
                arguments in a logical and coherent manner, making your proposal
                a pleasure to review.
              </p>
              <p className="pt-4">Conciseness</p>
              <p className="pt-2 text-justify">
                Understanding the significance of brevity, we craft proposals
                that are just the right length. While adhering to the specific
                requirements of your program, our proposals typically span
                between 1,500 and 3,000 words, presenting all essential
                information effectively.
              </p>
              <p className="pt-4">Specificity</p>
              <p className="pt-2 text-justify">
                Your research questions are the heart of your proposal, and we
                ensure they are specific, measurable, and well-defined.
                Moreover, we elucidate your plan to answer these questions,
                leaving no room for ambiguity.
              </p>
              <p className="pt-4">Realism</p>
              <p className="pt-2 text-justify">
                Our proposals are grounded in realism, particularly in the
                aspects of timeline and budget. We provide pragmatic schedules
                and budgets, giving you a solid foundation to execute your
                research effectively.
              </p>
              <p className="pt-4">Argumentation</p>
              <p className="pt-2 text-justify">
                The strength of your proposal lies in its well-argued content.
                We meticulously state your research questions, explain their
                importance, and outline the methodologies to address them,
                presenting a compelling case for your study.
              </p>
              <p className="pt-4">Understanding of Existing Research</p>
              <p className="pt-2 text-justify">
                Demonstrating a profound understanding of existing research is
                essential, and our team excels in this aspect. We thoroughly
                analyze the literature, identifying gaps, and showcasing how
                your research will bridge these voids.
              </p>
              <p className="pt-4">Contribution to the Field</p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we recognize the significance of your
                research&#39;s contribution to the field. Whether it is
                answering a crucial question, developing a new theory, or
                providing valuable insights, we ensure that your proposal
                demonstrates the potential impact of your work. You may be
                confident that your research proposal will be unique because of
                our thoroughness and commitment to creating high-quality
                proposals.
              </p>
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
