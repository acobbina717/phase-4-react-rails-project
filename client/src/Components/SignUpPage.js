import React from "react";
import SignupForm from "./SignupForm";
const SignUpPage = ({ authUser, history }) => {
  return <SignupForm authUser={authUser} history={history} />;
};

export default SignUpPage;
