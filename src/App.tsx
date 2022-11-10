import { HashRouter as Router, Routes, Route } from "react-router-dom"
import FlipPghApp from "./components/FlipPghApp"
import { OverallStandings } from "./pages/ppl/OverallStandings"
import { PlayerInfo } from "./pages/ppl/PlayerInfo"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ppl" element={<OverallStandings />} />
        <Route path="/ppl/player-info" element={<PlayerInfo />} />
        <Route path="*" element={<FlipPghApp />} />
      </Routes>
    </Router>
  )
}