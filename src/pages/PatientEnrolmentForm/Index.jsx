import React, { useState } from "react";
import "./styles.css";
import useForm from "../../hooks/useForm";
import EmergencyContactForm from "./EmergencyContactForm";
import EnrolmentForm from "./EnrollmentPage";
import Header from "../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";
import { AddPatient } from "../../services/Patients.js";

// import PageHeader from "./PageHeader";

function EnrollmentPage() {
	const [addPatientStatus, setAddPatientStatus] = useState(null);
	const [addPatientMessage, setAddPatientMessage] = useState(null);
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

	async function handleSubmit(event) {
		event.preventDefault();
		console.log(values);

		const data = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			phoneNumber: values.phoneNumber,
			maritalStatus: values.maritalStatus,
			relationship: values.relationship,
			gender: values.gender,
			dob: values.dob,
			contactNumber: values.contactNumber,
			EmergencyContactsLastName: values.EmergencyContactsLastName,
			EmergencyContactsFirstName: values.EmergencyContactsFirstName,
			address: values.address,
		};

		const responseData = await AddPatient(data);

		setAddPatientStatus(responseData.status);
		setAddPatientMessage(responseData.data.message);

		if (responseData.status == 200) {
			console.log("response data", responseData);
			window.location.href = "/hospital/patient-files/all";
		}

		// resetForm();
	}
	return (
		<div>
			<Header />
			<AdminHeaderDashboard />
			{/* <PageHeader /> */}
			<form className='patient-enrollment-form' onSubmit={handleSubmit}>
				{addPatientStatus === 200 && (
					<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'>
						{addPatientMessage}
					</div>
				)}

				{addPatientStatus !== null && addPatientStatus !== 200 && (
					<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'>
						{addPatientMessage}
					</div>
				)}
				<div className='mt-1'>
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
				<div className='my-10 content-center flex justify-center '>
					<button
						type='submit'
						className='patient-enrollment-form-submit text-white px-2 py-4 rounded-md shadow-sm md:w-4/5 lg:w-2/5 mb-2 font-bold font-bold capitalize'
					>
						enroll
					</button>
				</div>
			</form>
		</div>
	);
}

export default EnrollmentPage;
