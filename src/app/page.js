"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import Banner from "@/pages/carousel/page";
import Navbar from "@/pages/header/Navbar";
import Blog from "./blog/page";
import Content from "@/pages/content/page";
import Faq from "@/pages/faqs/page";
import Enquiry from "@/pages/enquiry/page";
import AboutUs from "@/pages/about/page";
import Testimonial from "@/pages/testimonials/page";
import ServiceIconCard from "@/pages/serviceicon/page";
import bottomImage from "../assets/images/section.jpeg";
import Contact from "@/pages/contact/page";
const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Enquiry />
      <AboutUs />
      <Image
        src={bottomImage}
        alt="bootom-image"
        className="w-full mt-14"
        data-aos="zoom-in"
      />
      <ServiceIconCard />
      <Blog />
      <Content />
      <Testimonial />
      <Faq />
      <Contact />
    </div>
  );
};
export default Home;
