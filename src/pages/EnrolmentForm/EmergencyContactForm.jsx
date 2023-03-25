import { useState } from "react";

function EmergencyContactForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [relationship, setRelationship] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Do something with the form data, such as submitting it to a server
		console.log({
			firstName,
			lastName,
			relationship,
			phoneNumber,
		});
		// Reset the form after submission
		setFirstName("");
		setLastName("");
		setRelationship("");
		setPhoneNumber("");
	};

	return (
		<div className=" flex flex-col ">
			<h1 className="pt-3 pb-5"> Emergency Contact : </h1>
			<form onSubmit={handleSubmit} className=" md:mx-0  lg:mx-auto ">
				<div className="mb-4  md:flex lg:flex-col md:ml-4 lg:ml-0">
					<label className="block font-medium mb-2" htmlFor="firstName">
						First Name
					</label>
					<input
						className=" block w-full md:py md:px-1 1 lg:py-2 rounded-md shadow-sm outline outline-1"
						type="text"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
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
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
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
						value={relationship}
						onChange={(e) => setRelationship(e.target.value)}
						required
					/>
				</div>
				<div className="mb-4 md:flex lg:flex-col md:ml-4 lg:ml-0">
					<label className="block font-medium mb-2" htmlFor="phoneNumber">
						Phone Number
					</label>
					<input
						className="border-gray-300  block w-full p-2 rounded-md shadow-sm outline outline-1"
						type="tel"
						name="phoneNumber"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
				</div>
				{/* <div className=" flex justify-center my-8">
					<button className="bg-green-700  text-white font-medium px-4 py-2 rounded-md shadow-sm md:w-4/5 lg:w-full">
						Submit
					</button>
				</div> */}
			</form>
		</div>
	);
}
export default EmergencyContactForm;
