import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import Pic1 from "../../assets/images/banner1.jpg";
import Pic2 from "../../assets/images/banner.jpg";
import Pic3 from "../../assets/images/banner1.jpg";
const Banner = () => {
  const slides = [Pic1, Pic2, Pic3];
  return (
    <div className="w-full mx-auto">
      <Carousel slides={slides} />
    </div>
  );
};

export default Banner;
