import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
