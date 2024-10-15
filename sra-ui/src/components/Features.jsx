import React, { useContext } from "react";
import { motion } from "framer-motion";
import image from "../assets/security.jpg";
import discussion from "../assets/discussion.png";
import evaluate from "../assets/evaluate.png";
import target from "../assets/target.png";
import reconciliation from "../assets/reconciliation.png";
import { sraContext } from "../context/GlobalContext";

const serviceSteps = [
  {
    icon: discussion,
    headline: "Step 1: Free Initial Consultation",
    subtext:
      "We start with a no-cost consultation to understand your case and assess its feasibility for recovery.",
  },
  {
    icon: evaluate,
    headline: "Step 2: Detailed Investigation",
    subtext:
      "Our team performs a thorough investigation, gathering evidence and identifying key information needed for your claim.",
  },
  {
    icon: target,
    headline: "Step 3: Legal and Financial Strategy",
    subtext:
      "We craft a tailored legal and financial recovery strategy to maximize your chances of a successful outcome.",
  },
  {
    icon: reconciliation,
    headline: "Step 4: Resolution and Follow-Up",
    subtext:
      "Once the recovery process concludes, we ensure you’re fully supported with any follow-up actions needed.",
  },
];

const Features = () => {
  const { setSelectedPage } = useContext(sraContext);
  return (
    <section
      id="features"
      className='section id="services" className="w-full bg-[#f4f4f4]'
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("features")}
        className="sm:px-[24px] md:px-[40px] lg:px-[72px] sm:py-[32px] md:py-[72px] flex flex-col gap-y-10"
      >
        <div className="Heading flex flex-col items-center mt-[32px] text-center">
          <h1 className="sm:text-[36px] md:text-[48px] lg:text-[50px] font-bold leading-tight">
            How We Make <span className="text-red-500">Recovery Happen</span>
          </h1>
          <p className="sm:w-full md:w-[70%] text-[18px] mt-10 sm:leading-8 md:leading-10">
            Our four-step process ensures thorough, transparent, and effective
            recovery for our clients. From initial consultation to final
            resolution, we’re with you every step of the way.
          </p>
          <hr className="border-2 border-red-400 w-[70px] rounded-md mt-4" />
        </div>
        <div className="other-info py-[16px] md:flex justify-between md:gap-4">
          <div className="Card-features sm:w-full md:w-2/3 sm:flex sm:flex-col sm:gap-y-16 md:grid md:grid-cols-2 md:gap-10">
            {serviceSteps.map((serviceStep, index) => (
              <div className="flex flex-col gap-8" key={index}>
                <div className="bg-white rounded-md py-5 px-5 w-[150px] shadow-lg sm:self-center md:self-start">
                  <img src={serviceStep.icon} alt="" />
                </div>
                <div className="sm:text-center md:text-left">
                  <h3 className="text-red-400 font-bold text-[22px] mb-[8px]">
                    {serviceStep.headline}
                  </h3>
                  <p className="text-[18px] sm:leading-8 md:leading-10">
                    {serviceStep.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="sm:hidden md:flex md:justify-center md:items-center md:w-1/2">
            <img src={image} alt="image" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
