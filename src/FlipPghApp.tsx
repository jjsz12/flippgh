import { Route, Routes } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";
import Home from "./pages/Home";
import LocationInfo from "./pages/wed-tourns/LocationInfo";
import Stats from "./pages/wed-tourns/Stats";
import Rules from "./pages/wed-tourns/Rules";
import Schedule from "./pages/wed-tourns/Schedule";
import { AppProvider } from "./components/AppContext";
import MobileMenu from "./components/MobileMenu";
import SideMenu from "./components/SideMenu";
import { FlipsideSchedule } from "./pages/flipside/FlipsideSchedule";
import { Overview } from "./pages/flipside/Overview";
import { MoreDetails } from "./pages/flipside/MoreDetails";

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
        <Route path="/flipside/overview" element={<Overview />} />
        <Route path="/flipside/schedule" element={<FlipsideSchedule />} />
        <Route path="/flipside/more-details" element={<MoreDetails />} />
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
