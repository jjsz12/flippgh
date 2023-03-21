import { Route, Routes } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import Home from "./pages/Home";
import LocationInfo from "./pages/wednesdays/LocationInfo";
import Stats from "./pages/wednesdays/Stats";
import Rules from "./pages/wednesdays/Rules";
import Schedule from "./pages/wednesdays/Schedule";
import { AppProvider } from "./components/AppContext";
import MobileMenu from "./components/MobileMenu";
import SideMenu from "./components/SideMenu";
import { SuperflipSchedule } from "./pages/superflip/SuperflipSchedule";
import { Overview } from "./pages/superflip/Overview";
import { MoreDetails } from "./pages/superflip/MoreDetails";

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
        <Route path="/spl/overview" element={<Overview />} />
        <Route path="/spl/schedule" element={<SuperflipSchedule />} />
        <Route path="/spl/more-details" element={<MoreDetails />} />
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
