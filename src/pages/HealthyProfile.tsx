import { motion } from "framer-motion";

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
    <div className="min-h-screen flex items-center bg-gradient-to-br from-blue-50  to-green-50 ">
      <div className=" w-full py-12 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 ">
            <p className="italic  text-lg  text-gray-600">
              Follow these essential steps to improve your healthy :
            </p>
          </div>

          {/* First two cards */}
          <div className="flex flex-wrap justify-between">
            {healthyTips.slice(0, 2).map((tip, index) => (
              <Card key={index} tip={tip} delay={index * 0.2} />
            ))}
          </div>

          {/* Middle card */}
          <div className="flex justify-center mt-8">
            <Card tip={healthyTips[2]} delay={0.4} />
          </div>

          {/* Last two cards */}
          <div className="flex flex-wrap justify-between mt-8">
            {healthyTips.slice(3).map((tip, index) => (
              <Card key={index + 3} tip={tip} delay={(index + 3) * 0.2} />
            ))}
          </div>
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
    className="w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 mb-3 md:m-0"
  >
    <div className="flex items-center gap-4 mb-2">
      <div className="text-4xl">{tip.icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{tip.title}</h2>
    </div>
    <p className="text-gray-600">{tip.description}</p>
  </motion.div>
);

export default HealthyProfile;
