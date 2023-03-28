import React, { useState } from "react";
import useForm from "../../hooks/useForm";

<<<<<<< HEAD:src/pages/HospitalLogin/HospitalLoginForm.jsx
const HospitalLoginForm = () => {
	const { values, handleChange, resetForm } = useForm({
		username: "",
		password: "",
	});

	function handleSubmit(event) {
		event.preventDefault();
		console.log(values);
		resetForm();
	}
	const [showPassword, setShowPassword] = useState(false);
=======
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
>>>>>>> main:src/pages/login/LoginForm.jsx

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

<<<<<<< HEAD:src/pages/HospitalLogin/HospitalLoginForm.jsx
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center">
			<div className="max-w-md mx-auto bg-white py-10 px-5 shadow-lg rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
					Login
				</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Username"
							name="username"
							value={values.name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-6">
						<div className="relative">
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								name="password"
								value={values.name}
								onChange={handleChange}
							/>
							<span
								className="absolute right-0 top-0 mt-3 mr-3 text-gray-500 cursor-pointer"
								onClick={handleShowPassword}
							>
								{showPassword ? "Hide" : "Show"}
							</span>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-green-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  w-full"
							type="submit"
						>
							Sign In
						</button>
					</div>
					<a
						className="inline-block align-baseline font-bold text-sm text-green-800 "
						href="#"
					>
						Forgot Password?
					</a>
				</form>
			</div>
		</div>
	);
=======
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md mx-auto bg-white py-10 px-5 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="absolute right-0 top-0 mt-3 mr-3 text-gray-500 cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            href="#"
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
>>>>>>> main:src/pages/login/LoginForm.jsx
};

export default HospitalLoginForm;
