import React from "react";
import img from "../assets/sra-logo.png";

const Footer = () => {
  return (
    <div className="sm:px-[24px] md:px-[40px] lg:px-[72px] sm:py-[32px] md:py-[64px] bg-[#e8e8e8] flex items-center gap-5">
      <img
        src={img}
        alt="logo"
        className="sm:w-[100px] md:w-[130px]"
      />
      <p>© Copyright 2024. All Rights Reserved by Scam</p>
    </div>
  );
};

export default Footer;
