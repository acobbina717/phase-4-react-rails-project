import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const NavBar = ({ animation, visible }) => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation={animation}
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
    </>
  );
};

export default NavBar;
