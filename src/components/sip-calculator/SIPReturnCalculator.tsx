export default function SIPReturnCalculator(
  monthlyInvestment: number,
  rateOfReturn: number,
  years: number,
  inflationRate: number
) {
  const n = years * 12;
  const r = (rateOfReturn - inflationRate) / 100 / 12; // Adjust rate for inflation
  const investmentAmount = monthlyInvestment * n;
  const futureValue = (monthlyInvestment * (Math.pow(1 + r, n) - 1)) / r;
  const estimatedReturns = futureValue - investmentAmount;
  const maturityValue = futureValue;

  return { investmentAmount, estimatedReturns, maturityValue };
}
