import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./components/HomePage"));
const SipPlanner = lazy(() => import("./components/SipPlanner"));
const InvestmentPlanner = lazy(() => import("./components/InvestmentPlanner"));

function AppRoutes() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sip-planner" element={<SipPlanner />} />
            <Route path="/investment-planner" element={<InvestmentPlanner />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default AppRoutes;
