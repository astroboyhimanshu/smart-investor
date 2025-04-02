import { MdLanguage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  featuresRef,
}: {
  featuresRef: React.RefObject<HTMLElement>;
}) => {
  const navigate = useNavigate();

  const handleSolutions = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-2 rounded-full">
              <MdLanguage className="text-white" size={28} />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Nebula
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="hidden md:inline-block text-gray-600 hover:text-purple-600 transition-colors font-medium"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </button>
            <button
              className="hidden md:inline-block text-gray-600 hover:text-purple-600 transition-colors font-medium"
              onClick={handleSolutions}
            >
              Solutions
            </button>
            <div className="md:flex">
              <button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-200"
                onClick={() => navigate("/plan-generator")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
