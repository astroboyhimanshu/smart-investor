import React, { useState } from "react";
import { Box, Typography, Slider, TextField } from "@mui/material";

// Helper function to calculate SIP
const calculateSIP = (
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

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [rateOfReturn, setRateOfReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  const { investmentAmount, estimatedReturns, maturityValue } = calculateSIP(
    monthlyInvestment,
    rateOfReturn,
    years
  );

  return (
    <Box
      sx={{
        maxWidth: "500px",
        mx: "auto",
        p: 4,
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}
      >
        SIP Calculator
      </Typography>

      {/* Monthly Investment */}
      <Typography variant="subtitle1">Monthly Investment (₹)</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          type="number"
          sx={{ width: "100px", mr: 2 }}
        />
        <Slider
          value={monthlyInvestment}
          onChange={(e, value) => setMonthlyInvestment(value as number)}
          min={1000}
          max={100000}
          step={100}
          sx={{ flexGrow: 1 }}
        />
      </Box>

      {/* Rate of Return */}
      <Typography variant="subtitle1">Expected Rate of Return (%)</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          value={rateOfReturn}
          onChange={(e) => setRateOfReturn(Number(e.target.value))}
          type="number"
          sx={{ width: "100px", mr: 2 }}
        />
        <Slider
          value={rateOfReturn}
          onChange={(e, value) => setRateOfReturn(value as number)}
          min={1}
          max={30}
          step={0.5}
          sx={{ flexGrow: 1 }}
        />
      </Box>

      {/* Years */}
      <Typography variant="subtitle1">Investment Period (Years)</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <TextField
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          type="number"
          sx={{ width: "100px", mr: 2 }}
        />
        <Slider
          value={years}
          onChange={(e, value) => setYears(value as number)}
          min={1}
          max={30}
          step={1}
          sx={{ flexGrow: 1 }}
        />
      </Box>

      {/* Results */}
      <Box
        sx={{ mt: 4, p: 3, backgroundColor: "#e0f7fa", borderRadius: "8px" }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Results
        </Typography>
        <Typography variant="body1">
          <strong>Investment Amount: </strong> ₹
          {investmentAmount.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          <strong>Est. Returns: </strong> ₹{estimatedReturns.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          <strong>Total Value: </strong> ₹{maturityValue.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default SIPCalculator;
