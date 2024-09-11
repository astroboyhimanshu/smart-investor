// SIPReturnCalculator.tsx

const SIPReturnCalculator = (
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

export default SIPReturnCalculator;
