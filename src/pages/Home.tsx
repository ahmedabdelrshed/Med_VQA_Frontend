import { GiSandsOfTime } from "react-icons/gi";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "../store/hooks";
import { actLogout } from "../store/auth/authSlice";
import Cookies from "js-cookie";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");
  const onLogout = () => {
    dispatch(actLogout());
    navigate("/login");
  };
  return (
    <div className="bg-[#1d232a]">
      <div className=" h-[100vh] p-3 flex flex-col justify-center  items-center max-w-sm md:max-w-3xl  m-auto">
      {token && (
        <div className="mb-36 flex justify-between items-center w-full">
          <Button width="w-fit" className="px-4 ">
            <Link to={"/profile"}> Profile</Link>
          </Button>
          <Button
            width="w-fit"
            className="px-4 bg-gray-500 hover:bg-gray-600"
            onClick={onLogout}
          >
            Log out
          </Button>
        </div>
      )}
      <h1 className="text-blue-500 mb-10 text-3xl md:text-5xl  font-bold">
        Welcome to MedVQA!
      </h1>
      <p className="text-gray-300 text-center">
        MedVQA is a web application that allows you to upload an image of a
        medical scan and get a prediction of the diagnosis.
      </p>
      <GiSandsOfTime className="mt-10 mb-7 w-20 h-20 text-blue-400" />
      <Button
        width="w-fit"
        className="px-4 bg-indigo-500"
        onClick={() => navigate("/login")}
      >
        Get Started
      </Button>
    </div>
    </div>
  );
};

export default Home;
