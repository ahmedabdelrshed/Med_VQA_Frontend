interface IProps {
    msg: string | undefined;
  }
  
  const ErrorMsg = ({ msg }: IProps) => {
    return msg ? (
      <span className="block text-red-600 font-semibold text-sm mb-[-15px]">{msg}</span>
    ) : null;
  };
  
  export default ErrorMsg;