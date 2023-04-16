import React, { useState } from "react";
import "./styles.css";
import Header from "../../LandingPage/Header/Header";
import useForm from "../../../hooks/useForm";
import { Link } from "react-router-dom";

function Login() {
	const { values, handleChange, resetForm } = useForm({
		username: "",
		password: "",
	});

	function handleSubmit(event) {
		event.preventDefault();
		console.log(values);
		// resetForm();
	}
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<Header />
			<div className='u-center'>
				<form onSubmit={handleSubmit} className='flex flex-col'>
					<h6 className='font-bold capitalize mb-8 text-6xl'>Login here</h6>
					<div className='form-group mb-8'>
						<label className='block font-bold text-2xl mb-3' htmlFor='name'>
							Email address or Phone number
						</label>
						<input
							className='login-input block p-5 font-bold'
							id='username'
							type='text'
							placeholder='Username'
							name='username'
							value={values.username}
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
					{/* <button
            type="submit"
            className="login-submit-btn block p-3 font-bold capitalize"
          >
            Log in
          </button> */}
					<Link
						className='login-submit-btn block p-3 font-bold capitalize'
						to='/admin-landing'
					>
						Log in
					</Link>
				</form>
			</div>
		</>
	);
}

export default Login;
