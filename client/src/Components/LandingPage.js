import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/teacher_auth">
        <button>Teacher</button>
      </Link>
      <Link to="/student_auth">
        <button>Student</button>
      </Link>
    </div>
  );
};

export default LandingPage;
