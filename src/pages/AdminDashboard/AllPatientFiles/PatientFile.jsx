import React from "react";
import { Link } from "react-router-dom";

const PatientFile = ({
  firstName,
  lastName,
  dateOfBirth,
  gender,
  contactNumber,
  emailAddress,
  address,
  maritalStatus,
  weight,
  height,
  emergencyContactFirstName,
  emergencyContactLastName,
  emergencyContactRelationship,
  emergencyContactPhoneNumber,
  takesMedication,
  medicationDescription,
}) => {
  const avartarFirstLetter = firstName[0];
  const avartarLastLetter = lastName[0];
  return (
    <div className="patient-file p-5">
      <div className="patient-file__container flex">
        <div className="patient-file__left">
          <div className="patient-file__avartar uppercase font-bold">
            {avartarFirstLetter}
            {avartarLastLetter}
          </div>
          <div>
            <h2 className="text-center font-bold capitalize">
              {firstName} {lastName}
            </h2>
          </div>
          <div>
            <p className="text-center font-bold capitalize">{contactNumber}</p>
          </div>
          <div>
            <p className="text-center font-bold">{emailAddress}</p>
          </div>
        </div>
        <div className="patient-file__right flex justify-between">
          <div>
            <h2 className="font-bold uppercase">About patient</h2>
            <div className="patient-file__info-box">
              <p>Date of birth</p> <p>{dateOfBirth}</p>
            </div>
            <div className="patient-file__info-box">
              <p>Gender</p> <p>{gender}</p>
            </div>
            <div className="patient-file__info-box">
              <p>address</p> <p>{address}</p>
            </div>
            <div className="patient-file__info-box">
              <p>Marital Status</p> <p>{maritalStatus}</p>
            </div>
            <div className="patient-file__info-box">
              <p>weight</p> <p>{weight}</p>
            </div>
            <div className="patient-file__info-box">
              <p>Height</p> <p>{height}</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold uppercase">patient emergency contact</h2>
            <div className="patient-file__info-box">
              <p>full name</p>{" "}
              <p>
                {emergencyContactFirstName} {emergencyContactLastName}
              </p>
            </div>
            <div className="patient-file__info-box">
              <p>relationship</p> <p>{emergencyContactRelationship}</p>
            </div>
            <div className="patient-file__info-box">
              <p>contact</p>
              <p>{emergencyContactPhoneNumber}</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold uppercase">patient medication history</h2>
            <div className="patient-file__info-box">
              <p>Takes medication</p> <p>{takesMedication}</p>
            </div>
            <div className="patient-file__info-box">
              <p>description</p> <p>{medicationDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="patient-file__controls flex justify-center mt-3">
        <Link className="patient-file__controls-link-outline p-3 font-bold capitalize">
          Update patient info
        </Link>
        <Link className="patient-file__controls-link-filled p-3 font-bold capitalize">
          Delete patient info
        </Link>
      </div>
    </div>
  );
};
export default PatientFile;
