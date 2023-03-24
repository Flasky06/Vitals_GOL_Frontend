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
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2 rounded-md shadow-sm"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2 rounded-md shadow-sm"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="relationship">
          Relationship
        </label>
        <input
          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2 rounded-md shadow-sm"
          type="text"
          name="relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full p-2 rounded-md shadow-sm"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-sm">
        Submit
      </button>
    </form>
  );
}
export default EmergencyContactForm;
