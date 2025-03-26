import React from "react";
import { Button } from "@mui/material";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
  navigateTo,
  buttonText,
  isActive,
  onMouseEnter,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  navigateTo: string;
  buttonText: string;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  // Mapping gradient to color and button color
  const colorMap = {
    "from-emerald-50 to-emerald-100": {
      buttonColor: "#10b981", // emerald-500
      textColor: "white",
    },
    "from-purple-50 to-purple-100": {
      buttonColor: "#8b5cf6", // purple-500
      textColor: "white",
    },
    "from-sky-50 to-sky-100": {
      buttonColor: "#0ea5e9", // sky-500
      textColor: "white",
    },
  };

  const buttonStyles = colorMap[gradient as keyof typeof colorMap] || {
    buttonColor: "#6b7280", // default gray
    textColor: "white",
  };

  return (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isActive ? "shadow-2xl scale-105" : "shadow-lg"
      } flex flex-col justify-between`}
      onMouseEnter={onMouseEnter}
    >
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          width: "45%",
          backgroundColor: buttonStyles.buttonColor,
          color: buttonStyles.textColor,
          "&:hover": {
            backgroundColor: buttonStyles.buttonColor,
            opacity: 0.9,
          },
          textTransform: "none",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
        }}
      >
        {buttonText}
        <MdChevronRight />
      </Button>
    </div>
  );
};

export default FeatureCard;
