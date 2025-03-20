import { Outlet, useNavigate } from "react-router";
import SideBarChats from "../components/chats/SideBarChats";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { useCreateChatMutation } from "../store/chats/chatApi";
import DelChatModal from "../components/Modals/DelChatModal";

const ChatPage = () => {
  const navigate = useNavigate();
  const [createChat] = useCreateChatMutation();
  const onCreateChat = () => {
    createChat().then((res) => {
      navigate(`/chats/chat/${res.data?.data._id}`);
    });
  };

  return (
    <div className="lg:flex max-h-screen">
      <div className=" bg-gray-300  lg:hidden  pb-4 pt-5 px-6 flex justify-between">
        <label htmlFor="my-drawer">
          <BsMenuButtonWide className="w-9 h-9 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer" />
        </label>
        <IoCreateOutline
          onClick={onCreateChat}
          className="w-10 h-10 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
        />
      </div>
      <div className="flex flex-col">
        <div className="bg-gray-300 w-full hidden pb-2 pt-9 px-6 lg:flex justify-between  ">
          <BsMenuButtonWide className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer" />
          <IoCreateOutline
            onClick={onCreateChat}
            className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
          />
        </div>
        <SideBarChats />
      </div>
      <div className=" p-5">
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
      <DelChatModal />
    </div>
  );
};

export default ChatPage;
