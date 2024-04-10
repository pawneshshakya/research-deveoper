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
                Topics in Consumer Behaviour
              </h2>

              <p className="mt-2 text-justify">
                The field of Marketing Management has dedicated significant
                attention to the study of consumer behaviour in doctorate
                research. Pursuing a doctoral degree in consumer behaviour has
                numerous professional prospects, including options for
                university teaching and research roles within market research
                organisations. In addition, company marketers use market
                researchers to assist in devising strategies for optimising the
                allocation of marketing resources and addressing management
                challenges with greater efficacy.
              </p>
              <p className="text-justify">
                However, embarking on a PhD in consumer behaviour is a
                challenging endeavour, with the primary obstacle being the first
                selection of a study topic. The topic serves as the fundamental
                and robust foundation around which your study will be built.
                Therefore, it is crucial that your research topic focuses on an
                investigative issue and clearly articulates the objective of
                your research. According to the assertions made by our
                specialists, numerous researchers have difficulties when
                formulating their research topics in the field of consumer
                behaviour due to the intricate nature of its various elements,
                including consumerism, demographic considerations, and consumer
                psychographics, among others.{" "}
              </p>
              <p className="font-bold text-justify">
                Our marketing management specialists have proposed several PhD
                topics in the field of Consumer Behaviour.{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      A study examining the relationship between service quality
                      and customer loyalty in fast food establishments.
                      <br />
                    </li>
                    <li>
                      To examine the influence of consumer trust, perceived
                      service quality, and customer satisfaction on the uptake
                      of E-banking services.
                      <br />
                    </li>
                    <li>
                      Examines the factors influencing post-purchase regret,
                      focusing on compulsive buying behaviour and consumer
                      culture.
                      <br />
                    </li>
                    <li>
                      The Influence of Children as Consumers on Family
                      Purchasing Decisions in Urban India
                      <br />
                    </li>
                    <li>
                      Theoretical Perspectives on Consumer Culture in Marketing
                      Management for Public Relations and Branding
                      <br />
                    </li>
                    <li>
                      Factors Influencing Consumer Behaviour in the Tourism
                      Sector, with a Focus on Social Networking
                      <br />
                    </li>
                    <li>
                      Evaluating the Impact of Product Packaging on Consumer
                      Perception: The Role of Values, Quality, and Satisfaction
                      <br />
                    </li>
                    <li>
                      An analysis of the impact of socio-economic factors on
                      consumer purchase behaviour in the online shopping
                      business, specifically focusing on the garment industry.
                      <br />
                    </li>
                    <li>
                      The influence of culture on consumer decision making.
                      <br />
                    </li>
                  </div>
                </div>
                <p className="text-justify">
                  An investigation of consumer psychology, specifically
                  examining alcohol consumption{" "}
                </p>
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
