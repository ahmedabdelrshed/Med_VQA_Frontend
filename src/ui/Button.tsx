import { ButtonHTMLAttributes, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: "w-full" | "w-fit";
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  children,
  width = "w-full",
  className = "",
  isLoading,
  ...rest
}: IProps) => {
  const bgColor = className.includes("bg-") ? "" : "bg-blue-600";
  const textColor = className.includes("text-") ? "" : "text-white";

  return (
    <button
      disabled={isLoading}
      className={`${width} disabled:hover:bg-blue-400 disabled:cursor-not-allowed cursor-pointer hover:bg-blue-700 disabled:bg-blue-400 transition ${bgColor} p-2 rounded-lg font-medium ${textColor} ${className}`}
      {...rest}
    >
      {isLoading && <LoadingSpinner />}
      {isLoading ? <span className="ml-2">Loading ...</span> : children}
    </button>
  );
};
export default Button;
