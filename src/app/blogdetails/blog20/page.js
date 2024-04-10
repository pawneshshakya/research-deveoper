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
                HOW TO ENHANCE YOUR RESEARCH WITH OUR PHD THESIS WRITING
                ASSISTANCE?
              </h2>

              <p className="mt-2 text-justify">
                At RESEARCH DEVELOPERS, we understand the challenges and
                intricacies involved in producing a thesis that not only garners
                commendable grades but also leaves a lasting impact on your
                academic career. This is where our dedicated team of experienced
                writers steps in to provide you with the professional guidance
                and support you need.
              </p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we take great pride in offering a wide
                array of thesis writing services that cater to an extensive
                range of subject areas, ensuring that every researcher finds the
                perfect support for their unique academic journey.
              </p>
              <p className="pt-4 font-bold">Embracing Emerging Fields</p>
              <p className="pt-2 text-justify">
                Recognizing the dynamic nature of research, we continually
                update our knowledge base to stay at the forefront of emerging
                disciplines. Our commitment to innovation has led us to expand
                our services into pioneering areas such as Nanotechnology,
                Aeronautical Sciences, Cloud Computing, Big Data, and many
                others. This foresight allows us to offer our clients an
                extensive range of options and keeps them abreast of the latest
                advancements in their respective fields.
              </p>
              <p className="pt-4 font-bold">Diverse Subject Areas</p>
              <p className="pt-2 text-justify">
                Our expertise spans across an impressive spectrum of
                disciplines, providing comprehensive assistance to scholars from
                various fields. Whether you&#39;re delving into the realms of
                Management, Science, Law, IT, Economics, Finance and Accounts,
                Sociology, Education, Logistics and Supply Chain, Environmental
                Studies, History, Statistics, Engineering, Medical, Literature,
                or Computer Science, we have the knowledge and proficiency to
                guide you through the process with ease.
              </p>
              <p className="pt-4 font-bold">Unwavering Commitment to Quality</p>
              <p className="pt-2 text-justify">
                Quality is the cornerstone of our writing services, and we
                uphold the highest standards in academic integrity. Our
                commitment to providing non-plagiarized content ensures that
                every thesis we deliver is original and free from any form of
                unethical borrowing. To further strengthen the credibility of
                our work, we prioritize reliable and credible statistical
                analysis. Our statistical analysis help is guided by the three
                pillars of reliability, validity, and credibility, ensuring that
                your research findings are robust and defensible.
              </p>
              <p className="pt-4 font-bold">A Multifaceted Team of Experts</p>
              <p className="pt-2 text-justify">
                Our team of experts comprises seasoned professionals with vast
                knowledge and experience across diverse subject areas. We
                recognize that each researcher has unique requirements and
                tailor our services to suit their specific needs. Whether
                you&#39;re in the early stages of research, seeking assistance
                in choosing a suitable topic, or require comprehensive support
                in compiling and presenting literature sources in the form of a
                well-structured thesis, our experts are equipped to guide you at
                every step of your academic journey.
              </p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we understand the significance of your
                academic pursuits and the impact your research can have on your
                field. That&#39;s why we go the extra mile to provide
                unparalleled support, offering expertise across diverse subject
                areas and emerging fields while upholding the utmost commitment
                to quality and originality.
              </p>
              <p className="pt-2 text-justify">
                In the rapidly evolving landscape of academic research,
                technology has emerged as an indispensable ally, simplifying
                various aspects of the thesis writing process. PhD thesis
                writing software offers a range of automated features, from
                formatting your document with precise adherence to university
                guidelines to identifying and rectifying grammar errors that can
                often elude even the most meticulous eye. These tools also aid
                in organizing vast volumes of information into a coherent
                structure and ensure accurate citations that underscore the
                authenticity of your work. Moreover, with the ability to
                streamline complex data analysis, they have undoubtedly become a
                time-saving boon for researchers.
              </p>
              <p className="pt-2 text-justify">
                However, as pioneering as these software solutions may be, at
                RESEARCH DEVELOPERS, we firmly believe that your thesis deserves
                more than just automated assistance. Crafting an exemplary
                research document goes beyond mere technicalities and mandates a
                human touch, an in-depth understanding of the subject matter,
                and years of research experience that software alone cannot
                replicate. While these programs can undoubtedly expedite certain
                aspects of thesis writing, they may not possess the ability to
                grasp the nuanced intricacies of your research objectives, which
                are paramount to producing truly exceptional academic work.
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
