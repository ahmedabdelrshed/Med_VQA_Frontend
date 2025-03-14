import { Link } from "react-router";
import Button from "../ui/Button";
import Input from "../ui/Input";
import useRegister from "../hooks/useRegister";
import ErrorMsg from "../ui/ErrorMsg";
import InputPassword from "../ui/InputPassword";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
        duration:1000
      })
    }
  }, [error])
  
  return (
    <div className="bg-gray-50 h-[100vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <h1 className="text-3xl text-center sm:mx-auto max-w-sm  md:max-w-md  lg:min-w-lg font-bold italic  text-gray-900">
        Register Page
      </h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:px-2 ">
        <div className="bg-white px-4 pb-4 pt-10 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow ">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                placeholder="Please Enter your FirstName"
                {...register("firstName")}
              />
              {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                placeholder="Please Enter your LastName"
                {...register("lastName")}
              />
              {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <Input
                placeholder="Please Enter your Email"
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
              <InputPassword
                placeholder="Please Enter your Password"
                {...register("password")}
              />
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
                placeholder="Repeat Enter your Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <ErrorMsg msg={errors.confirmPassword?.message} />
              )}
            </div>

            <Button
              type="submit"
              disabled={Object.keys(errors).length > 0 || loading || emailAvailabilityStatus === "Not Available"}
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
        </div>
      </div>
    </div>
  );
};

export default Register;
