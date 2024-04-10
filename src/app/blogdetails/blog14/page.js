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
                NLP PhD Thesis Topics
              </h2>

              <p className="mt-2 text-justify">
                Natural language processing (NLP) is a specialised area within
                computer science and information engineering that focuses on the
                study of how computers and humans communicate with each other
                through language. Natural Language Processing (NLP) aims to
                facilitate the connection between computers and humans by
                allowing computers to analyse user input and interpret the
                intended meaning.
              </p>
              <p className="font-bold text-justify">
                The utilisation of natural language interfaces facilitates
                several communicative functions. NLP{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Offers precise definitions of concepts
                      <br />
                    </li>
                    <li>
                      Identifies and rectifies user misunderstandings
                      <br />
                    </li>
                    <li>
                      Delivers explanations
                      <br />
                    </li>
                    <li>
                      Verifies and showcases comprehension
                      <br />
                    </li>
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
