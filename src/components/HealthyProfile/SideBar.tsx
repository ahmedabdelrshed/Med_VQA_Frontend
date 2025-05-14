import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrMenu } from "react-icons/gr";
import { GiHealingShield } from "react-icons/gi";
import { BsBarChart } from "react-icons/bs";
import CustomNavLink from "./CustomNavLink";
import BottomLinks from "./BottomLinks";
import { LuChartScatter } from "react-icons/lu";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [showOpenButton, setShowOpenButton] = useState(true);

  const handleClose = () => {
    setShowOpenButton(false);
    setOpen(false);
    setTimeout(() => {
      setShowOpenButton(true);
    }, 250);
  };

  return (
    <div className=" lg:h-screen bg-[#f1f5f9] ">
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
                  <CustomNavLink
                    to="/healthy-profile"
                    icon={GiHealingShield}
                    text="Healthy Profile"
                  />
                  <CustomNavLink
                    to="/healthy-profile/diabetes-history"
                    icon={BsBarChart}
                    text="Diabetes History"
                  />
                  <CustomNavLink
                    to="/healthy-profile/blood-pressure-history"
                    icon={LuChartScatter}
                    text="Blood Pressure "
                  />
                </div>
                <BottomLinks />
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
