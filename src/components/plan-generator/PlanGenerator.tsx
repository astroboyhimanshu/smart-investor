import InvestmentPlanForm from "../InvestmentPlanForm";

const PlanGenerator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-indigo-600 py-6 px-8">
            <h2 className="text-3xl font-bold text-white">
              Financial Planning Assistant
            </h2>
            <p className="text-indigo-100 mt-2">
              Create your personalized investment roadmap in seconds
            </p>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                {/* <ArrowRight className="h-6 w-6 text-white" /> */}
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
