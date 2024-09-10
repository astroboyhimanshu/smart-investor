import { Button } from "@mui/material";
import { useState } from "react";

const SipCalculator = () => {
  const [investment, setInvestment] = useState(0);
  const [rate, setRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [result, setResult] = useState<any>(0);

  const calculateLumpsum = () => {
    if (investment && rate && period) {
      const futureValue = investment * Math.pow(1 + rate / 100, period);
      setResult(futureValue.toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 bg-green-200 p-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="heading text-2xl p-2">
          SIP Lumpsum Investment Calculator
        </div>
        <label className="flex justify-center items-center gap-2">
          <div className="w-56 text-xl">Yearly Investment:</div>
          <input
            type="number"
            placeholder="Enter amount"
            className="p-2 border"
            onChange={(e) => setInvestment(Number(e.target.value))}
          />
        </label>
        <label className="flex justify-center items-center gap-2">
          <div className="w-56 text-xl">Expected Rate of Return:</div>
          <input
            type="number"
            placeholder="Enter rate (%)"
            className="p-2 border"
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>
        <label className="flex justify-center items-center gap-2">
          <div className="w-56 text-xl"> Investment Period:</div>
          <input
            type="number"
            placeholder="Enter years"
            className="p-2 border"
            onChange={(e) => setPeriod(Number(e.target.value))}
          />
        </label>
        <Button
          className="p-4 bg-blue-500 text-white rounded"
          onClick={calculateLumpsum}
          color="primary"
          variant="contained"
        >
          Calculate
        </Button>
        {result !== null && (
          <div className="result text-xl mt-2">Future Value: ₹{result}</div>
        )}
      </div>
    </div>
  );
};

export default SipCalculator;
