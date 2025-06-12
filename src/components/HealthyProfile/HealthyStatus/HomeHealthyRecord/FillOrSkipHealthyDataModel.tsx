import { BsHeartPulse } from "react-icons/bs";
import Button from "../../../../ui/Button";
import { closeModel, openModel } from "../../../../utils/modelsFuns";

const FillOrSkipHealthyDataModel = () => {
  return (
    <dialog
      id="FillOrSkipHealthyDataModel"
      className="modal fixed inset-0 flex justify-center items-start bg-black/50 z-50"
    >
      <div className="modal-box relative bg-white text-black mt-28 p-6 rounded-lg shadow-xl max-w-md w-full">
        {/* Close Button */}
        <button
          onClick={() => {
            closeModel("FillOrSkipHealthyDataModel");
          }}
          aria-label="Close"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        {/* Icon and Message */}
        <div className="flex flex-col items-center text-center">
          <BsHeartPulse className="h-15 w-15 text-blue-500 mb-4" />
          <h2 id="health-data-title" className="text-lg font-semibold mb-2">
            Complete Your Health Data
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            You haven't added your healthy data yet. Fill it now or skip?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-3 mt-6">
          <Button
            className="bg-gray-600 hover:bg-gray-700 "
            onClick={() => {
              closeModel("FillOrSkipHealthyDataModel");
            }}
          >
            Skip
          </Button>
          <Button
            onClick={() => {
              closeModel("FillOrSkipHealthyDataModel");
              openModel("NewHealthyModal");
            }}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Fill Data
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default FillOrSkipHealthyDataModel;
