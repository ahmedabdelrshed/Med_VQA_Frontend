import { CiCircleCheck } from "react-icons/ci";
import { FiClock, FiShield } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

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
    <div className="py-32 lg:py-24 lg:h-[90vh] bg-[#f9fafb]" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-bold tracking-tight text-[#2a6da6] text-4xl lg:text-3xl"
          >
            Why Choose Our Platform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Advanced features designed to support medical professionals in their
            diagnostic process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ description, icon, name }, index) => (
            <motion.div
              key={name}
              custom={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView="visible"
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.3,
                    ease: "easeOut",
                  },
                }),
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <FeatureCard
                Icon={icon}
                description={description}
                title={name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
