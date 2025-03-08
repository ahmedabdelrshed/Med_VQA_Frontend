import Button from "../../ui/Button";
import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";

const ProfileData = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg  m-auto mt-8 px-8 py-6 max-w-sm  md:max-w-md  lg:min-w-lg">
      <form className="space-y-3">
        <div className="flex  flex-col space-y-2 md:flex-row md:space-x-4 mb-3">
          <div className="w-full"> 
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <Input placeholder=" Enter your First Name" />
            {/* {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />} */}
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <Input placeholder=" Enter your Last Name" />
            {/* {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />} */}
          </div>
              </div>
              <div>
              <label
                htmlFor="old_password"
                className="block text-sm font-medium text-gray-700"
              >
               Old Password
              </label>
              <InputPassword
                placeholder="Please Enter your Old Password"
              
              />
              {/* {errors.password && <ErrorMsg msg={errors.password?.message} />} */}
              </div>
              <div>
              <label
                htmlFor="new_password"
                className="block text-sm font-medium text-gray-700"
              >
               New Password
              </label>
              <InputPassword
                placeholder="Please Enter your New Password"
              
              />
              {/* {errors.password && <ErrorMsg msg={errors.password?.message} />} */}
              </div>
              <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-gray-700"
              >
               Confirm Password
              </label>
              <InputPassword
                placeholder="Please Enter your Confirm Password"
              
              />
              {/* {errors.password && <ErrorMsg msg={errors.password?.message} />} */}
              </div>
              <Button
                  className="px-6 bg-indigo-500 mb-3 hover:bg-indigo-600 "
              type="submit"
            //   disabled={Object.keys(errors).length > 0 || loading}
            //   isLoading={loading}
            >
              Update my profile
            </Button>
      </form>
    </div>
  );
};

export default ProfileData;
