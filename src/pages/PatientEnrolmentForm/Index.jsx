import React from "react";
import "./styles.css";
import useForm from "../../hooks/useForm";
import EmergencyContactForm from "./EmergencyContactForm";
import EnrolmentForm from "./EnrollmentPage";
import Header from "../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";

// import PageHeader from "./PageHeader";

function EnrollmentPage() {
  const { values, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    gender: "",
    contactNumber: "",
    email: "",
    address: "",
    maritalStatus: "",
    dob: "",
    EmergencyContactsFirstName: "",
    EmergencyContactsLastName: "",
    relationship: "",
    phoneNumber: "",
	weight: 0,
	height: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
    resetForm();
  }
  return (
    <div>
      <Header />
      <AdminHeaderDashboard />
      {/* <PageHeader /> */}
      <form className="patient-enrollment-form" onSubmit={handleSubmit}>
        <div className="mt-1">
          <EnrolmentForm
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <EmergencyContactForm
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
        <div className="my-10 content-center flex justify-center ">
          <button
            type="submit"
            className="patient-enrollment-form-submit text-white px-2 py-4 rounded-md shadow-sm md:w-4/5 lg:w-2/5 mb-2 font-bold font-bold capitalize"
          >
            enroll
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentPage;
