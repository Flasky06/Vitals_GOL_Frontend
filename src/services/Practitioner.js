import axios from "axios";

export const AddNewPractitioner = async (data) => {
	const Base_URL = "http://localhost:3001";
	const path = "/super-add-user";
	const superAddUserUrl = `${Base_URL}${path}`;

	// console.log("superAddUserUrl", superAddUserUrl);
	// console.log("form data", data);

	try {
		const response = await axios.post(superAddUserUrl, data, {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("accessToken"),
			},
		});

		// console.log("responseData", response);

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

// export const GetPatients = async () => {
// 	const Base_URL = "http://localhost:3001";
// 	const path = "/get-patients";
// 	const getPatientsUrl = `${Base_URL}${path}`;

// 	console.log("getPatientsUrl", getPatientsUrl);

// 	try {
// 		const response = await axios.get(getPatientsUrl, {
// 			headers: {
// 				Authorization: "Bearer " + localStorage.getItem("accessToken"),
// 			},
// 		});

// 		// console.log("responseData", response.data.patients);

// 		return {
// 			status: response.status,
// 			data: response.data.patients,
// 		};
// 	} catch (error) {
// 		console.log("error", error);
// 		return {
// 			status: error.response.status,
// 			data: error.response.data,
// 		};
// 	}
// };
