import { Link } from "react-router";
import Button from "../ui/Button";
import Input from "../ui/Input";
import useRegister from "../hooks/useRegister";
import ErrorMsg from "../ui/ErrorMsg";
import InputPassword from "../ui/InputPassword";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import registerAnim from "../Animations/register.json";

const Register = () => {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    error,
    loading,
    emailOnBlurHandler,
    emailAvailabilityStatus,
  } = useRegister();
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
        className="bg-[#f9fafb] w-sm md:w-md h-fit m-auto lg:m-0 xl:w-[35%] lg:ml-20 px-4 pb-4 pt-3 sm:rounded-lg sm:px-6 sm:pb-6 sm:shadow-lg  "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl text-[#118df0]   mt-2 mb-7 text-center font-bold  italic ">
          Register Page
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:space-x-4  ">
            <div className="w-full mb-4 md:mb-0">
              <label
                htmlFor="firstName"
                className="block text-sm  font-medium text-gray-700"
              >
                First Name
              </label>
              <Input {...register("firstName")} placeholder="First Name" />
              {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />}
            </div>
            <div className="w-full ">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input {...register("lastName")} placeholder="Last Name" />
              {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              placeholder="Email Address"
              {...register("email")}
              onBlur={emailOnBlurHandler}
            />
            {emailAvailabilityStatus && (
              <span
                className={`block ${
                  emailAvailabilityStatus === "User already Exists"
                    ? "text-red-600"
                    : "text-green-600"
                }  text-right font-semibold text-sm text-[14px] mb-[-25px] mt-1`}
              >
                {emailAvailabilityStatus}
              </span>
            )}
            {errors.email && <ErrorMsg msg={errors.email?.message} />}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputPassword placeholder="Password" {...register("password")} />
            {errors.password && <ErrorMsg msg={errors.password?.message} />}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <InputPassword
              placeholder="Repeat Password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <ErrorMsg msg={errors.confirmPassword?.message} />
            )}
          </div>

          <Button
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              loading ||
              emailAvailabilityStatus === "Not Available"
            }
            isLoading={loading}
          >
            Register
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-600">
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
        className="hidden mx-auto pl-18 lg:block "
      >
        <Lottie animationData={registerAnim} />
      </motion.div>
    </div>
  );
};

export default Register;
