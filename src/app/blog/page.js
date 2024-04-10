"use client";
import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../../assets/images/blog1.jpeg";
const Blog = () => {
  return (
    <div className="mt-5">
      <div className=" flex justify-center lg:pt-16 text-center text-4xl font-semibold">
        <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
          Latest Blog
          <div className="w-24 m-auto h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4"></div>
        </h2>
      </div>
      <div className=" flex items-center justify-center p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
          {/* {data.map((content, index) => (
            <BlogCard key={index} image={content.image} title={content.title} />
          ))} */}
          <BlogCard
            image={blog1}
            title={"Why Choose Research Developers?"}
            pathName="/blogdetails"
          />
          <BlogCard
            image={blog1}
            title={"Why we need PhD-Guidance???"}
            pathName="/blogdetails/blog1"
          />
          <BlogCard
            image={blog1}
            title={"How We Help with Topic Selection"}
            pathName="/blogdetails/blog2"
          />
          <BlogCard
            image={blog1}
            title={"Why Thesis Editing Service?"}
            pathName="/blogdetails/blog3"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Mechanical Engineering"}
            pathName="/blogdetails/blog4"
          />
          <BlogCard
            image={blog1}
            title={"Projects in MATLAB"}
            pathName="/blogdetails/blog5"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Civil Engineering"}
            pathName="/blogdetails/blog6"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Deep Learning"}
            pathName="/blogdetails/blog7"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Signal Processing"}
            pathName="/blogdetails/blog8"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Covid related research"}
            pathName="/blogdetails/blog9"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Machine Learning"}
            pathName="/blogdetails/blog10"
          />
          <BlogCard
            image={blog1}
            title={"Topics in IoT"}
            pathName="/blogdetails/blog11"
          />
          <BlogCard
            image={blog1}
            title={"Topics in Consumer Behaviour"}
            pathName="/blogdetails/blog12"
          />
          <BlogCard
            image={blog1}
            title={"Topics in English Literature"}
            pathName="/blogdetails/blog13"
          />
          <BlogCard
            image={blog1}
            title={"NLP PhD Thesis Topics"}
            pathName="/blogdetails/blog14"
          />
          <BlogCard
            image={blog1}
            title={"Projects in Hadoop"}
            pathName="/blogdetails/blog15"
          />
          <BlogCard
            image={blog1}
            title={"Wifi Network Simulation"}
            pathName="/blogdetails/blog16"
          />
          <BlogCard
            image={blog1}
            title={"WHY CHOOSE US? "}
            pathName="/blogdetails/blog17"
          />
          <BlogCard
            image={blog1}
            title={
              "WHY IS OUR RESEARCH-BASED PHD THESIS WRITING SERVICE CONSIDERED THE BEST IN INDIA?"
            }
            pathName="/blogdetails/blog18"
          />
          <BlogCard
            image={blog1}
            title={"HOW WE CREATE OUTSTANDING PHD RESEARCH PROPOSALS?"}
            pathName="/blogdetails/blog19"
          />
          <BlogCard
            image={blog1}
            title={
              "HOW TO ENHANCE YOUR RESEARCH WITH OUR PHD THESIS WRITING ASSISTANCE?"
            }
            pathName="/blogdetails/blog20"
          />
          <BlogCard
            image={blog1}
            title={
              "THE SYNERGY OF MIND AND MACHINE. GET YOUR THESIS ENHANCED BY EXPERTS."
            }
            pathName="/blogdetails/blog21"
          />
          <BlogCard
            image={blog1}
            title={"HOW TO MEET YOUR PHD GOALS WITH CONFIDENCE?"}
            pathName="/blogdetails/blog22"
          />
          <BlogCard
            image={blog1}
            title={
              "MITIGATE HIGH RESEARCH PAPER REJECTIONS WITH OUR STRATEGIC SOLUTIONS"
            }
            pathName="/blogdetails/blog23"
          />
          <BlogCard
            image={blog1}
            title={"PHD RESEARCH PAPER WRITING SERVICES & PUBLICATION SUPPORT"}
            pathName="/blogdetails/blog24"
          />
          <BlogCard
            image={blog1}
            title={
              "BENEFITS OF CHOOSING OUR SYSTEMATIC LITERATURE REVIEW SERVICE"
            }
            pathName="/blogdetails/blog25"
          />
          <BlogCard
            image={blog1}
            title={"WHY CHOOSING OUR SERVICE IS THE BEST IDEA FOR YOUR THESIS?"}
            pathName="/blogdetails/blog26"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
