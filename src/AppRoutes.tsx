import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import InvestmentDetails from "./components/investment-options/InvestmentDetails";
import PlanGenerator from "./components/plan-generator/PlanGenerator";

const HomePage = lazy(() => import("./components/home-page/HomePage"));
const SipPlanner = lazy(() => import("./components/sip-calculator/SipPlanner"));
const InvestmentPlanner = lazy(() => import("./components/InvestmentPlanner"));

function AppRoutes() {
  return (
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
        <Route path="/investment-options" element={<InvestmentPlanner />} />
        <Route
          path="/investment-planner/:type"
          element={<InvestmentDetails />}
        />
        <Route path="/plan-generator" element={<PlanGenerator />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
