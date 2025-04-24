import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import { motion } from "framer-motion";
import { buttonVariants, containerVariants, imageVariants } from "./HeroAnimationVariants";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1  bg-[#f0f8ff] " id="home">
      <div className="flex mx-auto items-center max-w-7xl px-6 h-full  lg:px-8">
        <motion.div
          className="text-center lg:text-left w-3xl "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            AI-Powered Medical Image Analysis
          </motion.h1>
          <motion.p
            className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            Get instant, accurate answers to your medical imaging questions
            using our advanced AI system. Designed for healthcare professionals.
          </motion.p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <motion.span variants={buttonVariants} whileHover="hover">
              <Button
                width="w-fit"
                className="bg-blue-500 px-6 hover:bg-blue-600"
                onClick={() => {
                  navigate("/chats");
                }}
              >
                Get Started
              </Button>
            </motion.span>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="bg-white cursor-pointer border py-2 px-6 w-fit  rounded-lg font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="hidden lg:flex w-3xl h-[420px] justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            src="/images/hero.png"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-xl "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
