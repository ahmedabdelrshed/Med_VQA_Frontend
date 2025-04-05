import { useNavigate, useParams } from "react-router";
import useChangePassword from "../hooks/useChangePassword";
import Button from "../ui/Button";
import ErrorMsg from "../ui/ErrorMsg";
import InputPassword from "../ui/InputPassword";

const ChangePassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, onSubmit, errors, error, loading, success } =
    useChangePassword({ token: token as string });
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="bg-white m-auto shadow-lg rounded-lg p-8 max-w-sm md:max-w-md ">
        <h1 className="text-2xl font-bold mb-10 text-center text-gray-800">
          Change your Password
        </h1>
        {error && (
          <div className="text-center mt-[-20px] mb-5">
            <ErrorMsg msg={error} />
          </div>
        )}
        {!success ? (
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <InputPassword
                placeholder="Please Enter your New Password"
                {...register("password")}
              />
              {errors.password && <ErrorMsg msg={errors.password?.message} />}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <InputPassword
                placeholder="Repeat Enter your New Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <ErrorMsg msg={errors.confirmPassword?.message} />
              )}
            </div>
            <Button
              type="submit"
              disabled={Object.keys(errors).length > 0 || loading}
              isLoading={loading}
            >
              Change Password
            </Button>
          </form>
        ) : (
          <div>
            <div className="flex justify-center mb-4">
              <svg
                className="w-16 h-16 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M12 22a10 10 0 110-20 10 10 0 010 20z"
                ></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Password Change Successfully{" "}
            </h1>
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
