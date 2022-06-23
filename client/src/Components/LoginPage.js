import React from "react";
import LoginForm from "./LoginForm";
import BackButton from "./BackButton";

const LoginPage = ({ authUser, history }) => {
  return (
    <div>
      <BackButton history={history} />
      <LoginForm authUser={authUser} history={history} />
    </div>
  );
};

export default LoginPage;
