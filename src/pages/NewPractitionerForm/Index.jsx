import React from "react";
import Header from "../LandingPage/Header/Header";
import AdminDashboardHeader from "../AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";
import NewPractitionerForm from "./NewPractitonerForm";
import "./styles.css";

const NewPractitioner = () => {
  return (
    <>
      <Header />
      <AdminDashboardHeader />
      <NewPractitionerForm />
    </>
  );
};

export default NewPractitioner;
