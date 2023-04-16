import React from "react";
import Header from "../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";
import DosageForm from "./DosageForm";
import "./styles.css";

const DosageReminder = () => {
  return (
    <>
      <Header />
      <AdminHeaderDashboard />

      <DosageForm />
    </>
  );
};

export default DosageReminder;
