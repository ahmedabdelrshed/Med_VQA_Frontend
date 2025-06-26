import VerifyEmailModal from "../components/Modals/VerifyEmailModal";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import login from "../Animations/login.json";
import LoginForm from "../components/LoginForm/LoginForm";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";
const Login = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("msg");
    if (error === "must Register First") {
      toast.error("Please Register First Using this Email");
    }
  }, [searchParams]);
  return (
    <div className="bg-[#f0f8ff]  h-[100vh] flex  items-center  md:px-6 dark:bg-black">
      <LoginForm />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="hidden mx-auto pl-18 lg:block "
      >
        <Lottie animationData={login} />
      </motion.div>
      <VerifyEmailModal />
    </div>
  );
};

export default Login;
