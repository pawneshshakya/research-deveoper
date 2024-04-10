import React from "react";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image"
import logo from "../../assets/images/logo.png"
const TopNavbar = () => {
  return (
   
    <div>
      <nav className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2  text-white py-2 bg-slate-950">
       <div className="md:hidden flex items-center justify-center">
         <Image src={logo} alt="logo" className="h-8 w-24" />
       </div>
        <div className="col-span-2 md:col-span-2 md:px-20 px-2">
       <marquee behavior="scroll" direction="left-to-right">
        <Link href="mailto:info@researchdevelopers.com">
            <span className="hidden md:inline">For any query, email us at</span> <span className="hidden sm:inline"><EmailIcon /></span> info@researchdevelopers.com
          </Link>
          <Link href="tel:+91 9788888292">
            <span className="hidden md:inline"> or call us on</span> <span className="hidden sm:inline"><CallIcon /></span>  +91 9788888292
          </Link>
       </marquee> 
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;