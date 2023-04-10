import axios from "axios";

export const login = async ({ identity, password }) => {
	const Base_URL = "http://localhost:3001";
	const path = "/login";
	const loginUrl = `${Base_URL}${path}`;

	console.log("loginUrl", loginUrl);
	console.log("identity", identity, "password", password);

	try {
		const response = await axios.post(loginUrl, {
			identity: identity,
			password: password,
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
