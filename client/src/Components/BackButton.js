import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const BackButton = ({ history }) => {
  return (
    <ArrowBackIcon
      className="back-arrow"
      color="gradient"
      onClick={() => history.push("/")}
    />
  );
};

export default BackButton;
