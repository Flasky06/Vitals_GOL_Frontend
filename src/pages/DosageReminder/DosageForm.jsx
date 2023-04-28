import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddDosageInformation } from "../../services/Patients.js";

function DosageForm({ patientId }) {
	const [dosageName, setDosageName] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [quantity, setQuantity] = useState("");
	const [dosageTimes, setDosageTimes] = useState([]);
	const [numOfDosageTimes, setNumOfDosageTimes] = useState("");
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState({});

	const handleNumOfDosageTimesChange = (event) => {
		const numOfDosageTimes = parseInt(event.target.value);
		if (!isNaN(numOfDosageTimes)) {
			setNumOfDosageTimes(numOfDosageTimes);
			const newDosageTimes = Array(numOfDosageTimes).fill("");
			setDosageTimes(newDosageTimes);
		} else {
			setNumOfDosageTimes("");
			setDosageTimes([]);
		}
	};

	const handleDosageTimeChange = (event, index) => {
		const newDosageTimes = [...dosageTimes];
		newDosageTimes[index] = event.target.value;
		setDosageTimes(newDosageTimes);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const dosageReminderInformation = {
			userId: patientId,
			dosageName: dosageName,
			dosageTimes: dosageTimes,
			startDate: startDate,
			endDate: endDate,
			quantity: quantity,
		};
		// console.log(dosageTimes);
		// console.log(dosageName);
		// console.log(dosageReminderInformation);
		const response = await AddDosageInformation(dosageReminderInformation);
		if (response.status === 200) {
			setShowMessage(true);
			setMessage({
				color: "green",
				message: response.data.message,
			});
			setTimeout(() => {
				setShowMessage(false);
				window.location.href = "/hospital/patient-files/all";
			}, 2000);
		} else {
			setShowMessage(true);
			setMessage({
				color: "red",
				message: response.data.message,
			});
		}
		// console.log(response);
	};

	const handleDosageName = (event) => {
		event.preventDefault();
		setDosageName(event.target.value);
	};

	const handleStartDateChange = (event) => {
		event.preventDefault();
		setStartDate(event.target.value);
	};

	const handleEndDateChange = (event) => {
		event.preventDefault();
		setEndDate(event.target.value);
	};

	const handleQuantityChange = (event) => {
		event.preventDefault();
		setQuantity(event.target.value);
	};

	const dosageTimeInputs = dosageTimes.map((dosageTime, index) => (
		<div key={index} className='time-input-form-group mb-5 mr-5'>
			<label className='font-bold capitalize'>Dosage Time {index + 1}:</label>
			<input
				required
				className='dosage-reminder-time p-3'
				type='time'
				value={dosageTime}
				onChange={(event) => handleDosageTimeChange(event, index)}
			/>
		</div>
	));

	return (
		<form onSubmit={handleSubmit} className='dosage-reminder-form'>
			<div>
				{showMessage && (
					<div
						className={`bg-${message.color}-100 border border-${message.color}-400 text-${message.color}-700 px-4 py-3 rounded relative mb-4`}
					>
						{message.message}
					</div>
				)}
				<div className='dosage-reminder-form-group-main mb-3'>
					<label className='font-bold capitalize' htmlFor='d-name'>
						medicine name
					</label>
					<input
						required
						className='p-2'
						type='text'
						name=''
						id='d-name'
						value={dosageName}
						onChange={handleDosageName}
						placeholder='enter the name of the medicine'
					/>
				</div>

				{/* number of pills */}
				<div className='dosage-reminder-form-group-main mb-3'>
					<label className='font-bold capitalize' htmlFor='quantity'>
						quantity
					</label>
					<input
						required
						className='p-2'
						type='text'
						name=''
						id='quantity'
						value={quantity}
						onChange={handleQuantityChange}
						placeholder='eg 1 spoonful'
					/>
				</div>
				{/* end of number of pills */}

				{/* start date and end date */}
				<div className='dosage-reminder-form-group-main mb-3'>
					<label className='font-bold capitalize' htmlFor='start-date'>
						start date
					</label>
					<input
						required
						className='p-2'
						type='date'
						name=''
						id='start-date'
						value={startDate}
						onChange={handleStartDateChange}
						placeholder='enter the start date of this dosage'
					/>
				</div>

				<div className='dosage-reminder-form-group-main mb-3'>
					<label className='font-bold capitalize' htmlFor='end-date'>
						end date
					</label>
					<input
						required
						className='p-2'
						type='date'
						name=''
						id='end-date'
						value={endDate}
						onChange={handleEndDateChange}
						placeholder='enter the end date of this dosage'
					/>
				</div>
				{/* end of start date and end date */}
				<div className='dosage-reminder-form-group-main mb-3'>
					<label className='font-bold capitalize'>
						Number of Dosage Times:
					</label>
					<input
						required
						className='p-2'
						type='number'
						min={0}
						max={20}
						value={numOfDosageTimes}
						onChange={handleNumOfDosageTimesChange}
					/>
				</div>
			</div>
			<div className='all-time-inputs flex flex-wrap'>{dosageTimeInputs}</div>
			<div className='flex flex-col items-center mt-5'>
				<button
					type='submit'
					className='dosage-input-submit font-bold uppercase inline-block p-3'
				>
					Submit dosage information
				</button>
				<Link
					to='/hospital/patient-files/all'
					className='dosage-input-clear mt-2 font-bold uppercase inline-block p-3'
				>
					cancel
				</Link>
			</div>
		</form>
	);
}

export default DosageForm;
