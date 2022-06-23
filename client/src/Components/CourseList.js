import React from "react";
import { Grid } from "@nextui-org/react";
import CourseItems from "./CourseItems";

const CourseList = ({ courses }) => {
  return (
    <div className="card-container">
      <Grid.Container gap={2}>
        <CourseItems courses={courses} />
      </Grid.Container>
    </div>
  );
};

export default CourseList;
