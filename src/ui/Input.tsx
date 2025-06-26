/* eslint-disable @typescript-eslint/no-empty-object-type */
import { forwardRef, InputHTMLAttributes, Ref } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <input
      ref={ref}
      autoComplete="off"
      className="mt-3 block w-full rounded-md border-[1.5px]
             border-gray-300 dark:border-gray-600
             bg-white dark:bg-gray-800
             text-gray-900 dark:text-white
             px-4 py-1.5 lg:py-2.5
             placeholder-gray-400 dark:placeholder-gray-500
             shadow-sm
             focus:outline-none focus:border-blue-500 focus:ring-blue-500
             lg:text-lg
             transition-colors duration-300"
      {...rest}
    />
  );
});

export default Input;
