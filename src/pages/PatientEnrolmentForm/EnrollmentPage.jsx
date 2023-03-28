const genderOptions = [
	{ label: "Male", value: "male" },
	{ label: "Female", value: "female" },
];

const maritalStatusOptions = [
	{ label: "Single", value: "single" },
	{ label: "Married", value: "married" },
];

function EnrolmentForm({ handleChange, values }) {
	return (
		<div className="mt-4 shadow-lg px-5 py-3">
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
						value={values.firstName}
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
						value={values.lastName}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="mt-10  flex flex-row items-center">
				<label className="block  font-medium	 mb-2 " htmlFor="date-input">
					Date of Birth:
				</label>
				<input
					className=" mt-1 block ml-4  lg:w-full p-2 rounded-md shadow-sm outline outline-1"
					type="date"
					name="dob"
					value={values.dob}
					onChange={handleChange}
				/>
			</div>
			{/*  */}
			<div className="mt-10  flex flex-row items-center	">
				<label htmlFor="gender" className="block  font-medium	 mb-2 ">
					Gender
				</label>
				<select
					id="gender"
					name="gender"
					className="mt-1 block ml-4  lg:w-full p-2 rounded-md shadow-sm outline outline-1"
					value={values.gender}
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
					type="number"
					name="contactNumber"
					id="contactNumber"
					className="mt-1  block w-full p-2 rounded-md shadow-sm outline outline-1"
					placeholder="Enter contact number"
					value={values.contactNumber}
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
					value={values.email}
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
					value={values.address}
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
					className="mt-1 block ml-4 pl-3  py-2 text-base  sm:text-sm w-full p-2 rounded-md shadow-sm outline outline-1"
					value={values.maritalStatus}
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
		</div>
	);
}

export default EnrolmentForm;
