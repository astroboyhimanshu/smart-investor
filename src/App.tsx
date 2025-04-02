import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

ReactGA.initialize(MEASUREMENT_ID);
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
