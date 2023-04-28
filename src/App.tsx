import { HashRouter as Router, Routes, Route } from "react-router-dom"
import FlipPghApp from "./FlipPghApp"
import { PPLTabWrapper } from "./pages/ppl/PPLTabWrapper"
import { WPPRv6Analysis } from "./pages/WPPRv6Analysis"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ppl" element={<PPLTabWrapper />} />
        <Route path="/wppr-v6-analysis" element={<WPPRv6Analysis />} />
        <Route path="*" element={<FlipPghApp />} />
      </Routes>
    </Router>
  )
}