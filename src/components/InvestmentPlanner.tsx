import { useNavigate } from "react-router-dom";

const InvestmentPlanner = () => {
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    navigate(`/investment-planner/${type}`);
  };

  return (
    <div className="w-full h-full mx-auto px-4 py-10 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="text-4xl font-extrabold text-gray-900">
          Smart Investment Planner
        </div>
        <div className="text-gray-700 mt-4 text-lg max-w-2xl">
          Learn how to plan your investments wisely and explore different
          options to maximize your returns. Take control of your financial
          future today!
        </div>
      </div>

      {/* Investment Options Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Investment Options
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1: Gold */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/gold.png"
              alt="Gold"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-xl font-bold text-center text-gray-800">
              Gold
            </div>
            <div className="text-gray-600 text-center mt-2">
              Invest in gold for stable returns and a hedge against inflation.
            </div>
            <button
              className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
              onClick={() => handleClick("gold")}
            >
              Learn More
            </button>
          </div>

          {/* Card 2: Mutual Funds */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/mutualFunds.png"
              alt="Mutual Funds"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-xl font-bold text-center text-gray-800">
              Mutual Funds
            </div>
            <div className="text-gray-600 text-center mt-2">
              Diversify your portfolio with professionally managed funds.
            </div>
            <button
              className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              onClick={() => handleClick("mutualFunds")}
            >
              Learn More
            </button>
          </div>

          {/* Card 3: ETFs */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/etf.png"
              alt="ETFs"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-xl font-bold text-center text-gray-800">
              ETFs
            </div>
            <div className="text-gray-600 text-center mt-2">
              Invest in a diverse basket of assets with low costs and high
              liquidity.
            </div>
            <button
              className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleClick("etfs")}
            >
              Learn More
            </button>
          </div>

          {/* Card 4: Stocks */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/stocks.png"
              alt="Stocks"
              className="w-24 h-24 mx-auto mb-4"
            />
            <div className="text-xl font-bold text-center text-gray-800">
              Stocks
            </div>
            <div className="text-gray-600 text-center mt-2">
              Invest directly in companies for potential high returns, but with
              higher risk.
            </div>
            <button
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleClick("stocks")}
            >
              Learn More
            </button>
          </div>

          {/* Card 5: Bonds */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/bonds.png"
              alt="Bonds"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-800">
              Bonds
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Invest in bonds for steady interest income and lower risk compared
              to stocks.
            </p>
            <button
              className="mt-6 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
              onClick={() => handleClick("bonds")}
            >
              Learn More
            </button>
          </div>

          {/* Card 6: Cryptocurrency */}
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-1/2 lg:w-1/4 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src="src/assets/crypto.png"
              alt="Cryptocurrency"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-800">
              Cryptocurrency
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Explore high-risk, high-reward investments with digital assets
              like Bitcoin.
            </p>
            <button
              className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
              onClick={() => handleClick("cryptocurrency")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Actionable Advice Section */}
      <div className="bg-gray-50 shadow-md rounded-2xl p-8 text-center w-[80%] m-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Steps to Start Investing
        </h2>
        <ol className="list-decimal text-left pl-10 text-gray-700 space-y-3">
          <li>
            <span className="font-semibold">
              Determine your investment goals:
            </span>{" "}
            Know your financial objectives and risk tolerance.
          </li>
          <li>
            <span className="font-semibold">Choose the right type:</span> Select
            an investment option based on your profile.
          </li>
          <li>
            <span className="font-semibold">Start small and diversify:</span>{" "}
            Invest small amounts initially and spread your risk across various
            assets.
          </li>
        </ol>
        <button className="mt-8 bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 text-lg font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default InvestmentPlanner;
