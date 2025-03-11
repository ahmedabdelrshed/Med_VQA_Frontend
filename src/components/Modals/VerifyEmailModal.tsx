import { IoWarning } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import actResendVerifyEmail from "../../store/auth/act/actResendVerifyEmail";
import Button from "../../ui/Button";

const VerifyEmailModal = () => {
  const dispatch = useAppDispatch();
  const { loading, user } = useAppSelector((state) => state.auth);
  const closeModal = () => {
    const modal = document.getElementById(
      "VerifyEmailModal"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  const onResendEmail = () => {
    dispatch(actResendVerifyEmail({ email: user.email }));
    closeModal();
  };
  return (
    <dialog
      id="VerifyEmailModal"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col items-center p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center">
          <IoWarning className="w-20 h-20 text-yellow-400" />
          <h3 className="font-bold text-lg mt-1">Verify Your Email</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-lg">
            Please check your email and verify your account.
          </p>
          <Button isLoading={loading} className="mt-8" onClick={onResendEmail}>
            Resend Verification Email
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default VerifyEmailModal;
