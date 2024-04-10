import React from 'react'
import Image from 'next/image'
import Star from '../star/Star'
import HalfStar from '../star/HalfStar'
const TestimonialCard = ({ img, heading, description }) => {
  return (
    <div>
       <div className="mb-6 md:mb-0 p-10 bg-white m-4 shadow-xl ">
        <div className="mb-6 flex justify-center ">
          <Image
            src={img}
            className="w-32 rounded-full shadow-lg"
            alt="testimonial"
          />
        </div>
        <h5 className="mb-2 text-lg font-bold">{heading}</h5>
        <p className="mb-4">
          {description}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="inline-block w-6 "
          >
            <path
              fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
            />
          </svg>
        </p>
        <ul className="mb-0 flex justify-center">
          <li>
           <Star />
          </li>
          <li>
           <Star />
          </li>
          <li>
           <Star />
          </li><li>
           <Star />
          </li>
          <li>
            <HalfStar />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TestimonialCard
