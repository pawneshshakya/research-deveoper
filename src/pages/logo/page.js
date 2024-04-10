import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
const Logo = () => {
  return (
    <div>
      <div className="absolute hidden md:inline top-18 md:top-20 left-5 z-30">
        <Link href="/">
          <Image src={logo} alt="logo" className="drop-shadow-lg w-24 md:w-36" />
        </Link>
      </div>
    </div>
  );
};

export default Logo;

