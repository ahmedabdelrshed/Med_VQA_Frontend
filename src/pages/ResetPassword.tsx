import Button from "../ui/Button";
import Input from "../ui/Input";

const ResetPassword = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-28 ">
      <div className="bg-white shadow-lg rounded-lg p-8 m-auto max-w-sm  md:max-w-md w-full">
        <h2 className="text-2xl mb-5 font-bold text-gray-800 text-center">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Enter your email, and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input placeholder="Please Enter your Email Address" />
          <Button className="mt-5"> Send Reset Link</Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
