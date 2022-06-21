import React from "react";
import Carousel from "./Carousel";
import { Button } from "@mantine/core";

function LandingPage() {
  return (
    <div>
      <h1>AppName</h1>
      <Button>Students</Button>
      <Button>Teachers</Button>
      <Carousel />
    </div>
  );
}

export default LandingPage;
