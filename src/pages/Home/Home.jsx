import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import LowerSection from "../../components/LowerSection/LowerSection";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <LowerSection />
    </div>
  );
};

export default Home;
