import { motion } from "framer-motion";
import ObesityCard from "../components/HealthyProfile/ObesityStatus/ObesityCard/ObesityCard";
import HealthyCard from "../components/HealthyProfile/HealthyStatus/HealthyCard/HealthyCard";

const HealthyProfile = () => {
  const healthyTips = [
    {
      title: "Water Intake",
      description: "Drink 8-10 glasses (2-2.5 liters) of water daily",
      icon: "💧",
    },
    {
      title: "Healthy Food",
      description:
        "Include fruits, vegetables, proteins, and whole grains in every meal",
      icon: "🥗",
    },
    {
      title: "Physical Activity",
      description: "Aim for 30 minutes of exercise at least 5 days a week",
      icon: "🏃",
    },
    {
      title: "Sleep Schedule",
      description: "Get 7-9 hours of quality sleep each night",
      icon: "😴",
    },
    {
      title: "Meal Timing",
      description: "Eat 3 main meals and 2 healthy snacks throughout the day",
      icon: "⏰",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 to-green-50 py-8 px-4 sm:px-6 lg:px-10">
      <div className="lg:flex gap-55 items-center justify-center ">
        <HealthyCard />
        <ObesityCard />
      </div>
      <div className="max-w-6xl w-full">
        <div className="mb-3">
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600 italic text-lg whitespace-nowrap">
              Improvements → Healthy
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
        </div>

        {/* First two cards */}
        <div className="flex flex-wrap justify-between">
          {healthyTips.slice(0, 2).map((tip, index) => (
            <Card key={index} tip={tip} delay={index * 0.2} />
          ))}
        </div>

        {/* Middle card */}
        <div className="flex justify-center mt-4">
          <Card tip={healthyTips[2]} delay={0.4} />
        </div>

        {/* Last two cards */}
        <div className="flex flex-wrap justify-between mt-4">
          {healthyTips.slice(3).map((tip, index) => (
            <Card key={index + 3} tip={tip} delay={(index + 3) * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  tip,
  delay,
}: {
  tip: { title: string; description: string; icon: string };
  delay: number;
}) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 mb-2"
  >
    <div className="flex items-center gap-4 mb-1">
      <div className="text-4xl">{tip.icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{tip.title}</h2>
    </div>
    <p className="text-gray-600">{tip.description}</p>
  </motion.div>
);

export default HealthyProfile;
