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
        <div className="max-w-screen-xl grid gap-8 grid-cols-1 md:grid-cols-3 mx-auto md:pt-16   text-gray-900 rounded-lg shadow-lg">
          <div className="lg:w-full col-span-2">
            <Image src={banner1} className="h-[400] sm:w-full" alt="img" />
            <div className="md:hidden">
              <Navbar />
            </div>
            <div className="col-span-2 bg-white p-10 mt-10">
              <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d]">
                Why Thesis Editing Service?
              </h2>

              <p className="mt-2 text-justify">
                Following the process of composing the thesis, the subsequent
                phase entails the commencement of the final duty, namely, the
                editing of the thesis. One may be enticed by the finalised
                thesis, desiring to promptly obtain a hard copy and present it
                to their supervisor or examination committee as evidence of
                their diligent efforts. However, it is important to exercise
                caution. Have you revised your thesis? No, we do not imply that
                you have any more or omitted content to include or exclude from
                your thesis. However, it would be prudent to verify its
                accuracy. It is possible that you have composed sentences or
                paragraphs that are poorly written, included several antecedents
                that are unclear, provided an argument that is hazy, or made
                improper structural and lexical connections between phrases,
                paragraphs, or figures, among other things. The process of
                editing extends beyond the mere correction of grammatical and
                typographical problems, as well as the inclusion of essential
                factual material. It is probable that one may inadvertently
                disregard minor errors in their thesis and promptly submit it.
                However, the examination committee exhibits a distinct
                inclination towards such faults. Your meticulous attention to
                every aspect of your thesis demonstrates your deep commitment to
                it. Negligence on your part has the potential to undermine the
                entirety of your diligent efforts and doctoral degree. Utilise
                our high-quality thesis editing services to minimise the
                likelihood of your thesis being rejected as a result of language
                or conceptual mistakes. Research Developers is a collective of
                PhD thesis editors in India who collaborate to transform your
                unfinished thesis into a functional thesis. Our team of PhD
                thesis editors possesses extensive expertise in several academic
                topics, enabling us to provide editing services of exceptional
                quality throughout over 100 subject areas.
              </p>
              <p className="font-bold">
                Research Developers, with a team of PhD Thesis Editors, ensures
                the following:{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Grammar: Punctuation, spelling, subject-verb agreement,
                      and active-passive voice
                      <br />
                      <br />
                    </li>
                    <li>
                      Tense Consistency: Utilising tenses in accordance with the
                      Abstract, Literature, Review, Theoretical Framework,
                      Conclusion, and Recommendations <br />
                      <br />
                    </li>
                    <li>
                      Specific diction for the subject-audience: A writing style
                      that effectively appeals to the intended audience.
                      <br />
                      <br />
                    </li>
                    <li>
                      Review the citations: Citations List, Reference List, and
                      Bibliography according to the specified format.
                      <br />
                      <br />
                    </li>
                    <li>
                      Data Organisation: Formatting of Table of Contents,
                      Graphs, Figures, etc.
                      <br />
                      <br />
                    </li>
                    <li>
                      Apt Language: Seamless coherence, interconnection of
                      paragraphs, Sentence structure
                      <br />
                      <br />
                    </li>
                  </div>
                </div>
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <p className="font-bold">The process of revising fragments</p>
                </div>
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <p className="text-justify">
                    It has been acknowledged and established that Research
                    Developers is a reputable and proficient service provider
                    that offers high-quality Thesis Editing Services to several
                    PhD applicants. The composition of our Thesis Editing Team
                    consists of PhD Thesis Editors who have been carefully
                    selected based on their expertise in identifying and
                    addressing issues related to the structure, conceptual
                    explanation, and coherence of the thesis.
                  </p>
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
