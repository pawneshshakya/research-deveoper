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
                BENEFITS OF CHOOSING OUR SYSTEMATIC LITERATURE REVIEW SERVICE
              </h2>

              <p className="pt-5 font-bold">Accuracy</p>
              <p className="pt-2 text-justify">
                Precision is the hallmark of our service. We diligently ensure
                the accuracy of our findings, leaving no room for ambiguity or
                doubt. By relying on our meticulously vetted information, you
                can make well-informed decisions and draw valid conclusions from
                the review, bolstering the credibility of your research.
              </p>
              <p className="pt-5 font-bold">Expertise</p>
              <p className="pt-2 text-justify">
                Our service boasts a team of seasoned experts with extensive
                experience in conducting Systematic Literature Reviews. With
                their rigorous and systematic approach, you can rest assured
                that your review will be handled by professionals who possess
                in-depth knowledge of the process, ensuring the highest standard
                of research execution.
              </p>
              <p className="pt-4 font-bold">Timeliness</p>
              <p className="pt-2 text-justify">
                We understand the value of time in the realm of academia. With
                our service, you can count on timely delivery of the review,
                enabling you to access critical information precisely when you
                need it most. Whether you have tight deadlines or time-sensitive
                research objectives, we are committed to meeting your needs
                promptly and efficiently.
              </p>
              <p className="pt-4 font-bold">Transparency</p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we uphold the principles of
                transparency, providing you with clear insights into our methods
                and findings. You can easily comprehend how the review was
                conducted, enabling you to assess the quality of the findings
                and instilling confidence in the validity of the results.
              </p>
              <p className="pt-5 font-bold text-justify">
                YOUR PERFECT DATA ANALYSIS SOFTWARE NOW WITH EXPERT GUIDANCE
              </p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we are dedicated to helping you use
                Stata as the perfect data analysis software option, tailored to
                meet your diverse analytical needs.
              </p>
              <p className="pt-5 font-bold">Regression Analysis</p>
              <p className="pt-2 text-justify">
                Our expertise in Stata allows us to perform an array of
                regression analyses, such as linear regression, logistic
                regression, and time series analysis. These techniques enable us
                to uncover relationships, explore trends, and draw significant
                conclusions for your research.
              </p>
              <p className="pt-5 font-bold">Data Management</p>
              <p className="pt-2 text-justify">
                Stata&#39;s powerful data management system empowers us to
                seamlessly import, export, and manipulate data. Ensuring a solid
                foundation for analysis, we efficiently organize and prepare
                your data, enabling us to delve deeper into its complexities.
              </p>
              <p className="pt-2 text-justify">
                With Stata, we delve into a wide spectrum of descriptive
                statistics, including means, standard deviations, and
                correlations. These insights offer a comprehensive understanding
                of your data&#39;s characteristics, laying the groundwork for
                meaningful analyses.
              </p>
              <p className="pt-5 font-bold">Speed and Accuracy</p>
              <p className="pt-2 text-justify">
                Time is of the essence in research, and Stata ensures rapid
                analysis, even for large datasets. With lightning-fast
                processing capabilities, it saves you valuable time, enabling
                you to focus on the essence of your research. Moreover,
                Stata&#39;s unmatched accuracy guarantees reliable results,
                reinforcing the credibility of your findings.
              </p>
              <p className="pt-5 font-bold">Data Visualization</p>
              <p className="pt-2 text-justify">
                Visualizing data is key to grasping its nuances effectively.
                Stata empowers us to create compelling scatterplots, insightful
                histograms, and informative bar charts. These visual
                representations breathe life into your data, making it easier
                for you to communicate your findings.
              </p>
              <p className="pt-5 font-bold">User-Friendly Interface</p>
              <p className="pt-2 text-justify">
                Navigating the complexities of statistical analysis can be
                daunting, but fear not - Stata&#39;s intuitive interface is
                designed with you in mind. Whether you&#39;re a seasoned
                researcher or a novice in data analysis, Stata&#39;s
                user-friendly features make it accessible to all and with our
                experts to guide you, there are no limits to what you can
                achieve.
              </p>
              <p className="pt-5 font-bold text-justify">
                NEED STATA FOR YOUR RESEARCH DATA ANALYSIS? THEN TRUST US TO AID
                YOUR RESEARCH JOURNEY WITH ACCURATE, RELIABLE, AND USER-FRIENDLY
                DATA ANALYSIS AT RESEARCH DEVELOPERS.
              </p>
              <p className="pt-2 text-justify">
                In the dynamic world of research, data analysis plays a pivotal
                role in accessing the hidden insights within vast datasets.
                Stata is a robust statistical software package that stands as a
                powerful ally in this pursuit, and we are here to help
                researchers in India and beyond to perform a diverse array of
                statistical analyses with speed, accuracy, and ease.
              </p>
              <p className="pt-2 text-justify">
                Stata finds widespread application in various research fields,
                including economics, biomedicine, sociology, political science,
                and public health. When dealing with complex datasets in these
                domains, Stata emerges as the preferred choice due to its
                exceptional capabilities. Stata is primarily used for
                quantitative research as it is a statistical software package
                that is used to analyze and interpret numerical data. It can be
                used to perform a wide variety of statistical analyses,
                including descriptive statistics, regression analysis, and time
                series analysis.
              </p>
              <p className="pt-2 text-justify">
                However, Stata can also be used for some qualitative research.
                For example, it can be used to analyze transcripts of interviews
                or focus groups. It can also be used to create data
                visualizations that can help to communicate the findings of
                qualitative research. With Stata as our trusted companion, we
                provide expert assistance in data analysis, ensuring that your
                research data is transformed into valuable insights. Our team of
                skilled analysts, well-versed in Stata&#39;s functionalities,
                stands ready to guide you through the intricacies of statistical
                analysis.
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
