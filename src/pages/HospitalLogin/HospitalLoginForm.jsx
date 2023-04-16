import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { login } from "../../services/Auth.js";

const HospitalLoginForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [loginStatus, setLoginStatus] = useState(null);
	const [loginMessage, setLoginMessage] = useState(null);

	const { values, handleChange, resetForm } = useForm({
		identity: "",
		password: "",
	});

	async function handleSubmit(event) {
		event.preventDefault();
		// console.log(values);
		const responseData = await login({
			identity: values.identity,
			password: values.password,
		});

		setLoginStatus(responseData.status);
		setLoginMessage(responseData.data.message);

		if (responseData.status == 200) {
			// console.log("message", responseData.data.message);
			localStorage.setItem("accessToken", responseData.data.accessToken);
			localStorage.setItem("refreshToken", responseData.data.refreshToken);
			localStorage.setItem("user", JSON.stringify(responseData.data.user));

			if (
				responseData.data.user.role != "superuser" &&
				responseData.data.user.role != "patient"
			) {
				window.location.href = "/admin-landing";
			} else if (responseData.data.user.role == "patient") {
				window.location.href = "/patient-landing";
			} else if (responseData.data.user.role == "superuser") {
				// window.location.href = "/superuser-landing";
				window.location.href = "/admin-landing";
			}
		} else {
			console.log("Login Failed");
		}
		// resetForm();
	}

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='min-h-screen bg-gray-100 flex flex-col justify-center'>
			<div className='max-w-md mx-auto bg-white py-10 px-5 shadow-lg rounded-lg'>
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<h6 className='font-bold capitalize mb-8 text-6xl'>Login</h6>
					{loginStatus === 200 && (
						<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'>
							{loginMessage}
						</div>
					)}

					{loginStatus !== null && loginStatus !== 200 && (
						<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'>
							{loginMessage}
						</div>
					)}
					<div className='form-group mb-8'>
						<label className='block font-bold text-2xl mb-3' htmlFor='name'>
							Email Address or Phone Number
						</label>
						<input
							className='login-input block p-5 font-bold'
							id='identity'
							type='text'
							placeholder='Phone or Email'
							name='identity'
							value={values.identity}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-6'>
						<label className='block font-bold text-2xl mb-3' htmlFor='name'>
							Password
						</label>
						<div className='relative'>
							<input
								className='login-input block p-5 font-bold'
								id='password'
								type={showPassword ? "text" : "password"}
								placeholder='Password'
								name='password'
								value={values.name}
								onChange={handleChange}
							/>
							<span
								className='absolute right-0 top-2 mt-3 mr-3 text-gray-500 cursor-pointer'
								onClick={handleShowPassword}
							>
								{showPassword ? "Hide" : "Show"}
							</span>
						</div>
					</div>
					<div className='flex items-center justify-between'>
						<button
							className='login-submit-btn block text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4'
							type='submit'
						>
							Sign In
						</button>
					</div>
					<a
						className='login-text-btn text-md inline-block align-baseline font-bold'
						href='#'
					>
						Forgot Password?
					</a>
				</form>
			</div>
		</div>
	);
};

export default HospitalLoginForm;
