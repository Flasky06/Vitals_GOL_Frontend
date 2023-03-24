import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import pages

import LoginPage from "./pages/login/Index";
import EnrollmentPage from "./pages/EnrolmentForm/Index";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<EnrollmentPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
