import React, { useContext } from "react";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import { sraContext } from "../context/GlobalContext";
import Forms from "./Forms";

const Hero = () => {
  const { setSelectedPage, isModal, setIsModal } = useContext(sraContext);
  return (
    <section id="home" className="w-full sm:h-full md:h-full lg:h-[94vh]">
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="relative h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-white sm:px-[24px] md:px-[40px] lg:px-[72px] py-[32px] flex sm:flex-col gap-6 w-full">
          <div className="md:w-3/5 sm:mt-10 md:mt-24 lg:mt-10">
            <h1 className="sm:text-[36px] md:text-[48px] lg:text-[50px] font-bold leading-tight">
              Reclaim What's <br />
              <span className="text-red-400">Rightfully Yours –</span>
              <br /> Recover from
              <span className="text-red-400"> Online Scams Today</span>
            </h1>
            <p className="sm:w-full md:w-[80%] text-[18px] mt-10 sm:leading-8 md:leading-10">
              Falling victim to online love scams, crypto fraud, or other
              digital frauds can be devastating. We're here to guide you through
              the process of recovering your lost money, with expert support
              every step of the way.
            </p>
            <button className="border-2 border-red-400 px-28 py-4 rounded-[50px] text-[18px] sm:mt-10 md:mt-24" onClick={() => setIsModal(!isModal)}>
              Get Started
            </button>
          </div>
          <div className="md:w-2/5 sm:mt-10 md:mt-24 lg:mt-10">
            <Forms />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
