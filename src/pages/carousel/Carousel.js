"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setAutoSlideEnabled(false);
    }
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (autoSlideEnabled) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => clearInterval(intervalId);
    }
  });
  return (
    <div className="overflow-hidden relative h-[100%] z-20">
      <div
        className="flex transition ease-out duration-[1000ms]"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        onMouseEnter={() => setAutoSlideEnabled(false)}
        onMouseLeave={() => setAutoSlideEnabled(true)}
      >
        {slides.map((s, index) => (
          <Image key={index} src={s} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
