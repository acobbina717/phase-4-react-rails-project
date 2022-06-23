import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const LandingPage = () => {
  return (
    <div className="btn-container">
      <div className="btn-group">
        <Link to="/signup">
          <Button color="gradient" className="btn">
            Sign Up
          </Button>
        </Link>

        <Link to="/login">
          <Button color="gradient" className="btn">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
