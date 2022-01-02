import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import Home from "../pages/Home";
// import './FlipPghHome.css';
import Results from "../pages/Results";
import Rules from "../pages/Rules";
import Schedule from "../pages/Schedule";
import MobileMenu from "./MobileMenu";
import SideMenu from "./SideMenu";

function FlipPghApp() {
  const size = useWindowSize();
  // console.log(size);

  const renderMenu = () => {
    if (size.width && size.width > 640) {
      return <SideMenu />;
    }
    return <MobileMenu />;
  };

  return (
    <Router>
      {renderMenu()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/results" element={<Results />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
}

export default FlipPghApp;
