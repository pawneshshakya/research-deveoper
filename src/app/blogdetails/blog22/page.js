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
                HOW TO MEET YOUR PHD GOALS WITH CONFIDENCE?
              </h2>

              <p className="pt-2 font-bold">Confidentiality and Security</p>
              <p className="pt-2 text-justify">
                Trust and confidentiality lie at the heart of our service. We
                recognize the sensitivity of your research and personal
                information, and thus, we employ robust security protocols to
                safeguard your data at every juncture. Your trust is of
                paramount importance to us, and we ensure that all client
                information remains strictly confidential. With RESEARCH
                DEVELOPERS, you can have peace of mind, knowing that your
                intellectual property and personal details are safeguarded with
                utmost care.
              </p>
              <p className="font-bold pt-4">Plagiarism-Free Guarantee</p>
              <p className="pt-2 text-justify">
                At RESEARCH DEVELOPERS, we uphold the highest standards of
                academic integrity. Plagiarism is a grave concern in research,
                and to safeguard your academic reputation, we employ advanced
                software to meticulously scan all work for potential plagiarism.
                With our unwavering commitment to originality, you can be
                confident that your thesis will be 100% authentic and unique, a
                true reflection of your scholarly contributions.
              </p>
              <p className="pt-4 font-bold">On-Time Delivery</p>
              <p className="pt-2 text-justify">
                We understand the significance of timely submissions in your
                academic journey. Meeting deadlines is crucial, and we take this
                responsibility seriously. With unwavering diligence and
                streamlined processes, we guarantee on-time delivery, empowering
                you to proceed with confidence, knowing that your academic goals
                are well within reach.
              </p>
              <p className="pt-4 font-bold">Expert Writing and Editing</p>
              <p className="pt-2 text-justify">
                Our esteemed team of experienced writers and editors is
                dedicated to crafting top-notch theses that transcend
                expectations. Armed with the latest research techniques and
                writing strategies, our experts meticulously hone every aspect
                of your thesis to perfection. From coherent structure to
                compelling arguments, we leave no stone unturned in ensuring
                that your thesis stands as an exemplar of academic excellence.
              </p>
              <p className="pt-4 font-bold">Client-Centric Support</p>
              <p className="pt-2 text-justify">
                Our commitment to your success goes beyond words. We take
                immense pride in our client-centric approach, which places your
                needs and aspirations at the forefront of our service.
                Throughout your thesis journey, our attentive support team is
                available to address your queries, provide guidance, and ensure
                a seamless collaboration. Your satisfaction is our priority, and
                we strive to exceed your expectations at every turn.
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
