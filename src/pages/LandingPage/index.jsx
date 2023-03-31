import React from "react";
import Header from "./Header/Header";
import HomeSection from "./HomeSection/HomeSection";
import About from "./About/About";
import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <About />
    </>
  );
};
export default LandingPage;
