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
                MITIGATE HIGH RESEARCH PAPER REJECTIONS WITH OUR STRATEGIC
                SOLUTIONS
              </h2>

              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we understand the profound
                disappointment that accompanies paper rejections and are
                committed to arming you with an arsenal of strategies to
                overcome these challenges. Our holistic approach is meticulously
                designed to address each specific issue that often leads to
                rejections, transforming them into stepping stones toward
                successful publication.
              </p>
              <p className="pt-5 font-bold">
                Enhancing Writing Precision and Organization
              </p>
              <p className="pt-2 text-justify">
                Solution: Our skilled editorial team meticulously refines your
                manuscript, addressing grammatical nuances, spelling errors, and
                enhancing overall clarity. With a focus on structural integrity,
                we ensure your paper&#39;s narrative flows seamlessly,
                captivating the reader&#39;s attention from introduction to
                conclusion.
              </p>
              <p className="pt-4 font-bold">Relevance to Current Trends</p>
              <p className="pt-2 text-justify">
                Solution: Staying current with the dynamic landscape of your
                field is imperative. Our team, armed with the latest
                advancements and trends, ensures your paper seamlessly
                integrates with the contemporary discourse. By bolstering the
                relevance of your research to the present state of the field, we
                preemptively nullify rejections stemming from outdated or
                tangential content.
              </p>
              <p className="pt-4 font-bold">Novelty And Significance</p>
              <p className="pt-2 text-justify">
                Solution: Collaboration is key to ensuring your work is
                innovative and impactful. We engage in comprehensive
                discussions, brainstorming sessions, and literature reviews to
                identify gaps that your research addresses. By leveraging our
                expertise and your insights, we create a narrative that
                showcases the novel contribution and significance of your work
                to the academic community.
              </p>
              <p className="pt-4 font-bold">Unwavering Quality</p>
              <p className="pt-2 text-justify">
                Solution: Quality is our hallmark. Our experts meticulously
                review every facet of your paper, from originality to
                presentation. By adhering to rigorous standards of excellence,
                we ensure your manuscript exudes the caliber that journals
                demand, significantly reducing the likelihood of rejection based
                on perceived shortcomings.
              </p>
              <p className="pt-4 font-bold">
                Fortifying Research Integrity and Completeness
              </p>
              <p className="pt-2 text-justify">
                Solution: We meticulously scrutinize your research design,
                methodology, data, and analysis. Our experts collaborate with
                you to bolster the rigor of your research, ensuring a robust
                foundation. By identifying and rectifying flaws or gaps, we
                fortify your paper against potential rejection on the grounds of
                incomplete or flawed research.
              </p>
              <p className="pt-4 font-bold">
                Ensuring Journal Relevance and Alignment
              </p>
              <p className="pt-2 text-justify">
                Solution: Our first step is meticulous journal selection. We
                collaborate with you to identify journals that resonate with the
                scope of your research, ensuring your work seamlessly aligns
                with their aims. This minimizes the risk of rejection due to
                misalignment and enhances the chances of your paper being deemed
                a valuable addition to the journal&#39;s portfolio.
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
