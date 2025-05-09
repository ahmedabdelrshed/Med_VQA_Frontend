import useRegister from "../../hooks/useRegister";
import Button from "../../ui/Button";
import ErrorMsg from "../../ui/ErrorMsg";
import Input from "../../ui/Input";
import InputPassword from "../../ui/InputPassword";
import LabelInput from "../../ui/LabelInput";

const RegisterForm = () => {
  const {
    errors,
    handleSubmit,
    onSubmit,
    register,
    loading,
    emailOnBlurHandler,
    emailAvailabilityStatus,
  } = useRegister();
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row md:space-x-4  ">
        <div className="w-full mb-4 md:mb-0">
          <LabelInput inputName="firstName" label="First Name" />
          <Input {...register("firstName")} placeholder="First Name" />
          {errors.firstName && <ErrorMsg msg={errors.firstName?.message} />}
        </div>
        <div className="w-full ">
          <LabelInput inputName="lastName" label="Last Name" />
          <Input {...register("lastName")} placeholder="Last Name" />
          {errors.lastName && <ErrorMsg msg={errors.lastName?.message} />}
        </div>
      </div>
      <div>
        <LabelInput inputName="email" label="Email Address" />
        <Input
          placeholder="Email Address"
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

      <div className="relative">
        <LabelInput inputName="dateOfBirth" label="Date of Birth" />
        <Input type="date" width={"w-full"} {...register("DateOfBirth")} />
              {/* <MdOutlineDateRange className="absolute top-10 lg:hidden right-3" /> */}
        {errors.DateOfBirth && <ErrorMsg msg={errors.DateOfBirth?.message} />}
      </div>
      <div className="flex flex-wrap space-x-8 lg:space-x-25 my-4">
        <LabelInput inputName="gender" label="Gender" />

        <div className="flex space-x-6 lg:space-x-15">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="Male"
              className="accent-blue-500"
              {...register("gender")}
            />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              value="Female"
              className="accent-blue-500"
              {...register("gender")}
            />
            Female
          </label>
              </div>
              {errors.gender  && <ErrorMsg msg={errors.gender?.message} />}
      </div>
      <div>
        <LabelInput inputName="password" label="Password" />
        <InputPassword placeholder="Password" {...register("password")} />
        {errors.password && <ErrorMsg msg={errors.password?.message} />}
      </div>
      <div>
        <LabelInput inputName="confirmPassword" label="Repeat Password" />
        <InputPassword
          placeholder="Repeat Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorMsg msg={errors.confirmPassword?.message} />
        )}
      </div>

      <Button
        type="submit"
        className="mt-2"
        disabled={
          Object.keys(errors).length > 0 ||
          loading ||
          emailAvailabilityStatus === "Not Available"
        }
        isLoading={loading}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
