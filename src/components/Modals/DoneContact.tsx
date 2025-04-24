import Lottie from "lottie-react";
import Done from "../../Animations/Done.json";
import Button from "../../ui/Button";
const DoneContact = () => {
  const closeModal = () => {
    const modal = document.getElementById(
      "doneContactMod"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  return (
    <dialog
      id="doneContactMod"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col items-center p-6 rounded-lg">
        <form method="dialog">
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button> */}
        </form>
        <div className="flex flex-col items-center">
          <Lottie animationData={Done} className="w-50"/>
          <h3 className="font-bold text-lg mt-1">Contact Form Submitted</h3>
          <p className="text-gray-600 mt-2 text-[11px]  md:text-lg">
            Thank you for reaching out! We will get back to you soon.
          </p>
          <Button width="w-fit" className="px-15 bg-gray-400 mt-8" onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default DoneContact;
