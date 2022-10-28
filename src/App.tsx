import { HashRouter as Router, Routes, Route } from "react-router-dom"
import FlipPghApp from "./components/FlipPghApp"
import { PPL } from "./pages/PPL"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ppl" element={<PPL />} />
        <Route path="*" element={<FlipPghApp />} />
      </Routes>
    </Router>
  )
}