import { useGetChatsQuery } from "../../store/chats/chatApi";
import ChatTitle from "./ChatTitle";
import ChatTitleSkeleton from "./ChatTitleSkeleton";

const SideBarChats = () => {
  const { isLoading, data } = useGetChatsQuery();
  return (
    <div className="drawer lg:drawer-open  w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-300  text-base-content min-h-full w-60 px-3 ">
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
