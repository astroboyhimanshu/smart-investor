// LumpsumReturnCalculator.tsx

const LumpsumReturnCalculator = (
  lumpSumAmount: number,
  rateOfReturn: number,
  years: number
) => {
  // Formula to calculate maturity value for Lump Sum
  const maturityValue = lumpSumAmount * Math.pow(1 + rateOfReturn / 100, years);

  // Estimated returns are the difference between maturity value and initial investment
  const estimatedReturns = maturityValue - lumpSumAmount;

  return {
    investmentAmount: lumpSumAmount, // Unifying key with SIP return calculation
    estimatedReturns,
    maturityValue,
  };
};

export default LumpsumReturnCalculator;
