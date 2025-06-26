import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Login or Register",
    description: "Create an account or log in to access our platform securely.",
  },
  {
    number: "02",
    title: "Upload Image",
    description: "Upload your medical image easily through our secure system.",
  },
  {
    number: "03",
    title: "Get Medical Report",
    description: "Receive a detailed AI-generated report about your medical image.",
  },
];

const HowItWorks = () => {
  return (
    <div
      className="py-32 lg:pt-24 bg-white dark:bg-black transition-colors duration-300"
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Get started with our platform in three simple steps
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.3 }}
                  viewport={{ once: true }}
                  className="hidden md:block absolute -right-4 top-1/4 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                >
                  <FiArrowRight />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
