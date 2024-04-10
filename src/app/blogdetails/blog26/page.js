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
                WHY CHOOSING OUR SERVICE IS THE BEST IDEA FOR YOUR THESIS?
              </h2>

              <p className="pt-2 text-justify">
                When it comes to your academic journey, every decision matters,
                and entrusting your thesis to the right hands can make all the
                difference. At RESEARCH DEVELOPERS, we take immense pride in
                offering a thesis editing and proofreading service that goes
                beyond mere corrections – we enhance your work to the pinnacle
                of excellence. Here&#39;s why choosing our service is undeniably
                the best idea for ensuring the success of your thesis:
              </p>
              <p className="pt-5 font-bold text-justify">
                Multifaceted Assessment Process
              </p>
              <p className="pt-2 text-justify">
                Beyond basic grammar and spell checks, our assessment process
                encompasses a comprehensive evaluation of various elements. From
                linguistic nuances to structural coherence, citations,
                references, and even visual elements, our meticulous review
                ensures that every facet of your thesis meets the highest
                academic standards.
              </p>
              <p className="pt-5 font-bold text-justify">
                Unparalleled Expertise in Academic Editing
              </p>
              <p className="pt-2 text-justify">
                Our team comprises seasoned experts with a profound
                understanding of academic writing standards. Our editors possess
                vast experience in refining theses across diverse disciplines,
                ensuring that your work adheres to the highest levels of
                scholarly rigor and precision.
              </p>
              <p className="pt-5 font-bold text-justify">
                Tailored Solutions for Your Unique Needs
              </p>
              <p className="pt-2 text-justify">
                We recognize that each thesis is a distinctive representation of
                your research journey. Our approach is personalized, addressing
                your specific requirements. Whether you&#39;re an aspiring PhD
                candidate or a seasoned researcher, our service is designed to
                cater to your exact needs, enhancing the originality, clarity,
                and scholarly impact of your work.
              </p>
              <p className="pt-5 font-bold text-justify">
                A Proven Track Record of Excellence
              </p>
              <p className="pt-2 text-justify">
                Our success stories speak volumes. Over the years, we have
                consistently delivered exceptional results, aiding countless
                scholars in achieving their academic aspirations. The
                testimonials of our satisfied clients bear witness to our
                dedication to enhancing the quality and impact of their theses
              </p>
            </div>
          </div>
          {/* blog */}
          <div className=" bg-white px-3 py-10">
            <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent text-center rounded-xl bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d]">
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
