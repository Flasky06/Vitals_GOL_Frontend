import React from "react";
import useForm from "../../hooks/useForm";

function Login() {
	const { values, handleChange, resetForm } = useForm({
		name: "",

		password: "",
	});

	function handleSubmit(event) {
		event.preventDefault();
		console.log(values);
		resetForm();
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={values.name}
					onChange={handleChange}
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Login;
