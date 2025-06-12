import  Lottie  from "lottie-react";
import Done from "../../../../Animations/Done.json"; // Adjust path as needed
import Button from "../../../../ui/Button";

const HealthPredictionResultModal = () => {
    const health_status = localStorage.getItem("health_status")
  const handleClose = () => {
    const modal = document.getElementById("HealthPredictionResultModal") as HTMLDialogElement;
    modal?.close();
  };

  return (
    <dialog
      id="HealthPredictionResultModal"
      
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
          <Lottie animationData={Done} className="w-40 mb-4" loop={false} />
          <p className="text-gray-700 text-sm md:text-base">
            Your health prediction is <span className="font-semibold text-blue-400">{health_status}</span>.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-1">
            You can view or update it anytime from your health profile.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Button className="bg-blue-500  hover:bg-blue-600" onClick={handleClose}>
            Close
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default HealthPredictionResultModal;
