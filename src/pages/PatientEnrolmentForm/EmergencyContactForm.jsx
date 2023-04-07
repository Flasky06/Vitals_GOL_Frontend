// import useForm from "../../hooks/useForm";
import InputGuide from "./InputGuide";
import CustomLabel from "./CustomLabel";

function EmergencyContactForm({ handleChange, handleSubmit, values }) {
  return (
    <div>
      <hr />
      <h1 className="pt-3 pb-5"> Emergency Contact : </h1>
      {/* emergency full name contact info */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="firstName" text="first name" />
        <div className="flex justify-between">
          <div className="relative u-fix-width-PEF">
            <input
              id="firstName"
              className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
              type="text"
              placeholder="Enter first name"
              name="EmergencyContactsFirstName"
              value={values.EmergencyContactsFirstName}
              onChange={handleChange}
              required
            />
            <InputGuide message="emergency contact first name" />
          </div>
          <div className="relative u-fix-width-PEF">
            <input
              className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
              type="text"
              placeholder="Enter last name"
              name="EmergencyContactsLastName"
              value={values.EmergencyContactsLastName}
              onChange={handleChange}
              required
            />
            <InputGuide message="emergency contact last name" />
          </div>
        </div>
      </div>
      {/* end of emergency contact full name info */}

      {/* emergency contact relationship input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel id="relationship" text="relationship" />
        <div className="relative">
          <input
            id="relationship"
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
            type="text"
            name="relationship"
            placeholder="Enter Relationship "
            value={values.relationship}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* end of emergency contact relationship */}

      {/* emergency contact phone number */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="phoneNumber" text="phone number" />
        <div className="relative">
          <input
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
            type="number"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={values.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {/* end of emergency contact phone number */}
      <hr />
    </div>
  );
}
export default EmergencyContactForm;
