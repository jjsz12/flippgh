import { Route, Routes } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import Home from "../pages/Home";
import LocationInfo from "../pages/LocationInfo";
import Stats from "../pages/Stats";
import Rules from "../pages/Rules";
import Schedule from "../pages/Schedule";
import { AppProvider } from "./AppContext";
import MobileMenu from "./MobileMenu";
import SideMenu from "./SideMenu";

function FlipPghApp() {
  const size = useWindowSize();

  const renderMenu = () => {
    if (size.width && size.width > 640) {
      return <SideMenu />;
    }
    return <MobileMenu />;
  };

  return (
    <AppProvider>
      {renderMenu()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/locations" element={<LocationInfo />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/stats" element={<Stats />} />
        {/* <Route path="/calendar" element={<CalendarView />} /> */}
      </Routes>
    </AppProvider>
  );
}

export default FlipPghApp;
