import { Outlet, useNavigate } from "react-router";
import SideBarChats from "../components/chats/SideBarChats";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { useCreateChatMutation } from "../store/chats/chatApi";

const ChatPage = () => {
  const navigate = useNavigate();
  const [createChat] = useCreateChatMutation();
  const onCreateChat = () => {
    createChat().then((res) => {
      navigate(`/chats/chat/${res.data?.data._id}`);
    });
  };
  return (
    <div className="flex max-h-screen">
      <div className="flex flex-col">
        <div className="bg-gray-300 w-full pb-2 pt-9 px-6 flex justify-between">
          <BsMenuButtonWide className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer" />
          <IoCreateOutline
            onClick={onCreateChat}
            className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
          />
        </div>
        <SideBarChats />
      </div>
      <div className=" p-5">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
