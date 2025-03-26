import { MdChevronRight } from "react-icons/md";
import HomePageChart from "./HomePageChart";

const HomePageHeader = ({
  handleOpenPlanGenerator,
  featuresRef,
}: {
  handleOpenPlanGenerator: () => void;
  featuresRef: React.RefObject<HTMLDivElement>;
}) => {
  const handleExploreFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <header className="container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-700 leading-tight">
            Revolutionize Your Investments
            <span className="block text-3xl text-gray-600 mt-3">
              AI-Powered Financial Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Unlock unprecedented financial growth with Nebula's cutting-edge AI
            technology. Personalized strategies, predictive insights, and
            intelligent planning.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center shadow-lg shadow-purple-200"
              onClick={handleOpenPlanGenerator}
            >
              Start Planning with AI <MdChevronRight className="ml-2" />
            </button>
            <button
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition flex items-center"
              onClick={handleExploreFeatures}
            >
              Explore Features
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-xl shadow-2xl shadow-purple-100 p-6">
            <HomePageChart />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePageHeader;
