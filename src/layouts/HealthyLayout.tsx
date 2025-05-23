import { Outlet } from "react-router";
import SideBar from "../components/HealthyProfile/SideBar";
import { GrMenu } from "react-icons/gr";

const HealthyLayout = () => {
  return (
    <div className="bg-[#f1f5f9] lg:flex  ">
      <div className=" bg-white  lg:hidden  pb-2 pt-3 px-6 flex justify-between">
        <label htmlFor="health-drawer">
          <GrMenu className="w-7 h-7 p-1    cursor-pointer" />
        </label>
        <img src="/images/logo.png" className="w-34" alt="" />
        <div />
      </div>
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default HealthyLayout;
