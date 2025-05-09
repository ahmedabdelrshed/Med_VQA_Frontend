import { Link } from "react-router";
import useRegister from "../hooks/useRegister";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import registerAnim from "../Animations/register.json";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  const { error } = useRegister();
  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 1000,
      });
    }
  }, [error]);

  return (
    <div className="bg-[#f0f8ff]  h-[100vh] flex  items-center  md:px-6 ">
      <motion.div
        className="bg-[#f9fafb] w-[88%]  md:w-md h-fit m-auto  xl:max-w-xl xl:w-[35%] xl:ml-20  px-4 pb-3 pt-2 rounded-lg  shadow-lg  "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className=" text-2xl lg:text-3xl text-[#118df0]   mt-2 mb-1 lg:mb-5 text-center font-bold  italic ">
          Register Page
        </h1>

        <RegisterForm />
        <div className="mt-3 text-center text-gray-600">
          Already have an account? {"  "}
          <Link className="font-semibold text-indigo-600" to="/login">
            Login
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="hidden mx-auto pl-18 xl:block "
      >
        <Lottie animationData={registerAnim} />
      </motion.div>
    </div>
  );
};

export default Register;
