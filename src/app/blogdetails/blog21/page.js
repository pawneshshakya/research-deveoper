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
                THE SYNERGY OF MIND AND MACHINE. GET YOUR THESIS ENHANCED BY
                EXPERTS.
              </h2>

              <p className="mt-2 text-justify">
                While academic writing software can be helpful tools for thesis
                writing, relying too heavily on these tools can actually weigh
                down the researcher. Software may promise a quick and easy
                solution, but it can&#39;t replace the critical thinking and
                creativity that is essential for producing a truly exceptional
                thesis. Furthermore, while some academic writing software may
                claim to be able to write entire theses, this can lead to a lack
                of originality and a disconnect between the researcher and their
                work. At RESEARCH DEVELOPERS, we believe that a human touch is
                essential for successful academic writing. Our team of research
                consultants uses their expertise and experience to guide
                scholars through the research process and help them produce
                original and impactful theses.
              </p>
              <p className="pt-5 font-bold">Advanced Tools And Software</p>
              <p className="pt-2 text-justify">
                Embracing the advantages of technology, we offer access to the
                latest academic writing software and cutting-edge PhD thesis
                writing software. These advanced tools serve as valuable aids in
                streamlining your research and writing process without
                compromising on quality or individuality. From formatting and
                grammar refinement to efficient data analysis, our software
                solutions equip you with the means to tackle the technical
                intricacies, freeing you to focus on the intellectual
                exploration that defines your research.
              </p>
              <p className="pt-5 font-bold">Expert Research Consultants</p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we understand that a well-crafted thesis
                demands more than just eloquent writing; it requires in-depth
                research, critical analysis, and a thorough understanding of
                your subject matter. Our team of experienced research
                consultants is dedicated to providing personalized support and
                guidance, ensuring that your thesis not only showcases
                exceptional writing but is also well-researched and
                well-supported.
              </p>
              <p className="pt-5 font-bold">Personalized Approach</p>
              <p className="pt-2 text-justify">
                Unlike automated software programs, we believe in the power of a
                human touch. Our personalized approach to each project involves
                working closely with you to understand your unique needs and
                requirements. This collaborative process allows us to grasp the
                essence of your research objectives and tailor our support to
                align perfectly with your vision. Whether you seek assistance in
                research design, literature sourcing, or structuring your
                arguments, our consultants are dedicated to providing solutions
                tailored to your research journey.
              </p>
              <p className="pt-5 font-bold">Expertise in Your Field</p>
              <p className="pt-2 text-justify">
                Research is not confined to a single domain, and neither are our
                consultants. With expertise spanning a wide range of fields, we
                have the capacity to assist you with any type of research
                project. No matter the subject area or research focus, our team
                is well-equipped to guide you towards producing a thesis that
                reflects the pinnacle of knowledge and research in your field.
              </p>
              <p className="pt-5 font-bold">High-Quality Results</p>
              <p className="pt-2 text-justify">
                Our primary goal is to help you achieve excellence in your
                research, and we pride ourselves on delivering high-quality
                results that not only meet but exceed your expectations. From
                the inception of your project to its finalization, we are
                committed to maintaining the utmost standards of academic
                integrity and precision.
              </p>
              <p className="font-bold pt-5">Flexible Services</p>
              <p className="pt-2 text-justify">
                Recognizing that every researcher&#39;s journey is unique, we
                offer a variety of services to meet your individual needs.
                Whether you require comprehensive support from the initial
                stages of research or seek assistance with specific aspects of
                your thesis, we provide flexible service options, ensuring you
                receive precisely the level of support that best compliments
                your requirements. Embrace the synergy of human expertise and
                advanced tools with RESEARCH DEVELOPERS by your side, you can
                unlock the true potential of your research and pave the way for
                a brilliant academic future.
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
