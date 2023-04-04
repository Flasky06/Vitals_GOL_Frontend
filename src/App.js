import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Import pages

import HospitalLoginPage from "./pages/HospitalLogin/Index";
import EnrollmentPage from "./pages/PatientEnrolmentForm/Index";
import PatientLoginForm from "./pages/PatientLogin/login/PatientLoginForm";
import LandingPage from "./pages/LandingPage";

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
					<Route path="/" exact element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
