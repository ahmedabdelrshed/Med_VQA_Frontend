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
    <div className="min-h-screen flex flex-col  bg-gradient-to-br from-blue-50 to-green-50 py-5 px-4 sm:px-6 lg:px-10">
      {/* Obesity Level Box */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow-md p-4 mb-3"
      >
        <div>
          {/* Image + Title */}
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3 ">
            <img
              src="/images/obesity.png" // Update if stored elsewhere
              alt="Obesity Icon"
              className="w-10 h-10"
            />
            <h2 className="text-lg font-semibold text-gray-700">
              Obesity Status
            </h2>
          </div>
            <div className="text-sm text-blue-400 bg-gray-100 rounded-full px-3 py-1 font-bold">
              Overweight
            </div>
         </div>
          <p className="text-gray-500 text-[13px] mb-1">
            Last Assign Date: <span className="font-medium"> 25 may 2023 </span>
          </p>

          <div className="flex justify-between items-center">
             <a
            // href={`/reports/${obesityLevel.toLowerCase()}.pdf`}
            download
            className="text-sm text-blue-500  hover:text-blue-700"
          >
            📄 Download Report
            </a>
            <button
              // onClick={handleAssignNewStatus}
              className="text-sm bg-blue-400  hover:bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-md transition"
            >
              Assign New Status
            </button>
         </div>
        </div>
      </motion.div>

      <div className="max-w-6xl w-full">
        <div className="mb-4">
          <p className="italic text-lg text-gray-600">
            Follow these essential steps to improve your health:
          </p>
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
        <div className="flex flex-wrap justify-between mt-8">
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
    className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 mb-3"
  >
    <div className="flex items-center gap-4 mb-2">
      <div className="text-4xl">{tip.icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{tip.title}</h2>
    </div>
    <p className="text-gray-600">{tip.description}</p>
  </motion.div>
);

export default HealthyProfile;
