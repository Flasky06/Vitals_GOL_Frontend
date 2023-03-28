
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

// Import pages

import HospitalLoginPage from "./pages/HospitalLogin/Index";
import EnrollmentPage from "./pages/PatientEnrolmentForm/Index";
import PatientLoginForm from "./pages/PatientLogin/login/PatientLoginForm";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" exact element={<PatientLoginForm />} />
					<Route path="/hospital/login" exact element={<HospitalLoginPage />} />
					<Route
						path="/hospital/patient-enrolment"
						exact
						element={<EnrollmentPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
=======
import "./App.css";
// Import pages

import LoginPage from "./pages/login/Index";
import EnrollmentPage from "./pages/EnrolmentForm/Index";
import PatientSignUpPage from "./pages/PatientSignupForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/patient-signup" exact element={<PatientSignUpPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/" element={<EnrollmentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
>>>>>>> main
}

export default App;
