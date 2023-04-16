import axios from "axios";
import { API_URL } from "../environments";

export const AddPatient = async (data) => {
	const Base_URL = API_URL;
	const path = "/add-patient";
	const addPatientUrl = `${Base_URL}${path}`;

	console.log("addPatientUrl", addPatientUrl);
	// console.log("form data", data);

	try {
		const response = await axios.post(addPatientUrl, data, {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
			},
		});

		// console.log("responseData", response.status);

		return {
			status: response.status,
			data: response.data,
		};
	} catch (error) {
		console.log("error", error);
		return {
			status: error.response.status,
			data: error.response.data,
		};
	}
};

export const GetPatients = async () => {
	const Base_URL = API_URL;
	const path = "/get-patients";
	const getPatientsUrl = `${Base_URL}${path}`;

	console.log("getPatientsUrl", getPatientsUrl);

	try {
		const response = await axios.get(getPatientsUrl, {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
			},
		});

		// console.log("responseData", response.data.patients);

		return {
			status: response.status,
			data: response.data.patients,
		};
	} catch (error) {
		console.log("error", error);
		return {
			status: error.response.status,
			data: error.response.data,
		};
	}
};
