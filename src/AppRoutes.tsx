import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import InvestmentDetails from "./components/investment-options/InvestmentDetails";
import PlanGenerator from "./components/plan-generator/PlanGenerator";
import ReactGA from "react-ga4";

const HomePage = lazy(() => import("./components/home-page/HomePage"));
const SipPlanner = lazy(() => import("./components/sip-calculator/SipPlanner"));
const InvestmentPlanner = lazy(() => import("./components/InvestmentPlanner"));

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title,
    });
  }, [location]);

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
