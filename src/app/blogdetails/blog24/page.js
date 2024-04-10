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
                PHD RESEARCH PAPER WRITING SERVICES & PUBLICATION SUPPORT
              </h2>

              <p className="pt-2 text-justify">
                Whether you are looking for publication in a Scopus, SCI Indexed
                or ABDC journal, our team of expert researchers work with you
                and develop a manuscript which may be accepted for publication
                on the merit of its research. Under the research paper writing
                service, we offer review type research paper development,
                systematic literature review manuscript write-ups, empirical
                research paper writing and technical manuscripts development.
                Our team collaborates with you and develops research papers
                which carry novelty, accuracy of findings and adheres to journal
                publishing guidelines.
              </p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we understand the multifaceted
                challenges that researchers face, and we are here to offer
                unparalleled Research Paper Writing Services & Publication
                Support specifically within India for PhD scholars. Our service
                is founded upon the principle that the process of crafting and
                publishing a research paper is a meticulously orchestrated
                symphony of creativity, precision, and persistence. With our
                expert assistance, you are not merely availing a service – you
                are investing in a streamlined pathway to publication success.
              </p>
              <p className="pt-2 text-justify">
                Our comprehensive research paper writing service begins with the
                very inception of your idea, guiding you through every nuance of
                its evolution. From selecting a compelling research question to
                sculpting a cohesive narrative, we offer meticulous guidance
                tailored to your research area within India. Our seasoned
                professionals wield a deep understanding of diverse academic
                domains, ensuring that your work is not only impactful but
                culturally relevant.
              </p>
              <p className="pt-4 font-bold">
                JOURNAL SELECTION AND MANUSCRIPT SUBMISSION
              </p>
              <p className="pt-2 text-justify">
                One of the cornerstones of successful publication is journal
                selection, it requires acumen and insight. Our experts,
                well-versed in the academic landscape of India and international
                journal publications, meticulously curate a list of journals
                that resonate with the essence of your research. We align your
                manuscript with the journals that offer the perfect platform for
                your contribution. Our proficiency extends to meticulously
                formatting and adhering to submission guidelines, ensuring a
                seamless journey from your desk to the editor&#39;s inbox.{" "}
              </p>
              <p className="pt-4 font-bold text-justify">
                HOW TO DISCOVER THE FEATURES OF OUR SYSTEMATIC LITERATURE REVIEW
                SERVICE
              </p>
              <p className="pt-2 font-bold text-justify">
                Transparency and Clarity In Reporting
              </p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, transparency and clarity are paramount.
                We take pride in our ability to present the results of your
                Systematic Literature Review in a clear and transparent manner.
                Our detailed and well-structured report provides a comprehensive
                description of the methods employed, the review&#39;s key
                findings, and any limitations encountered along the way.
              </p>
              <p className="pt-5 font-bold text-justify">
                Critical Evaluation for Methodological Excellence
              </p>
              <p className="pt-2 text-justify">
                With a keen eye for quality, our expert team engages in a
                rigorous critical appraisal of the included studies. We
                meticulously assess their methodological rigor, study design,
                methods, and analysis. This vital step guarantees that only the
                most credible and reliable sources are integrated into your
                review.
              </p>
              <p className="pt-5 font-bold text-justify">
                Comprehensive and Meticulous Exploration
              </p>
              <p className="pt-2 text-justify">
                Our Systematic Literature Review service at RESEARCH DEVELOPERS
                explores the enormous field of study in a thorough and
                meticulous manner. We use a wide range of powerful techniques to
                conduct a thorough search, making sure to not miss any important
                clues. Our approach guarantees that all relevant research are
                located by scouring electronic databases, hand-searching
                journals, and even talking with experts in the subject.
              </p>
              <p className="pt-5 font-bold text-justify">
                Data Uncovered and Synthesized
              </p>
              <p className="pt-2 text-justify">
                Our skilled researchers excel in the art of data extraction and
                synthesis, unearthing the essence of the included studies to
                answer your precise research question. By summarizing the
                findings of each study and detecting emerging patterns or
                trends, we paint a vivid picture of the existing knowledge
                landscape.
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
