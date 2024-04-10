"use client"
import React,{useState} from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import faq from "../../data/faq"
const Faqs = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border my-5 border-gray-300 rounded-md" data-aos="fade-up">
          <div
            className={`flex justify-between items-center px-4 py-5 rounded  hover:text-white hover:bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] 
                    cursor-pointer ${
                      isOpen
                        ? "bg-gradient-to-r from-[#0176bc] via-purple-500 to-[#e82e5d] text-white"
                        : ""
                    }`}
            onClick={onClick}
          >
            <span className="font-semibold">{title}</span>
            <span className="text-xl">
              {isOpen ? (
                <b>
                  <RemoveCircleOutlineIcon />
                </b>
              ) : (
                <b>
                  <AddCircleOutlineIcon />
                </b>
              )}
            </span>
          </div>
          {isOpen && <div className="p-4">{children}</div>}
        </div>
      );
}
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);
  
    const handleAccordionClick = (index) => {
      setOpenIndex(index === openIndex ? -1 : index);
    };
    return (
      <div className="max-w-[1100px] px-4 lg:px-10 xl:px-0 mx-auto">
        <h2 className="lg:w-full  mt-8 text-4xl lg:text-md font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-[#0176bc] via-[#e82e5d] to-[#e82e5d] pb-4">
          FAQ&#39;S
          <div className="w-24 m-auto h-2 bg-gradient-to-l from-[#0176bc] via-purple-500 to-[#e82e5d] mt-4 mb-4"></div>
        </h2>
        {faq.map((value, index) => (
          <Faqs
            key={index}
            title={value.question}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          >
            <p>{value.answer}</p>
          </Faqs>
        ))}
      </div>
    );
  };
  
export default Faq
