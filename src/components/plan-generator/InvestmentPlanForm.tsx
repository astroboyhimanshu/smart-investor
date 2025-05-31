import { useEffect, useState } from "react";
import { model } from "../../services/geminiService";
import { InvestmentFormData } from "../../types/interfaces";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const InvestmentPlanForm = () => {
  const [formData, setFormData] = useState<InvestmentFormData>({
    income: 0,
    riskTolerance: "Moderate",
    goal: "Retirement",
    timeHorizon: 10,
  });

  const [investmentResult, setInvestmentResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [activeChart, setActiveChart] = useState<string>("pie");

  // Colors for charts
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A259FF",
    "#4CAF50",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateInvestmentPlan = async (formData: InvestmentFormData) => {
    const prompt = `Based on the following details, provide ONLY the percentage allocation for each asset class as a JSON object. The percentages must add up to exactly 100%.

    Income: ₹${formData.income}
    Risk Tolerance: ${formData.riskTolerance}
    Investment Goal: ${formData.goal}
    Time Horizon: ${formData.timeHorizon} years
    
    Return ONLY a valid JSON object with these exact keys in this format:
    {"Gold": 10, "Mutual Funds": 20, "Stocks": 30, "Bonds": 15, "Crypto": 5, "ETFs": 20}
    
    Do not include any additional text, markdown formatting, code blocks, or explanations.`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      let text = response.text().trim(); // Trim extra spaces or newlines

      // Strip any potential markdown code blocks, backticks, or other non-JSON content
      text = text.replace(/```json|```/g, "").trim();

      // Additional cleanup: find the first '{' and last '}' to extract just the JSON object
      const startIndex = text.indexOf("{");
      const endIndex = text.lastIndexOf("}");

      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        text = text.substring(startIndex, endIndex + 1);
      }

      // Parse the cleaned JSON
      const allocation = JSON.parse(text);

      // Verify that we have all required asset classes
      const requiredAssets = [
        "Gold",
        "Mutual Funds",
        "Stocks",
        "Bonds",
        "Crypto",
        "ETFs",
      ];
      const missingAssets = requiredAssets.filter(
        (asset) => !(asset in allocation)
      );

      if (missingAssets.length > 0) {
        throw new Error(`Missing asset classes: ${missingAssets.join(", ")}`);
      }

      // Verify total equals 100%
      const total = Object.values(allocation).reduce(
        (sum: number, value: any) => sum + Number(value),
        0
      );
      if (Math.abs(total - 100) > 0.1) {
        // Allow small rounding errors
        throw new Error(`Total allocation equals ${total}%, not 100%`);
      }

      return allocation;
    } catch (error) {
      console.error("Error generating text:", error);
      throw new Error(
        "Failed to generate investment allocation. Please try again."
      );
    }
  };

  useEffect(() => {
    let progressInterval: ReturnType<typeof setInterval> | null = null;

    if (isLoading) {
      progressInterval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          if (prevProgress < 90) {
            return prevProgress + Math.floor(Math.random() * 10) + 5;
          }
          if (progressInterval) clearInterval(progressInterval);
          return prevProgress;
        });
      }, 1000); // Update every 1000ms
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingProgress(0);
    setError("");
    setInvestmentResult(null);

    try {
      const investmentPlan = await generateInvestmentPlan(formData);
      setInvestmentResult(investmentPlan);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
      setLoadingProgress(100);
    }
  };

  // Prepare data for recharts
  const prepareChartData = (result: any) => {
    if (!result) return [];
    return Object.entries(result).map(([name, value], index) => ({
      name,
      value: Number(value),
      fill: COLORS[index % COLORS.length],
    }));
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
              Monthly Income (₹)
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

      {/* Progress bar */}
      {isLoading && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      )}

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

          {/* Chart Type Selector */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveChart("pie")}
              className={`px-4 py-2 rounded-lg ${
                activeChart === "pie"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Pie Chart
            </button>
            <button
              onClick={() => setActiveChart("bar")}
              className={`px-4 py-2 rounded-lg ${
                activeChart === "bar"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Bar Chart
            </button>
          </div>

          {/* Charts */}
          <div className="w-full h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              {activeChart === "pie" ? (
                <PieChart>
                  <Pie
                    data={prepareChartData(investmentResult)}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {prepareChartData(investmentResult).map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                </PieChart>
              ) : (
                <BarChart
                  data={prepareChartData(investmentResult)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="value" name="Allocation" radius={[5, 5, 0, 0]}>
                    {prepareChartData(investmentResult).map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Allocation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(investmentResult).map(
              ([asset, percentage]: any, index) => (
                <div
                  key={asset}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-100"
                  style={{ borderLeftColor: COLORS[index % COLORS.length] }}
                >
                  <h4 className="font-medium text-indigo-700">{asset}</h4>
                  <p className="text-2xl font-bold text-gray-800">
                    {percentage}%
                  </p>
                </div>
              )
            )}
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-gray-600">
              This allocation is based on your{" "}
              {formData.riskTolerance.toLowerCase()} risk tolerance, ₹
              {formData.income} monthly income, {formData.goal.toLowerCase()}{" "}
              goal, and a {formData.timeHorizon} year investment horizon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentPlanForm;
