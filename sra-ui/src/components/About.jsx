import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Formss from "./Formss";
import { sraContext } from "../context/GlobalContext";

// Register the required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const About = () => {
  const { setSelectedPage } = useContext(sraContext);
  // Data for the Pie Chart
  const data = {
    labels: ["Cases Solved", "Cases with Authorities", "Total Cases"],
    datasets: [
      {
        label: "Case Statistics",
        data: [380, 50, 500],
        backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 30, // Font size for the labels
            weight: "bold", // Makes the label text bold
          },
          color: "#000", // Sets the label text color to black
        },
      },
      tooltip: {
        bodyFont: {
          size: 18,
          weight: "bold", // Bold tooltip text
        },
        bodyColor: "#000", // Black tooltip text color
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <section id="about" className="w-full">
      <motion.div
        onViewportEnter={() => setSelectedPage("about")}
        className="sm:px-[24px] md:px-[40px] lg:px-[72px] sm:py-[32px] md:py-[72px] flex flex-col gap-y-10"
      >
        <div className="flex flex-col items-center mt-[32px] text-center">
          <h2 className="sm:text-[36px] md:text-[48px] lg:text-[50px] font-bold leading-tight mb-4">
            About <span className="text-red-500">Us</span>
          </h2>
          <p className="sm:w-full md:w-[70%] text-[18px] sm:leading-8 md:leading-10">
            With over 500 cases handled, we have successfully resolved 380+
            cases, with 50+ cases still in progress under authorities.
          </p>
          <hr className="border-2 border-red-400 w-[70px] rounded-md mt-4" />
        </div>
        <div className="sm:flex sm:flex-col sm:items-center md:flex md:justify-start md:mt-10 gap-5 w-full">
          <div className="flex sm:justify-center md:justify-center py-[16px] w-1/2">
            <div className="sm:w-[350px] md:w-[500px] sm:h-[440px] md:h-[500px]">
              <Pie data={data} options={options} />
            </div>
          </div>
          <div className="">
            <Formss />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
