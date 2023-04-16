import React from "react";
import Header from "../../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboardHeader/AdminDashboardHeader";
import PatientFile from "./PatientFile";

const AllPatientFiles = () => {
  return (
    <>
      <Header />
      <AdminHeaderDashboard />

      <div className="patient_files_container">
        <PatientFile
          firstName="Jack"
          lastName="dosey"
          contactNumber="+254 712345678"
          emailAddress="jdosey@yahoo.com"
          dateOfBirth="4th may 1998"
          gender="male"
          address="1234 Elm Street"
          maritalStatus="married"
          weight="78"
          height="2"
          emergencyContactFirstName="Jane"
          emergencyContactLastName="dosey"
          emergencyContactRelationship="wife"
          emergencyContactPhoneNumber="+254 712345678"
          takesMedication="yes"
          medicationDescription="The patient takes a daily dose of 50mg of Zoloft, a selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and other mental health conditions."
        />

        <PatientFile
          firstName="lavin"
          lastName="jane"
          contactNumber="+254 712345678"
          emailAddress="jdosey@yahoo.com"
          dateOfBirth="4th may 1998"
          gender="male"
          address="1234 Elm Street"
          maritalStatus="married"
          weight="78"
          height="2"
          emergencyContactFirstName="John"
          emergencyContactLastName="dosey"
          emergencyContactRelationship="husband"
          emergencyContactPhoneNumber="+254 712345678"
          takesMedication="yes"
          medicationDescription="The patient takes a daily dose of 50mg of Zoloft, a selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and other mental health conditions."
        />
      </div>
    </>
  );
};
export default AllPatientFiles;
