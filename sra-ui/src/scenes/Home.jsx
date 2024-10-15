import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Features from "../components/Features";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Features />
      <About />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
