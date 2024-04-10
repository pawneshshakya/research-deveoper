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
                WHY CHOOSE US?
              </h2>

              <p className="mt-2 text-justify">
                Our organisation offers external technological pedagogy services
                aimed at simplifying the process of research writing and
                publication. Research Developers is dedicated to meeting the
                research needs of seasoned researchers.
              </p>
              <p className="text-justify">
                Our academic research writing services consistently yield
                exceptional results in all areas. We support scholars by
                offering writing aid services using advanced technology,
                allowing them to receive smooth and effortless writing support
                through our Scholar&#39;s App. We support academic researchers
                by providing them with the opportunity to undergo a peer review
                process, which aims to evaluate the credibility, excellence, and
                frequently the originality of their research papers, articles,
                or theses for publication or submission. Our primary objective
                is to uphold the integrity of science and research by
                eliminating publications that are invalid or of low quality.{" "}
              </p>
              <p className="font-bold text-justify">
                WHAT IS THE PURPOSE OF A RESEARCH PROPOSAL?{" "}
              </p>
              <p className="text-justify">
                An additional rationale for the significance of a research
                proposal lies in its thorough elucidation of the intended topic.
                Please furnish the necessary details pertaining to your study
                methodology:{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Schedule and viability
                      <br />
                    </li>
                    <li>
                      The technique and methods employed in this study
                      <br />
                    </li>
                    <li>
                      All additional factors required to advance your research,
                      such as available resources.
                      <br />
                    </li>
                  </div>
                </div>
              </div>
              <p className="text-justify">
                Consider it as a tool that can aid you in elucidating your
                notion and enhancing the efficiency of your investigation.{" "}
              </p>
              <p className="font-bold pt-4 text-justify">
                WHAT ARE THE TYPICAL CHALLENGES THAT STUDENTS FACE WHEN
                COMPOSING A THESIS?{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <ol type="1" className="pt-2">
                      Timeliness is a crucial factor in the successful
                      completion of academic projects, encompassing both
                      straightforward tasks such as assignments and more
                      intricate endeavours like thesis works. Students
                      frequently encounter several academic responsibilities due
                      to the abundance of courses in their study programmes. The
                      educational system might exhibit a high degree of
                      persistence and determination. In addition to their
                      academic responsibilities, certain students have
                      employment obligations. Hence, students seek assistance
                      and support from PhD thesis writing services in order to
                      alleviate the burden of a substantial academic task.
                      <br />
                    </ol>
                    <ol type="2" className="pt-2">
                      The paramount significance of quality cannot be overstated
                      in any theory. The final draft necessitates multiple
                      revisions, editing, and other verifications. In order to
                      produce a thesis that is highly presentable, a certain
                      level of technical writing knowledge is required. However,
                      many students either lack this knowledge to some extent or
                      have to invest additional time in relearning it.
                      <br />
                    </ol>
                    <ol type="3" className="pt-2">
                      The primary challenge encountered by students when
                      composing a thesis is the presence of a language barrier.
                      Despite possessing strong communication skills and
                      excelling in spoken communication, writing is a skill that
                      may not be readily acquired by all individuals.
                      Translating thoughts into writing form necessitates years
                      of painstaking practice. Many pupils are in search of the
                      most optimal thesis writing services due to this specific
                      rationale.
                      <br />
                    </ol>
                    <ol type="4" className="pt-2">
                      The incorporation of data analysis and statistical
                      analysis is regarded as essential components within the
                      framework of your thesis. Given the significance of
                      statistics and software development, our organisation
                      possesses a comprehensive array of tools that facilitate
                      the meticulous organisation, analysis, and interpretation
                      of data. Our thesis writing services in India are tailored
                      to meet the specific criteria of various universities,
                      guaranteeing that your research is distinguished by its
                      innovative ideas and latest advances.
                      <br />
                    </ol>
                    <ol type="5" className="pt-2">
                      Guaranteed originality. By outsourcing your Phd thesis
                      writing help in India, we ensure the authenticity of your
                      academic content. Customers from many countries, including
                      as the United Kingdom, the United States, Canada, and
                      Australia, can rely on our services to provide a thesis
                      that has undergone AI verification and is completely
                      devoid of plagiarism.
                      <br />
                    </ol>
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
