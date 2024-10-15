import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { sraContext } from "../context/GlobalContext";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const {setSelectedPage} = useContext(sraContext)

  const faqs = [
    {
      question: "What is the process for recovering funds?",
      answer:
        "Our team reviews your case, gathers necessary details, and assigns an investigator to guide you through each recovery step.",
    },
    {
      question: "Is there an upfront fee for investigation?",
      answer:
        "Yes, we require a $1000 upfront fee to initiate the investigation and cover initial processing.",
    },
    {
      question: "How long does it take to recover funds?",
      answer:
        "The duration varies per case but typically takes 4–8 weeks, depending on the complexity and international factors involved.",
    },
    {
      question: "Can you help with crypto fraud recovery?",
      answer:
        "Yes, we specialize in various online fraud cases, including crypto fraud. We have experts familiar with blockchain technology to assist.",
    },
    {
      question: "Is my personal information kept confidential?",
      answer:
        "Absolutely. Your privacy is our priority, and we ensure that all information is handled securely and confidentially.",
    },
    {
      question: "What happens if the case isn’t successful?",
      answer:
        "In rare instances, if we are unable to recover funds, we will work with you to explore alternative solutions or refer you to other resources.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#f4f4f4] w-full sm:px-[24px] md:px-[40px] lg:px-[72px] sm:py-[32px] md:py-[72px]"
    >
      <motion.div onViewportEnter={() => setSelectedPage("faq")}>
        <h2 className="sm:text-[36px] md:text-[48px] lg:text-[50px] mt-[32px] font-bold leading-tight text-center mb-4">
          Questions and <span className="text-red-500">Answers</span>
        </h2>
        <p className="w-full text-[18px] mt-10 sm:leading-8 md:leading-10 mb-8 text-center">
          Frequently asked questions about our services and processes.
        </p>

        <div className="w-full text-[24px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left py-8 px-2 font-semibold text-gray-900 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="text-red-500 text-[28px]">{activeIndex === index ? "-" : "+"}</span>
              </button>

              {/* Answer with framer-motion transition */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-2 pb-5 text-gray-500">{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
