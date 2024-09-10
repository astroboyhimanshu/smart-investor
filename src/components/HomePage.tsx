import { Button } from "@mui/material";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import InvestOptions from "./InvestOptions";
import SipPlanner from "./SipPlanner";

const HomePage = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSIPCalculator, setShowSIPCalculator] = useState(false);

  const handleButtonClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setShowSIPCalculator(true);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center bg-green-200 w-screen h-screen">
      {!showSIPCalculator ? (
        <div className="flex flex-col text-center">
          <div className="text-2xl font-bold mb-4">Welcome to Nebula</div>
          <div className="text-lg mb-8">
            Your portal to manage investments & drive growth
          </div>
          <div className="flex items-center justify-center p-4">
            {showSpinner ? (
              <RingLoader size={36} color={"#123abc"} loading={showSpinner} />
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="p-4"
                onClick={handleButtonClick}
              >
                Start
              </Button>
            )}
          </div>
          <div className="text-lg mb-8">
            Stop Thinking! Just start your investment journey today
          </div>
        </div>
      ) : (
        <SipPlanner />
      )}
    </div>
  );
};

export default HomePage;
