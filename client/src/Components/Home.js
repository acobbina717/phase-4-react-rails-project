import React, { useReducer, useState } from "react";
import NavBar from "./NavBar";
import { Burger } from "@mantine/core";
import ProfileMenu from "./ProfileMenu";
import CourseList from "./CourseList";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import MyCourses from "./MyCourses";

const Home = ({ courses, handleLogout }) => {
  //
  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE_ANIMATION":
        return {
          ...state,
          animation: action.animation,
          visible: !state.visible,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    animation: "overlay",
    direction: "left",
    visible: false,
  });

  const { animation, visible } = state;

  const [opened, setOpened] = useState(false);

  const burgerClick = () => {
    setOpened((o) => !o);
    dispatch({ type: "CHANGE_ANIMATION", animation: "push" });
  };

  return (
    <div className="nav">
      <ProfileMenu handleLogout={handleLogout} />
      <Burger
        opened={opened}
        onClick={burgerClick}
        className="burger-icon"
        sx={(theme) => ({
          "&:hover": {
            backgroundColor: theme.colors.gray[0],
          },
        })}
      />
      <NavBar animation={animation} visible={visible} />
      {/* <MyCourses courses={courses} /> */}
      <CourseList courses={courses} />
    </div>
  );
};

export default Home;
