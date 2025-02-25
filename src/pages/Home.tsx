import { GiSandsOfTime } from "react-icons/gi";
import Button from "../ui/Button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[100vh] p-3 flex flex-col justify-center items-center max-w-sm md:max-w-3xl m-auto">
      <h1 className="text-blue-500 mb-25 text-3xl md:text-5xl  font-bold">
        Welcome to MedVQA!
      </h1>
      <p className="text-gray-600 text-center">
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
  );
};

export default Home;
