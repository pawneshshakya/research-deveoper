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
                Topics in English Literature
              </h2>

              <p className="mt-2 text-justify">
                The PhD programme in English Literature offers students the
                ultimate opportunity to enhance their training and acquire
                research abilities, enabling them to become future researchers.
                In order to receive the degree, the thesis must demonstrate a
                substantial contribution to the current body of knowledge
                through the execution of important research. This academic field
                facilitates the cultivation of research projects by students,
                allowing them to select a certain time, author, or book within
                the realm of English Literature. The research may encompass the
                examination of the Mediaeval, Renaissance, Enlightenment,
                Romantic, or the 19th and 20th centuries, as well as the
                critical interpretation of their literary works.
                Interdisciplinary initiatives encompassing the School of
                Literature, Languages, and Cultures may be involved.
              </p>
              <p className="text-justify">
                The crucial factor for achieving good research is to pose a
                genuine and meaningful research question that can thoroughly
                investigate the specific field. The preliminary research on a
                potential topic involves engaging in intellectual preoccupation,
                curiosity, and investigation through activities such as reading,
                thinking, and engaging in conversations. Research Developers has
                assembled a team of research consultants to assist you in
                achieving the same objective. The research experts at our
                institution possess expertise in the field of English Literature
                and have provided assistance to more than 3400 students in
                formulating precise and focused PhD research topics. As an
                illustration of the calibre of our subject choosing service,
                they have furnished PhD topics in the field of English
                Literature.
              </p>
              <p className="font-bold">
                Potential PhD subjects in the field of English Literature:{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      The Significance of African Literary Responses to Racism:
                      An Analysis of Maya Angelou is Works
                      <br />
                    </li>
                    <li>
                      The Variables of Exclusion and Silence in South Asian
                      Fiction after 9/11
                      <br />
                    </li>
                    <li>
                      Comparative Study of Manifestations of Masculinity: A
                      Comparative Analysis of Indian Novels before and after
                      Independence
                      <br />
                    </li>
                    <li>
                      Key Points: Surrealism in Arun Kolatkar&#39;s Poetry
                      <br />
                    </li>
                    <li>
                      Exploring the Interplay between Tradition and Modernity: A
                      Case Study of Tagore&#39;s Gora
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
