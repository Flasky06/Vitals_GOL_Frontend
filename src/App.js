import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Import pages

import HospitalLoginPage from "./pages/HospitalLogin/Index";
import EnrollmentPage from "./pages/PatientEnrolmentForm/Index";
import Login from "./pages/Login/login/Login";
import LandingPage from "./pages/LandingPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" exact element={<Login />} />
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
