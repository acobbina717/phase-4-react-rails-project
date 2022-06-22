import React, { useReducer, useState } from "react";
import NavBar from "./NavBar";
import { Burger, Menu, Avatar } from "@mantine/core";
import ProfileMenu from "./ProfileMenu";
const Home = () => {
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
    <div>
      <ProfileMenu />
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
    </div>
  );
};

export default Home;
