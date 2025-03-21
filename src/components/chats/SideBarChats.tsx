import { BsMenuButtonWide } from "react-icons/bs";
import {
  useCreateChatMutation,
  useGetChatsQuery,
} from "../../store/chats/chatApi";
import ChatTitle from "./ChatTitle";
import ChatTitleSkeleton from "./ChatTitleSkeleton";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const SideBarChats = () => {
  const { isLoading, data } = useGetChatsQuery();
  const navigate = useNavigate();
  const [createChat] = useCreateChatMutation();
  const onCreateChat = () => {
    createChat().then((res) => {
      navigate(`/chats/chat/${res.data?.data._id}`);
    });
  };
  return (
    <div className="drawer lg:drawer-open max-h-[60hv]  w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side    ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-300 min-h-full text-base-content  w-60 px-3 ">
          <div className="bg-gray-300 w-full  pb-2 pt-4 mb-5 px-6 flex justify-between  ">
            <BsMenuButtonWide className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer" />
            <IoCreateOutline
              onClick={onCreateChat}
              className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
            />
          </div>
          {isLoading
            ? Array.from({ length: 8 }, (_, index) => (
                <ChatTitleSkeleton key={index} />
              ))
            : data?.data?.map((chat) => {
                return (
                  <ChatTitle
                    chatId={chat._id}
                    chatTitle={chat.title}
                    key={chat._id}
                  />
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default SideBarChats;
