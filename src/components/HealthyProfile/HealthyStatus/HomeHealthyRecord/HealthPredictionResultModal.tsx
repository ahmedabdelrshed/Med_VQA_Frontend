import  Lottie  from "lottie-react";
import Done from "../../../../Animations/Done.json"; // Adjust path as needed
import Button from "../../../../ui/Button";

const HealthPredictionResultModal = () => {
  const handleClose = () => {
    const modal = document.getElementById("HealthPredictionResultModal") as HTMLDialogElement;
    modal?.close();
  };

  return (
    <dialog
      id="HealthPredictionResultModal"
      open
      className="modal fixed inset-0 flex justify-center items-start bg-black/50 z-50"
    >
      <div className="modal-box relative bg-white text-black mt-28 p-6 rounded-lg shadow-xl max-w-md w-full">
        <button
          onClick={handleClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        {/* Animation and Message */}
        <div className="flex flex-col items-center text-center">
          <Lottie animationData={Done} className="w-40 mb-4" />
          <h2 className="text-lg font-semibold mb-2 text-blue-600">Prediction Complete</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Your health prediction is ready.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-1">
            You can view or update it anytime from your health profile.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-blue-400 hover:bg-blue-600" onClick={handleClose}>
            Okay
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default HealthPredictionResultModal;
