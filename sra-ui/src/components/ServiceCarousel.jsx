import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules'

import { FaSearch, FaUserShield, FaBalanceScale } from "react-icons/fa";

const ServiceCarousel = () => {
  const services = [
    {
      icon: (
        <FaUserShield className="text-red-600 w-14 h-14 transition-colors duration-500 group-hover:text-white" />
      ),
      title: "Personalized Case Investigation",
      description:
        "Our experts analyze your case in-depth, gathering evidence to support a strong recovery strategy.",
    },
    {
      icon: (
        <FaSearch className="text-red-600 w-14 h-14 transition-colors duration-500 group-hover:text-white" />
      ),
      title: "Data & Evidence Collection",
      description:
        "We collect, organize, and verify critical information, ensuring every detail supports your claim.",
    },
    {
      icon: (
        <FaBalanceScale className="text-red-600 w-14 h-14 transition-colors duration-500 group-hover:text-white" />
      ),
      title: "Legal & Financial Guidance",
      description:
        "We guide you through the legal and financial recovery process, offering support at each step.",
    },
  ];

  return (
    <div className="service-carousel text-center p-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="service-card group bg-gray-100 p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:bg-red-400 hover:scale-105 hover:shadow-xl w-full max-w-sm">
              <div className="icon mb-4 text-4xl">{service.icon}</div>
              <h3 className="sm:text-[24px] md:text-[26px] font-semibold mb-2 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[18px] group-hover:text-gray-200">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
