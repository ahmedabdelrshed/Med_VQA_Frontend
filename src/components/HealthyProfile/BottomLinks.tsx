import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { openModel } from "../../utils/modelsFuns";
import { CiLogout } from "react-icons/ci";

const BottomLinks = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default BottomLinks;
