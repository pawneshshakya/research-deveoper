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
                Projects in Hadoop
              </h2>

              <p className="mt-2 text-justify">
                Hadoop, often regarded as the fundamental infrastructure for big
                data research, offers a structured framework for executing tasks
                across multiple nodes within clusters. Hadoop offers a highly
                dependable storage layer known as HDFS, a batch processing
                engine referred to as MapReduce, and a resource management layer
                known as YARN.
              </p>
              <p className="text-justify">
                This tool is extensively utilised by big data analysts due to
                its capacity to efficiently store and process vast quantities of
                diverse data types.{" "}
              </p>
              <p className="font-bold text-justify">
                Hadoop&#39;s distributed computing paradigm efficiently handles
                large volumes of data.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Hardware failure is mitigated to safeguard data and
                      application processing.
                      <br />
                    </li>
                    <li>
                      In contrast to conventional relational databases, there is
                      no need to preprocess data prior to storage.
                      <br />
                    </li>
                    <li>
                      The open-source framework is cost-free and utilises
                      inexpensive hardware to store substantial amounts of data.
                      <br />
                    </li>
                    <li>
                      Minimal administrative effort is necessary.
                      <br />
                    </li>
                  </div>
                </div>
              </div>
              <p className="pt-4 text-justify">
                The utilisation of Hadoop in academic research is experiencing a
                significant surge among scholars due to its numerous advantages
                compared to alternative solutions. However, selecting a suitable
                project in Hadoop is not a task that any scholar can easily
                accomplish. Cease your efforts! The consultants at Research
                Developers are available to provide assistance and support.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Our consultants have suggested several PhD projects in
                      Hadoop, including a Hadoop Mapreduce-based data prediction
                      technique for categorising bankrupted data.
                      <br />
                    </li>
                    <li>
                      Enhancing performance in a Hadoop-based hybrid cloud using
                      optimisation techniques such as data prefetching and file
                      synchronisation.
                      <br />
                    </li>
                    <li>
                      The utilisation of energy-efficient hadoop functionality
                      in big data analytics for health informatics.
                      <br />
                    </li>
                    <li>
                      Utilising a data mining-based machine learning approach to
                      predict diseases from large datasets in a Hadoop context.
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
