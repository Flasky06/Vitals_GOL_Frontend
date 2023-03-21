import React from "react";
import useForm from "./useForm";

function TextField() {
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
				Message:
				<textarea
					name="message"
					value={values.message}
					onChange={handleChange}
				/>
			</label>
		</form>
	);
}

export default TextField;
