import { useParams } from "react-router-dom";
import { investmentData } from "./investmentData";
import { Investment } from "./investmentInterface";
import { useNavigate } from "react-router-dom";

const InvestmentDetails = () => {
  const { type } = useParams<{ type: string }>(); // specify the type here
  const investment: Investment | undefined =
    investmentData[type as keyof typeof investmentData]; // Use a type assertion

  if (!investment) return <div>Investment option not found.</div>;
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const goToInvestmentOptions = () => {
    navigate("/investment-planner");
  };

  return (
    <div className="w-full h-full mx-auto px-4 py-10 bg-gradient-to-b from-cyan-100 via-blue-300 to-indigo-400 min-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="text-6xl font-extrabold text-gray-800">
          {investment.header.title}
        </div>
        <div className="text-gray-700 mt-4 text-lg max-w-2xl">
          {investment.header.description}
        </div>

        <div className="flex p-4 gap-8">
          <div className="flex">
            <button
              onClick={goHome}
              className=" bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 text-sm font-medium"
            >
              Home Page
            </button>
          </div>
          <div className="flex">
            <button
              onClick={goToInvestmentOptions}
              className=" bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              Investment Options
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Sections */}
      {investment.sections.map((section, index) => (
        <div
          key={index}
          className="bg-white w-[80%] m-auto shadow-lg rounded-2xl p-6 mb-12 hover:shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {section.title}
          </h2>
          {section.items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col lg:flex-row items-center justify-center mb-12 p-4 ${
                idx % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className="rounded-lg w-28 h-28 lg:w-40 lg:h-40"
                />
              </div>

              <div className="lg:w-1/2 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Benefits Section */}
      <div className="bg-white hover:shadow-xl rounded-2xl p-8 text-center mb-12 w-[80%] m-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {investment.benefits.title}
        </h2>
        <ul className="list-disc pl-10 text-left text-gray-700 space-y-3">
          {investment.benefits.items.map((benefit, index) => (
            <li key={index}>
              <span className="font-semibold">{benefit.title}:</span>{" "}
              {benefit.description}
            </li>
          ))}
        </ul>
        <button className="mt-8 bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 text-lg font-medium">
          Start Planning
        </button>
      </div>

      {/* Final Thoughts Section */}
      <div className="bg-gray-50 hover:shadow-xl rounded-2xl p-8 text-center w-[80%] m-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {investment.finalThoughts.title}
        </h2>
        <p className="text-gray-700 mb-6">
          {investment.finalThoughts.description}
        </p>
        <button
          onClick={goHome}
          className="bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 text-lg font-medium"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default InvestmentDetails;
