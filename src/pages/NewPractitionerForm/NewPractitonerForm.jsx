import React, { useState } from "react";

const NewPractitionerForm = () => {
  const newMedicalPractitionerRoles = [
    { id: 1, label: "superuser", value: "superuser" },
    { id: 2, label: "receiptionist", value: "receiptionist" },
    { id: 3, label: "doctor", value: "doctor" },
    { id: 4, label: "patient", value: "patient" },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPractitionerData = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      role: role,
    };
    console.log(newPractitionerData);
  };

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

  const handleRoleChange = (event) => {
    event.preventDefault();
    setRole(event.target.value);
  };
  return (
    <div className="new-practitioner-container">
      <h2 className="font-bold text-3xl text-center capitalize mb-3">
        Add a new practitioner
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="new-practitoner-form-group">
          <label htmlFor="first-name">first name</label>
          <input
            type="text"
            name=""
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            placeholder="first name"
            className="p-3"
          />
        </div>
        <div className="new-practitoner-form-group">
          <label htmlFor="last-name">last name</label>
          <input
            type="text"
            name=""
            value={lastName}
            onChange={handleLastNameChange}
            required
            id="last-name"
            placeholder="last name"
            className="p-3"
          />
        </div>
        <div className="new-practitoner-form-group">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            name=""
            id="email"
            value={emailAddress}
            onChange={handleEmailAddressChange}
            required
            placeholder="email address"
            className="p-3"
          />
        </div>
        <div className="new-practitoner-form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name=""
            className="p-3"
            value={role}
            onChange={handleRoleChange}
            required
          >
            <option value="" disabled>
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
            type="submit"
            className="new-practitioner-form-submit inline-block font-bold p-3 capitalize"
          >
            submit information
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPractitionerForm;
