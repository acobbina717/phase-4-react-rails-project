import React from "react";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { Menu, Divider, Text } from "@mantine/core";
import {
  Settings,
  Search,
  Photo,
  MessageCircle,
  Trash,
  ArrowsLeftRight,
} from "tabler-icons-react";

function Navbar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    // <Burger opened={opened} onClick={() => setOpened((o) => !o)} title={title}>
    //   {" "}
    <Menu>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Settings size={14} />}>Profile</Menu.Item>
      <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
      <Menu.Item icon={<Photo size={14} />}>Gallery</Menu.Item>
      <Menu.Item
        icon={<Search size={14} />}
        rightSection={
          <Text size="xs" color="dimmed">
            ⌘K
          </Text>
        }
      >
        Search
      </Menu.Item>

      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item icon={<ArrowsLeftRight size={14} />}>
        Transfer my data
      </Menu.Item>
      <Menu.Item color="red" icon={<Trash size={14} />}>
        Delete my account
      </Menu.Item>
    </Menu>
    // </Burger>
  );
}

export default Navbar;
