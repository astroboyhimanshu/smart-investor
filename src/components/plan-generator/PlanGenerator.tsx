import { Button } from "@mui/material";
import InvestmentPlanForm from "./InvestmentPlanForm";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PlanGenerator = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center mb-4">
          <Button
            onClick={goHome}
            variant="contained"
            sx={{
              backgroundColor: "#5046e5",
              color: "white",
              paddingY: "8px",
              paddingX: "16px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#3d38c9",
              },
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            Home Page
          </Button>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 py-12 px-8 relative">
            <h2 className="text-3xl font-bold text-white">
              AI Powered Financial Planning Assistant
            </h2>
            <p className="text-indigo-100 mt-2">
              Create your personalized investment roadmap in seconds
            </p>
            <div className="absolute bottom-2 right-4 text-white text-sm">
              Powered with Gemini
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <MdArrowForward className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Start Your Financial Journey
                </h3>
                <p className="text-gray-600">
                  Fill out the form below to generate your personalized plan
                </p>
              </div>
            </div>

            <InvestmentPlanForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanGenerator;
