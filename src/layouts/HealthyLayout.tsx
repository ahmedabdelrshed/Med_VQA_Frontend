import { Outlet } from "react-router";
import SideBar from "../components/HealthyProfile/SideBar";

const HealthyLayout = () => {
  return (
    <div className="bg-[#f1f5f9] flex  overflow-y-hidden">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default HealthyLayout;
