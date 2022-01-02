import React from "react";
import { Menu } from "semantic-ui-react";
import MenuItems from "./MenuItems";

function SideMenu() {
  return (
    <Menu inverted vertical fixed="left" style={{ overflow: "auto" }}>
      <MenuItems />
    </Menu>
  );
}

export default SideMenu;
