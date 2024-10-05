import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Gold from "./components/investmentOptions/Gold";
const HomePage = lazy(() => import("./components/HomePage"));
const SipPlanner = lazy(() => import("./components/SipPlanner"));
const InvestmentPlanner = lazy(() => import("./components/InvestmentPlanner"));

function AppRoutes() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-screen h-screen">
              <BeatLoader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sip-planner" element={<SipPlanner />} />
            <Route path="/investment-planner" element={<InvestmentPlanner />} />
            <Route path="/investment-planner/gold" element={<Gold />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default AppRoutes;
