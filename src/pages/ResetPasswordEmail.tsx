import actForgetPassword from "../store/auth/act/actForgetPassword";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Button from "../ui/Button";
import ErrorMsg from "../ui/ErrorMsg";

const ResetPasswordEmail = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);
  const onResendEmail = () => {
    const data = { email: user.email };
    dispatch(actForgetPassword(data));
  };
  return (
    <div className="min-h-screen    bg-gray-100 py-20">
      <div className="bg-white m-auto shadow-lg rounded-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          {!error ? (
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
          ) : (
            <div className="text-center  mb-5">
              <ErrorMsg msg={error} />
            </div>
          )}
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Check Your Email</h1>
        <p className="text-gray-600 mt-2">
          We've sent a Reset Password email to your inbox.
        </p>
        <Button isLoading={loading} className="mt-6" onClick={onResendEmail}>
          Resend Email
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordEmail;
