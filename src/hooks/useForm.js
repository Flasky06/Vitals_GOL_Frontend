import { useState } from "react";

function useForm(initialValues) {
	const [values, setValues] = useState(initialValues);

	function handleChange(event) {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}
	const handleDateChange = (event) => {
		const { name, value } = event.target;
		setValues((prevFormData) => ({
			...prevFormData,
			dob: {
				...prevFormData.dob,
				[name]: value,
			},
		}));
	};

	function resetForm() {
		setValues(initialValues);
	}

	return { values, handleChange, handleDateChange, resetForm };
}

export default useForm;
