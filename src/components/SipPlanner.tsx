import { useState } from "react";
import { Typography, Slider, Button } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import SIPReturnCalculator from "./SIPReturnCalculator";
import LumpsumReturnCalculator from "./LumpsumReturnCalculator";
import { Square } from "@mui/icons-material";

// Helper function to calculate SIP or Lump Sum returns
const SipPlanner = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(100);
  const [lumpSumAmount, setLumpSumAmount] = useState<number>(10000);
  const [rateOfReturn, setRateOfReturn] = useState<number>(10);
  const [years, setYears] = useState<number>(2);
  const [calcType, setCalcType] = useState<"sip" | "lumpsum">("sip");

  // Calculate based on the selected type (SIP or Lump Sum)
  const { investmentAmount, estimatedReturns, maturityValue } =
    calcType === "sip"
      ? SIPReturnCalculator(monthlyInvestment, rateOfReturn, years)
      : LumpsumReturnCalculator(lumpSumAmount, rateOfReturn, years);

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
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold text-3xl">Returns Calculator</div>
          </div>

          {/* Conditional Inputs based on Calculation Type */}
          {calcType === "sip" ? (
            <>
              {/* Monthly Investment for SIP */}
              <div className="pb-1 pt-4">
                <Typography variant="subtitle1">
                  Monthly Investment (₹)
                </Typography>
              </div>
              <div className="flex items-center mb-2">
                <input
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  type="number"
                  min={100}
                  className="border rounded p-1 mr-2 w-20"
                />
                <Slider
                  value={monthlyInvestment}
                  onChange={(_e, value) =>
                    setMonthlyInvestment(value as number)
                  }
                  min={100}
                  max={100000}
                  step={100}
                  className="flex-grow ml-2"
                />
              </div>
            </>
          ) : (
            <>
              {/* LumpSum Investment for LumpSum */}
              <div className="pb-1 pt-4">
                <Typography variant="subtitle1">
                  Lump Sum Investment (₹)
                </Typography>
              </div>
              <div className="flex items-center mb-2">
                <input
                  value={lumpSumAmount}
                  onChange={(e) => setLumpSumAmount(Number(e.target.value))}
                  type="number"
                  min={1000}
                  className="border rounded p-1 mr-2 w-20"
                />
                <Slider
                  value={lumpSumAmount}
                  onChange={(_e, value) => setLumpSumAmount(value as number)}
                  min={1000}
                  max={10000000}
                  step={1000}
                  className="flex-grow ml-2"
                />
              </div>
            </>
          )}

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
          {/* Investment Type Switcher */}
          <div className="flex items-center gap-4 justify-center">
            <Button
              onClick={() => setCalcType("lumpsum")}
              variant={calcType === "lumpsum" ? "contained" : "outlined"}
            >
              LumpSum
            </Button>
            <Button
              onClick={() => setCalcType("sip")}
              variant={calcType === "sip" ? "contained" : "outlined"}
            >
              SIP
            </Button>
          </div>
          <div className="w-full h-72 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
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
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-2 justify-center items-center">
                <Square style={{ color: COLORS[0] }} />
                <div
                  className=""
                  style={{ minWidth: "130px", textAlign: "left" }}
                >
                  Invested Amount
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <Square style={{ color: COLORS[1] }} />
                <div
                  className=""
                  style={{ minWidth: "130px", textAlign: "left" }}
                >
                  Estimated Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipPlanner;
