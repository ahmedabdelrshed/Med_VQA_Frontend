import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import Cookies from "js-cookie";

const LogoutModel = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    setTimeout(() => {
      Cookies.remove("token");
      navigate("/");
    }, 1500);
    };

  const closeModal = () => {
    const modal = document.getElementById("logoutModal") as HTMLDialogElement | null;
    modal?.close();
  };
  return (
    <dialog
      id="logoutModal"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-gray-200 text-black mt-28 flex flex-col items-center p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          {/* <h3 className={`text-lg font-bold  text-red-500 `}>Delete Chat</h3> */}
          <p className={`py-4  text-gray-700 text-sm md:text-lg `}>
            Are you sure you want leave our App ?
          </p>
          <div className="flex space-x-5 mt-2">
            <Button
              className=" bg-red-500 hover:bg-red-600 disabled:bg-red-400"
              onClick={onLogout}
            >
              Logout
            </Button>
            <Button
              className=" bg-gray-500 hover:bg-gray-600"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default LogoutModel;
