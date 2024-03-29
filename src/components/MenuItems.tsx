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
      <Menu.Item>
        <Menu.Header>Wednesday Night Strikes</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="schedule"
            active={location.pathname === "/schedule"}
            onClick={() => {
              navigate("/schedule");
            }}
          >
            Schedule
          </Menu.Item>
          {/* <Menu.Item
            name="locations"
            active={location.pathname === "/locations"}
            onClick={() => {
              navigate("/locations");
            }}
          >
            Location Info
          </Menu.Item> */}
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
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header>Superflip Pinball League</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="spl-overview"
            active={location.pathname === "/spl/overview"}
            onClick={() => {
              navigate("/spl/overview");
            }}
          >
            Overview
          </Menu.Item>
          <Menu.Item
            name="spl-details"
            active={location.pathname === "/spl/more-details"}
            onClick={() => {
              navigate("/spl/more-details");
            }}
          >
            More Details
          </Menu.Item>
          <Menu.Item
            name="spl-schedule"
            active={location.pathname === "/spl/schedule"}
            onClick={() => {
              navigate("/spl/schedule");
            }}
          >
            Current Schedule
          </Menu.Item>
          <Menu.Item
            name="spl-standings"
            active={location.pathname === "/spl/standings"}
            onClick={() => {
              navigate("/spl/standings");
            }}
          >
            Standings
          </Menu.Item>
          <Menu.Item
            name="spl-matchplay-links"
            active={location.pathname === "/spl/matchplay-links"}
            onClick={() => {
              navigate("/spl/matchplay-links");
            }}
          >
            Matchplay Links
          </Menu.Item>
        </Menu.Menu>
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
