import useLogin from "../../hooks/useLogin";
import Input from "../../ui/Input";
import ErrorMsg from "../../ui/ErrorMsg";
import InputPassword from "../../ui/InputPassword";
import { Link } from "react-router";
import Button from "../../ui/Button";
import { motion } from "framer-motion";
import LoginWithPlatform from "./LoginWithPlatform";

const LoginForm = () => {
  const { errors, handleSubmit, onSubmit, register, loading } =
    useLogin();
 
  return (
    <motion.div
      className="bg-[#f9fafb] dark:bg-gray-900 
               w-sm md:w-md h-fit m-auto lg:m-0 xl:w-[35%] lg:ml-20 
               px-4 pb-4 pt-3 sm:rounded-lg sm:px-6 sm:pb-6 sm:shadow-lg 
               transition-colors duration-300"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl text-[#118df0] mt-2 mb-7 text-center font-bold italic">
        Login Page
      </h1>

      <form className="mt-2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email address
          </label>
          <Input placeholder="Email address" {...register("email")} />
          {errors.email && <ErrorMsg msg={errors.email?.message} />}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <InputPassword placeholder="Password" {...register("password")} />
          {errors.password && <ErrorMsg msg={errors.password?.message} />}
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 
                       text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              {...register("rememberMe")}
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          <Link
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            to={"/forget_password"}
          >
            Forgot your password ?
          </Link>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={Object.keys(errors).length > 0 || loading}
          isLoading={loading}
        >
          Log in
        </Button>
      </form>

      <LoginWithPlatform />

      <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          className="font-semibold text-indigo-600 hover:text-indigo-500"
          to="/register"
        >
          Create Account
        </Link>
      </div>
    </motion.div>
  );
};

export default LoginForm;
