import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import actUpdateUser from "../../store/user/act/actUpdateUser";
import actDelProfileImage from "../../store/user/act/actDelProfileImage";
import Button from "../../ui/Button";

const DelProfileImageModal = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.auth);
  const onDeleteImage = () => {
    dispatch(actDelProfileImage())
      .unwrap()
      .then(() => {
        dispatch(
          actUpdateUser({
            firstName: user.firstName,
            lastName: user.lastName,
          })
        );
        toast.success("Profile Image Delete successfully");
      });
    closeModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(
      "DelProfileImageMod"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  return (
    <dialog
      id="DelProfileImageMod"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col items-center p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          <h3 className={`text-lg font-bold  text-red-500 `}>
            Delete Image Profile
          </h3>
          <p className={`py-4  text-gray-700 text-sm md:text-lg `}>
            Are you sure you want to delete Your Profile Image?
          </p>
          <div className="flex space-x-3 mt-2">
            <Button
              className=" bg-red-400 hover:bg-red-600"
              isLoading={loading}
              onClick={onDeleteImage}
            >
              Delete
            </Button>
            <Button
              className=" bg-gray-400 hover:bg-gray-600"
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

export default DelProfileImageModal;
