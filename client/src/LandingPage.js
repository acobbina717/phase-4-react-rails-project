import React from "react";
import Carousel from "./Carousel";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>AppName</h1>
      <Link to="/student-entry-page">
        <Button>Students</Button>
      </Link>
      <Link to="teacher-entry-page">
        <Button>Teachers</Button>
      </Link>
      <Carousel />
    </div>
  );
}

export default LandingPage;
