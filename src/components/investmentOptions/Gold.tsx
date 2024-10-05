const GoldInvestment = () => {
  return (
    <div className="w-full h-full mx-auto px-4 py-10 bg-gradient-to-b from-cyan-100 via-blue-300 to-indigo-400 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-6xl font-extrabold text-gray-800">
          Invest in Gold
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl">
          Secure your future by investing in one of the most stable and valuable
          assets in history. Learn about the benefits of gold investment and
          start planning your journey today.
        </p>
      </div>

      {/* Why Gold Investment Section in a White Box */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-12 hover:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why Invest in Gold?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12 p-4">
          {/* Stability in Uncertain Times Section */}
          <div className="lg:w-1/8 order-2 lg:order-1 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Stability in Uncertain Times
            </h3>
            <p className="text-gray-600">
              Gold is known for its ability to maintain value, especially during
              times of economic uncertainty. As a tangible asset, it serves as a
              hedge against inflation and market volatility, making it a
              reliable option for long-term wealth preservation.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <img
              src="/src/assets/GoldStability.png"
              alt="Gold Stability"
              className="rounded-lg w-28 h-28 lg:w-40 lg:h-40"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 p-4">
          {/* Flexibility in Investment Section */}
          <div className="lg:w-1/2 order-1 lg:order-1 flex justify-center">
            <img
              src="/src/assets/Gold2.png"
              alt="Gold Flexibility"
              className="rounded-lg w-28 h-28 lg:w-40 lg:h-40"
            />
          </div>
          <div className="lg:w-1/8 order-2 lg:order-2 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Flexibility in Investment
            </h3>
            <p className="text-gray-600">
              Gold offers flexible investment options, whether you prefer
              physical assets such as coins and bars, or more modern options
              like ETFs and gold-backed securities. You can tailor your
              investment to fit your needs and goals.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 p-4">
          {/* High Liquidity and Security Section */}
          <div className="lg:w-1/8 order-2 lg:order-1 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              High Liquidity and Security
            </h3>
            <p className="text-gray-600">
              Gold is a highly liquid asset, meaning it can be easily bought and
              sold in global markets. Additionally, it offers a level of
              security that many other assets can’t match, providing peace of
              mind for investors.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <img
              src="/src/assets/Gold3.png"
              alt="Gold Security"
              className="rounded-lg w-28 h-28 lg:w-40 lg:h-40"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white hover:shadow-xl rounded-2xl p-8 text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Key Benefits of Gold Investment
        </h2>
        <ul className="list-disc pl-10 text-left text-gray-700 space-y-3">
          <li>
            <span className="font-semibold">Portfolio Diversification:</span>{" "}
            Gold acts as a diversifying asset in your portfolio, balancing out
            the riskier parts of your investments.
          </li>
          <li>
            <span className="font-semibold">Protection Against Inflation:</span>{" "}
            Gold’s value tends to rise when inflation is high, making it a
            popular choice for preserving purchasing power.
          </li>
          <li>
            <span className="font-semibold">Tangible Asset:</span> Unlike stocks
            or bonds, gold is a physical asset that you can hold, which gives it
            inherent value and security.
          </li>
        </ul>
        <button className="mt-8 bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 text-lg font-medium">
          Start Investing
        </button>
      </div>

      {/* Final Thoughts Section */}
      <div className="bg-gray-50 hover:shadow-xl rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ready to Secure Your Future?
        </h2>
        <p className="text-gray-700 mb-6">
          Gold investment is a timeless way to ensure long-term financial
          security. With its stability, liquidity, and flexibility, gold is an
          asset that can withstand market fluctuations and economic downturns.
        </p>
        <button className="bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 text-lg font-medium">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default GoldInvestment;
