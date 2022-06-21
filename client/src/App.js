import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import TeacherAuthPage from "./Components/TeacherAuthPage";
import StudentAuthPage from "./Components/StudentAuthPage";

function App() {
  const [signupUrl, setSignUpUrl] = useState("");
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/teacher_auth"
          element={
            <TeacherAuthPage setSignUpUrl={setSignUpUrl} navigate={navigate} />
          }
        />

        <Route
          path="/student_auth"
          element={
            <StudentAuthPage setSignUpUrl={setSignUpUrl} navigate={navigate} />
          }
        />

        <Route path="/login" element={<LoginPage navigate={navigate} />} />

        <Route
          path="/signup"
          element={<SignUpPage signupUrl={signupUrl} navigate={navigate} />}
        />

        <Route path="/home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
