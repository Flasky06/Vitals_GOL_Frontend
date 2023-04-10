import React, { useState, useEffect } from "react";
import Header from "../../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboardHeader/AdminDashboardHeader";
import PatientFile from "./PatientFile";
import { GetPatients } from "../../../services/Patients.js";

const AllPatientFiles = () => {
	const [patientFiles, setPatientFiles] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const responseData = await GetPatients();
			// console.log(responseData);
			if (responseData.status == 200) {
				setPatientFiles(responseData.data);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<Header />
			<AdminHeaderDashboard />

			<div className='patient_files_container'>
				{patientFiles != null &&
					patientFiles.map((patientFile) => (
						<PatientFile
							firstName={patientFile.firstName}
							lastName={patientFile.lastName}
							contactNumber={patientFile.phone}
							emailAddress={patientFile.email}
							dateOfBirth={patientFile.dob}
							gender={patientFile.gender}
							address={patientFile.address}
							maritalStatus={patientFile.maritalStatus}
							weight={patientFile.weight}
							height={patientFile.height}
							emergencyContactFirstName={patientFile.emergencyContact.firstName}
							emergencyContactLastName={patientFile.emergencyContact.lastName}
							emergencyContactRelationship={
								patientFile.emergencyContact.relationship
							}
							emergencyContactPhoneNumber={patientFile.emergencyContact.phone}
							takesMedication='yes'
							medicationDescription='The patient takes a daily dose of 50mg of Zoloft, a selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and other mental health conditions.'
						/>
					))}
			</div>
		</>
	);
};
export default AllPatientFiles;
