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
                Topics in IoT
              </h2>

              <p className="mt-2 text-justify">
                Internet of Things (IoT) has become one of the most sought after
                courses in the past few years. It has opened a complex and
                dynamic dimension to be explored in the world of connected
                devices and offered the students to change their physical world.
                However, the “things” here is not limited to a set or specific
                things, it literally comprises everything that is out there in
                the Internet of Things.
              </p>
              <p className="text-justify">
                This course talks about vehicles, buildings, devices, sensors,
                electronics, softwares, materials and so on. It means that there
                are so many topics ranging from search processes, Data
                Analytics, Security, Energy Harvesting, so on and so forth. In
                this case, choosing the right topic for writing your PhD Thesis
                becomes a more complicated task than the ones in which the field
                is defined. With Research Developers, you can put your
                overstressing brain to a rest by giving us the area of what you
                would like to dive deep into for your research and we will
                provide you with the most suitable thesis titles for the same
                and a few are given below.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Learning the Dynamics of IoT : Understanding the Scale of
                      research in the game-mode
                      <br />
                    </li>
                    <li>
                      Our services offer prompt, cost-effective, and superior
                      writing assistance. Our team of proficient writers will
                      produce thesis of exceptional quality within a minimal
                      timeframe, while maintaining a highly competitive pricing
                      structure. Our services encompass a wide range of academic
                      support, including thorough thesis or chapter writing,
                      editing, proofreading, and formatting, which have been
                      utilised by numerous students. Utilising our services
                      ensures that you receive the most pertinent and
                      influential research on your subject. We also guarantee
                      that your thesis is composed in accordance with the
                      directions and standards provided by your university. The
                      text is entirely unique, and our service includes the
                      additional guarantee of punctual delivery. <br />
                      <br />
                    </li>
                    <li>
                      Miniaturization of Devices : The New Outlook of Things
                      <br />
                    </li>
                    <li>
                      Exploring the Security and Privacy aspects in IoT : How to
                      reduce the risks?
                      <br />
                    </li>
                    <li>
                      Edge Commuting and Mobile Cloud : Everything You Need to
                      Know
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
