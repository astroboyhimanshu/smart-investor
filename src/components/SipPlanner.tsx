import { useState } from "react";
import { Typography, Slider, Button } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Helper function to calculate SIP
const returnCalculator = (
  monthlyInvestment: number,
  rateOfReturn: number,
  years: number
) => {
  const months = years * 12;
  const monthlyRate = rateOfReturn / 12 / 100;

  const investmentAmount = monthlyInvestment * months;
  const maturityValue =
    monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  const estimatedReturns = maturityValue - investmentAmount;

  return { investmentAmount, estimatedReturns, maturityValue };
};

const SipPlanner = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100);
  const [rateOfReturn, setRateOfReturn] = useState<number>(10);
  const [years, setYears] = useState<number>(2);

  const { investmentAmount, estimatedReturns, maturityValue } =
    returnCalculator(monthlyInvestment, rateOfReturn, years);

  // Data for the Pie Chart
  const data = [
    { name: "Invested Amount", value: Math.round(investmentAmount) },
    { name: "Estimated Returns", value: Math.round(estimatedReturns) },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="flex flex-grow p-4 justify-center">
      <div className="max-w-4xl flex flex-row gap-4 bg-gray-100 rounded-xl shadow-md p-4">
        {/* Left Side: Inputs and Results */}

        <div className="w-1/2 p-4">
          <div className="flex">
            <div className="flex mb-4 font-semibold text-3xl text-center">
              SIP Calculator
            </div>
          </div>
          {/* Monthly Investment */}
          <div className="pb-1 pt-4">
            <Typography variant="subtitle1">Monthly Investment (₹)</Typography>
          </div>
          <div className="flex items-center mb-2 ">
            <input
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              type="number"
              min={100}
              className="border rounded p-1 mr-2 w-20"
            />
            <Slider
              value={monthlyInvestment}
              onChange={(_e, value) => setMonthlyInvestment(value as number)}
              min={100}
              max={100000}
              step={100}
              className="flex-grow ml-2"
            />
          </div>
          {/* Rate of Return */}
          <div className="pb-1">
            <Typography variant="subtitle1">
              Expected Rate of Return (%)
            </Typography>
          </div>
          <div className="flex items-center mb-2">
            <input
              value={rateOfReturn}
              onChange={(e) => setRateOfReturn(Number(e.target.value))}
              type="number"
              min={1}
              max={40}
              step={0.5}
              className="border rounded p-1 mr-2 w-20"
            />
            <Slider
              value={rateOfReturn}
              onChange={(_e, value) => setRateOfReturn(value as number)}
              min={1}
              max={40}
              step={0.5}
              className="flex-grow ml-2"
            />
          </div>
          {/* Years */}
          <div className="pb-1">
            <Typography variant="subtitle1">
              Investment Period (Years)
            </Typography>
          </div>
          <div className="flex items-center mb-4">
            <input
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              type="number"
              min={1}
              max={30}
              className="border rounded p-1 mr-2 w-28"
            />
            <Slider
              value={years}
              onChange={(_e, value) => setYears(value as number)}
              min={1}
              max={30}
              step={1}
              className="flex-grow ml-2"
            />
          </div>
          {/* Results */}
          <div className="mt-4 p-3 flex flex-col min-w-72 bg-teal-100 rounded-lg">
            <div>
              <Typography variant="h6" className="mb-2">
                Results
              </Typography>
            </div>

            <div className="flex gap-2">
              <div className="text-md font-bold">Investment Amount: </div>
              <div className="text-md">
                ₹{Math.round(investmentAmount).toLocaleString()}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-md font-bold">Est. Returns: </div>
              <div className="text-md">
                ₹{Math.round(estimatedReturns).toLocaleString()}
              </div>
            </div>

            <div className="flex gap-2">
              <div className="text-md font-bold">Total Value: </div>
              <div className="text-md">
                ₹{Math.round(maturityValue).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        {/* Right Side: Pie Chart */}
        <div className="w-1/2 p-4 flex-col items-center justify-center">
          <div className="flex items-center justify-center p-2 gap-18">
            <Button className="bg-teal-200">LumpSum</Button>
            <Button>SIP</Button>
          </div>
          <div className="w-full h-72 pt-4">
            <Typography variant="h6" className="mb-2 text-center">
              Investment vs Returns
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {data.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipPlanner;
