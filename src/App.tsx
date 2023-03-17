import { HashRouter as Router, Routes, Route } from "react-router-dom"
import FlipPghApp from "./FlipPghApp"
import { PPLTabWrapper } from "./pages/ppl/PPLTabWrapper"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ppl" element={<PPLTabWrapper />} />
        <Route path="*" element={<FlipPghApp />} />
      </Routes>
    </Router>
  )
}