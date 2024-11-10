export default function LumpsumReturnCalculator(
  lumpSumAmount: number,
  rateOfReturn: number,
  years: number,
  inflationRate: number
) {
  const r = (rateOfReturn - inflationRate) / 100; // Adjust rate for inflation
  const investmentAmount = lumpSumAmount;
  const maturityValue = lumpSumAmount * Math.pow(1 + r, years);
  const estimatedReturns = maturityValue - lumpSumAmount;

  return { investmentAmount, estimatedReturns, maturityValue };
}
