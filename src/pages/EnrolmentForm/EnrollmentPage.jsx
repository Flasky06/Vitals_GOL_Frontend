import { useState } from "react";

const genderOptions = [
	{ label: "Male", value: "male" },
	{ label: "Female", value: "female" },
];

const maritalStatusOptions = [
	{ label: "Single", value: "single" },
	{ label: "Married", value: "married" },
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
	{ label: "January", value: "01" },
	{ label: "February", value: "02" },
	{ label: "March", value: "03" },
	{ label: "April", value: "04" },
	{ label: "May", value: "05" },
	{ label: "June", value: "06" },
	{ label: "July", value: "07" },
	{ label: "August", value: "08" },
	{ label: "September", value: "09" },
	{ label: "October", value: "10" },
	{ label: "November", value: "11" },
	{ label: "December", value: "12" },
];
const years = Array.from({ length: 100 }, (_, i) => 2023 - i);

function EnrolmentForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		contactNumber: "",
		email: "",
		address: "",
		maritalStatus: "",
		dob: {
			day: "",
			month: "",
			year: "",
		},
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleDateChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			dob: {
				...prevFormData.dob,
				[name]: value,
			},
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<div className="mt-4 ">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-row  items-center	">
					<label htmlFor="name" className="block font-medium	 mb-2">
						Name
					</label>
					<div className="w-2/5 mx-6 flex flex-col items-center">
						<input
							type="text"
							name="firstName"
							id="firstName"
							placeholder="Enter first name"
							className="mt-1 block w-full p-1 rounded-md shadow-sm outline outline-1  "
							value={formData.firstName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className=" w-2/5 ml-2 flex flex-col items-center">
						<input
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Enter last name "
							className="mt-1 block w-full p-1 rounded-md shadow-sm outline outline-1"
							value={formData.lastName}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="mt-10  flex  ">
					<label htmlFor="dob" className="block  font-medium	 mb-2 ">
						Date of Birth
					</label>
					<div className="grid grid-cols-3 gap-2 ml-4">
						<div>
							<label htmlFor="dob-day" className="sr-only">
								Day
							</label>
							<select
								id="dob-day"
								name="day"
								className="mt-1 block w-full pl-3 pr-10 py-2 text-base  focus:outline-none sm:text-sm rounded-md"
								value={formData.dob.day}
								onChange={handleDateChange}
								required
							>
								<option value="">Day</option>
								{days.map((day) => (
									<option key={day} value={day}>
										{day}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="dob-month" className="sr-only">
								Month
							</label>
							<select
								id="dob-month"
								name="month"
								className="mt-1 block  pl-3 pr-10 py-2 text-base  focus:outline-none  sm:text-sm rounded-md "
								value={formData.dob.month}
								onChange={handleDateChange}
								required
							>
								<option value="">Month</option>
								{months.map((month) => (
									<option key={month.value} value={month.value}>
										{month.label}
									</option>
								))}
							</select>
						</div>
						<div>
							<label htmlFor="dob-year" className="sr-only">
								Year
							</label>
							<select
								id="dob-year"
								name="year"
								className="mt-1 block w-full pl-3 pr-10 py-2 text-base  focus:outline-none sm:text-sm rounded-md"
								value={formData.dob.year}
								onChange={handleDateChange}
								required
							>
								<option value="">Year</option>
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				<div className="mt-10  flex flex-row items-center	">
					<label htmlFor="gender" className="block  font-medium	 mb-2 ">
						Gender
					</label>
					<select
						id="gender"
						name="gender"
						className="mt-1 block ml-4  w-full p-2 rounded-md shadow-sm outline outline-1"
						value={formData.gender}
						onChange={handleChange}
						required
					>
						<option value="">Select gender</option>
						{genderOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>

				<div className="mt-10 flex flex-row items-center">
					<label htmlFor="contactNumber" className="block  font-medium	 mb-2">
						Contact Number
					</label>
					<input
						type="tel"
						name="contactNumber"
						id="contactNumber"
						className="mt-1  block w-full p-2 rounded-md shadow-sm outline outline-1"
						placeholder="Enter contact number"
						value={formData.contactNumber}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mt-10 flex flex-row items-center ">
					<label htmlFor="email" className="block  font-medium	 mb-2">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="mt-1 block w-full p-2 rounded-md shadow-sm outline outline-1"
						placeholder="Enter email address"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mt-10 flex flex-row items-center">
					<label htmlFor="address" className="block  font-medium	 mb-2">
						Address
					</label>
					<input
						id="address"
						name="address"
						rows="3"
						className="mt-1 block w-full p-2 rounded-md shadow-sm outline outline-1 ml-4"
						placeholder="Enter address"
						value={formData.address}
						onChange={handleChange}
						required
					></input>
				</div>

				<div className="mt-10 flex flex-row items-center">
					<label htmlFor="maritalStatus" className="block  font-medium mb-2">
						Marital Status
					</label>
					<select
						id="maritalStatus"
						name="maritalStatus"
						className="mt-1 block ml-4 pl-3  py-2 text-base  sm:text-sm   w-full p-2 rounded-md shadow-sm outline outline-1"
						value={formData.maritalStatus}
						onChange={handleChange}
						required
					>
						<option value="">Select marital status</option>
						{maritalStatusOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<div className="my-10 content-center flex justify-center">
					<button
						type="submit"
						className="bg-green-700  text-white font-medium px-4 py-2 rounded-md shadow-sm w-4/5"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default EnrolmentForm;
