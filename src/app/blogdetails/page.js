"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import banner1 from "../../assets/images/banner.jpg";
import about from "../../assets/images/about.jpg";
import popularBlog from "../../data/popularBlog.js";
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
                Why Choose Research Developers?
              </h2>

              <p className="mt-2 text-justify">
                We possess an understanding of the concern that students have in
                relation to their academic achievements, and we are committed to
                providing assistance. The purpose of our thesis writing services
                is to assist individuals in obtaining their PhD degrees while
                minimising the typical chaos that often occurs in the days
                leading up to the thesis submission deadline.
              </p>
              <div className="ps-5">
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <div className="text-justify">
                    <li>
                      Services that prioritise resource conservation and
                      facilitate learning: The thesis is a crucial element of a
                      doctoral programme, demanding significant attention and
                      effort. In addition to the investigation and writing
                      tasks, the advancement of a new idea or perspective must
                      be substantiated by preexisting facts. Collectively, these
                      are the fundamental components of a thesis. This process
                      is frequently lengthy and requires great attention to
                      detail. Regrettably, numerous students endeavour to
                      compose such a challenging scholarly document
                      independently, and frequently, they make errors. <br></br>
                      <br></br> Under such circumstances, obtaining assistance
                      with thesis writing might prove really beneficial. The
                      purpose of Research Developers is to optimise your time
                      and effort. The purpose of our services is to mitigate the
                      risk of academic failure and emotional distress. Our
                      services will facilitate the effective defence of your
                      thesis, allowing you to progress towards success. This
                      phenomenon can be attributed to the acquisition of new
                      knowledge that occurs throughout the course of composing a
                      thesis.
                      <br />
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
                      Tailored Solutions: At Research Developers, you are not
                      provided with generic sample theses or research papers for
                      reference. Our team of subject matter specialists
                      possesses a comprehensive understanding of your project,
                      enabling them to tailor a tailored document to meet your
                      specific needs. The writer assigned to your assignment is
                      carefully selected to ensure a comprehensive understanding
                      of the material and its complexities. The project and
                      unique specifications are thoroughly deliberated over by
                      our team of writing specialists. Subsequently, a tailored
                      document is generated that adheres to the specific
                      requirements and regulations set forth by your educational
                      institution. The authors adhere to all language and
                      formatting conventions in your work. Consequently, you
                      obtain a meticulously crafted and effectively displayed
                      paper for your reference.
                      <br />
                      <br />
                    </li>
                    <li>
                      Understanding in a Variety of Subjects: The seasoned
                      professionals on our team have a wealth of understanding
                      in a variety of academic subjects. Our proficiency allows
                      us to design your proposal to the highest standards,
                      regardless of the field of study you are conducting—social
                      sciences, engineering, humanities, or sciences.
                      <br />
                      <br />
                    </li>
                    <li>
                      Customized Approach: We understand that every research
                      project is different. Our specialists collaborate together
                      with you to comprehend your research aims, approaches, and
                      ambitions in order to guarantee a unique and tailored
                      strategy that aligns with your scholarly vision.
                      <br />
                      <br />
                    </li>
                    <li>
                      Assurance of Quality: At Research Developers, we place a
                      high premium on quality. Your study proposal will adhere
                      to the strictest academic standards. Each suggestion is
                      carefully examined by us to ensure that it is clear,
                      coherent, and follows academic standards.
                      <br />
                      <br />
                    </li>
                    <li>
                      On-time Delivery: We are aware of how crucial deadlines
                      are in the academic setting. Our group is dedicated to
                      completing your research proposal on schedule so that you
                      may fulfill submission requirements and maintain your
                      Ph.D. schedule.
                      <br />
                      <br />
                    </li>
                  </div>
                </div>
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <p className="font-bold text-justify">
                    Struggling with Your Thesis? Our Ph.D thesis writing
                    services provide a significant level of assurance in the
                    quality of your thesis.
                  </p>
                </div>
                <div className="flex mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <p className="text-justify">
                    Our firm is recognized as a leading provider of PhD thesis
                    writing services in India. Our doctoral thesis writing
                    services provide a significant level of assurance in the
                    quality of your thesis. Our accurate content offers premium
                    benefits that can be anticipated. Without a question, the
                    thesis of a Research Scholar holds significant importance in
                    their academic trajectory; nonetheless, numerous students
                    have difficulties when it comes to selecting a suitable
                    topic. Fortunately, that is no longer a concern, as our
                    valued customers can take advantage of our professional
                    thesis writing services, including Journal Writing Services.
                    Our team of expert thesis paper and dissertation writers
                    forms the core of our custom thesis writing service, capable
                    of handling the intricacies of academic writing across all
                    disciplines. Moreover, we work closely with you to determine
                    the appropriate thesis format, tailoring our top-notch
                    thesis writing and editing services to your specific
                    requirements. Every client is highly valued, regardless of
                    the number of transactions they make.
                    <br />
                    The first crucial step in the research process is crafting a
                    strong thesis statement. We not only offer assistance to
                    researchers but also provide services for thesis and
                    research paper writing. Additionally, our services extend to
                    comprehensive document verification, where we thoroughly
                    examine grammar, spelling, and linguistic quality. We assist
                    students in completing their master’s theses, regardless of
                    their academic level or field of study. Our thesis examples
                    demonstrate the depth of knowledge and their unique
                    contributions to their respective fields. In a similar vein,
                    we support research students in the thesis writing arena.
                  </p>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="mx-5 mt-2 text-[#0176bc] text-4xl"></span>
                  <p className="font-bold">Best Professional Thesis Writers</p>
                  <p className="text-justify">
                    Our premium services ensure complete confidence in your
                    thesis. It’s crucial to remember that the race to launch a
                    successful career begins now, and a well-written PhD thesis
                    can propel you forward. We can provide support with every
                    aspect of your thesis, from choosing a topic to crafting a
                    comprehensive summary and completing the entire thesis or
                    specific chapters. In essence, we’re here to guide you
                    through your entire PhD research journey, offering expertise
                    from start to finish.
                  </p>
                  <br />
                  <p className="text-justify">
                    Our team of ‘Expert Content Writers’ boasts high
                    qualifications and specializes in various fields. Their
                    meticulous guidance will address your concerns and questions
                    at every stage of thesis preparation. Furthermore, they can
                    offer valuable suggestions to enhance and refine your Ph.D.
                    Thesis.
                  </p>
                  <br />

                  <p className="font-bold">Client Satisfaction</p>
                  <p className="text-justify">
                    Additionally, we work in close collaboration with you to
                    determine the desired formatting for your thesis,
                    customizing our top-notch thesis writing and editing
                    services to meet your exact specifications. Each and every
                    customer holds significant value for us, regardless of
                    whether they engage in a single transaction or multiple
                    interactions. Our custom thesis writing service is staffed
                    by proficient thesis paper and dissertation writers who
                    possess expertise across various academic domains, capable
                    of navigating the intricacies of academic writing. If you’re
                    seeking affordable “Thesis Writing Services,” Research
                    Developers is your ideal destination to effectively address
                    and overcome these challenges. We pride ourselves on
                    delivering the best theses that precisely reflect your
                    academic knowledge and understanding.
                  </p>
                  <p>
                    Our premium services ensure complete confidence in your
                    thesis. It’s crucial to remember that the race to launch a
                    successful career begins now, and a well-written PhD thesis
                    can propel you forward. We can provide support with every
                    aspect of your thesis, from choosing a topic to crafting a
                    comprehensive summary and completing the entire thesis or
                    specific chapters. In essence, we’re here to guide you
                    through your entire PhD research journey, offering expertise
                    from start to finish.
                  </p>
                  <p>
                    Our team of ‘Expert Content Writers’ boasts high
                    qualifications and specializes in various fields. Their
                    meticulous guidance will address your concerns and questions
                    at every stage of thesis preparation. Furthermore, they can
                    offer valuable suggestions to enhance and refine your Ph.D.
                    Thesis.
                  </p>
                  <p>
                    Additionally, we work in close collaboration with you to
                    determine the desired formatting for your thesis,
                    customizing our top-notch thesis writing and editing
                    services to meet your exact specifications. Each and every
                    customer holds significant value for us, regardless of
                    whether they engage in a single transaction or multiple
                    interactions. Our custom thesis writing service is staffed
                    by proficient thesis paper and dissertation writers who
                    possess expertise across various academic domains, capable
                    of navigating the intricacies of academic writing. If you’re
                    seeking affordable “Thesis Writing Services,” Research
                    Developers is your ideal destination to effectively address
                    and overcome these challenges. We pride ourselves on
                    delivering the best theses that precisely reflect your
                    academic knowledge and understanding.
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
  );
};
