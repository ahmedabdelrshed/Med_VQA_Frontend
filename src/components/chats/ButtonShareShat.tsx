import { IoShareOutline } from "react-icons/io5";
import useShareChat from "../../hooks/useShareChat";
import LoadingSpinner from "../../ui/LoadingSpinner";

const ButtonShareShat = () => {
  const { shareChatLoading, onShareChat } = useShareChat();

  return (
    <button
      className="absolute hidden xl:flex items-center space-x-3 top-10  right-25 font-semibold px-5 py-1 border-[1.7px] border-blue-500 rounded-full
  hover:bg-blue-500 hover:text-white duration-200 cursor-pointer disabled:cursor-not-allowed disabled:space-x-0
  "
      onClick={onShareChat}
      disabled={shareChatLoading}
    >
      {shareChatLoading && <LoadingSpinner />}
      {shareChatLoading ? (
        <span className="ml-2">Loading</span>
      ) : (
        <>
          {" "}
          <span>Share</span> <IoShareOutline />
        </>
      )}
    </button>
  );
};

export default ButtonShareShat;
