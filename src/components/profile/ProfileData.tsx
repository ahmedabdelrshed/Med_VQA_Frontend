import Button from "../../ui/Button";
import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import profileSchema from "../../validations/profileSchema";
import { TUserUpdated } from "../../Types";
import ErrorMsg from "../../ui/ErrorMsg";
interface IProps {
  setUserUpdated: React.Dispatch<React.SetStateAction<TUserUpdated>>;
  firstName: string;
  lastName: string;
  loading: boolean;
  error: string | null;
  onUserUpdated: (userUpdated: TUserUpdated) => void;
}
const ProfileData = ({
  error,
  firstName,
  lastName,
  loading,
  onUserUpdated,
  setUserUpdated,
}: IProps) => {
  const {
    register,
      handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TUserUpdated>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName,
      lastName,
    },
  });
  const onSubmit: SubmitHandler<TUserUpdated> = (data) => {
    setUserUpdated((prev) => {
      const updatedUser = { ...prev, ...data };
      onUserUpdated(updatedUser);
      return updatedUser;
    });
    reset({ oldPassword: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg  m-auto mt-8 px-8 py-6 max-w-sm  md:max-w-md  lg:min-w-lg">
      {error && (
        <div className="text-center  mt-[-8px] mb-10">
          <ErrorMsg msg={error} />
        </div>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  flex-col space-y-2 md:flex-row md:space-x-4 mb-3">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <Input
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />}
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <Input
              placeholder="Last Name"
              {...register("lastName")}
            />
            {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />}
          </div>
        </div>
        <div>
          <label
            htmlFor="oldPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Old Password
          </label>
          <InputPassword
            placeholder="Old Password"
            {...register("oldPassword")}
          />
          {errors.oldPassword && <ErrorMsg msg={errors.oldPassword?.message} />}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <InputPassword
            placeholder="New Password"
            {...register("password")}
          />
          {errors.password && <ErrorMsg msg={errors.password?.message} />}
        </div>
        <div>
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <InputPassword
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <ErrorMsg msg={errors.confirmPassword?.message} />
          )}
        </div>
        <Button
          className="px-6 bg-blue-500 mb-3 hover:bg-blue-600 "
          type="submit"
          disabled={Object.keys(errors).length > 0 || loading}
          isLoading={loading}
        >
          Update my profile
        </Button>
      </form>
    </div>
  );
};

export default ProfileData;
