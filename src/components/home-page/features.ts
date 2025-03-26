import React from "react";
import {
  MdOutlineCalculate,
  MdRocketLaunch,
  MdStarOutline,
} from "react-icons/md";
import { FeatureType } from "../../types/types";

export const features: FeatureType[] = [
  {
    icon: React.createElement(MdOutlineCalculate, {
      className: "text-emerald-500",
      size: 48,
    }),
    title: "Precision SIP Calculator",
    description:
      "Hyper-intelligent systematic investment planning with predictive AI analytics.",
    gradient: "from-emerald-50 to-emerald-100",
    navigateTo: "/sip-planner",
    buttonText: "Calculate SIP",
  },
  {
    icon: React.createElement(MdRocketLaunch, {
      className: "text-purple-500",
      size: 48,
    }),
    title: "Dynamic Income Planner",
    description:
      "Adaptive financial strategies tailored to your unique wealth trajectory.",
    gradient: "from-purple-50 to-purple-100",
    navigateTo: "/plan-generator",
    buttonText: "Generate Plan",
  },
  {
    icon: React.createElement(MdStarOutline, {
      className: "text-sky-500",
      size: 48,
    }),
    title: "Beginner's Guide to Investing",
    description:
      "Embark on your investment journey! Discover beginner-friendly resources for your first investment.",
    gradient: "from-sky-50 to-sky-100",
    navigateTo: "/investment-options",
    buttonText: "Explore Options",
  },
];
