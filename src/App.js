
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
}

export default App;
