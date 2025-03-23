import React, { useState } from "react";
import { model } from "../services/geminiService";
import { BarLoader, ScaleLoader } from "react-spinners";

interface InvestmentFormData {
  income: number;
  riskTolerance: string;
  goal: string;
  timeHorizon: number;
}

const InvestmentPlanForm: React.FC = () => {
  const [formData, setFormData] = useState<InvestmentFormData>({
    income: 0,
    riskTolerance: "Moderate",
    goal: "Retirement",
    timeHorizon: 10,
  });

  const [investmentResult, setInvestmentResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateInvestmentPlan = async (formData: InvestmentFormData) => {
    const prompt = `Generate an investment plan for a person with the following details:
      Income: $${formData.income}
      Risk Tolerance: ${formData.riskTolerance}
      Investment Goal: ${formData.goal}
      Time Horizon: ${formData.timeHorizon} years

      Include recommendations for:
      - Allocation across Gold, Mutual Funds, Stocks, Bonds, Crypto, and ETFs.
      - Specific investment strategies.
      - Risk management techniques.
      - SIP calculations.`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error("Error generating text:", error);
      throw new Error("Failed to generate investment plan. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const investmentPlan = await generateInvestmentPlan(formData);
      setInvestmentResult(investmentPlan);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="income"
              className="block text-sm font-medium text-gray-700"
            >
              Monthly Income ($)
            </label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Enter your monthly income"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="riskTolerance"
              className="block text-sm font-medium text-gray-700"
            >
              Risk Tolerance
            </label>
            <select
              id="riskTolerance"
              name="riskTolerance"
              value={formData.riskTolerance}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            >
              <option value="Low">Low - Prefer stable returns</option>
              <option value="Moderate">Moderate - Balanced approach</option>
              <option value="High">High - Willing to take risks</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-700"
            >
              Investment Goal
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              required
            >
              <option value="Retirement">Retirement</option>
              <option value="Education">Education Fund</option>
              <option value="Wealth Building">Wealth Building</option>
              <option value="Home Purchase">Home Purchase</option>
              <option value="Emergency Fund">Emergency Fund</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="timeHorizon"
              className="block text-sm font-medium text-gray-700"
            >
              Time Horizon (years)
            </label>
            <input
              type="number"
              id="timeHorizon"
              name="timeHorizon"
              value={formData.timeHorizon}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Investment timeline"
              min="1"
              max="50"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-200 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="mr-3 inline-block">
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              Generating Plan...
            </>
          ) : (
            "Generate Investment Plan"
          )}
        </button>
      </form>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {investmentResult && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-indigo-100 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">
            Your Personalized Investment Plan
          </h3>
          <div className="prose prose-indigo max-w-none">
            {investmentResult.split("\n").map((paragraph, index) =>
              paragraph.trim().startsWith("-") ||
              paragraph.trim().startsWith("*") ? (
                <ul key={index} className="list-disc pl-5 mb-2">
                  <li className="text-gray-700">
                    {paragraph.replace(/^[-*]\s/, "")}
                  </li>
                </ul>
              ) : paragraph.trim().startsWith("#") ? (
                <h4
                  key={index}
                  className="font-bold text-lg mt-4 mb-2 text-indigo-700"
                >
                  {paragraph.replace(/^#+\s/, "")}
                </h4>
              ) : paragraph.trim() ? (
                <p key={index} className="text-gray-700 mb-3">
                  {paragraph}
                </p>
              ) : (
                <div key={index} className="h-2"></div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentPlanForm;
