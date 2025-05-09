interface IProps {
  msg: string | undefined;
}

const ErrorMsg = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-600 font-semibold text-[12px] mb-[-10px]">
      {msg}
    </span>
  ) : null;
};

export default ErrorMsg;
