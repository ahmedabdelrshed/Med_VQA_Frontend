import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiLogout } from "react-icons/ci";
import { openModel } from "../../utils/openMode";
import { GrMenu } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { GiHealingShield } from "react-icons/gi";
import { BsBarChart } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router";

const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [showOpenButton, setShowOpenButton] = useState(true);

  const handleClose = () => {
    setShowOpenButton(false);
    setOpen(false);
    setTimeout(() => {
      setShowOpenButton(true);
    }, 250);
  };

  const navLinkBase =
    "flex items-center space-x-8 justify-center py-3 w-full text-gray-700 rounded-md transition-all duration-200";
  const activeHoverStyle = "bg-blue-100 text-blue-600";

  return (
    <>
      {showOpenButton && !open && (
        <div className="px-9 pt-6 pb-2 hidden lg:block">
          <GrMenu
            className="w-8 h-8 p-1 cursor-pointer text-gray-700 hover:text-blue-500"
            onClick={() => setOpen(true)}
          />
        </div>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.4 }}
            className="drawer lg:drawer-open bg-[#f8fafc] w-fit px-5 shadow-md border-r border-gray-200"
          >
            <input
              id="health-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content"></div>
            <div className="drawer-side">
              <label
                htmlFor="health-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-[#f8fafc] min-h-full text-base-content w-64 px-5 ">
                <div className="bg-[#f8fafc] w-full pb-4 pt-6 flex space-x-8 border-b border-gray-200">
                  <GrMenu
                    className="w-8 h-8 p-1 hidden lg:block cursor-pointer text-gray-700 hover:text-blue-500"
                    onClick={handleClose}
                  />
                  <img src="/images/logo.png" className="w-34 " alt="" />
                </div>
                <div className="mt-8 w-full space-y-10">
                  <NavLink
                    end
                    to="/healthy-profile"
                    className={({ isActive }: { isActive: boolean }) =>
                      `${navLinkBase} ${
                        isActive
                          ? activeHoverStyle
                          : "hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <GiHealingShield className="w-6 h-6 text-gray-500" />
                    <span className="xl:text-[18px]">Healthy Profile</span>
                  </NavLink>

                  <NavLink
                    to="/diabetes-history"
                    className={({ isActive }: { isActive: boolean }) =>
                      `${navLinkBase} ${
                        isActive
                          ? activeHoverStyle
                          : "hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                  >
                    <BsBarChart className="w-6 h-6 text-gray-500" />
                    <span className="xl:text-[18px]">Diabetes History</span>
                  </NavLink>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <div className="fixed bottom-20 lg:bottom-25 w-full ">
                    <div
                      className="flex items-center space-x-8 justify-center py-3 w-full text-gray-700 cursor-pointer hover:bg-blue-100 hover:text-blue-600 rounded-md transition-all duration-200"
                      onClick={() => navigate("/")}
                    >
                      <IoHomeOutline className="w-6 h-6 text-gray-500" />
                      <span className="xl:text-[18px]">Home page</span>
                    </div>
                  </div>
                  <div className="fixed bottom-8 lg:bottom-12 w-full ">
                    <div
                      className="flex items-center space-x-15 justify-center py-3 w-full text-gray-700 cursor-pointer hover:bg-red-100 hover:text-red-600 rounded-md transition-all duration-200"
                      onClick={() => openModel("logoutModal")}
                    >
                      <CiLogout className="w-5 h-5 xl:w-6 xl:h-6 text-gray-500" />
                      <span className="xl:text-[18px]">Log out</span>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
