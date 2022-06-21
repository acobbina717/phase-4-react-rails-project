import React from "react";
import { Link } from "react-router-dom";

const TeacherAuthPage = ({ setSignUpUrl, navigate }) => {
  return (
    <div>
      <Link to="/signup" onClick={() => setSignUpUrl("/teachers")}>
        <button>Sign Up</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default TeacherAuthPage;
