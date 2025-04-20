import { useNavigate } from "react-router";
import Button from "../../../ui/Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1  bg-[#f0f8ff] ">
      <div className="flex mx-auto items-center max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center lg:text-left w-3xl ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            AI-Powered Medical Image Analysis
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mb-8">
            Get instant, accurate answers to your medical imaging questions
            using our advanced AI system. Designed for healthcare professionals.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              width="w-fit"
              className="bg-blue-500 px-6 hover:bg-blue-600"
              onClick={() => {
                navigate("/chats");
              }}
            >
              Get Started
            </Button>
            <button className="bg-white cursor-pointer border py-2 px-6 w-fit  rounded-lg font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden lg:flex  w-3xl h-[420px] justify-center items-center">
          <img
            src="/images/hero.png"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
