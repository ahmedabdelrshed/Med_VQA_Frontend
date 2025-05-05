import { BsMenuButtonWide } from "react-icons/bs";
import {
  useCreateChatMutation,
  useGetChatsQuery,
} from "../../store/chats/chatApi";
import ChatTitle from "./ChatTitle";
import ChatTitleSkeleton from "./ChatTitleSkeleton";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SideBarChats = () => {
  const { isLoading, data } = useGetChatsQuery();
  const navigate = useNavigate();
  const [createChat] = useCreateChatMutation();
  const [open, setOpen] = useState(true);
  const [showOpenButton, setShowOpenButton] = useState(true);
  const handleClose = () => {
    setShowOpenButton(false);
    setOpen(false);
    setTimeout(() => {
      setShowOpenButton(true);
    }, 250);
  };
  const onCreateChat = () => {
    createChat().then((res) => {
      navigate(`/chats/chat/${res.data?.data._id}`);
    });
  };
  return (
    <>
      {showOpenButton && !open && (
        <div className="px-9 pt-6 pb-2 hidden  lg:block">
          <BsMenuButtonWide
            className="w-8 h-8 p-1  hover:bg-gray-400 hover:rounded-md  cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      )}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.4 }}
              className="drawer lg:drawer-open max-h-[60hv]  w-fit"
            >
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content"></div>
              <div className="drawer-side    ">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-gray-300 min-h-full text-base-content  w-60 px-3 ">
                  <div className="bg-gray-300 w-full  pb-2 pt-4 mb-5 px-6 flex justify-between  ">
                    <BsMenuButtonWide
                      className="w-8 h-8 p-1  hidden lg:block hover:bg-gray-400 hover:rounded-md  cursor-pointer"
                      onClick={handleClose}
                    />
                    <IoCreateOutline
                      onClick={onCreateChat}
                      className="w-8 h-8 p-1 ml-auto hover:bg-gray-400 hover:rounded-md  cursor-pointer"
                    />
                  </div>
                  <div className="h-[65vh] overflow-auto  over overflow-x-hidden">
                    {isLoading
                      ? Array.from({ length: 7 }, (_, index) => (
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
                  </div>
                  <div className="fixed bottom-20 lg:bottom-25 w-full px-3">
                    <div
                      className=" flex items-center space-x-14 px-5 w-full text-gray-600   cursor-pointer"
                      onClick={() => navigate("/profile")}
                    >
                      <CgProfile className="w-6 h-6   " />
                      <span className="xl:text-[18px]">Profile</span>
                    </div>
                  </div>
                  <div className="fixed bottom-8 lg:bottom-12 w-full px-3">
                    <div
                      className=" flex items-center space-x-14 px-5 w-full text-gray-600   cursor-pointer"
                      onClick={() => {
                        const modal = document.getElementById(
                          "logoutModal"
                        ) as HTMLDialogElement | null;
                        modal?.showModal();
                      }}
                    >
                      <CiLogout className="w-5 h-5 xl:w-6 xl:h-6   " />
                      <span className="xl:text-[18px]">Log out</span>
                    </div>
                  </div>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBarChats;
