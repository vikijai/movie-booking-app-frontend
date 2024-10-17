import { Routes, Route } from "react-router-dom";

import SigninPage from "./pages/sign-in/SignIn.jsx";
import SignupPage from "./pages/sign-up/SignUp.jsx";

import "./App.css";
import Homepage from "./pages/homepage/HomePage.jsx";
import DashboardPage from "./pages/dashboard/index.jsx";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sign-in" element={<SigninPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
    </>
  );
}

export default App;
