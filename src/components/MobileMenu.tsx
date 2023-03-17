import { useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import logo from "../assets/flip-pgh-com-logo-white.svg";
import { useWindowSize } from "../hooks/useWindowSize";

function MobileMenu() {
  const navigate = useNavigate();
  const size = useWindowSize();

  const renderLogo = () => {
    if (size.width && size.width > 640) {
      return <Image src={logo} />;
    }
    return <Image src={logo} style={{ height: 60, width: 100 }} />;
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
          <Dropdown.Divider />
          <Dropdown.Header>Flipside Pinball League</Dropdown.Header>
          <Dropdown.Item
            onClick={() => {
              navigate("/flipside/overview");
            }}
          >
            Overview
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/flipside/schedule");
            }}
          >
            Schedule
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/flipside/more-details");
            }}
          >
            More Details
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Wednesday Night Strikes</Dropdown.Header>
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
              navigate("/stats");
            }}
          >
            Machine Stats
          </Dropdown.Item>
          {/* <Dropdown.Item
            onClick={() => {
              navigate("/calendar");
            }}
          >
            Calendar
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default MobileMenu;
