/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { forwardRef, InputHTMLAttributes, Ref } from "react";
import Input from "./Input";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = forwardRef(
  ({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative">
        <Input ref={ref} type={showPassword ? "text" : "password"} {...rest} />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}{" "}
        </span>
      </div>
    );
  }
);

export default InputPassword;
