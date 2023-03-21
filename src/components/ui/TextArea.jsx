import React from "react";
import useForm from "./useForm";

function TExtArea() {
	const { values, handleChange, resetForm } = useForm({
		name: "",
		email: "",
		password: "",
		message: "",
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
				Email:
				<input
					type="email"
					name="email"
					value={values.email}
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
			<label>
				Message:
				<textarea
					name="message"
					value={values.message}
					onChange={handleChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}

export default TExtArea;
