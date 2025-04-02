import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";
import FeatureCard from "./FeatureCard";
import { features } from "./features";

const HomePage = () => {
  const navigate = useNavigate();
  // To Create a reference of the features section
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleOpenPlanGenerator = () => {
    navigate(`/plan-generator`);
  };

  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-inter antialiased">
      <Navbar featuresRef={featuresRef} />
      <HomePageHeader
        handleOpenPlanGenerator={handleOpenPlanGenerator}
        featuresRef={featuresRef}
      />

      {/* Features Interactive Section */}
      <section ref={featuresRef} className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isActive={activeFeature === index}
              onMouseEnter={() => setActiveFeature(index)}
            />
          ))}
        </div>
      </section>

      <HomePageFooter />
    </div>
  );
};

export default HomePage;
