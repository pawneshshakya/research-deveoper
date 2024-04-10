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
                Wifi Network Simulation
              </h2>

              <p className="mt-2 text-justify">
                PhD applicants frequently aspire to engage in research within
                the domain of WiFi Network Simulation, an area that holds the
                promise of yielding groundbreaking findings. In pursuit of this
                objective, PhD candidates frequently select a topic that is too
                expansive and demands a substantial amount of time to research
                and ascertain the solution. The field of WiFi Network Simulation
                has shown significant growth in popularity due to its
                wide-ranging applications across numerous domains.
              </p>
              <p className="font-bold text-justify">
                There are several types of applications, including mobile
                applications and business applications.{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Home-based applications
                      <br />
                    </li>
                    <li>
                      Cloud-based applications
                      <br />
                    </li>
                    <li>
                      The automotive sector
                      <br />
                    </li>
                    <li>
                      Engaging in online browsing
                      <br />
                    </li>
                    <li>
                      Teleconference
                      <br />
                    </li>
                  </div>
                </div>
              </div>
              <p className="text-justify">
                Nevertheless, choosing a subject in this domain is a laborious
                and challenging endeavour, given the abundance of existing
                research and the ongoing progress of various others. Therefore,
                the task of selecting a unique subject that yields an
                exceptional result is exceedingly challenging. When selecting a
                study topic, it is vital to examine various criteria. Firstly,
                choose a topic that captivates your interest. Secondly, choose a
                topic that is both practicable and research worthy.{" "}
              </p>
              <p className="font-bold text-justify">
                In order to assist candidates in selecting a suitable subject,
                the advisors at Research Developers have examined several
                matters and have formulated distinctive and viable research
                subjects.{" "}
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      The consultants have proposed several topics, including
                      the implementation of an SDN-based network model that
                      incorporates WiFi offloading for device-to-device
                      communication.
                      <br />
                    </li>
                    <li>
                      An optimal strategy for the integration of LTE-WiFi in
                      Internet of Things (IoT) networks through the utilisation
                      of expanded protocols.
                      <br />
                    </li>
                    <li>
                      This study proposes an extended ensemble classification
                      approach for predicting data in cyber-physical systems
                      using WiFi technology.
                      <br />
                    </li>
                    <li>
                      This study focuses on the optimisation of protocol-based
                      network communication in WiFi, utilising encryption
                      methods.
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
