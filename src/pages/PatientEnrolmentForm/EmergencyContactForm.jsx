import useForm from "../../hooks/useForm";

function EmergencyContactForm({ handleChange, handleSubmit, values }) {
	return (
		<div className=" flex flex-col  shadow-lg px-4 py-2">
			<h1 className="pt-3 pb-5"> Emergency Contact : </h1>

			<div className="mb-4  md:flex lg:flex-col md:ml-4 lg:ml-0">
				<label className="block font-medium mb-2" htmlFor="firstName">
					First Name
				</label>
				<input
					className=" block w-full md:py md:px-1 1 lg:py-2 rounded-md shadow-sm outline outline-1"
					type="text"
					placeholder="Enter first name"
					name="EmergencyContactsFirstName"
					value={values.EmergencyContactsFirstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-4 md:flex lg:flex-col md:ml-4 lg:ml-0">
				<label className="block font-medium mb-2" htmlFor="lastName">
					Last Name
				</label>
				<input
					className="border-gray-300  block w-full md:py md:px-1  lg:py-2 rounded-md shadow-sm outline outline-1"
					type="text"
					placeholder="Enter last name"
					name="EmergencyContactsLastName"
					value={values.EmergencyContactsLastName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mb-4 md:flex lg:flex-col ">
				<label className="block font-medium mb-2" htmlFor="relationship">
					Relationship
				</label>
				<input
					className=" block w-full md:py-1 md:px-1 lg:py-2 rounded-md shadow-sm outline outline-1 md:ml-4 lg:ml-0 "
					type="text"
					name="relationship"
					placeholder="Enter Relationship "
					value={values.relationship}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-4 md:flex lg:flex-col md:ml-4 lg:ml-0">
				<label className="block font-medium mb-2" htmlFor="phoneNumber">
					Phone Number
				</label>
				<input
					className="border-gray-300  block w-full p-2 rounded-md shadow-sm outline outline-1"
					type="number"
					name="phoneNumber"
					placeholder="Enter phone number"
					value={values.phoneNumber}
					onChange={handleChange}
					required
				/>
			</div>
		</div>
	);
}
export default EmergencyContactForm;
