import React from "react";
import "./styles.css";
import Header from "../../LandingPage/Header/Header";
import useForm from "../../../hooks/useForm";

function Login() {
  const { values, handleChange, resetForm } = useForm({
    userId: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
    resetForm();
  }

  return (
    <>
      <Header />
      <div className="u-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h6 className="font-bold capitalize mb-8 text-6xl">
            Login to continue
          </h6>
          <div className="form-group mb-8">
            <label className="block font-bold text-2xl mb-3" htmlFor="name">
              Email address or Phone number
            </label>
            <input
              className="login-input block p-5 font-bold"
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your phone number or email address"
            />
          </div>
          <div className="form-group mb-8">
            <label htmlFor="password" className="block font-bold text-2xl mb-3">
              Password:
            </label>
            <input
              className="login-input block p-5 font-bold"
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="login-submit-btn block p-3 font-bold capitalize"
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
