import { useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import logo from "../assets/flip-pgh-logo-white.svg";
import { useWindowSize } from "../hooks/useWindowSize";

function MobileMenu() {
  const navigate = useNavigate();
  const size = useWindowSize();

  const renderLogo = () => {
    if (size.width && size.width > 640) {
      return <Image src={logo} />;
    }
    return <Image src={logo} style={{ height: 50, width: 50 }} />;
  };

  return (
    <Menu fixed="top" inverted style={{ display: "flex" }}>
      <Menu.Item
        name="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        {renderLogo()}
      </Menu.Item>
      <Dropdown
        item
        text="Menu"
        icon="bars"
        simple
        style={{ marginLeft: "auto" }}
        className="menu-dropdown"
      >
        <Dropdown.Menu style={{ right: 0, left: "auto" }}>
          <Dropdown.Item
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/schedule");
            }}
          >
            Schedule
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/locations");
            }}
          >
            Location Info
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/rules");
            }}
          >
            Format & Rules
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/results");
            }}
          >
            Results & Stats
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default MobileMenu;
