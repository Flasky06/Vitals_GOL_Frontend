import React from "react";
import './styles.css'

const PatientSignupForm = () => {
    return(
        <>
        <div className="w-1/2 mx-auto mt-20">
            <div>
                <h2 className="text-center mb-14 font-bold capitalize text-5xl">sign up</h2>
            </div>

            <form action="" className="flex flex-col">
                <input type="text" placeholder="Full Name" className="rounded-xl fix-placeholder py-4 px-6 bg-gray-200 mb-5" />
                <input type="email" placeholder="email" className="rounded-xl fix-placeholder py-4 px-6 bg-gray-200 mb-5" />
                <input type="password" placeholder="password" className="rounded-xl fix-placeholder py-4 px-6 bg-gray-200 mb-5" />
                <span className="fix-display mt-2 mb-3">
                    <input type="checkbox" name="" id="subscribe-to-newsletter" />
                    <label htmlFor="subscribe-to-newsletter" className="ml-3">
                        I would like to receive your newsletter and other promotional information
                    </label>
                </span>
                <button className="fix-bg p-5 font-bold capitalize text-xl rounded-full text-white mb-3">
                    sign up
                </button>
                <p className="text-center">
                    Already have an account? <a href="" className="fix-color uppercase font-bold">login</a>
                </p>
            </form>
        </div>
        </>
    )
}

export default PatientSignupForm;