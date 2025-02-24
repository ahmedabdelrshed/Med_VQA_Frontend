import { Link } from "react-router";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register = () => {
  return (
    <div className="bg-gray-50 h-[100vh] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center sm:mx-auto sm:w-full sm:max-w-md font-bold italic  text-gray-900">
        Register Page
      </h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:px-2 ">
        <div className="bg-white px-4 pb-4 pt-10 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow ">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <Input placeholder="Please Enter your FirstName" />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input placeholder="Please Enter your LastName" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <Input placeholder="Please Enter your Email" />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <Input type="password" placeholder="Repeat Enter your Password" />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input type="password" placeholder="Please Enter your Password" />
            </div>

            <Button>Register</Button>
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
