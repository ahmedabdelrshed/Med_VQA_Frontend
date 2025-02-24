/* eslint-disable @typescript-eslint/no-empty-object-type */
import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      autoComplete="false"
      className="mt-2 block w-full rounded-md border-[1.7px] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      {...rest}
    />
  );
});

export default Input;
