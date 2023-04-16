import React, { useState } from "react";
import { AddNewPractitioner } from "../../services/Practitioner.js";

const NewPractitionerForm = () => {
	const newMedicalPractitionerRoles = [
		{ id: 1, label: "superuser", value: 1 },
		{ id: 2, label: "receiptionist", value: 2 },
		{ id: 3, label: "doctor", value: 3 },
		// { id: 4, label: "patient", value: 4 },
	];

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [role, setRole] = useState("");
	const [addNewPractitionerStatus, setAddNewPractitionerStatus] = useState(null);
	const [addNewPractitionerMessage, setAddNewPractitionerMessage] = useState(null);

	const handleFirstNameChange = (event) => {
		event.preventDefault();
		setFirstName(event.target.value);
	};

	const handleLastNameChange = (event) => {
		event.preventDefault();
		setLastName(event.target.value);
	};

	const handleEmailAddressChange = (event) => {
		event.preventDefault();
		setEmailAddress(event.target.value);
	};

	const handlePhoneNumberChange = (event) => {
		event.preventDefault();
		setPhoneNumber(event.target.value);
	};

	const handleRoleChange = (event) => {
		event.preventDefault();
		setRole(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const newPractitionerData = {
			firstName: firstName,
			lastName: lastName,
			email: emailAddress,
			phone: phoneNumber,
			role: role,
		};
		console.log(newPractitionerData);

		const responseData = await AddNewPractitioner(newPractitionerData);
    console.log("response data", responseData);

		setAddNewPractitionerStatus(responseData.status);
		setAddNewPractitionerMessage(responseData.data.message);

		if (responseData.status == 200) {
			window.location.href = "/hospital/patient-files/all";
		}
	};

	return (
		<div className='new-practitioner-container'>
			<h2 className='font-bold text-3xl text-center capitalize mb-3'>
				Add a new practitioner
			</h2>
			<form onSubmit={handleSubmit}>
				{addNewPractitionerStatus !== null &&
					addNewPractitionerStatus === 200 && (
						<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'>
							{addNewPractitionerMessage}
						</div>
					)}

				{addNewPractitionerStatus !== null &&
					addNewPractitionerStatus !== 200 && (
						<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'>
							{addNewPractitionerMessage}
						</div>
					)}
				<div className='new-practitoner-form-group'>
					<label htmlFor='first-name'>first name</label>
					<input
						type='text'
						name=''
						id='first-name'
						value={firstName}
						onChange={handleFirstNameChange}
						required
						placeholder='first name'
						className='p-3'
					/>
				</div>
				<div className='new-practitoner-form-group'>
					<label htmlFor='last-name'>last name</label>
					<input
						type='text'
						name=''
						value={lastName}
						onChange={handleLastNameChange}
						required
						id='last-name'
						placeholder='last name'
						className='p-3'
					/>
				</div>
				<div className='new-practitoner-form-group'>
					<label htmlFor='email'>email address</label>
					<input
						type='email'
						name=''
						id='email'
						value={emailAddress}
						onChange={handleEmailAddressChange}
						required
						placeholder='email address'
						className='p-3'
					/>
				</div>
				<div className='new-practitoner-form-group'>
					<label htmlFor='email'>email address</label>
					<input
						className='p-3'
						type='tel'
						name='phoneNumber'
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						required
						placeholder='phone number'
					/>
				</div>
				<div className='new-practitoner-form-group'>
					<label htmlFor='role'>Role</label>
					<select
						id='role'
						name=''
						className='p-3'
						value={role}
						onChange={handleRoleChange}
						required
					>
						<option value='' disabled>
							Select role
						</option>
						{newMedicalPractitionerRoles.map((role) => (
							<option key={role.id} value={role.value}>
								{role.label}
							</option>
						))}
					</select>
				</div>
				<div>
					<button
						type='submit'
						className='new-practitioner-form-submit inline-block font-bold p-3 capitalize'
					>
						submit information
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewPractitionerForm;
