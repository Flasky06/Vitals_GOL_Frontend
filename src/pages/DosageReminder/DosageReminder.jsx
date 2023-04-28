import React from "react";
import { useParams } from "react-router-dom";
import Header from "../LandingPage/Header/Header";
import AdminHeaderDashboard from "../AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";
import DosageForm from "./DosageForm";
import "./styles.css";

const DosageReminder = () => {
	// get params from url using useParams hook from react-router-dom
	const { patientId } = useParams();
	console.log("patientId", patientId);
	return (
		<>
			<Header />
			<AdminHeaderDashboard />
			<DosageForm patientId={patientId} />
		</>
	);
};

export default DosageReminder;
