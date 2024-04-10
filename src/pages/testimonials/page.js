import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Male from "../../assets/testimonials/male.png";
import Female from "../../assets/testimonials/female.jpeg";

const Testimonial = () => {
  const data = [
    {
      img: Male,
      heading: "Dr. Abhinandan",
      description:
        "Research Developers provided exceptional support throughout my thesis writing process. Their team of experts guided me at every step, from formulating research questions to conducting thorough data analysis. The quality of their work exceeded my expectations, and I highly recommend their services to anyone in need of academic support ",
    },
    {
      img: Male,
      heading: "Rinku Singh",
      description:
        "I cannot thank Research Developers enough for their professionalism and expertise in data analysis. They helped me make sense of complex data sets and provided insightful interpretations that significantly strengthened my research findings. Their dedication to delivering high-quality results is truly commendable. ",
    },
    {
      img: Female,
      heading: "Rosy",
      description:
        "Research Developers has been instrumental in helping me implement complex MATLAB algorithms for my research project. Their team's expertise and dedication to understanding my needs were evident throughout the process. I am extremely satisfied with the quality of their work and the level of professionalism they exhibited. Highly recommended!",
    },
    {
      img: Female,
      heading: "Shakshi",
      description:
        "I had a fantastic experience collaborating with Research Developers for Python implementation. Their team demonstrated exceptional technical proficiency and a strong commitment to customer satisfaction. They provided timely updates, addressed all of my concerns, and delivered a high-quality Python solution that met all of my requirements. I am extremely satisfied with the outcome and would gladly work with Research Developers again in the future.",
    },
    {
      img: Male,
      heading: "Dr. Ron",
      description:
        "Choosing Research Developers for my thesis writing was one of the best decisions I made during my academic journey. Their team not only helped me structure my ideas effectively but also ensured that my thesis adhered to the highest standards of academic writing. I am grateful for their timely assistance and would undoubtedly seek their services again in the future.",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container mt-5 mx-auto md:px-6 relative z-[-50] lg:pb-6 lg:pt-6">
      <section className="text-center">
        <h2 className="lg:w-full text-4xl lg:text-md font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
          Testimonials
          <div className="w-32 m-auto h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-4"></div>
        </h2>
        <Slider ref={slider} {...settings}>
          {data.map((content, index) => (
            <TestimonialCard
              key={index}
              img={content.img}
              heading={content.heading}
              description={
                content.description.length > 240
                  ? content.description.substr(0, 240) + "..."
                  : content.description
              }
            />
          ))}
        </Slider>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12"></div>
      </section>
    </div>
  );
};

export default Testimonial;
