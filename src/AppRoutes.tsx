import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SipPlanner from "./components/SipPlanner";
import InvestmentPlanner from "./components/InvestmentPlanner";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sip-planner" element={<SipPlanner />} />
          <Route path="/investment-planner" element={<InvestmentPlanner />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
