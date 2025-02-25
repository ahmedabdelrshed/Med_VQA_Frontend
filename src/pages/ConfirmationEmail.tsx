import Button from "../ui/Button";

const ConfirmationEmail = () => {
  return (
    <div className="min-h-screen    bg-gray-100 py-20">
      <div className="bg-white m-auto shadow-lg rounded-lg p-8 max-w-md text-center">
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

        <h1 className="text-2xl font-bold text-gray-800">Check Your Email</h1>
        <p className="text-gray-600 mt-2">
          We've sent a confirmation email to your inbox. Please verify your
          account.
        </p>
        <Button className="mt-6">Resend Email</Button>
      </div>
    </div>
  );
};

export default ConfirmationEmail;
