import { BrowserRouter, Router, Route } from "react-router-dom";
// Import pages

import LoginPage from "./pages/login/Index";
import EnrollmentPage from "./pages/EnrolmentForm/Index";
function App() {
	return (
		<>
			<BrowserRouter>
				<Router>
					<Route path="/login" exact element={<LoginPage />} />
					<Route path="/" element={<EnrollmentPage />} />
					{/* <Route path="/login" element={<LoginPage />} />
					<Route path="/login" element={<LoginPage />} /> */}
					<EnrollmentPage />
				</Router>
			</BrowserRouter>
		</>
	);
}

export default App;
