import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Button from "../ui/Button";
import actConfirmVerifyEmail from "../store/auth/act/actConfirmVerifyEmail";
import { useState } from "react";
import ErrorMsg from "../ui/ErrorMsg";

const ConfirmVerificationEmail = () => {
  const { token } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const { error, loading } = useAppSelector((state) => state.auth);
  const onVerifyEmail = async () => {
    await dispatch(actConfirmVerifyEmail({ token: token as string }))
      .unwrap()
      .then(() => {
        setSuccess(true);
      });
  };
  return (
    <div className="min-h-screen    bg-gray-100 py-20">
      <div className="bg-white m-auto shadow-lg rounded-lg p-8 max-w-sm md:max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Verify Your Email
        </h1>
        {error && (
          <div className="text-center mt-[-20px] mb-5">
            <ErrorMsg msg={error} />
          </div>
        )}
        {!success ? (
          <>
            <h1 className="text-xl font-bold text-gray-800 mb-5 ">
              Welcome From Our{" "}
              <span className="text-blue-600">Medical VQA</span>
            </h1>
            <p className="mt-2 text-gray-600 mb-6">
              Please Click the button below to confirm your email.
            </p>
            <Button onClick={onVerifyEmail} isLoading={loading}>
              Verify My Account
            </Button>
          </>
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
              Email Verification Successful 
            </h1>
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmVerificationEmail;
