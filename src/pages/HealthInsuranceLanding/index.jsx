import React from "react";
import Hero from "./Hero/Hero";
import Header from "../LandingPage/Header/Header";
import HealthInsuranceBenefits from "./HealthInsuranceBenefits/HealthInsuranceBenefits";
import HealthInsuranceFirms from "./HealthInsuranceFirms/HealthInsuranceFirms";
import "./styles.css";

const HealthInsuranceLanding = () => {
  return (
    <>
      <Header />
      <Hero />
      <HealthInsuranceBenefits />
      <HealthInsuranceFirms />
    </>
  );
};
export default HealthInsuranceLanding;
