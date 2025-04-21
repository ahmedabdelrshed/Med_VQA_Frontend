import { CiCircleCheck } from "react-icons/ci";
import { FiClock, FiShield } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import FeatureCard from "./FeatureCard";

const features = [
  {
    name: "Accurate Analysis",
    description:
      "High-precision AI analysis of medical images with detailed explanations",
    icon: CiCircleCheck,
  },
  {
    name: "Fast Results",
    description: "Get instant answers to your medical imaging questions",
    icon: FiClock,
  },
  {
    name: "Secure Platform",
    description: "HIPAA-compliant platform ensuring your data's safety",
    icon: FiShield,
  },
  {
    name: "AI-Powered",
    description: "Advanced machine learning models trained on medical datasets",
    icon: LuBrain,
  },
];
const Features = () => {
  return (
    <div className="py-32 lg:py-24 lg:h-[90vh] bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className=" font-bold tracking-tight text-[#2a6da6] text-4xl lg:text-3xl">
            Why Choose Our Platform?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Advanced features designed to support medical professionals in their
            diagnostic process
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ description, icon, name }) => (
            <FeatureCard
              key={name}
              Icon={icon}
              description={description}
              title={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
