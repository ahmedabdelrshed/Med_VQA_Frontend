import { FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Upload Image",
    description: "Upload your medical image to our secure platform",
  },
  {
    number: "02",
    title: "Ask Question",
    description: "Type your specific question about the image",
  },
  {
    number: "03",
    title: "Get Answer",
    description: "Receive detailed AI-powered analysis and explanation",
  },
];

const HowItWorks = () => {
  return (
    <div className=" py-32 lg:pt-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started with our platform in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-blue-500 text-white w-12 h-12 flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <FiArrowRight className="hidden md:block absolute -right-4 top-1/4 transform -translate-y-1/2 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
