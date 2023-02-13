import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import logo from "../assets/flip-pgh-com-logo-white.svg";
import { useWindowSize } from "../hooks/useWindowSize";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const size = useWindowSize();

  const renderLogo = () => {
    if (size.width && size.width > 640) {
      return <Image src={logo} />;
    }
    return <Image src={logo} style={{ height: 60, width: 100 }} />;
  };

  return (
    <>
      <Menu.Item
        name="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        {renderLogo()}
      </Menu.Item>
      <Menu.Item
        name="home"
        active={location.pathname === "/"}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name="schedule"
        active={location.pathname === "/schedule"}
        onClick={() => {
          navigate("/schedule");
        }}
      >
        Schedule
      </Menu.Item>
      <Menu.Item
        name="locations"
        active={location.pathname === "/locations"}
        onClick={() => {
          navigate("/locations");
        }}
      >
        Location Info
      </Menu.Item>
      <Menu.Item
        name="rules"
        active={location.pathname === "/rules"}
        onClick={() => {
          navigate("/rules");
        }}
      >
        Format & Rules
      </Menu.Item>
      <Menu.Item
        name="stats"
        active={location.pathname === "/stats"}
        onClick={() => {
          navigate("/stats");
        }}
      >
        Machine Stats
      </Menu.Item>
      {/* <Menu.Item
        name="calendar"
        active={location.pathname === "/calendar"}
        onClick={() => {
          navigate("/calendar");
        }}
      >
        Calendar
      </Menu.Item> */}
    </>
  );
}

export default MenuItems;
