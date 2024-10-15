import React, { useContext } from "react";
import { motion } from "framer-motion";
import { sraContext } from "../context/GlobalContext";
import ServiceCarousel from "./ServiceCarousel";

const Service = () => {
  const { setSelectedPage } = useContext(sraContext);
  return (
    <section id="services" className="w-full">
      <motion.div
        onViewportEnter={() => setSelectedPage("services")}
        className="sm:px-[24px] md:px-[40px] lg:px-[72px] sm:py-[32px] md:py-[72px] flex flex-col gap-y-10"
      >
        <div className="flex flex-col items-center mt-[32px] text-center">
          <h1 className="sm:text-[36px] md:text-[48px] lg:text-[50px] font-bold leading-tight">
            Comprehensive Support for{" "}
            <span className="text-red-500">Fraud Recovery</span>
          </h1>
          <p className="sm:w-full md:w-[70%] text-[18px] mt-10 sm:leading-8 md:leading-10">
            Our team specializes in helping victims recover their losses from
            online fraud, with dedicated services tailored to meet your specific
            needs. Explore what we offer and take the first step toward
            reclaiming what's yours.
          </p>
          <hr className="border-2 border-red-400 w-[70px] rounded-md mt-4" />
        </div>
        <div className="py-[16px]">
          <ServiceCarousel />
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
