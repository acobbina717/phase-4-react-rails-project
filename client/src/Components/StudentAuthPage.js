import React from "react";
import { Link } from "react-router-dom";
const StudentAuthPage = ({ setSignUpUrl, navigate }) => {
  return (
    <div>
      <Link to="/signup" onClick={() => setSignUpUrl("/students")}>
        <button className="sign-up-btn">Sign Up</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default StudentAuthPage;
