import React from "react";
import { Menu } from "semantic-ui-react";
import MenuItems from "./MenuItems";

function MobileMenu() {
  return (
    <Menu fixed="top" inverted style={{ overflow: "auto" }}>
      <MenuItems />
    </Menu>
  );
}

export default MobileMenu;
