// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const BlogCard = ({ image, title, pathName }) => {
//   return (
//     <div className="relative">
//       <div className="shadow rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
//         <div className="sm:h-96 sm:w-72 ">
//           <Image
//             className="sm:h-full sm:w-full object-cover transition-transform duration-500 .group-hover:scale-75"
//             src={image}
//             alt=""
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#0176bc]/70 group-hover:via-purple-500 group-hover:to-[#e82e5d]/70"></div>
//         <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
//           <p className="mb-3 text-sm sm:text-lg ita  lic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//             {title}
//           </p>
//           <Link href={`${pathName}`}>
//             <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-[10px] sm:text-sm capitalize text-white shadow shadow-blue">
//               See More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ image, title, pathName }) => {
  return (
    <div className="relative ">
      <div className="shadow rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        <div className="h-[220px] sm:h-96 sm:w-72 ">
          <Image
            className="sm:h-full sm:w-full object-cover h-[220px]"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0176bc]/70 via-purple-500 to-[#e82e5d]/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center">
          <p className="mb-3 text-[12px] sm:text-lg italic text-white transition-opacity duration-300 opacity-100">
            {title}
          </p>
          <Link href={`${pathName}`}>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-[10px] sm:text-sm capitalize text-white shadow shadow-blue">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
