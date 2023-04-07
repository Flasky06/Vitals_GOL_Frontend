import InputGuide from "./InputGuide";
import CustomLabel from "./CustomLabel";

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
    <div>
      {/* full name input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="name" text="Name" />
        <div className="flex justify-between">
          <div className="relative u-fix-width-PEF">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              className="patient-enrollment-input font-bold block mr-2 w-full p-3 outline outline-2"
              value={values.firstName}
              onChange={handleChange}
              required
            />
            <InputGuide message="first name" />
          </div>
          <div className="relative u-fix-width-PEF">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name "
              className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
              value={values.lastName}
              onChange={handleChange}
              required
            />
            <InputGuide message="last name" />
          </div>
        </div>
      </div>
      {/* end of full name input */}

      {/* date of birth input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="dob" text="date of birth" />
        <input
          id="dob"
          className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
        />
      </div>
      {/*  end of date of birth input */}

      {/* gender input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="gender" text="gender" />
        <select
          id="gender"
          name="gender"
          className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
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
      {/* end of gender input */}

      {/* contact number input  */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="contactNumber" text="contact number" />
        <div className="relative">
          <input
            type="number"
            name="contactNumber"
            id="contactNumber"
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
            placeholder="Enter contact number"
            value={values.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      {/* end of contact number input  */}

      {/* email address input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="email" text="email address" />
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
            placeholder="Enter email address"
            value={values.email}
            onChange={handleChange}
            required
          />
          <InputGuide message="example@gmail.com" />
        </div>
      </div>
      {/* end of email address input */}

      {/* address input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="address" text="address" />
        <div className="relative">
          <input
            id="address"
            name="address"
            rows="3"
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
            placeholder="Enter address"
            value={values.address}
            onChange={handleChange}
            required
          />
          <InputGuide message="street address" />
        </div>
      </div>
      {/* end of address input */}

      {/* marital status input */}
      <div className="patient-enrollment-form-group flex items-center mb-12">
        <CustomLabel htmlFor="maritalStatuts" text="marital status" />
        <div className="relative">
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="patient-enrollment-input font-bold block w-full p-3 outline outline-2"
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
      {/* end of marital status input */}
    </div>
  );
}

export default EnrolmentForm;
