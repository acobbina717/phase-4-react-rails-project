import React from "react";
import SignupForm from "./SignupForm";

const SignUpPage = ({ signupUrl, navigate }) => {
  return (
    <div>
      <SignupForm signupUrl={signupUrl} />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default SignUpPage;
