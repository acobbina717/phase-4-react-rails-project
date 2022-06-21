import React from "react";
import CourseList from "./CourseList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      Home
      <Navbar />
      {/* <Carousel /> */}
      <CourseList />
    </div>
  );
};

export default Home;
