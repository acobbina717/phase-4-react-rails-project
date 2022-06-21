import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = ({ navigate }) => {
  return (
    <div>
      <LoginForm />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default LoginPage;
